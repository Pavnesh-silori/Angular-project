import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { Parameter, ParameterM } from '../../../../../model/parameter.model';

import { DeviceController } from '../../../../../controller/device.controller';

import { SourceService } from '../../../../../service/source.service';
import { ParameterService } from '../../../../../service/parameter.service';

// tsc-library
import { InvalidForm, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormAction, PageTitleEnum, ResponseM, Static, StaticI, FormErrorEnum, COMMON_CONSTANT, TSCCommonService } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-source-load',
    templateUrl: './source-load.component.html',
    styles: [
    ]
})
export class SourceLoadComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DialogEnum = DialogEnum;
    FormActionEnum = FormAction;
    PageTitleEnum = PageTitleEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    layoutID: any;
    entityID: any;
    deviceInfo: any;
    deviceParameter: any;
    updateFromDialog: any;
    action: any;
    intialObject: any;
    isEqual: boolean = true;
    desiredMappingArray: any[];

    parameterM = [new Parameter()];
    paramLabel: any;

    sourceType = [new Static()];
    loadType = [new Static()];

    infoMessage: string = 'Include source or load category and their type when mapping devices for type meters!';
    warningMessage: string = 'Please add either source or load type when mapping devices for every parameter!';

    sourceLoadFG: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<SourceLoadComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private sourceLoadFB: FormBuilder,
        private deviceController: DeviceController,
        private sourceService: SourceService,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private parameterService: ParameterService,
        private tscCommonService: TSCCommonService,
    ) {
        this.layoutID = data['layoutID'];
        this.entityID = data['entityID'];
        this.deviceInfo = data['deviceInfo'];
        this.deviceParameter = data['deviceInfo']['parameter'];
        this.updateFromDialog = data['updateFromDialog'];
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getParameterByOrgID();

        this.getSourceConsumerType("source")
            .then(app => {
                this.sourceType = app;
            })

        this.getSourceConsumerType("consumer")
            .then(app => {
                this.loadType = app;
            })

        this.sourceLoadFGInit();
        this.deviceParameter.forEach(param => {
            this.addParameterToFormArray(param);
        });

        if (this.deviceInfo && this.deviceInfo.mappingRecords && this.deviceInfo.mappingRecords.length == 0) {
            this.action = FormAction.ADD;
        } else {
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

    async getParameterByOrgID() {
        this.parameterM = <ParameterM[]>await this.parameterService.getParameterByOrgID(this.orgID);
    }

    getParameterLabel(paramID) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'id', paramID);
        return parameter ? parameter.label : '';
    }

    async getSourceConsumerType(type: string): Promise<StaticI[]> {
        const requestData = {
            type: type
        };

        const result = await this.sourceService.getSourceConsumerType(this.orgID, requestData);
        return result;
    }

    sourceLoadFGInit() {
        this.sourceLoadFG = this.sourceLoadFB.group({
            parameterMappingRecord: this.sourceLoadFB.array([])
        });
    }

    addParameterToFormArray(param: any) {
        const parameterFG = this.sourceLoadFB.group({
            parameterID: [param.id],
            isSource: [false],
            sourceType: [{ value: '', disabled: true }, Validators.required],
            isLoad: [false],
            loadType: [{ value: '', disabled: true }, Validators.required]
        });
        this.parameterMappingRecordFA.push(parameterFG);
    }

    get parameterMappingRecordFA(): FormArray {
        return this.sourceLoadFG.get('parameterMappingRecord') as FormArray;
    }

    addSourceType(event: any, index: number) {
        const isSource = this.parameterMappingRecordFA.at(index).get('isSource');
        isSource.setValue(event.checked);

        const sourceTypeControl = this.parameterMappingRecordFA.at(index).get('sourceType');
        if (isSource.value) {
            sourceTypeControl.enable();
            sourceTypeControl.setValidators([Validators.required]);
        } else {
            sourceTypeControl.disable();
            sourceTypeControl.clearValidators();
            sourceTypeControl.reset('');
        }

        sourceTypeControl.updateValueAndValidity();
    }

    addLoadType(event: any, index: number) {
        const isLoad = this.parameterMappingRecordFA.at(index).get('isLoad');
        isLoad.setValue(event.checked);

        const loadTypeControl = this.parameterMappingRecordFA.at(index).get('loadType');
        if (isLoad.value) {
            loadTypeControl.enable();
            loadTypeControl.setValidators([Validators.required]);
        } else {
            loadTypeControl.disable();
            loadTypeControl.clearValidators();
            loadTypeControl.reset('');
        }

        loadTypeControl.updateValueAndValidity();
    }

    makeDesiredMappingArray(): any[] {
        const mappingArray: any[] = [];

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
        } else if (this.action == FormAction.UPDATE) {
            if (this.deviceInfo.mappingRecords) {
                this.deviceInfo.mappingRecords.forEach((record) => {
                    const parameterID = record.parameterID;
                    const mapping = record.mapping?.map((mapping) => {
                        return {
                            mappingID: mapping.mappingID || null,
                            type: mapping.type || '',
                            value: mapping.value || ''
                        };
                    }) || [];

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
            const parameterID = mappingObject.parameterID;
            const parameterFormControl = this.parameterMappingRecordFA.controls.find(formControl => formControl.get('parameterID').value == parameterID);
            if (parameterFormControl) {
                const mapping = mappingObject.mapping;
                const isSource = mapping.some(value => value.type == 'SOURCE');
                const isLoad = mapping.some(value => value.type == 'LOAD');
                const sourceType = mapping.find(value => value.type == 'SOURCE')?.value || '';
                const loadType = mapping.find(value => value.type == 'LOAD')?.value || '';

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
            } else {
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
            } else {
                loadTypeControl.disable();
                loadTypeControl.clearValidators();
                loadTypeControl.reset('');
            }
            loadTypeControl.updateValueAndValidity();
        });
    }

    updateDesiredMappingArray(): any[] {
        const mappingArray: any[] = [];

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
        } else {
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
                } else {
                    if (this.sourceLoadFG.invalid) {
                        this.sourceLoadFG.markAllAsTouched();
                        this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                        return;
                    }

                    this.deviceController.updateSourceLoad(this.orgID, this.layoutID, this.entityID, this.deviceInfo.id, this.desiredMappingArray).subscribe((updateRes: ResponseM) => {
                        this.dialogRef.close({
                            result: DialogEnum.SUCCESS_DR,
                            action: FormAction.UPDATE
                        })
                    },
                        error => {
                            console.log('error in updateSourceLoad() - ', error);
                        });
                }
            } else {
                if (this.action == FormAction.ADD) {
                    this.desiredMappingArray = this.makeDesiredMappingArray();
                } else if (this.action == FormAction.UPDATE) {
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
                })
            }
        }
    }

    cancel() {
        if (this.updateFromDialog == true) {
            if (this.updateDesiredMappingArray().length == 0) {
                this.toastrService.openToast(ToastrTitle.WARNING, this.warningMessage, ToastrColor.WARNING);
            } else {
                this.dialogRef.close({
                    result: DialogEnum.SUCCESS_DR,
                    action: FormAction.CANCEL
                })
            }
        } else {
            if (this.action == FormAction.ADD) {
                this.toastrService.openToast(ToastrTitle.INFO, this.infoMessage, ToastrColor.INFO);
            }

            let sourceLoadMappingRes = this.action == FormAction.ADD ? [] : this.makeDesiredMappingArray();

            this.dialogRef.close({
                result: DialogEnum.CLOSE_DR,
                sourceLoadMappingRes: sourceLoadMappingRes
            })
        }
    }

}