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
    selector: 'app-horizontal-bar-chart',
    templateUrl: './horizontal-bar-chart.component.html',
    styles: [
    ]
})
export class HorizontalBarChartComponent implements OnInit {
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
                // axisPointer: {
                //     type: 'line',
                // },
                formatter: '{c} ' + this.chartData.uomName,
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                },
                name: this.chartMetaData.xAxisName,
                nameTextStyle: {
                    align: 'right',
                    verticalAlign: 'top',
                    padding: [30, 0, 0, 0],
                },
            },
            yAxis: {
                type: 'category',
                data: this.chartData.data.map(m => ({
                    value: m.name,
                })),
                axisLabel: {
                    show: false,
                },
                name: this.chartMetaData.yAxisName,
                nameTextStyle: {
                    align: 'right',
                    verticalAlign: 'bottom',
                    padding: [30, 0, 0, 0],
                },
            },
            series: [
                {
                    data: this.chartData.data.map(m => ({
                        value: m.value
                    })),
                    type: 'bar',
                    colorBy: 'data',
                    label: {
                        position: [5, -11],
                        formatter: '{b}',
                        show: true,
                    },
                    barMaxWidth: 25,
                    barCategoryGap: 15,
                }
            ]
        }
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
        HorizontalBarChartComponent,
    ],
    declarations: [
        HorizontalBarChartComponent,
    ]
})

export class HorizontalBarChartModule { }
