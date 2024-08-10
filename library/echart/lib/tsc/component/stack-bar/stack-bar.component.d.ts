import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartViewStateEnum } from '../../enum/ehart.enum';
import { ChartTitleM } from '../../model/chart.model';
import { StackBarChartM } from '../../model/stack-bar.model';
import * as i0 from "@angular/core";
export declare class StackBarComponent implements OnInit {
    viewStateInp: ChartViewStateEnum;
    chartTitleInp: ChartTitleM;
    dataInp: StackBarChartM;
    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: StackBarChartM;
    dataOption: EChartsOption;
    noDataOption: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkData(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StackBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StackBarComponent, "lib-stack-bar", never, { "viewStateInp": "viewStateInp"; "chartTitleInp": "chartTitleInp"; "dataInp": "dataInp"; }, {}, never, never>;
}
