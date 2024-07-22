import { Component, OnInit } from '@angular/core';

import { EChartsOption } from 'echarts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';

import { MaintenanceComponent } from '../target/create/sme/near-term/maintenance/maintenance.component';
import { ReductionComponent as NearTermReductionComponent } from '../target/create/sme/near-term/reduction/reduction.component';
import { ReductionComponent as LongTermReductionComponent } from '../target/create/sme/long-term/reduction/reduction.component';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { LongTermEnum, NearTermEnum } from '@carbon/enum/sbti.enum';
import { TargetDashboard, TargetDashboardM } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';

import { StorageService } from '@library/storage-service';

// tsc-library
import { COMMON_CONSTANT, DialogEnum, NO_DATA_GRAPHIC } from '@library/tsc-common';
// /tsc-library

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

	NearTerm = NearTermEnum;
	LongTerm = LongTermEnum;

	rootOrgID: any;
	targetID: any;

	closeInfo: boolean = true;

	dashboardRes = new TargetDashboard();

	chartDataOption: EChartsOption;
    currentYearEmissions: any;

	noDataOption: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private storageService: StorageService,
        private dialog: MatDialog,
		private sbtiController: SbtiController
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');
		this.activatedRoute.queryParams.subscribe((queryParam) => {
			if (queryParam.targetID) {
				this.targetID = parseInt(queryParam.targetID);
			}
		})
		this.getTargetDashboardDetails();
	}

	closeInfoBox() {
		this.closeInfo = false;
	}

	getTargetDashboardDetails() {
		this.sbtiController.getTargetDashboardDetails(this.rootOrgID, this.targetID).subscribe(
			(targetDashboardRes: TargetDashboardM) => {
				if (targetDashboardRes) {
					this.dashboardRes = targetDashboardRes;
                    this.currentYearEmissions = Math.abs(this.dashboardRes['dashboard']['currentYearEmissions']?.['reducedPct']);
					this.drawChart();
				}
				else {
					this.dashboardRes = new TargetDashboard();
				}
			},
			(error) => {
				console.log('error in getTargetDashboardDetails -', error);
				this.dashboardRes = new TargetDashboard();
			}
		);
	}

	drawChart() {
		const unitKeyID = this.dashboardRes['unitKeyID'];
		const durations = this.dashboardRes.dashboard.data.map(item => item.duration.toString());
		const scope1Emissions = this.dashboardRes.dashboard.data.map(item => item.scope1Emission);
		const scope2Emissions = this.dashboardRes.dashboard.data.map(item => item.scope2Emission);
		const scope3Emissions = this.dashboardRes.dashboard.data.map(item => item.scope3Emission);
		const targetEmissions = this.dashboardRes.dashboard.data.map(item => item.targetEmission);
		const totalEmissions = this.dashboardRes.dashboard.data.map(item => item.totalEmission);
		const annualReductions = this.dashboardRes.annualReduction;
		const targetAnnualReductions = this.dashboardRes.dashboard.data.map(item => item.targetAnnualReduction);

		const isScope1EmissionNull = scope1Emissions.every(value => value === null);
		const isScope2EmissionNull = scope2Emissions.every(value => value === null);
		const isScope3EmissionNull = scope3Emissions.every(value => value === null);
		const isTotalEmissionsNull = totalEmissions.every(value => value == null);

		if (isScope1EmissionNull && isScope2EmissionNull && isScope3EmissionNull && isTotalEmissionsNull) {
		this.chartDataOption = this.noDataOption = {
				title: {
					padding: [7, 0, 0, 20],
				},
				graphic: NO_DATA_GRAPHIC,
				xAxis: { show: false },
				yAxis: { show: false },
			};

			return;
		}

		this.chartDataOption = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
                formatter: function (params) {
                    const dataIndex = params[0].dataIndex;

                    let tooltip = '<b style="font-size: 18px;">' + params[0].name + ' overview</b><br />';
                    tooltip += 'Total emissions: <b><span style="float:right; margin-left:15px;">' + (totalEmissions[dataIndex] != null ? (totalEmissions[dataIndex]).toFixed(2) + ' ' + unitKeyID : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';

                    if (annualReductions >= targetAnnualReductions[dataIndex]) {
                        tooltip += 'Annual reduction: <b><span style="float:right; margin-left:15px;" class="text-success">' + (annualReductions != null ? (annualReductions).toFixed(2) : COMMON_CONSTANT.HYPHEN) + '%</b><br />';
                    } else {
                        tooltip += 'Annual reduction: <b><span style="float:right; margin-left:15px;">' + (annualReductions != null ? (annualReductions).toFixed(2) : COMMON_CONSTANT.HYPHEN) + '%</span></b><br />';
                    }

                    tooltip += 'Target Annual Reduction: <b><span style="float:right; margin-left:15px;">' + (targetAnnualReductions[dataIndex] != null ? (targetAnnualReductions[dataIndex]).toFixed(2) : COMMON_CONSTANT.HYPHEN) + '%</span></b><br />';
                    params.forEach(function (param) {
                        tooltip += param.seriesName + ': <b><span style="float:right; margin-left:15px;">' + (param.value != null ? (param.value).toFixed(2) + ' ' + unitKeyID : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
                    });

                    return tooltip;
                }
			},
			// toolbox: {
			// 	show: true,
			// 	top: 20,
			// 	feature: {
			// 		mark: { show: true },
			// 		dataView: { show: true, readOnly: false },
			// 		magicType: { show: true, type: ['line', 'bar'] },
			// 		restore: { show: true },
			// 		saveAsImage: { show: true }
			// 	}
			// },
			legend: {
				top: 0,
				data: [
					{
						name: 'Target emissions',
						icon: 'circle',
					},
					{
						name: 'Scope 1 emissions',
						icon: 'circle',
					},
					{
						name: 'Scope 2 emissions',
						icon: 'circle',
					},
					{
						name: 'Scope 3 emissions',
						icon: 'circle',
					},
					{
						name: this.dashboardRes.sbtiBaseYear + ' baseline',
						icon: 'image://assets/images/line.png',
					},
					{
						name: '1.5°C ambition trajectory',
						icon: 'image://assets/images/dotted-line.png',
					},
				],
			},
			xAxis: [
				{
					type: 'category',
					data: durations,
				}
			],
			yAxis: [
				{
					type: 'value',
					name: 'Emissions (' + unitKeyID + ')',
					nameLocation: 'middle',
					nameGap: 50
				}
			],
			series: [
				{
					name: this.dashboardRes.sbtiBaseYear + ' baseline',
					type: 'line',
					lineStyle: {
						type: 'solid',
						color: 'gray',
					}
				},
				{
					name: '1.5°C ambition trajectory',
					type: 'line',
					lineStyle: {
						type: 'dashed',
						color: 'green',
					}
				},
				{
					name: 'Target emissions',
					type: 'bar',
					barWidth: 15,
					color: '#1E8449',
					data: targetEmissions,
					emphasis: {
						focus: 'series',
					},
					markLine: {
						symbol: 'none',
						lineStyle: {
							type: 'dashed'
						},
						data: [[{ type: 'max' }, { type: 'min' }],
						{
							lineStyle: {
								type: 'solid',
								color: 'gray'
							},
							yAxis: Math.max(...targetEmissions),
							label: {
								formatter: this.dashboardRes.sbtiBaseYear + ' baseline'
							},
						}]
					}
				},
				{
					name: 'Scope 1 emissions',
					color: '#ff9f7f',
					type: 'bar',
					barWidth: 15,
					stack: 'Ad',
					emphasis: {
						focus: 'series'
					},
					data: scope1Emissions,
				},
				{
					name: 'Scope 2 emissions',
					type: 'bar',
					barWidth: 15,
					color: '#ffdc5c',
					stack: 'Ad',
					emphasis: {
						focus: 'series'
					},
					data: scope2Emissions,
				},
				{
					name: 'Scope 3 emissions',
					type: 'bar',
					barWidth: 15,
					color: '#85C1E9',
					stack: 'Ad',
					emphasis: {
						focus: 'series'
					},
					data: scope3Emissions,
				},
			]
		};
	}

    updateTarget() {
        switch (this.dashboardRes['targetKeyID']) {
            case NearTermEnum.NEAR_TERM_REDUCTION:
                this.updateNearTermTarget(this.targetID);
                break;
            case NearTermEnum.NEAR_TERM_MAINTENANCE:
                this.updateMaintenanceTarget(this.targetID);
                break;
            case LongTermEnum.LONG_TERM_NETZERO:
                this.updateLongTermTarget(this.targetID);
                break;
            default:
                console.log('undefined case encountered - ', this.dashboardRes['targetKeyID']);
        }
    }

    updateNearTermTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(NearTermReductionComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.getTargetDashboardDetails();
        });
    }

    updateMaintenanceTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(MaintenanceComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.getTargetDashboardDetails();
        });
    }

    updateLongTermTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(LongTermReductionComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.getTargetDashboardDetails();
        });
    }
}