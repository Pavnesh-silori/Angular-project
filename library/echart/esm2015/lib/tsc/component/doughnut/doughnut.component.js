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
                    dataView: { show: this.chartData.data.toolbox.showDataView, readOnly: true },
                    restore: { show: this.chartData.data.toolbox.showRestore },
                    saveAsImage: { show: this.chartData.data.toolbox.showDownloadImage },
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
                text: `${this.chartData.title.name}`,
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
    }
}
DoughnutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoughnutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutComponent, selector: "lib-doughnut", inputs: { viewStateInp: "viewStateInp", dataInp: "dataInp" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"dataOption\"></div>", directives: [{ type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-doughnut',
                    templateUrl: './doughnut.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { viewStateInp: [{
                type: Input
            }], dataInp: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9lY2hhcnQvc3JjL2xpYi90c2MvY29tcG9uZW50L2RvdWdobnV0L2RvdWdobnV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9kb3VnaG51dC9kb3VnaG51dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFLeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFDdEQsZ0JBQWdCO0FBU2hCLE1BQU0sT0FBTyxpQkFBaUI7SUFZMUIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQy9C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QixTQUFTLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLFdBQVcsRUFBRSxNQUFNO3dCQUNuQixXQUFXLEVBQUUsQ0FBQztxQkFDakI7b0JBQ0QsS0FBSyxFQUFFO3dCQUNILElBQUksRUFBRSxLQUFLO3dCQUNYLFFBQVEsRUFBRSxRQUFRO3FCQUNyQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ04sS0FBSyxFQUFFOzRCQUNILElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxFQUFFOzRCQUNaLFVBQVUsRUFBRSxNQUFNO3lCQUNyQjtxQkFDSjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsSUFBSSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7aUJBQ3JDO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQzs7K0dBL0dRLGlCQUFpQjttR0FBakIsaUJBQWlCLHVJQ25COUIsOENBQTBDOzRGRG1CN0IsaUJBQWlCO2tCQVA3QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxNQUFNLEVBQUUsRUFDUDtpQkFDSjswRUFJRyxZQUFZO3NCQURYLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVDaGFydHNPcHRpb24gfSBmcm9tICdlY2hhcnRzJztcblxuaW1wb3J0IHsgRG91Z2hudXRDaGFydE0gfSBmcm9tICcuLi8uLi9tb2RlbC9kb3VnaG51dC5tb2RlbCc7XG5pbXBvcnQgeyBMT0FESU5HX0dSQVBISUMsIE5PX0RBVEFfR1JBUEhJQyB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2VjaGFydC5jb25zdGFudCc7XG5pbXBvcnQgeyBDaGFydFZpZXdTdGF0ZUVudW0gfSBmcm9tICcuLi8uLi9lbnVtL2VoYXJ0LmVudW0nO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgQ09NTU9OX0NPTlNUQU5UIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWRvdWdobnV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZG91Z2hudXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEb3VnaG51dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KClcbiAgICB2aWV3U3RhdGVJbnA6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgZGF0YUlucDogRG91Z2hudXRDaGFydE07XG5cbiAgICB2aWV3U3RhdGU6IGFueTtcbiAgICBjaGFydERhdGE6IERvdWdobnV0Q2hhcnRNO1xuICAgIGRhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG4gICAgbm9EYXRhT3B0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhSW5wICYmIHRoaXMuZGF0YUlucCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydERhdGEgPSB0aGlzLmRhdGFJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy52aWV3U3RhdGVJbnAgJiYgdGhpcy52aWV3U3RhdGVJbnApIHtcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gdGhpcy52aWV3U3RhdGVJbnA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vRGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jaGFydERhdGEudGl0bGUubmFtZSxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY2hhcnREYXRhLnRpdGxlLmNvbG9yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyYXBoaWM6IE5PX0RBVEFfR1JBUEhJQyxcbiAgICAgICAgICAgIHhBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgICAgICB5QXhpczogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2hlY2tEYXRhKCk7XG4gICAgfVxuXG4gICAgY2hlY2tEYXRhKCkge1xuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gQ2hhcnRWaWV3U3RhdGVFbnVtLkxPQURJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IExPQURJTkdfR1JBUEhJQztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSBDaGFydFZpZXdTdGF0ZUVudW0uSEFTX0RBVEEpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3U3RhdGUgPT0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICB0aGlzLmRhdGFPcHRpb24gPSB7XG4gICAgICAgICAgICB0b29sYm94OiB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVmlldzogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5kYXRhLnRvb2xib3guc2hvd0RhdGFWaWV3LCByZWFkT25seTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICByZXN0b3JlOiB7IHNob3c6IHRoaXMuY2hhcnREYXRhLmRhdGEudG9vbGJveC5zaG93UmVzdG9yZSB9LFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXNJbWFnZTogeyBzaG93OiB0aGlzLmNoYXJ0RGF0YS5kYXRhLnRvb2xib3guc2hvd0Rvd25sb2FkSW1hZ2UgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvb2x0aXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcCArPSAnPGI+PHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj4nICsgcGFyYW1zLmRhdGEubmFtZSArICc8L3NwYW4+PC9iPjxiciAvPic7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJ1ZhbHVlOiA8Yj48c3BhbiBzdHlsZT1cImZsb2F0OiByaWdodDsgbWFyZ2luLWxlZnQ6MTVweDtcIj4nICsgKHBhcmFtcy5kYXRhLnZhbHVlICE9IG51bGwgPyAocGFyYW1zLmRhdGEudmFsdWUpICsgJyAnICsgcGFyYW1zLmRhdGEudW5pdC5jb2RlIDogQ09NTU9OX0NPTlNUQU5ULkhZUEhFTikgKyAnPC9zcGFuPjwvYj4nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGAke3RoaXMuY2hhcnREYXRhLnRpdGxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY2hhcnREYXRhLnRpdGxlLmNvbG9yXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJzElJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnY2VudGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IFsnNDAlJywgJzcwJSddLFxuICAgICAgICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuY2hhcnREYXRhLmRhdGEubWV0YURhdGEsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cImRhdGFPcHRpb25cIj48L2Rpdj4iXX0=