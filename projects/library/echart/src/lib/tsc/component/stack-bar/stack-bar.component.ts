import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { EChartsOption } from 'echarts';

import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartViewStateEnum } from '../../enum/ehart.enum';

import { ChartTitleM } from '../../model/chart.model';
import { StackBarChartM } from '../../model/stack-bar.model';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-stack-bar',
    templateUrl: './stack-bar.component.html',
    styles: [
    ]
})
export class StackBarComponent implements OnInit {

    @Input()
    viewStateInp: ChartViewStateEnum;

    @Input()
    chartTitleInp: ChartTitleM;

    @Input()
    dataInp: StackBarChartM;

    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: StackBarChartM;
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
        let seriesData = [];

        this.chartData.metaData.forEach(item => {
            item.barData.forEach(bar => {
                let seriesIndex = seriesData.findIndex(series => series.name == bar.name);
                if (seriesIndex == -1) {
                    seriesData.push({
                        name: bar.name,
                        type: 'bar',
                        stack: 'ad',
                        data: []
                    });
                    seriesIndex = seriesData.length - 1;
                }
                seriesData[seriesIndex].data.push(bar.value);
            });
        });

        let chartData = this.chartData;
        let tooltipHeaderLabel = this.chartData.tooltipHeaderLabel;
        let totalDataLabel = this.chartData.totalDataLabel;
        let totalDataValue = this.chartData.metaData.map(item => item.totalData.value);
        let totalDataUnit = this.chartData.metaData.map(item => item.totalData.unitCode);

        this.dataOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {

                    const dataIndex = params[0].dataIndex;

                    let tooltip = '';

                    params.forEach(function (param) {
                        tooltip += '<b><span class="text-primary">' + param.name + '</span></b><br />';
                    });

                    if (tooltipHeaderLabel.trim() != '') {
                        tooltip += '<b style="font-size: 18px;">' + tooltipHeaderLabel + '</b><br />';
                    }
                    tooltip += totalDataLabel + ': <b><span style="float:right; margin-left:15px;">' + (totalDataValue[dataIndex] != null ? (totalDataValue[dataIndex]) + ' ' + totalDataUnit[dataIndex] : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';

                    params.forEach(function (param) {
                        const barData = chartData.metaData[param.seriesIndex].barData.find(bar => bar.name == param.seriesName);
                        const unit = barData ? barData.unit.code : '';

                        tooltip += param.seriesName + ': <b><span style="float:right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
                    });
                    return tooltip;
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: this.chartData.showDataView, readOnly: true },
                    magicType: { show: this.chartData.showMagicType, type: ['line'] },
                    restore: { show: this.chartData.showRestore },
                    saveAsImage: { show: this.chartData.showDownloadImage },
                }
            },
            legend: {},
            grid: {
                top: '10%',
                left: '7%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            title: {
                show: true,
                text: `${this.chartTitle.name}`,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            xAxis: {
                type: 'category',
                data: this.chartData.metaData.map(item => item.xAxisSeries),
                name: this.chartData.xAxisLabel,
                nameLocation: 'middle',
                nameGap: this.chartData.xAxisNameGap
            },
            yAxis: {
                type: 'value',
                name: this.chartData.yAxisLabel,
                nameLocation: 'middle',
                nameGap: this.chartData.yAxisNameGap
            },
            series: seriesData
        };
    }

}
