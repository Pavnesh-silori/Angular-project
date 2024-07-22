
import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';
import { FuelController } from '@carbon/controller/fuel.controller';
import { AssetController } from '@netzero/controller/asset.controller';

/* tsc-library */
import { DATE_CONSTANT } from '@library/date';
import { VehicleService } from '@library/netzero';
import {
    OrgAccessM,
    OrgType,
    OrganizationController
} from '@library/organization-service';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
/* tsc-library */

@Component({
    selector: 'app-mobile-combustion',
    templateUrl: './mobile-combustion.component.html',
    styleUrls: []
})
export class MobileCombustionComponent implements OnInit {
    environment = environment;
    OrgType = OrgType;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    currentOrgID: any;
    currentOrgType: any;

    fields = [
        {
            view: true,
            width: 'col-sm-8',
            key: 'vehicleID',
            label: 'Select vehicle',
            control: 'vehicleID',
            value: null,
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'vehicleSearchUtil',
                placeholderLabel: 'Search by vehicle name',
                noEntriesFoundLabel: 'No matching vehicle found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a vehicle',
                },
            ],
        },
        {
            view: true,
            width: 'col-sm-8',
            key: 'vehicleCategory',
            label: 'Vehicle category',
            control: 'vehicleCategoryID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'categorySearchUtil',
                placeholderLabel: 'Search by vehicle category',
                noEntriesFoundLabel: 'No matching category found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a vehicle category',
                },
            ],
        },
        {
            view: true,
            width: 'col-sm-8',
            key: 'fuelType',
            label: 'Fuel type',
            control: 'fuelTypeID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'fuelTypeSearchUtil',
                placeholderLabel: 'Search by fuel type',
                noEntriesFoundLabel: 'No matching fuel found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a fuel type',
                },
            ],
        },
        {
            view: true,
            width: 'col-sm-8',
            key: 'year',
            label: 'Year',
            control: 'vehicleYear',
            value: null,
            placeholder: 'vehicle year',
            input: 'input',
            type: 'number',
            validators: [
                {
                    validator: 'min',
                    value: 1980,
                    error: 'Vehicle year cannot be smaller than 1980',
                },
                {
                    validator: 'max',
                    value: DATE_CONSTANT.CURRENT_YEAR,
                    error: `Vehicle year cannot be greater than ${DATE_CONSTANT.CURRENT_YEAR}`,
                }
            ],
        },
        {
            view: true,
            width: 'col-sm-8',
            key: 'engineStroke',
            label: 'Engine stroke',
            control: 'engineStrokeID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: false,
            entityList: [],
            validators: [],
        },
        {
            view: true,
            width: 'col-sm-8',
            key: 'facility',
            label: 'Facility',
            control: 'orgID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'facilitySearchUtil',
                placeholderLabel: 'Search by facility name',
                noEntriesFoundLabel: 'No matching facility found',
                searchBy: 'orgName'
            },
            entityList: [],
            validators: [],
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'name',
            title: 'Vehicle',
            value: 'Vehicle',
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'vehicleYear',
            title: 'Vehicle year',
            value: 'Vehicle year',
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'category',
            title: 'Vehicle category',
            value: 'Vehicle category',
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'fuelType',
            title: 'Fuel type',
            value: 'Fuel type',
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'engineStroke',
            title: 'Engine stroke',
            value: 'Engine stroke',
        },
        {
            view: true,
            width: 'col-sm-6',
            key: 'view',
            control: 'location',
            title: 'Location',
            value: 'Location',
        },
    ];

    setEntityList(key, list: any[]) {
        this.fields.find(f => f?.key == key)['entityList'] = list;
    }

    getField(key) {
        return this.fields.find(f => f?.key == key);
    }

    get vehicle() {
        return this.referenceDataFG.get('vehicleID');
    }

    searchUtility: any = {};
    createSearchUtilities() {
        this.fields.forEach(ff => {
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

    isFactor: boolean = true;
    referenceDataFG: FormGroup = new FormGroup({});

    haveFacilities: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private vehicleService: VehicleService,

        private toastrService: ToastrService,
        storageService: StorageService,
        private assetController: AssetController,
        private fuelController: FuelController,
        private organizationController: OrganizationController,
    ) {
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));
        this.currentOrgType = storageService.getStorage(['currentOrgType']);
    }

    ngOnInit(): void {
        this.activatedRoute.parent.params
            .subscribe(params => {
                if (params['factorID']) { this.isFactor = false; }
                else { this.createSearchUtilities(); }

                this.initFormGroup();
            });
    }

    initFormGroup() {
        this.referenceDataFG = this.formBuilder.group(this.createFormGroup());
    }

    viewFields: any[];
    createFormGroup() {
        let formGroup = {};
        if (this.isFactor) {
            let formFields = this.fields.filter(ff => ff['key'] != 'view');
            formFields.forEach((ff) => {
                formGroup[ff['control']] =
                    this.formBuilder.control(null,
                        Validators.compose(ff['control'] != 'vehicleYear' ? null :
                            ff['validators']
                                .map((v) => v?.value ? Validators[v['validator']](v['value']) : Validators[v['validator']])
                        )
                    );
            });

            this.getFuelType();
            this.getVehicleList();
            this.getVehicleCategory();
            this.getEngineStroke();

            if (this.currentOrgType == OrgType.ORGANIZATION) {
                this.getOrganizationList();
            } else if (this.currentOrgType == OrgType.SITE) {
                this.getField('facility')['view'] = false;
                formGroup['orgID'].patchValue(this.currentOrgID);
            }

            this.viewFields = this.fields.filter(ff => ff['key'] != 'view');
        } else {
            this.viewFields = this.fields.filter(ff => ff['key'] == 'view');
        }

        return formGroup;
    }

    haveVehicles: boolean = true;
    async getVehicleList() {
        let vehicleList = await this.vehicleService.getAllVehicle(this.currentOrgID);
        this.haveVehicles = vehicleList?.length > 0;

        let entityArr = vehicleList.map(({ id, vehicleName }) => ({ id, name: vehicleName }));
        this.searchUtility['vehicleSearchUtil'].entityArr = entityArr;
        this.searchUtility['vehicleSearchUtil'].createSubscription();
    }

    async getVehicleCategory() {
        let category = await this.vehicleService.getVehicleCategory();
        this.searchUtility['categorySearchUtil'].entityArr = category;
        this.searchUtility['categorySearchUtil'].createSubscription();
    }

    getFuelType() {
        this.fuelController.getFuelSource()
            .subscribe((response: any[]) => {
                let entityArr = response.map(({ fuelSourceID, fuelSourceName }) => ({ id: fuelSourceID, name: fuelSourceName }));

                this.searchUtility['fuelTypeSearchUtil'].entityArr = entityArr;
                this.searchUtility['fuelTypeSearchUtil'].createSubscription();
            },
                error => {
                    console.log('error in getFuelType() -', error);
                    this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

    async getEngineStroke() {
        this.setEntityList('engineStroke', await this.vehicleService.getEngineStroke());
    }

    getOrganizationList() {
        this.organizationController.getOrganizationsByType(this.currentOrgID, OrgType.SITE)
            .subscribe((facilityRes: OrgAccessM[]) => {
                this.haveFacilities = facilityRes?.length > 0;

                this.searchUtility['facilitySearchUtil'].entityArr = facilityRes;
                this.searchUtility['facilitySearchUtil'].createSubscription();
            },
                error => {
                    console.log('error in getOrganizationList() -', error);
                    this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

    selectionChange(key) {
        this.inValidFrom = false;

        switch (key) {
            case 'vehicleID':
                this.resetAndClearValidators(['vehicleID', 'vehicleYear']);
                this.referenceDataFG.get('vehicleYear').reset();
                this.referenceDataFG.get('vehicleID').addValidators(Validators.required);
                this.referenceDataFG.get('vehicleID').updateValueAndValidity();
                break;
            case 'fuelTypeID':
            case 'vehicleCategoryID':
                this.referenceDataFG.get('vehicleYear').reset();
                this.resetAndClearValidators(['fuelTypeID', 'vehicleCategoryID', 'vehicleYear']);
                this.referenceDataFG.get('fuelTypeID').addValidators(Validators.required);
                this.referenceDataFG.get('fuelTypeID').updateValueAndValidity();
                this.referenceDataFG.get('vehicleCategoryID').addValidators(Validators.required);
                this.referenceDataFG.get('vehicleCategoryID').updateValueAndValidity();
            default:
                console.log('default')
        }
    }

    resetAndClearValidators(key: any | any[]) {
        let controls: any[];
        if (typeof key == 'object') controls = Object.keys(this.referenceDataFG.controls).filter(c => !key.includes(c));
        else controls = Object.keys(this.referenceDataFG.controls).filter(c => c != key);

        controls.forEach((control) => {
            this.referenceDataFG.get(control).reset();
            this.referenceDataFG.get(control).clearValidators();
            this.referenceDataFG.get(control).updateValueAndValidity();
        });
    }

    patchReference(reference) {
        this.fields.forEach(ff => {
            if (ff['key'] == 'view') {
                ff['value'] = reference[ff['control']];
            }
        })
    }

    inValidFrom: boolean = false;
    isValidForm() {
        if (this.isFactor) {
            let value = this.referenceDataFG.value;
            if (!(value['vehicleID'] || (value['fuelTypeID'] && value['vehicleCategoryID']))) {
                console.log('invalid form -', this.referenceDataFG);
                this.referenceDataFG.markAllAsTouched();
                this.inValidFrom = true;
                return false;
            }
        }

        if (this.currentOrgType == OrgType.SITE) {
            this.referenceDataFG.get('orgID').patchValue(this.currentOrgID);
        }

        return true;
    }

    errorHandling = (control: string, error: string) => {
        return this.referenceDataFG.get(control).hasError(error);
    }

}
