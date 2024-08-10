import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { isEqual } from 'lodash';

import { ScheduleReportTypeEnum } from '../../../enum/schedule-report.enum';

import { ConsumptionParameterM } from '../../../model/parameter.model';
import { ScheduleReport, ScheduleReportI } from '../../../model/schedule-report.model';

import { ScheduleReportController } from '../../../controller/schedule-report.controller';

import { ParameterService } from '../../../service/parameter.service';
import { ScheduleReportService } from '../../../service/schedule-report.service';

import { ScheduleReportConfigurationComponent } from '../_shared/configuration/configuration.component';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, FormErrorEnum, TSCCommonService, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonTooltipEnum } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-sourcing',
    templateUrl: './sourcing.component.html',
    styles: [
    ]
})
export class ScheduleReportSourcingComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;
    applicationKeyID: any;
    consumptionParamM: any;

    scheduleSourcingReportFG: FormGroup;
    modifiedFG: any;
    scheduleReportID: any;

    allParameterID: any[] = [];
    totalParameterCount: number = 0;

    action: string;
    pageTitle: string;
    isEqual: boolean = true;
    initialObject: any;

    scheduleReportI = new ScheduleReport();

    @ViewChild('schedulerConfigInput') schedulerConfigInput: ScheduleReportConfigurationComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private scheduleReportController: ScheduleReportController,
        private parameterService: ParameterService,
        private scheduleReportService: ScheduleReportService,

        // tsc-library
        private storageService: StorageService,
        public tscCommonService: TSCCommonService,
        private toastrService: ToastrService,
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        this.scheduleSourcingReportFGInit();
        this.getConsumptionParameter();

        this.activatedRoute.data.subscribe(data => {
            this.action = data.action;
            this.setPageTitle();
        });

        this.activatedRoute.params.subscribe(params => {
            if (this.action == FormAction.UPDATE) {
                this.scheduleReportID = params.scheduleReportID;

                this.getScheduleReportByID(this.scheduleReportID);
            }
        });
    }

    setPageTitle() {
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';

        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule ${applicationName} Sourcing Report`;
        } else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Sourcing  Report`;
        }
    }

    scheduleSourcingReportFGInit() {
        this.scheduleSourcingReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.SOURCING_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE'],
                    keyID: []
                }),
                paramMetric: [[], Validators.required],
            }),
            schedulerConfig: this.formBuilder.group({
                name: [, Validators.required],
                dataInterval: [, Validators.required],
                frequency: [, Validators.required],
                userChoice: [, Validators.required],
                userID: [[], Validators.required],
                otherUserEmail: [[]],
                status: [, Validators.required],
                reportFormat: [, Validators.required],
            })
        });
    }

    async getConsumptionParameter() {
        const consumptionParamM = <ConsumptionParameterM>await this.parameterService.getConsumptionParameter(this.orgID);
        this.consumptionParamM = consumptionParamM.consumptionParameter;

        this.totalParameterCount = this.consumptionParamM.length;
        this.consumptionParamM.forEach(parameter => this.allParameterID.push(parameter['paramMetric']));
    }

    selectAllParameters() {
        if (!this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value.includes(-1)) {
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').reset([]);
            return;
        }
        this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').setValue([-1, ...this.allParameterID]);
    }

    selectedParameters() {
        const selected = this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value;

        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').patchValue(selected);
        } else if (this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value.length == this.totalParameterCount) {
            this.allParameterID.splice(0, 0, -1);
            this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').patchValue(this.allParameterID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleSourcingReportFG.get('paramMetric').patchValue(filteredSelected);
        }
    }

    patchSchedulerConfigInput() {
        this.scheduleSourcingReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value)
    }

    getValidFormData() {
        this.patchSchedulerConfigInput();

        let userID = this.tscCommonService.removeSelectAllID(this.scheduleSourcingReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleSourcingReportFG.get('schedulerConfig').get('userID').patchValue(userID);

        let paramMetrics = this.tscCommonService.removeSelectAllID(this.scheduleSourcingReportFG.get('reportConfig').get('paramMetric').value);
        let paramsArray = paramMetrics.map(paramName => ({
            name: paramName,
            dsAgg: 'sum',
            agg: 'sum'
        }));

        const reportConfigFG = this.scheduleSourcingReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleSourcingReportFG.get('schedulerConfig').value;
        const { paramMetric, ...reportConfigWithoutParamMetric } = reportConfigFG;

        this.modifiedFG = {
            reportConfig: {
                ...reportConfigWithoutParamMetric,
                params: paramsArray
            },
            schedulerConfig: {
                ...schedulerConfigFG
            }
        };
    }

    scheduleReportSubmit() {
        this.patchSchedulerConfigInput();

        if (this.schedulerConfigInput.scheduleReportFG.invalid) {
            this.schedulerConfigInput.scheduleReportFG.markAllAsTouched();
        }

        if (this.scheduleSourcingReportFG.invalid) {
            console.log('Invalid form:', this.scheduleSourcingReportFG.value);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            this.getValidFormData();

            if (this.action == FormAction.CREATE) {
                this.createScheduleReport();
            } else if (this.action == FormAction.UPDATE) {
                this.updateScheduleReport();
            }
        }
    }

    createScheduleReport() {
        this.scheduleReportController.createScheduleReport(this.orgID, this.modifiedFG).subscribe((res: ResponseM) => {

            this.router.navigate([`schedule-report/page`]);

        }, error => {
            console.log('error in createScheduleReport -', error);
        });
    }

    async getScheduleReportByID(scheduleReportID) {
        this.scheduleReportI = <ScheduleReportI>await this.scheduleReportService.getScheduleReportByID(this.orgID, scheduleReportID);

        this.patchScheduleReport(this.scheduleReportI);
    }

    patchScheduleReport(scheduleReportI: ScheduleReportI) {
        this.scheduleSourcingReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });

        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);

        this.initialObject = {
            sourcingReportConfig: this.scheduleSourcingReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };

        this.isValidUpdateForm();
    }

    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });

        this.scheduleSourcingReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }

    checkEquality() {
        const currentValues = {
            sourcingReportConfig: this.scheduleSourcingReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };
        this.isEqual = isEqual(this.initialObject, currentValues);
    }

    updateScheduleReport() {
        this.scheduleReportController.updateScheduleReport(this.orgID, this.scheduleReportID, this.modifiedFG).subscribe((res: ResponseM) => {

            this.tscCommonService.back();

        }, error => {
            console.log('error in updateScheduleReport -', error);
        })
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

}