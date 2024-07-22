import { __awaiter } from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEqual } from 'lodash';
// tsc-library
import { MaterialFormFieldAppearance, ButtonLabelEnum, FormAction, PageTitleEnum, FormErrorEnum, InvalidForm, COMMON_CONSTANT, Static, DialogResponseEnum, ButtonTooltipEnum, MATERIAL_CONSTANT } from '@library/tsc-common';
import { ToastrColor } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@library/storage-service";
import * as i4 from "@library/toastr-service";
import * as i5 from "@library/tsc-common";
import * as i6 from "../../../../../controller/source.controller";
import * as i7 from "../../../../../service/source.service";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/select";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/common";
// /tsc-library/
export class SourceCreateUpdateComponent {
    constructor(data, dialogRef, renderer, formBuilder, storageService, toastrService, tscCommonService, sourceController, sourceService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.tscCommonService = tscCommonService;
        this.sourceController = sourceController;
        this.sourceService = sourceService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.ButtonTooltipEnum = ButtonTooltipEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.pageTitle = 'Source type';
        this.isEqual = true;
        this.allSourceTypeID = [];
        this.totalSourceTypeCount = 0;
        this.utilitySourceI = [new Static()];
        this.sourceType = [new Static()];
        this.errorHandling = (formGroup, controlPath, error) => {
            return formGroup.get(controlPath).hasError(error);
        };
        this.action = data.action;
        this.sourceID = data.sourceID;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getUtilitySourceAndType();
        this.sourceFGInit();
        if (this.action == FormAction.UPDATE) {
            this.getSourceTypeByID(this.sourceID);
        }
    }
    ngAfterViewInit() {
        this.heightHandler();
    }
    heightHandler() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';
        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }
    getUtilitySourceAndType() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.sourceService.getUtilitySourceAndType(this.orgID);
            this.utilitySourceTypeM = result.utilitySource;
        });
    }
    sourceFGInit() {
        this.sourceFG = this.formBuilder.group({
            name: [, [Validators.required]],
            utilitySourceID: [, [Validators.required]],
            typeID: [, [Validators.required]]
        });
    }
    onUtilitySourceChange(utilitySourceID) {
        const selectedUtilitySource = this.utilitySourceTypeM.find(source => source.id == utilitySourceID);
        if (selectedUtilitySource) {
            this.sourceType = selectedUtilitySource.type;
        }
        else {
            this.sourceType = [];
        }
    }
    sourceSubmit() {
        if (this.sourceFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            if (this.action == FormAction.CREATE) {
                this.createSourceType();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateSourceType();
            }
        }
    }
    createSourceType() {
        this.sourceController.createSourceType(this.orgID, this.sourceFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in createSourceType -', error);
        });
    }
    getSourceTypeByID(sourceID) {
        this.sourceController.getSourceTypeByID(this.orgID, sourceID).subscribe((res) => {
            this.sourceM = res;
            this.patchSource(this.sourceM);
        }, error => {
            console.log('error in getSourceTypeByID -', error);
        });
    }
    patchSource(source) {
        this.sourceFG.patchValue(source);
        this.onUtilitySourceChange(source.utilitySourceID);
        this.intialObject = this.sourceFG.value;
        this.sourceFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceFG.value);
        });
    }
    updateSourceType() {
        this.sourceController.updateSourceType(this.orgID, this.sourceID, this.sourceFG.value).subscribe((res) => {
            let result;
            result = {
                status: DialogResponseEnum.SUCCESS,
            };
            this.dialogRef.close(result);
        }, error => {
            console.log('error in updateSourceType -', error);
        });
    }
}
SourceCreateUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }, { token: i0.Renderer2 }, { token: i2.FormBuilder }, { token: i3.StorageService }, { token: i4.ToastrService }, { token: i5.TSCCommonService }, { token: i6.SourceController }, { token: i7.SourceService }], target: i0.ɵɵFactoryTarget.Component });
SourceCreateUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceCreateUpdateComponent, selector: "lib-create-update", viewQueries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "footer", first: true, predicate: ["footer"], descendants: true }, { propertyName: "body", first: true, predicate: ["body"], descendants: true }], ngImport: i0, template: "<div class=\"headerContainer p-0\" #header>\n    <div class=\"headerLeftContainer\">\n        <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE :\n            PageTitleEnum.UPDATE }} {{ pageTitle }}</div>\n    </div>\n\n    <div class=\"headerRightContainer\">\n        <div class=\"headerRightContainerInner\">\n            <button class=\"btn btn-sm centerAlign py-1 iconBtn\" matRipple\n                [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                [matTooltip]=\"ButtonTooltipEnum.CLOSE\" mat-dialog-close>\n                <span class=\"material-symbols-outlined\">\n                    close\n                </span>\n            </button>\n        </div>\n    </div>\n</div>\n\n<mat-dialog-content class=\"mat-typography customScrollBar pt-2\" #body>\n    <form [formGroup]=\"sourceFG\" (ngSubmit)=\"sourceSubmit()\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Name</mat-label>\n                    <input class=\"formPlaceholder\" type=\"text\" placeholder=\"Source name\" matInput formControlName=\"name\"\n                        required />\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'name', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select utility source</mat-label>\n\n                    <mat-select formControlName=\"utilitySourceID\" (selectionChange)=\"onUtilitySourceChange($event.value)\" required>\n                        <ng-container\n                            *ngIf=\"utilitySourceTypeM && utilitySourceTypeM.length > 0 && utilitySourceTypeM[0]['id']; else noUtilitySource\">\n                            <mat-option *ngFor=\"let utilitySource of utilitySourceTypeM\" [value]=\"utilitySource.id\">\n                                {{ utilitySource.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noUtilitySource>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'utilitySourceID', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label>Select utility source type</mat-label>\n\n                    <mat-select formControlName=\"typeID\" required>\n                        <ng-container *ngIf=\"sourceType && sourceType.length > 0 && sourceType[0]['id']; else noSourceType\">\n                            <mat-option *ngFor=\"let type of sourceType\" [value]=\"type.id\">\n                                {{ type.name }}\n                            </mat-option>\n                        </ng-container>\n                        <ng-template #noSourceType>\n                            <mat-option disabled>\n                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                            </mat-option>\n                        </ng-template>\n                    </mat-select>\n\n                    <mat-error *ngIf=\"errorHandling(sourceFG, 'typeID', 'required')\">\n                        {{ FormErrorEnum.REQUIRED }}\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <button class=\"d-none\" type=\"submit\" #formSubmitBtn></button>\n    </form>\n</mat-dialog-content>\n\n<div class=\"tscDialogFooter\" #footer>\n    <button class=\"btn btn-sm btn-success\" [ngClass]=\"{'disabled': isEqual && action == FormAction.UPDATE}\"\n        (click)=\"formSubmitBtn.click()\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\"\n        matTooltipPosition=\"below\" [matTooltip]=\"ButtonTooltipEnum.NO_CHANGE\"> {{\n        tscCommonService.getButtonLabel(action) }}</button>\n    <button class=\"btn btn-sm btn-secondary me-2\" mat-dialog-close matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">Cancel</button>\n</div>", components: [{ type: i8.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i9.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i10.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i8.MatLabel, selector: "mat-label" }, { type: i12.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.MatError, selector: "mat-error", inputs: ["id"] }, { type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i13.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceCreateUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-create-update',
                    templateUrl: './create-update.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }, { type: i0.Renderer2 }, { type: i2.FormBuilder }, { type: i3.StorageService }, { type: i4.ToastrService }, { type: i5.TSCCommonService }, { type: i6.SourceController }, { type: i7.SourceService }]; }, propDecorators: { header: [{
                type: ViewChild,
                args: ['header']
            }], footer: [{
                type: ViewChild,
                args: ['footer']
            }], body: [{
                type: ViewChild,
                args: ['body']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXVwZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9wcmVmZXJlbmNlcy9fZGlhbG9nL3NvdXJjZS9jcmVhdGUtdXBkYXRlL2NyZWF0ZS11cGRhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcHJlZmVyZW5jZXMvX2RpYWxvZy9zb3VyY2UvY3JlYXRlLXVwZGF0ZS9jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUNILGVBQWUsRUFFbEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBUWpDLGNBQWM7QUFDZCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUErQixXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTFQLE9BQU8sRUFBRSxXQUFXLEVBQWlCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUNyRSxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLDJCQUEyQjtJQWdDcEMsWUFDb0MsSUFBSSxFQUM1QixTQUFvRCxFQUNwRCxRQUFtQixFQUNuQixXQUF3QixF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c0JBQXRCLFNBQVM7dUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICAgIE1BVF9ESUFMT0dfREFUQSxcbiAgICBNYXREaWFsb2dSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNvdXJjZU0sIFV0aWxpdHlTb3VyY2VUeXBlTSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVsL3NvdXJjZS1jb25zdW1lci5tb2RlbCc7XG5cbmltcG9ydCB7IFNvdXJjZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb250cm9sbGVyL3NvdXJjZS5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2Uvc291cmNlLnNlcnZpY2UnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLCBCdXR0b25MYWJlbEVudW0sIEZvcm1BY3Rpb24sIFBhZ2VUaXRsZUVudW0sIEZvcm1FcnJvckVudW0sIFRTQ0NvbW1vblNlcnZpY2UsIFJlc3BvbnNlTSwgSW52YWxpZEZvcm0sIENPTU1PTl9DT05TVEFOVCwgU3RhdGljLCBEaWFsb2dSZXNwb25zZUVudW0sIEJ1dHRvblRvb2x0aXBFbnVtLCBNQVRFUklBTF9DT05TVEFOVCB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgVG9hc3RyQ29sb3IsIFRvYXN0clNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS90b2FzdHItc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWNyZWF0ZS11cGRhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtdXBkYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNyZWF0ZVVwZGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBDT01NT05fQ09OU1RBTlQgPSBDT01NT05fQ09OU1RBTlQ7XG4gICAgTUFURVJJQUxfQ09OU1RBTlQgPSBNQVRFUklBTF9DT05TVEFOVDtcblxuICAgIEZvcm1BY3Rpb24gPSBGb3JtQWN0aW9uO1xuICAgIEZvcm1FcnJvckVudW0gPSBGb3JtRXJyb3JFbnVtO1xuICAgIEJ1dHRvbkxhYmVsRW51bSA9IEJ1dHRvbkxhYmVsRW51bTtcbiAgICBCdXR0b25Ub29sdGlwRW51bSA9IEJ1dHRvblRvb2x0aXBFbnVtO1xuICAgIFBhZ2VUaXRsZUVudW0gPSBQYWdlVGl0bGVFbnVtO1xuICAgIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcblxuICAgIHBhZ2VUaXRsZTogc3RyaW5nID0gJ1NvdXJjZSB0eXBlJztcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgc291cmNlSUQ6IGFueTtcbiAgICBhY3Rpb246IHN0cmluZztcbiAgICBpc0VxdWFsOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpbnRpYWxPYmplY3Q6IGFueTtcblxuICAgIHV0aWxpdHlTb3VyY2VUeXBlTTogYW55O1xuICAgIGFsbFNvdXJjZVR5cGVJRDogYW55W10gPSBbXTtcbiAgICB0b3RhbFNvdXJjZVR5cGVDb3VudDogbnVtYmVyID0gMDtcbiAgICB1dGlsaXR5U291cmNlSSA9IFtuZXcgU3RhdGljKCldO1xuICAgIHNvdXJjZVR5cGUgPSBbbmV3IFN0YXRpYygpXTtcbiAgICBzb3VyY2VNOiBTb3VyY2VNO1xuICAgIHNvdXJjZUZHOiBGb3JtR3JvdXA7XG5cbiAgICBAVmlld0NoaWxkKCdoZWFkZXInKSBoZWFkZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZm9vdGVyJykgZm9vdGVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2JvZHknKSBib2R5OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxTb3VyY2VDcmVhdGVVcGRhdGVDb21wb25lbnQ+LFxuICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdHNjQ29tbW9uU2VydmljZTogVFNDQ29tbW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VDb250cm9sbGVyOiBTb3VyY2VDb250cm9sbGVyLFxuICAgICAgICBwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBkYXRhLmFjdGlvbjtcbiAgICAgICAgdGhpcy5zb3VyY2VJRCA9IGRhdGEuc291cmNlSUQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIHRoaXMuZ2V0VXRpbGl0eVNvdXJjZUFuZFR5cGUoKTtcbiAgICAgICAgdGhpcy5zb3VyY2VGR0luaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U291cmNlVHlwZUJ5SUQodGhpcy5zb3VyY2VJRCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0SGFuZGxlcigpO1xuICAgIH1cblxuICAgIGhlaWdodEhhbmRsZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGVhZGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB0aGlzLmZvb3Rlci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCArIDI0KSArICdweCknO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ib2R5Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBvZmZzZXRIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYm9keS5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIG9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXRpbGl0eVNvdXJjZUFuZFR5cGUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IDxVdGlsaXR5U291cmNlVHlwZU0+YXdhaXQgdGhpcy5zb3VyY2VTZXJ2aWNlLmdldFV0aWxpdHlTb3VyY2VBbmRUeXBlKHRoaXMub3JnSUQpO1xuICAgICAgICB0aGlzLnV0aWxpdHlTb3VyY2VUeXBlTSA9IHJlc3VsdC51dGlsaXR5U291cmNlO1xuICAgIH1cblxuICAgIHNvdXJjZUZHSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VGRyA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgIHV0aWxpdHlTb3VyY2VJRDogWywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgIHR5cGVJRDogWywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblV0aWxpdHlTb3VyY2VDaGFuZ2UodXRpbGl0eVNvdXJjZUlEOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRVdGlsaXR5U291cmNlID0gdGhpcy51dGlsaXR5U291cmNlVHlwZU0uZmluZChzb3VyY2UgPT4gc291cmNlLmlkID09IHV0aWxpdHlTb3VyY2VJRCk7XG4gICAgICAgIGlmIChzZWxlY3RlZFV0aWxpdHlTb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVHlwZSA9IHNlbGVjdGVkVXRpbGl0eVNvdXJjZS50eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VyY2VTdWJtaXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc291cmNlRkcuaW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fVElUTEUsIEludmFsaWRGb3JtLklOVkFMSURfRk9STV9NRVNTQUdFLCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5DUkVBVEUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNvdXJjZVR5cGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNvdXJjZVR5cGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHRoaXMuc291cmNlQ29udHJvbGxlci5jcmVhdGVTb3VyY2VUeXBlKHRoaXMub3JnSUQsIHRoaXMuc291cmNlRkcudmFsdWUpLnN1YnNjcmliZSgocmVzOiBSZXNwb25zZU0pID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IERpYWxvZ1Jlc3BvbnNlRW51bS5TVUNDRVNTLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShyZXN1bHQpO1xuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBjcmVhdGVTb3VyY2VUeXBlIC0nLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFNvdXJjZVR5cGVCeUlEKHNvdXJjZUlEKSB7XG4gICAgICAgIHRoaXMuc291cmNlQ29udHJvbGxlci5nZXRTb3VyY2VUeXBlQnlJRCh0aGlzLm9yZ0lELCBzb3VyY2VJRCkuc3Vic2NyaWJlKChyZXM6IFNvdXJjZU0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlTSA9IHJlcztcbiAgICAgICAgICAgIHRoaXMucGF0Y2hTb3VyY2UodGhpcy5zb3VyY2VNKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGdldFNvdXJjZVR5cGVCeUlEIC0nLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhdGNoU291cmNlKHNvdXJjZTogU291cmNlTSkge1xuICAgICAgICB0aGlzLnNvdXJjZUZHLnBhdGNoVmFsdWUoc291cmNlKTtcblxuICAgICAgICB0aGlzLm9uVXRpbGl0eVNvdXJjZUNoYW5nZShzb3VyY2UudXRpbGl0eVNvdXJjZUlEKTtcblxuICAgICAgICB0aGlzLmludGlhbE9iamVjdCA9IHRoaXMuc291cmNlRkcudmFsdWU7XG5cbiAgICAgICAgdGhpcy5zb3VyY2VGRy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNFcXVhbCA9IGlzRXF1YWwodGhpcy5pbnRpYWxPYmplY3QsIHRoaXMuc291cmNlRkcudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVNvdXJjZVR5cGUoKSB7XG4gICAgICAgIHRoaXMuc291cmNlQ29udHJvbGxlci51cGRhdGVTb3VyY2VUeXBlKHRoaXMub3JnSUQsIHRoaXMuc291cmNlSUQsIHRoaXMuc291cmNlRkcudmFsdWUpLnN1YnNjcmliZSgocmVzOiBSZXNwb25zZU0pID0+IHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IERpYWxvZ1Jlc3BvbnNlRW51bS5TVUNDRVNTLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZShyZXN1bHQpO1xuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB1cGRhdGVTb3VyY2VUeXBlIC0nLCBlcnJvcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXJyb3JIYW5kbGluZyA9IChmb3JtR3JvdXA6IEZvcm1Hcm91cCwgY29udHJvbFBhdGg6IHN0cmluZywgZXJyb3I6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gZm9ybUdyb3VwLmdldChjb250cm9sUGF0aCkuaGFzRXJyb3IoZXJyb3IpO1xuICAgIH1cblxufSIsIjxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXIgcC0wXCIgI2hlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyTGVmdENvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZVRpdGxlXCI+e3sgYWN0aW9uID09IEZvcm1BY3Rpb24uQ1JFQVRFID8gUGFnZVRpdGxlRW51bS5DUkVBVEUgOlxuICAgICAgICAgICAgUGFnZVRpdGxlRW51bS5VUERBVEUgfX0ge3sgcGFnZVRpdGxlIH19PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyUmlnaHRDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclJpZ2h0Q29udGFpbmVySW5uZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGNlbnRlckFsaWduIHB5LTEgaWNvbkJ0blwiIG1hdFJpcHBsZVxuICAgICAgICAgICAgICAgIFttYXRSaXBwbGVDZW50ZXJlZF09XCJNQVRFUklBTF9DT05TVEFOVC5NQVRfUklQUExFX0NFTlRFUlwiIG1hdFRvb2x0aXBQb3NpdGlvbj1cImJlbG93XCJcbiAgICAgICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJCdXR0b25Ub29sdGlwRW51bS5DTE9TRVwiIG1hdC1kaWFsb2ctY2xvc2U+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeSBjdXN0b21TY3JvbGxCYXIgcHQtMlwiICNib2R5PlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic291cmNlRkdcIiAobmdTdWJtaXQpPVwic291cmNlU3VibWl0KClcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0RmllbGRXaWR0aDEwMFwiXG4gICAgICAgICAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cIk1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cImZvcm1MYWJlbFwiPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybVBsYWNlaG9sZGVyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNvdXJjZSBuYW1lXCIgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JIYW5kbGluZyhzb3VyY2VGRywgJ25hbWUnLCAncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgRm9ybUVycm9yRW51bS5SRVFVSVJFRCB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXRGaWVsZFdpZHRoMTAwXCIgW2FwcGVhcmFuY2VdPVwiTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdCB1dGlsaXR5IHNvdXJjZTwvbWF0LWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInV0aWxpdHlTb3VyY2VJRFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwib25VdGlsaXR5U291cmNlQ2hhbmdlKCRldmVudC52YWx1ZSlcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInV0aWxpdHlTb3VyY2VUeXBlTSAmJiB1dGlsaXR5U291cmNlVHlwZU0ubGVuZ3RoID4gMCAmJiB1dGlsaXR5U291cmNlVHlwZU1bMF1bJ2lkJ107IGVsc2Ugbm9VdGlsaXR5U291cmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHV0aWxpdHlTb3VyY2Ugb2YgdXRpbGl0eVNvdXJjZVR5cGVNXCIgW3ZhbHVlXT1cInV0aWxpdHlTb3VyY2UuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdXRpbGl0eVNvdXJjZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vVXRpbGl0eVNvdXJjZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgQ09NTU9OX0NPTlNUQU5ULk5PX0RBVEFfRk9VTkQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImVycm9ySGFuZGxpbmcoc291cmNlRkcsICd1dGlsaXR5U291cmNlSUQnLCAncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgRm9ybUVycm9yRW51bS5SRVFVSVJFRCB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXRGaWVsZFdpZHRoMTAwXCIgW2FwcGVhcmFuY2VdPVwiTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdCB1dGlsaXR5IHNvdXJjZSB0eXBlPC9tYXQtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwidHlwZUlEXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic291cmNlVHlwZSAmJiBzb3VyY2VUeXBlLmxlbmd0aCA+IDAgJiYgc291cmNlVHlwZVswXVsnaWQnXTsgZWxzZSBub1NvdXJjZVR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdHlwZSBvZiBzb3VyY2VUeXBlXCIgW3ZhbHVlXT1cInR5cGUuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHlwZS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vU291cmNlVHlwZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgQ09NTU9OX0NPTlNUQU5ULk5PX0RBVEFfRk9VTkQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImVycm9ySGFuZGxpbmcoc291cmNlRkcsICd0eXBlSUQnLCAncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgRm9ybUVycm9yRW51bS5SRVFVSVJFRCB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkLW5vbmVcIiB0eXBlPVwic3VibWl0XCIgI2Zvcm1TdWJtaXRCdG4+PC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG5cbjxkaXYgY2xhc3M9XCJ0c2NEaWFsb2dGb290ZXJcIiAjZm9vdGVyPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGlzRXF1YWwgJiYgYWN0aW9uID09IEZvcm1BY3Rpb24uVVBEQVRFfVwiXG4gICAgICAgIChjbGljayk9XCJmb3JtU3VibWl0QnRuLmNsaWNrKClcIiBtYXRSaXBwbGUgW21hdFJpcHBsZUNlbnRlcmVkXT1cIk1BVEVSSUFMX0NPTlNUQU5ULk1BVF9SSVBQTEVfQ0VOVEVSXCJcbiAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYmVsb3dcIiBbbWF0VG9vbHRpcF09XCJCdXR0b25Ub29sdGlwRW51bS5OT19DSEFOR0VcIj4ge3tcbiAgICAgICAgdHNjQ29tbW9uU2VydmljZS5nZXRCdXR0b25MYWJlbChhY3Rpb24pIH19PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBtZS0yXCIgbWF0LWRpYWxvZy1jbG9zZSBtYXRSaXBwbGVcbiAgICAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cIk1BVEVSSUFMX0NPTlNUQU5ULk1BVF9SSVBQTEVfQ0VOVEVSXCI+Q2FuY2VsPC9idXR0b24+XG48L2Rpdj4iXX0=