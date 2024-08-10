import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i2 from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';

const LOADING_GRAPHIC = {
    graphic: {
        elements: [
            {
                type: 'group',
                left: 'center',
                top: 'center',
                children: new Array(7).fill(0).map((val, i) => ({
                    type: 'rect',
                    x: i * 20,
                    shape: {
                        x: 0,
                        y: -40,
                        width: 10,
                        height: 80
                    },
                    style: { fill: '#0E2F44' },
                    keyframeAnimation: {
                        duration: 1000,
                        delay: i * 200,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.5,
                                scaleY: 0.3,
                                easing: 'cubicIn'
                            },
                            {
                                percent: 1,
                                scaleY: 1,
                                easing: 'cubicOut'
                            }
                        ]
                    }
                }))
            }
        ]
    }
};
const NO_DATA_GRAPHIC = {
    type: 'text',
    left: 'center',
    top: 'middle',
    style: {
        fill: '#6c757d',
        fontSize: 25,
        text: "No Data",
    }
};

class ChartService {
    constructor() { }
    createOptionWithTitleAndValue(title, titleColor) {
        return {
            title: {
                text: title != null ? title : '',
                textStyle: {
                    color: title != null ? (titleColor != null ? titleColor : 'Black') : '',
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
    }
}
ChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ChartComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChartComponent, selector: "lib-chart", ngImport: i0, template: `
    <p>
      chart works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-chart',
                    template: `
    <p>
      chart works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, declarations: [ChartComponent], exports: [ChartComponent] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartComponent,
                    ],
                    imports: [],
                    exports: [
                        ChartComponent
                    ]
                }]
        }] });

class DoughnutChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.renderFlag = 'LOADING';
    }
    ngOnInit() {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.chartDataCheck();
    }
    ngOnChanges() {
        console.log(this.chartData, "ChartData", this.renderFlag);
        this.chartDataCheck();
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    drawChart() {
        var _a, _b, _c, _d, _e;
        this.chartDataOption = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    console.log(params, "ParamsData");
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params.data.name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' +
                        ((params.data.value != null ? params.data.value : '') +
                            (params.data.unit != null ? ' ' + params.data.unit : '')) + '</span></b>';
                    return tooltip;
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                show: true,
                text: `${(_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? (this.chartData.title.color != null ? this.chartData.title.color : 'Black') : ''
                },
            },
            legend: {
                top: (_b = this.chartData.legend.top) !== null && _b !== void 0 ? _b : '5px',
                bottom: (_c = this.chartData.legend.bottom) !== null && _c !== void 0 ? _c : '0',
                left: (_d = this.chartData.legend.left) !== null && _d !== void 0 ? _d : '0',
                right: (_e = this.chartData.legend.right) !== null && _e !== void 0 ? _e : '0'
            },
            series: [
                {
                    name: this.chartData.title.name,
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: 40,
                            fontWeight: 'bold',
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                    data: this.chartData.data.map(m => ({
                        name: m.name,
                        value: m.value,
                        unit: m.unit.name
                    })),
                },
            ]
        };
    }
}
DoughnutChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartComponent, deps: [{ token: ChartService }], target: i0.ɵɵFactoryTarget.Component });
DoughnutChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutChartComponent, selector: "lib-doughnut-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-doughnut-chart',
                    templateUrl: './doughnut-chart.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });

class DoughnutChartModule {
}
DoughnutChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoughnutChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, declarations: [DoughnutChartComponent], imports: [CommonModule, i2.NgxEchartsModule], exports: [DoughnutChartComponent] });
DoughnutChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DoughnutChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [DoughnutChartComponent]
                }]
        }] });

const commonConstant = {
    NO_DATA: 'No data',
    EMPTY_DATA: '',
};

class StackedBarChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.renderFlag = 'LOADING';
        this.showData = [];
        this.showStackedData = [];
        this.commonConstant = commonConstant;
    }
    ngOnInit() {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.chartDataCheck();
    }
    ngOnChanges(changes) {
        this.showStackedData = [];
        this.showChartData = this.chartData.toolbox;
        this.stackedData = this.chartData.data.data;
        this.titleData = this.chartData.data.vehicles;
        if (this.stackedData) {
            this.stackedData.forEach((res) => {
                if (res.data && Object.keys(res.data).length > 0) {
                    this.showStackedData.push(res.data);
                }
            });
        }
        if (this.showStackedData.length <= 0) {
            this.renderFlag = 'NO_DATA';
        }
        this.chartDataCheck();
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    drawChart() {
        var _a, _b, _c, _d, _e, _f;
        this.chartDataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.showChartData.feature.showDataView, readOnly: true },
                    magicType: { show: this.showChartData.feature.lineChartView, type: ['line'] },
                    restore: { show: this.showChartData.feature.restoreGraph },
                    saveAsImage: { show: this.showChartData.feature.saveImage }
                }
            },
            grid: {
                top: 30,
                bottom: 80,
                left: 50,
                right: 30,
            },
            title: {
                show: true,
                text: `${(_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? ((_b = this.chartData.title.color) !== null && _b !== void 0 ? _b : 'black') : '',
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
                top: (_c = this.chartData.legend.top) !== null && _c !== void 0 ? _c : '5px',
                bottom: (_d = this.chartData.legend.bottom) !== null && _d !== void 0 ? _d : '0px',
                left: (_e = this.chartData.legend.left) !== null && _e !== void 0 ? _e : '0px',
                right: (_f = this.chartData.legend.right) !== null && _f !== void 0 ? _f : '0px'
            },
            xAxis: {
                type: 'category',
                data: this.stackedData.map(m => ({
                    value: m.duration,
                })),
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
            series: this.titleData.map(res => ({
                name: res,
                type: 'bar',
                stack: 'ad',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.showStackedData.map(m => ({
                    value: m[res],
                })),
                tooltip: {
                    valueFormatter: (value) => {
                        return value == null ? commonConstant.NO_DATA : value;
                    }
                },
            })),
        };
    }
}
StackedBarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartComponent, deps: [{ token: ChartService }], target: i0.ɵɵFactoryTarget.Component });
StackedBarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StackedBarChartComponent, selector: "lib-stacked-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-stacked-bar-chart',
                    templateUrl: './stacked-bar-chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });

class StackedBarChartModule {
}
StackedBarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StackedBarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, declarations: [StackedBarChartComponent], imports: [CommonModule, i2.NgxEchartsModule], exports: [StackedBarChartComponent] });
StackedBarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [StackedBarChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [StackedBarChartComponent]
                }]
        }] });

class BarChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.renderFlag = 'LOADING';
        this.chartDataValue = [];
    }
    ;
    ngOnInit() {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.xAxisHeaderData = this.chartData.xAxis;
        this.yAxisHeaderData = this.chartData.yAxis;
        this.showChartData = this.chartData.toolbox;
        this.chartDataCheck();
    }
    ngOnChanges() {
        this.chartDataValue = this.chartData.data;
        this.chartDataCheck();
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    drawChart() {
        var _a, _b, _c;
        this.chartDataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.showChartData.showDataView, readOnly: true },
                    magicType: { show: this.showChartData.lineChartView, type: ['line'] },
                    restore: { show: this.showChartData.restoreGraph },
                    saveAsImage: { show: this.showChartData.saveImage }
                }
            },
            title: {
                show: true,
                text: `${(_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''}`,
                textStyle: {
                    color: this.chartData.title.name != null ? ((_b = this.chartData.title.color) !== null && _b !== void 0 ? _b : 'black') : '',
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += params[0].axisValue + '<br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' +
                        ((params[0].value != null ? params[0].value : '') +
                            (params[0].data.unit != null ? ' ' + params[0].data.unit : '')) + '</span></b>';
                    return tooltip;
                }
            },
            grid: {
                top: '10%',
                left: '7%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                name: this.xAxisHeaderData.label,
                data: this.chartDataValue.map(m => ({
                    value: m.name,
                })),
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                name: this.yAxisHeaderData.label,
                nameLocation: (_c = this.yAxisHeaderData.position) !== null && _c !== void 0 ? _c : 'middle',
                nameGap: 70
            },
            series: [
                {
                    data: this.chartDataValue.map(m => ({
                        value: m.value,
                        unit: m.unit.name
                    })),
                    type: 'bar',
                    barWidth: '40%',
                    label: {
                        show: true,
                        position: 'top'
                    }
                }
            ]
        };
    }
}
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, deps: [{ token: ChartService }], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });

class BarChartModule {
}
BarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, declarations: [BarChartComponent], imports: [CommonModule, i2.NgxEchartsModule], exports: [BarChartComponent] });
BarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BarChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [BarChartComponent]
                }]
        }] });

/*
 * Public API Surface of chart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BarChartComponent, BarChartModule, ChartComponent, ChartModule, ChartService, DoughnutChartComponent, DoughnutChartModule, StackedBarChartComponent, StackedBarChartModule };
//# sourceMappingURL=library-chart.js.map
