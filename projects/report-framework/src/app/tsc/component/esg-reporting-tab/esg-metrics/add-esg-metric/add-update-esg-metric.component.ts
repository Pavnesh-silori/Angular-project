import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StandardI } from '@report-framework/model/standard.model';

import { CustomFrameworkController } from '@report-framework/controller/custom-framework.controller';

import { CustomFrameworkService } from '@report-framework/service/custom-framework.service';

// tsc-library
import { ButtonLabelEnum, ButtonTooltipEnum, DialogResponseEnum, FormAction, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// / tsc-library

@Component({
    selector: 'app-add-esg-metric',
    templateUrl: './add-update-esg-metric.component.html',
    styles: [
    ]
})
export class AddUpdateEsgMetricComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    ButtonLabelEnum = ButtonLabelEnum
    FormAction = FormAction;

    currentOrgID: any;
    rootOrgID: any;

    formDataFG: FormGroup;
    removeFormDataFG: FormGroup;

    customFrameworkList: any[];

    action: any;
    metricList: any[];
    metricID: number = null;
    type: string = null;
    numberOfMetric: number = null;
    frameworkList: any[] = [];

    customFrameworkSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<AddUpdateEsgMetricComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
        private customFrameworkController: CustomFrameworkController,
        private customFrameworkService: CustomFrameworkService,
        private toastrService: ToastrService,
        storageService: StorageService,

    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.rootOrgID = storageService.getStorage('rootOrgID');

        dialogRef.disableClose = true;
        this.action = data['action'];
        this.metricList = data['allEsgMetricSelect'];
        this.metricID = data['metricID'];
        this.type = data['type'];
        this.frameworkList = data['frameworkList'];
    }

    ngOnInit(): void {
        if (this.action == FormAction.CREATE) {
            this.numberOfMetric = this.metricList.length;
            this.formInit();
            this.getCustomeFramework();
        } else {
            this.removeFormInit();

            // ngx mat select search
            this.customFrameworkSearchUtil.entityArr = this.frameworkList;
            this.customFrameworkSearchUtil.createSubscription();
        }
    }

    formInit() {
        this.formDataFG = this.formBuilder.group({
            framework: [, [Validators.required]],
            metric: [this.metricList],
        });
    }

    removeFormInit() {
        this.removeFormDataFG = this.formBuilder.group({
            framework: [, [Validators.required]],
            metricID: this.metricID,
            type: this.type
        });
    }

    async getCustomeFramework() {
        this.customFrameworkList = <StandardI[]>await this.customFrameworkService.getCustomFrameworkList(this.rootOrgID);

        // ngx mat select search
        this.customFrameworkSearchUtil.entityArr = this.customFrameworkList;
        this.customFrameworkSearchUtil.createSubscription();
    }

    submit() {
        if (this.action == FormAction.CREATE) {
            this.create();
        }else {
            this.update();
        }
    }

    create() {
        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.customFrameworkController.customFrameworkAddMetric(this.rootOrgID, this.formDataFG.value).subscribe(res => {
            this.dialogRef.close(DialogResponseEnum.SUCCESS);
        }, error => {
            console.log('Error in create  mapped framework', error);
        });
    }

    update() {
        if (this.removeFormDataFG.invalid) {
            this.removeFormDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.customFrameworkController.customFrameworkRemoveMetric(this.rootOrgID, this.removeFormDataFG.value).subscribe(res => {
            this.dialogRef.close(DialogResponseEnum.SUCCESS);
        }, error => {
            console.log('Error in update mapped framework', error);
        });
    }

    public createErrorHandling = (control: string, error: string) => {
        return this.formDataFG.controls[control].hasError(error);
    }

    public updateErrorHandling = (control: string, error: string) => {
        return this.removeFormDataFG.controls[control].hasError(error);
    }

}
