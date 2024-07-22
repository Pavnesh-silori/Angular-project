
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators
} from '@angular/forms';

import { isEqual } from 'lodash';

import { ActivatedRoute } from '@angular/router';

import { DataEntryMethod } from '@carbon/enum/data-entry-mehtod.enum';
import { DataEstimationMethod } from '@carbon/enum/data-estimation-mehtod.enum';
import { DataInputMethod } from '@carbon/enum/data-input-method.enum';
import { UnitTypeEnum } from '@carbon/enum/unit-type.enum';
import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';

import { ActivityConfigI } from '@carbon/component/activity-config/activity-config.interface';

import { DataInputMethodService } from '@carbon/service/data-input-method.service';

import { ContractualInstrumentController } from '@carbon/controller/contractual-instrument.controller';
import { SupplierController } from '@netzero/controller/supplier.controller';

/* tsc-library */
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { StorageService } from '@library/storage-service';
import { FormAction, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { UnitService } from '@library/unit-service';
/* tsc-library */

@Component({
    selector: 'pff-purchased-energy',
    templateUrl: './create.component.html',
    styleUrls: []
})
export class CreateComponent implements OnInit, ActivityConfigI {
    DataEntryMethod = DataEntryMethod;
    DataEstimationMethod = DataEstimationMethod;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    readonly YES = 'YES';
    readonly NO = 'NO';

    currentOrgID: any;

    activityID: any;
    activityKeyID: ActivityKeyIDEnum;
    configuration: any;

    dataEntryMethod: any[] = [];
    estimationMethod: any[] = [];

    dataEntryMethodUsed: String = 'default';
    estimationMethodUsed: String = 'default';

    supplierSearchUtil: MatSelectSearchService = new MatSelectSearchService(['supplierName']);
    /* contInst: CONTRACTUAL_INSTRUMENT */
    contInst: MatSelectSearchService = new MatSelectSearchService(['name']);
    configSearchUtil: MatSelectSearchService = new MatSelectSearchService(['configName']);
    areaUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    currencySearchUtil: MatSelectSearchService = new MatSelectSearchService(['currencyName']);

    origin: string = 'default';
    saveAsPffFC: FormControl = new FormControl(false);

    activityConfigFG: FormGroup;

    initialObject: any;
    @Output()
    isEqual: EventEmitter<boolean> = new EventEmitter();

    FormAction: typeof FormAction;
    FormErrorEnum: typeof FormErrorEnum;
    ActivityKeyIDEnum: typeof ActivityKeyIDEnum;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private unitService: UnitService,
        private dataInputMethodService: DataInputMethodService,
        private supplierController: SupplierController,
        private contractualInstrumentController: ContractualInstrumentController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);

        activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
                this.activityKeyID = queryParams['activityKeyID'];
            }

            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
                // if (queryParams['origin'] == 'ad-hoc') {
                //     this.createSaveAsPFFControlSubscription();
                // }
            }
        });
    }

    ngOnInit(): void {
        this.formGroupInit();
        this.getSupplierByType();
    }

    // createSaveAsPFFControlSubscription() {
    // this.saveAsPffFC.valueChanges
    //     .subscribe(enabled => {
    //         if (enabled) {
    //             this.configNameAC.enable();
    //         } else {
    //             this.configNameAC.reset();
    //             this.configNameAC.disable();
    //         }
    //     });
    // }

    formGroupInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: this.activityID,
                activityKeyID: this.activityKeyID,
                configName: [, Validators.required],
                reminderEnabled: [],
                workflowEnabled: [],
                apiEnabled: []
            }),
            activityConfigData: this.formBuilder.group({
                energy: this.formBuilder.group({
                    isRenewable: [false],
                    percentage: [100],
                }),
                haveContractualInstrument: [, Validators.required],
                contractualInstrumentID: [],
                knowsEnergyConsumption: [],
                dataInputMethodID: [],
                meterRolloverValue: [],
                meterReadingUnitID: [],
                facilityArea: [],
                facilityAreaUnitID: []
            }),
            activityConfigSource: this.formBuilder.group({
                sourceTypeID: null,
                sourceID: [, Validators.required],
            })
        });

        if (this.origin == 'ad-hoc') { this.configNameAC.disable(); }
    }

    get saveAdHocAsPff() {
        return this.saveAsPffFC.value;
    }

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get configNameAC() {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }

    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    get activityConfigSourceAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigSource') as AbstractControl;
    }

    get energyAC() {
        return this.activityConfigDataAC.get('energy');
    }

    get haveContractualInstrumentAC() {
        return this.activityConfigDataAC.get('haveContractualInstrument');
    }

    get knowsEnergyConsumptionAC() {
        return this.activityConfigDataAC.get('knowsEnergyConsumption');
    }

    get dataInputMethodIDAC() {
        return this.activityConfigDataAC.get('dataInputMethodID');
    }

    get activityConfigSourceFA(): FormArray {
        throw new Error('Method not implemented.');
    }

    addValidators(control: string, validators: ValidatorFn | ValidatorFn[]) {
        this.activityConfigDataAC.get(control).addValidators(validators);
        this.activityConfigDataAC.get(control).updateValueAndValidity();
    }

    resetAndClearControl(control: string, reset: any = null) {
        this.activityConfigDataAC.get(control).reset(reset);
        this.activityConfigDataAC.get(control).clearValidators();
        this.activityConfigDataAC.get(control).updateValueAndValidity();
    }

    noSuppliers: boolean = false;
    getSupplierByType() {
        this.supplierController.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER)
            .subscribe((supplierRes: any[]) => {
                if (supplierRes.length != 0) {
                    this.activityConfigSourceAC.get('sourceTypeID').patchValue(supplierRes[0]['sourceTypeID']);
                } else {
                    this.noSuppliers = true;
                }
                this.supplierSearchUtil.entityArr = supplierRes;
                this.supplierSearchUtil.createSubscription();
            },
                error => {
                    console.log('error in getSupplier() -', error);
                })
    }

    getContractualInstrumentList() {
        this.contractualInstrumentController.getContracturalInstrumentList()
            .subscribe((contInstRes: any[]) => {
                this.contInst.entityArr = contInstRes;
                this.contInst.createSubscription();
            },
                error => {
                    console.log('error in getContractualInstrumentList() -', error);
                });
    }

    async getDataInputMethodByActivityAndType(activityID, dataInputMethodType) {
        let inputMethods: any[] = <any>await this.dataInputMethodService.getDataInputMethodByActivityAndType(activityID, dataInputMethodType);
        if (dataInputMethodType == DataInputMethod.STANDARD) {
            this.dataEntryMethod = inputMethods;
        } else if (dataInputMethodType == DataInputMethod.ESTIMATION) {
            this.estimationMethod = inputMethods;
        }
    }

    async getUnit(unitType) {
        let unitFilter: any[] = [];
        unitFilter = [`unitType:${unitType}`];

        let units = <any>await this.unitService.getUnit(unitFilter);
        if (unitType == UnitTypeEnum.AREA) {
            this.areaUnitSearchUtil.entityArr = units;
            this.areaUnitSearchUtil.createSubscription();
        } else if (unitType == UnitTypeEnum.ENERGY) {
            this.energyUnitSearchUtil.entityArr = units;
            this.energyUnitSearchUtil.createSubscription();
        }
    }

    contractualInstrumentChange(haveContInst) {
        this.estimationMethodUsed = 'default';
        this.dataEntryMethodUsed = 'default';

        this.resetContractualInstrumentChildren();

        if (haveContInst == this.YES) {
            this.energyAC.get('isRenewable').patchValue(true);

            this.addValidators('dataInputMethodID', Validators.required);
            this.addValidators('contractualInstrumentID', Validators.required);

            if (this.contInst.entityArr.length == 0) { this.getContractualInstrumentList(); }
            if (this.dataEntryMethod.length == 0) { this.getDataInputMethodByActivityAndType(this.activityID, DataInputMethod.STANDARD); }
        }
        else {
            this.energyAC.get('percentage').reset(100);
            this.energyAC.get('isRenewable').patchValue(false);

            this.addValidators('knowsEnergyConsumption', Validators.required);
        }
    }

    resetContractualInstrumentChildren() {
        this.resetAndClearControl('contractualInstrumentID');
        this.resetAndClearControl('dataInputMethodID');
        this.resetAndClearControl('knowsEnergyConsumption');

        this.resetKnowsConsumptionChildren();
    }

    knowsConsumptionChange(knowsConsumption) {
        this.dataEntryMethodUsed = 'default';
        this.estimationMethodUsed = 'default';

        this.resetKnowsConsumptionChildren();

        if (knowsConsumption == this.NO) {
            this.addValidators('dataInputMethodID', Validators.required);

            if (this.estimationMethod.length == 0) { this.getDataInputMethodByActivityAndType(this.activityID, DataInputMethod.ESTIMATION); }
        } else {
            this.addValidators('dataInputMethodID', Validators.required);

            if (this.dataEntryMethod.length == 0) { this.getDataInputMethodByActivityAndType(this.activityID, DataInputMethod.STANDARD); }
        }
    }

    resetKnowsConsumptionChildren() {
        this.resetAndClearControl('dataInputMethodID');
        this.resetAndClearControl('meterRolloverValue');
        this.resetAndClearControl('meterReadingUnitID');
        this.resetAndClearControl('facilityArea');
        this.resetAndClearControl('facilityAreaUnitID');
    }

    dataEntryMethodChange(dataInputMethodKeyID) {
        this.dataEntryMethodUsed = dataInputMethodKeyID;

        if (dataInputMethodKeyID == DataEntryMethod.METER_READING) {
            this.addValidators('meterRolloverValue', Validators.required);
            this.addValidators('meterReadingUnitID', Validators.required);

            if (this.energyUnitSearchUtil.entityArr.length == 0) { this.getUnit(UnitTypeEnum.ENERGY); }
        } else {
            this.resetAndClearControl('meterRolloverValue');
            this.resetAndClearControl('meterReadingUnitID');
        }
    }

    estimationMethodChange(estimatedMethodKeyID) {
        this.estimationMethodUsed = estimatedMethodKeyID;

        if (estimatedMethodKeyID == DataEstimationMethod.AREA_BASED) {
            this.addValidators('facilityArea', Validators.required);
            this.addValidators('facilityAreaUnitID', Validators.required);

            if (this.areaUnitSearchUtil.entityArr.length == 0) { this.getUnit(UnitTypeEnum.AREA); }
        } else {
            this.resetAndClearControl('facilityArea');
            this.resetAndClearControl('facilityAreaUnitID');
        }
    }

    checkValue() {
        let finalValue = this.activityConfigDataAC.get('energy').get('percentage').value;
        if (finalValue == null || finalValue == '') { finalValue = 0; }
        this.activityConfigDataAC.get('energy').get('percentage').patchValue(finalValue);
    }

    patchConfiguration(configuration: any) {
        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });

        let activityConfig = (configuration['activityConfig'] != null ? configuration['activityConfig'] : null);
        let activityConfigData = configuration['activityConfigData'];
        let activityConfigSource = configuration['activityConfigSource'];

        let energy = configuration['activityConfigData']['energy'];
        if (activityConfig != null) {
            this.activityConfigAC.patchValue({
                configName: activityConfig['configName'],
            });
        } else {
            this.readOnlyForm();
        }

        this.activityConfigSourceAC.patchValue({
            sourceID: activityConfigSource['sourceID'][0],
            sourceTypeID: activityConfigSource['sourceTypeID']
        });

        this.activityConfigDataAC.patchValue({
            energy: {
                isRenewable: energy['isRenewable'],
                percentage: energy['percentage'],
            },
            haveContractualInstrument: activityConfigData['haveContractualInstrument'],
        })

        this.contractualInstrumentChange(activityConfigData['haveContractualInstrument']);
        if (activityConfigData['haveContractualInstrument'] == this.YES) {

            this.activityConfigDataAC.patchValue({
                contractualInstrumentID: activityConfigData['contractualInstrumentID'],
                dataInputMethodID: activityConfigData['dataInputMethodID'],
            });

            if (activityConfigData['dataInputMethodKeyID'] == DataEntryMethod.METER_READING) {
                this.dataEntryMethodChange(activityConfigData['dataInputMethodKeyID'])

                if (activityConfigData['dataInputMethodKeyID'] == DataEntryMethod.METER_READING) {
                    this.activityConfigDataAC.patchValue({
                        meterRolloverValue: activityConfigData['meterRolloverValue'],
                        meterReadingUnitID: activityConfigData['meterReadingUnitID'],
                    });
                }
            }
        } else {
            this.knowsConsumptionChange(activityConfigData['knowsEnergyConsumption']);
            this.activityConfigDataAC.patchValue({ knowsEnergyConsumption: activityConfigData['knowsEnergyConsumption'] });

            if (activityConfigData['knowsEnergyConsumption'] == this.YES) {
                this.activityConfigDataAC.patchValue({ dataInputMethodID: activityConfigData['dataInputMethodID'] });
                this.dataEntryMethodChange(activityConfigData['dataInputMethodKeyID']);
                if (activityConfigData['dataInputMethodKeyID'] == DataEntryMethod.METER_READING) {
                    this.activityConfigDataAC.patchValue({
                        meterRolloverValue: activityConfigData['meterRolloverValue'],
                        meterReadingUnitID: activityConfigData['meterReadingUnitID'],
                    });
                }
            } else {
                this.estimationMethodUsed = activityConfigData['dataInputMethodKeyID'];
                this.activityConfigDataAC.patchValue({ dataInputMethodID: activityConfigData['dataInputMethodID'] });

                if (activityConfigData['dataInputMethodKeyID'] == DataEstimationMethod.AREA_BASED) {
                    this.addValidators('facilityArea', Validators.required);
                    this.addValidators('facilityAreaUnitID', Validators.required);

                    this.getUnit(UnitTypeEnum.AREA);
                    this.activityConfigDataAC.patchValue({
                        facilityArea: activityConfigData['facilityArea'],
                        facilityAreaUnitID: activityConfigData['facilityAreaUnitID'],
                    });
                }
            }

            // if (activityConfig.linkedRecordCount > 0) {
            //     this.activityConfigSourceAC.disable();
            //     this.activityConfigDataAC.disable();
            // }
        }

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(!this.activityConfigFG.invalid));
    }

    get getConfigJson() {
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
        this.configuration['activityConfigSource']['sourceID'] = [this.configuration['activityConfigSource']['sourceID']];
        return this.configuration;
    }

    isValid = () => { return !this.activityConfigFG.invalid; }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            console.log('invalid form -', this.activityConfigFG);
            return false;
        }

        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        this.configuration['activityConfigSource']['sourceID'] = [this.configuration['activityConfigSource']['sourceID']];
        return true;
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    errorHandling = (control: string, error: string) => {
        return this.activityConfigAC.get(control).hasError(error);
    }

    /* ACTIVITY_CONFIG_DATA */
    errorHandlingACD = (control: string, error: string) => {
        return this.activityConfigDataAC.get(control).hasError(error);
    }

    /* ACTIVITY_CONFIG_SOURCE */
    errorHandlingACS = (control: string, error: string) => {
        return this.activityConfigSourceAC.get(control).hasError(error);
    }
}
