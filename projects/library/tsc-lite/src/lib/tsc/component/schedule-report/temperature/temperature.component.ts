import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { isEqual } from 'lodash';

import { Entity, EntityM } from '../../../model/entity.model';

import { ScheduleReportTypeEnum } from '../../../enum/schedule-report.enum';
import { ScheduleReport, ScheduleReportI } from '../../../model/schedule-report.model';

import { ScheduleReportController } from '../../../controller/schedule-report.controller';

import { ScheduleReportService } from '../../../service/schedule-report.service';

import { ScheduleReportConfigurationComponent } from '../_shared/configuration/configuration.component';

import { EntityService } from '../../../service/entity.service';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, FormErrorEnum, TSCCommonService, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonTooltipEnum } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'lib-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.scss']
})
export class ScheduleReportTemperatureComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;

    entityM = [new Entity()];
    entityType: any[] = [];
    allEntityID: any[] = [];
    totalEntityCount: number = 0;
    entities: any[] = [];

    scheduleTemperatureReportFG: FormGroup;
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
        private entityService: EntityService,
        private scheduleReportService: ScheduleReportService,

        // tsc-library
        private storageService: StorageService,
        public tscCommonService: TSCCommonService,
        private toastrService: ToastrService,
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getEntitiesByParamMetric();
        this.scheduleTemperatureReportFGInit();

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
        if (this.action == FormAction.CREATE) {
            this.pageTitle = `Schedule Temperature Report`;
        } else if (this.action == FormAction.UPDATE) {
            this.pageTitle = `Update Scheduled Temperature Report`;
        }
    }

    scheduleTemperatureReportFGInit() {
        this.scheduleTemperatureReportFG = this.formBuilder.group({
            reportConfig: this.formBuilder.group({
                reportType: [ScheduleReportTypeEnum.TEMPERATURE_REPORT, Validators.required],
                deviceID: [[]],
                entityType: [, Validators.required],
                entityID: [[], Validators.required],
                sourceConsumer: this.formBuilder.group({
                    type: [],
                    keyID: []
                }),
                paramMetric: [['engTemperature'], Validators.required],
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

    async getEntitiesByParamMetric() {
        this.entityM = <EntityM[]>await this.entityService.getEntitiesByParamMetric(this.orgID, "engTemperature");
        this.getDistictEntityType();
    }

    getDistictEntityType() {
        const distinctTypes = Array.from(new Set(this.entityM.map(item => item.type)));
        this.entityType = distinctTypes.map(value => ({ value }));
    }

    async entityTypeChange(entityType) {
        this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').reset();
        this.allEntityID = [];

        this.entities = await this.getEntitiesByType(entityType);
        this.totalEntityCount = this.entities.length;
        this.entities.forEach(entity => this.allEntityID.push(entity['id']));

        if (this.action == FormAction.UPDATE && this.scheduleTemperatureReportFG) {
            this.scheduleTemperatureReportFG.patchValue({
                'reportConfig.entityID': this.allEntityID
            });
        }
    }

    async getEntitiesByType(type) {
        const filteredEntities = this.entityM.filter(entity => entity.type == type);
        return filteredEntities;
    }

    selectAllEntities() {
        if (!this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value.includes(-1)) {
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').reset([]);
            return;
        }
        this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').setValue([-1, ...this.allEntityID]);
    }

    selectedEntity() {
        const selected = this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value;

        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(selected);
        } else if (this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value.length == this.totalEntityCount) {
            this.allEntityID.splice(0, 0, -1);
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(this.allEntityID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(filteredSelected);
        }
    }

    patchSchedulerConfigInput() {
        this.scheduleTemperatureReportFG.get('schedulerConfig').patchValue(this.schedulerConfigInput.scheduleReportFG.value)
    }

    getValidFormData() {
        this.patchSchedulerConfigInput();

        let entityID = this.tscCommonService.removeSelectAllID(this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').value);
        this.scheduleTemperatureReportFG.get('reportConfig').get('entityID').patchValue(entityID);

        let userID = this.tscCommonService.removeSelectAllID(this.scheduleTemperatureReportFG.get('schedulerConfig').get('userID').value);
        this.scheduleTemperatureReportFG.get('schedulerConfig').get('userID').patchValue(userID);

        let paramMetrics = this.scheduleTemperatureReportFG.get('reportConfig').get('paramMetric').value;
        let paramsArray = paramMetrics.map(paramName => ({
            name: paramName,
            dsAgg: 'avg',
            agg: 'avg'
        }));

        const reportConfigFG = this.scheduleTemperatureReportFG.get('reportConfig').value;
        const schedulerConfigFG = this.scheduleTemperatureReportFG.get('schedulerConfig').value;
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

        if (this.scheduleTemperatureReportFG.invalid) {
            console.log('Invalid form:', this.scheduleTemperatureReportFG.value);
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

    async patchScheduleReport(scheduleReportI: ScheduleReportI) {
        await this.getEntitiesByParamMetric();
        await this.entityTypeChange(this.scheduleReportI.reportConfig.entityType);

        this.scheduleTemperatureReportFG.patchValue({
            reportConfig: scheduleReportI.reportConfig,
            schedulerConfig: scheduleReportI.schedulerConfig
        });

        this.schedulerConfigInput.scheduleReportFG.patchValue(scheduleReportI.schedulerConfig);

        this.initialObject = {
            temperatureReportConfig: this.scheduleTemperatureReportFG.value,
            schedulerConfig: this.schedulerConfigInput.scheduleReportFG.value
        };

        this.isValidUpdateForm();
    }

    isValidUpdateForm() {
        this.schedulerConfigInput.scheduleReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });

        this.scheduleTemperatureReportFG.valueChanges.subscribe(() => {
            this.checkEquality();
        });
    }

    checkEquality() {
        const currentValues = {
            temperatureReportConfig: this.scheduleTemperatureReportFG.value,
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