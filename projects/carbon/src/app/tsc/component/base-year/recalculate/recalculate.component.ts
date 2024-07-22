import { Component, OnInit, ViewChild } from '@angular/core';

import { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';

import { startWith } from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';

import { ActivatedRoute } from '@angular/router';

import { BarChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { BaseYearController } from '@carbon/controller/base-year.controller';
import { TimelineController } from '@carbon/controller/timeline.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// tsc-library


const defaultPageIndex = 1;
const defaultPageSize = 100;

@Component({
    selector: 'app-recalculate',
    templateUrl: './recalculate.component.html',
    styleUrls: ['./recalculate.component.scss']
})
export class RecalculateComponent implements OnInit {
    rootOrgID: any;

    baseYearKeyID: string;
    baseYearRouteKey: string = 'ghg';

    canRecalculate = false;

    emissionDiff: any[];
    significantThresholdPct = 1;

    timeline: any[] = [];
    totalCount: number = 0;

    baseYearType: string;
    isBaseYearExist: boolean = true;
    isSBTiBaseYear: boolean = false;
    isRecalculationAvailable: boolean = true;

    data: any[] = [];
    max: number = 1;
    maxBars: number = 0;
    approach = ['Loading'];

    options: EChartsOption;
    optionsJson: EChartsOption = {
        grid: {
            left: '5%', // Adjust the left margin to provide more space for y-axis labels
            right: '10%',
            containLabel: true,
        },
        xAxis: {
            max: this.max,
        },
        yAxis: {
            type: 'category',
            data: this.approach,
            inverse: true,
            animationDuration: 500,
            animationDurationUpdate: 500,
            max: this.maxBars // only the largest 3 bars will be displayed
        },
        series: [
            {
                label: {
                    show: true, // Show the bar labels
                    position: 'right', // You can adjust the position as needed
                    color: 'black', // You can set the label color
                    valueAnimation: true
                },
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: this.data,
                barWidth: 25, // Set the custom bar width
                itemStyle: {
                    color: (params: any) => {
                        const value = params.value as number;
                        const colorStops = this.generateColorStops(value);

                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: colorStops
                        };
                    }
                },
                markLine: {
                    symbol: 'none', // No symbol on the line
                    silent: false,
                    data: [
                        {
                            xAxis: this.significantThresholdPct, // Specify the y-axis value for the line
                            lineStyle: {
                                type: 'solid',
                                color: '#508D69', // Line color
                                width: 1 // Line width
                            },
                            label: {
                                show: true,
                                position: 'start', // Label position
                                formatter: `Significance Threshold ${this.significantThresholdPct}%` // Label text
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    position: 'end', // Label position
                                    formatter: `${this.significantThresholdPct}%`, // Label below the line on hover
                                },
                            },
                        }
                    ]
                }
            }
        ],
        legend: { show: false },
        animationDuration: 1500,
        animationDurationUpdate: 5000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private baseYearController: BaseYearController,
        private timelineController: TimelineController,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
    }

    ngAfterViewInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.baseYearKeyID = data['base_year'];
            this.isSBTiBaseYear = (this.baseYearKeyID == BaseYearEnum.SBTI_BASE_YEAR);

            this.baseYearRouteKey = (this.isSBTiBaseYear ? 'sbti' : 'ghg');
            this.baseYearType = (this.isSBTiBaseYear ? 'SBTi' : 'GHG');

            this.getBaseYearByType();
        });
    }

    private initializeChart(): void {
        this.options = this.getOptionData();
    }

    getBaseYearByType() {
        this.baseYearController.getBaseYearByType(this.rootOrgID, this.baseYearKeyID)
            .subscribe((response) => {
                if (response['baseYear']) {
                    this.significantThresholdPct = response['significanceThreshold'];

                    if (this.isSBTiBaseYear) {
                        this.isRecalculationAvailable = response['useTSCEmission'];
                    }
                    this.initializeChart();

                    if (this.isRecalculationAvailable) {
                        this.getRecalculationPct();
                        this.paginator.page.pipe(startWith({})).subscribe(() => {
                            this.getTimeline(this.paginator.pageIndex + 1, this.paginator.pageSize);
                        });
                    }
                } else {
                    this.isBaseYearExist = false;
                }
            })
    }

    getRecalculationPct() {
        this.baseYearController.getBaseYearEmissionDiff(this.rootOrgID, this.baseYearKeyID)
            .subscribe((difference: any) => {
                this.emissionDiff = difference;

                this.data = this.emissionDiff.map(ed => ed['emissionDiffPct']);
                this.approach = this.emissionDiff.map(ed => ed['consolidationApproach']['name']);
                this.maxBars = this.emissionDiff.length - 1;
                if (this.data.every((val, i, arr) => val === arr[0])) {
                    this.maxBars = 0;
                    this.data = [this.data[0]];
                    this.approach = ['All consolidation approaches'];
                }

                this.canRecalculate = this.emissionDiff.some(ed => ed['emissionDiffPct'] > this.significantThresholdPct);
                this.max = this.canRecalculate ? null : this.significantThresholdPct;

                this.options = this.getOptionData();
            })
    }

    getOptionData(): EChartsOption {
        this.optionsJson = {
            grid: {
                left: '5%', // Adjust the left margin to provide more space for y-axis labels
                right: '10%',
                containLabel: true,
            },
            xAxis: {
                max: this.max,
            },
            yAxis: {
                type: 'category',
                data: this.approach,
                inverse: true,
                animationDuration: 500,
                animationDurationUpdate: 500,
                max: this.maxBars // only the largest 3 bars will be displayed
            }
        };
        this.optionsJson.series = [
            {
                label: {
                    show: true, // Show the bar labels
                    position: 'right', // You can adjust the position as needed
                    color: 'black', // You can set the label color
                    valueAnimation: true
                },
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: this.data,
                barWidth: 25, // Set the custom bar width
                itemStyle: {
                    color: (params: any) => {
                        const value = params.value as number;
                        const colorStops = this.generateColorStops(value);

                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: colorStops
                        };
                    }
                },
                markLine: {
                    symbol: 'none', // No symbol on the line
                    silent: false,
                    data: [
                        {
                            xAxis: this.significantThresholdPct, // Specify the y-axis value for the line
                            lineStyle: {
                                type: 'solid',
                                color: '#508D69', // Line color
                                width: 1 // Line width
                            },
                            label: {
                                show: true,
                                position: 'start', // Label position
                                formatter: `Significance Threshold ${this.significantThresholdPct}%` // Label text
                            },
                        }
                    ]
                }
            }
        ]

        return this.optionsJson;
    }

    getTimeline(pageNo, pageSize) {
        this.timelineController.getTimeline(this.rootOrgID, this.baseYearKeyID, pageNo, pageSize)
            .subscribe((difference: any) => {
                this.timeline = difference['records'];
                this.totalCount = difference['totalCount'];
            })
    }

    recalculateBaseYearEmission() {
        this.baseYearController.recalculateBaseYearEmission(this.rootOrgID, this.baseYearKeyID)
            .subscribe((res) => {
                this.getRecalculationPct();

                this.paginator.pageSize = defaultPageSize;
                this.paginator.pageIndex = defaultPageIndex;
                this.getTimeline(this.paginator.pageIndex, this.paginator.pageSize);
            });
    }

    private generateColorStops(value: number): any[] {
        if (value > 0) {
            return [
                { offset: 0, color: '#DC143C' },
                { offset: 1, color: '#800000' }
            ];
            // } else if (value <= 7 && value > 5) {
            //     return [
            //         { offset: 0, color: '#FFFF66' },
            //         { offset: 1, color: '#FFFF00' }
            //     ];
        } else {
            return [
                { offset: 1, color: '#54c454' },
                { offset: 0.5, color: '#228B22' },
                { offset: 0, color: '#006400' }
            ];
        }
    }

}
