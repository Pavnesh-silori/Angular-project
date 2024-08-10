import { Component, Input, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

import { ChartM } from '../../model/chart.model';
import { LOADING_GRAPHIC } from '../../constant/chart.constant';

import { ChartService } from '../../../chart.service';

@Component({
    selector: 'lib-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: []
})
export class BarChartComponent implements OnInit {

    @Input() renderFlag: string = 'LOADING';
    @Input() chartData: ChartM;

    chartDataOption: EChartsOption;
    noDataOption;

    chartDataValue: any[] = [];

    xAxisHeaderData: any;
    yAxisHeaderData: any;
    showChartData: any;
    chartMetaData: any;;

    constructor(
        private chartService: ChartService
    ) { }

    ngOnInit(): void {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.xAxisHeaderData = this.chartData.xAxis;
        this.yAxisHeaderData = this.chartData.yAxis;
        this.showChartData = this.chartData.toolbox;
        this.chartDataCheck();
    }

    ngOnChanges() {
        this.chartDataValue = this.chartData.data;
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
                    dataView: { show: this.showChartData.showDataView, readOnly: true },
                    magicType: { show: this.showChartData.lineChartView, type: ['line'] },
                    restore: { show: this.showChartData.restoreGraph },
                    saveAsImage: { show: this.showChartData.saveImage }
                }
            },
            title: {
                show: true,
                text: `${this.chartData.title.name ?? ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? (this.chartData.title.color ?? 'black') : '',
                },

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += params[0].axisValue + '<br />';

                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' +
                        ((params[0].value != null ? params[0].value : '') +
                            (params[0].data.unit != null ? ' ' + params[0].data.unit : '')) + '</span></b>';
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
            xAxis: {
                type: 'category',
                name: this.xAxisHeaderData.label,
                data: this.chartDataValue.map(m => ({
                    value: m.name,
                })),
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                name: this.yAxisHeaderData.label,
                nameLocation: this.yAxisHeaderData.position ?? 'middle',
                nameGap: 70
            },
            series: [
                {
                    data: this.chartDataValue.map(m => ({
                        value: m.value,
                        unit: m.unit.name
                    })),
                    type: 'bar',
                    barWidth: '40%',
                    label: {
                        show: true,
                        position: 'top'
                    }
                }
            ]
        }
    }
}
