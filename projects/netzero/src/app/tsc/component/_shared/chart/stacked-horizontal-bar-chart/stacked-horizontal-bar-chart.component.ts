import { Component, NgModule, OnInit, Input } from '@angular/core';

import { EChartsOption } from 'echarts';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';

import { 
    LOADING_GRAPHIC, 
    NO_DATA_GRAPHIC 
} from '@library/echart'; 
// /tsc-library/


import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
    selector: 'app-stacked-horizontal-bar-chart',
    templateUrl: './stacked-horizontal-bar-chart.component.html',
    styles: [
    ]
})

export class StackedHorizontalBarChartComponent implements OnInit {
    @Input()
    renderFlag: string = 'LOADING';

    @Input()
    chartData: any;

    @Input()
    chartMetaData: any;

    chartDataOption: EChartsOption;
    noDataOption;

    constructor() { }

    ngOnInit(): void {
        this.noDataOption = {
            title: { 
                text: this.chartMetaData.title,
                textStyle: {
                    color: this.chartMetaData.titleColor
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };

        this.chartDataCheck();
    }

    ngOnChanges() {
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
            color: this.chartMetaData.color,
            toolbox: {
                feature: {
                    // dataView: { show: true, readOnly: true },
                    magicType: { show: true, type: ['line'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                show: true,
                text: `${ this.chartMetaData.title } (${ this.chartData.uomName })`,
                textStyle: {
                    color: this.chartMetaData.titleColor
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
                bottom: '1%',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: this.chartData.data.map(m => ({
                    value: m.duration,
                })),
                name: this.chartMetaData.xAxisName,
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
            series: [
                {
                    name: 'Scope 1',
                    type: 'bar',
                    stack: ' total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: this.chartData.data.map(m => ({
                        value: m.scope1,
                    })),
                    tooltip: {
                        valueFormatter: (value) => {
                            return value == null ? COMMON_CONSTANT.NO_DATA : value + ' ' + this.chartData.uomName;
                        }
                    },
                },
                {
                    name: 'Scope 2',
                    type: 'bar',
                    stack: ' total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: this.chartData.data.map(m => ({
                        value: m.scope2,
                    })),
                    tooltip: {
                        valueFormatter: (value) => {
                            return value == null ? COMMON_CONSTANT.NO_DATA : value + ' ' + this.chartData.uomName;
                        }
                    },
                },
                {
                    name: 'Scope 3',
                    type: 'bar',
                    stack: ' total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: this.chartData.data.map(m => ({
                        value: m.scope3,
                    })),
                    tooltip: {
                        valueFormatter: (value) => {
                            return value == null ? COMMON_CONSTANT.NO_DATA : value + ' ' + this.chartData.uomName;
                        }
                    },
                }
            ]
        };
    }
}


@NgModule({
    imports: [
        CommonModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
    ],
    exports: [
        StackedHorizontalBarChartComponent,
    ],
    declarations: [
        StackedHorizontalBarChartComponent,
    ]
})

export class StackedHorizontalBarChartModule { }
