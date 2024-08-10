import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { ParameterEntity } from '../../../model/entity.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "../../../service/entity.service";
import * as i4 from "ngx-echarts";
// /tsc-library/
export class ChartComponent {
    constructor(activatedRoute, storageService, entityService) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.entityService = entityService;
        this.entityDeviceM = new ParameterEntity();
        this.allowUpdateEntityTree = false;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.parent.parent.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');
            this.getEntitiesWithDevicesByLayoutID();
        });
    }
    getEntitiesWithDevicesByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {
                'entityType': ['ALL']
            };
            this.entityDeviceM = (yield this.entityService.getEntitiesWithDevicesByLayoutID(this.orgID, this.layoutID, requestBody, 'NO'));
            if (this.entityDeviceM) {
                this.drawChart();
            }
        });
    }
    drawChart() {
        const convertNode = (node) => ({
            name: node.name,
            children: node.children ? node.children.map(convertNode) : [],
            type: node.type
        });
        const chartData = convertNode(this.entityDeviceM);
        this.chartDataOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    id: 0,
                    name: 'Device',
                    data: [chartData],
                    top: '10%',
                    left: '15%',
                    bottom: '2%',
                    right: '15%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 999999,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left',
                            // color: 'green',
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
    }
}
ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.StorageService }, { token: i3.EntityService }], target: i0.ɵɵFactoryTarget.Component });
ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChartComponent, selector: "app-chart", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div echarts [options]=\"chartDataOption\"></div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i4.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-chart',
                    templateUrl: './chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.StorageService }, { type: i3.EntityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9jaGFydC9jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtsRCxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLDZCQUE2QixDQUFDOzs7Ozs7QUFNaEYsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTyxjQUFjO0lBVXZCLFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsYUFBNEI7UUFGNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVJ4QyxrQkFBYSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFFdEMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO0lBT25DLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFSyxnQ0FBZ0M7O1lBQ2xDLElBQUksV0FBVyxHQUFHO2dCQUNkLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQzthQUN4QixDQUFDO1lBRUYsSUFBSSxDQUFDLGFBQWEsSUFBcUIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUUvSSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtRQUNMLENBQUM7S0FBQTtJQUVELFNBQVM7UUFDTCxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsU0FBUyxFQUFFLFdBQVc7YUFDekI7WUFDRCxNQUFNLEVBQUU7Z0JBQ0o7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osRUFBRSxFQUFFLENBQUM7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNqQixHQUFHLEVBQUUsS0FBSztvQkFDVixJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsSUFBSTtvQkFDWixLQUFLLEVBQUUsS0FBSztvQkFDWixVQUFVLEVBQUUsQ0FBQztvQkFDYixTQUFTLEVBQUUsVUFBVTtvQkFDckIsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsZ0JBQWdCLEVBQUUsTUFBTTtvQkFDeEIsU0FBUyxFQUFFO3dCQUNQLEtBQUssRUFBRSxDQUFDO3FCQUNYO29CQUNELEtBQUssRUFBRTt3QkFDSCxlQUFlLEVBQUUsTUFBTTt3QkFDdkIsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLGFBQWEsRUFBRSxRQUFRO3dCQUN2QixLQUFLLEVBQUUsT0FBTztxQkFDakI7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRTs0QkFDSCxRQUFRLEVBQUUsT0FBTzs0QkFDakIsYUFBYSxFQUFFLFFBQVE7NEJBQ3ZCLEtBQUssRUFBRSxNQUFNOzRCQUNiLGtCQUFrQjt5QkFDckI7cUJBQ0o7b0JBQ0QsUUFBUSxFQUFFO3dCQUNOLEtBQUssRUFBRSxZQUFZO3FCQUN0QjtvQkFDRCxpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixpQkFBaUIsRUFBRSxHQUFHO29CQUN0Qix1QkFBdUIsRUFBRSxHQUFHO2lCQUMvQjthQUNKO1NBQ0osQ0FBQTtJQUVMLENBQUM7OzRHQTVGUSxjQUFjO2dHQUFkLGNBQWMsaURDbkIzQixpUkFRTTs0RkRXTyxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxNQUFNLEVBQUUsRUFDUDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEVDaGFydHNPcHRpb24gfSBmcm9tICdlY2hhcnRzJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyRW50aXR5LCBQYXJhbWV0ZXJFbnRpdHlNIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvZW50aXR5Lm1vZGVsJztcblxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvZW50aXR5LnNlcnZpY2UnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGFydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgbGF5b3V0SUQ6IGFueTtcblxuICAgIGVudGl0eURldmljZU0gPSBuZXcgUGFyYW1ldGVyRW50aXR5KCk7XG5cbiAgICBhbGxvd1VwZGF0ZUVudGl0eVRyZWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaGFydERhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVudGl0eVNlcnZpY2U6IEVudGl0eVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmVudC5wYXJlbnQucGFyYW1NYXAuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0SUQgPSBwYXJhbXMuZ2V0KCdsYXlvdXRJRCcpO1xuXG4gICAgICAgICAgICB0aGlzLmdldEVudGl0aWVzV2l0aERldmljZXNCeUxheW91dElEKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0aWVzV2l0aERldmljZXNCeUxheW91dElEKCkge1xuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSB7XG4gICAgICAgICAgICAnZW50aXR5VHlwZSc6IFsnQUxMJ11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmVudGl0eURldmljZU0gPSA8UGFyYW1ldGVyRW50aXR5TT5hd2FpdCB0aGlzLmVudGl0eVNlcnZpY2UuZ2V0RW50aXRpZXNXaXRoRGV2aWNlc0J5TGF5b3V0SUQodGhpcy5vcmdJRCwgdGhpcy5sYXlvdXRJRCwgcmVxdWVzdEJvZHksICdOTycpO1xuXG4gICAgICAgIGlmICh0aGlzLmVudGl0eURldmljZU0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3Q2hhcnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbnZlcnROb2RlID0gKG5vZGUpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbiA/IG5vZGUuY2hpbGRyZW4ubWFwKGNvbnZlcnROb2RlKSA6IFtdLFxuICAgICAgICAgICAgdHlwZTogbm9kZS50eXBlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjaGFydERhdGEgPSBjb252ZXJ0Tm9kZSh0aGlzLmVudGl0eURldmljZU0pO1xuXG4gICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0ge1xuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdpdGVtJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyT246ICdtb3VzZW1vdmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndHJlZScsXG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRGV2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW2NoYXJ0RGF0YV0sXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJzEwJScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206ICcyJScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogNyxcbiAgICAgICAgICAgICAgICAgICAgZWRnZVNoYXBlOiAncG9seWxpbmUnLFxuICAgICAgICAgICAgICAgICAgICBlZGdlRm9ya1Bvc2l0aW9uOiAnNjMlJyxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFRyZWVEZXB0aDogOTk5OTk5LFxuICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6ICdkZXNjZW5kYW50J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRBbmRDb2xsYXBzZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IDc1MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBtYWluLWNhcmQgY2FyZE92ZXJ3cml0ZSBoMTAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cImNoYXJ0RGF0YU9wdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19