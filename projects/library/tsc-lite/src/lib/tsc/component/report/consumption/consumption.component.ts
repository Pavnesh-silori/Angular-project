import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReportErrorEnum } from '../../../enum/error.enum';

import { ConsumptionParameterM } from '../../../model/parameter.model';
import { Alert, AlertM } from '../../../model/alert.model';
import { MeterData, MeterDataI } from '../../../model/aggregate-data.model';

import { SourceService } from '../../../service/source.service';
import { ParameterService } from '../../../service/parameter.service';
import { AggregateDataService } from '../../../service/aggregate-data.service';
import { AlertService } from '../../../service/alert.service';
import { ReportService } from '../../../service/report.service';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, FileTypeEnum, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum, Static, StaticI } from '@library/tsc-common';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ApplicationKeyID } from '@library/application-service';
// /tsc-library/

@Component({
    selector: 'lib-consumption',
    templateUrl: './consumption.component.html',
    styles: [
    ]
})
export class ConsumptionReportComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;
    DateTypeEnum = DateTypeEnum;
    FileTypeEnum = FileTypeEnum;
    FormErrorEnum = FormErrorEnum;

    pageTitle: string;

    orgID: any;
    timezone: string;
    applicationKeyID: string;

    reportData = [new MeterData()];
    showAlert: boolean = false;
    showLoader: boolean = false;

    sourceConsumerType = [new Static()];
    consumptionParamM: any;
    reportAlertObj: AlertM = new Alert();

    reportFG: FormGroup;

    @ViewChild('monthDateInput') monthDateInput: DateInputComponent;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private toastService: ToastrService,
        private alertService: AlertService,
        private sourceService: SourceService,
        private parameterService: ParameterService,
        private aggregateDataService: AggregateDataService,
        private reportService: ReportService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');

        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.pageTitle = "Energy Consumption Report";
        } else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.pageTitle = "Water Consumption Report";
        }

        this.reportFGInit();

        if (this.reportFG.get('sourceConsumer.type').value == 'SOURCE') {
            this.getSourceConsumerType('source');
        } else {
            this.getSourceConsumerType('load');
        }

        this.getConsumptionParameter();
    }

    reportFGInit() {
        this.reportFG = this.formBuilder.group({
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            sourceConsumer: this.formBuilder.group({
                type: ['SOURCE', Validators.required],
                keyID: [, Validators.required]
            }),
            params: this.formBuilder.group({
                name: ['', Validators.required],
                dsAgg: ['sum', Validators.required],
                agg: ['sum', Validators.required]
            }),
            interval: [, Validators.required]
        });

        this.reportFG.get('sourceConsumer.type').valueChanges.subscribe(async (value) => {
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

    dateInpChange() {
        let startDate = this.monthDateInput.startDateFC.value;
        let endDate = this.monthDateInput.endDateFC.value;

        this.reportFG.get('startDate').patchValue(startDate);
        this.reportFG.get('endDate').patchValue(endDate);
    }

    async getConsumptionParameter() {
        const consumptionParamM = <ConsumptionParameterM>await this.parameterService.getConsumptionParameter(this.orgID);

        this.consumptionParamM = consumptionParamM.consumptionParameter;
    }

    reportSubmit() {
        const formValue = this.reportFG.value;
        const modifiedValue = {
            ...formValue,
            params: [formValue.params]
        };

        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            this.showLoader = true;
            this.alertService.resetAlertProperties(this.reportAlertObj);
            this.viewReport(modifiedValue);
        }
    }

    async viewReport(modifiedValue) {
        try {
            const result = <MeterDataI[]>await this.aggregateDataService.getMeterAggregateDataForReport(this.orgID, modifiedValue);

            if (result && result.length > 0 && result[0]['date']) {
                this.reportData = result;
            } else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }

        } catch (error) {
            console.error("Error in viewReport()", error);
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        } finally {
            this.showLoader = false;
        }
    }

    async downloadReport(format: string) {
        const formValue = this.reportFG.value;
        const modifiedValue = {
            ...formValue,
            params: [formValue.params]
        };

        this.alertService.resetAlertProperties(this.reportAlertObj);

        if (this.reportFG.invalid) {
            console.log('Invalid form:', this.reportFG.value);
            this.reportFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = {};

            requestData['request'] = modifiedValue;
            requestData['reportName'] = 'Consumption Report';
            requestData['reportFormat'] = format;

            await this.reportService.downloadConsumptionReport(this.orgID, requestData);

        } catch (error) {
            console.error("Error in downloadConsumptionReport()", error);
        } finally {
            this.showLoader = false;
        }
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

    scheduleReport(value) {
        if (value) {
            const applicationName = this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID ? 'water' : 'energy';
            this.router.navigate([`schedule-report/${applicationName}-consumption`]);
        }
    }

}