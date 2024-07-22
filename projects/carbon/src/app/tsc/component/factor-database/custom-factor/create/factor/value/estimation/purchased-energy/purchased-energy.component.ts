import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UnitTypeEnum } from '@carbon/enum/unit-type.enum';
import { CurrencyService } from '@carbon/service/currency.service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { UnitService } from '@library/unit-service';

@Component({
    selector: 'app-purchased-energy',
    templateUrl: './purchased-energy.component.html',
    styleUrls: []
})
export class PurchasedEnergyComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    
    formFields = [
        {
            view: true,
            width: 'col-sm-6',
            key: 'amount',
            label: 'Amount',
            control: 'amount',
            value: null,
            placeholder: 'Amount of money',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'required',
                    error: 'Amount is mandatory',
                },
                {
                    validator: 'min',
                    limit: -0.000000000000000000001,
                    error: 'Amount cannot be negative!',
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-3',
            key: 'currency',
            label: 'Currency',
            control: 'currencyID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'currencySearchUtil',
                placeholderLabel: 'Search by currency name',
                noEntriesFoundLabel: 'No matching currency found',
                searchBy: 'currencyName'
            },
            entityList: [],
            option: {
                value: 'currencyID',
                view: 'currencyName'
            },
            validators: [
                {
                    validator: 'required',
                    error: 'Select a currency',
                },
            ],
        },
        {
            view: true,
            width: 'col-sm-3',
            key: 'unit',
            label: 'Unit',
            control: 'unitID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'unitSearchUtil',
                placeholderLabel: 'Search by unit name',
                noEntriesFoundLabel: 'No matching unit found',
                searchBy: 'uomName'
            },
            entityList: [],
            option: {
                value: 'id',
                view: 'name'
            },
            validators: [
                {
                    validator: 'required',
                    error: 'Select a unit',
                },
            ],
        }
    ];

    createSearchUtilities() {
        this.formFields.forEach(ff => {
            if (ff['input'] == 'select' && ff['search']) {
                let searchUtil = ff['searchUtil'];
                let name = searchUtil['name'];
                this.searchUtility[name] = new MatSelectSearchService([searchUtil['searchBy']]);
                
            }
        });
    }

    searchUtility: any = {};

    getSearchUtil(util: string) {
        return this.searchUtility[util];
    }

    setEntityList(key, list: any[]) {
        this.formFields.find(f => f?.key == key)['entityList'] = list;
    }

    isIndividualGasesFC: FormControl = new FormControl(true);

    constructor(
        private currencyService: CurrencyService,
        private unitService: UnitService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.createSearchUtilities();
        this.initFormGroup();

        this.getCurrency();
        this.getUnit();
    }

    valueFG: FormGroup;
    initFormGroup() {
        this.valueFG = this.formBuilder.group(this.createFormGroup())
    }

    createFormGroup() {
        let formGroup = {};
        let formFields = this.formFields.filter((ff) => ff['key'] != 'other');
        formFields.forEach((ff) => {
            formGroup[ff['control']] =
                this.formBuilder.control(ff['value'], Validators.compose(
                    ff['validators']
                        .map((v) => v?.limit ? Validators[v['validator']](v.limit) : Validators[v['validator']])
                )
                );
        });

        return formGroup;
    }

    async getCurrency() {
        let currency = <any>await this.currencyService.getCurrency();
        this.searchUtility['currencySearchUtil'].entityArr = currency;
        this.searchUtility['currencySearchUtil'].createSubscription();
    }

    async getUnit() {
        let unitFilter: any[] = [`unitType:${UnitTypeEnum.ENERGY}`];
        let unit = <any>await this.unitService.getUnit(unitFilter);

        this.searchUtility['unitSearchUtil'].entityArr = unit;
        this.searchUtility['unitSearchUtil'].createSubscription();
    }

    patchValue(values) {
        if (values['isCo2e'] == 'YES') {
            this.isIndividualGasesFC.patchValue(false);
        } else {
            this.isIndividualGasesFC.patchValue(true);
        }
        this.valueFG.patchValue(values);
    }

    isValidForm() {
        if (this.valueFG.invalid) {
            this.valueFG.markAllAsTouched();
            console.log('invalid form -', this.valueFG);
            return false;
        }

        return true;
    }

    referenceData = {};
    getValuesJson(): any {
        this.referenceData = {};

        let factorValue = JSON.parse(JSON.stringify(this.valueFG.value));
        Object.keys(factorValue).forEach(key => {
            if (key == 'isCo2e') this.referenceData[key] = factorValue[key]
            else this.referenceData[key] = Number(factorValue[key]);
        });
        return this.referenceData;
    }

    errorHandling = (control: string, error: string) => {
        return this.valueFG.get(control).hasError(error);
    }
}
