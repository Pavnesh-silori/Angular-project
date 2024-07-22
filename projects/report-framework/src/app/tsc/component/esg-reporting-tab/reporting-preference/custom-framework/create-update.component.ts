import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { environment } from 'src/environments/environment';

import { LookupCodeEnum } from '@report-framework/enum/lookup-code.enum';

import { CustomFrameworkController } from '@report-framework/controller/custom-framework.controller';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, DialogResponseEnum, FormAction, InvalidForm, LookupService, MATERIAL_CONSTANT, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
// / tsc-library

const reporting_framework_lookup_url = environment.REPORTING_FRAMEWORK_API_URL;
@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: [
    ]
})
export class CustomFrameworkCreateUpdateComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormAction = FormAction;

    currentOrgID: any;
    rootOrgID: any;

    formDataFG: FormGroup;
    intervalList: any[] = [];

    action: string = null;
    id: number = null;
    framework: any;
    categoryID: number = null;

    constructor(
        private dialogRef: MatDialogRef<CustomFrameworkCreateUpdateComponent>,
        private formBuilder: FormBuilder,
        private customFrameworkController: CustomFrameworkController,
        storageService: StorageService,
        private lookupService: LookupService,
        private toastrService: ToastrService,
        public tSCCommonService: TSCCommonService,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.rootOrgID = storageService.getStorage('rootOrgID')
        dialogRef.disableClose = true;
        this.action = this.data['action'];
        this.id = this.data['id'];
        this.categoryID = this.data['categoryID'];
    }

    ngOnInit(): void {
        this.formInit();
        this.getIntervalList();

        if (this.id != null) {
            this.getByID();
        }
    }

    formInit() {
        this.formDataFG = this.formBuilder.group({
            name: [, [Validators.required]],
            reportingIntervalKeyID: [, [Validators.required]],
            categoryID: this.categoryID
        });
    }

    patchForm() {
        this.formDataFG.patchValue({
            name: this.framework.name,
            reportingIntervalKeyID: this.framework.reportingIntervalKeyID,
            categoryID: this.framework.categoryID
        });
    }

    async getIntervalList() {
        let lookup = [
            {
                lookupCode: [LookupCodeEnum.REPORT_INTERVAL],
                lookupKey: []
            }
        ]
        this.intervalList = await this.lookupService.getLookup(reporting_framework_lookup_url, lookup);
    }

    getByID() {
        this.customFrameworkController.getByID(this.rootOrgID,this.id).subscribe(res => {
            this.framework = res;
            this.patchForm();
        }, error => {
            console.log("Error in get by id", error);
        });
    }

    submit() {
        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.action == FormAction.CREATE) {
            this.customFrameworkController.createCustomFramework(this.rootOrgID, this.formDataFG.value).subscribe(res => {
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('Error in create custom framework', error);
            });
        }
        if (this.action == FormAction.UPDATE) {
            this.customFrameworkController.updateCustomFramework(this.rootOrgID, this.id, this.formDataFG.value).subscribe(res => {
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('Error in update custom framework', error);
            });
        }
    }
}
