import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EChartsOption } from 'echarts';

import { ParameterEntity, ParameterEntityM } from '../../../model/entity.model';

import { EntityService } from '../../../service/entity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styles: [
    ]
})
export class ChartComponent implements OnInit {

    orgID: any;
    layoutID: any;

    entityDeviceM = new ParameterEntity();

    allowUpdateEntityTree: boolean = false;
    chartDataOption: EChartsOption;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private entityService: EntityService,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.parent.parent.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');

            this.getEntitiesWithDevicesByLayoutID();
        });
    }

    async getEntitiesWithDevicesByLayoutID() {
        let requestBody = {
            'entityType': ['ALL']
        };

        this.entityDeviceM = <ParameterEntityM>await this.entityService.getEntitiesWithDevicesByLayoutID(this.orgID, this.layoutID, requestBody, 'NO');

        if (this.entityDeviceM) {
            this.drawChart();
        }
    }

    drawChart() {
        const convertNode = (node) => ({
            name: node.name,
            children: node.children ? node.children.map(convertNode) : [],
            type: node.type
        });
        const chartData = convertNode(this.entityDeviceM);

        this.chartDataOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    id: 0,
                    name: 'Device',
                    data: [chartData],
                    top: '10%',
                    left: '15%',
                    bottom: '2%',
                    right: '15%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 999999,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left',
                            // color: 'green',
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        }

    }

}
