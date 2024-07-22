
import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { SupplierTypeKeyIDEnum } from '@netzero/enum/supplier.enum';
import { SupplierController } from '@netzero/controller/supplier.controller';

/* tsc-library */
import {
    COMMON_CONSTANT,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { OrgType, OrganizationController } from '@library/organization-service';
/* tsc-library */

@Component({
    selector: 'app-purchased-energy',
    templateUrl: './purchased-energy.component.html',
    styleUrls: []
})
export class PurchasedEnergyComponent implements OnInit {
    OrgType = OrgType;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    currentOrgType: any;

    fields = [
        {
            width: 'col-sm-8',
            key: 'supplier',
            label: 'Supplier',
            control: 'supplierID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'supplierSearchUtil',
                placeholderLabel: 'Search by supplier name',
                noEntriesFoundLabel: 'No matching supplier found',
                searchBy: 'supplierName'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a supplier',
                },
            ],
        },
        {
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
            width: 'col-sm-12',
            key: 'view',
            control: 'supplierName',
            title: 'Supplier',
            value: 'supplier name',
        },
        {
            view: true,
            width: 'col-sm-12',
            key: 'view',
            control: 'orgName',
            title: 'Facility',
            value: 'Facility name',
        },
    ];

    setEntityList(key, list: any[]) {
        this.fields.find(f => f?.key == key)['entityList'] = list;
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
    referenceDataFG: FormGroup;

    haveSuppliers: boolean = true;
    haveFacilities: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        storageService: StorageService,
        private toastrService: ToastrService,
        private supplierController: SupplierController,
        private organizationController: OrganizationController
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
                        Validators.compose(
                            ff['validators']
                                .map((v) => Validators[v['validator']]))
                    );
            });

            if (this.currentOrgType == OrgType.ORGANIZATION) {
                this.getOrganizationList();
            } else if (this.currentOrgType == OrgType.SITE) {
                formGroup['orgID'].patchValue(this.currentOrgID);
            }
            this.getSupplierByType();
        } else {
            this.viewFields = this.fields.filter(ff => ff['key'] == 'view');
        }

        return formGroup;
    }

    getSupplierByType() {
        this.supplierController.getSupplierByType(this.currentOrgID, SupplierTypeKeyIDEnum.ENERGY_SUPPLIER)
            .subscribe((supplierRes: any[]) => {
                this.haveSuppliers = supplierRes?.length > 0;

                this.searchUtility['supplierSearchUtil'].entityArr = supplierRes;
                this.searchUtility['supplierSearchUtil'].createSubscription();
            },
                error => {
                    console.log('error in getSupplier() -', error);
                    this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

    getOrganizationList() {
        this.organizationController.getOrganizationsByType(this.currentOrgID, OrgType.SITE)
            .subscribe((facilityRes: any[]) => {
                this.haveFacilities = facilityRes?.length > 0;

                this.searchUtility['facilitySearchUtil'].entityArr = facilityRes;
                this.searchUtility['facilitySearchUtil'].createSubscription();
            },
                error => {
                    console.log('error in getOrganizationList() -', error);
                    this.toastrService.openToast(error.error['title'], error.error['message'], error.error['result']);
                });
    }

    patchReference(reference) {
        this.fields.forEach(ff => {
            if (ff['key'] == 'view') {
                ff['value'] = reference[ff['control']]
            }
        })
    }

    isValidForm() {
        if (this.referenceDataFG.invalid) {
            this.referenceDataFG.markAllAsTouched();
            console.log('invalid form -', this.referenceDataFG);
            return false;
        }

        return true;
    }

    errorHandling = (control: string, error: string) => {
        return this.referenceDataFG.get(control).hasError(error);
    }
}
