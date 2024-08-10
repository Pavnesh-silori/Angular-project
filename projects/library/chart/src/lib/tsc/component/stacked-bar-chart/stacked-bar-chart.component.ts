import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { EChartsOption } from 'echarts';

import { LOADING_GRAPHIC } from '../../constant/chart.constant';


import { commonConstant } from '../../constant/common.constant';

import { ChartService } from '../../../chart.service';
@Component({
    selector: 'lib-stacked-bar-chart',
    templateUrl: './stacked-bar-chart.component.html',
    styles: []
})
export class StackedBarChartComponent implements OnInit {

    @Input() renderFlag: string = 'LOADING';

    @Input() chartData: any;

    stackedData: any;


    showChartData: any;
    chartMetaData: any;

    chartDataOption: EChartsOption;
    noDataOption;

    showData: any[] = [];
    titleData: any;
    showStackedData: any = [];

    commonConstant = commonConstant;
    constructor(
        private chartService: ChartService
    ) { }

    ngOnInit(): void {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.chartDataCheck();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.showStackedData = [];
        this.showChartData = this.chartData.toolbox;
        this.stackedData = this.chartData.data.data;

        this.titleData = this.chartData.data.vehicles;
        if (this.stackedData) {
            this.stackedData.forEach((res: any) => {
                if (res.data && Object.keys(res.data).length > 0) {
                    this.showStackedData.push(res.data);
                }
            });
        }

        if (this.showStackedData.length <= 0) {
            this.renderFlag = 'NO_DATA';
        }
        this.chartDataCheck();
    }

    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        } else if (this.renderFlag == 'DATA') {
            this.drawChart();
        } else {
            this.chartDataOption = this.noDataOption;
        }
    }

    drawChart() {
        this.chartDataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.showChartData.feature.showDataView, readOnly: true },
                    magicType: { show: this.showChartData.feature.lineChartView, type: ['line'] },
                    restore: { show: this.showChartData.feature.restoreGraph },
                    saveAsImage: { show: this.showChartData.feature.saveImage }
                }
            },
            grid: {
                top: 30,
                bottom: 80,
                left: 50,
                right: 30,
            },
            title: {
                show: true,
                text: `${this.chartData.title.name ?? ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? (this.chartData.title.color ?? 'black') : '',
                },
                padding: [7, 0, 0, 20],
            },

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line'
                },
            },
            legend: {
                top: this.chartData.legend.top ?? '5px',
                bottom: this.chartData.legend.bottom ?? '0px',
                left: this.chartData.legend.left ?? '0px',
                right: this.chartData.legend.right ?? '0px'

            },
            xAxis: {
                type: 'category',
                data: this.stackedData.map(m => ({
                    value: m.duration,
                })),
                nameTextStyle: {
                    align: 'right',
                    verticalAlign: 'top',
                    padding: [30, 0, 0, 0],
                },
            },
            yAxis: {
                type: 'value',
                min: 0,
            },
            series: this.titleData.map(res => ({
                name: res,
                type: 'bar',
                stack: 'ad',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.showStackedData.map(m => ({
                    value: m[res],
                })),
                tooltip: {
                    valueFormatter: (value) => {
                        return value == null ? commonConstant.NO_DATA : value;
                    }
                },
            })),
        };
    }
}
