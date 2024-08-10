import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DoughnutChartM } from '../../model/doughnut.model';
import * as i0 from "@angular/core";
export declare class DoughnutComponent implements OnInit {
    viewStateInp: string;
    dataInp: DoughnutChartM;
    viewState: any;
    chartData: DoughnutChartM;
    dataOption: EChartsOption;
    noDataOption: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkData(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoughnutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoughnutComponent, "lib-doughnut", never, { "viewStateInp": "viewStateInp"; "dataInp": "dataInp"; }, {}, never, never>;
}
