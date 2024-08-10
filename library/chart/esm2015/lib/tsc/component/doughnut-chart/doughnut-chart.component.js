import { Component, Input } from '@angular/core';
import { LOADING_GRAPHIC } from '../../constant/chart.constant';
import * as i0 from "@angular/core";
import * as i1 from "../../../chart.service";
import * as i2 from "ngx-echarts";
export class DoughnutChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.renderFlag = 'LOADING';
    }
    ngOnInit() {
        this.noDataOption = this.chartService.createOptionWithTitleAndValue(this.chartData.title.name, this.chartData.title.color);
        this.chartDataCheck();
    }
    ngOnChanges() {
        console.log(this.chartData, "ChartData", this.renderFlag);
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
        var _a, _b, _c, _d, _e;
        this.chartDataOption = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    console.log(params, "ParamsData");
                    let tooltip = '';
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
                text: `${(_a = this.chartData.title.name) !== null && _a !== void 0 ? _a : ''}`,
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
                    data: this.chartData.data.map(m => ({
                        name: m.name,
                        value: m.value,
                        unit: m.unit.name
                    })),
                },
            ]
        };
    }
}
DoughnutChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartComponent, deps: [{ token: i1.ChartService }], target: i0.ɵɵFactoryTarget.Component });
DoughnutChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DoughnutChartComponent, selector: "lib-doughnut-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData" }, usesOnChanges: true, ngImport: i0, template: "<div echarts [options]=\"chartDataOption\"></div>", directives: [{ type: i2.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-doughnut-chart',
                    templateUrl: './doughnut-chart.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ChartService }]; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBVWhFLE1BQU0sT0FBTyxzQkFBc0I7SUFRL0IsWUFDWSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVA3QixlQUFVLEdBQVcsU0FBUyxDQUFDO0lBU3hDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELFdBQVc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxFQUFF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QUFFO3dCQUNOLEtBQUssRUFBRTs0QkFDSCxJQUFJLEVBQUUsS0FBSzs0QkFDWCxRQUFRLEVBQUUsRUFBRTs0QkFDWixVQUFVLEVBQUUsTUFBTTt5QkFDckI7cUJBQ0o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLElBQUksRUFBRSxLQUFLO3FCQUNkO29CQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7d0JBQ1osS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO3dCQUNkLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7cUJBQ3BCLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7O29IQWpHUSxzQkFBc0I7d0dBQXRCLHNCQUFzQiw2SUNmbkMsbURBQStDOzRGRGVsQyxzQkFBc0I7a0JBTmxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCO21HQUlZLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cyc7XG5cbmltcG9ydCB7IENoYXJ0TSB9IGZyb20gJy4uLy4uL21vZGVsL2NoYXJ0Lm1vZGVsJztcbmltcG9ydCB7IExPQURJTkdfR1JBUEhJQyB9IGZyb20gJy4uLy4uL2NvbnN0YW50L2NoYXJ0LmNvbnN0YW50JztcblxuaW1wb3J0IHsgQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY2hhcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWRvdWdobnV0LWNoYXJ0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZG91Z2hudXQtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEb3VnaG51dENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHJlbmRlckZsYWc6IHN0cmluZyA9ICdMT0FESU5HJztcbiAgICBASW5wdXQoKSBjaGFydERhdGE6IENoYXJ0TTtcblxuICAgIGNoYXJ0RGF0YU9wdGlvbjogRUNoYXJ0c09wdGlvbjtcbiAgICBub0RhdGFPcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjaGFydFNlcnZpY2U6IENoYXJ0U2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vRGF0YU9wdGlvbiA9IHRoaXMuY2hhcnRTZXJ2aWNlLmNyZWF0ZU9wdGlvbldpdGhUaXRsZUFuZFZhbHVlKHRoaXMuY2hhcnREYXRhLnRpdGxlLm5hbWUsIHRoaXMuY2hhcnREYXRhLnRpdGxlLmNvbG9yKTtcbiAgICAgICAgdGhpcy5jaGFydERhdGFDaGVjaygpO1xuICAgIH1cblxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhcnREYXRhLCBcIkNoYXJ0RGF0YVwiLCB0aGlzLnJlbmRlckZsYWcpXG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICB9XG5cbiAgICBjaGFydERhdGFDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnTE9BRElORycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnREFUQScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcywgXCJQYXJhbXNEYXRhXCIpXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b29sdGlwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJzxiPjxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+JyArIHBhcmFtcy5kYXRhLm5hbWUgKyAnPC9zcGFuPjwvYj48YnIgLz4nO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9ICdWYWx1ZTogPGI+PHNwYW4gc3R5bGU9XCJmbG9hdDogcmlnaHQ7IG1hcmdpbi1sZWZ0OjE1cHg7XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHBhcmFtcy5kYXRhLnZhbHVlICE9IG51bGwgPyBwYXJhbXMuZGF0YS52YWx1ZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcmFtcy5kYXRhLnVuaXQgIT0gbnVsbCA/ICcgJyArIHBhcmFtcy5kYXRhLnVuaXQgOiAnJykpICsgJzwvc3Bhbj48L2I+JztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2xib3g6IHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3OiB7IHNob3c6IHRydWUsIHJlYWRPbmx5OiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIHNhdmVBc0ltYWdlOiB7IHNob3c6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dDogYCR7dGhpcy5jaGFydERhdGEudGl0bGUubmFtZSA/PyAnJ31gLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jaGFydERhdGEudGl0bGUubmFtZSAhPSBudWxsID8gKHRoaXMuY2hhcnREYXRhLnRpdGxlLmNvbG9yICE9IG51bGwgPyB0aGlzLmNoYXJ0RGF0YS50aXRsZS5jb2xvciA6ICdCbGFjaycpIDogJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmNoYXJ0RGF0YS5sZWdlbmQudG9wID8/ICc1cHgnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5jaGFydERhdGEubGVnZW5kLmJvdHRvbSA/PyAnMCcsXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5jaGFydERhdGEubGVnZW5kLmxlZnQgPz8gJzAnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmNoYXJ0RGF0YS5sZWdlbmQucmlnaHQgPz8gJzAnXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY2hhcnREYXRhLnRpdGxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IFsnNDAlJywgJzcwJSddLFxuICAgICAgICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuY2hhcnREYXRhLmRhdGEubWFwKG0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogbS51bml0Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufSIsIjxkaXYgZWNoYXJ0cyBbb3B0aW9uc109XCJjaGFydERhdGFPcHRpb25cIj48L2Rpdj4iXX0=