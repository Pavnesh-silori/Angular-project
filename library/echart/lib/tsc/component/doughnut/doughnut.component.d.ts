import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartViewStateEnum } from '../../enum/ehart.enum';
import { ChartTitleM } from '../../model/chart.model';
import { DoughnutChartM } from '../../model/doughnut.model';
import * as i0 from "@angular/core";
export declare class DoughnutComponent implements OnInit {
    viewStateInp: ChartViewStateEnum;
    chartTitleInp: ChartTitleM;
    dataInp: DoughnutChartM;
    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: DoughnutChartM;
    dataOption: EChartsOption;
    noDataOption: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkData(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoughnutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoughnutComponent, "lib-doughnut", never, { "viewStateInp": "viewStateInp"; "chartTitleInp": "chartTitleInp"; "dataInp": "dataInp"; }, {}, never, never>;
}
