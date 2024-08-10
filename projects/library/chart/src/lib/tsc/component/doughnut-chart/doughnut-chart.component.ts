import { Component, Input, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';

import { ChartM } from '../../model/chart.model';
import { LOADING_GRAPHIC } from '../../constant/chart.constant';

import { ChartService } from '../../../chart.service';

@Component({
    selector: 'lib-doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styleUrls: []
})

export class DoughnutChartComponent implements OnInit {

    @Input() renderFlag: string = 'LOADING';
    @Input() chartData: ChartM;

    chartDataOption: EChartsOption;
    noDataOption;

    constructor(
        private chartService: ChartService
    ) {
    }

    ngOnInit(): void {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.chartDataCheck();
    }


    ngOnChanges() {
        console.log(this.chartData, "ChartData", this.renderFlag)
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
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    console.log(params, "ParamsData")
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params.data.name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' +
                        ((params.data.value != null ? params.data.value : '') +
                            (params.data.unit != null ? ' ' + params.data.unit : '')) + '</span></b>';
                    return tooltip;
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                show: true,
                text: `${this.chartData.title.name ?? ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? (this.chartData.title.color != null ? this.chartData.title.color : 'Black') : ''
                },

            },
            legend: {
                top: this.chartData.legend.top ?? '5px',
                bottom: this.chartData.legend.bottom ?? '0',
                left: this.chartData.legend.left ?? '0',
                right: this.chartData.legend.right ?? '0'

            },
            series: [
                {
                    name: this.chartData.title.name,
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: 40,
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: this.chartData.data.map(m => ({
                        name: m.name,
                        value: m.value,
                        unit: m.unit.name
                    })),
                },
            ]
        };
    }
}