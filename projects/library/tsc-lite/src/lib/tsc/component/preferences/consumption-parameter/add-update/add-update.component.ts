import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { isEqual } from 'lodash';

import { ConsumptionParameterM, SavedConsumptionParameterM } from '../../../../model/parameter.model';
import { SourceConsumerConfigure, SourceConsumerConfigureM } from '../../../../model/source-consumer.model';

import { ParameterController } from '../../../../controller/parameter.controller';
import { SourceController } from '../../../../controller/source.controller';

import { ParameterService } from '../../../../service/parameter.service';

// tsc-library
import { MaterialFormFieldAppearance, ButtonLabelEnum, FormAction, PageTitleEnum, FormErrorEnum, TSCCommonService, InvalidForm, COMMON_CONSTANT, MatSelectSearchService, MessageAlertIconEnum, MessageAlertTypeEnum, ResponseM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-add-update',
    templateUrl: './add-update.component.html',
    styles: [
    ]
})
export class ConsumptionParamAddUpdateComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    PageTitleEnum = PageTitleEnum;
    MessageAlertIconEnum = MessageAlertIconEnum;
    MessageAlertTypeEnum = MessageAlertTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;
    isEqual: boolean = true;
    initialObject: any;

    consumptionParamM: any;
    consumptionParamFG: FormGroup;

    sourceConsumerConfiguredM = new SourceConsumerConfigure();

    allConsumptionParamID: any[] = [];
    selection = new SelectionModel(true, []);

    dependentConsumParamSearchUtil: MatSelectSearchService[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastrService: ToastrService,
        public tscCommonService: TSCCommonService,
        private sourceController: SourceController,
        private parameterController: ParameterController,
        private parameterService: ParameterService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getSourceConsumerConfig();
        this.consumptionParamFGInit();
    }

    getSourceConsumerConfig() {
        this.sourceController.getSourceConsumerConfig(this.orgID).subscribe((res: SourceConsumerConfigureM) => {
            this.sourceConsumerConfiguredM = res;
            this.getConsumptionParameter();
        },
            error => console.log('Error:', error)
        );
    }

    getConsumptionParameter() {
        this.consumptionParamFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.consumptionParamFG.getRawValue()); });

        this.parameterController.getConsumptionParameter(this.orgID).subscribe((response: ConsumptionParameterM) => {
            if (response) {
                this.consumptionParamM = response.consumptionParameter;

                this.consumptionParamM.forEach((parameter) => {
                    this.allConsumptionParamID.push(parameter);
                    this.consumptionParameterFA.push(this.newConsumptionParameterFG(parameter.id));

                    let searchUtility = new MatSelectSearchService(['label']);
                    searchUtility.entityArr = parameter.dependentParameter;
                    searchUtility.createSubscription();
                    this.dependentConsumParamSearchUtil.push(searchUtility);

                    this.initialObject = this.consumptionParamFG.value;
                    this.isEqual = true;
                });

                this.getSavedConsumptionParameter();
            }
        }, error => {
            console.log('error in getConsumptionParameter -', error);
        });
    }

    consumptionParamFGInit() {
        this.consumptionParamFG = this.formBuilder.group({
            consumptionParameter: this.formBuilder.array([])
        });
    }

    get consumptionParameterFA(): FormArray {
        return this.consumptionParamFG.get('consumptionParameter') as FormArray;
    }

    async getSavedConsumptionParameter() {
        const param = <SavedConsumptionParameterM[]>await this.parameterService.getSavedConsumptionParameter(this.orgID);
        this.patchConsumptionParam(param)
    }

    patchConsumptionParam(param) {
        this.consumptionParameterFA.controls.forEach(control => {
            param.forEach(element => {
                this.selection.select(element['aggregateParamID'])
                if (element['aggregateParamID'] == control.value['aggregateParamID'])
                    control.get('dependentParameterID').patchValue(element['dependentParameterID'])
            });
        });
    }

    selectAll() {
        if (this.isAllSelected()) {
            this.consumptionParameterFA.controls.forEach(control => {
                const id = control.get('aggregateParamID').value;
                this.selection.deselect(id);
            });
            return;
        }
        this.consumptionParameterFA.controls.forEach(control => {
            const id = control.get('aggregateParamID').value;
            this.selection.select(id);
        });
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.consumptionParamM.length;
        return selected == numRows;
    }

    newConsumptionParameterFG(parameterID): FormGroup {
        return this.formBuilder.group({
            aggregateParamID: [parameterID],
            dependentParameterID: [[], Validators.required]
        });
    }

    selectAllDependentParam(index: number) {
        const dependentParamFG = this.consumptionParameterFA.at(index) as FormGroup;
        const dependentParamFC = dependentParamFG.get('dependentParameterID') as FormArray;

        if (!dependentParamFC.value.includes(-1)) {
            dependentParamFC.reset([]);
            return;
        }

        const parameter = this.consumptionParamM[index];
        const parameterDependentIDs = parameter.dependentParameter.map(depParam => depParam.id);

        dependentParamFC.setValue([-1, ...parameterDependentIDs]);
    }


    selectDependentParam(index: number) {
        const dependentParamFG = this.consumptionParameterFA.at(index) as FormGroup;
        const dependentParamFC = dependentParamFG.get('dependentParameterID') as FormControl;

        const selected = dependentParamFC.value;

        const parameter = this.consumptionParamM[index];
        const parameterDependentIDs = parameter.dependentParameter.map(depParam => depParam.id);
        const totalDepParamCount = parameterDependentIDs.length;

        if (selected.includes(-1)) {
            selected.shift();
            dependentParamFC.patchValue(selected);
        } else if (dependentParamFC.value.length == totalDepParamCount) {
            parameterDependentIDs.splice(0, 0, -1);
            dependentParamFC.patchValue(parameterDependentIDs);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            dependentParamFC.patchValue(filteredSelected);
        }
    }

    consumptionParameterSubmit() {
        const consumptionParameter = this.consumptionParamFG.value.consumptionParameter.map(param => {
            const dependentParameterID = param.dependentParameterID.includes(-1)
                ? param.dependentParameterID.filter(id => id != -1)
                : param.dependentParameterID;

            return { ...param, dependentParameterID };
        });

        if (this.consumptionParamFG.invalid) {
            this.consumptionParamFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_TITLE, ToastrColor.ERROR);
            return;
        }

        this.parameterController.saveConsumptionParameter(this.orgID, consumptionParameter).subscribe((res: ResponseM) => {
            this.getConsumptionParameter();
        }, error => {
            console.log('error in saveConsumptionParameter -', error);
        });
    }

    toggleField(index, parameterID) {
        if (this.selection.isSelected(parameterID)) {
            this.consumptionParameterFA.controls[index].enable();
            return false;
        } else {
            this.consumptionParameterFA.controls[index].disable();
            return true;
        }
    }

    hasError = (control: string, error: string) => {
        return this.consumptionParamFG.get(control).hasError(error);
    }

}
