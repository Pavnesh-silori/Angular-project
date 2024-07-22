import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC } from '../../constant/chart.constant';
import { commonConstant } from '../../constant/common.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../../chart.service";
import * as i2 from "ngx-echarts";
export class StackedBarChartComponent {
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
StackedBarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartComponent, deps: [{ token: i1.ChartService }], target: i0.ɵɵFactoryTarget.Component });
StackedBarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StackedBarChartComponent, selector: "lib-stacked-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-stacked-bar-chart',
                    templateUrl: './stacked-bar-chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhY2tlZC1iYXItY2hhcnQvc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhY2tlZC1iYXItY2hhcnQvc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBSXhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUdoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFRaEUsTUFBTSxPQUFPLHdCQUF3QjtJQW9CakMsWUFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQW5CN0IsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQWF4QyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRXJCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBRTFCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO0lBRzVCLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsZUFB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SSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDdEIsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQzFELENBQUM7aUJBQ0o7YUFDSixDQUFDLENBQUM7U0FDTixDQUFDO0lBQ04sQ0FBQzs7c0hBcElRLHdCQUF3QjswR0FBeEIsd0JBQXdCLGdKQ2ZyQyxtREFBK0M7NEZEZWxDLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsb0NBQW9DO29CQUNqRCxNQUFNLEVBQUUsRUFBRTtpQkFDYjttR0FHWSxVQUFVO3NCQUFsQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRUNoYXJ0c09wdGlvbiB9IGZyb20gJ2VjaGFydHMnO1xuXG5pbXBvcnQgeyBMT0FESU5HX0dSQVBISUMgfSBmcm9tICcuLi8uLi9jb25zdGFudC9jaGFydC5jb25zdGFudCc7XG5cblxuaW1wb3J0IHsgY29tbW9uQ29uc3RhbnQgfSBmcm9tICcuLi8uLi9jb25zdGFudC9jb21tb24uY29uc3RhbnQnO1xuXG5pbXBvcnQgeyBDaGFydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jaGFydC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXN0YWNrZWQtYmFyLWNoYXJ0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHJlbmRlckZsYWc6IHN0cmluZyA9ICdMT0FESU5HJztcblxuICAgIEBJbnB1dCgpIGNoYXJ0RGF0YTogYW55O1xuXG4gICAgc3RhY2tlZERhdGE6IGFueTtcblxuXG4gICAgc2hvd0NoYXJ0RGF0YTogYW55O1xuICAgIGNoYXJ0TWV0YURhdGE6IGFueTtcblxuICAgIGNoYXJ0RGF0YU9wdGlvbjogRUNoYXJ0c09wdGlvbjtcbiAgICBub0RhdGFPcHRpb247XG5cbiAgICBzaG93RGF0YTogYW55W10gPSBbXTtcbiAgICB0aXRsZURhdGE6IGFueTtcbiAgICBzaG93U3RhY2tlZERhdGE6IGFueSA9IFtdO1xuXG4gICAgY29tbW9uQ29uc3RhbnQgPSBjb21tb25Db25zdGFudDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjaGFydFNlcnZpY2U6IENoYXJ0U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub0RhdGFPcHRpb24gPSB0aGlzLmNoYXJ0U2VydmljZS5jcmVhdGVPcHRpb25XaXRoVGl0bGVBbmRWYWx1ZSh0aGlzLmNoYXJ0RGF0YS50aXRsZS5uYW1lLCB0aGlzLmNoYXJ0RGF0YS50aXRsZS5jb2xvcik7XG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd1N0YWNrZWREYXRhID0gW107XG4gICAgICAgIHRoaXMuc2hvd0NoYXJ0RGF0YSA9IHRoaXMuY2hhcnREYXRhLnRvb2xib3g7XG4gICAgICAgIHRoaXMuc3RhY2tlZERhdGEgPSB0aGlzLmNoYXJ0RGF0YS5kYXRhLmRhdGE7XG5cbiAgICAgICAgdGhpcy50aXRsZURhdGEgPSB0aGlzLmNoYXJ0RGF0YS5kYXRhLnZlaGljbGVzO1xuICAgICAgICBpZiAodGhpcy5zdGFja2VkRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zdGFja2VkRGF0YS5mb3JFYWNoKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiBPYmplY3Qua2V5cyhyZXMuZGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFja2VkRGF0YS5wdXNoKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3dTdGFja2VkRGF0YS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJGbGFnID0gJ05PX0RBVEEnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGFydERhdGFDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnTE9BRElORycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnREFUQScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3OiB7IHNob3c6IHRoaXMuc2hvd0NoYXJ0RGF0YS5mZWF0dXJlLnNob3dEYXRhVmlldywgcmVhZE9ubHk6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFnaWNUeXBlOiB7IHNob3c6IHRoaXMuc2hvd0NoYXJ0RGF0YS5mZWF0dXJlLmxpbmVDaGFydFZpZXcsIHR5cGU6IFsnbGluZSddIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3RvcmU6IHsgc2hvdzogdGhpcy5zaG93Q2hhcnREYXRhLmZlYXR1cmUucmVzdG9yZUdyYXBoIH0sXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBc0ltYWdlOiB7IHNob3c6IHRoaXMuc2hvd0NoYXJ0RGF0YS5mZWF0dXJlLnNhdmVJbWFnZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICB0b3A6IDMwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogODAsXG4gICAgICAgICAgICAgICAgbGVmdDogNTAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLmNoYXJ0RGF0YS50aXRsZS5uYW1lID8/ICcnfWAsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNoYXJ0RGF0YS50aXRsZS5uYW1lICE9IG51bGwgPyAodGhpcy5jaGFydERhdGEudGl0bGUuY29sb3IgPz8gJ2JsYWNrJykgOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmNoYXJ0RGF0YS5sZWdlbmQudG9wID8/ICc1cHgnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5jaGFydERhdGEubGVnZW5kLmJvdHRvbSA/PyAnMHB4JyxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmNoYXJ0RGF0YS5sZWdlbmQubGVmdCA/PyAnMHB4JyxcbiAgICAgICAgICAgICAgICByaWdodDogdGhpcy5jaGFydERhdGEubGVnZW5kLnJpZ2h0ID8/ICcwcHgnXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGFja2VkRGF0YS5tYXAobSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgbmFtZVRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFszMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogdGhpcy50aXRsZURhdGEubWFwKHJlcyA9PiAoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlcyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBzdGFjazogJ2FkJyxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6ICdzZXJpZXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnNob3dTdGFja2VkRGF0YS5tYXAobSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbVtyZXNdLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRm9ybWF0dGVyOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gY29tbW9uQ29uc3RhbnQuTk9fREFUQSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCI8ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwiY2hhcnREYXRhT3B0aW9uXCI+PC9kaXY+Il19