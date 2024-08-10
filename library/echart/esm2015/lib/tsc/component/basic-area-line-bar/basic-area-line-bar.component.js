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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYXJlYS1saW5lLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2VjaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvYmFzaWMtYXJlYS1saW5lLWJhci9iYXNpYy1hcmVhLWxpbmUtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9iYXNpYy1hcmVhLWxpbmUtYmFyL2Jhc2ljLWFyZWEtbGluZS1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBSXhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzFFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUN0RCxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLHlCQUF5QjtJQW9CbEM7UUFQQSxjQUFTLEdBQWtCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQU8xQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztRQUVELElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztT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dCwgSW5wdXQsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cyc7XG5cbmltcG9ydCB7IExPQURJTkdfR1JBUEhJQywgTk9fREFUQV9HUkFQSElDIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvZWNoYXJ0LmNvbnN0YW50JztcbmltcG9ydCB7IENoYXJ0VHlwZUVudW0sIENoYXJ0Vmlld1N0YXRlRW51bSB9IGZyb20gJy4uLy4uL2VudW0vZWhhcnQuZW51bSc7XG5cbmltcG9ydCB7IENoYXJ0VGl0bGVNIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2hhcnQubW9kZWwnO1xuaW1wb3J0IHsgQmFzaWNBcmVhTGluZUJhckNoYXJ0TSB9IGZyb20gJy4uLy4uL21vZGVsL2Jhc2ljLWFyZWEtbGluZS1iYXIubW9kZWwnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgQ09NTU9OX0NPTlNUQU5UIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWJhc2ljLWFyZWEtbGluZS1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNpYy1hcmVhLWxpbmUtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2ljQXJlYUxpbmVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpXG4gICAgY2hhcnRUeXBlSW5wOiBDaGFydFR5cGVFbnVtO1xuXG4gICAgQElucHV0KClcbiAgICB2aWV3U3RhdGVJbnA6IENoYXJ0Vmlld1N0YXRlRW51bTtcblxuICAgIEBJbnB1dCgpXG4gICAgY2hhcnRUaXRsZUlucDogQ2hhcnRUaXRsZU07XG5cbiAgICBASW5wdXQoKVxuICAgIGRhdGFJbnA6IEJhc2ljQXJlYUxpbmVCYXJDaGFydE07XG5cbiAgICBjaGFydFR5cGU6IENoYXJ0VHlwZUVudW0gPSBDaGFydFR5cGVFbnVtLkJBU0lDX0xJTkVfQ0hBUlQ7XG4gICAgdmlld1N0YXRlOiBDaGFydFZpZXdTdGF0ZUVudW07XG4gICAgY2hhcnRUaXRsZTogQ2hhcnRUaXRsZU07XG4gICAgY2hhcnREYXRhOiBCYXNpY0FyZWFMaW5lQmFyQ2hhcnRNO1xuICAgIGRhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG4gICAgbm9EYXRhT3B0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy52aWV3U3RhdGVJbnAgJiYgdGhpcy52aWV3U3RhdGVJbnApIHtcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gdGhpcy52aWV3U3RhdGVJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5jaGFydFRpdGxlSW5wICYmIHRoaXMuY2hhcnRUaXRsZUlucCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydFRpdGxlID0gdGhpcy5jaGFydFRpdGxlSW5wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuY2hhcnRUeXBlSW5wICYmIHRoaXMuY2hhcnRUeXBlSW5wKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9IHRoaXMuY2hhcnRUeXBlSW5wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0YUlucCAmJiB0aGlzLmRhdGFJbnApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhID0gdGhpcy5kYXRhSW5wO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub0RhdGFPcHRpb24gPSB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY2hhcnRUaXRsZS5uYW1lLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jaGFydFRpdGxlLmNvbG9yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyYXBoaWM6IE5PX0RBVEFfR1JBUEhJQyxcbiAgICAgICAgICAgIHhBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgICAgICB5QXhpczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2hlY2tEYXRhKCk7XG4gICAgfVxuXG4gICAgY2hlY2tEYXRhKCkge1xuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gQ2hhcnRWaWV3U3RhdGVFbnVtLkxPQURJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IExPQURJTkdfR1JBUEhJQztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uSEFTX0RBVEEpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3U3RhdGUgPT0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5jaGFydERhdGEudW5pdC5jb2RlO1xuXG4gICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3OiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dEYXRhVmlldywgcmVhZE9ubHk6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFnaWNUeXBlOiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dNYWdpY1R5cGUsIHR5cGU6IFsnbGluZScsICdiYXInXSB9LFxuICAgICAgICAgICAgICAgICAgICByZXN0b3JlOiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dSZXN0b3JlIH0sXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBc0ltYWdlOiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dEb3dubG9hZEltYWdlIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9ICc8Yj48c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPicgKyBwYXJhbXNbMF0ubmFtZSArICc8L3NwYW4+PC9iPjxiciAvPic7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJ1ZhbHVlOiA8Yj48c3BhbiBzdHlsZT1cImZsb2F0OiByaWdodDsgbWFyZ2luLWxlZnQ6MTVweDtcIj4nICsgKHBhcmFtc1swXS52YWx1ZSAhPSBudWxsID8gKHBhcmFtc1swXS52YWx1ZSkgKyAnICcgKyB1bml0IDogQ09NTU9OX0NPTlNUQU5ULkhZUEhFTikgKyAnPC9zcGFuPjwvYj4nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIHRvcDogJzEwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzclJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzUlJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICcxMCUnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFab29tOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93RGF0YVpvb21TbGlkZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2lkZScsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd0RhdGFab29tU2xpZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLmNoYXJ0VGl0bGUubmFtZX1gLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jaGFydFRpdGxlLmNvbG9yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICBib3VuZGFyeUdhcDogdGhpcy5jaGFydFR5cGUgPT0gQ2hhcnRUeXBlRW51bS5CQVNJQ19CQVJfQ0hBUlQgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5jaGFydERhdGEubWV0YURhdGEubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNoYXJ0RGF0YS54QXhpc0xhYmVsLFxuICAgICAgICAgICAgICAgIG5hbWVMb2NhdGlvbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgbmFtZUdhcDogdGhpcy5jaGFydERhdGEueEF4aXNOYW1lR2FwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY2hhcnREYXRhLnlBeGlzTGFiZWwsXG4gICAgICAgICAgICAgICAgbmFtZUxvY2F0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lR2FwOiB0aGlzLmNoYXJ0RGF0YS55QXhpc05hbWVHYXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAnNDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRoaXMuY2hhcnRUeXBlID09IENoYXJ0VHlwZUVudW0uQkFTSUNfQkFSX0NIQVJUID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuY2hhcnREYXRhLm1ldGFEYXRhLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmNoYXJ0VHlwZSA9PSBDaGFydFR5cGVFbnVtLkJBU0lDX0JBUl9DSEFSVCA/ICdiYXInIDogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHRoaXMuY2hhcnRUeXBlID09IENoYXJ0VHlwZUVudW0uQkFTSUNfQVJFQV9DSEFSVCA/IHt9IDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cImRhdGFPcHRpb25cIj48L2Rpdj4iXX0=