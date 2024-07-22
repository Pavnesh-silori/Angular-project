import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from "lodash";

import { environment } from 'src/environments/environment';

import { EsgActivityType } from '@report-framework/model/esg-activity-type.model';
import { ESG_CONSTANT } from '@report-framework/constant/esg.constant';
import { EsgTypeKeyIDEnum } from '@report-framework/enum/esg-type.enum';
import { LookupCodeEnum } from '@report-framework/enum/lookup-code.enum';

import { EscMetricController } from '@report-framework/controller/esg-metric.controller';
import { EsgActivityTypeController } from '@report-framework/controller/esg-activity-type.controller';

import { EsgActivityTypeService } from '@report-framework/service/esc-activity-type.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, DialogResponseEnum, FormAction, InvalidForm, LookupService, LookupValueM, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { ActivityService } from '@carbon/service/activity.service';
import { UnitTypeService } from '@report-framework/service/unit-type.service';
import { StandardI } from '@report-framework/model/standard.model';
// /tsc-library

const reporting_framework_lookup_url = environment.REPORTING_FRAMEWORK_API_URL;

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: [
    ]
})
export class CustomEsgMetricCreateUpdateComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ESG_CONSTANT = ESG_CONSTANT;
    EsgTypeKeyIDEnum = EsgTypeKeyIDEnum;
    FormAction = FormAction

    formDataFG: FormGroup;
    customEsgMetric: any;

    currentOrgID: any;
    rootOrgID: any;

    action: string;
    id: number;

    isEqual: boolean;
    initialObject: any;

    activityTypeList = [new EsgActivityType()];
    consolidationLogicList: any[] = [];
    esgTypeName: string = null;

    unitTypeList: any[] = [];

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    activityTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    unitTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private esgActivityTypeController: EsgActivityTypeController,
        private escMetricController: EscMetricController,
        private esgActivityTypeService: EsgActivityTypeService,
        private activityService: ActivityService,
        private unitTypeService: UnitTypeService,
        private toastrService: ToastrService,
        storageService: StorageService,
        public tSCCommonService: TSCCommonService,
        private lookupService: LookupService,
        private dialogRef: MatDialogRef<CustomEsgMetricCreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        dialogRef.disableClose = true;
        this.action = this.data['action'];
        this.id = this.data['id'];

        this.currentOrgID = parseInt(storageService.getStorage('currentOrgID'));
        this.rootOrgID = parseInt(storageService.getStorage('rootOrgID'));

    }

    ngOnInit(): void {
        this.formGroupInit();
        this.getEsgActivityType();
        this.getConsolidationLogicList();
        this.getUnitType();

        if (this.action == FormAction.UPDATE) {
            this.getByID();
        }
    }

    formGroupInit() {
        this.formDataFG = this.formBuilder.group({
            activityStdID: [, [Validators.required]],
            esgTypeKeyID: [],
            metricName: [, [Validators.required]],
            control: [, [Validators.required]],
            unitTypeID: [],
            consolidationLogicKeyID: [],
        });
    }

    pathcFormGroup() {
        this.formDataFG.patchValue({
            activityStdID: this.customEsgMetric.activityStdID,
            esgTypeKeyID: this.customEsgMetric.esgTypeKeyID,
            metricName: this.customEsgMetric.metricName,
            control: this.customEsgMetric.control,
            unitTypeID: this.customEsgMetric.unitType?.id,
            consolidationLogicKeyID: this.customEsgMetric?.consolidationLogicKeyID,
        });
        this.esgTypeName = this.customEsgMetric.esgTypeName;
    }

    getByID() {
        this.escMetricController.getCustomEsgMetricByID(this.rootOrgID, this.id).subscribe(res => {
            this.customEsgMetric = res;
            this.pathcFormGroup();
        }, error => {
            console.log("error in getCustomEsgMetricByID", error);
        })
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

        this.formDataFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.formDataFG.value));
    }

    async getEsgActivityType() {
        let activityList = await this.activityService.getAllActivityNew();
        this.activityTypeList = activityList.filter(a => a.types[0].keyID == ACTIVITY_FORM_TYPE_KEYID_ENUM.ESG_FORM);

        // ngx mat select search
        this.activityTypeSearchUtil.entityArr = this.activityTypeList;
        this.activityTypeSearchUtil.createSubscription();
    }

    getMetricType(activityTypeID) {
        const activityType = this.activityTypeList.find(item => item.id === activityTypeID);
        if (activityType) {
            this.formDataFG.patchValue({
                esgTypeKeyID: activityType['esgType']['keyID']
            })
            this.esgTypeName = activityType['esgType']['name'];
        }
    }

    async getUnitType() {
        this.unitTypeList = <StandardI[]>await this.unitTypeService.getUnitTypeList();

        // ngx mat select search
        this.unitTypeSearchUtil.entityArr = this.unitTypeList;
        this.unitTypeSearchUtil.createSubscription();
    }

    addValidator(value) {
        if (value == 'number') {
            this.formDataFG.get('unitTypeID').updateValueAndValidity();
            this.formDataFG.get('consolidationLogicKeyID').addValidators(Validators.required);
        } else {
            this.formDataFG.get('unitTypeID').clearValidators();
            this.formDataFG.get('consolidationLogicKeyID').clearValidators();
        }

        this.formDataFG.get('unitTypeID').addValidators(Validators.required);
        this.formDataFG.get('consolidationLogicKeyID').updateValueAndValidity();

    }

    async getConsolidationLogicList() {
        let lookup = [
            {
                lookupCode: [LookupCodeEnum.CONSOLIDATION_LOGIC],
                lookupKey: []
            }
        ]
        this.consolidationLogicList = <LookupValueM[]>await this.lookupService.getLookup(reporting_framework_lookup_url, lookup);
    }

    submit() {
        console.log('this.formDataFG --', this.formDataFG);
        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.action == FormAction.CREATE) {
            this.escMetricController.createCustomEsgMetric(this.rootOrgID, this.formDataFG.value).subscribe(res => {
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('Error in create custom framework', error);
            });
        }
        if (this.action == FormAction.UPDATE) {
            this.escMetricController.updateCustomEsgMetric(this.rootOrgID, this.id, this.formDataFG.value).subscribe(res => {
                this.dialogRef.close(DialogResponseEnum.SUCCESS);
            }, error => {
                console.log('Error in update custom framework', error);
            });
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.formDataFG.controls[control].hasError(error);
    }
}
