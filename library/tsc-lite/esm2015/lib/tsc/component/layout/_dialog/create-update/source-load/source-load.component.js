import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEqual } from 'lodash';
// tsc-library
import { InvalidForm, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormAction, PageTitleEnum } from '@library/tsc-common';
import { ToastrColor, ToastrTitle } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "@library/storage-service";
import * as i4 from "@library/toastr-service";
import * as i5 from "@angular/material/checkbox";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/common";
import * as i8 from "@angular/material/input";
// /tsc-library/
export class SourceLoadComponent {
    constructor(dialogRef, data, sourceLoadFB, storageService, toastrService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sourceLoadFB = sourceLoadFB;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.FormActionEnum = FormAction;
        this.PageTitleEnum = PageTitleEnum;
        this.isEqual = true;
        this.entityID = data['entityID'];
        this.deviceInfo = data['deviceInfo'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.sourceLoadFGInit();
        if (this.deviceInfo && this.deviceInfo.mappingRecords && this.deviceInfo.mappingRecords.length == 0) {
            this.action = FormAction.ADD;
        }
        else {
            this.action = FormAction.UPDATE;
            this.desiredMappingArray = this.makeDesiredMappingArray();
            this.patchSourceLoadFG();
        }
        this.intialObject = this.sourceLoadFG.value;
        this.sourceLoadFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceLoadFG.value);
            if (this.action == FormAction.UPDATE) {
                this.updateDesiredMappingArray();
            }
        });
    }
    sourceLoadFGInit() {
        this.sourceLoadFG = this.sourceLoadFB.group({
            isSource: [],
            sourceType: [],
            isLoad: [],
            loadType: [],
        });
    }
    addSourceType(event) {
        const isSource = this.sourceLoadFG.get('isSource');
        isSource.setValue(event.checked);
        if (isSource.value) {
            this.sourceLoadFG.get('sourceType').setValidators([Validators.required]);
        }
        else {
            this.sourceLoadFG.get('sourceType').reset([]);
            this.sourceLoadFG.get('sourceType').clearValidators();
        }
        this.sourceLoadFG.get('sourceType').updateValueAndValidity();
    }
    addLoadType(event) {
        const isLoad = this.sourceLoadFG.get('isLoad');
        isLoad.setValue(event.checked);
        if (isLoad.value) {
            this.sourceLoadFG.get('loadType').setValidators([Validators.required]);
        }
        else {
            this.sourceLoadFG.get('loadType').reset([]);
            this.sourceLoadFG.get('loadType').clearValidators();
        }
        this.sourceLoadFG.get('loadType').updateValueAndValidity();
    }
    makeDesiredMappingArray() {
        const mappingArray = [];
        if (this.action == FormAction.ADD) {
            if (this.sourceLoadFG.get('isSource').value) {
                mappingArray.push({
                    mappingID: null,
                    type: 'SOURCE',
                    value: this.sourceLoadFG.get('sourceType').value || ''
                });
            }
            if (this.sourceLoadFG.get('isLoad').value) {
                mappingArray.push({
                    mappingID: null,
                    type: 'LOAD',
                    value: this.sourceLoadFG.get('loadType').value || ''
                });
            }
        }
        else if (this.action == FormAction.UPDATE) {
            if (this.deviceInfo.mappingRecords) {
                this.deviceInfo.mappingRecords.forEach((record) => {
                    mappingArray.push({
                        mappingID: record.mappingID,
                        type: record.type,
                        value: record.value
                    });
                });
            }
        }
        return mappingArray;
    }
    updateDesiredMappingArray() {
        const mappingArray = [];
        this.desiredMappingArray.forEach((mapping) => {
            if (mapping.type == 'SOURCE' && this.sourceLoadFG.get('isSource').value) {
                mappingArray.push({
                    mappingID: mapping.mappingID,
                    type: 'SOURCE',
                    value: this.sourceLoadFG.get('sourceType').value || ''
                });
            }
            else if (mapping.type == 'LOAD' && this.sourceLoadFG.get('isLoad').value) {
                mappingArray.push({
                    mappingID: mapping.mappingID,
                    type: 'LOAD',
                    value: this.sourceLoadFG.get('loadType').value || ''
                });
            }
        });
        if (this.sourceLoadFG.get('isSource').value && !this.desiredMappingArray.some(mapping => mapping.type == 'SOURCE')) {
            mappingArray.push({
                mappingID: null,
                type: 'SOURCE',
                value: this.sourceLoadFG.get('sourceType').value || ''
            });
        }
        if (this.sourceLoadFG.get('isLoad').value && !this.desiredMappingArray.some(mapping => mapping.type == 'LOAD')) {
            mappingArray.push({
                mappingID: null,
                type: 'LOAD',
                value: this.sourceLoadFG.get('loadType').value || ''
            });
        }
        return mappingArray;
    }
    patchSourceLoadFG() {
        this.desiredMappingArray.forEach((mapping) => {
            if (mapping.type == 'SOURCE') {
                this.sourceLoadFG.patchValue({
                    isSource: true,
                    sourceType: mapping.value
                });
            }
            else if (mapping.type == 'LOAD') {
                this.sourceLoadFG.patchValue({
                    isLoad: true,
                    loadType: mapping.value
                });
            }
        });
    }
    sourceLoadSubmit() {
        if (this.action == FormAction.ADD) {
            this.desiredMappingArray = this.makeDesiredMappingArray();
        }
        else if (this.action == FormAction.UPDATE) {
            this.desiredMappingArray = this.updateDesiredMappingArray();
            if (this.desiredMappingArray.length == 0) {
                this.toastrService.openToast(ToastrTitle.INFO, 'Include source or load category and their type when mapping devices for type meters!', ToastrColor.INFO);
            }
        }
        if (this.sourceLoadFG.invalid) {
            this.sourceLoadFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.dialogRef.close({
            result: DialogEnum.SUCCESS_DR,
            sourceLoadMappingRes: this.desiredMappingArray
        });
    }
    cancel() {
        if (this.action == FormAction.ADD) {
            this.toastrService.openToast(ToastrTitle.INFO, 'Include source or load category and their type when mapping devices for type meters!', ToastrColor.INFO);
        }
        let sourceLoadMappingRes = this.action == FormAction.ADD ? [] : this.makeDesiredMappingArray();
        this.dialogRef.close({
            result: DialogEnum.CLOSE_DR,
            sourceLoadMappingRes: sourceLoadMappingRes
        });
    }
}
SourceLoadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.FormBuilder }, { token: i3.StorageService }, { token: i4.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action == FormActionEnum.ADD ? PageTitleEnum.ADD : PageTitleEnum.UPDATE }} Source/Load\n    </strong>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"sourceLoadFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <mat-checkbox formControlName=\"isSource\" (change)=\"addSourceType($event)\">\n                    Source\n                </mat-checkbox>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"sourceLoadFG.controls['isSource'].value == true\">\n                <mat-form-field class=\"mat-field-width-100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Enter source type</mat-label>\n                    <input matInput placeholder=\"Source type\" type=\"text\" formControlName=\"sourceType\" required />\n                    <mat-error *ngIf=\"sourceLoadFG.get('sourceType').hasError('required')\">\n                        Source type is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <mat-checkbox formControlName=\"isLoad\" (change)=\"addLoadType($event)\">\n                    Load\n                </mat-checkbox>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"sourceLoadFG.controls['isLoad'].value == true\">\n                <mat-form-field class=\"mat-field-width-100\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Enter load type</mat-label>\n                    <input matInput placeholder=\"Load type\" type=\"text\" formControlName=\"loadType\" required />\n                    <mat-error *ngIf=\"sourceLoadFG.get('loadType').hasError('required')\">\n                        Load type is required\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n    </form>\n</div>\n<div mat-dialog-footer align=\"end\">\n    <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancel()\">\n        {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n    </button>\n    <button class=\"btn btn-sm btn-success\" type=\"submit\" [ngClass]=\"{'disabled': isEqual}\" (click)=\"sourceLoadSubmit()\">\n        {{ action == FormActionEnum.ADD ? ButtonLabelEnum.ADD_BTN_LABEL : ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", components: [{ type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i6.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.MatLabel, selector: "mat-label" }, { type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.MatError, selector: "mat-error", inputs: ["id"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-source-load',
                    templateUrl: './source-load.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2.FormBuilder }, { type: i3.StorageService }, { type: i4.ToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L19kaWFsb2cvY3JlYXRlLXVwZGF0ZS9zb3VyY2UtbG9hZC9zb3VyY2UtbG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvX2RpYWxvZy9jcmVhdGUtdXBkYXRlL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRWpDLGNBQWM7QUFDZCxPQUFPLEVBQUUsV0FBVyxFQUFFLDJCQUEyQixFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZJLE9BQU8sRUFBaUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7O0FBQ2xGLGdCQUFnQjtBQVFoQixNQUFNLE9BQU8sbUJBQW1CO0lBa0I1QixZQUNXLFNBQTRDLEVBQ25CLElBQUksRUFDNUIsWUFBeUIsRUFDekIsY0FBOEIsRUFDOUIsYUFBNEI7UUFKN0IsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBQTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFyQnhDLGdDQUEyQixHQUFHLDJCQUEyQixDQUFDO1FBQzFELG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFPOUIsWUFBTyxHQUFZLElBQUksQ0FBQztRQVlwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2pHLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUUxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6RDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ2xCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsTUFBTSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUN6QyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNkLFNBQVMsRUFBRSxJQUFJO29CQUNmLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtpQkFDekQsQ0FBQyxDQUFDO2FBQ047WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDdkMsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDZCxTQUFTLEVBQUUsSUFBSTtvQkFDZixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7aUJBQ3ZELENBQUMsQ0FBQzthQUNOO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDOUMsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDZCxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7d0JBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3FCQUN0QixDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVELHlCQUF5QjtRQUNyQixNQUFNLFlBQVksR0FBVSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3pDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNyRSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNkLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztvQkFDNUIsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2lCQUN6RCxDQUFDLENBQUM7YUFDTjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDeEUsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDZCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7b0JBQzVCLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtpQkFDdkQsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLEVBQUU7WUFDaEgsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDZCxTQUFTLEVBQUUsSUFBSTtnQkFDZixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7YUFDekQsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQzVHLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2FBQ3ZELENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUdELGlCQUFpQjtRQUNiLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN6QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztvQkFDekIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2lCQUM1QixDQUFDLENBQUM7YUFDTjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztvQkFDekIsTUFBTSxFQUFFLElBQUk7b0JBQ1osUUFBUSxFQUFFLE9BQU8sQ0FBQyxLQUFLO2lCQUMxQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdCQUFnQjtRQUNaLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUM3RDthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUM1RCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNGQUFzRixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1SjtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEgsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQzdCLG9CQUFvQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7U0FDakQsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLHNGQUFzRixFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1SjtRQUVELElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9GLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxVQUFVLENBQUMsUUFBUTtZQUMzQixvQkFBb0IsRUFBRSxvQkFBb0I7U0FDN0MsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7aUhBdE5RLG1CQUFtQiw4Q0FvQmhCLGVBQWU7cUdBcEJsQixtQkFBbUIsdURDbkJoQyx1a0ZBa0RNOzRGRC9CTyxtQkFBbUI7a0JBTi9CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsTUFBTSxFQUFFLEVBQ1A7aUJBQ0o7OzBCQXFCUSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgSW52YWxpZEZvcm0sIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSwgQnV0dG9uTGFiZWxFbnVtLCBEaWFsb2dFbnVtLCBGb3JtQWN0aW9uLCBQYWdlVGl0bGVFbnVtIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlLCBUb2FzdHJDb2xvciwgVG9hc3RyVGl0bGUgfSBmcm9tICdAbGlicmFyeS90b2FzdHItc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNvdXJjZS1sb2FkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc291cmNlLWxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlTG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgPSBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2U7XG4gICAgQnV0dG9uTGFiZWxFbnVtID0gQnV0dG9uTGFiZWxFbnVtO1xuICAgIERpYWxvZ0VudW0gPSBEaWFsb2dFbnVtO1xuICAgIEZvcm1BY3Rpb25FbnVtID0gRm9ybUFjdGlvbjtcbiAgICBQYWdlVGl0bGVFbnVtID0gUGFnZVRpdGxlRW51bTtcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgZW50aXR5SUQ6IGFueTtcbiAgICBkZXZpY2VJbmZvOiBhbnk7XG4gICAgYWN0aW9uOiBhbnk7XG4gICAgaW50aWFsT2JqZWN0OiBhbnk7XG4gICAgaXNFcXVhbDogYm9vbGVhbiA9IHRydWU7XG4gICAgZGVzaXJlZE1hcHBpbmdBcnJheTogYW55W107XG5cbiAgICBzb3VyY2VMb2FkRkc6IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8U291cmNlTG9hZENvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VMb2FkRkI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICB0aGlzLmVudGl0eUlEID0gZGF0YVsnZW50aXR5SUQnXTtcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvID0gZGF0YVsnZGV2aWNlSW5mbyddO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICB0aGlzLnNvdXJjZUxvYWRGR0luaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbmZvICYmIHRoaXMuZGV2aWNlSW5mby5tYXBwaW5nUmVjb3JkcyAmJiB0aGlzLmRldmljZUluZm8ubWFwcGluZ1JlY29yZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gRm9ybUFjdGlvbi5BREQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IEZvcm1BY3Rpb24uVVBEQVRFO1xuICAgICAgICAgICAgdGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5ID0gdGhpcy5tYWtlRGVzaXJlZE1hcHBpbmdBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5wYXRjaFNvdXJjZUxvYWRGRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnRpYWxPYmplY3QgPSB0aGlzLnNvdXJjZUxvYWRGRy52YWx1ZTtcblxuICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5pc0VxdWFsID0gaXNFcXVhbCh0aGlzLmludGlhbE9iamVjdCwgdGhpcy5zb3VyY2VMb2FkRkcudmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2lyZWRNYXBwaW5nQXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc291cmNlTG9hZEZHSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkcgPSB0aGlzLnNvdXJjZUxvYWRGQi5ncm91cCh7XG4gICAgICAgICAgICBpc1NvdXJjZTogW10sXG4gICAgICAgICAgICBzb3VyY2VUeXBlOiBbXSxcbiAgICAgICAgICAgIGlzTG9hZDogW10sXG4gICAgICAgICAgICBsb2FkVHlwZTogW10sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFNvdXJjZVR5cGUoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCBpc1NvdXJjZSA9IHRoaXMuc291cmNlTG9hZEZHLmdldCgnaXNTb3VyY2UnKTtcbiAgICAgICAgaXNTb3VyY2Uuc2V0VmFsdWUoZXZlbnQuY2hlY2tlZCk7XG5cbiAgICAgICAgaWYgKGlzU291cmNlLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ3NvdXJjZVR5cGUnKS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ3NvdXJjZVR5cGUnKS5yZXNldChbXSk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ3NvdXJjZVR5cGUnKS5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc291cmNlTG9hZEZHLmdldCgnc291cmNlVHlwZScpLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBhZGRMb2FkVHlwZShldmVudDogYW55KSB7XG4gICAgICAgIGNvbnN0IGlzTG9hZCA9IHRoaXMuc291cmNlTG9hZEZHLmdldCgnaXNMb2FkJyk7XG4gICAgICAgIGlzTG9hZC5zZXRWYWx1ZShldmVudC5jaGVja2VkKTtcblxuICAgICAgICBpZiAoaXNMb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ2xvYWRUeXBlJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdsb2FkVHlwZScpLnJlc2V0KFtdKTtcbiAgICAgICAgICAgIHRoaXMuc291cmNlTG9hZEZHLmdldCgnbG9hZFR5cGUnKS5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc291cmNlTG9hZEZHLmdldCgnbG9hZFR5cGUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgbWFrZURlc2lyZWRNYXBwaW5nQXJyYXkoKTogYW55W10ge1xuICAgICAgICBjb25zdCBtYXBwaW5nQXJyYXk6IGFueVtdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09IEZvcm1BY3Rpb24uQUREKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdpc1NvdXJjZScpLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWFwcGluZ0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTT1VSQ0UnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdzb3VyY2VUeXBlJykudmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlTG9hZEZHLmdldCgnaXNMb2FkJykudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmdJRDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0xPQUQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdsb2FkVHlwZScpLnZhbHVlIHx8ICcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUluZm8ubWFwcGluZ1JlY29yZHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUluZm8ubWFwcGluZ1JlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmdBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmdJRDogcmVjb3JkLm1hcHBpbmdJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwaW5nQXJyYXk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGVzaXJlZE1hcHBpbmdBcnJheSgpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmdBcnJheTogYW55W10gPSBbXTtcblxuICAgICAgICB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkuZm9yRWFjaCgobWFwcGluZykgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcHBpbmcudHlwZSA9PSAnU09VUkNFJyAmJiB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ2lzU291cmNlJykudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmdJRDogbWFwcGluZy5tYXBwaW5nSUQsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTT1VSQ0UnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdzb3VyY2VUeXBlJykudmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwcGluZy50eXBlID09ICdMT0FEJyAmJiB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ2lzTG9hZCcpLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWFwcGluZ0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG1hcHBpbmcubWFwcGluZ0lELFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTE9BRCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ2xvYWRUeXBlJykudmFsdWUgfHwgJydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc291cmNlTG9hZEZHLmdldCgnaXNTb3VyY2UnKS52YWx1ZSAmJiAhdGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5LnNvbWUobWFwcGluZyA9PiBtYXBwaW5nLnR5cGUgPT0gJ1NPVVJDRScpKSB7XG4gICAgICAgICAgICBtYXBwaW5nQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgbWFwcGluZ0lEOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdTT1VSQ0UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ3NvdXJjZVR5cGUnKS52YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VyY2VMb2FkRkcuZ2V0KCdpc0xvYWQnKS52YWx1ZSAmJiAhdGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5LnNvbWUobWFwcGluZyA9PiBtYXBwaW5nLnR5cGUgPT0gJ0xPQUQnKSkge1xuICAgICAgICAgICAgbWFwcGluZ0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIG1hcHBpbmdJRDogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnTE9BRCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc291cmNlTG9hZEZHLmdldCgnbG9hZFR5cGUnKS52YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwcGluZ0FycmF5O1xuICAgIH1cblxuXG4gICAgcGF0Y2hTb3VyY2VMb2FkRkcoKSB7XG4gICAgICAgIHRoaXMuZGVzaXJlZE1hcHBpbmdBcnJheS5mb3JFYWNoKChtYXBwaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFwcGluZy50eXBlID09ICdTT1VSQ0UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkcucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzU291cmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBtYXBwaW5nLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hcHBpbmcudHlwZSA9PSAnTE9BRCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUxvYWRGRy5wYXRjaFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkVHlwZTogbWFwcGluZy52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzb3VyY2VMb2FkU3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5BREQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzaXJlZE1hcHBpbmdBcnJheSA9IHRoaXMubWFrZURlc2lyZWRNYXBwaW5nQXJyYXkoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLlVQREFURSkge1xuICAgICAgICAgICAgdGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5ID0gdGhpcy51cGRhdGVEZXNpcmVkTWFwcGluZ0FycmF5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5JTkZPLCAnSW5jbHVkZSBzb3VyY2Ugb3IgbG9hZCBjYXRlZ29yeSBhbmQgdGhlaXIgdHlwZSB3aGVuIG1hcHBpbmcgZGV2aWNlcyBmb3IgdHlwZSBtZXRlcnMhJywgVG9hc3RyQ29sb3IuSU5GTyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VyY2VMb2FkRkcuaW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkcubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fVElUTEUsIEludmFsaWRGb3JtLklOVkFMSURfRk9STV9NRVNTQUdFLCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICAgICAgICByZXN1bHQ6IERpYWxvZ0VudW0uU1VDQ0VTU19EUixcbiAgICAgICAgICAgIHNvdXJjZUxvYWRNYXBwaW5nUmVzOiB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLkFERCkge1xuICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5JTkZPLCAnSW5jbHVkZSBzb3VyY2Ugb3IgbG9hZCBjYXRlZ29yeSBhbmQgdGhlaXIgdHlwZSB3aGVuIG1hcHBpbmcgZGV2aWNlcyBmb3IgdHlwZSBtZXRlcnMhJywgVG9hc3RyQ29sb3IuSU5GTyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc291cmNlTG9hZE1hcHBpbmdSZXMgPSB0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLkFERCA/IFtdIDogdGhpcy5tYWtlRGVzaXJlZE1hcHBpbmdBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgIHJlc3VsdDogRGlhbG9nRW51bS5DTE9TRV9EUixcbiAgICAgICAgICAgIHNvdXJjZUxvYWRNYXBwaW5nUmVzOiBzb3VyY2VMb2FkTWFwcGluZ1Jlc1xuICAgICAgICB9KVxuICAgIH1cblxufSIsIjxkaXYgbWF0LWRpYWxvZy10aXRsZT5cbiAgICA8c3Ryb25nIGNsYXNzPVwiZGlhbG9nVGl0bGVcIj5cbiAgICAgICAge3sgYWN0aW9uID09IEZvcm1BY3Rpb25FbnVtLkFERCA/IFBhZ2VUaXRsZUVudW0uQUREIDogUGFnZVRpdGxlRW51bS5VUERBVEUgfX0gU291cmNlL0xvYWRcbiAgICA8L3N0cm9uZz5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1hdERpYWxvZ0NvbnRlbnRcIiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzb3VyY2VMb2FkRkdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJpc1NvdXJjZVwiIChjaGFuZ2UpPVwiYWRkU291cmNlVHlwZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIFNvdXJjZVxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIiAqbmdJZj1cInNvdXJjZUxvYWRGRy5jb250cm9sc1snaXNTb3VyY2UnXS52YWx1ZSA9PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0LWZpZWxkLXdpZHRoLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cIk1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cImZvcm1MYWJlbFwiPkVudGVyIHNvdXJjZSB0eXBlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNvdXJjZSB0eXBlXCIgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJzb3VyY2VUeXBlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNvdXJjZUxvYWRGRy5nZXQoJ3NvdXJjZVR5cGUnKS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlIHR5cGUgaXMgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImlzTG9hZFwiIChjaGFuZ2UpPVwiYWRkTG9hZFR5cGUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICBMb2FkXG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiICpuZ0lmPVwic291cmNlTG9hZEZHLmNvbnRyb2xzWydpc0xvYWQnXS52YWx1ZSA9PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0LWZpZWxkLXdpZHRoLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cIk1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbCBjbGFzcz1cImZvcm1MYWJlbFwiPkVudGVyIGxvYWQgdHlwZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMb2FkIHR5cGVcIiB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cImxvYWRUeXBlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInNvdXJjZUxvYWRGRy5nZXQoJ2xvYWRUeXBlJykuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWQgdHlwZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWZvb3RlciBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnkgbWUtMlwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cbiAgICAgICAge3sgQnV0dG9uTGFiZWxFbnVtLkNBTkNFTF9CVE5fTEFCRUwgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogaXNFcXVhbH1cIiAoY2xpY2spPVwic291cmNlTG9hZFN1Ym1pdCgpXCI+XG4gICAgICAgIHt7IGFjdGlvbiA9PSBGb3JtQWN0aW9uRW51bS5BREQgPyBCdXR0b25MYWJlbEVudW0uQUREX0JUTl9MQUJFTCA6IEJ1dHRvbkxhYmVsRW51bS5VUERBVEVfQlROX0xBQkVMIH19XG4gICAgPC9idXR0b24+XG48L2Rpdj4iXX0=