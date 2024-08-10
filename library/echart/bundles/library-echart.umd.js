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
    })(exports.ChartTypeEnum || (exports.ChartTypeEnum = {}));
    exports.ChartViewStateEnum = void 0;
    (function (ChartViewStateEnum) {
        ChartViewStateEnum["HAS_DATA"] = "HAS_DATA";
        ChartViewStateEnum["NO_DATA"] = "NO_DATA";
        ChartViewStateEnum["LOADING"] = "LOADING";
    })(exports.ChartViewStateEnum || (exports.ChartViewStateEnum = {}));

    var DoughnutChart = /** @class */ (function () {
        function DoughnutChart() {
            this.title = {
                name: '',
                color: 'grey'
            };
            this.data = {
                metaData: [],
                toolbox: {
                    showDataView: false,
                    showRestore: false,
                    showDownloadImage: false,
                },
            };
        }
        return DoughnutChart;
    }());

    var BasicAreaLineComponent = /** @class */ (function () {
        function BasicAreaLineComponent() {
        }
        BasicAreaLineComponent.prototype.ngOnInit = function () {
        };
        return BasicAreaLineComponent;
    }());
    BasicAreaLineComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    BasicAreaLineComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BasicAreaLineComponent, selector: "lib-basic-area-line", ngImport: i0__namespace, template: "<p>basic-area-line works!</p>\n" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-basic-area-line',
                        templateUrl: './basic-area-line.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var BasicAreaLineModule = /** @class */ (function () {
        function BasicAreaLineModule() {
        }
        return BasicAreaLineModule;
    }());
    BasicAreaLineModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BasicAreaLineModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineModule, declarations: [BasicAreaLineComponent], imports: [common.CommonModule, i1__namespace.NgxEchartsModule], exports: [BasicAreaLineComponent] });
    BasicAreaLineModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineModule, imports: [[
                common.CommonModule,
                i1.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BasicAreaLineModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            BasicAreaLineComponent
                        ],
                        imports: [
                            common.CommonModule,
                            i1.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [
                            BasicAreaLineComponent
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
            if (changes.dataInp && this.dataInp) {
                this.chartData = this.dataInp;
            }
            if (changes.viewStateInp && this.viewStateInp) {
                this.viewState = this.viewStateInp;
            }
            this.noDataOption = {
                title: {
                    text: this.chartData.title.name,
                    textStyle: {
                        color: this.chartData.title.color
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
                        dataView: { show: this.chartData.data.toolbox.showDataView, readOnly: true },
                        restore: { show: this.chartData.data.toolbox.showRestore },
                        saveAsImage: { show: this.chartData.data.toolbox.showDownloadImage },
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
                    text: "" + this.chartData.title.name,
                    textStyle: {
                        color: this.chartData.title.color
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
                        data: this.chartData.data.metaData,
                    }
                ]
            };
        };
        return DoughnutComponent;
    }());
    DoughnutComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoughnutComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutComponent, selector: "lib-doughnut", inputs: { viewStateInp: "viewStateInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-doughnut',
                        templateUrl: './doughnut.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
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

    /*
     * Public API Surface of echart
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BasicAreaLineComponent = BasicAreaLineComponent;
    exports.BasicAreaLineModule = BasicAreaLineModule;
    exports.DoughnutChart = DoughnutChart;
    exports.DoughnutComponent = DoughnutComponent;
    exports.DoughnutModule = DoughnutModule;
    exports.EchartComponent = EchartComponent;
    exports.EchartModule = EchartModule;
    exports.EchartService = EchartService;
    exports.LOADING_GRAPHIC = LOADING_GRAPHIC;
    exports.NO_DATA_GRAPHIC = NO_DATA_GRAPHIC;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-echart.umd.js.map
