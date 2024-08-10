import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { EChartsOption } from 'echarts';

import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartViewStateEnum } from '../../enum/ehart.enum';

import { ChartTitleM } from '../../model/chart.model';
import { DoughnutChartM } from '../../model/doughnut.model';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-doughnut',
    templateUrl: './doughnut.component.html',
    styles: [
    ]
})

export class DoughnutComponent implements OnInit {
    @Input()
    viewStateInp: ChartViewStateEnum;

    @Input()
    chartTitleInp: ChartTitleM;

    @Input()
    dataInp: DoughnutChartM;

    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: DoughnutChartM;
    dataOption: EChartsOption;
    noDataOption: any;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.viewStateInp && this.viewStateInp) {
            this.viewState = this.viewStateInp;
        }

        if (changes.chartTitleInp && this.chartTitleInp) {
            this.chartTitle = this.chartTitleInp;
        }

        if (changes.dataInp && this.dataInp) {
            this.chartData = this.dataInp;
        }

        this.noDataOption = {
            title: {
                text: this.chartTitle.name,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };

        this.checkData();
    }

    checkData() {
        if (this.viewState == ChartViewStateEnum.LOADING) {
            this.dataOption = LOADING_GRAPHIC;
        } else if (this.viewState == ChartViewStateEnum.HAS_DATA) {
            this.drawChart();
        } else if (this.viewState == ChartViewStateEnum.NO_DATA) {
            this.dataOption = this.noDataOption;
        }
    }

    drawChart() {
        this.dataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.chartData.showDataView, readOnly: true },
                    restore: { show: this.chartData.showRestore },
                    saveAsImage: { show: this.chartData.showDownloadImage },
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params.data.name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params.data.value != null ? (params.data.value) + ' ' + params.data.unit.code : COMMON_CONSTANT.HYPHEN) + '</span></b>';
                    return tooltip;
                }
            },
            title: {
                show: true,
                text: `${this.chartTitle.name}`,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            legend: {
                bottom: '1%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.chartData.metaData,
                }
            ]
        }
    }

}