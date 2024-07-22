import { Component, OnInit } from '@angular/core';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { FuelController } from '@carbon/controller/fuel.controller';
import { AssetController } from '@netzero/controller/asset.controller';

/* tsc-library */
import {
    COMMON_CONSTANT,
    FormErrorEnum,
    MatSelectSearchService,
    MaterialFormFieldAppearance
} from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { OrgType, OrganizationController } from '@library/organization-service';
import { CustomFuelService } from '@netzero/service/custom-fuel.service';
/* tsc-library */

@Component({
    selector: 'app-stationary-combustion',
    templateUrl: './stationary-combustion.component.html',
    styleUrls: ['./stationary-combustion.component.scss']
})
export class ReferenceDataStationaryCombustionComponent implements OnInit {
    OrgType = OrgType;
    FormErrorEnum = FormErrorEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    currentOrgType: any;
    isFactor: boolean = true;
    referenceDataFG: FormGroup = null;

    haveAssets: boolean = true;
    haveFacilities: boolean = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        storageService: StorageService,
        private assetController: AssetController,
        private fuelController: FuelController,
        private customFuelService: CustomFuelService,
        private organizationController: OrganizationController,
    ) {
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));
        this.currentOrgType = storageService.getStorage(['currentOrgType']);
    }

    ngOnInit(): void {
        this.activatedRoute.parent.params
            .subscribe(params => {
                if (params['factorID']) {
                    this.isFactor = false;
                }
            });

        this.initFormGroup();
    }

    hideFacility: boolean = false;

    initFormGroup() {
        let formGroup = {};
        if (this.isFactor) {
            formGroup = {
                fuelType: [],
                fuelTypeID: [, Validators.required],
                assetID: [],
                orgID: [this.currentOrgType == OrgType.SITE ? this.currentOrgID : null],
                asset: [],
                location: [],
            };

            this.createSearchUtilities();

            this.getAssetList();
            this.getFuelStationaryCombustion();

            if (this.currentOrgType == OrgType.ORGANIZATION) {
                this.getOrganizationList();
            }
        }
        this.referenceDataFG = this.formBuilder.group(formGroup);

        if (this.currentOrgType == OrgType.SITE) {
            this.hideFacility = true;
        }
    }

    fuelUId: FormControl = new FormControl(null, [Validators.required]);
    setFuelType(fuel_U_ID: string) {
        let u = fuel_U_ID.split('-');
        let fuelType = 'STANDARD';
        if (u[0] == 'C') {
            fuelType = 'CUSTOM';
        }

        this.referenceDataFG.patchValue({
            fuelTypeID: u[1],
            fuelType: fuelType
        });
    }

    searchUtility: any = {};

    searchUtil: any[] = [
        {
            name: 'fuelType',
            searchBy: ['name']
        },
        {
            name: 'asset',
            searchBy: ['name']
        },
        {
            name: 'facility',
            searchBy: ['name']
        }
    ];

    viewFields: any[] = [
        {
            view: true,
            width: 'col-sm-10',
            key: 'view',
            control: 'fuelTypeKeyID',
            title: 'Fuel type',
            value: 'Fuel type',
        },
        {
            view: true,
            width: 'col-sm-10',
            key: 'view',
            control: 'fuelType',
            title: 'Fuel',
            value: 'Fuel',
        },
        {
            view: true,
            width: 'col-sm-10',
            key: 'view',
            control: 'asset',
            title: 'Asset',
            value: 'Asset',
        },
        {
            view: true,
            width: 'col-sm-10',
            key: 'view',
            control: 'location',
            title: 'Location',
            value: 'Location',
        },
    ]

    createSearchUtilities() {
        this.searchUtil.forEach((ff: { name, searchBy }) => {
            this.searchUtility[ff.name] = new MatSelectSearchService(ff['searchBy']);
        });
    }

    getSearchUtil(util: string) {
        return this.searchUtility[util];
    }


    allFuels: any[] = [];
    getFuelStationaryCombustion() {
        this.fuelController.getFuelStationaryCombustion()
            .subscribe((response: any[]) => {
                let standardFuels = response;

                if (standardFuels instanceof Array) {
                    let modifiedStdFuel = standardFuels.map((fuel: any) => {
                        return {
                            ...fuel,
                            isStandard: true,
                            uID: 'S-' + fuel['id']
                        };
                    });
                    this.allFuels = this.allFuels.concat(modifiedStdFuel);
                }

                this.getCustomFuelList();
            },
                error => {
                    console.log('error in getFuelType() -', error);
                });
    }

    async getCustomFuelList() {
        const customFuels = await this.customFuelService.getCustomFuelList(this.currentOrgID);

        if (customFuels instanceof Array) {
            let modifiedCustomFuel = customFuels.map((fuel: any) => {
                return {
                    ...fuel,
                    isStandard: false,
                    uID: 'C-' + fuel['id']
                };
            });

            this.allFuels = this.allFuels.concat(modifiedCustomFuel);
        }

        this.searchUtility['fuelType'].entityArr = this.allFuels;
        this.searchUtility['fuelType'].createSubscription();

        // this.haveFuel();
    }

    // haveStandardFuels: boolean = true;
    // haveCustomFuels: boolean = true;
    // private haveFuel = () => {
    //     this.searchUtility['fuelType'].filteredEntities.subscribe((values: any[]) => {
    //         console.log('values - ', values);

    //         this.haveStandardFuels = values.some(v => v.isStandard);
    //         console.log('this.haveStandardFuels - ', this.haveStandardFuels);

    //         this.haveCustomFuels = values.some(v => !v.isStandard);
    //     });
    // }

    getAssetList() {
        this.assetController.getAllAssetList(this.currentOrgID)
            .subscribe((response: any[]) => {
                this.haveAssets = response?.length > 0;
                this.searchUtility['asset'].entityArr = response;
                this.searchUtility['asset'].createSubscription();
            },
                error => {
                    console.log('error in getAssetList() -', error);
                });
    }

    getOrganizationList() {
        this.organizationController.getOrganizationsByType(this.currentOrgID, OrgType.SITE)
            .subscribe((facilityRes: any[]) => {
                this.haveFacilities = facilityRes?.length > 0;

                this.searchUtility['facility'].entityArr = facilityRes;
                this.searchUtility['facility'].createSubscription();
            },
                error => {
                    console.log('error in getOrganizationList() -', error);
                });
    }

    patchReference(reference) {
        this.viewFields.forEach(ff => {
            let value = reference[ff['control']];
            if (ff.control == 'fuelTypeKeyID') {
                value = value.split(' ')
                    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
                    .join(' ');
            }
            ff['value'] = value;
        });
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
