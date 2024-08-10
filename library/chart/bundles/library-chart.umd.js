(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ngx-echarts')) :
    typeof define === 'function' && define.amd ? define('@library/chart', ['exports', '@angular/core', '@angular/common', 'ngx-echarts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library.chart = {}), global.ng.core, global.ng.common, global.i2));
})(this, (function (exports, i0, common, i2) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

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
            text: "No Data",
        }
    };

    var ChartService = /** @class */ (function () {
        function ChartService() {
        }
        ChartService.prototype.createOptionWithTitleAndValue = function (title, titleColor) {
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
        };
        return ChartService;
    }());
    ChartService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ChartService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
        }
        ChartComponent.prototype.ngOnInit = function () {
        };
        return ChartComponent;
    }());
    ChartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ChartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChartComponent, selector: "lib-chart", ngImport: i0__namespace, template: "\n    <p>\n      chart works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-chart',
                        template: "\n    <p>\n      chart works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        return ChartModule;
    }());
    ChartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ChartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartModule, declarations: [ChartComponent], exports: [ChartComponent] });
    ChartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ChartModule, decorators: [{
                type: i0.NgModule,
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

    var DoughnutChartComponent = /** @class */ (function () {
        function DoughnutChartComponent(chartService) {
            this.chartService = chartService;
            this.renderFlag = 'LOADING';
        }
        DoughnutChartComponent.prototype.ngOnInit = function () {
            this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
            this.chartDataCheck();
        };
        DoughnutChartComponent.prototype.ngOnChanges = function () {
            console.log(this.chartData, "ChartData", this.renderFlag);
            this.chartDataCheck();
        };
        DoughnutChartComponent.prototype.chartDataCheck = function () {
            if (this.renderFlag == 'LOADING') {
                this.chartDataOption = LOADING_GRAPHIC;
            }
            else if (this.renderFlag == 'DATA') {
                this.drawChart();
            }
            else {
                this.chartDataOption = this.noDataOption;
            }
        };
        DoughnutChartComponent.prototype.drawChart = function () {
            var _a, _b, _c, _d, _e;
            this.chartDataOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        console.log(params, "ParamsData");
                        var tooltip = '';
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
                    text: "" + ((_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''),
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
                        data: this.chartData.data.map(function (m) { return ({
                            name: m.name,
                            value: m.value,
                            unit: m.unit.name
                        }); }),
                    },
                ]
            };
        };
        return DoughnutChartComponent;
    }());
    DoughnutChartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartComponent, deps: [{ token: ChartService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DoughnutChartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutChartComponent, selector: "lib-doughnut-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-doughnut-chart',
                        templateUrl: './doughnut-chart.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                    type: i0.Input
                }], chartData: [{
                    type: i0.Input
                }] } });

    var DoughnutChartModule = /** @class */ (function () {
        function DoughnutChartModule() {
        }
        return DoughnutChartModule;
    }());
    DoughnutChartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DoughnutChartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartModule, declarations: [DoughnutChartComponent], imports: [common.CommonModule, i2__namespace.NgxEchartsModule], exports: [DoughnutChartComponent] });
    DoughnutChartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartModule, imports: [[
                common.CommonModule,
                i2.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DoughnutChartModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [DoughnutChartComponent],
                        imports: [
                            common.CommonModule,
                            i2.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [DoughnutChartComponent]
                    }]
            }] });

    var commonConstant = {
        NO_DATA: 'No data',
        EMPTY_DATA: '',
    };

    var StackedBarChartComponent = /** @class */ (function () {
        function StackedBarChartComponent(chartService) {
            this.chartService = chartService;
            this.renderFlag = 'LOADING';
            this.showData = [];
            this.showStackedData = [];
            this.commonConstant = commonConstant;
        }
        StackedBarChartComponent.prototype.ngOnInit = function () {
            this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
            this.chartDataCheck();
        };
        StackedBarChartComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this.showStackedData = [];
            this.showChartData = this.chartData.toolbox;
            this.stackedData = this.chartData.data.data;
            this.titleData = this.chartData.data.vehicles;
            if (this.stackedData) {
                this.stackedData.forEach(function (res) {
                    if (res.data && Object.keys(res.data).length > 0) {
                        _this.showStackedData.push(res.data);
                    }
                });
            }
            if (this.showStackedData.length <= 0) {
                this.renderFlag = 'NO_DATA';
            }
            this.chartDataCheck();
        };
        StackedBarChartComponent.prototype.chartDataCheck = function () {
            if (this.renderFlag == 'LOADING') {
                this.chartDataOption = LOADING_GRAPHIC;
            }
            else if (this.renderFlag == 'DATA') {
                this.drawChart();
            }
            else {
                this.chartDataOption = this.noDataOption;
            }
        };
        StackedBarChartComponent.prototype.drawChart = function () {
            var _this = this;
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
                    text: "" + ((_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''),
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
                    data: this.stackedData.map(function (m) { return ({
                        value: m.duration,
                    }); }),
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
                series: this.titleData.map(function (res) { return ({
                    name: res,
                    type: 'bar',
                    stack: 'ad',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: _this.showStackedData.map(function (m) { return ({
                        value: m[res],
                    }); }),
                    tooltip: {
                        valueFormatter: function (value) {
                            return value == null ? commonConstant.NO_DATA : value;
                        }
                    },
                }); }),
            };
        };
        return StackedBarChartComponent;
    }());
    StackedBarChartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartComponent, deps: [{ token: ChartService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StackedBarChartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StackedBarChartComponent, selector: "lib-stacked-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-stacked-bar-chart',
                        templateUrl: './stacked-bar-chart.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                    type: i0.Input
                }], chartData: [{
                    type: i0.Input
                }] } });

    var StackedBarChartModule = /** @class */ (function () {
        function StackedBarChartModule() {
        }
        return StackedBarChartModule;
    }());
    StackedBarChartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StackedBarChartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartModule, declarations: [StackedBarChartComponent], imports: [common.CommonModule, i2__namespace.NgxEchartsModule], exports: [StackedBarChartComponent] });
    StackedBarChartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartModule, imports: [[
                common.CommonModule,
                i2.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StackedBarChartModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [StackedBarChartComponent],
                        imports: [
                            common.CommonModule,
                            i2.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [StackedBarChartComponent]
                    }]
            }] });

    var BarChartComponent = /** @class */ (function () {
        function BarChartComponent(chartService) {
            this.chartService = chartService;
            this.renderFlag = 'LOADING';
            this.chartDataValue = [];
        }
        ;
        BarChartComponent.prototype.ngOnInit = function () {
            this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
            this.xAxisHeaderData = this.chartData.xAxis;
            this.yAxisHeaderData = this.chartData.yAxis;
            this.showChartData = this.chartData.toolbox;
            this.chartDataCheck();
        };
        BarChartComponent.prototype.ngOnChanges = function () {
            this.chartDataValue = this.chartData.data;
            this.chartDataCheck();
        };
        BarChartComponent.prototype.chartDataCheck = function () {
            if (this.renderFlag == 'LOADING') {
                this.chartDataOption = LOADING_GRAPHIC;
            }
            else if (this.renderFlag == 'DATA') {
                this.drawChart();
            }
            else {
                this.chartDataOption = this.noDataOption;
            }
        };
        BarChartComponent.prototype.drawChart = function () {
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
                    text: "" + ((_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''),
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
                        var tooltip = '';
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
                    data: this.chartDataValue.map(function (m) { return ({
                        value: m.name,
                    }); }),
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
                        data: this.chartDataValue.map(function (m) { return ({
                            value: m.value,
                            unit: m.unit.name
                        }); }),
                        type: 'bar',
                        barWidth: '40%',
                        label: {
                            show: true,
                            position: 'top'
                        }
                    }
                ]
            };
        };
        return BarChartComponent;
    }());
    BarChartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartComponent, deps: [{ token: ChartService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BarChartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2__namespace.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-bar-chart',
                        templateUrl: './bar-chart.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: ChartService }]; }, propDecorators: { renderFlag: [{
                    type: i0.Input
                }], chartData: [{
                    type: i0.Input
                }] } });

    var BarChartModule = /** @class */ (function () {
        function BarChartModule() {
        }
        return BarChartModule;
    }());
    BarChartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BarChartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, declarations: [BarChartComponent], imports: [common.CommonModule, i2__namespace.NgxEchartsModule], exports: [BarChartComponent] });
    BarChartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, imports: [[
                common.CommonModule,
                i2.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [BarChartComponent],
                        imports: [
                            common.CommonModule,
                            i2.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
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

    exports.BarChartComponent = BarChartComponent;
    exports.BarChartModule = BarChartModule;
    exports.ChartComponent = ChartComponent;
    exports.ChartModule = ChartModule;
    exports.ChartService = ChartService;
    exports.DoughnutChartComponent = DoughnutChartComponent;
    exports.DoughnutChartModule = DoughnutChartModule;
    exports.StackedBarChartComponent = StackedBarChartComponent;
    exports.StackedBarChartModule = StackedBarChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-chart.umd.js.map
