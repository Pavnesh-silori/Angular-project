import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { HeatmapChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';


import { SurveySummaryM } from '@carbon/model/employee-survey.model';
import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';

echarts.use([
    TitleComponent,
    TooltipComponent,
    VisualMapComponent,
    HeatmapChart,
    CanvasRenderer,
]);

//tsc-library
import { StorageService } from '@library/storage-service';
import { TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/
@Component({
    selector: 'app-survey-summary',
    templateUrl: './survey-summary.component.html',
    styleUrls: ['./survey-summary.component.scss']
})
export class SurveySummaryComponent{

    @Input() surveyID:any;
    @Input() graphHeader:any;

    data: any = [[0, 0, 0]]
    graphData: any = []

    distanceRange: any;
    modeOfTransport: any;

    option: any;

    TABLE_CONSTANT = TABLE_CONSTANT

    currentOrgID: string;

    constructor(
        private employeeSurveyController: EmployeeSurveyController,
        private storageService: StorageService

    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.getSurveySummary();
    }

    async getSurveySummary() {
        this.employeeSurveyController.getSurveySummary(this.currentOrgID, this.surveyID).subscribe((response:SurveySummaryM) => {
            
            this.graphData = response['graphData'].map(item => {
                return [item.rangeID, item.modeOfTransportID, item.employeeCount];
            })
            this.distanceRange = response['distanceRanges'].map(range => {
                const min = range.minRange;
                const max = range.maxRange !== null ? range.maxRange : '<';
                return `${min}-${max}`;
            })
            this.modeOfTransport = response['modeOfTransport'].map(transport => {
                return transport.modeOfTransportName
            });
            this.createEchart(this.graphData, this.distanceRange, this.modeOfTransport);
        })
    }

    createEchart(data: any[], distance: any[], vehicle: any[]) {
        data = data.map(function (item) {
            return [item[0], item[1], item[2] || '-'];
        });

        this.option = {
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '75%',
                top: '9%',
                width: '65%'
            },
            yAxis: {
                data: vehicle,
            },
            xAxis: {
                data: distance,
                name: 'km',
                splitArea: {
                    show: true
                },
                position: 'top'
            },
            graphic: [
                {
                    type: 'text',
                    top: 20,
                    right: '5%',
                    style: {
                        text: 'employee count',
                        fill: '#333',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                }
            ],

            visualMap: {
                type: 'piecewise',
                min: 0,
                max: 200,
                calculable: true,
                orient: 'vertical',
                top: 40,
                right: '5%',

                pieces: [
                    { min: 0, max: 50, color: '#47BF65 ' },
                    { min: 50, max: 80, color: '#3EAB5A' },
                    { min: 80, max: 100, color: '#328C49' },
                    { min: 100, max: 130, color: '#0C5A09' },
                    { min: 130, max: 150, color: '#E9EC21' },
                    { min: 150, max: Infinity, color: '#C70039' }
                ],
                textStyle: {
                    color: '#333',
                },
            }
            ,
            series: [
                {
                    name: '      ',
                    type: 'heatmap',
                    text: data,
                    data: data,
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
}
