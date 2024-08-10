import { OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ChartTypeEnum, ChartViewStateEnum } from '../../enum/ehart.enum';
import { ChartTitleM } from '../../model/chart.model';
import { BasicAreaLineBarChartM } from '../../model/basic-area-line-bar.model';
import * as i0 from "@angular/core";
export declare class BasicAreaLineBarComponent implements OnInit {
    chartTypeInp: ChartTypeEnum;
    viewStateInp: ChartViewStateEnum;
    chartTitleInp: ChartTitleM;
    dataInp: BasicAreaLineBarChartM;
    chartType: ChartTypeEnum;
    viewState: ChartViewStateEnum;
    chartTitle: ChartTitleM;
    chartData: BasicAreaLineBarChartM;
    dataOption: EChartsOption;
    noDataOption: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkData(): void;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicAreaLineBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasicAreaLineBarComponent, "lib-basic-area-line-bar", never, { "chartTypeInp": "chartTypeInp"; "viewStateInp": "viewStateInp"; "chartTitleInp": "chartTitleInp"; "dataInp": "dataInp"; }, {}, never, never>;
}
