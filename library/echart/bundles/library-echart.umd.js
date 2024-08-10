(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@library/tsc-common'), require('@angular/common'), require('ngx-echarts')) :
    typeof define === 'function' && define.amd ? define('@library/echart', ['exports', '@angular/core', '@library/tsc-common', '@angular/common', 'ngx-echarts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library.echart = {}), global.ng.core, global.tscCommon, global.ng.common, global.i1));
})(this, (function (exports, i0, tscCommon, common, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var EchartService = /** @class */ (function () {
        function EchartService() {
        }
        return EchartService;
    }());
    EchartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EchartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var EchartComponent = /** @class */ (function () {
        function EchartComponent() {
        }
        EchartComponent.prototype.ngOnInit = function () {
        };
        return EchartComponent;
    }());
    EchartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    EchartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: EchartComponent, selector: "lib-echart", ngImport: i0__namespace, template: "\n    <p>\n      echart works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-echart',
                        template: "\n    <p>\n      echart works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var EchartModule = /** @class */ (function () {
        function EchartModule() {
        }
        return EchartModule;
    }());
    EchartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EchartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartModule, declarations: [EchartComponent], exports: [EchartComponent] });
    EchartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EchartModule, decorators: [{
                type: i0.NgModule,
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
    var LOADING_GRAPHIC = {
        graphic: {
            elements: [
                {
                    type: 'group',
                    left: 'center',
                    top: 'center',
                    children: new Array(7).fill(0).map(function (val, i) { return ({
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
                    }); })
                }
            ]
        }
    };
    var NO_DATA_GRAPHIC = {
        type: 'text',
        left: 'center',
        top: 'middle',
        style: {
            fill: '#6c757d',
            fontSize: 25,
            text: tscCommon.COMMON_CONSTANT.NO_DATA,
        }
    };

    exports.ChartTypeEnum = void 0;
    (function (ChartTypeEnum) {
        ChartTypeEnum["BASIC_LINE_CHART"] = "BASIC_LINE_CHART";
        ChartTypeEnum["BASIC_AREA_CHART"] = "BASIC_AREA_CHART";
        ChartTypeEnum["BASIC_BAR_CHART"] = "BASIC_BAR_CHART";
    })(exports.ChartTypeEnum || (exports.ChartTypeEnum = {}));
    exports.ChartViewStateEnum = void 0;
    (function (ChartViewStateEnum) {
        ChartViewStateEnum["HAS_DATA"] = "HAS_DATA";
        ChartViewStateEnum["NO_DATA"] = "NO_DATA";
        ChartViewStateEnum["LOADING"] = "LOADING";
    })(exports.ChartViewStateEnum || (exports.ChartViewStateEnum = {}));

    var ChartTitle = /** @class */ (function () {
        function ChartTitle() {
            this.name = '';
            this.color = 'black';
        }
        return ChartTitle;
    }());

    var BasicAreaLineBarChart = /** @class */ (function () {
        function BasicAreaLineBarChart() {
            this.chartTitle = {
                name: '',
                color: 'black',
            };
            this.metaData = [];
            this.unit = {
                name: '',
                code: '',
            };
            this.markLine = [];
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
        return BasicAreaLineBarChart;
    }());

    var DoughnutChart = /** @class */ (function () {
        function DoughnutChart() {
            this.metaData = [];
            this.showDataView = false;
            this.showRestore = false;
            this.showDownloadImage = false;
        }
        return DoughnutChart;
    }());

    var StackBarChart = /** @class */ (function () {
        function StackBarChart() {
            this.metaData = [];
            this.tooltipHeaderLabel = '';
            this.totalDataLabel = '';
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
        return StackBarChart;
    }());

    // /tsc-library/
    var BasicAreaLineBarComponent = /** @class */ (function () {
        function BasicAreaLineBarComponent() {
            this.chartType = exports.ChartTypeEnum.BASIC_LINE_CHART;
        }
        BasicAreaLineBarComponent.prototype.ngOnInit = function () {
        };
        BasicAreaLineBarComponent.prototype.ngOnChanges = function (changes) {
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
        };
        BasicAreaLineBarComponent.prototype.checkData = function () {
            if (this.viewState == exports.ChartViewStateEnum.LOADING) {
                this.dataOption = LOADING_GRAPHIC;
            }
            else if (this.viewState == exports.ChartViewStateEnum.HAS_DATA) {
                this.drawChart();
            }
            else if (this.viewState == exports.ChartViewStateEnum.NO_DATA) {
                this.dataOption = this.noDataOption;
            }
        };
        BasicAreaLineBarComponent.prototype.drawChart = function () {
            var _a, _b;
            var unit = this.chartData.unit.code;
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
                        var tooltip = '';
                        tooltip += '<b><span class="text-primary">' + params[0].name + '</span></b><br />';
                        tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params[0].value != null ? (params[0].value) + ' ' + unit : tscCommon.COMMON_CONSTANT.HYPHEN) + '</span></b>';
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
                    text: "" + this.chartTitle.name,
                    textStyle: {
                        color: this.chartTitle.color
                    },
                    padding: [7, 0, 0, 20],
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: this.chartType == exports.ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                    data: this.chartData.metaData.map(function (item) { return item.name; }),
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
                            show: this.chartType == exports.ChartTypeEnum.BASIC_BAR_CHART ? true : false,
                            position: 'top'
                        },
                        data: this.chartData.metaData.map(function (item) { return item.value; }),
                        type: this.chartType == exports.ChartTypeEnum.BASIC_BAR_CHART ? 'bar' : 'line',
                        areaStyle: this.chartType == exports.ChartTypeEnum.BASIC_AREA_CHART ? {} : null,
                        markLine: {
                            data: (_b = (_a = this.chartData) === null || _a === void 0 ? void 0 : _a.markLine) === null || _b === void 0 ? void 0 : _b.map(function (item) { return ({
                                lineStyle: {
                                    type: 'dashed',
                                    color: "" + item.color,
                                },
                                label: {
                                    formatter: item.label + " : " + item.value,
                                    position: 'middle',
                                    offset: [0, 5]
                                },
                                yAxis: item.value
                            }); })
                        },
                    }
                ]
            };
        };
        return BasicAreaLineBarComponent;
    }());
    BasicAreaLineBarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    BasicAreaLineBarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: { chartTypeInp: "chartTypeInp", viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-basic-area-line-bar',
                        templateUrl: './basic-area-line-bar.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { chartTypeInp: [{
                    type: i0.Input
                }], viewStateInp: [{
                    type: i0.Input
                }], chartTitleInp: [{
                    type: i0.Input
                }], dataInp: [{
                    type: i0.Input
                }] } });

    var BasicAreaLineBarModule = /** @class */ (function () {
        function BasicAreaLineBarModule() {
        }
        return BasicAreaLineBarModule;
    }());
    BasicAreaLineBarModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BasicAreaLineBarModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarModule, declarations: [BasicAreaLineBarComponent], imports: [common.CommonModule, i1__namespace.NgxEchartsModule], exports: [BasicAreaLineBarComponent] });
    BasicAreaLineBarModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarModule, imports: [[
                common.CommonModule,
                i1.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineBarModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            BasicAreaLineBarComponent
                        ],
                        imports: [
                            common.CommonModule,
                            i1.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [
                            BasicAreaLineBarComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var DoughnutComponent = /** @class */ (function () {
        function DoughnutComponent() {
        }
        DoughnutComponent.prototype.ngOnInit = function () {
        };
        DoughnutComponent.prototype.ngOnChanges = function (changes) {
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
        };
        DoughnutComponent.prototype.checkData = function () {
            if (this.viewState == exports.ChartViewStateEnum.LOADING) {
                this.dataOption = LOADING_GRAPHIC;
            }
            else if (this.viewState == exports.ChartViewStateEnum.HAS_DATA) {
                this.drawChart();
            }
            else if (this.viewState == exports.ChartViewStateEnum.NO_DATA) {
                this.dataOption = this.noDataOption;
            }
        };
        DoughnutComponent.prototype.drawChart = function () {
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
                        var tooltip = '';
                        tooltip += '<b><span class="text-primary">' + params.data.name + '</span></b><br />';
                        tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (params.data.value != null ? (params.data.value) + ' ' + params.data.unit.code : tscCommon.COMMON_CONSTANT.HYPHEN) + '</span></b>';
                        return tooltip;
                    }
                },
                title: {
                    show: true,
                    text: "" + this.chartTitle.name,
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
        };
        return DoughnutComponent;
    }());
    DoughnutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoughnutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutComponent, selector: "lib-doughnut", inputs: { viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-doughnut',
                        templateUrl: './doughnut.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
                    type: i0.Input
                }], chartTitleInp: [{
                    type: i0.Input
                }], dataInp: [{
                    type: i0.Input
                }] } });

    var DoughnutModule = /** @class */ (function () {
        function DoughnutModule() {
        }
        return DoughnutModule;
    }());
    DoughnutModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoughnutModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutModule, declarations: [DoughnutComponent], imports: [common.CommonModule, i1__namespace.NgxEchartsModule], exports: [DoughnutComponent] });
    DoughnutModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutModule, imports: [[
                common.CommonModule,
                i1.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DoughnutComponent
                        ],
                        imports: [
                            common.CommonModule,
                            i1.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [
                            DoughnutComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var StackBarComponent = /** @class */ (function () {
        function StackBarComponent() {
        }
        StackBarComponent.prototype.ngOnInit = function () {
        };
        StackBarComponent.prototype.ngOnChanges = function (changes) {
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
        };
        StackBarComponent.prototype.checkData = function () {
            if (this.viewState == exports.ChartViewStateEnum.LOADING) {
                this.dataOption = LOADING_GRAPHIC;
            }
            else if (this.viewState == exports.ChartViewStateEnum.HAS_DATA) {
                this.drawChart();
            }
            else if (this.viewState == exports.ChartViewStateEnum.NO_DATA) {
                this.dataOption = this.noDataOption;
            }
        };
        StackBarComponent.prototype.drawChart = function () {
            var seriesData = [];
            this.chartData.metaData.forEach(function (item) {
                item.barData.forEach(function (bar) {
                    var seriesIndex = seriesData.findIndex(function (series) { return series.name == bar.name; });
                    if (seriesIndex == -1) {
                        seriesData.push({
                            name: bar.name,
                            type: 'bar',
                            stack: 'ad',
                            data: []
                        });
                        seriesIndex = seriesData.length - 1;
                    }
                    seriesData[seriesIndex].data.push(bar.value);
                });
            });
            var chartData = this.chartData;
            var tooltipHeaderLabel = this.chartData.tooltipHeaderLabel;
            var totalDataLabel = this.chartData.totalDataLabel;
            var totalDataValue = this.chartData.metaData.map(function (item) { return item.totalData.value; });
            var totalDataUnit = this.chartData.metaData.map(function (item) { return item.totalData.unitCode; });
            this.dataOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        var dataIndex = params[0].dataIndex;
                        var tooltip = '';
                        params.forEach(function (param) {
                            tooltip += '<b><span class="text-primary">' + param.name + '</span></b><br />';
                        });
                        if (tooltipHeaderLabel.trim() != '') {
                            tooltip += '<b style="font-size: 18px;">' + tooltipHeaderLabel + '</b><br />';
                        }
                        tooltip += totalDataLabel + ': <b><span style="float:right; margin-left:15px;">' + (totalDataValue[dataIndex] != null ? (totalDataValue[dataIndex]) + ' ' + totalDataUnit[dataIndex] : tscCommon.COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
                        params.forEach(function (param) {
                            var barData = chartData.metaData[param.seriesIndex].barData.find(function (bar) { return bar.name == param.seriesName; });
                            var unit = barData ? barData.unit.code : '';
                            tooltip += param.seriesName + ': <b><span style="float:right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : tscCommon.COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
                        });
                        return tooltip;
                    }
                },
                toolbox: {
                    feature: {
                        dataView: { show: this.chartData.showDataView, readOnly: true },
                        magicType: { show: this.chartData.showMagicType, type: ['line'] },
                        restore: { show: this.chartData.showRestore },
                        saveAsImage: { show: this.chartData.showDownloadImage },
                    }
                },
                legend: {},
                grid: {
                    top: '10%',
                    left: '7%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                title: {
                    show: true,
                    text: "" + this.chartTitle.name,
                    textStyle: {
                        color: this.chartTitle.color
                    },
                    padding: [7, 0, 0, 20],
                },
                xAxis: {
                    type: 'category',
                    data: this.chartData.metaData.map(function (item) { return item.xAxisSeries; }),
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
                series: seriesData
            };
        };
        return StackBarComponent;
    }());
    StackBarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    StackBarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StackBarComponent, selector: "lib-stack-bar", inputs: { viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-stack-bar',
                        templateUrl: './stack-bar.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
                    type: i0.Input
                }], chartTitleInp: [{
                    type: i0.Input
                }], dataInp: [{
                    type: i0.Input
                }] } });

    var StackBarModule = /** @class */ (function () {
        function StackBarModule() {
        }
        return StackBarModule;
    }());
    StackBarModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StackBarModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarModule, declarations: [StackBarComponent], imports: [common.CommonModule, i1__namespace.NgxEchartsModule], exports: [StackBarComponent] });
    StackBarModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarModule, imports: [[
                common.CommonModule,
                i1.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackBarModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StackBarComponent
                        ],
                        imports: [
                            common.CommonModule,
                            i1.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [
                            StackBarComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of echart
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BasicAreaLineBarChart = BasicAreaLineBarChart;
    exports.BasicAreaLineBarComponent = BasicAreaLineBarComponent;
    exports.BasicAreaLineBarModule = BasicAreaLineBarModule;
    exports.ChartTitle = ChartTitle;
    exports.DoughnutChart = DoughnutChart;
    exports.DoughnutComponent = DoughnutComponent;
    exports.DoughnutModule = DoughnutModule;
    exports.EchartComponent = EchartComponent;
    exports.EchartModule = EchartModule;
    exports.EchartService = EchartService;
    exports.LOADING_GRAPHIC = LOADING_GRAPHIC;
    exports.NO_DATA_GRAPHIC = NO_DATA_GRAPHIC;
    exports.StackBarChart = StackBarChart;
    exports.StackBarComponent = StackBarComponent;
    exports.StackBarModule = StackBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-echart.umd.js.map
