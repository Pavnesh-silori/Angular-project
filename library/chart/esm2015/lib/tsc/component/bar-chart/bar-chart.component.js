import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC } from '../../constant/chart.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../../chart.service";
import * as i2 from "ngx-echarts";
export class BarChartComponent {
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
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, deps: [{ token: i1.ChartService }], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvY2hhcnQvc3JjL2xpYi90c2MvY29tcG9uZW50L2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUt6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFTaEUsTUFBTSxPQUFPLGlCQUFpQjtJQWUxQixZQUNZLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBZDdCLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFNeEMsbUJBQWMsR0FBVSxFQUFFLENBQUM7SUFTdkIsQ0FBQztJQUpjLENBQUM7SUFNcEIsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7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ci9jb3JlJztcblxuaW1wb3J0IHsgRUNoYXJ0c09wdGlvbiB9IGZyb20gJ2VjaGFydHMnO1xuXG5pbXBvcnQgeyBDaGFydE0gfSBmcm9tICcuLi8uLi9tb2RlbC9jaGFydC5tb2RlbCc7XG5pbXBvcnQgeyBMT0FESU5HX0dSQVBISUMgfSBmcm9tICcuLi8uLi9jb25zdGFudC9jaGFydC5jb25zdGFudCc7XG5cbmltcG9ydCB7IENoYXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NoYXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1iYXItY2hhcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgcmVuZGVyRmxhZzogc3RyaW5nID0gJ0xPQURJTkcnO1xuICAgIEBJbnB1dCgpIGNoYXJ0RGF0YTogQ2hhcnRNO1xuXG4gICAgY2hhcnREYXRhT3B0aW9uOiBFQ2hhcnRzT3B0aW9uO1xuICAgIG5vRGF0YU9wdGlvbjtcblxuICAgIGNoYXJ0RGF0YVZhbHVlOiBhbnlbXSA9IFtdO1xuXG4gICAgeEF4aXNIZWFkZXJEYXRhOiBhbnk7XG4gICAgeUF4aXNIZWFkZXJEYXRhOiBhbnk7XG4gICAgc2hvd0NoYXJ0RGF0YTogYW55O1xuICAgIGNoYXJ0TWV0YURhdGE6IGFueTs7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjaGFydFNlcnZpY2U6IENoYXJ0U2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub0RhdGFPcHRpb24gPSB0aGlzLmNoYXJ0U2VydmljZS5jcmVhdGVPcHRpb25XaXRoVGl0bGVBbmRWYWx1ZSh0aGlzLmNoYXJ0RGF0YS50aXRsZS5uYW1lLCB0aGlzLmNoYXJ0RGF0YS50aXRsZS5jb2xvcik7XG4gICAgICAgIHRoaXMueEF4aXNIZWFkZXJEYXRhID0gdGhpcy5jaGFydERhdGEueEF4aXM7XG4gICAgICAgIHRoaXMueUF4aXNIZWFkZXJEYXRhID0gdGhpcy5jaGFydERhdGEueUF4aXM7XG4gICAgICAgIHRoaXMuc2hvd0NoYXJ0RGF0YSA9IHRoaXMuY2hhcnREYXRhLnRvb2xib3g7XG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5jaGFydERhdGFWYWx1ZSA9IHRoaXMuY2hhcnREYXRhLmRhdGE7XG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGFydERhdGFDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnTE9BRElORycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnREFUQScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3OiB7IHNob3c6IHRoaXMuc2hvd0NoYXJ0RGF0YS5zaG93RGF0YVZpZXcsIHJlYWRPbmx5OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hZ2ljVHlwZTogeyBzaG93OiB0aGlzLnNob3dDaGFydERhdGEubGluZUNoYXJ0VmlldywgdHlwZTogWydsaW5lJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZTogeyBzaG93OiB0aGlzLnNob3dDaGFydERhdGEucmVzdG9yZUdyYXBoIH0sXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBc0ltYWdlOiB7IHNob3c6IHRoaXMuc2hvd0NoYXJ0RGF0YS5zYXZlSW1hZ2UgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogYCR7dGhpcy5jaGFydERhdGEudGl0bGUubmFtZSA/PyAnJ31gLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jaGFydERhdGEudGl0bGUubmFtZSAhPSBudWxsID8gKHRoaXMuY2hhcnREYXRhLnRpdGxlLmNvbG9yID8/ICdibGFjaycpIDogJycsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9IHBhcmFtc1swXS5heGlzVmFsdWUgKyAnPGJyIC8+JztcblxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9ICdWYWx1ZTogPGI+PHNwYW4gc3R5bGU9XCJmbG9hdDogcmlnaHQ7IG1hcmdpbi1sZWZ0OjE1cHg7XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHBhcmFtc1swXS52YWx1ZSAhPSBudWxsID8gcGFyYW1zWzBdLnZhbHVlIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFyYW1zWzBdLmRhdGEudW5pdCAhPSBudWxsID8gJyAnICsgcGFyYW1zWzBdLmRhdGEudW5pdCA6ICcnKSkgKyAnPC9zcGFuPjwvYj4nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIHRvcDogJzEwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzclJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzUlJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICcxMCUnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnhBeGlzSGVhZGVyRGF0YS5sYWJlbCxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YVZhbHVlLm1hcChtID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtLm5hbWUsXG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduV2l0aExhYmVsOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnlBeGlzSGVhZGVyRGF0YS5sYWJlbCxcbiAgICAgICAgICAgICAgICBuYW1lTG9jYXRpb246IHRoaXMueUF4aXNIZWFkZXJEYXRhLnBvc2l0aW9uID8/ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgIG5hbWVHYXA6IDcwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YVZhbHVlLm1hcChtID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IG0udW5pdC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAnNDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJjaGFydERhdGFPcHRpb25cIj48L2Rpdj4iXX0=