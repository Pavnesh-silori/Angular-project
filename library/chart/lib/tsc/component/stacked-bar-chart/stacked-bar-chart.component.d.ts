import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartService } from '../../../chart.service';
import * as i0 from "@angular/core";
export declare class StackedBarChartComponent implements OnInit {
    private chartService;
    renderFlag: string;
    chartData: any;
    stackedData: any;
    showChartData: any;
    chartMetaData: any;
    chartDataOption: EChartsOption;
    noDataOption: any;
    showData: any[];
    titleData: any;
    showStackedData: any;
    commonConstant: {
        NO_DATA: string;
        EMPTY_DATA: string;
    };
    constructor(chartService: ChartService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    chartDataCheck(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StackedBarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StackedBarChartComponent, "lib-stacked-bar-chart", never, { "renderFlag": "renderFlag"; "chartData": "chartData"; }, {}, never, never>;
}
