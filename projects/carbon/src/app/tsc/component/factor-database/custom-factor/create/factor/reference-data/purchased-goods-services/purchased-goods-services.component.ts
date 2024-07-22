
import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

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
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { switchMap } from 'rxjs/operators';
/* tsc-library */

@Component({
    selector: 'app-purchased-energy',
    templateUrl: './purchased-goods-services.component.html',
    styleUrls: []
})
export class PurchasedGoodsServicesComponent implements OnInit {
    OrgType = OrgType;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    currentOrg: any;
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
            validators: [],
        },
        {
            width: 'col-sm-8',
            key: 'product',
            label: 'Product',
            control: 'sourceID',
            input: 'select',
            type: 'select',
            multiple: false,
            search: true,
            searchUtil: {
                name: 'sourceTypeSearchUtil',
                placeholderLabel: 'Search by name',
                noEntriesFoundLabel: 'No matching product/service found',
                searchBy: 'name'
            },
            entityList: [],
            validators: [
                {
                    validator: 'required',
                    error: 'Select a product/service',
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
    productList: any[] = [];
    serviceList: any[] = [];
    sourceList: any[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        storageService: StorageService,
        private toastrService: ToastrService,
        private supplierController: SupplierController,
        private organizationController: OrganizationController,
        private productAndServiceService: ProductAndServiceService
    ) {
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));
        // this.currentOrgName = storageService.getStorage(['currentOrgName']);
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

            // formGroup['sourceTypeID'] = this.formBuilder.control(null);
            this.createSourceList();
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
        this.supplierController.getSupplierByType(this.currentOrgID, '')
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

    createProductParams(): any {
        // // if (this.activityKeyID == ActivityKeyIDEnum.PURC) {
        //     return [`category:capital-good`];
        // // }
        return [];
    }

    async getAllProducts() {
        try {
            this.productList = await this.productAndServiceService.getProductList(this.getOrgID(), this.createProductParams()) || [];
        } catch (error) {
            this.productList = [];
            console.log("error", error);
        }
    }

    async getAllServices() {
        try {
            this.serviceList = await this.productAndServiceService.getServiceList(this.getOrgID()) || [];
        } catch (error) {
            this.serviceList = [];
            console.log("error", error);
        }
    }

    async createSourceList() {
        try {
            await Promise.all([this.getAllProducts(), this.getAllServices()]);
            this.sourceList = this.productList.concat(this.serviceList);
            this.searchUtility['sourceTypeSearchUtil'].entityArr = this.sourceList;
            this.searchUtility['sourceTypeSearchUtil'].createSubscription();
        } catch (error) {
            this.sourceList = [];
            console.log("error", error);
        }
    }

    getCurrentOrg() {
        // Return the observable here instead of subscribing
        return this.organizationController.getOrganizationByID(this.currentOrgID);
    }

    getOrganizationList() {
        // First, call getCurrentOrgName and wait for it to complete
        this.getCurrentOrg().pipe(
            switchMap((orgRes: any) => {
                // Set currentOrg from the result
                this.currentOrg = orgRes;
                // Now that we have currentOrg, proceed to get the organization list
                return this.organizationController.getOrganizationsByType(this.currentOrgID, OrgType.SITE);
            })
        ).subscribe((facilityRes: any[]) => {
            // Since getCurrentOrgName has completed, currentOrg is guaranteed to be set here
            if (this.currentOrg) {
                facilityRes.unshift({ id: this.currentOrg['id'], name: this.currentOrg['name'] });
                this.referenceDataFG?.get('orgID').patchValue(this.currentOrg['id']);
            }
            this.haveFacilities = facilityRes?.length > 0;
            this.searchUtility['facilitySearchUtil'].entityArr = facilityRes;
            this.searchUtility['facilitySearchUtil'].createSubscription();
        }, error => {
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

    sourceChanged(event) {
        const source = this.sourceList.find(s => s.id === event.value);
        if (source) {
            if (source['sourceTypeID'] == 12) {
                this.referenceDataFG.addControl('productID', new FormControl(''));
                this.referenceDataFG?.get('productID').patchValue(source['id']);
            } else {
                this.referenceDataFG.addControl('serviceID', new FormControl(''));
                this.referenceDataFG?.get('serviceID').patchValue(source['id']);
            }
            // this.referenceDataFG?.get('sourceTypeID').patchValue(source['sourceTypeID']);

        }
    }

    facilityChanged() {
        // const orgID = this.referenceDataFG?.get('orgID').patchValue(this.referenceDataFG?.get('orgID').value);
        this.createSourceList();
    }

    getOrgID(): any {
        return this.referenceDataFG?.get('orgID').value || this.currentOrgID;
    }

}
