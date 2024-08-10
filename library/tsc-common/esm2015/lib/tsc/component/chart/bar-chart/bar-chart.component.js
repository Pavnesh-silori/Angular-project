import { Component, NgModule, Input } from '@angular/core';
import { LOADING_GRAPHIC, NO_DATA_GRAPHIC } from '../../../constant/chart.constant';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class BarChartComponent {
    constructor() {
        this.renderFlag = 'LOADING';
        this.emissionData = [];
        this.seriesName = [];
    }
    ngOnInit() {
        this.noDataOption = {
            title: {
                text: this.chartMetaData.title,
                textStyle: {
                    color: this.chartMetaData.titleColor
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
        this.chartDataCheck();
    }
    ngOnChanges(changes) {
        if (changes.chartData.currentValue) {
            this.chartDataCheck();
        }
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
        const seriesData = this.chartData.series.map((seriesItem, index) => {
            this.chartData.data.forEach((item) => {
                item.data.forEach((data) => {
                    this.emissionData.push(data);
                });
            });
            this.seriesName = this.chartData.series;
            return {
                name: this.seriesName[index],
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.emissionData,
                tooltip: {
                    valueFormatter: (value) => {
                        return value == null ? 'No data' : value + ' ' + this.chartData.uomName;
                    }
                },
            };
        });
        this.chartDataOption = {
            color: this.chartMetaData.color,
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: true },
                    magicType: { show: true, type: ['line'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                show: true,
                text: `${this.chartMetaData.title}`,
                textStyle: {
                    color: this.chartMetaData.titleColor
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
                bottom: '1%',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: this.chartData.data.map(m => ({
                    value: m.xAxisLabel,
                })),
                name: this.chartMetaData.xAxisName,
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
            series: seriesData,
        };
    }
}
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData", chartMetaData: "chartMetaData" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"card main-card cardOverwrite\">\n    <div class=\"card-body\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>\n\n\n\n", directives: [{ type: i1.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }], chartMetaData: [{
                type: Input
            }] } });
export class BarChartModule {
}
BarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, declarations: [BarChartComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [BarChartComponent] });
BarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        BarChartComponent,
                    ],
                    declarations: [
                        BarChartComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvY2hhcnQvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2NoYXJ0L2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQVUsS0FBSyxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQVEvQyxNQUFNLE9BQU8saUJBQWlCO0lBVTdCO1FBUlMsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQU14QyxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQVEsRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVqQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNuQixLQUFLLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSztnQkFDOUIsU0FBUyxFQUFFO29CQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVU7aUJBQ3BDO2dCQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sRUFBRSxlQUFlO1lBQ3hCLEtB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LGlCQUFpQjs2R0E4SWpCLGNBQWMsWUFkakI7WUFDUixZQUFZO1lBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNoQyxDQUFDO1NBQ0Y7NEZBU1csY0FBYztrQkFmMUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7NEJBQ3hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO3lCQUNoQyxDQUFDO3FCQUNGO29CQUNELE9BQU8sRUFBRTt3QkFDUixpQkFBaUI7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDYixpQkFBaUI7cUJBQ2pCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ01vZHVsZSwgT25Jbml0LCBJbnB1dCxTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cyc7XG5pbXBvcnQgeyBMT0FESU5HX0dSQVBISUMsIE5PX0RBVEFfR1JBUEhJQyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2NoYXJ0LmNvbnN0YW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsaWItYmFyLWNoYXJ0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2Jhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgcmVuZGVyRmxhZzogc3RyaW5nID0gJ0xPQURJTkcnO1xuXHRASW5wdXQoKSBjaGFydERhdGE6IGFueTtcblx0QElucHV0KCkgY2hhcnRNZXRhRGF0YTogYW55OyBcblxuXHRjaGFydERhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG5cdG5vRGF0YU9wdGlvbjtcblx0ZW1pc3Npb25EYXRhOiBhbnkgPSBbXTtcblx0c2VyaWVzTmFtZTogYW55ID0gW107XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cdFxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLm5vRGF0YU9wdGlvbiA9IHtcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHRleHQ6IHRoaXMuY2hhcnRNZXRhRGF0YS50aXRsZSxcblx0XHRcdFx0dGV4dFN0eWxlOiB7XG5cdFx0XHRcdFx0Y29sb3I6IHRoaXMuY2hhcnRNZXRhRGF0YS50aXRsZUNvbG9yXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG5cdFx0XHR9LFxuXHRcdFx0Z3JhcGhpYzogTk9fREFUQV9HUkFQSElDLFxuXHRcdFx0eEF4aXM6IHsgc2hvdzogZmFsc2UgfSxcblx0XHRcdHlBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG5cdFx0fTtcblxuXHRcdHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdFx0aWYgKGNoYW5nZXMuY2hhcnREYXRhLmN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLmNoYXJ0RGF0YUNoZWNrKCk7XG5cblx0XHRcdH1cblx0XHRcblx0fVxuXG5cdGNoYXJ0RGF0YUNoZWNrKCkge1xuXHRcdGlmICh0aGlzLnJlbmRlckZsYWcgPT0gJ0xPQURJTkcnKSB7XG5cdFx0XHR0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IExPQURJTkdfR1JBUEhJQztcblx0XHR9IGVsc2UgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnREFUQScpIHtcblx0XHRcdHRoaXMuZHJhd0NoYXJ0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hhcnREYXRhT3B0aW9uID0gdGhpcy5ub0RhdGFPcHRpb247XG5cdFx0fVxuXHR9XG5cblx0ZHJhd0NoYXJ0KCkge1xuXHRcdGNvbnN0IHNlcmllc0RhdGEgPSB0aGlzLmNoYXJ0RGF0YS5zZXJpZXMubWFwKChzZXJpZXNJdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcblx0XHRcdHRoaXMuY2hhcnREYXRhLmRhdGEuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG5cdFx0XHRcdGl0ZW0uZGF0YS5mb3JFYWNoKChkYXRhOiBhbnkpID0+IHtcblx0XHRcdFx0XHR0aGlzLmVtaXNzaW9uRGF0YS5wdXNoKGRhdGEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zZXJpZXNOYW1lID0gdGhpcy5jaGFydERhdGEuc2VyaWVzXG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG5hbWU6IHRoaXMuc2VyaWVzTmFtZVtpbmRleF0sXG5cdFx0XHRcdHR5cGU6ICdiYXInLFxuXHRcdFx0XHRzdGFjazogJ3RvdGFsJyxcblx0XHRcdFx0bGFiZWw6IHtcblx0XHRcdFx0XHRzaG93OiBmYWxzZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlbXBoYXNpczoge1xuXHRcdFx0XHRcdGZvY3VzOiAnc2VyaWVzJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhOiB0aGlzLmVtaXNzaW9uRGF0YSxcblx0XHRcdFx0dG9vbHRpcDoge1xuXHRcdFx0XHRcdHZhbHVlRm9ybWF0dGVyOiAodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyAnTm8gZGF0YSc6IHZhbHVlICsgJyAnICsgdGhpcy5jaGFydERhdGEudW9tTmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cblx0XHR0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHtcblx0XHRcdGNvbG9yOiB0aGlzLmNoYXJ0TWV0YURhdGEuY29sb3IsXG5cdFx0XHR0b29sYm94OiB7XG5cdFx0XHRcdGZlYXR1cmU6IHtcblx0XHRcdFx0XHRkYXRhVmlldzogeyBzaG93OiB0cnVlLCByZWFkT25seTogdHJ1ZSB9LFxuXHRcdFx0XHRcdG1hZ2ljVHlwZTogeyBzaG93OiB0cnVlLCB0eXBlOiBbJ2xpbmUnXSB9LFxuXHRcdFx0XHRcdHJlc3RvcmU6IHsgc2hvdzogdHJ1ZSB9LFxuXHRcdFx0XHRcdHNhdmVBc0ltYWdlOiB7IHNob3c6IHRydWUgfVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdFx0dGV4dDogYCR7dGhpcy5jaGFydE1ldGFEYXRhLnRpdGxlfWAsXG5cdFx0XHRcdHRleHRTdHlsZToge1xuXHRcdFx0XHRcdGNvbG9yOiB0aGlzLmNoYXJ0TWV0YURhdGEudGl0bGVDb2xvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwYWRkaW5nOiBbNywgMCwgMCwgMjBdLFxuXHRcdFx0fSxcblx0XHRcdHRvb2x0aXA6IHtcblx0XHRcdFx0dHJpZ2dlcjogJ2F4aXMnLFxuXHRcdFx0XHRheGlzUG9pbnRlcjoge1xuXHRcdFx0XHRcdHR5cGU6ICdsaW5lJ1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGxlZ2VuZDoge1xuXHRcdFx0XHRib3R0b206ICcxJScsXG5cdFx0XHRcdGxlZnQ6ICdjZW50ZXInXG5cdFx0XHR9LFxuXHRcdFx0eEF4aXM6IHtcblx0XHRcdFx0dHlwZTogJ2NhdGVnb3J5Jyxcblx0XHRcdFx0ZGF0YTogdGhpcy5jaGFydERhdGEuZGF0YS5tYXAobSA9PiAoe1xuXHRcdFx0XHRcdHZhbHVlOiBtLnhBeGlzTGFiZWwsXG5cdFx0XHRcdH0pKSxcblx0XHRcdFx0bmFtZTogdGhpcy5jaGFydE1ldGFEYXRhLnhBeGlzTmFtZSxcblx0XHRcdFx0bmFtZVRleHRTdHlsZToge1xuXHRcdFx0XHRcdGFsaWduOiAncmlnaHQnLFxuXHRcdFx0XHRcdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdHBhZGRpbmc6IFszMCwgMCwgMCwgMF0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0eUF4aXM6IHtcblx0XHRcdFx0dHlwZTogJ3ZhbHVlJyxcblx0XHRcdFx0bWluOiAwLFxuXHRcdFx0fSxcblx0XHRcdHNlcmllczogc2VyaWVzRGF0YSxcblx0XHR9O1xuXHR9XG59XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Tmd4RWNoYXJ0c01vZHVsZS5mb3JSb290KHtcblx0XHRcdGVjaGFydHM6ICgpID0+IGltcG9ydCgnZWNoYXJ0cycpXG5cdFx0fSksXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRCYXJDaGFydENvbXBvbmVudCxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QmFyQ2hhcnRDb21wb25lbnQsXG5cdF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXJDaGFydE1vZHVsZSB7IH1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkIG1haW4tY2FyZCBjYXJkT3ZlcndyaXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwiY2hhcnREYXRhT3B0aW9uXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuXG5cbiJdfQ==