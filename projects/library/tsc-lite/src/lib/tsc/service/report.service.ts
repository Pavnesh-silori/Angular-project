import { Inject, Injectable } from "@angular/core";

import { HttpClient, HttpResponse } from "@angular/common/http";

import * as moment from 'moment';

import { ReportErrorEnum } from "../enum/error.enum";
import { Alert, AlertM } from "../model/alert.model";

import { AlertService } from "./alert.service";

// tsc-library
import { COMMON_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum } from "@library/tsc-common";
import { DateService } from "@library/date";
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class ReportService {

    reportAlertObj: AlertM = new Alert();

    constructor(
        private http: HttpClient,
        private dateService: DateService,
        private alertService: AlertService,
        @Inject('environment') private environment: any
    ) { }

    extractTimestamp(dataInp) {
        if (!dataInp) {
            return [];
        }

        const allTimestamp = dataInp.reduce((timestamps, dataValues) => {
            if (dataValues && dataValues.data) {
                dataValues.data.forEach(entry => {
                    if (entry && entry.date) {
                        timestamps.add(entry.date);
                    }
                });
            }
            return timestamps;
        }, new Set<string>());

        return Array.from(allTimestamp).sort();
    }

    populateTable(timestamp, dataInp, format): any[] {
        return timestamp.map((time, index) => ({
            index: index + 1,
            time: this.dateService.formatDate(time, format),
            data: dataInp.map(aggregation => {
                const matchingEntry = aggregation.data.find(entry => entry.date == time);
                return matchingEntry ? matchingEntry.value : COMMON_CONSTANT.HYPHEN;
            })
        }));
    }

    async downloadReport(orgID, requestData) {
        const url = `${this.environment.TSC_COMMON_API_URL}public/organizations/${orgID}/report`;

        try {
            const response: HttpResponse<Blob> = await this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise();

            if (response && response.body) {
                const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                const downloadLink = document.createElement('a');
                const currentDate = moment().format('DD MMM YYYY HH:mm');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }
        } catch (error) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        }
    }

    async downloadConsumptionReport(orgID, requestData) {
        const url = `${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/meter-report`;

        try {
            const response: HttpResponse<Blob> = await this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise();

            if (response && response.body) {
                const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                const downloadLink = document.createElement('a');
                const currentDate = moment().format('DD MMM YYYY HH:mm');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            } else {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
            }
        } catch (error) {
            this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
        }
    }

}