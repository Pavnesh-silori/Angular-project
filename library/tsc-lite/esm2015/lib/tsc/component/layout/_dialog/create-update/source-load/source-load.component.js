import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isEqual } from 'lodash';
import { Parameter } from '../../../../../model/parameter.model';
// tsc-library
import { InvalidForm, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormAction, PageTitleEnum, Static, FormErrorEnum, COMMON_CONSTANT } from '@library/tsc-common';
import { ToastrColor, ToastrTitle } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "../../../../../controller/device.controller";
import * as i4 from "../../../../../service/source.service";
import * as i5 from "@library/storage-service";
import * as i6 from "@library/toastr-service";
import * as i7 from "../../../../../service/parameter.service";
import * as i8 from "@library/tsc-common";
import * as i9 from "@angular/material/card";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/form-field";
import * as i12 from "@angular/material/select";
import * as i13 from "@angular/material/core";
import * as i14 from "@angular/common";
// /tsc-library/
export class SourceLoadComponent {
    constructor(dialogRef, data, sourceLoadFB, deviceController, sourceService, storageService, toastrService, parameterService, tscCommonService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sourceLoadFB = sourceLoadFB;
        this.deviceController = deviceController;
        this.sourceService = sourceService;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.parameterService = parameterService;
        this.tscCommonService = tscCommonService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.FormActionEnum = FormAction;
        this.PageTitleEnum = PageTitleEnum;
        this.FormErrorEnum = FormErrorEnum;
        this.isEqual = true;
        this.parameterM = [new Parameter()];
        this.sourceType = [new Static()];
        this.loadType = [new Static()];
        this.infoMessage = 'Include source or load category and their type when mapping devices for type meters!';
        this.warningMessage = 'Please add either source or load type when mapping devices for every parameter!';
        this.layoutID = data['layoutID'];
        this.entityID = data['entityID'];
        this.deviceInfo = data['deviceInfo'];
        this.deviceParameter = data['deviceInfo']['parameter'];
        this.updateFromDialog = data['updateFromDialog'];
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getParameterByOrgID();
        this.getSourceConsumerType("source")
            .then(app => {
            this.sourceType = app;
        });
        this.getSourceConsumerType("consumer")
            .then(app => {
            this.loadType = app;
        });
        this.sourceLoadFGInit();
        this.deviceParameter.forEach(param => {
            this.addParameterToFormArray(param);
        });
        if (this.deviceInfo && this.deviceInfo.mappingRecords && this.deviceInfo.mappingRecords.length == 0) {
            this.action = FormAction.ADD;
        }
        else {
            this.action = FormAction.UPDATE;
            this.desiredMappingArray = this.makeDesiredMappingArray();
            this.patchSourceLoadFG();
            this.updateFormControlsState();
        }
        this.intialObject = this.sourceLoadFG.value;
        this.sourceLoadFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.sourceLoadFG.value);
            if (this.action == FormAction.UPDATE) {
                this.updateDesiredMappingArray();
            }
        });
    }
    getParameterByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByOrgID(this.orgID));
        });
    }
    getParameterLabel(paramID) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'id', paramID);
        return parameter ? parameter.label : '';
    }
    getSourceConsumerType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestData = {
                type: type
            };
            const result = yield this.sourceService.getSourceConsumerType(this.orgID, requestData);
            return result;
        });
    }
    sourceLoadFGInit() {
        this.sourceLoadFG = this.sourceLoadFB.group({
            parameterMappingRecord: this.sourceLoadFB.array([])
        });
    }
    addParameterToFormArray(param) {
        const parameterFG = this.sourceLoadFB.group({
            parameterID: [param.id],
            isSource: [false],
            sourceType: [{ value: '', disabled: true }, Validators.required],
            isLoad: [false],
            loadType: [{ value: '', disabled: true }, Validators.required]
        });
        this.parameterMappingRecordFA.push(parameterFG);
    }
    get parameterMappingRecordFA() {
        return this.sourceLoadFG.get('parameterMappingRecord');
    }
    addSourceType(event, index) {
        const isSource = this.parameterMappingRecordFA.at(index).get('isSource');
        isSource.setValue(event.checked);
        const sourceTypeControl = this.parameterMappingRecordFA.at(index).get('sourceType');
        if (isSource.value) {
            sourceTypeControl.enable();
            sourceTypeControl.setValidators([Validators.required]);
        }
        else {
            sourceTypeControl.disable();
            sourceTypeControl.clearValidators();
            sourceTypeControl.reset('');
        }
        sourceTypeControl.updateValueAndValidity();
    }
    addLoadType(event, index) {
        const isLoad = this.parameterMappingRecordFA.at(index).get('isLoad');
        isLoad.setValue(event.checked);
        const loadTypeControl = this.parameterMappingRecordFA.at(index).get('loadType');
        if (isLoad.value) {
            loadTypeControl.enable();
            loadTypeControl.setValidators([Validators.required]);
        }
        else {
            loadTypeControl.disable();
            loadTypeControl.clearValidators();
            loadTypeControl.reset('');
        }
        loadTypeControl.updateValueAndValidity();
    }
    makeDesiredMappingArray() {
        const mappingArray = [];
        if (this.action == FormAction.ADD) {
            this.parameterMappingRecordFA.controls.forEach((parameter, index) => {
                const parameterID = parameter.get('parameterID').value;
                const mapping = [];
                const isSource = parameter.get('isSource').value;
                const sourceType = parameter.get('sourceType').value || '';
                if (isSource) {
                    mapping.push({
                        mappingID: null,
                        type: 'SOURCE',
                        value: sourceType
                    });
                }
                const isLoad = parameter.get('isLoad').value;
                const loadType = parameter.get('loadType').value || '';
                if (isLoad) {
                    mapping.push({
                        mappingID: null,
                        type: 'LOAD',
                        value: loadType
                    });
                }
                if (mapping.length > 0) {
                    mappingArray.push({
                        parameterID: parameterID,
                        mapping: mapping
                    });
                }
            });
        }
        else if (this.action == FormAction.UPDATE) {
            if (this.deviceInfo.mappingRecords) {
                this.deviceInfo.mappingRecords.forEach((record) => {
                    var _a;
                    const parameterID = record.parameterID;
                    const mapping = ((_a = record.mapping) === null || _a === void 0 ? void 0 : _a.map((mapping) => {
                        return {
                            mappingID: mapping.mappingID || null,
                            type: mapping.type || '',
                            value: mapping.value || ''
                        };
                    })) || [];
                    mappingArray.push({
                        parameterID: parameterID,
                        mapping: mapping
                    });
                });
            }
        }
        return mappingArray;
    }
    patchSourceLoadFG() {
        this.desiredMappingArray.forEach((mappingObject) => {
            var _a, _b;
            const parameterID = mappingObject.parameterID;
            const parameterFormControl = this.parameterMappingRecordFA.controls.find(formControl => formControl.get('parameterID').value == parameterID);
            if (parameterFormControl) {
                const mapping = mappingObject.mapping;
                const isSource = mapping.some(value => value.type == 'SOURCE');
                const isLoad = mapping.some(value => value.type == 'LOAD');
                const sourceType = ((_a = mapping.find(value => value.type == 'SOURCE')) === null || _a === void 0 ? void 0 : _a.value) || '';
                const loadType = ((_b = mapping.find(value => value.type == 'LOAD')) === null || _b === void 0 ? void 0 : _b.value) || '';
                parameterFormControl.patchValue({
                    isSource,
                    isLoad,
                    sourceType,
                    loadType
                });
            }
        });
    }
    updateFormControlsState() {
        this.parameterMappingRecordFA.controls.forEach((parameter, index) => {
            const isSource = parameter.get('isSource').value;
            const sourceTypeControl = parameter.get('sourceType');
            if (isSource) {
                sourceTypeControl.enable();
                sourceTypeControl.setValidators([Validators.required]);
            }
            else {
                sourceTypeControl.disable();
                sourceTypeControl.clearValidators();
                sourceTypeControl.reset('');
            }
            sourceTypeControl.updateValueAndValidity();
            const isLoad = parameter.get('isLoad').value;
            const loadTypeControl = parameter.get('loadType');
            if (isLoad) {
                loadTypeControl.enable();
                loadTypeControl.setValidators([Validators.required]);
            }
            else {
                loadTypeControl.disable();
                loadTypeControl.clearValidators();
                loadTypeControl.reset('');
            }
            loadTypeControl.updateValueAndValidity();
        });
    }
    updateDesiredMappingArray() {
        const mappingArray = [];
        this.parameterMappingRecordFA.controls.forEach((parameter) => {
            const parameterID = parameter.get('parameterID').value;
            const mapping = [];
            const isSource = parameter.get('isSource').value;
            const sourceType = parameter.get('sourceType').value || '';
            if (isSource) {
                mapping.push({
                    mappingID: null,
                    type: 'SOURCE',
                    value: sourceType
                });
            }
            const isLoad = parameter.get('isLoad').value;
            const loadType = parameter.get('loadType').value || '';
            if (isLoad) {
                mapping.push({
                    mappingID: null,
                    type: 'LOAD',
                    value: loadType
                });
            }
            if (mapping.length > 0) {
                mappingArray.push({
                    parameterID: parameterID,
                    mapping: mapping
                });
            }
        });
        return mappingArray;
    }
    validateSourceOrLoad() {
        const formControls = this.parameterMappingRecordFA.controls;
        const validFormControls = formControls.filter(control => {
            const isSource = control.get('isSource').value;
            const isLoad = control.get('isLoad').value;
            return isSource || isLoad;
        });
        if (validFormControls.length == formControls.length) {
            return true;
        }
        else {
            this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
            return false;
        }
    }
    sourceLoadSubmit() {
        if (this.validateSourceOrLoad()) {
            if (this.updateFromDialog == true) {
                this.desiredMappingArray = this.updateDesiredMappingArray();
                if (this.desiredMappingArray.length == 0) {
                    this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
                }
                else {
                    if (this.sourceLoadFG.invalid) {
                        this.sourceLoadFG.markAllAsTouched();
                        this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                        return;
                    }
                    this.deviceController.updateSourceLoad(this.orgID, this.layoutID, this.entityID, this.deviceInfo.id, this.desiredMappingArray).subscribe((updateRes) => {
                        this.dialogRef.close({
                            result: DialogEnum.SUCCESS_DR,
                            action: FormAction.UPDATE
                        });
                    }, error => {
                        console.log('error in updateSourceLoad() - ', error);
                    });
                }
            }
            else {
                if (this.action == FormAction.ADD) {
                    this.desiredMappingArray = this.makeDesiredMappingArray();
                }
                else if (this.action == FormAction.UPDATE) {
                    this.desiredMappingArray = this.updateDesiredMappingArray();
                    if (this.desiredMappingArray.length == 0) {
                        this.toastrService.openToast(ToastrTitle.INFO, this.infoMessage, ToastrColor.INFO);
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
        }
    }
    cancel() {
        if (this.updateFromDialog == true) {
            if (this.updateDesiredMappingArray().length == 0) {
                this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
            }
            else {
                this.dialogRef.close({
                    result: DialogEnum.SUCCESS_DR,
                    action: FormAction.CANCEL
                });
            }
        }
        else {
            if (this.action == FormAction.ADD) {
                this.toastrService.openToast(ToastrTitle.INFO, this.infoMessage, ToastrColor.INFO);
            }
            let sourceLoadMappingRes = this.action == FormAction.ADD ? [] : this.makeDesiredMappingArray();
            this.dialogRef.close({
                result: DialogEnum.CLOSE_DR,
                sourceLoadMappingRes: sourceLoadMappingRes
            });
        }
    }
}
SourceLoadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceLoadComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.FormBuilder }, { token: i3.DeviceController }, { token: i4.SourceService }, { token: i5.StorageService }, { token: i6.ToastrService }, { token: i7.ParameterService }, { token: i8.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
SourceLoadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SourceLoadComponent, selector: "lib-source-load", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action == FormActionEnum.ADD ? PageTitleEnum.ADD : PageTitleEnum.UPDATE }} Source/Consumer\n    </strong>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"sourceLoadFG\">\n        <ng-container formArrayName=\"parameterMappingRecord\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 mb-3\" *ngFor=\"let param of parameterMappingRecordFA.controls; let i = index\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-card class=\"border card cardOverwrite\">\n                            <div class=\"cardTitle\">\n                                {{ getParameterLabel(param.get('parameterID').value) }}\n                            </div>\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4\">\n                                    <mat-checkbox (change)=\"addSourceType($event, i)\" formControlName=\"isSource\">Source</mat-checkbox>\n                                </div>\n                                <div class=\"col-sm-8\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select source type</mat-label>\n\n                                        <mat-select formControlName=\"sourceType\" [disabled]=\"!parameterMappingRecordFA.controls[i].get('isSource').value\"\n                                            required>\n                                            <ng-container *ngIf=\"sourceType && sourceType.length > 0 && sourceType[0]['id']; else noSourceType\">\n                                                <mat-option *ngFor=\"let type of sourceType\" [value]=\"type.id\">\n                                                    {{ type.name }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noSourceType>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"this.parameterMappingRecordFA.controls[i].get('sourceType').hasError('required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                                </div>\n                            <div class=\"row mt-2\">\n                                <div class=\"col-sm-4\">\n                                    <mat-checkbox (change)=\"addLoadType($event, i)\" formControlName=\"isLoad\">Load</mat-checkbox>\n                                </div>\n                                <div class=\"col-sm-8\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select consumer type</mat-label>\n\n                                        <mat-select formControlName=\"loadType\" [disabled]=\"!parameterMappingRecordFA.controls[i].get('isLoad').value\"\n                                            required>\n                                            <ng-container *ngIf=\"loadType && loadType.length > 0 && loadType[0]['id']; else noLoadType\">\n                                                <mat-option *ngFor=\"let type of loadType\" [value]=\"type.id\">\n                                                    {{ type.name }}\n                                                </mat-option>\n                                            </ng-container>\n                                            <ng-template #noLoadType>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n\n                                        <mat-error *ngIf=\"this.parameterMappingRecordFA.controls[i].get('loadType').hasError('required')\">\n                                            {{ FormErrorEnum.REQUIRED }}\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </mat-card>\n                    </ng-container>\n                </div>\n            </div>\n        </ng-container>\n    </form>\n</div>\n<div mat-dialog-footer align=\"end\">\n    <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancel()\">\n        {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n    </button>\n    <button class=\"btn btn-sm btn-success\" type=\"submit\" [ngClass]=\"{'disabled': isEqual}\" (click)=\"sourceLoadSubmit()\">\n        {{ action == FormActionEnum.ADD ? ButtonLabelEnum.ADD_BTN_LABEL : ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", components: [{ type: i9.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i11.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i12.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i13.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i11.MatLabel, selector: "mat-label" }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i11.MatError, selector: "mat-error", inputs: ["id"] }, { type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
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
                }] }, { type: i2.FormBuilder }, { type: i3.DeviceController }, { type: i4.SourceService }, { type: i5.StorageService }, { type: i6.ToastrService }, { type: i7.ParameterService }, { type: i8.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L19kaWFsb2cvY3JlYXRlLXVwZGF0ZS9zb3VyY2UtbG9hZC9zb3VyY2UtbG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvX2RpYWxvZy9jcmVhdGUtdXBkYXRlL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQXFDLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sc0NBQXNDLENBQUM7QUFPN0UsY0FBYztBQUNkLE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFhLE1BQU0sRUFBVyxhQUFhLEVBQUUsZUFBZSxFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBRXJOLE9BQU8sRUFBaUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2xGLGdCQUFnQjtBQVFoQixNQUFNLE9BQU8sbUJBQW1CO0lBaUM1QixZQUNXLFNBQTRDLEVBQ25CLElBQUksRUFDNUIsWUFBeUIsRUFD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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUUvRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDakIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxRQUFRO2dCQUMzQixvQkFBb0IsRUFBRSxvQkFBb0I7YUFDN0MsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDOztpSEFoWlEsbUJBQW1CLDhDQW1DaEIsZUFBZTtxR0FuQ2xCLG1CQUFtQix1REN6QmhDLGc3S0FxRk07NEZENURPLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxNQUFNLEVBQUUsRUFDUDtpQkFDSjs7MEJBb0NRLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBhcmFtZXRlciwgUGFyYW1ldGVyTSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVsL3BhcmFtZXRlci5tb2RlbCc7XG5cbmltcG9ydCB7IERldmljZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb250cm9sbGVyL2RldmljZS5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2Uvc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFyYW1ldGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2UvcGFyYW1ldGVyLnNlcnZpY2UnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgSW52YWxpZEZvcm0sIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSwgQnV0dG9uTGFiZWxFbnVtLCBEaWFsb2dFbnVtLCBGb3JtQWN0aW9uLCBQYWdlVGl0bGVFbnVtLCBSZXNwb25zZU0sIFN0YXRpYywgU3RhdGljSSwgRm9ybUVycm9yRW51bSwgQ09NTU9OX0NPTlNUQU5ULCBUU0NDb21tb25TZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlLCBUb2FzdHJDb2xvciwgVG9hc3RyVGl0bGUgfSBmcm9tICdAbGlicmFyeS90b2FzdHItc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNvdXJjZS1sb2FkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc291cmNlLWxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlTG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBDT01NT05fQ09OU1RBTlQgPSBDT01NT05fQ09OU1RBTlQ7XG5cbiAgICBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgPSBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2U7XG4gICAgQnV0dG9uTGFiZWxFbnVtID0gQnV0dG9uTGFiZWxFbnVtO1xuICAgIERpYWxvZ0VudW0gPSBEaWFsb2dFbnVtO1xuICAgIEZvcm1BY3Rpb25FbnVtID0gRm9ybUFjdGlvbjtcbiAgICBQYWdlVGl0bGVFbnVtID0gUGFnZVRpdGxlRW51bTtcbiAgICBGb3JtRXJyb3JFbnVtID0gRm9ybUVycm9yRW51bTtcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgbGF5b3V0SUQ6IGFueTtcbiAgICBlbnRpdHlJRDogYW55O1xuICAgIGRldmljZUluZm86IGFueTtcbiAgICBkZXZpY2VQYXJhbWV0ZXI6IGFueTtcbiAgICB1cGRhdGVGcm9tRGlhbG9nOiBhbnk7XG4gICAgYWN0aW9uOiBhbnk7XG4gICAgaW50aWFsT2JqZWN0OiBhbnk7XG4gICAgaXNFcXVhbDogYm9vbGVhbiA9IHRydWU7XG4gICAgZGVzaXJlZE1hcHBpbmdBcnJheTogYW55W107XG5cbiAgICBwYXJhbWV0ZXJNID0gW25ldyBQYXJhbWV0ZXIoKV07XG4gICAgcGFyYW1MYWJlbDogYW55O1xuXG4gICAgc291cmNlVHlwZSA9IFtuZXcgU3RhdGljKCldO1xuICAgIGxvYWRUeXBlID0gW25ldyBTdGF0aWMoKV07XG5cbiAgICBpbmZvTWVzc2FnZTogc3RyaW5nID0gJ0luY2x1ZGUgc291cmNlIG9yIGxvYWQgY2F0ZWdvcnkgYW5kIHRoZWlyIHR5cGUgd2hlbiBtYXBwaW5nIGRldmljZXMgZm9yIHR5cGUgbWV0ZXJzISc7XG4gICAgd2FybmluZ01lc3NhZ2U6IHN0cmluZyA9ICdQbGVhc2UgYWRkIGVpdGhlciBzb3VyY2Ugb3IgbG9hZCB0eXBlIHdoZW4gbWFwcGluZyBkZXZpY2VzIGZvciBldmVyeSBwYXJhbWV0ZXIhJztcblxuICAgIHNvdXJjZUxvYWRGRzogRm9ybUdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxTb3VyY2VMb2FkQ29tcG9uZW50PixcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhLFxuICAgICAgICBwcml2YXRlIHNvdXJjZUxvYWRGQjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgZGV2aWNlQ29udHJvbGxlcjogRGV2aWNlQ29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdHNjQ29tbW9uU2VydmljZTogVFNDQ29tbW9uU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5sYXlvdXRJRCA9IGRhdGFbJ2xheW91dElEJ107XG4gICAgICAgIHRoaXMuZW50aXR5SUQgPSBkYXRhWydlbnRpdHlJRCddO1xuICAgICAgICB0aGlzLmRldmljZUluZm8gPSBkYXRhWydkZXZpY2VJbmZvJ107XG4gICAgICAgIHRoaXMuZGV2aWNlUGFyYW1ldGVyID0gZGF0YVsnZGV2aWNlSW5mbyddWydwYXJhbWV0ZXInXTtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tRGlhbG9nID0gZGF0YVsndXBkYXRlRnJvbURpYWxvZyddO1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdjdXJyZW50T3JnSUQnKTtcblxuICAgICAgICB0aGlzLmdldFBhcmFtZXRlckJ5T3JnSUQoKTtcblxuICAgICAgICB0aGlzLmdldFNvdXJjZUNvbnN1bWVyVHlwZShcInNvdXJjZVwiKVxuICAgICAgICAgICAgLnRoZW4oYXBwID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSBhcHA7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2V0U291cmNlQ29uc3VtZXJUeXBlKFwiY29uc3VtZXJcIilcbiAgICAgICAgICAgIC50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHlwZSA9IGFwcDtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkdJbml0KCk7XG4gICAgICAgIHRoaXMuZGV2aWNlUGFyYW1ldGVyLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbWV0ZXJUb0Zvcm1BcnJheShwYXJhbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmRldmljZUluZm8gJiYgdGhpcy5kZXZpY2VJbmZvLm1hcHBpbmdSZWNvcmRzICYmIHRoaXMuZGV2aWNlSW5mby5tYXBwaW5nUmVjb3Jkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBGb3JtQWN0aW9uLkFERDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gRm9ybUFjdGlvbi5VUERBVEU7XG4gICAgICAgICAgICB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkgPSB0aGlzLm1ha2VEZXNpcmVkTWFwcGluZ0FycmF5KCk7XG4gICAgICAgICAgICB0aGlzLnBhdGNoU291cmNlTG9hZEZHKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1Db250cm9sc1N0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludGlhbE9iamVjdCA9IHRoaXMuc291cmNlTG9hZEZHLnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc291cmNlTG9hZEZHLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmlzRXF1YWwgPSBpc0VxdWFsKHRoaXMuaW50aWFsT2JqZWN0LCB0aGlzLnNvdXJjZUxvYWRGRy52YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLlVQREFURSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzaXJlZE1hcHBpbmdBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeU9yZ0lEKCkge1xuICAgICAgICB0aGlzLnBhcmFtZXRlck0gPSA8UGFyYW1ldGVyTVtdPmF3YWl0IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJCeU9yZ0lEKHRoaXMub3JnSUQpO1xuICAgIH1cblxuICAgIGdldFBhcmFtZXRlckxhYmVsKHBhcmFtSUQpIHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyID0gdGhpcy50c2NDb21tb25TZXJ2aWNlLmdldFVuaXF1ZU9iamVjdCh0aGlzLnBhcmFtZXRlck0sICdpZCcsIHBhcmFtSUQpO1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVyID8gcGFyYW1ldGVyLmxhYmVsIDogJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U291cmNlQ29uc3VtZXJUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8U3RhdGljSVtdPiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xuICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VDb25zdW1lclR5cGUodGhpcy5vcmdJRCwgcmVxdWVzdERhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHNvdXJjZUxvYWRGR0luaXQoKSB7XG4gICAgICAgIHRoaXMuc291cmNlTG9hZEZHID0gdGhpcy5zb3VyY2VMb2FkRkIuZ3JvdXAoe1xuICAgICAgICAgICAgcGFyYW1ldGVyTWFwcGluZ1JlY29yZDogdGhpcy5zb3VyY2VMb2FkRkIuYXJyYXkoW10pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFBhcmFtZXRlclRvRm9ybUFycmF5KHBhcmFtOiBhbnkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyRkcgPSB0aGlzLnNvdXJjZUxvYWRGQi5ncm91cCh7XG4gICAgICAgICAgICBwYXJhbWV0ZXJJRDogW3BhcmFtLmlkXSxcbiAgICAgICAgICAgIGlzU291cmNlOiBbZmFsc2VdLFxuICAgICAgICAgICAgc291cmNlVHlwZTogW3sgdmFsdWU6ICcnLCBkaXNhYmxlZDogdHJ1ZSB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGlzTG9hZDogW2ZhbHNlXSxcbiAgICAgICAgICAgIGxvYWRUeXBlOiBbeyB2YWx1ZTogJycsIGRpc2FibGVkOiB0cnVlIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5wdXNoKHBhcmFtZXRlckZHKTtcbiAgICB9XG5cbiAgICBnZXQgcGFyYW1ldGVyTWFwcGluZ1JlY29yZEZBKCk6IEZvcm1BcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZUxvYWRGRy5nZXQoJ3BhcmFtZXRlck1hcHBpbmdSZWNvcmQnKSBhcyBGb3JtQXJyYXk7XG4gICAgfVxuXG4gICAgYWRkU291cmNlVHlwZShldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGlzU291cmNlID0gdGhpcy5wYXJhbWV0ZXJNYXBwaW5nUmVjb3JkRkEuYXQoaW5kZXgpLmdldCgnaXNTb3VyY2UnKTtcbiAgICAgICAgaXNTb3VyY2Uuc2V0VmFsdWUoZXZlbnQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3Qgc291cmNlVHlwZUNvbnRyb2wgPSB0aGlzLnBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5hdChpbmRleCkuZ2V0KCdzb3VyY2VUeXBlJyk7XG4gICAgICAgIGlmIChpc1NvdXJjZS52YWx1ZSkge1xuICAgICAgICAgICAgc291cmNlVHlwZUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgICAgIHNvdXJjZVR5cGVDb250cm9sLnJlc2V0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvdXJjZVR5cGVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBhZGRMb2FkVHlwZShldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGlzTG9hZCA9IHRoaXMucGFyYW1ldGVyTWFwcGluZ1JlY29yZEZBLmF0KGluZGV4KS5nZXQoJ2lzTG9hZCcpO1xuICAgICAgICBpc0xvYWQuc2V0VmFsdWUoZXZlbnQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3QgbG9hZFR5cGVDb250cm9sID0gdGhpcy5wYXJhbWV0ZXJNYXBwaW5nUmVjb3JkRkEuYXQoaW5kZXgpLmdldCgnbG9hZFR5cGUnKTtcbiAgICAgICAgaWYgKGlzTG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgbG9hZFR5cGVDb250cm9sLmVuYWJsZSgpO1xuICAgICAgICAgICAgbG9hZFR5cGVDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRUeXBlQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICAgICAgICBsb2FkVHlwZUNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICBsb2FkVHlwZUNvbnRyb2wucmVzZXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFR5cGVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBtYWtlRGVzaXJlZE1hcHBpbmdBcnJheSgpOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IG1hcHBpbmdBcnJheTogYW55W10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5BREQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVyTWFwcGluZ1JlY29yZEZBLmNvbnRyb2xzLmZvckVhY2goKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJJRCA9IHBhcmFtZXRlci5nZXQoJ3BhcmFtZXRlcklEJykudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTb3VyY2UgPSBwYXJhbWV0ZXIuZ2V0KCdpc1NvdXJjZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVR5cGUgPSBwYXJhbWV0ZXIuZ2V0KCdzb3VyY2VUeXBlJykudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKGlzU291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmcucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU09VUkNFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzb3VyY2VUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzTG9hZCA9IHBhcmFtZXRlci5nZXQoJ2lzTG9hZCcpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRUeXBlID0gcGFyYW1ldGVyLmdldCgnbG9hZFR5cGUnKS52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmcucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTE9BRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbG9hZFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1hcHBpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJJRDogcGFyYW1ldGVySUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nOiBtYXBwaW5nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aW9uID09IEZvcm1BY3Rpb24uVVBEQVRFKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VJbmZvLm1hcHBpbmdSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VJbmZvLm1hcHBpbmdSZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJJRCA9IHJlY29yZC5wYXJhbWV0ZXJJRDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IHJlY29yZC5tYXBwaW5nPy5tYXAoKG1hcHBpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ0lEOiBtYXBwaW5nLm1hcHBpbmdJRCB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG1hcHBpbmcudHlwZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWFwcGluZy52YWx1ZSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSkgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwcGluZ0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVySUQ6IHBhcmFtZXRlcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZzogbWFwcGluZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwcGluZ0FycmF5O1xuICAgIH1cblxuICAgIHBhdGNoU291cmNlTG9hZEZHKCkge1xuICAgICAgICB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkuZm9yRWFjaCgobWFwcGluZ09iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVySUQgPSBtYXBwaW5nT2JqZWN0LnBhcmFtZXRlcklEO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVyRm9ybUNvbnRyb2wgPSB0aGlzLnBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5jb250cm9scy5maW5kKGZvcm1Db250cm9sID0+IGZvcm1Db250cm9sLmdldCgncGFyYW1ldGVySUQnKS52YWx1ZSA9PSBwYXJhbWV0ZXJJRCk7XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gbWFwcGluZ09iamVjdC5tYXBwaW5nO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU291cmNlID0gbWFwcGluZy5zb21lKHZhbHVlID0+IHZhbHVlLnR5cGUgPT0gJ1NPVVJDRScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTG9hZCA9IG1hcHBpbmcuc29tZSh2YWx1ZSA9PiB2YWx1ZS50eXBlID09ICdMT0FEJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlVHlwZSA9IG1hcHBpbmcuZmluZCh2YWx1ZSA9PiB2YWx1ZS50eXBlID09ICdTT1VSQ0UnKT8udmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZFR5cGUgPSBtYXBwaW5nLmZpbmQodmFsdWUgPT4gdmFsdWUudHlwZSA9PSAnTE9BRCcpPy52YWx1ZSB8fCAnJztcblxuICAgICAgICAgICAgICAgIHBhcmFtZXRlckZvcm1Db250cm9sLnBhdGNoVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICBpc1NvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkVHlwZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVGb3JtQ29udHJvbHNTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJNYXBwaW5nUmVjb3JkRkEuY29udHJvbHMuZm9yRWFjaCgocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNTb3VyY2UgPSBwYXJhbWV0ZXIuZ2V0KCdpc1NvdXJjZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlVHlwZUNvbnRyb2wgPSBwYXJhbWV0ZXIuZ2V0KCdzb3VyY2VUeXBlJyk7XG4gICAgICAgICAgICBpZiAoaXNTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGVDb250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC5yZXNldCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VyY2VUeXBlQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTG9hZCA9IHBhcmFtZXRlci5nZXQoJ2lzTG9hZCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbG9hZFR5cGVDb250cm9sID0gcGFyYW1ldGVyLmdldCgnbG9hZFR5cGUnKTtcbiAgICAgICAgICAgIGlmIChpc0xvYWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkVHlwZUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgbG9hZFR5cGVDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9hZFR5cGVDb250cm9sLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICBsb2FkVHlwZUNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICAgICAgbG9hZFR5cGVDb250cm9sLnJlc2V0KCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvYWRUeXBlQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZURlc2lyZWRNYXBwaW5nQXJyYXkoKTogYW55W10ge1xuICAgICAgICBjb25zdCBtYXBwaW5nQXJyYXk6IGFueVtdID0gW107XG5cbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJNYXBwaW5nUmVjb3JkRkEuY29udHJvbHMuZm9yRWFjaCgocGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJJRCA9IHBhcmFtZXRlci5nZXQoJ3BhcmFtZXRlcklEJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IGlzU291cmNlID0gcGFyYW1ldGVyLmdldCgnaXNTb3VyY2UnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVR5cGUgPSBwYXJhbWV0ZXIuZ2V0KCdzb3VyY2VUeXBlJykudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICBpZiAoaXNTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTT1VSQ0UnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlVHlwZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0xvYWQgPSBwYXJhbWV0ZXIuZ2V0KCdpc0xvYWQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRUeXBlID0gcGFyYW1ldGVyLmdldCgnbG9hZFR5cGUnKS52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIGlmIChpc0xvYWQpIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nSUQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdMT0FEJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxvYWRUeXBlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXBwaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXBwaW5nQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcklEOiBwYXJhbWV0ZXJJRCxcbiAgICAgICAgICAgICAgICAgICAgbWFwcGluZzogbWFwcGluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWFwcGluZ0FycmF5O1xuICAgIH1cblxuICAgIHZhbGlkYXRlU291cmNlT3JMb2FkKCkge1xuICAgICAgICBjb25zdCBmb3JtQ29udHJvbHMgPSB0aGlzLnBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5jb250cm9scztcblxuICAgICAgICBjb25zdCB2YWxpZEZvcm1Db250cm9scyA9IGZvcm1Db250cm9scy5maWx0ZXIoY29udHJvbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NvdXJjZSA9IGNvbnRyb2wuZ2V0KCdpc1NvdXJjZScpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXNMb2FkID0gY29udHJvbC5nZXQoJ2lzTG9hZCcpLnZhbHVlO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNTb3VyY2UgfHwgaXNMb2FkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsaWRGb3JtQ29udHJvbHMubGVuZ3RoID09IGZvcm1Db250cm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5XQVJOSU5HLCB0aGlzLndhcm5pbmdNZXNzYWdlLCBUb2FzdHJDb2xvci5XQVJOSU5HKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUxvYWRTdWJtaXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVTb3VyY2VPckxvYWQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlRnJvbURpYWxvZyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5ID0gdGhpcy51cGRhdGVEZXNpcmVkTWFwcGluZ0FycmF5KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuV0FSTklORywgdGhpcy53YXJuaW5nTWVzc2FnZSwgVG9hc3RyQ29sb3IuV0FSTklORyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlTG9hZEZHLmludmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlTG9hZEZHLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoSW52YWxpZEZvcm0uSU5WQUxJRF9GT1JNX1RJVExFLCBJbnZhbGlkRm9ybS5JTlZBTElEX0ZPUk1fTUVTU0FHRSwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VDb250cm9sbGVyLnVwZGF0ZVNvdXJjZUxvYWQodGhpcy5vcmdJRCwgdGhpcy5sYXlvdXRJRCwgdGhpcy5lbnRpdHlJRCwgdGhpcy5kZXZpY2VJbmZvLmlkLCB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkpLnN1YnNjcmliZSgodXBkYXRlUmVzOiBSZXNwb25zZU0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IERpYWxvZ0VudW0uU1VDQ0VTU19EUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEZvcm1BY3Rpb24uVVBEQVRFXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiB1cGRhdGVTb3VyY2VMb2FkKCkgLSAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLkFERCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkgPSB0aGlzLm1ha2VEZXNpcmVkTWFwcGluZ0FycmF5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGlvbiA9PSBGb3JtQWN0aW9uLlVQREFURSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXkgPSB0aGlzLnVwZGF0ZURlc2lyZWRNYXBwaW5nQXJyYXkoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNpcmVkTWFwcGluZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KFRvYXN0clRpdGxlLklORk8sIHRoaXMuaW5mb01lc3NhZ2UsIFRvYXN0ckNvbG9yLklORk8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291cmNlTG9hZEZHLmludmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2VMb2FkRkcubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KEludmFsaWRGb3JtLklOVkFMSURfRk9STV9USVRMRSwgSW52YWxpZEZvcm0uSU5WQUxJRF9GT1JNX01FU1NBR0UsIFRvYXN0ckNvbG9yLkVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBEaWFsb2dFbnVtLlNVQ0NFU1NfRFIsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUxvYWRNYXBwaW5nUmVzOiB0aGlzLmRlc2lyZWRNYXBwaW5nQXJyYXlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy51cGRhdGVGcm9tRGlhbG9nID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZURlc2lyZWRNYXBwaW5nQXJyYXkoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuV0FSTklORywgdGhpcy53YXJuaW5nTWVzc2FnZSwgVG9hc3RyQ29sb3IuV0FSTklORyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBEaWFsb2dFbnVtLlNVQ0NFU1NfRFIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogRm9ybUFjdGlvbi5DQU5DRUxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09IEZvcm1BY3Rpb24uQUREKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5JTkZPLCB0aGlzLmluZm9NZXNzYWdlLCBUb2FzdHJDb2xvci5JTkZPKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNvdXJjZUxvYWRNYXBwaW5nUmVzID0gdGhpcy5hY3Rpb24gPT0gRm9ybUFjdGlvbi5BREQgPyBbXSA6IHRoaXMubWFrZURlc2lyZWRNYXBwaW5nQXJyYXkoKTtcblxuICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgICAgICAgICAgIHJlc3VsdDogRGlhbG9nRW51bS5DTE9TRV9EUixcbiAgICAgICAgICAgICAgICBzb3VyY2VMb2FkTWFwcGluZ1Jlczogc291cmNlTG9hZE1hcHBpbmdSZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCI8ZGl2IG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgPHN0cm9uZyBjbGFzcz1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgIHt7IGFjdGlvbiA9PSBGb3JtQWN0aW9uRW51bS5BREQgPyBQYWdlVGl0bGVFbnVtLkFERCA6IFBhZ2VUaXRsZUVudW0uVVBEQVRFIH19IFNvdXJjZS9Db25zdW1lclxuICAgIDwvc3Ryb25nPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWF0RGlhbG9nQ29udGVudFwiIG1hdC1kaWFsb2ctY29udGVudD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNvdXJjZUxvYWRGR1wiPlxuICAgICAgICA8bmctY29udGFpbmVyIGZvcm1BcnJheU5hbWU9XCJwYXJhbWV0ZXJNYXBwaW5nUmVjb3JkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCIgKm5nRm9yPVwibGV0IHBhcmFtIG9mIHBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtmb3JtR3JvdXBOYW1lXT1cImlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cImJvcmRlciBjYXJkIGNhcmRPdmVyd3JpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFBhcmFtZXRlckxhYmVsKHBhcmFtLmdldCgncGFyYW1ldGVySUQnKS52YWx1ZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiYWRkU291cmNlVHlwZSgkZXZlbnQsIGkpXCIgZm9ybUNvbnRyb2xOYW1lPVwiaXNTb3VyY2VcIj5Tb3VyY2U8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0RmllbGRXaWR0aDEwMFwiIFthcHBlYXJhbmNlXT1cIk1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlNlbGVjdCBzb3VyY2UgdHlwZTwvbWF0LWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic291cmNlVHlwZVwiIFtkaXNhYmxlZF09XCIhcGFyYW1ldGVyTWFwcGluZ1JlY29yZEZBLmNvbnRyb2xzW2ldLmdldCgnaXNTb3VyY2UnKS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic291cmNlVHlwZSAmJiBzb3VyY2VUeXBlLmxlbmd0aCA+IDAgJiYgc291cmNlVHlwZVswXVsnaWQnXTsgZWxzZSBub1NvdXJjZVR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0eXBlIG9mIHNvdXJjZVR5cGVcIiBbdmFsdWVdPVwidHlwZS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHR5cGUubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub1NvdXJjZVR5cGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBDT01NT05fQ09OU1RBTlQuTk9fREFUQV9GT1VORCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJ0aGlzLnBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5jb250cm9sc1tpXS5nZXQoJ3NvdXJjZVR5cGUnKS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBGb3JtRXJyb3JFbnVtLlJFUVVJUkVEIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImFkZExvYWRUeXBlKCRldmVudCwgaSlcIiBmb3JtQ29udHJvbE5hbWU9XCJpc0xvYWRcIj5Mb2FkPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdEZpZWxkV2lkdGgxMDBcIiBbYXBwZWFyYW5jZV09XCJNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UuRk9STV9GSUVMRF9BUFBFQVJBTkNFXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5TZWxlY3QgY29uc3VtZXIgdHlwZTwvbWF0LWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwibG9hZFR5cGVcIiBbZGlzYWJsZWRdPVwiIXBhcmFtZXRlck1hcHBpbmdSZWNvcmRGQS5jb250cm9sc1tpXS5nZXQoJ2lzTG9hZCcpLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkVHlwZSAmJiBsb2FkVHlwZS5sZW5ndGggPiAwICYmIGxvYWRUeXBlWzBdWydpZCddOyBlbHNlIG5vTG9hZFR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0eXBlIG9mIGxvYWRUeXBlXCIgW3ZhbHVlXT1cInR5cGUuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0eXBlLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9Mb2FkVHlwZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IENPTU1PTl9DT05TVEFOVC5OT19EQVRBX0ZPVU5EIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInRoaXMucGFyYW1ldGVyTWFwcGluZ1JlY29yZEZBLmNvbnRyb2xzW2ldLmdldCgnbG9hZFR5cGUnKS5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBGb3JtRXJyb3JFbnVtLlJFUVVJUkVEIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWZvb3RlciBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnkgbWUtMlwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2FuY2VsKClcIj5cbiAgICAgICAge3sgQnV0dG9uTGFiZWxFbnVtLkNBTkNFTF9CVE5fTEFCRUwgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogaXNFcXVhbH1cIiAoY2xpY2spPVwic291cmNlTG9hZFN1Ym1pdCgpXCI+XG4gICAgICAgIHt7IGFjdGlvbiA9PSBGb3JtQWN0aW9uRW51bS5BREQgPyBCdXR0b25MYWJlbEVudW0uQUREX0JUTl9MQUJFTCA6IEJ1dHRvbkxhYmVsRW51bS5VUERBVEVfQlROX0xBQkVMIH19XG4gICAgPC9idXR0b24+XG48L2Rpdj4iXX0=