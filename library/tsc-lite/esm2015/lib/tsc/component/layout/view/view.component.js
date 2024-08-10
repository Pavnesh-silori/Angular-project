import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EntityTree } from '../../../model/entity.model';
import { Layout } from '@library/layout-service';
import { FormAction } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/layout-service";
import * as i4 from "../../../service/entity.service";
import * as i5 from "@angular/material/button-toggle";
import * as i6 from "../_shared/tree-view/tree-view.component";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/forms";
import * as i10 from "ngx-echarts";
// /tsc-library/
export class ViewComponent {
    constructor(activatedRoute, storageService, layoutService, entityService) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.layoutService = layoutService;
        this.entityService = entityService;
        this.formActionEnum = FormAction;
        this.layoutM = new Layout();
        this.entityDeviceM = new EntityTree();
        this.allowUpdateEntityTree = false;
        this.selectedViewFC = new FormControl('LAYOUT');
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.params.subscribe((param) => {
            this.layoutID = param['layoutID'];
            this.getLayoutByID();
            this.getEntitiesWithDevices();
        });
    }
    getLayoutByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layoutM = yield this.layoutService.getLayoutByID(this.orgID, this.layoutID);
        });
    }
    getEntitiesWithDevices() {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {
                'entityType': ['ALL']
            };
            this.entityDeviceM = (yield this.entityService.getEntitiesWithDevices(this.orgID, this.layoutID, requestBody, 'NO'));
            if (this.entityDeviceM) {
                this.drawChart();
            }
        });
    }
    changeState() {
        this.allowUpdateEntityTree = true;
    }
    drawChart() {
        const convertNode = (node) => ({
            name: node.name,
            children: node.children ? node.children.map(convertNode) : [],
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
                    name: 'tree1',
                    data: [chartData],
                    top: '10%',
                    left: '15%',
                    bottom: '22%',
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
                            align: 'left'
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
ViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.StorageService }, { token: i3.LayoutService }, { token: i4.EntityService }], target: i0.ɵɵFactoryTarget.Component });
ViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ViewComponent, selector: "lib-view", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Layout\n                <span *ngIf=\"layoutM\">\n                    - ({{ layoutM?.name }})\n                </span>\n            </div>\n        </div>\n        <div class=\"headerRightContainer\" *ngIf=\"selectedViewFC.value == 'TREE'\">\n            <div class=\"headerRightContainerInner\">\n                <span class=\"cursorPointer material-symbols-outlined text-secondary fs-3\" #tooltip=\"matTooltip\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\" matTooltip=\"Update\"\n                    (click)=\"changeState()\">\n                    edit_square\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-button-toggle-group class=\"matBtnFilter matBtnToggleWidth\" [formControl]=\"selectedViewFC\">\n                    <mat-button-toggle value=\"LAYOUT\"> Layout </mat-button-toggle>\n                    <mat-button-toggle value=\"TREE\"> Tree </mat-button-toggle>\n                </mat-button-toggle-group>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"selectedViewFC.value == 'LAYOUT'\">\n            <div class=\"col-sm-12\">\n                <div echarts [options]=\"chartDataOption\"></div>\n            </div>\n        </div>\n        <div class=\"row mt-4\" *ngIf=\"selectedViewFC.value == 'TREE'\">\n            <div class=\"col-sm-12\">\n                <lib-tree-view [permissionType]=\"formActionEnum.VIEW\" [layoutID]=\"layoutID\"\n                    [allowUpdateOnClick]=\"allowUpdateEntityTree\"></lib-tree-view>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".matBtnToggleWidth mat-button-toggle{width:70px}\n"], components: [{ type: i5.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i6.CreateUpdateTreeViewComponent, selector: "lib-tree-view", inputs: ["permissionType", "allowUpdateOnClick", "layoutID"], outputs: ["emitFilter"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i9.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i9.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i10.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-view',
                    templateUrl: './view.component.html',
                    styleUrls: ['./view.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.StorageService }, { type: i3.LayoutService }, { type: i4.EntityService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvdmlldy92aWV3LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSw2QkFBNkIsQ0FBQztBQU10RSxPQUFPLEVBQUUsTUFBTSxFQUFpQixNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FBQ2pELGdCQUFnQjtBQVFoQixNQUFNLE9BQU8sYUFBYTtJQWdCdEIsWUFDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QixFQUM1QixhQUE0QjtRQUg1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBbEJ4QyxtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQU01QixZQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFakMsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBR3ZDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7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QixFQUFFLEdBQUc7aUJBQy9CO2FBQ0o7U0FDSixDQUFBO0lBRUwsQ0FBQzs7MkdBekdRLGFBQWE7K0ZBQWIsYUFBYSxnREN0QjFCLHUxREF5Q007NEZEbkJPLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRUNoYXJ0c09wdGlvbiB9IGZyb20gJ2VjaGFydHMnO1xuXG5pbXBvcnQgeyBFbnRpdHlUcmVlLCBFbnRpdHlUcmVlTSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2VudGl0eS5tb2RlbCc7XG5cbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL2VudGl0eS5zZXJ2aWNlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dCwgTGF5b3V0U2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L2xheW91dC1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1BY3Rpb24gfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZm9ybUFjdGlvbkVudW0gPSBGb3JtQWN0aW9uO1xuXG4gICAgb3JnSUQ6IGFueTtcbiAgICBxUGFyYW1zOiBhbnk7XG4gICAgbGF5b3V0SUQ6IGFueTtcblxuICAgIGxheW91dE0gPSBuZXcgTGF5b3V0KCk7XG4gICAgZW50aXR5RGV2aWNlTSA9IG5ldyBFbnRpdHlUcmVlKCk7XG5cbiAgICBhbGxvd1VwZGF0ZUVudGl0eVRyZWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjaGFydERhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG5cbiAgICBzZWxlY3RlZFZpZXdGQyA9IG5ldyBGb3JtQ29udHJvbCgnTEFZT1VUJyk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW50aXR5U2VydmljZTogRW50aXR5U2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0SUQgPSBwYXJhbVsnbGF5b3V0SUQnXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TGF5b3V0QnlJRCgpO1xuICAgICAgICAgICAgdGhpcy5nZXRFbnRpdGllc1dpdGhEZXZpY2VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldExheW91dEJ5SUQoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0TSA9IGF3YWl0IHRoaXMubGF5b3V0U2VydmljZS5nZXRMYXlvdXRCeUlEKHRoaXMub3JnSUQsIHRoaXMubGF5b3V0SUQpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0aWVzV2l0aERldmljZXMoKSB7XG4gICAgICAgIGxldCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgICAgICAgICdlbnRpdHlUeXBlJzogWydBTEwnXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZW50aXR5RGV2aWNlTSA9IDxFbnRpdHlUcmVlTT5hd2FpdCB0aGlzLmVudGl0eVNlcnZpY2UuZ2V0RW50aXRpZXNXaXRoRGV2aWNlcyh0aGlzLm9yZ0lELCB0aGlzLmxheW91dElELCByZXF1ZXN0Qm9keSwgJ05PJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZW50aXR5RGV2aWNlTSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVN0YXRlKCkge1xuICAgICAgICB0aGlzLmFsbG93VXBkYXRlRW50aXR5VHJlZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICBjb25zdCBjb252ZXJ0Tm9kZSA9IChub2RlKSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxuICAgICAgICAgICAgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4gPyBub2RlLmNoaWxkcmVuLm1hcChjb252ZXJ0Tm9kZSkgOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoYXJ0RGF0YSA9IGNvbnZlcnROb2RlKHRoaXMuZW50aXR5RGV2aWNlTSk7XG5cbiAgICAgICAgdGhpcy5jaGFydERhdGFPcHRpb24gPSB7XG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJPbjogJ21vdXNlbW92ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0cmVlJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0cmVlMScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtjaGFydERhdGFdLFxuICAgICAgICAgICAgICAgICAgICB0b3A6ICcxMCUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnMTUlJyxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAnMjIlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcxNSUnLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xTaXplOiA3LFxuICAgICAgICAgICAgICAgICAgICBlZGdlU2hhcGU6ICdwb2x5bGluZScsXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VGb3JrUG9zaXRpb246ICc2MyUnLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVHJlZURlcHRoOiA5OTk5OTksXG4gICAgICAgICAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGVhdmVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiAnZGVzY2VuZGFudCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kQW5kQ29sbGFwc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiA1NTAsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiA3NTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj5MYXlvdXRcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxheW91dE1cIj5cbiAgICAgICAgICAgICAgICAgICAgLSAoe3sgbGF5b3V0TT8ubmFtZSB9fSlcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJSaWdodENvbnRhaW5lclwiICpuZ0lmPVwic2VsZWN0ZWRWaWV3RkMudmFsdWUgPT0gJ1RSRUUnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyUmlnaHRDb250YWluZXJJbm5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yUG9pbnRlciBtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHRleHQtc2Vjb25kYXJ5IGZzLTNcIiAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhYm92ZVwiIG1hdFRvb2x0aXBDbGFzcz1cIm5hbWVUb29sdGlwXCIgbWF0VG9vbHRpcD1cIlVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VTdGF0ZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIGVkaXRfc3F1YXJlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgY2xhc3M9XCJtYXRCdG5GaWx0ZXIgbWF0QnRuVG9nZ2xlV2lkdGhcIiBbZm9ybUNvbnRyb2xdPVwic2VsZWN0ZWRWaWV3RkNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiTEFZT1VUXCI+IExheW91dCA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJUUkVFXCI+IFRyZWUgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTJcIiAqbmdJZj1cInNlbGVjdGVkVmlld0ZDLnZhbHVlID09ICdMQVlPVVQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBlY2hhcnRzIFtvcHRpb25zXT1cImNoYXJ0RGF0YU9wdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIiAqbmdJZj1cInNlbGVjdGVkVmlld0ZDLnZhbHVlID09ICdUUkVFJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxsaWItdHJlZS12aWV3IFtwZXJtaXNzaW9uVHlwZV09XCJmb3JtQWN0aW9uRW51bS5WSUVXXCIgW2xheW91dElEXT1cImxheW91dElEXCJcbiAgICAgICAgICAgICAgICAgICAgW2FsbG93VXBkYXRlT25DbGlja109XCJhbGxvd1VwZGF0ZUVudGl0eVRyZWVcIj48L2xpYi10cmVlLXZpZXc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=