import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';

import { Alert, AlertM } from '../../../../model/alert.model';
import { EntityWithChildren, EntityWithChildrenM } from '../../../../model/entity.model';

import { DashboardErrorEnum, ReportErrorEnum } from '../../../../enum/error.enum';

import { AggregationDurationComponent } from '../../../dropdown/aggregation-duration/aggregation-duration.component';
import { EntityTypeComponent } from '../../../dropdown/entity-type/entity-type.component';
import { EntityDialogComponent } from '../../../_shared/dialog/entity/entity.component';

import { EntityController } from '../../../../controller/entity.controller';
import { AggregateDataController } from '../../../../controller/aggregate-data.controller';

import { AlertService } from '../../../../service/alert.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
import { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateTypeEnum } from '@library/date';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { BasicAreaLineBarChart, ChartTitle, ChartTypeEnum, ChartViewStateEnum } from '@library/echart';
import { FormControl, Validators } from '@angular/forms';
// /tsc-library/

@Component({
    selector: 'lib-by-entity',
    templateUrl: './by-entity.component.html',
    styleUrls: ['./by-entity.component.scss']
})
export class ByEntityComponent implements OnInit {

    materialConstant = MATERIAL_CONSTANT;
    commonConstant = COMMON_CONSTANT;
    customRangeConstant = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    dateFormatEnum = DateFormatEnum;
    dateInputTypeEnum = DateInputTypeEnum;
    dateTypeEnum = DateTypeEnum;
    buttonLabelEnum = ButtonLabelEnum;

    orgID: any;
    timezone: string;
    startDate: string;
    endDate: string;
    aggDuration: string;
    entityType: string;
    entityID: any;
    selectEntityType: boolean = false;
    isViewData: boolean = false;
    showAlert: boolean = false;
    showLoader: boolean = false;

    entityByEntityTypeM = [new EntityWithChildren()];
    alertObj: AlertM = new Alert();

    entityFC: FormControl = new FormControl([], [Validators.required]);

    chartType: string = ChartTypeEnum.BASIC_LINE_CHART;
    viewStateFlag: string = ChartViewStateEnum.LOADING;
    chartTitle = new ChartTitle();
    chartData: BasicAreaLineBarChart[] = [];

    @ViewChild('customDateInput') customDateInput: DateInputComponent;
    @ViewChild('aggDurationInput') aggDurationInput: AggregationDurationComponent;
    @ViewChild('entityTypeInput') entityTypeInput: EntityTypeComponent;

    constructor(
        private storageService: StorageService,
        private alertService: AlertService,
        private toastService: ToastrService,
        private entityController: EntityController,
        private aggregateDataController: AggregateDataController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.timezone = this.storageService.getStorage('timezone');
    }

    dateInpChange() {
        this.startDate = this.customDateInput.startDateFC.value;
        this.endDate = this.customDateInput.endDateFC.value;
    }

    aggDurationInpChange() {
        this.aggDuration = this.aggDurationInput.aggDurationFC.value;
    }

    entityTypeInpChange() {
        this.entityType = this.entityTypeInput.entityTypeFC.value;

        this.entityFC.reset([]);
        this.getEntitiesByEntityType(this.entityType);
    }

    getEntitiesByEntityType(entityType) {
        let requestBody = {};
        requestBody['entityType'] = [entityType];

        this.entityController.getEntitiesByEntityType(this.orgID, requestBody)
            .subscribe((res: EntityWithChildrenM) => {
                this.entityByEntityTypeM = [res];
            },
                error => {
                    console.log('error in getEntitiesByEntityType() - ', error);
                });
    }

    openEntityDialog() {
        if (this.entityType) {
            const dialog = this.dialog.open(EntityDialogComponent,
                {
                    data: {
                        entityType: this.entityTypeInput.entityTypeFC.value,
                        entityObject: this.entityByEntityTypeM
                    },
                    width: '50vw',
                    height: '100%',
                    position: { right: '-2px', top: '0px' },
                });
            dialog.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.entityID) {
                    this.entityID = dialogRes.entityID;
                    this.entityFC.patchValue(this.entityID)
                }
            })
        } else {
            this.selectEntityType = true;
        }
    }

    viewEntityParameterData() {
        this.chartData = [];
        this.isViewData = true;
        this.alertService.resetAlertProperties(this.alertObj);

        if (this.isValidInputField()) {
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } 

        if (this.startDate == this.endDate) {
            this.alertService.setAlertProperties(this.alertObj, ReportErrorEnum.INVALID_DATE_LABEL, ReportErrorEnum.INVALID_DATE_MESSAGE, MessageAlertTypeEnum.INFO, MessageAlertIconEnum.INFO_ICON);
            return;
        }

        this.showLoader = true;

        try {
            const requestData = this.createDataRequest();

            this.aggregateDataController.getEntityParameterData(this.orgID, requestData)
                .subscribe((entityParamRes: any) => {

                    let entityParameterData = entityParamRes?.paramData;
                    this.showLoader = false;

                    if (entityParameterData && entityParameterData.every(item => item.data.length == 0 )) {
                        this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.DATA_NOT_FOUND_LABEL, DashboardErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                    } else {
                        this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                        this.chartData = [];

                        entityParameterData.forEach((res) => {
                            if (res.data.length > 0) {

                                const newChartdata: BasicAreaLineBarChart = new BasicAreaLineBarChart();

                                newChartdata.metaData = res.data.map(item => ({
                                    name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                                    value: item.value
                                }));
                                newChartdata.unit = {
                                    name: '',
                                    code: res.unit,
                                };
                                newChartdata.markLine = [
                                    {
                                        label: 'Avg',
                                        value: res.avgValue,
                                        color: '#e83e8c'
                                    },
                                    {
                                        label: 'Max',
                                        value: res.maxValue,
                                        color: '#e83e8c'
                                    }
                                ]
                                newChartdata.yAxisLabel = res.label + ' (' + res.unit + ')';
                                newChartdata.yAxisNameGap = 25;
                                newChartdata.showDataView = true;
                                newChartdata.showMagicType = true;
                                newChartdata.showRestore = true;
                                newChartdata.showDownloadImage = true;
                                newChartdata.chartTitle = {
                                    name: res.label,
                                    color: 'gray'
                                }

                                this.chartData.push(newChartdata);
                            }
                        });
                    }

                },
                    error => {
                        console.log('error in viewParameterData() - ', error);
                        this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
                        throw error;
                    });

        } catch (error) {

            console.error(`Error in viewEntityParameterData()`, error);
            this.alertService.setAlertProperties(this.alertObj, DashboardErrorEnum.INVALID_ERROR_LABEL, DashboardErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);

        } finally {
            this.showLoader = false;
        }
    }

    isValidInputField() {
        const controls = [
            this.customDateInput.startDateFC,
            this.aggDurationInput.aggDurationFC,
            this.entityTypeInput.entityTypeFC,
            this.entityFC
        ];

        controls.forEach(control => control.markAsTouched());
        return controls.some(control => control.invalid);
    }

    createDataRequest() {
        const requestData = {};

        requestData['startTime'] = this.startDate;
        requestData['endTime'] = this.endDate;
        requestData['interval'] = this.aggDuration;
        requestData['entityID'] = [this.entityID];
        requestData['entityType'] = [this.entityTypeInput.entityTypeFC.value];

        return requestData;
    }

}
