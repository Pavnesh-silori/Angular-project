import { Component, NgModule, OnInit, Input,SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../../constant/chart.constant';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
	selector: 'lib-bar-chart',
	templateUrl: './bar-chart.component.html',
	styles: []
})

export class BarChartComponent implements OnInit {

	@Input() renderFlag: string = 'LOADING';
	@Input() chartData: any;
	@Input() chartMetaData: any; 

	chartDataOption: EChartsOption;
	noDataOption;
	emissionData: any = [];
	seriesName: any = [];
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

	ngOnChanges(changes: SimpleChanges) {

			if (changes.chartData.currentValue) {
				this.chartDataCheck();

			}
		
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
		const seriesData = this.chartData.series.map((seriesItem: any, index: number) => {
		
			this.chartData.data.forEach((item: any) => {
				item.data.forEach((data: any) => {
					this.emissionData.push(data);
				});
			});
			this.seriesName = this.chartData.series

			return {
				name: this.seriesName[index],
				type: 'bar',
				stack: 'total',
				label: {
					show: false
				},
				emphasis: {
					focus: 'series'
				},
				data: this.emissionData,
				tooltip: {
					valueFormatter: (value: any) => {
						return value == null ? 'No data': value + ' ' + this.chartData.uomName;
					}
				},
			};
		});


		this.chartDataOption = {
			color: this.chartMetaData.color,
			toolbox: {
				feature: {
					dataView: { show: true, readOnly: true },
					magicType: { show: true, type: ['line'] },
					restore: { show: true },
					saveAsImage: { show: true }
				}
			},
			title: {
				show: true,
				text: `${this.chartMetaData.title}`,
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
					value: m.xAxisLabel,
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
			series: seriesData,
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
		BarChartComponent,
	],
	declarations: [
		BarChartComponent,
	]
})

export class BarChartModule { }
