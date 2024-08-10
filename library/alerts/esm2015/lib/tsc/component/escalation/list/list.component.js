import { Component } from '@angular/core';
import { EscalationLevelCount, EscalationLevelInfo } from '../../../model/escalation.model';
import { AlertButtonLabelEnum } from '../../../enum/alert.enum';
import { CreateUpdateEscalationComponent } from '../../escalation/create-update/create-update.component';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, DialogOneEnum, MATERIAL_CONSTANT, PageTitleEnum } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/toastr-service";
import * as i4 from "../../../controller/escalation.controller";
import * as i5 from "@angular/material/dialog";
import * as i6 from "@angular/material/card";
import * as i7 from "@angular/common";
import * as i8 from "@angular/flex-layout/flex";
import * as i9 from "@angular/material/tooltip";
// /tsc-library/
export class ListComponent {
    constructor(activatedRoute, storageService, toastrService, escalationController, dialog) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.escalationController = escalationController;
        this.dialog = dialog;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.AlertButtonLabelEnum = AlertButtonLabelEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.DialogEnum = DialogEnum;
        this.escalationLevelJSON = [];
        this.escalationLevelCountM = new EscalationLevelCount();
        this.escalationLevelInfoM = [new EscalationLevelInfo()];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getEscalationLevelCount();
        this.activatedRoute.params.subscribe((pathParam) => {
            if (pathParam.alertID != null) {
                this.alertRuleID = pathParam.alertID;
            }
        });
        this.getAllLevelEscalation();
    }
    getEscalationLevelCount() {
        this.escalationController.getEscalationLevelCount(this.orgID).subscribe((escalationLevelCountRes) => {
            this.escalationLevelCountM = escalationLevelCountRes;
            if (this.escalationLevelCountM.level && this.escalationLevelCountM != null) {
                this.escalationLevelJSON = this.getEscalationLevelJSON(this.escalationLevelCountM);
            }
        }, error => {
            console.log('error in getEscalationLevelCount() -', error);
        });
    }
    getAllLevelEscalation() {
        this.escalationController.getAllLevelEscalation(this.orgID, this.alertRuleID).subscribe((escalationLevelRes) => {
            this.escalationLevelInfoM = escalationLevelRes;
        }, error => {
            console.log('error in getAllLevelEscalation() -', error);
        });
    }
    getEscalationLevelJSON(escalationLevel) {
        const levelsArray = [];
        for (let i = 1; i <= escalationLevel.level; i++) {
            levelsArray.push({
                id: i,
                name: `Level ${i}`
            });
        }
        return levelsArray;
    }
    isLevelConfigured(levelId) {
        var _a;
        return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.some(level => level.level == levelId);
    }
    getCorresondingEscLevelConfig(levelId) {
        var _a;
        return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(level => level.level == levelId);
    }
    hasEscalationDataForPreviousLevel(levelId) {
        return levelId > 1 && this.hasEscalationDataForLevel(levelId - 1);
    }
    hasEscalationDataForLevel(levelId) {
        var _a;
        const escalationData = (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(level => level.level == levelId);
        return !!escalationData;
    }
    createUpdateEscalationRuleDialog(levelID, action, escLevelConfig) {
        const dialog = this.dialog.open(CreateUpdateEscalationComponent, {
            data: {
                alertRuleID: this.alertRuleID,
                levelID: levelID,
                action: action,
                escLevelConfig: escLevelConfig
            },
            minWidth: '50vw',
            maxWidth: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' }
        });
        dialog.afterClosed().subscribe((result) => {
            if (result == DialogEnum.SUCCESS_DR) {
                this.getAllLevelEscalation();
            }
        });
    }
    openDeleteEscRuleDialog(levelID, escLevelConfig) {
        const escalationRuleID = escLevelConfig.escalationRuleID;
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '500px',
            maxWidth: '500px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete escalation ?',
                body: 'Escalation configuration for level ' + '<b>' + levelID + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEscalationRuleDialog(escalationRuleID);
            }
        });
    }
    deleteEscalationRuleDialog(escalationRuleID) {
        this.escalationController.deleteEsclationByLevelID(this.orgID, escalationRuleID).subscribe((deleteRes) => {
            window.location.reload();
            let toast = this.toastrService.getToastStatus(deleteRes.status);
            this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
        });
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.StorageService }, { token: i3.ToastrService }, { token: i4.EscalationController }, { token: i5.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ListComponent, selector: "lib-list", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Escalation Rule</div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row mb-3\" *ngFor=\"let level of escalationLevelJSON\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"card-title sectionTitle\">\n                                {{ level.name }}\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <span class=\"text-danger\" *ngIf=\"!isLevelConfigured(level.id)\">\n                                    Not configured.\n                                </span>\n                                <span *ngIf=\"isLevelConfigured(level.id)\">\n                                    <div fxLayout=\"row wrap\">\n                                        <div class=\"col-sm-3\">\n                                            <div>Escalations:</div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Interval</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalValue}} - {{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalFrequencyName}}</div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Notification frequency</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.notificationPrefValue}}\n                                                - {{ getCorresondingEscLevelConfig(level.id)?.notificationPrefName}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 centerAlignVertical justify-content-end\">\n                            <button class=\"btn btn-sm btn-success\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.CREATE)\"\n                                *ngIf=\"!isLevelConfigured(level.id) && (level.id == 1 || (hasEscalationDataForPreviousLevel(level.id) && !hasEscalationDataForLevel(level.id)))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-secondary disableButton\" matTooltipPosition=\"above\"\n                                [matTooltip]=\"'Setting up a previous level is mandatory before creating the escalation metric for the current level'\"\n                                *ngIf=\"!isLevelConfigured(level.id) && level.id != 1 && (hasEscalationDataForLevel(level.id) || !hasEscalationDataForPreviousLevel(level.id))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-primary me-2\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.UPDATE, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\"\n                                (click)=\"openDeleteEscRuleDialog(level.id, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                            </button>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".disableButton{cursor:not-allowed;background-color:#b5b2b2;border-color:#b5b2b2;color:#fff}\n"], components: [{ type: i6.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i9.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-list',
                    templateUrl: './list.component.html',
                    styleUrls: ['./list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.StorageService }, { type: i3.ToastrService }, { type: i4.EscalationController }, { type: i5.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2FsZXJ0cy9zcmMvbGliL3RzYy9jb21wb25lbnQvZXNjYWxhdGlvbi9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9hbGVydHMvc3JjL2xpYi90c2MvY29tcG9uZW50L2VzY2FsYXRpb24vbGlzdC9saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFJbEQsT0FBTyxFQUFFLG9CQUFvQixFQUF5QixtQkFBbUIsRUFBd0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUloRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUl6RyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBYSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztBQUduSyxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLGFBQWE7SUFrQnRCLFlBQ1ksY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsb0JBQTBDLEVBQzFDLE1BQWlCO1FBSmpCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBckI3QixvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxzQkFBaUIsR0FBRyxp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QyxDQUFDLENBQUM7SUFDUCxDQUFDOzsyR0EvSVEsYUFBYTsrRkFBYixhQUFhLGdEQ3pCMUIsdStJQXFFTTs0RkQ1Q08sYUFBYTtrQkFOekIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgRXNjYWxhdGlvbkxldmVsQ291bnQsIEVzY2FsYXRpb25MZXZlbENvdW50TSwgRXNjYWxhdGlvbkxldmVsSW5mbywgRXNjYWxhdGlvbkxldmVsSW5mb00gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9lc2NhbGF0aW9uLm1vZGVsJztcblxuaW1wb3J0IHsgQWxlcnRCdXR0b25MYWJlbEVudW0gfSBmcm9tICcuLi8uLi8uLi9lbnVtL2FsZXJ0LmVudW0nO1xuXG5pbXBvcnQgeyBFc2NhbGF0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvZXNjYWxhdGlvbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgQ3JlYXRlVXBkYXRlRXNjYWxhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2VzY2FsYXRpb24vY3JlYXRlLXVwZGF0ZS9jcmVhdGUtdXBkYXRlLmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBCdXR0b25MYWJlbEVudW0sIENPTU1PTl9DT05TVEFOVCwgRGlhbG9nRW51bSwgRGlhbG9nT25lQ29tcG9uZW50LCBEaWFsb2dPbmVFbnVtLCBNQVRFUklBTF9DT05TVEFOVCwgUGFnZVRpdGxlRW51bSwgUmVzcG9uc2VNIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdG9hc3RyLXNlcnZpY2UnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBDT01NT05fQ09OU1RBTlQgPSBDT01NT05fQ09OU1RBTlQ7XG4gICAgTUFURVJJQUxfQ09OU1RBTlQgPSBNQVRFUklBTF9DT05TVEFOVDtcblxuICAgIEJ1dHRvbkxhYmVsRW51bSA9IEJ1dHRvbkxhYmVsRW51bTtcbiAgICBBbGVydEJ1dHRvbkxhYmVsRW51bSA9IEFsZXJ0QnV0dG9uTGFiZWxFbnVtO1xuICAgIFBhZ2VUaXRsZUVudW0gPSBQYWdlVGl0bGVFbnVtO1xuICAgIERpYWxvZ0VudW0gPSBEaWFsb2dFbnVtO1xuXG4gICAgb3JnSUQ6IGFueTtcbiAgICBhbGVydFJ1bGVJRDogYW55O1xuXG4gICAgZXNjYWxhdGlvbkxldmVsSlNPTjogYW55W10gPSBbXTtcblxuICAgIGVzY2FsYXRpb25MZXZlbENvdW50TSA9IG5ldyBFc2NhbGF0aW9uTGV2ZWxDb3VudCgpO1xuICAgIGVzY2FsYXRpb25MZXZlbEluZm9NID0gW25ldyBFc2NhbGF0aW9uTGV2ZWxJbmZvKCldO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVzY2FsYXRpb25Db250cm9sbGVyOiBFc2NhbGF0aW9uQ29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIHRoaXMuZ2V0RXNjYWxhdGlvbkxldmVsQ291bnQoKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhdGhQYXJhbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhdGhQYXJhbS5hbGVydElEICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0UnVsZUlEID0gcGF0aFBhcmFtLmFsZXJ0SUQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZ2V0QWxsTGV2ZWxFc2NhbGF0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0RXNjYWxhdGlvbkxldmVsQ291bnQoKSB7XG4gICAgICAgIHRoaXMuZXNjYWxhdGlvbkNvbnRyb2xsZXIuZ2V0RXNjYWxhdGlvbkxldmVsQ291bnQodGhpcy5vcmdJRCkuc3Vic2NyaWJlKChlc2NhbGF0aW9uTGV2ZWxDb3VudFJlczogRXNjYWxhdGlvbkxldmVsQ291bnRNKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVzY2FsYXRpb25MZXZlbENvdW50TSA9IGVzY2FsYXRpb25MZXZlbENvdW50UmVzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5lc2NhbGF0aW9uTGV2ZWxDb3VudE0ubGV2ZWwgJiYgdGhpcy5lc2NhbGF0aW9uTGV2ZWxDb3VudE0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXNjYWxhdGlvbkxldmVsSlNPTiA9IHRoaXMuZ2V0RXNjYWxhdGlvbkxldmVsSlNPTih0aGlzLmVzY2FsYXRpb25MZXZlbENvdW50TSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGdldEVzY2FsYXRpb25MZXZlbENvdW50KCkgLScsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRBbGxMZXZlbEVzY2FsYXRpb24oKSB7XG4gICAgICAgIHRoaXMuZXNjYWxhdGlvbkNvbnRyb2xsZXIuZ2V0QWxsTGV2ZWxFc2NhbGF0aW9uKHRoaXMub3JnSUQsIHRoaXMuYWxlcnRSdWxlSUQpLnN1YnNjcmliZSgoZXNjYWxhdGlvbkxldmVsUmVzOiBFc2NhbGF0aW9uTGV2ZWxJbmZvTVtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVzY2FsYXRpb25MZXZlbEluZm9NID0gZXNjYWxhdGlvbkxldmVsUmVzO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZ2V0QWxsTGV2ZWxFc2NhbGF0aW9uKCkgLScsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRFc2NhbGF0aW9uTGV2ZWxKU09OKGVzY2FsYXRpb25MZXZlbCkge1xuICAgICAgICBjb25zdCBsZXZlbHNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGVzY2FsYXRpb25MZXZlbC5sZXZlbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXZlbHNBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgICBuYW1lOiBgTGV2ZWwgJHtpfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxldmVsc0FycmF5O1xuICAgIH1cblxuICAgIGlzTGV2ZWxDb25maWd1cmVkKGxldmVsSWQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lc2NhbGF0aW9uTGV2ZWxJbmZvTT8uc29tZShsZXZlbCA9PiBsZXZlbC5sZXZlbCA9PSBsZXZlbElkKTtcbiAgICB9XG5cbiAgICBnZXRDb3JyZXNvbmRpbmdFc2NMZXZlbENvbmZpZyhsZXZlbElkOiBudW1iZXIpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5lc2NhbGF0aW9uTGV2ZWxJbmZvTT8uZmluZChsZXZlbCA9PiBsZXZlbC5sZXZlbCA9PSBsZXZlbElkKTtcbiAgICB9XG5cbiAgICBoYXNFc2NhbGF0aW9uRGF0YUZvclByZXZpb3VzTGV2ZWwobGV2ZWxJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBsZXZlbElkID4gMSAmJiB0aGlzLmhhc0VzY2FsYXRpb25EYXRhRm9yTGV2ZWwobGV2ZWxJZCAtIDEpO1xuICAgIH1cblxuICAgIGhhc0VzY2FsYXRpb25EYXRhRm9yTGV2ZWwobGV2ZWxJZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGVzY2FsYXRpb25EYXRhID0gdGhpcy5lc2NhbGF0aW9uTGV2ZWxJbmZvTT8uZmluZChsZXZlbCA9PiBsZXZlbC5sZXZlbCA9PSBsZXZlbElkKTtcbiAgICAgICAgcmV0dXJuICEhZXNjYWxhdGlvbkRhdGE7XG4gICAgfVxuICAgIFxuXG4gICAgY3JlYXRlVXBkYXRlRXNjYWxhdGlvblJ1bGVEaWFsb2cobGV2ZWxJRDogbnVtYmVyLCBhY3Rpb246IFBhZ2VUaXRsZUVudW0sIGVzY0xldmVsQ29uZmlnPzogYW55KSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZGlhbG9nLm9wZW4oQ3JlYXRlVXBkYXRlRXNjYWxhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0UnVsZUlEOiB0aGlzLmFsZXJ0UnVsZUlELFxuICAgICAgICAgICAgICAgICAgICBsZXZlbElEOiBsZXZlbElELFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXNjTGV2ZWxDb25maWc6IGVzY0xldmVsQ29uZmlnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwdncnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTB2dycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHsgcmlnaHQ6ICctMnB4JywgdG9wOiAnMHB4JyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGlhbG9nLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gRGlhbG9nRW51bS5TVUNDRVNTX0RSKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxMZXZlbEVzY2FsYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvcGVuRGVsZXRlRXNjUnVsZURpYWxvZyhsZXZlbElELCBlc2NMZXZlbENvbmZpZykge1xuXG4gICAgICAgIGNvbnN0IGVzY2FsYXRpb25SdWxlSUQgPSBlc2NMZXZlbENvbmZpZy5lc2NhbGF0aW9uUnVsZUlEO1xuXG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nT25lQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBtaW5XaWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IERpYWxvZ09uZUVudW0uREVMRVRFLFxuICAgICAgICAgICAgICAgIGljb246ICdkYW5nZXJvdXMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcjogJ0RlbGV0ZSBlc2NhbGF0aW9uID8nLFxuICAgICAgICAgICAgICAgIGJvZHk6ICdFc2NhbGF0aW9uIGNvbmZpZ3VyYXRpb24gZm9yIGxldmVsICcgKyAnPGI+JyArIGxldmVsSUQgKyAnPC9iPicgKyAnIHdpbGwgYmUgZGVsZXRlZCBwZXJtYW5lbnRseS48L2JyPjwvYnI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbnRpbnVlPycsXG4gICAgICAgICAgICAgICAgYnV0dG9uT25lOiBCdXR0b25MYWJlbEVudW0uQ0FOQ0VMX0JUTl9MQUJFTCxcbiAgICAgICAgICAgICAgICBidXR0b25Ud286IEJ1dHRvbkxhYmVsRW51bS5ERUxFVEVfQlROX0xBQkVMXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaWFsb2cuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUVzY2FsYXRpb25SdWxlRGlhbG9nKGVzY2FsYXRpb25SdWxlSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZUVzY2FsYXRpb25SdWxlRGlhbG9nKGVzY2FsYXRpb25SdWxlSUQpIHtcbiAgICAgICAgdGhpcy5lc2NhbGF0aW9uQ29udHJvbGxlci5kZWxldGVFc2NsYXRpb25CeUxldmVsSUQodGhpcy5vcmdJRCwgZXNjYWxhdGlvblJ1bGVJRCkuc3Vic2NyaWJlKChkZWxldGVSZXM6IFJlc3BvbnNlTSkgPT4ge1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cbiAgICAgICAgICAgIGxldCB0b2FzdCA9IHRoaXMudG9hc3RyU2VydmljZS5nZXRUb2FzdFN0YXR1cyhkZWxldGVSZXMuc3RhdHVzKTtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QodG9hc3QudGl0bGUsIGRlbGV0ZVJlcy5tZXNzYWdlLCB0b2FzdC5jb2xvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSIsIjxkaXYgY2xhc3M9XCJjYXJkIG1haW4tY2FyZCBjYXJkT3ZlcndyaXRlIGgxMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJMZWZ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZVRpdGxlXCI+RXNjYWxhdGlvbiBSdWxlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCIgKm5nRm9yPVwibGV0IGxldmVsIG9mIGVzY2FsYXRpb25MZXZlbEpTT05cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJib3JkZXIgY2FyZE92ZXJ3cml0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBzZWN0aW9uVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGV2ZWwubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIWlzTGV2ZWxDb25maWd1cmVkKGxldmVsLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90IGNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0xldmVsQ29uZmlndXJlZChsZXZlbC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkVzY2FsYXRpb25zOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkludGVydmFsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdy1ib2xkXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvcnJlc29uZGluZ0VzY0xldmVsQ29uZmlnKGxldmVsLmlkKT8uaW50ZXJ2YWxWYWx1ZX19IC0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvcnJlc29uZGluZ0VzY0xldmVsQ29uZmlnKGxldmVsLmlkKT8uaW50ZXJ2YWxGcmVxdWVuY3lOYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob3RpZmljYXRpb24gZnJlcXVlbmN5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdy1ib2xkXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvcnJlc29uZGluZ0VzY0xldmVsQ29uZmlnKGxldmVsLmlkKT8ubm90aWZpY2F0aW9uUHJlZlZhbHVlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0ge3sgZ2V0Q29ycmVzb25kaW5nRXNjTGV2ZWxDb25maWcobGV2ZWwuaWQpPy5ub3RpZmljYXRpb25QcmVmTmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IGNlbnRlckFsaWduVmVydGljYWwganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjcmVhdGVVcGRhdGVFc2NhbGF0aW9uUnVsZURpYWxvZyhsZXZlbC5pZCwgUGFnZVRpdGxlRW51bS5DUkVBVEUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaXNMZXZlbENvbmZpZ3VyZWQobGV2ZWwuaWQpICYmIChsZXZlbC5pZCA9PSAxIHx8IChoYXNFc2NhbGF0aW9uRGF0YUZvclByZXZpb3VzTGV2ZWwobGV2ZWwuaWQpICYmICFoYXNFc2NhbGF0aW9uRGF0YUZvckxldmVsKGxldmVsLmlkKSkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IEJ1dHRvbkxhYmVsRW51bS5DUkVBVEVfQlROX0xBQkVMIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBkaXNhYmxlQnV0dG9uXCIgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInU2V0dGluZyB1cCBhIHByZXZpb3VzIGxldmVsIGlzIG1hbmRhdG9yeSBiZWZvcmUgY3JlYXRpbmcgdGhlIGVzY2FsYXRpb24gbWV0cmljIGZvciB0aGUgY3VycmVudCBsZXZlbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFpc0xldmVsQ29uZmlndXJlZChsZXZlbC5pZCkgJiYgbGV2ZWwuaWQgIT0gMSAmJiAoaGFzRXNjYWxhdGlvbkRhdGFGb3JMZXZlbChsZXZlbC5pZCkgfHwgIWhhc0VzY2FsYXRpb25EYXRhRm9yUHJldmlvdXNMZXZlbChsZXZlbC5pZCkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IEJ1dHRvbkxhYmVsRW51bS5DUkVBVEVfQlROX0xBQkVMIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgbWUtMlwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3JlYXRlVXBkYXRlRXNjYWxhdGlvblJ1bGVEaWFsb2cobGV2ZWwuaWQsIFBhZ2VUaXRsZUVudW0uVVBEQVRFLCBnZXRDb3JyZXNvbmRpbmdFc2NMZXZlbENvbmZpZyhsZXZlbC5pZCkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc0xldmVsQ29uZmlndXJlZChsZXZlbC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgQnV0dG9uTGFiZWxFbnVtLlVQREFURV9CVE5fTEFCRUwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuRGVsZXRlRXNjUnVsZURpYWxvZyhsZXZlbC5pZCwgZ2V0Q29ycmVzb25kaW5nRXNjTGV2ZWxDb25maWcobGV2ZWwuaWQpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNMZXZlbENvbmZpZ3VyZWQobGV2ZWwuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IEJ1dHRvbkxhYmVsRW51bS5ERUxFVEVfQlROX0xBQkVMIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==