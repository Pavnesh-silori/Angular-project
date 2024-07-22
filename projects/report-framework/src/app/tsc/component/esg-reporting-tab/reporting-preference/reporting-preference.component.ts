import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash-es';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';

import { CustomFrameworkCreateUpdateComponent } from './custom-framework/create-update.component';

import { LookupCodeEnum } from '@report-framework/enum/lookup-code.enum';
import { TypeEnum } from '@report-framework/enum/esg-type.enum';
import { ReportingFrameworkCategoryEnum, ReportingFrameworkKeyIDEnum } from '@report-framework/enum/reporting-framework.enum';
import { ReportingFramework } from '@report-framework/model/reporting-framework.model';
import { ReportPreference, ReportPreferenceM } from '@report-framework/model/reporting-preference.model';
import { Sector } from '@report-framework/model/sector.model';

import { ReportFrameworkController } from '@report-framework/controller/report-framework.controller';
import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';
import { CustomFrameworkController } from '@report-framework/controller/custom-framework.controller';

import { ReportingPreferenceService } from '@report-framework/service/reporting-preference.service';
import { SectorService } from '@report-framework/service/sector.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogOneComponent, DialogOneEnum, DialogResponseEnum, FormAction, InfoDialogComponent, InvalidForm, LookupService, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, ResponseM } from '@library/tsc-common';
// /tsc-library

const reporting_framework_lookup_url = environment.REPORTING_FRAMEWORK_API_URL;

@Component({
    selector: 'app-reporting-preference',
    templateUrl: './reporting-preference.component.html',
    styleUrls: ['./reporting-preference.component.scss']
})
export class ReportingPreferenceComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ReportingFrameworkKeyIDEnum = ReportingFrameworkKeyIDEnum;
    FormAction = FormAction;

    ReportingFrameworkCategoryEnum = ReportingFrameworkCategoryEnum;

    faEllipsisV = faEllipsisV;

    rootOrgID: any;

    reportingFrameworkList = [new ReportingFramework()];
    reportingPreferenceM = new ReportPreference();

    formDataFG: FormGroup;

    isEqual: boolean;
    initialObject: any;

    isUpdate: boolean = false;

    sectorList = [new Sector()];
    intervalList: any[] = [];

    submit: boolean = false;

    frameworkInfo: any[] = [
        {
            "keyID": ReportingFrameworkKeyIDEnum.BRSR,
            "info": 'Indian Framework for assurance and ESG disclosures for value chain'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.SASB,
            "info": 'Global framework for disclosing relevant sustainability risk and opportunities to investors through industry-specific standards.'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.CDP,
            "info": 'Carbon Disclosure Project, a global disclosure system for managing environmenta impacts, particularly related to carbon emissions and climate change.'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.IFRS_S1,
            "info": 'International Financial Reporting Standards on Sustainability-related Financial Information, providing guidelines for sustainability-related financial disclosures.'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.IFRS_S2,
            "info": 'International Financial Reporting Standards on Climate-related Disclosures, focusing on disclosures related to climate-related risks and opportunities.'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.GRI,
            "info": 'Global Reporting Initiative, a widely used international standards organization for sustainability reporting.'
        },
        {
            "keyID": ReportingFrameworkKeyIDEnum.CSRD,
            "info": 'Corporate Sustainability Reporting Directive, an EU regulation requiring large companies to disclose information on how they operate and manage social and environmental challenges.'
        }
    ];

    searchList: any[] = [];
    categoryList: any[] = [];

    disabledControlsForRow = ['sectorID', 'reportingIntervalKeyID'];
    linkedRecordFlag: boolean = false;

    deleteCustomFrameworkInfo = {
        title: 'You can`t delete this custom framework',
        body: `<p> In your organization, you have an ongoing report for this custom framework. You can't delete this custom framework. First, you need to delete the ongoing report, then you can perform the delete action here.</p>`
    }

    // @ViewChild('card1') card1: ElementRef;
    @ViewChildren('card1') card1: QueryList<ElementRef>;
    @ViewChildren('card2') card2: QueryList<ElementRef>;

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private router: Router,
        private reportFrameworkController: ReportFrameworkController,
        private reportingPreferenceController: ReportingPreferenceController,
        private customFrameworkController: CustomFrameworkController,
        private reportingPreferenceService: ReportingPreferenceService,
        private sectorService: SectorService,
        private stroageService: StorageService,
        private lookupService: LookupService,
        private toastrService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.stroageService.getStorage('rootOrgID');

        this.FormDataInit();
        this.formControlInitialization();

    }

    ngAfterViewChecked() {
        if (this.card1.toArray().length > 0) {
            let card = this.card1.toArray()[0];
            if (document.getElementById('card2')) {
                let card2 = document.getElementById('card2');
                card2.style.height = `${card.nativeElement.offsetHeight + 16}px`;
            }
        }
    }

    FormDataInit() {
        this.formDataFG = this.formBuilder.group({
            reportingPreference: this.formBuilder.array([]),
        });
    }

    get preferenceDataArray(): FormArray {
        return this.formDataFG.get('reportingPreference') as FormArray;
    }

    formArrayInit() {
        this.preferenceDataArray.controls = [];
        this.searchList = [];
        this.reportingFrameworkList.map(framework => {
            let sectorList = this.sectorList.filter(sector => sector.reportFrameworkID == framework.id);
            let formGroup = this.getFormGroup(framework, sectorList, null);

            this.disabledFramewrok(framework, formGroup);

            if (framework.keyID != ReportingFrameworkKeyIDEnum.CDP) {
                this.disabledControlsForRow.forEach(controlName => {
                    formGroup.get(controlName).disable();
                });
            }
            this.preferenceDataArray.push(formGroup);
            this.createSearchList(sectorList);
        });
    }

    // create controls for formgroup
    getFormGroup(framework, sectorList, preference) {
        return this.formBuilder.group({
            reportingFrameworkKeyID: [framework != null ? framework.keyID : preference.reportingFramework.keyID],
            reportingFrameworkName: [framework != null ? framework.name : preference.reportingFramework.name],
            reportingFrameworkID: [framework != null ? framework.id : preference.reportingFramework.id],
            reportingFrameworkCategoryName: [framework != null ? framework.categoryName : preference.reportingFramework.categoryName],
            reportingFrameworkCategoryKeyID: [framework != null ? framework.categoryKeyID : preference.reportingFramework.categoryKeyID],
            reportingFrameworkLogoUrl: [framework != null ? framework.logo : preference.reportingFramework.logo],
            type: [framework != null ? framework.type : preference.reportingFramework.type],
            sectorList: [sectorList],
            isEnabled: [preference != null ? preference.isEnabled : false],
            sectorID: [preference != null ? preference.sectorID : null],
            reportingIntervalKeyID: [preference != null ? preference.reportingIntervalKeyID : null],
            intervalList: [this.intervalList],
            esgMetricCount: [preference != null ? preference.esgMetricCount : null]
        });
    }

    patchFormGroup() {
        this.preferenceDataArray.controls = [];
        this.searchList = [];
        let preference = cloneDeep(this.reportingPreferenceM);
        this.reportingFrameworkList.map(framework => {

            let pref = preference.reportingPreference.find(p => p.reportingFramework.keyID == framework.keyID);
            let index = preference.reportingPreference.indexOf(pref);
            if (index != -1) {
                preference.reportingPreference.splice(index, 1);
            }

            let sectorList = this.sectorList.filter(sector => sector.reportFrameworkID == framework.id);
            let formGroup = this.getFormGroup(framework, sectorList, pref);
            this.disabledFramewrok(framework, formGroup);
            if (framework.keyID != ReportingFrameworkKeyIDEnum.CDP) {
                if (!formGroup.controls['isEnabled'].value) {
                    this.disabledControlsForRow.forEach(controlName => {
                        formGroup.get(controlName).disable();
                    });
                }
            }
            this.preferenceDataArray.push(formGroup);

            this.createSearchList(sectorList);
        });

        if (preference.reportingPreference.length > 0) {
            preference.reportingPreference.forEach(pref => {
                let formGroup = this.getFormGroup(null, null, pref);
                this.preferenceDataArray.push(formGroup);
                this.createSearchList([]);
            });
        }

        // this.initialObject = this.formDataFG.value;
        // this.isEqual = true;
    }

    createSearchList(sectorList) {
        let sectorSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
        sectorSearchUtil.entityArr = sectorList;
        sectorSearchUtil.createSubscription();
        this.searchList.push(sectorSearchUtil);
    }

    // for disable specfic framework
    disabledFramewrok(framework, formGroup) {
        if (
            framework.keyID == ReportingFrameworkKeyIDEnum.CDP) {
            formGroup.disable();
        }
    }

    // disable controls
    disableControlsInRow(index: number, disabledControlsForRow) {
        const row = this.preferenceDataArray.at(index) as FormGroup;

        disabledControlsForRow.forEach(controlName => {
            row.get(controlName).reset(null);
            row.get(controlName).disable();
            row.get(controlName).clearValidators();
            row.get(controlName).updateValueAndValidity();
        });
    }

    // enable controls
    enableDisableRowControl(event, index) {
        const row = this.preferenceDataArray.at(index) as FormGroup;
        if (event.checked) {
            this.disabledControlsForRow.forEach(controlName => {
                row.get(controlName).enable();
                row.get(controlName).addValidators([Validators.required]);
                row.get(controlName).updateValueAndValidity();
            });

            if (this.clearSectorValidatorAndShowHyphen(row.get('reportingFrameworkKeyID').value)) {
                row.get('sectorID').disable();
                row.get('sectorID').clearValidators();
                row.get('sectorID').updateValueAndValidity();
            }

            if (row.get('reportingFrameworkKeyID').value == ReportingFrameworkKeyIDEnum.IFRS_S2) {
                this.getIfrsFormGroup(true);
            }
        } else {
            this.disableControlsInRow(index, this.disabledControlsForRow);

            if (row.get('reportingFrameworkKeyID').value == ReportingFrameworkKeyIDEnum.IFRS_S2) {
                this.getIfrsFormGroup(false);
            }
        }
    }

    // clear some framework validatiors
    clearSectorValidatorAndShowHyphen(formControlValue) {
        if (formControlValue == ReportingFrameworkKeyIDEnum.BRSR
            || formControlValue == ReportingFrameworkKeyIDEnum.GRI
            || formControlValue == ReportingFrameworkKeyIDEnum.IFRS_S1
            || formControlValue == ReportingFrameworkKeyIDEnum.CSRD
            || formControlValue == null) {
            return true;
        } else {
            return false;
        }
    }

    showSectorField(formControlValue) {
        if (formControlValue != ReportingFrameworkKeyIDEnum.BRSR
            && formControlValue != ReportingFrameworkKeyIDEnum.GRI
            && formControlValue != ReportingFrameworkKeyIDEnum.IFRS_S1
            && formControlValue != ReportingFrameworkKeyIDEnum.CSRD
            && formControlValue != null) {
            return true;
        } else {
            return false;
        }
    }

    // IFRS S1 and S2 dependancy
    getIfrsFormGroup(validator) {
        const formGroup = this.preferenceDataArray.controls.find((control) => control.value.reportingFrameworkKeyID === ReportingFrameworkKeyIDEnum.IFRS_S1) as FormGroup;

        if (validator) {
            formGroup.get('isEnabled').patchValue(true);
            this.disabledControlsForRow.forEach(controlName => {
                formGroup.get(controlName).enable();
                formGroup.get(controlName).addValidators([Validators.required]);
                formGroup.get(controlName).updateValueAndValidity();
            });

            formGroup.get('sectorID').clearValidators();
            formGroup.get('sectorID').updateValueAndValidity();

        } else {
            formGroup.get('isEnabled').reset(null);
            formGroup.get('isEnabled').clearValidators();
            formGroup.get('isEnabled').updateValueAndValidity();

            this.disabledControlsForRow.forEach(controlName => {
                formGroup.get(controlName).reset(null);
                formGroup.get(controlName).disable();
                formGroup.get(controlName).clearValidators();
                formGroup.get(controlName).updateValueAndValidity();
            });
        }
    }

    formControlInitialization() {
        let lookup = [
            {
                lookupCode: [LookupCodeEnum.REPORT_INTERVAL],
                lookupKey: []
            }
        ]
        forkJoin([this.reportFrameworkController.getAllReportingFramework(),
        this.sectorService.getAllSectors(),
        this.lookupService.getLookup(reporting_framework_lookup_url, lookup),
        this.reportFrameworkController.getAllReportingFrameworkCategory()])
            .subscribe(
                ([reportingFrameworkM, sectorM, intervalM, categoryM]) => {
                    this.reportingFrameworkList = reportingFrameworkM;
                    this.sectorList = sectorM;
                    this.intervalList = intervalM;
                    this.categoryList = categoryM;
                    this.getReportingPreference();
                },
                error => {
                    console.error('error in formInitialization -', error);
                }
            );
    }

    showInfo(keyID): string {
        let framework = this.frameworkInfo.find(info => info.keyID == keyID);
        if (framework) {
            return framework.info;
        } else {
            return 'Custom Reporting allows you to create tailored ESG reports according to your needs. This feature offers flexibility and efficiency in managing your sustainability data';
        }
    }

    async getReportingPreference() {
        this.reportingPreferenceM = <ReportPreferenceM>await this.reportingPreferenceService.getReportingPreferenceByOrgID(this.rootOrgID);
        if (this.reportingPreferenceM.reportingPreference.length > 0) {
            this.isUpdate = true;
            this.patchFormGroup();
        } else {
            this.formArrayInit();
        }
    }

    createReportingPreference() {
        if (this.formDataFG.invalid || this.preferenceDataArray.controls.every((formGroup: FormArray) => (formGroup.get('isEnabled').value) == false)) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.reportingPreferenceController.createReportingPreference(this.rootOrgID, this.getValueJson()).subscribe((response: ResponseM) => {
            this.getReportingPreference();
        }, error => {
            console.log('error in createReportingPreference() -', error);
        });
    }

    validateReportingPreference() {
        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.confirmationDialog();
    }

    updateReportingPreference() {
        this.reportingPreferenceController.updateReportingPreference(this.rootOrgID, this.getValueJson()).subscribe((response: ResponseM) => {
            this.getReportingPreference();
        }, error => {
            console.log('error in updateReportingPreference() -', error);
        });
    }

    onSubmit() {
        if (this.isUpdate) {
            this.validateReportingPreference();
        } else {
            this.createReportingPreference();
        }
    }

    getValueJson() {
        let formGroupRawValue = cloneDeep(this.formDataFG.getRawValue());

        let value_json = formGroupRawValue.reportingPreference
            .map(({
                reportingFrameworkID,
                isEnabled,
                sectorID,
                reportingIntervalKeyID,
                type
            }) => ({
                reportingFrameworkID,
                isEnabled,
                sectorID,
                reportingIntervalKeyID,
                type
            }));

        formGroupRawValue['reportingPreference'] = value_json;
        return formGroupRawValue;

    }

    confirmationDialog() {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'warning',
                header: 'Update reporting preference',
                body: 'Updates will only appear in new reports. To change the settings for ongoing reports, you need to delete or lock them first.?',
                buttonOne: 'Cancel',
                buttonTwo: 'Update'
            }
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.updateReportingPreference();
                }
            });
    }

    createUpdatepdateCustomFramework = (action, id, categoryID) => {
        const dialogRef = this.dialog.open(CustomFrameworkCreateUpdateComponent, {

            minWidth: '650px',
            maxWidth: '600px',
            data: {
                action: action,
                id: id,
                categoryID: categoryID
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result == DialogResponseEnum.SUCCESS) {
                this.getReportingPreference();
            }
            else {
                dialogRef.close()
            }
        });
    }

    deleteConfirmation(id) {
        let dialogRef;
        this.customFrameworkController.getLinkedRecordFlag(this.rootOrgID, id).subscribe(res => {
            this.linkedRecordFlag = res['isRecordExists'];
        });

        if (!this.linkedRecordFlag) {
            dialogRef = this.dialog.open(DialogOneComponent, {
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: 'Delete Custom Framework?',
                    body: `This Custom Framework will be deleted permanently and you won't be able to add data for this metric.
                    Are you sure you want to continue?`,
                    buttonOne: 'Close',
                    buttonTwo: 'Delete'
                },
                minWidth: '500px',
                maxWidth: '600px'
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res) {
                    this.deleteCustomFramework(id);
                }
            });
        } else {
            dialogRef = this.dialog.open(InfoDialogComponent,
                {
                    data: this.deleteCustomFrameworkInfo,
                    minWidth: '400px',
                    maxWidth: '500px',
                });
        }
    }

    deleteCustomFramework(id) {
        this.customFrameworkController.deleteCustomFramework(this.rootOrgID, id).subscribe((deleteRes: any) => {
            this.getReportingPreference();
        }, error => {
            console.log('Error in deleteConfig', error);
        });
    }

    routeESGMetricPage(frameworkType, frameworkID) {
        if (frameworkType == TypeEnum.STANDARD) {
            this.router.navigate(
                [`/reporting/tab/esg-metrics`], { queryParams: { stdFramework: frameworkID } });
        } else if (frameworkType == TypeEnum.CUSTOM) {
            this.router.navigate(
                [`/reporting/tab/esg-metrics`], { queryParams: { customFramework: frameworkID } });
        }
    }
}
