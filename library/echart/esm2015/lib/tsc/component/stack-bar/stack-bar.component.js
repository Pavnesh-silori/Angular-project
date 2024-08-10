import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartViewStateEnum } from '../../enum/ehart.enum';
// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
// /tsc-library/
export class StackBarComponent {
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
        let seriesData = [];
        this.chartData.metaData.forEach(item => {
            item.barData.forEach(bar => {
                let seriesIndex = seriesData.findIndex(series => series.name == bar.name);
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
        let chartData = this.chartData;
        let tooltipHeaderLabel = this.chartData.tooltipHeaderLabel;
        let totalDataLabel = this.chartData.totalDataLabel;
        let totalDataValue = this.chartData.metaData.map(item => item.totalData.value);
        let totalDataUnit = this.chartData.metaData.map(item => item.totalData.unitCode);
        this.dataOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    const dataIndex = params[0].dataIndex;
                    let tooltip = '';
                    params.forEach(function (param) {
                        tooltip += '<b><span class="text-primary">' + param.name + '</span></b><br />';
                    });
                    if (tooltipHeaderLabel.trim() != '') {
                        tooltip += '<b style="font-size: 18px;">' + tooltipHeaderLabel + '</b><br />';
                    }
                    tooltip += totalDataLabel + ': <b><span style="float:right; margin-left:15px;">' + (totalDataValue[dataIndex] != null ? (totalDataValue[dataIndex]) + ' ' + totalDataUnit[dataIndex] : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
                    params.forEach(function (param) {
                        const barData = chartData.metaData[param.seriesIndex].barData.find(bar => bar.name == param.seriesName);
                        const unit = barData ? barData.unit.code : '';
                        tooltip += param.seriesName + ': <b><span style="float:right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b><br />';
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
                text: `${this.chartTitle.name}`,
                textStyle: {
                    color: this.chartTitle.color
                },
                padding: [7, 0, 0, 20],
            },
            xAxis: {
                type: 'category',
                data: this.chartData.metaData.map(item => item.xAxisSeries),
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
    }
}
StackBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StackBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StackBarComponent, selector: "lib-stack-bar", inputs: { viewStateInp: "viewStateInp", chartTitleInp: "chartTitleInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-stack-bar',
                    templateUrl: './stack-bar.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
                type: Input
            }], chartTitleInp: [{
                type: Input
            }], dataInp: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9zdGFjay1iYXIvc3RhY2stYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9zdGFjay1iYXIvc3RhY2stYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUl4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzNELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUN0RCxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLGlCQUFpQjtJQWlCMUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxD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SUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQ3ZDO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQ3ZDO1lBQ0QsTUFBTSxFQUFFLFVBQVU7U0FDckIsQ0FBQztJQUNOLENBQUM7OytHQTNKUSxpQkFBaUI7bUdBQWpCLGlCQUFpQix3S0NwQjlCLDhDQUEwQzs0RkRvQjdCLGlCQUFpQjtrQkFON0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7MEVBSUcsWUFBWTtzQkFEWCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRUNoYXJ0c09wdGlvbiB9IGZyb20gJ2VjaGFydHMnO1xuXG5pbXBvcnQgeyBMT0FESU5HX0dSQVBISUMsIE5PX0RBVEFfR1JBUEhJQyB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2VjaGFydC5jb25zdGFudCc7XG5pbXBvcnQgeyBDaGFydFZpZXdTdGF0ZUVudW0gfSBmcm9tICcuLi8uLi9lbnVtL2VoYXJ0LmVudW0nO1xuXG5pbXBvcnQgeyBDaGFydFRpdGxlTSB9IGZyb20gJy4uLy4uL21vZGVsL2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFN0YWNrQmFyQ2hhcnRNIH0gZnJvbSAnLi4vLi4vbW9kZWwvc3RhY2stYmFyLm1vZGVsJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1zdGFjay1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGFjay1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICB2aWV3U3RhdGVJbnA6IENoYXJ0Vmlld1N0YXRlRW51bTtcblxuICAgIEBJbnB1dCgpXG4gICAgY2hhcnRUaXRsZUlucDogQ2hhcnRUaXRsZU07XG5cbiAgICBASW5wdXQoKVxuICAgIGRhdGFJbnA6IFN0YWNrQmFyQ2hhcnRNO1xuXG4gICAgdmlld1N0YXRlOiBDaGFydFZpZXdTdGF0ZUVudW07XG4gICAgY2hhcnRUaXRsZTogQ2hhcnRUaXRsZU07XG4gICAgY2hhcnREYXRhOiBTdGFja0JhckNoYXJ0TTtcbiAgICBkYXRhT3B0aW9uOiBFQ2hhcnRzT3B0aW9uO1xuICAgIG5vRGF0YU9wdGlvbjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMudmlld1N0YXRlSW5wICYmIHRoaXMudmlld1N0YXRlSW5wKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IHRoaXMudmlld1N0YXRlSW5wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuY2hhcnRUaXRsZUlucCAmJiB0aGlzLmNoYXJ0VGl0bGVJbnApIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnRUaXRsZSA9IHRoaXMuY2hhcnRUaXRsZUlucDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmRhdGFJbnAgJiYgdGhpcy5kYXRhSW5wKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YSA9IHRoaXMuZGF0YUlucDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9EYXRhT3B0aW9uID0ge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNoYXJ0VGl0bGUubmFtZSxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY2hhcnRUaXRsZS5jb2xvclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFkZGluZzogWzcsIDAsIDAsIDIwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncmFwaGljOiBOT19EQVRBX0dSQVBISUMsXG4gICAgICAgICAgICB4QXhpczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICAgICAgeUF4aXM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNoZWNrRGF0YSgpO1xuICAgIH1cblxuICAgIGNoZWNrRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IENoYXJ0Vmlld1N0YXRlRW51bS5MT0FESU5HKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFPcHRpb24gPSBMT0FESU5HX0dSQVBISUM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3U3RhdGUgPT0gQ2hhcnRWaWV3U3RhdGVFbnVtLkhBU19EQVRBKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld1N0YXRlID09IENoYXJ0Vmlld1N0YXRlRW51bS5OT19EQVRBKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFPcHRpb24gPSB0aGlzLm5vRGF0YU9wdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdDaGFydCgpIHtcbiAgICAgICAgbGV0IHNlcmllc0RhdGEgPSBbXTtcblxuICAgICAgICB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5iYXJEYXRhLmZvckVhY2goYmFyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VyaWVzSW5kZXggPSBzZXJpZXNEYXRhLmZpbmRJbmRleChzZXJpZXMgPT4gc2VyaWVzLm5hbWUgPT0gYmFyLm5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChzZXJpZXNJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXNEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYmFyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrOiAnYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlcmllc0luZGV4ID0gc2VyaWVzRGF0YS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXJpZXNEYXRhW3Nlcmllc0luZGV4XS5kYXRhLnB1c2goYmFyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY2hhcnREYXRhID0gdGhpcy5jaGFydERhdGE7XG4gICAgICAgIGxldCB0b29sdGlwSGVhZGVyTGFiZWwgPSB0aGlzLmNoYXJ0RGF0YS50b29sdGlwSGVhZGVyTGFiZWw7XG4gICAgICAgIGxldCB0b3RhbERhdGFMYWJlbCA9IHRoaXMuY2hhcnREYXRhLnRvdGFsRGF0YUxhYmVsO1xuICAgICAgICBsZXQgdG90YWxEYXRhVmFsdWUgPSB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YS5tYXAoaXRlbSA9PiBpdGVtLnRvdGFsRGF0YS52YWx1ZSk7XG4gICAgICAgIGxldCB0b3RhbERhdGFVbml0ID0gdGhpcy5jaGFydERhdGEubWV0YURhdGEubWFwKGl0ZW0gPT4gaXRlbS50b3RhbERhdGEudW5pdENvZGUpO1xuXG4gICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IHBhcmFtc1swXS5kYXRhSW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvb2x0aXAgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJzxiPjxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+JyArIHBhcmFtLm5hbWUgKyAnPC9zcGFuPjwvYj48YnIgLz4nO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRlckxhYmVsLnRyaW0oKSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCArPSAnPGIgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7XCI+JyArIHRvb2x0aXBIZWFkZXJMYWJlbCArICc8L2I+PGJyIC8+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9IHRvdGFsRGF0YUxhYmVsICsgJzogPGI+PHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodDsgbWFyZ2luLWxlZnQ6MTVweDtcIj4nICsgKHRvdGFsRGF0YVZhbHVlW2RhdGFJbmRleF0gIT0gbnVsbCA/ICh0b3RhbERhdGFWYWx1ZVtkYXRhSW5kZXhdKSArICcgJyArIHRvdGFsRGF0YVVuaXRbZGF0YUluZGV4XSA6IENPTU1PTl9DT05TVEFOVC5IWVBIRU4pICsgJzwvc3Bhbj48L2I+PGJyIC8+JztcblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhckRhdGEgPSBjaGFydERhdGEubWV0YURhdGFbcGFyYW0uc2VyaWVzSW5kZXhdLmJhckRhdGEuZmluZChiYXIgPT4gYmFyLm5hbWUgPT0gcGFyYW0uc2VyaWVzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gYmFyRGF0YSA/IGJhckRhdGEudW5pdC5jb2RlIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gcGFyYW0uc2VyaWVzTmFtZSArICc6IDxiPjxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OjE1cHg7XCI+JyArIChwYXJhbS52YWx1ZSAhPSBudWxsID8gKHBhcmFtLnZhbHVlKSArICcgJyArIHVuaXQgOiBDT01NT05fQ09OU1RBTlQuSFlQSEVOKSArICc8L3NwYW4+PC9iPjxiciAvPic7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbGJveDoge1xuICAgICAgICAgICAgICAgIGZlYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXc6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd0RhdGFWaWV3LCByZWFkT25seTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBtYWdpY1R5cGU6IHsgc2hvdzogdGhpcy5jaGFydERhdGEuc2hvd01hZ2ljVHlwZSwgdHlwZTogWydsaW5lJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZTogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93UmVzdG9yZSB9LFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXNJbWFnZTogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93RG93bmxvYWRJbWFnZSB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHt9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIHRvcDogJzEwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzclJyxcbiAgICAgICAgICAgICAgICByaWdodDogJzUlJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICcxMCUnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHt0aGlzLmNoYXJ0VGl0bGUubmFtZX1gLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jaGFydFRpdGxlLmNvbG9yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YS5tYXAoaXRlbSA9PiBpdGVtLnhBeGlzU2VyaWVzKSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNoYXJ0RGF0YS54QXhpc0xhYmVsLFxuICAgICAgICAgICAgICAgIG5hbWVMb2NhdGlvbjogJ21pZGRsZScsXG4gICAgICAgICAgICAgICAgbmFtZUdhcDogdGhpcy5jaGFydERhdGEueEF4aXNOYW1lR2FwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY2hhcnREYXRhLnlBeGlzTGFiZWwsXG4gICAgICAgICAgICAgICAgbmFtZUxvY2F0aW9uOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lR2FwOiB0aGlzLmNoYXJ0RGF0YS55QXhpc05hbWVHYXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHNlcmllc0RhdGFcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJkYXRhT3B0aW9uXCI+PC9kaXY+Il19