import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Input } from '@angular/core';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { CommonModule } from '@angular/common';
import * as i1 from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';

class EchartService {
    constructor() { }
}
EchartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EchartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class EchartComponent {
    constructor() { }
    ngOnInit() {
    }
}
EchartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EchartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EchartComponent, selector: "lib-echart", ngImport: i0, template: `
    <p>
      echart works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-echart',
                    template: `
    <p>
      echart works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class EchartModule {
}
EchartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EchartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartModule, declarations: [EchartComponent], exports: [EchartComponent] });
EchartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EchartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EchartComponent
                    ],
                    imports: [],
                    exports: [
                        EchartComponent
                    ]
                }]
        }] });

// tsc-library
// /tsc-library/
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
        text: COMMON_CONSTANT.NO_DATA,
    }
};

var ChartTypeEnum;
(function (ChartTypeEnum) {
    ChartTypeEnum["BASIC_LINE_CHART"] = "BASIC_LINE_CHART";
    ChartTypeEnum["BASIC_AREA_CHART"] = "BASIC_AREA_CHART";
    ChartTypeEnum["BASIC_BAR_CHART"] = "BASIC_BAR_CHART";
})(ChartTypeEnum || (ChartTypeEnum = {}));
var ChartViewStateEnum;
(function (ChartViewStateEnum) {
    ChartViewStateEnum["HAS_DATA"] = "HAS_DATA";
    ChartViewStateEnum["NO_DATA"] = "NO_DATA";
    ChartViewStateEnum["LOADING"] = "LOADING";
})(ChartViewStateEnum || (ChartViewStateEnum = {}));

class ChartTitle {
    constructor() {
        this.name = '';
        this.color = 'black';
    }
}

class BasicAreaLineBarChart {
    constructor() {
        this.metaData = [];
        this.unit = {
            name: '',
            code: '',
        };
        this.xAxisLabel = '';
        this.yAxisLabel = '';
        this.xAxisNameGap = 40;
        this.yAxisNameGap = 40;
        this.showDataZoomSlider = false;
        this.showDataView = false;
        this.showMagicType = false;
        this.showRestore = false;
        this.showDownloadImage = false;
    }
}

class DoughnutChart {
    constructor() {
        this.metaData = [];
        this.showDataView = false;
        this.showRestore = false;
        this.showDownloadImage = false;
    }
}

// /tsc-library/
class BasicAreaLineBarComponent {
    constructor() {
        this.chartType = ChartTypeEnum.BASIC_LINE_CHART;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.viewStateInp && this.viewStateInp) {
            this.viewState = this.viewStateInp;
        }
        if (changes.chartTitleInp && this.chartTitleInp) {
            this.chartTitle = this.chartTitleInp;
        }
        if (changes.chartTypeInp && this.chartTypeInp) {
            this.chartType = this.chartTypeInp;
        }
        if (changes.dataInp && this.dataInp) {
            this.chartData = this.dataInp;
        }
        this.noDataOption = {
            title: {
                text: this.chartTitle.name,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
        this.checkData();
    }
    checkData() {
        if (this.viewState == ChartViewStateEnum.LOADING) {
            this.dataOption = LOADING_GRAPHIC;
        }
        else if (this.viewState == ChartViewStateEnum.HAS_DATA) {
            this.drawChart();
        }
        else if (this.viewState == ChartViewStateEnum.NO_DATA) {
            this.dataOption = this.noDataOption;
        }
    }
    drawChart() {
        const unit = this.chartData.unit.code;
        this.dataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.chartData.showDataView, readOnly: true },
                    magicType: { show: this.chartData.showMagicType, type: ['line', 'bar'] },
                    restore: { show: this.chartData.showRestore },
                    saveAsImage: { show: this.chartData.showDownloadImage },
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params[0].name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params[0].value != null ? (params[0].value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b>';
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
            dataZoom: [
                {
                    type: 'slider',
                    filterMode: 'none',
                    show: this.chartData.showDataZoomSlider
                },
                {
                    type: 'inside',
                    filterMode: 'none',
                    show: this.chartData.showDataZoomSlider
                }
            ],
            title: {
                show: true,
                text: `${this.chartTitle.name}`,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            xAxis: {
                type: 'category',
                boundaryGap: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                data: this.chartData.metaData.map(item => item.name),
                name: this.chartData.xAxisLabel,
                nameLocation: 'middle',
                nameGap: this.chartData.xAxisNameGap
            },
            yAxis: {
                type: 'value',
                name: this.chartData.yAxisLabel,
                nameLocation: 'middle',
                nameGap: this.chartData.yAxisNameGap
            },
            series: [
                {
                    barWidth: '40%',
                    label: {
                        show: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                        position: 'top'
                    },
                    data: this.chartData.metaData.map(item => item.value),
                    type: this.chartType == ChartTypeEnum.BASIC_BAR_CHART ? 'bar' : 'line',
                    areaStyle: this.chartType == ChartTypeEnum.BASIC_AREA_CHART ? {} : null
                }
            ]
        };
    }
}
BasicAreaLineBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BasicAreaLineBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: { chartTypeInp: "chartTypeInp", viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-basic-area-line-bar',
                    templateUrl: './basic-area-line-bar.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { chartTypeInp: [{
                type: Input
            }], viewStateInp: [{
                type: Input
            }], chartTitleInp: [{
                type: Input
            }], dataInp: [{
                type: Input
            }] } });

class BasicAreaLineBarModule {
}
BasicAreaLineBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BasicAreaLineBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, declarations: [BasicAreaLineBarComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [BasicAreaLineBarComponent] });
BasicAreaLineBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BasicAreaLineBarComponent
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        BasicAreaLineBarComponent
                    ]
                }]
        }] });

// /tsc-library/
class DoughnutComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.viewStateInp && this.viewStateInp) {
            this.viewState = this.viewStateInp;
        }
        if (changes.chartTitleInp && this.chartTitleInp) {
            this.chartTitle = this.chartTitleInp;
        }
        if (changes.dataInp && this.dataInp) {
            this.chartData = this.dataInp;
        }
        this.noDataOption = {
            title: {
                text: this.chartTitle.name,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
        this.checkData();
    }
    checkData() {
        if (this.viewState == ChartViewStateEnum.LOADING) {
            this.dataOption = LOADING_GRAPHIC;
        }
        else if (this.viewState == ChartViewStateEnum.HAS_DATA) {
            this.drawChart();
        }
        else if (this.viewState == ChartViewStateEnum.NO_DATA) {
            this.dataOption = this.noDataOption;
        }
    }
    drawChart() {
        this.dataOption = {
            toolbox: {
                feature: {
                    dataView: { show: this.chartData.showDataView, readOnly: true },
                    restore: { show: this.chartData.showRestore },
                    saveAsImage: { show: this.chartData.showDownloadImage },
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    let tooltip = '';
                    tooltip += '<b><span class="text-primary">' + params.data.name + '</span></b><br />';
                    tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params.data.value != null ? (params.data.value) + ' ' + params.data.unit.code : COMMON_CONSTANT.HYPHEN) + '</span></b>';
                    return tooltip;
                }
            },
            title: {
                show: true,
                text: `${this.chartTitle.name}`,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            legend: {
                bottom: '1%',
                left: 'center'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.chartData.metaData,
                }
            ]
        };
    }
}
DoughnutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoughnutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutComponent, selector: "lib-doughnut", inputs: { viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-doughnut',
                    templateUrl: './doughnut.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
                type: Input
            }], chartTitleInp: [{
                type: Input
            }], dataInp: [{
                type: Input
            }] } });

class DoughnutModule {
}
DoughnutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoughnutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutModule, declarations: [DoughnutComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [DoughnutComponent] });
DoughnutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DoughnutComponent
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        DoughnutComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of echart
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BasicAreaLineBarChart, BasicAreaLineBarComponent, BasicAreaLineBarModule, ChartTitle, ChartTypeEnum, ChartViewStateEnum, DoughnutChart, DoughnutComponent, DoughnutModule, EchartComponent, EchartModule, EchartService, LOADING_GRAPHIC, NO_DATA_GRAPHIC };
//# sourceMappingURL=library-echart.js.map
