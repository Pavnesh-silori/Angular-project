import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartTypeEnum, ChartViewStateEnum } from '../../enum/ehart.enum';
// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
// /tsc-library/
export class BasicAreaLineBarComponent {
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
        var _a, _b;
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
                    areaStyle: this.chartType == ChartTypeEnum.BASIC_AREA_CHART ? {} : null,
                    markLine: {
                        data: (_b = (_a = this.chartData) === null || _a === void 0 ? void 0 : _a.markLine) === null || _b === void 0 ? void 0 : _b.map(item => ({
                            lineStyle: {
                                type: 'dashed',
                                color: `${item.color}`,
                            },
                            label: {
                                formatter: `${item.label} : ${item.value}`,
                                position: 'middle',
                                offset: [0, 5]
                            },
                            yAxis: item.value
                        }))
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYXJlYS1saW5lLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2VjaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvYmFzaWMtYXJlYS1saW5lLWJhci9iYXNpYy1hcmVhLWxpbmUtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9iYXNpYy1hcmVhLWxpbmUtYmFyL2Jhc2ljLWFyZWEtbGluZS1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBSXhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUN0RCxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLHlCQUF5QjtJQW9CbEM7UUFQQSxjQUFTLEdBQWtCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQU8xQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztRQUVELElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztT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QUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDakI7NEJBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3lCQUNwQixDQUFDLENBQUM7cUJBQ047aUJBQ0o7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDOzt1SEFoS1EseUJBQXlCOzJHQUF6Qix5QkFBeUIsZ05DcEJ0Qyw4Q0FBMEM7NEZEb0I3Qix5QkFBeUI7a0JBTnJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztvQkFDbkQsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7MEVBR0csWUFBWTtzQkFEWCxLQUFLO2dCQUlOLFlBQVk7c0JBRFgsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVDaGFydHNPcHRpb24gfSBmcm9tICdlY2hhcnRzJztcblxuaW1wb3J0IHsgTE9BRElOR19HUkFQSElDLCBOT19EQVRBX0dSQVBISUMgfSBmcm9tICcuLi8uLi9jb25zdGFudC9lY2hhcnQuY29uc3RhbnQnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlRW51bSwgQ2hhcnRWaWV3U3RhdGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bS9laGFydC5lbnVtJztcblxuaW1wb3J0IHsgQ2hhcnRUaXRsZU0gfSBmcm9tICcuLi8uLi9tb2RlbC9jaGFydC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNpY0FyZWFMaW5lQmFyQ2hhcnRNIH0gZnJvbSAnLi4vLi4vbW9kZWwvYmFzaWMtYXJlYS1saW5lLWJhci5tb2RlbCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItYmFzaWMtYXJlYS1saW5lLWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2ljLWFyZWEtbGluZS1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQmFzaWNBcmVhTGluZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KClcbiAgICBjaGFydFR5cGVJbnA6IENoYXJ0VHlwZUVudW07XG5cbiAgICBASW5wdXQoKVxuICAgIHZpZXdTdGF0ZUlucDogQ2hhcnRWaWV3U3RhdGVFbnVtO1xuXG4gICAgQElucHV0KClcbiAgICBjaGFydFRpdGxlSW5wOiBDaGFydFRpdGxlTTtcblxuICAgIEBJbnB1dCgpXG4gICAgZGF0YUlucDogQmFzaWNBcmVhTGluZUJhckNoYXJ0TTtcblxuICAgIGNoYXJ0VHlwZTogQ2hhcnRUeXBlRW51bSA9IENoYXJ0VHlwZUVudW0uQkFTSUNfTElORV9DSEFSVDtcbiAgICB2aWV3U3RhdGU6IENoYXJ0Vmlld1N0YXRlRW51bTtcbiAgICBjaGFydFRpdGxlOiBDaGFydFRpdGxlTTtcbiAgICBjaGFydERhdGE6IEJhc2ljQXJlYUxpbmVCYXJDaGFydE07XG4gICAgZGF0YU9wdGlvbjogRUNoYXJ0c09wdGlvbjtcbiAgICBub0RhdGFPcHRpb246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnZpZXdTdGF0ZUlucCAmJiB0aGlzLnZpZXdTdGF0ZUlucCkge1xuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSB0aGlzLnZpZXdTdGF0ZUlucDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmNoYXJ0VGl0bGVJbnAgJiYgdGhpcy5jaGFydFRpdGxlSW5wKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0VGl0bGUgPSB0aGlzLmNoYXJ0VGl0bGVJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5jaGFydFR5cGVJbnAgJiYgdGhpcy5jaGFydFR5cGVJbnApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydFR5cGVJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhSW5wICYmIHRoaXMuZGF0YUlucCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydERhdGEgPSB0aGlzLmRhdGFJbnA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vRGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jaGFydFRpdGxlLm5hbWUsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNoYXJ0VGl0bGUuY29sb3JcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JhcGhpYzogTk9fREFUQV9HUkFQSElDLFxuICAgICAgICAgICAgeEF4aXM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja0RhdGEoKTtcbiAgICB9XG5cbiAgICBjaGVja0RhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORykge1xuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld1N0YXRlID09IENoYXJ0Vmlld1N0YXRlRW51bS5IQVNfREFUQSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9uID0gdGhpcy5ub0RhdGFPcHRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3Q2hhcnQoKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmNoYXJ0RGF0YS51bml0LmNvZGU7XG5cbiAgICAgICAgdGhpcy5kYXRhT3B0aW9uID0ge1xuICAgICAgICAgICAgdG9vbGJveDoge1xuICAgICAgICAgICAgICAgIGZlYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXc6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd0RhdGFWaWV3LCByZWFkT25seTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBtYWdpY1R5cGU6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd01hZ2ljVHlwZSwgdHlwZTogWydsaW5lJywgJ2JhciddIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3RvcmU6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd1Jlc3RvcmUgfSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzSW1hZ2U6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd0Rvd25sb2FkSW1hZ2UgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdheGlzJyxcbiAgICAgICAgICAgICAgICBheGlzUG9pbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2hhZG93J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJzxiPjxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+JyArIHBhcmFtc1swXS5uYW1lICsgJzwvc3Bhbj48L2I+PGJyIC8+JztcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCArPSAnVmFsdWU6IDxiPjxzcGFuIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0OyBtYXJnaW4tbGVmdDoxNXB4O1wiPicgKyAocGFyYW1zWzBdLnZhbHVlICE9IG51bGwgPyAocGFyYW1zWzBdLnZhbHVlKSArICcgJyArIHVuaXQgOiBDT01NT05fQ09OU1RBTlQuSFlQSEVOKSArICc8L3NwYW4+PC9iPic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAnMTAlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnNyUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnNSUnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJzEwJScsXG4gICAgICAgICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVpvb206IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dEYXRhWm9vbVNsaWRlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5zaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93RGF0YVpvb21TbGlkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGAke3RoaXMuY2hhcnRUaXRsZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNoYXJ0VGl0bGUuY29sb3JcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiB0aGlzLmNoYXJ0VHlwZSA9PSBDaGFydFR5cGVFbnVtLkJBU0lDX0JBUl9DSEFSVCA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YS5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY2hhcnREYXRhLnhBeGlzTGFiZWwsXG4gICAgICAgICAgICAgICAgbmFtZUxvY2F0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lR2FwOiB0aGlzLmNoYXJ0RGF0YS54QXhpc05hbWVHYXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5jaGFydERhdGEueUF4aXNMYWJlbCxcbiAgICAgICAgICAgICAgICBuYW1lTG9jYXRpb246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgIG5hbWVHYXA6IHRoaXMuY2hhcnREYXRhLnlBeGlzTmFtZUdhcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6ICc0MCUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdGhpcy5jaGFydFR5cGUgPT0gQ2hhcnRUeXBlRW51bS5CQVNJQ19CQVJfQ0hBUlQgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5jaGFydERhdGEubWV0YURhdGEubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY2hhcnRUeXBlID09IENoYXJ0VHlwZUVudW0uQkFTSUNfQkFSX0NIQVJUID8gJ2JhcicgOiAnbGluZScsXG4gICAgICAgICAgICAgICAgICAgIGFyZWFTdHlsZTogdGhpcy5jaGFydFR5cGUgPT0gQ2hhcnRUeXBlRW51bS5CQVNJQ19BUkVBX0NIQVJUID8ge30gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBtYXJrTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5jaGFydERhdGE/Lm1hcmtMaW5lPy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGFzaGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGAke2l0ZW0uY29sb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogYCR7aXRlbS5sYWJlbH0gOiAke2l0ZW0udmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IFswLCA1XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXM6IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cImRhdGFPcHRpb25cIj48L2Rpdj4iXX0=