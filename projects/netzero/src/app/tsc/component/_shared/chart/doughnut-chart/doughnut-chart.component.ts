import { Component, OnInit, NgModule, Input } from '@angular/core';

import { EChartsOption } from 'echarts';

// tsc-library
import { 
    LOADING_GRAPHIC, 
    NO_DATA_GRAPHIC 
} from '@library/echart'; 
// /tsc-library/


import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
    selector: 'app-doughnut-chart',
    templateUrl: './doughnut-chart.component.html',
    styles: [
    ]
})

export class DoughnutChartComponent implements OnInit {
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
                // text: this.chartMetaData.title,
                text: `${ this.chartMetaData.title } (${ this.chartData.uomName })`,
                textStyle: {
                    color: this.chartMetaData.titleColor
                },
                padding: [7, 0, 0, 20],
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '1%',
                left: 'center'
            },
            series: [
                {
                    name: this.chartMetaData.seriesName,
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.chartData.data.map(m => ({
                        name: m.name,
                        value: m.value,
                    })),
                    tooltip: {
                        valueFormatter: (value) => {
                            return value + ' ' + this.chartData.uomName;
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
        DoughnutChartComponent,
    ],
    declarations: [
        DoughnutChartComponent
    ],
})

export class DoughnutChartModule { }
