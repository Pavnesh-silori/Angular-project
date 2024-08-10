import { OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartM } from '../../model/chart.model';
import { ChartService } from '../../../chart.service';
import * as i0 from "@angular/core";
export declare class DoughnutChartComponent implements OnInit {
    private chartService;
    renderFlag: string;
    chartData: ChartM;
    chartDataOption: EChartsOption;
    noDataOption: any;
    constructor(chartService: ChartService);
    ngOnInit(): void;
    ngOnChanges(): void;
    chartDataCheck(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoughnutChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoughnutChartComponent, "lib-doughnut-chart", never, { "renderFlag": "renderFlag"; "chartData": "chartData"; }, {}, never, never>;
}
