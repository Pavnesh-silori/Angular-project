import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { isEqual } from 'lodash';

import { ScheduleReportTypeEnum } from '../../../enum/schedule-report.enum';

import { ConsumptionParameterM } from '../../../model/parameter.model';
import { ScheduleReport, ScheduleReportI } from '../../../model/schedule-report.model';

import { ScheduleReportController } from '../../../controller/schedule-report.controller';

import { SourceService } from '../../../service/source.service';
import { ParameterService } from '../../../service/parameter.service';
import { ScheduleReportService } from '../../../service/schedule-report.service';

import { ScheduleReportConfigurationComponent } from '../_shared/configuration/configuration.component';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, FormErrorEnum, TSCCommonService, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonTooltipEnum, Static, StaticI } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-consumption',
    templateUrl: './consumption.component.html',
    styles: [
    ]
})
export class ScheduleReportConsumptionComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ApplicationKeyID = ApplicationKeyID;

    orgID: any;
    applicationKeyID: any;
    consumptionParamM: any;
    sourceConsumerType = [new Static()];

    scheduleConsumptionReportFG: FormGroup;
    modifiedFG: any;
    scheduleReportID: any;

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
        private sourceService: SourceService,
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

        this.scheduleConsumptionReportFGInit();
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

        if (this.scheduleConsumptionReportFG.get('reportConfig').get('sourceConsumer.type').value == 'SOURCE') {
            this.getSourceConsumerType('source');
        } else {
            this.getSourceConsumerType('load');
        }
    }

    setPageTitle() {
        const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'Water' : 'Energy';

        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule ${applicationName} Consumption Report`;
        } else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Consumption Report`;
        }
    }

    scheduleConsumptionReportFGInit() {
        this.scheduleConsumptionReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.CONSUMPTION_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[]],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: [, Validators.required]
                }),
                paramMetric: [, Validators.required],
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

        this.scheduleConsumptionReportFG.get('reportConfig').get('sourceConsumer.type').valueChanges.subscribe((value) => {
            if (value == 'SOURCE') {
                this.getSourceConsumerType('source');
            } else if (value == 'CONSUMER') {
                this.getSourceConsumerType('load');
            }
        });
    }

    async getSourceConsumerType(sourceConsumerType) {
        const requestData = {
            type: sourceConsumerType
        };

        this.sourceConsumerType = <StaticI[]>await this.sourceService.getSourceConsumerType(this.orgID, requestData);
    }

    async getConsumptionParameter() {
        const consumptionParamM = <ConsumptionParameterM>await this.parameterService.getConsumptionParameter(this.orgID);

        this.consumptionParamM = consumptionParamM.consumptionParameter;
    }

    patchSchedulerConfigInput() {
        this.scheduleConsumptionReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value)
    }

    getValidFormData() {
        this.patchSchedulerConfigInput();

        let userID = this.tscCommonService.removeSelectAllID(this.scheduleConsumptionReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleConsumptionReportFG.get('schedulerConfig').get('userID').patchValue(userID);

        let paramsArray = [
            {
                name: this.scheduleConsumptionReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ]

        const reportConfigFG = this.scheduleConsumptionReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleConsumptionReportFG.get('schedulerConfig').value;
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

        if (this.scheduleConsumptionReportFG.invalid) {
            console.log('Invalid form:', this.scheduleConsumptionReportFG.value);
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

        this.scheduleConsumptionReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });

        this.scheduleConsumptionReportFG.get('reportConfig').get('paramMetric').patchValue(scheduleReportI.reportConfig.paramMetric[0]);
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);

        this.initialObject = {
            consumptionReportConfig: this.scheduleConsumptionReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };

        this.isValidUpdateForm();
    }

    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });

        this.scheduleConsumptionReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }

    checkEquality() {
        const currentValues = {
            consumptionReportConfig: this.scheduleConsumptionReportFG.value,
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
