import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { GasController } from '@carbon/controller/gas.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityM } from '@carbon/model/activity.model';
import { ActivityService } from '@carbon/service/activity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import {
    FormErrorEnum,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import {
    UnitM,
    UnitService,
    UnitTypeKeyID
} from '@library/unit-service';
import { CurrencyM } from '@carbon/model/currency.model';
import { CurrencyService } from '@carbon/service/currency.service';
// /tsc-library/

@Component({
    selector: 'app-purchased-energy',
    templateUrl: './purchased-energy.component.html',
    styleUrls: ['./purchased-energy.component.scss']
})
export class PurchasedEnergyComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    FormErrorEnum = FormErrorEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    unitM: UnitM[] = null;
    unitMMass: UnitM[];
    unitMEnergy: UnitM[];
    unitMSationaryDenomenator: UnitM[];
    unitMMobileDenomenator: UnitM[];

    currencyM: CurrencyM[] = null;

    activityID: any;
    activityKeyID: any;
    activity = new ActivityM();

    formFields = [
        {
            for: 'other',
            key: 'isCO2e',
            control: 'isCo2e',
            value: 'NO',
            validators: [
                {
                    validator: 'required',
                    error: 'CO2e value is mandatory',
                }
            ],
        },
        {
            for: 'co2e',
            width: 'col-sm-6',
            key: 'co2e',
            label: 'CO2e',
            control: 'co2e',
            value: null,
            placeholder: '0',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'CO2e value is mandatory',
                }
            ],
        },
        {
            for: 'co2e',
            width: 'col-sm-3',
            key: 'co2eNumerator',
            label: 'Numerator',
            control: 'co2eNumeratorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'co2eNSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'co2e',
            width: 'col-sm-3',
            key: 'co2eDenominator',
            label: 'Denominator',
            control: 'co2eDenominatorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'co2eDSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-6',
            key: 'fossilCo2',
            label: 'Fossil CO2',
            control: 'fossilCo2',
            value: null,
            placeholder: '0',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'Fossil CO2 Value is mandatory',
                },
                {
                    validator: 'min',
                    value: -0.000000000000000000001,
                    error: 'Value cannot be negative!',
                }
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'co2Numerator',
            label: 'Numerator',
            control: 'co2NumeratorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'co2NSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'co2Denominator',
            label: 'Denominator',
            control: 'co2DenominatorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'co2DSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-6',
            key: 'ch4',
            label: 'CH4',
            control: 'ch4',
            value: null,
            placeholder: '0',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'CH4 value is mandatory',
                },
                {
                    validator: 'min',
                    value: -0.000000000000000000001,
                    error: 'Value cannot be negative!',
                }
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'ch4Numerator',
            label: 'Numerator',
            control: 'ch4NumeratorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'ch4NSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'ch4Denominator',
            label: 'Denominator',
            control: 'ch4DenominatorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'ch4DSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-6',
            key: 'n2o',
            label: 'N2O',
            control: 'n2o',
            value: null,
            placeholder: '0',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'N2O value is mandatory',
                },
                {
                    validator: 'min',
                    value: -0.000000000000000000001,
                    error: 'Value cannot be negative!',
                }
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'n2oNumerator',
            label: 'Numerator',
            control: 'n2oNumeratorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'n2oNSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'n2oDenominator',
            label: 'Denominator',
            control: 'n2oDenominatorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'n2oDSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-6',
            key: 'biogenicCo2',
            label: 'Biogenic CO2',
            control: 'biogenicCo2',
            value: null,
            placeholder: '0',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'Biogenic CO2 Value is mandatory',
                },
                {
                    validator: 'min',
                    value: -0.000000000000000000001,
                    error: 'Value cannot be negative!',
                }
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'biogenicCo2Numerator',
            label: 'Numerator',
            control: 'biogenicCo2NumeratorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'biogenicCo2NSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        },
        {
            for: 'gas',
            width: 'col-sm-3',
            key: 'biogenicCo2Denominator',
            label: 'Denominator',
            control: 'biogenicCo2DenominatorUnitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'biogenicCo2DSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        }
    ];

    searchUtility: any = {};
    createSearchUtilities() {
        this.formFields.forEach(ff => {
            if (ff['input'] == 'select' && ff['search']) {
                let searchUtil = ff['searchUtil'];
                let name = searchUtil['name'];
                this.searchUtility[name] = new MatSelectSearchService([searchUtil['searchBy']]);
            }
        });
    }

    getSearchUtil(util: string) {
        return this.searchUtility[util];
    }

    displayedFields: any[];
    displayFields(fieldType: any = 'gas') {
        this.displayedFields = this.formFields.filter((ff) => ff['for'] == fieldType);
        let displayedControls = this.displayedFields.map(d => d['control']);
        displayedControls.unshift('isCo2e');
        Object.keys(this.valueFG.controls).filter(f => !displayedControls.includes(f)).forEach(r => this.valueFG.get(r).reset());
    }

    setEntityList(key, list: any[]) {
        this.formFields.find(f => f?.key == key)['entityList'] = list;
    }

    referenceData = {};

    gases: any[];
    gasSearchUtil = new MatSelectSearchService(['name']);

    selectedGases = new SelectionModel(true, []);
    isIndividualGasesFC: FormControl = new FormControl(true);

    valueFG: FormGroup;
    gasSelectFC: FormControl = new FormControl();

    currentOrgID: any;
    calculationApproach: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private unitService: UnitService,
        private activityService: ActivityService,
        private gasController: GasController,

        // tsc-library
        storageService: StorageService,
        private toastrService: ToastrService,
        private currencyService: CurrencyService
        // /tsc-library/
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((queryParams) => {
            if (queryParams['activityID']) {
                this.activityID = queryParams['activityID'];
                this.getActivityByID(this.activityID);
            }
            const currentNavigation = this.router.getCurrentNavigation();
            // console.log('currentNavigation', currentNavigation);
            const calculationApproach = currentNavigation?.extras?.queryParams?.calculationApproach ?? null;
            if (calculationApproach) {
                this.calculationApproach = calculationApproach;
                // return calculationApproach.keyID;
            } else {
                const calculationApproach2 = currentNavigation?.previousNavigation?.extras?.queryParams?.calculationApproach ?? null;
                // console.log('calculationApproach2', calculationApproach2);
                if (calculationApproach2) {
                    this.calculationApproach = calculationApproach2;
                }
                // this.getAllGasFromPreferredDataset();
            }
        });
        console.log('this.calculationApproach', this.calculationApproach);
        this.getUnit();

        this.createSearchUtilities();
        this.initFormGroup();
        this.displayFields();

        this.getAllGasFromPreferredDataset();
    }

    ngAfterViewInit() { }

    set isCO2e(isCO2e) {
        this.valueFG.get('isCo2e').patchValue(isCO2e);
    }

    set Validator(_isTrue) {
        let _CO2eKeys: any[] = Object.keys(this.valueFG.controls).filter((key: String) => key.includes('co2e'));
        let _nonCO2eKeys: any[] = Object.keys(this.valueFG.controls).filter((key: String) => !key.includes('co2e'));

        if (_isTrue) {
            this.setValidators(_nonCO2eKeys);
            this.removeValidators(_CO2eKeys);
        } else {
            this.setValidators(_CO2eKeys);
            this.removeValidators(_nonCO2eKeys);
        }
    }

    setValidators(formControls) {
        formControls.forEach(key => {
            const control = this.valueFG.controls[key];
            control.setValidators([Validators.required]);
            control.updateValueAndValidity();
        });
    }

    removeValidators(formControls) {
        formControls.forEach(key => {
            const control = this.valueFG.controls[key];
            control.clearValidators();
            control.updateValueAndValidity();
        });
    }

    initFormGroup() {
        this.valueFG = this.formBuilder.group({
            gases: this.formBuilder.array([], Validators.required)
        });
    }

    get gasFormArray(): FormArray {
        return this.valueFG.get('gases') as FormArray;
    }

    createFormGroup() {
        let formGroup = {};
        let formFields = this.formFields.filter((ff) => ff['key'] != 'other');
        formFields.forEach((ff) => {
            formGroup[ff['control']] =
                this.formBuilder.control(ff['value'], ff['for'] == 'gas' ? Validators.compose(
                    ff['validators']
                        .map((v) => v?.value ?
                            Validators[v['validator']](v['value']) :
                            Validators[v['validator']])) : null
                );
        });
        return formGroup;
    }

    get gasFG() {
        const gas = this.gasSelectFC.value;
        const numeratorSearchUtil = new MatSelectSearchService(['name']);
        numeratorSearchUtil.entityArr = this.unitMMass;
        numeratorSearchUtil.createSubscription();

        const denominatorSearchUtil = new MatSelectSearchService(['name']);
        let denominatorUnit: any[] = this.unitMEnergy;
        if (this.activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION) {
            denominatorUnit = this.unitMSationaryDenomenator;
        } else if (this.activityKeyID == ActivityKeyIDEnum.MOBILE_COMBUSTION) {
            denominatorUnit = this.unitMMobileDenomenator;
        } else if (this.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
            if (this.calculationApproach === 'average-method') {
                denominatorUnit = this.unitMMass;
            } else {
                denominatorUnit = this.currencyM;
            }
        }

        denominatorSearchUtil.entityArr = denominatorUnit;
        denominatorSearchUtil.createSubscription();

        this.selectedGases.select(gas.id);

        let formGroup = this.formBuilder.group({
            gasStdID: [gas.id, [Validators.required]],
            gasStdName: [gas.name],
            factor: [, [Validators.required, Validators.min(0)]],
            numeratorUnitID: [, [Validators.required]],
            numeratorSearchUtil: [numeratorSearchUtil],
            denominatorUnitID: [, [Validators.required]],
            denominatorSearchUtil: [denominatorSearchUtil]
        });

        this.gasSelectFC.reset();
        return formGroup;
    }

    // updateDropDowns() {
    //     this.gasFormArray.controls.forEach((control, index) => {
    //         if (this.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
    //             const denominatorSearchUtil = new MatSelectSearchService(['name']);
    //             let denominatorUnit: any[] = this.unitMEnergy;
    //             if (this.calculationApproach?.keyID === 'average-method') {
    //                 denominatorUnit = this.unitMMass;
    //             } else {
    //                 denominatorUnit = this.currencyM;
    //             }
    //             denominatorSearchUtil.entityArr = denominatorUnit;
    //             denominatorSearchUtil.createSubscription();
    //         }
    //     }); 
    // }

    getAndSetGasFG(value) {
        const gas = value.gas;

        const numeratorSearchUtil = new MatSelectSearchService(['name']);
        numeratorSearchUtil.entityArr = this.unitMMass;
        numeratorSearchUtil.createSubscription();

        const denominatorSearchUtil = new MatSelectSearchService(['name']);
        let denominatorUnit: any[] = this.unitMEnergy;
        if (this.activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION) {
            denominatorUnit = this.unitMSationaryDenomenator;
        } else if (this.activityKeyID == ActivityKeyIDEnum.MOBILE_COMBUSTION) {
            denominatorUnit = this.unitMMobileDenomenator;
        } else if (this.activityKeyID == ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES) {
            if (this.calculationApproach === 'average-method') {
                denominatorUnit = this.unitMMass;
            } else {
                denominatorUnit = this.currencyM;
            }
        }

        denominatorSearchUtil.entityArr = denominatorUnit;
        denominatorSearchUtil.createSubscription();

        this.selectedGases.select(gas.id);

        let formGroup = this.formBuilder.group({
            gasStdID: [gas.id, [Validators.required]],
            gasStdName: [gas.name],
            factor: [value.factor, [Validators.required, Validators.min(0)]],
            numeratorUnitID: [value.numeratorUnitID, [Validators.required]],
            numeratorSearchUtil: [numeratorSearchUtil],
            denominatorUnitID: [value.denominatorUnitID, [Validators.required]],
            denominatorSearchUtil: [denominatorSearchUtil]
        });

        this.gasSelectFC.reset();
        return formGroup;
    }

    removeGasFromArray(index) {
        let gasStdID = this.gasFormArray.get(`${index}.gasStdID`).value;
        this.selectedGases.deselect(gasStdID);
        this.gasFormArray.removeAt(index);
    }

    getNumeratorSearchUtil = (index) => {
        return this.gasFormArray.get(`${index}.numeratorSearchUtil`).value;
    }

    getDenominatorSearchUtil = (index) => {
        return this.gasFormArray.get(`${index}.denominatorSearchUtil`).value;
    }

    addGas() {
        this.gasFormArray.push(this.gasFG);
    }

    getAllGasFromPreferredDataset() {
        this.gasController.getAllGasesFromOrgIDPreferenceDataset(this.currentOrgID)
            .subscribe((response: any[]) => {
                this.gases = response['gases'];


                this.router.navigate(
                    [],
                    {
                        relativeTo: this.route,
                        queryParams: { gwpDatasetID: response['gwpDatasetID'] },
                        queryParamsHandling: 'merge'
                    }
                );

                this.gasSearchUtil.entityArr = this.gases;
                this.gasSearchUtil.createSubscription();
                // let includesGases = ["carbon-dioxide", "nitrous-oxide", "methane"];
                // includesGases.forEach(gas => {
                //     this.gasSelectFC.setValue(this.gases.find(g => g.keyID.toLowerCase() == gas));
                //     this.addGas();
                // });
            });
    }

    async getActivityByID(activityID: any) {
        this.activity = await <any>this.activityService.getActivityByID(activityID);
        this.activityKeyID = this.activity.keyID;
    }

    async getUnit() {
        this.unitM = await this.unitService.getUnit([]);
        this.modifyCurrencyResponse();
        this.unitMMass = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.MASS]);
        this.unitMEnergy = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.ENERGY]);
        this.unitMMobileDenomenator = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.LENGTH, UnitTypeKeyID.VOLUME]);
        this.unitMSationaryDenomenator = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.ENERGY, UnitTypeKeyID.VOLUME, UnitTypeKeyID.MASS]);
    }

    // Using async/await for cleaner code
    async modifyCurrencyResponse() {
        try {
            const currency = await this.currencyService.getCurrency();
            const modifiedCurrency = currency.map(item => ({
                ...item,
                name: item.currencyName,
                id: item.currencyID,
                uomCode: item.currencySymbol
            }));
            this.currencyM = modifiedCurrency;
        } catch (error) {
            console.error("Failed to modify currency response:", error);
        }
    }

    async patchValue(values) {
        // console.log('values', values);
        if (this.unitM == null) await this.getUnit();

        values.forEach(value => {
            this.gasFormArray.push(this.getAndSetGasFG(value));
        });
    }

    isValidForm() {
        if (this.valueFG.invalid) {
            this.valueFG.markAllAsTouched();
            console.log('invalid form -', this.valueFG);
            return false;
        }

        return true;
    }

    getValuesJson(): any {
        this.referenceData = {};
        let value = this.valueFG.get('gases').value as any[];
        this.referenceData = value.map(({ gasStdID, factor, numeratorUnitID, denominatorUnitID }) => {
            return { gasStdID, factor, numeratorUnitID, denominatorUnitID }
        });

        return this.referenceData;
    }

    showError = () => {
        return (this.valueFG.touched && this.valueFG.invalid) && (this.valueFG.value.gases.length == 0);
    }

    errorHandling = (control: string, error: string) => {
        return this.valueFG.get(control).hasError(error);
    }

    public errorHandlingFA = (formGroup: FormGroup, control: string, error: string) => {
        return formGroup.get(`${control}`).hasError(error);
    }
}
