
import { Injectable } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

import { Moment } from 'moment';
import * as moment from 'moment-timezone';

import { DateFormatEnum, DateTimeIntervalEnum } from '../enum/date.enum';
import { MONTH_CONSTANT } from '../constant/month.constant';

// tsc-library
import { StorageService } from '@library/storage-service';
import { Organization, OrganizationM, OrganizationService } from '@library/organization-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class DateService {

    organizationM = new Organization();

    constructor(
        private storageService: StorageService,
        private organizationSerive: OrganizationService
    ) { }

    takeFocusAway(duration: string) {
        const fieldElement = document.getElementById(duration);

        if (fieldElement) {
            fieldElement.classList.remove('mat-focused');

            if (fieldElement.classList.contains('mat-form-field-invalid')) {
                fieldElement.classList.remove('mat-form-field-should-float');
            } else {
                fieldElement.classList.add('mat-form-field-should-float');
            }
        }
    }

    openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }

    handleDateInput(normalizedDate: Moment, datepicker: MatDatepicker<Moment>, format: string) {
        datepicker.close();
        return moment(normalizedDate).format(format);
    }

    yearSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();
        let duration = moment(normalizedYear).format("YYYY");
        return duration;
    }

    monthSelectedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();
        let duration = moment(normalizedMonthAndYear).format("YYYY-MM");
        return duration;
    }

    dailySelectedHandler(selectedDate: Moment) {
        let duration = moment(selectedDate).format("YYYY-MM-DD");
        return duration;
    }

    formatDate(selectedDate: string, format: DateFormatEnum) {
        const date = new Date(selectedDate);
        return moment(date).format(format);
    }

    convertUtcToTimeZone(utcTimeString: string, targetTimeZone: string, format: string) {
        const utcDate = moment(utcTimeString);
        let convertedTimeZone = utcDate.tz(targetTimeZone).format(format);
        return convertedTimeZone;
    }

    getRelativeTimeAgoLabel(dateTime: string, timezone: string): string {
        return dateTime ? moment.tz(dateTime, timezone).fromNow() : COMMON_CONSTANT.HYPHEN;
    }

    getStartDateTime(selectedRange) {
        let startTime: string;

        const timezone = this.storageService.getStorage('timezone');

        switch (selectedRange) {
            case DateTimeIntervalEnum.CURRENT_HOUR:
                startTime = moment().startOf('hour').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_24_HRS:
                startTime = moment().subtract(24, 'hours').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.YESTERDAY:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_DAY:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_WEEK:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('week').add(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_7_DAYS:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_MONTH:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_30_DAYS:
                startTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_12_MONTHS:
                startTime = moment().subtract(1, 'year').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_12th_MONTH:
                startTime = moment().subtract(1, 'year').startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_YEAR:
                startTime = moment().set({ month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }).tz(timezone).format();
                break;
            default:
                startTime = null;
        }

        return startTime;
    }

    getEndDateTime(selectedRange) {
        let endTime: string;

        const timezone = this.storageService.getStorage('timezone');

        switch (selectedRange) {
            case DateTimeIntervalEnum.CURRENT_TIME:
                endTime = moment().tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_DAY:
                endTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_DAY:
                endTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'days').startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_WEEK:
                endTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'week').startOf('week').add(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_MONTH:
                endTime = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'months').startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_YEAR:
                endTime = moment().startOf('year').tz(timezone).format();
                break;
            default:
                endTime = null;
        }
        return endTime;
    }

    async getReportingPeriodList(orgID, endYearLength) {
        this.organizationM = <OrganizationM>await this.organizationSerive.getOrganizationByID(orgID);
        let reportingPeriodsList = [];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const startMonth = this.getMonthIndex(this.organizationM.fiscalStartMonth);
        let endMonth = (startMonth + 11) % 12;

        for (let year = currentYear; year >= currentYear - endYearLength; year--) {
            let startYear = year;
            let endYear;
            if (startMonth == 0) {
                endYear = startYear;
            } else {
                endYear = startYear + 1;

            }
            let startDate = new Date(startYear, startMonth);
            let endDate = new Date(endYear, endMonth + 1, 0); 

            let startMonthLabel = startDate.toLocaleString('default', { month: 'short' });
            let endMonthLabel = endDate.toLocaleString('default', { month: 'short' });

            let period = {
                name: `${startMonthLabel} ${startYear} - ${endMonthLabel} ${endYear}`,
                startDate: moment(startDate).format("YYYY-MM-DD"),
                endDate: moment(endDate).format("YYYY-MM-DD")
            };
            reportingPeriodsList.push(period);
        }
        return reportingPeriodsList;
    }

    getMonthIndex(month: string): number {
        return MONTH_CONSTANT.indexOf(month);
    }

    getCurrentYear() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }
}