import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../constant/echart.constant';
import { ChartViewStateEnum } from '../../enum/ehart.enum';
// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
// /tsc-library/
export class DoughnutComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9lY2hhcnQvc3JjL2xpYi90c2MvY29tcG9uZW50L2RvdWdobnV0L2RvdWdobnV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9kb3VnaG51dC9kb3VnaG51dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFJeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUszRCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFDdEQsZ0JBQWdCO0FBU2hCLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjFCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztRQUVELElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4QztRQUVELElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztT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QUN4QixTQUFTLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixXQUFXLEVBQUUsQ0FBQztxQkFDakI7b0JBQ0QsS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxLQUFLO3dCQUNYLFFBQVEsRUFBRSxRQUFRO3FCQUNyQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ04sS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxFQUFFOzRCQUNaLFVBQVUsRUFBRSxNQUFNO3lCQUNyQjtxQkFDSjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtpQkFDaEM7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDOzsrR0F2SFEsaUJBQWlCO21HQUFqQixpQkFBaUIsdUtDckI5Qiw4Q0FBMEM7NEZEcUI3QixpQkFBaUI7a0JBUDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLE1BQU0sRUFBRSxFQUNQO2lCQUNKOzBFQUlHLFlBQVk7c0JBRFgsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVDaGFydHNPcHRpb24gfSBmcm9tICdlY2hhcnRzJztcblxuaW1wb3J0IHsgTE9BRElOR19HUkFQSElDLCBOT19EQVRBX0dSQVBISUMgfSBmcm9tICcuLi8uLi9jb25zdGFudC9lY2hhcnQuY29uc3RhbnQnO1xuaW1wb3J0IHsgQ2hhcnRWaWV3U3RhdGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bS9laGFydC5lbnVtJztcblxuaW1wb3J0IHsgQ2hhcnRUaXRsZU0gfSBmcm9tICcuLi8uLi9tb2RlbC9jaGFydC5tb2RlbCc7XG5pbXBvcnQgeyBEb3VnaG51dENoYXJ0TSB9IGZyb20gJy4uLy4uL21vZGVsL2RvdWdobnV0Lm1vZGVsJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1kb3VnaG51dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvdWdobnV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRG91Z2hudXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpXG4gICAgdmlld1N0YXRlSW5wOiBDaGFydFZpZXdTdGF0ZUVudW07XG5cbiAgICBASW5wdXQoKVxuICAgIGNoYXJ0VGl0bGVJbnA6IENoYXJ0VGl0bGVNO1xuXG4gICAgQElucHV0KClcbiAgICBkYXRhSW5wOiBEb3VnaG51dENoYXJ0TTtcblxuICAgIHZpZXdTdGF0ZTogQ2hhcnRWaWV3U3RhdGVFbnVtO1xuICAgIGNoYXJ0VGl0bGU6IENoYXJ0VGl0bGVNO1xuICAgIGNoYXJ0RGF0YTogRG91Z2hudXRDaGFydE07XG4gICAgZGF0YU9wdGlvbjogRUNoYXJ0c09wdGlvbjtcbiAgICBub0RhdGFPcHRpb246IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnZpZXdTdGF0ZUlucCAmJiB0aGlzLnZpZXdTdGF0ZUlucCkge1xuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSB0aGlzLnZpZXdTdGF0ZUlucDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmNoYXJ0VGl0bGVJbnAgJiYgdGhpcy5jaGFydFRpdGxlSW5wKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0VGl0bGUgPSB0aGlzLmNoYXJ0VGl0bGVJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhSW5wICYmIHRoaXMuZGF0YUlucCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydERhdGEgPSB0aGlzLmRhdGFJbnA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vRGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jaGFydFRpdGxlLm5hbWUsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNoYXJ0VGl0bGUuY29sb3JcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JhcGhpYzogTk9fREFUQV9HUkFQSElDLFxuICAgICAgICAgICAgeEF4aXM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGVja0RhdGEoKTtcbiAgICB9XG5cbiAgICBjaGVja0RhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORykge1xuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld1N0YXRlID09IENoYXJ0Vmlld1N0YXRlRW51bS5IQVNfREFUQSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9uID0gdGhpcy5ub0RhdGFPcHRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3Q2hhcnQoKSB7XG4gICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3OiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLnNob3dEYXRhVmlldywgcmVhZE9ubHk6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZTogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93UmVzdG9yZSB9LFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXNJbWFnZTogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5zaG93RG93bmxvYWRJbWFnZSB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9ICc8Yj48c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeVwiPicgKyBwYXJhbXMuZGF0YS5uYW1lICsgJzwvc3Bhbj48L2I+PGJyIC8+JztcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCArPSAnVmFsdWU6IDxiPjxzcGFuIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0OyBtYXJnaW4tbGVmdDoxNXB4O1wiPicgKyAocGFyYW1zLmRhdGEudmFsdWUgIT0gbnVsbCA/IChwYXJhbXMuZGF0YS52YWx1ZSkgKyAnICcgKyBwYXJhbXMuZGF0YS51bml0LmNvZGUgOiBDT01NT05fQ09OU1RBTlQuSFlQSEVOKSArICc8L3NwYW4+PC9iPic7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogYCR7dGhpcy5jaGFydFRpdGxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY2hhcnRUaXRsZS5jb2xvclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFkZGluZzogWzcsIDAsIDAsIDIwXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBib3R0b206ICcxJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJ2NlbnRlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBbJzQwJScsICc3MCUnXSxcbiAgICAgICAgICAgICAgICAgICAgYXZvaWRMYWJlbE92ZXJsYXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxMaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCI8ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwiZGF0YU9wdGlvblwiPjwvZGl2PiJdfQ==