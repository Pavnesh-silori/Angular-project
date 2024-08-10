import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { isEqual } from 'lodash';

import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
import { ScheduleReportTypeEnum } from '../../../enum/schedule-report.enum';

import { ConsumptionParameterM } from '../../../model/parameter.model';
import { ScheduleReport, ScheduleReportI } from '../../../model/schedule-report.model';

import { ScheduleReportController } from '../../../controller/schedule-report.controller';

import { ParameterService } from '../../../service/parameter.service';
import { ScheduleReportService } from '../../../service/schedule-report.service';

import { EntityComponent } from '../../dropdown/entity/entity.component';
import { ScheduleReportConfigurationComponent } from '../_shared/configuration/configuration.component';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, FormErrorEnum, TSCCommonService, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonTooltipEnum } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-breakup',
    templateUrl: './breakup.component.html',
    styles: [
    ]
})
export class ScheduleReportBreakupComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    DropdownTypeEnum = DropdownTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ApplicationKeyID = ApplicationKeyID;

    orgID: any;
    applicationKeyID: any;
    consumptionParamM: any;

    scheduleBreakupReportFG: FormGroup;
    modifiedFG: any;
    scheduleReportID: any;

    action: string;
    pageTitle: string;
    isEqual: boolean = true;
    initialObject: any;

    scheduleReportI = new ScheduleReport();

    @ViewChild('entityInput') entityInput: EntityComponent;
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

        this.scheduleBreakupReportFGInit();
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
            this.pageTitle = `Schedule ${applicationName} Breakup Report`;
        } else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled ${applicationName} Breakup Report`;
        }
    }

    scheduleBreakupReportFGInit() {
        this.scheduleBreakupReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.BREAKUP_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [],
                entityID: [[], Validators.required],
                sourceConsumer: this.formBuilder.group({
                    type: ['SOURCE', Validators.required],
                    keyID: []
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
    }

    async getConsumptionParameter() {
        const consumptionParamM = <ConsumptionParameterM>await this.parameterService.getConsumptionParameter(this.orgID);

        this.consumptionParamM = consumptionParamM.consumptionParameter;
    }

    entityInpChange() {
        let entityID = this.entityInput.multipleEntityFC.value;
        this.scheduleBreakupReportFG.get('reportConfig').get('entityID').patchValue(entityID);
    }

    patchSchedulerConfigInput() {
        this.scheduleBreakupReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value)
    }

    getValidFormData() {
        this.patchSchedulerConfigInput();

        let entityID = this.tscCommonService.removeSelectAllID(this.scheduleBreakupReportFG.get('reportConfig').get('entityID').value);
        this.scheduleBreakupReportFG.get('reportConfig').get('entityID').patchValue(entityID);

        let userID = this.tscCommonService.removeSelectAllID(this.scheduleBreakupReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleBreakupReportFG.get('schedulerConfig').get('userID').patchValue(userID);

        let paramsArray = [
            {
                name: this.scheduleBreakupReportFG.get('reportConfig').get('paramMetric').value,
                dsAgg: 'sum',
                agg: 'sum'
            }
        ]

        const reportConfigFG = this.scheduleBreakupReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleBreakupReportFG.get('schedulerConfig').value;
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

        if (this.scheduleBreakupReportFG.invalid) {
            console.log('Invalid form:', this.scheduleBreakupReportFG.value);
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
        this.scheduleBreakupReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });

        this.entityInput.multipleEntityFC.patchValue(scheduleReportI.reportConfig.entityID);
        this.scheduleBreakupReportFG.get('reportConfig').get('paramMetric').patchValue(scheduleReportI.reportConfig.paramMetric[0]);
        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);

        this.initialObject = {
            breakupReportConfig: this.scheduleBreakupReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };

        this.isValidUpdateForm();
    }

    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });

        this.scheduleBreakupReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }

    checkEquality() {
        const currentValues = {
            breakupReportConfig: this.scheduleBreakupReportFG.value,
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
