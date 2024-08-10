import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-echarts";
export declare class BarChartComponent implements OnInit {
    renderFlag: string;
    chartData: any;
    chartMetaData: any;
    chartDataOption: EChartsOption;
    noDataOption: any;
    emissionData: any;
    seriesName: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    chartDataCheck(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartComponent, "lib-bar-chart", never, { "renderFlag": "renderFlag"; "chartData": "chartData"; "chartMetaData": "chartMetaData"; }, {}, never, never>;
}
export declare class BarChartModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BarChartModule, [typeof BarChartComponent], [typeof i1.CommonModule, typeof i2.NgxEchartsModule], [typeof BarChartComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BarChartModule>;
}
