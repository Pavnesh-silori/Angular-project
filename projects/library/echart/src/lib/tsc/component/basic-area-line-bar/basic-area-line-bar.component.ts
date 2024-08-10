import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { EChartsOption } from 'echarts';

import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartTypeEnum, ChartViewStateEnum } from '../../enum/ehart.enum';

import { ChartTitleM } from '../../model/chart.model';
import { BasicAreaLineBarChartM } from '../../model/basic-area-line-bar.model';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-basic-area-line-bar',
    templateUrl: './basic-area-line-bar.component.html',
    styles: [
    ]
})
export class BasicAreaLineBarComponent implements OnInit {
    @Input()
    chartTypeInp: ChartTypeEnum;

    @Input()
    viewStateInp: ChartViewStateEnum;

    @Input()
    chartTitleInp: ChartTitleM;

    @Input()
    dataInp: BasicAreaLineBarChartM;

    chartType: ChartTypeEnum = ChartTypeEnum.BASIC_LINE_CHART;
    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: BasicAreaLineBarChartM;
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

        if (changes.chartTypeInp && this.chartTypeInp) {
            this.chartType = this.chartTypeInp;
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
        const unit = this.chartData.unit.code;

        this.dataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.chartData.showDataView, readOnly: true },
                    magicType: { show: this.chartData.showMagicType, type: ['line', 'bar'] },
                    restore: { show: this.chartData.showRestore },
                    saveAsImage: { show: this.chartData.showDownloadImage },
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params[0].name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params[0].value != null ? (params[0].value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b>';
                    return tooltip;
                }
            },
            grid: {
                top: '10%',
                left: '7%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            dataZoom: [
                {
                    type: 'slider',
                    filterMode: 'none',
                    show: this.chartData.showDataZoomSlider
                },
                {
                    type: 'inside',
                    filterMode: 'none',
                    show: this.chartData.showDataZoomSlider
                }
            ],
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
                boundaryGap: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                data: this.chartData.metaData.map(item => item.name),
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
            series: [
                {
                    barWidth: '40%',
                    label: {
                        show: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                        position: 'top'
                    },
                    data: this.chartData.metaData.map(item => item.value),
                    type: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? 'bar' : 'line',
                    areaStyle: this.chartType == ChartTypeEnum.BASIC_AREA_CHART ? {} : null,
                    markLine: {
                        data: this.chartData?.markLine?.map(item => ({
                            lineStyle: {
                                type: 'dashed',
                                color: `${item.color}`,
                            },
                            label: {
                                formatter: `${item.label} : ${item.value}`,
                                position: 'middle',
                                offset: [0, 5]
                            },
                            yAxis: item.value
                        }))
                    },
                }
            ]
        }
    }

}
