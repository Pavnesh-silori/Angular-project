import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CustomFactorVersionController } from '@carbon/controller/custom-factor-version.controller';
import { CustomFactorController } from '@carbon/controller/custom-factor.controller';
import { ToastrService } from '@library/toastr-service';
import { InvalidForm } from '@library/tsc-common';
import { DetailComponent } from './detail/detail.component';
import { SourceComponent } from './source/source.component';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-factor',
    templateUrl: './factor.component.html',
    styles: [
    ]
})
export class FactorComponent implements OnInit {
    currentOrgID: any;

    @ViewChild('detail') detail: DetailComponent;
    // @ViewChild('source') source: SourceComponent;
    @ViewChild('valueOutlet', { read: RouterOutlet }) valueRO: RouterOutlet;
    @ViewChild('referenceOutlet', { read: RouterOutlet }) referenceRO: RouterOutlet;

    constructor(
        private router: Router,
        storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private toastrService: ToastrService,
        private customFactorController: CustomFactorController,
        private customFactorVersionController: CustomFactorVersionController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    title: string = 'Create custom emission factor';

    redirectUrl: string;
    isFactor: boolean = true;
    factorID: any;
    versionID: any;
    isUpdate: boolean = false;

    customFactorType: string = 'emission';
    factorDatabaseType: string = 'custom-emission-factor';

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {            
            this.factorDatabaseType = params['factorDatabaseType'];

            if (this.factorDatabaseType == 'custom-estimation-factor') {
                this.customFactorType = 'estimation';
            }

            this.title = `Create custom ${this.customFactorType} factor`;
            this.redirectUrl = `/carbon-setting/factor-database/${this.factorDatabaseType}/custom/${this.customFactorType}/database/${params['cefDB']}/${params['cefDBID']}/factor`;

            if (params['factorID']) {
                this.isFactor = false;
                this.factorID = params['factorID'];
                let factorName = decodeURIComponent(params['factorName']);

                this.title = `Create custom ${this.customFactorType} factor version`;
                this.redirectUrl += `/${factorName}/${this.factorID}/version`;

                this.getFactorByID(this.factorID);
                if (params['versionID']) {
                    this.isUpdate = true;

                    this.versionID = params['versionID'];
                    this.getVersionByID(this.versionID);
                    this.title = `Update custom ${this.customFactorType} factor version`
                }
            }
        });
    }

    value: any;
    setValue(value) {
        console.log('value', value);
        this.value = value;
        this.value.calculationApproach = this.detail?.selectedCalculationApproach;
    }

    referenceData: any;
    setReference(referenceData) {
        this.referenceData = referenceData;
    }

    activityKeyID: string;
    getFactorByID(factorID) {
        this.customFactorController.getFactorByID(this.currentOrgID, factorID)
            .subscribe(cefRes => {
                this.detail.patchFactorDetails(cefRes['details']);
                this.referenceData.patchReference(cefRes['referenceData']);
            },
                error => {
                    console.log('error in getFactorByID() -', error);
                });
    }

    getVersionByID(versionID) {
        this.customFactorVersionController.getVersionByID(this.currentOrgID, versionID)
            .subscribe(response => {
                this.patchVersion(response);
            },
                error => {
                    console.log('error in getVersionByID -', error);
                })
    }

    patchVersion(version) {
        let _factor_value_key = (this.customFactorType == 'estimation') ? 'estimationValues' : 'values';

        this.detail.patchDetails(version['details']);
        this.value.patchValue(version[_factor_value_key]);
        // need to find
        // this.source.patchSource(version['source']);
    }

    formData: FormData;
    cef_emission_Json: any = {};
    isCEFValid() {
        this.value?.isValidForm();
        this.detail?.isValidForm();
        // this.source?.isValidForm();
        this.referenceData?.isValidForm();

        if (!(this.detail.isValidForm() && this.referenceData.isValidForm() && this.value.isValidForm())) {
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return;
        }

        if (this.isFactor) {
            this.createCEFFactor();
        } else {
            if (this.isUpdate) this.updateCEFVersion();
            else this.createCEFVersion()
        }
    }

    getFormData(): FormData {
        this.formData = new FormData();

        let _factor_value_key = (this.customFactorType == 'estimation') ? 'estimationValues' : 'values';

        console.log(this.detail)
        this.cef_emission_Json['details'] = this.detail.detailFG.value;
        this.cef_emission_Json['source'] = this.detail.source.sourceFG.value;
        this.cef_emission_Json[_factor_value_key] = this.value.getValuesJson();
        this.cef_emission_Json['referenceData'] = this.referenceData.referenceDataFG.value;

        this.formData.append('emission', JSON.stringify(this.cef_emission_Json));
        this.formData.append('sourceFile', this.detail.source.file);

        return this.formData;
    }

    createCEFFactor() {
        this.customFactorController.createFactor(this.currentOrgID, this.getFormData())
            .subscribe((res) => {
                /* TODO_PN add this error case when name already exists */
                // if (res['result'] == globalConstant['HTTP_ERROR']) {
                    //     this.detail.detailFG.get('name').setErrors({ alreadyExists: true });
                    // this.toastrService.openToast(res['title'], res['message'], res['result']);
                //     return;
                // } else 
                this.router.navigate([this.redirectUrl]);
            },
                error => {
                    console.log('error in createCEFFactor() -', error);
                });
    }

    createCEFVersion() {
        this.customFactorVersionController.createVersion(this.currentOrgID, this.factorID, this.getFormData())
            .subscribe((res) => {
                /* TODO_PN add this error case when name already exists */

                // if (res['result'] == globalConstant['HTTP_ERROR']) {
                //     this.detail.detailFG.get('versionName').setErrors({ nameAlreadyExists: true });
                //     return;
                // } else 
                this.router.navigate([this.redirectUrl]);
            },
                error => {
                    console.log('error in createCEFVersion() -', error);
                });
    }

    updateCEFVersion() {
        this.customFactorVersionController.updateVersion(this.currentOrgID, this.factorID, this.versionID, this.getFormData())
            .subscribe((res) => {
                /* TODO_PN add this error case when name already exists */
                
                // if (res['result'] == globalConstant['HTTP_ERROR']) {
                    //     this.detail.detailFG.get('versionName').setErrors({ nameAlreadyExists: true });
                    // this.toastrService.openToast(res['title'], res['message'], res['result']);
                //     return;
                // } else 
                this.router.navigate([this.redirectUrl]);
            },
                error => {
                    console.log('error in createCEFVersion() -', error);
                });
    }

    // getSelectedCalculationApproach(): any{
    //  let selectedCalculationApproach = this.detail?.selectedCalculationApproach;
    // //  this.valueOutlet.
    // //     return this.detail?.selectedCalculationApproach;

    // }

}
