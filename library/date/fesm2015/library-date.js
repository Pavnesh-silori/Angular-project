import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from '@angular/forms';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import * as i8 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import * as i2$1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i4 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i1$1 from 'ngx-daterangepicker-material';
import { DaterangepickerDirective, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { __awaiter } from 'tslib';
import * as moment$1 from 'moment-timezone';
import * as i2 from '@library/organization-service';
import { Organization } from '@library/organization-service';
import { COMMON_CONSTANT, FormErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import * as i1 from '@library/storage-service';
import * as i2$2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';

class DateService2 {
    constructor() { }
}
DateService2.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService2, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DateService2.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService2, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService2, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class DateComponent {
    constructor() { }
    ngOnInit() {
    }
}
DateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateComponent, selector: "lib-date", ngImport: i0, template: `
    <p>
      date works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date',
                    template: `
    <p>
      date works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class DateModule {
}
DateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateModule, declarations: [DateComponent], exports: [DateComponent] });
DateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateComponent,
                    ],
                    imports: [],
                    exports: [
                        DateComponent
                    ]
                }]
        }] });

var FrequencyEnum;
(function (FrequencyEnum) {
    FrequencyEnum["DAILY"] = "DAILY";
    FrequencyEnum["MONTHLY"] = "MONTHLY";
    FrequencyEnum["YEARLY"] = "YEARLY";
    FrequencyEnum["CUSTOM"] = "CUSTOM";
})(FrequencyEnum || (FrequencyEnum = {}));

var DateInputTypeEnum;
(function (DateInputTypeEnum) {
    DateInputTypeEnum["DAY_INPUT"] = "DAY_INPUT";
    DateInputTypeEnum["MONTH_INPUT"] = "MONTH_INPUT";
    DateInputTypeEnum["YEAR_INPUT"] = "YEAR_INPUT";
    DateInputTypeEnum["CUSTOM_INPUT"] = "CUSTOM_INPUT";
})(DateInputTypeEnum || (DateInputTypeEnum = {}));
var DateTypeEnum;
(function (DateTypeEnum) {
    DateTypeEnum["INCLUSIVE"] = "INCLUSIVE";
    DateTypeEnum["EXCLUSIVE"] = "EXCLUSIVE";
})(DateTypeEnum || (DateTypeEnum = {}));
var DateFormatEnum;
(function (DateFormatEnum) {
    DateFormatEnum["DATE_TIME"] = "DD-MMM-YYYY HH:mm:ss";
    DateFormatEnum["DD_MMM_YYYY"] = "DD-MMM-YYYY";
    DateFormatEnum["YYYY_MM_DD"] = "YYYY-MM-DD";
    DateFormatEnum["MMM_YYYY"] = "MMM YYYY";
})(DateFormatEnum || (DateFormatEnum = {}));
var DateTimeIntervalEnum;
(function (DateTimeIntervalEnum) {
    DateTimeIntervalEnum["CURRENT_TIME"] = "CURRENT_TIME";
    DateTimeIntervalEnum["CURRENT_HOUR"] = "CURRENT_HOUR";
    DateTimeIntervalEnum["LAST_24_HRS"] = "LAST_24_HRS";
    DateTimeIntervalEnum["YESTERDAY"] = "YESTERDAY";
    DateTimeIntervalEnum["CURRENT_DAY"] = "CURRENT_DAY";
    DateTimeIntervalEnum["NEXT_DAY"] = "NEXT_DAY";
    DateTimeIntervalEnum["LAST_7_DAYS"] = "LAST_7_DAYS";
    DateTimeIntervalEnum["CURRENT_WEEK"] = "CURRENT_WEEK";
    DateTimeIntervalEnum["NEXT_WEEK"] = "NEXT_WEEK";
    DateTimeIntervalEnum["LAST_30_DAYS"] = "LAST_30_DAYS";
    DateTimeIntervalEnum["CURRENT_MONTH"] = "CURRENT_MONTH";
    DateTimeIntervalEnum["NEXT_MONTH"] = "NEXT_MONTH";
    DateTimeIntervalEnum["LAST_12th_MONTH"] = "LAST_12th_MONTH";
    DateTimeIntervalEnum["CURRENT_YEAR"] = "CURRENT_YEAR";
    DateTimeIntervalEnum["LAST_12_MONTHS"] = "LAST_12_MONTHS";
})(DateTimeIntervalEnum || (DateTimeIntervalEnum = {}));

const FREQUENCY_CONSTANT = [
    {
        name: 'Daily',
        keyID: 'DAILY'
    },
    {
        name: 'Monthly',
        keyID: 'MONTHLY'
    },
    {
        name: 'Yearly',
        keyID: 'YEARLY'
    },
    {
        name: 'Custom',
        keyID: 'CUSTOM'
    }
];

const MONTH_CONSTANT = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];

const DATE_CONSTANT = {
    TODAY_YYYY_MM_DD: moment(new Date()).format("YYYY-MM-DD"),
    CURRENT_YEAR: new Date().getFullYear(),
    MAX_DATE: new Date('9999-12-31'),
    MAX_DATE_YYYY_MM_DD: moment(new Date('9999-12-31')).format("YYYY-MM-DD"),
    MAX_DATE_YYYY_MMM_DD: moment(new Date('9999-12-31')).format("YYYY-MMM-DD"),
    TIME_LIST_24HRS: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
};

const CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE = {
    'Today': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), moment()],
    'Yesterday': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'Last 7 Days': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'Last 30 Days': [moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days'), moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
    'This Month': [moment().startOf('month'), moment().add(1, 'months').startOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().startOf('month')]
};

// /tsc-library/
class DateService {
    constructor(storageService, organizationSerive) {
        this.storageService = storageService;
        this.organizationSerive = organizationSerive;
        this.organizationM = new Organization();
    }
    takeFocusAway(duration) {
        const fieldElement = document.getElementById(duration);
        if (fieldElement) {
            fieldElement.classList.remove('mat-focused');
            if (fieldElement.classList.contains('mat-form-field-invalid')) {
                fieldElement.classList.remove('mat-form-field-should-float');
            }
            else {
                fieldElement.classList.add('mat-form-field-should-float');
            }
        }
    }
    openDatepickerOnClick(datepicker) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }
    handleDateInput(normalizedDate, datepicker, format) {
        datepicker.close();
        return moment$1(normalizedDate).format(format);
    }
    yearSelectedHandler(normalizedYear, datepicker) {
        datepicker.close();
        let duration = moment$1(normalizedYear).format("YYYY");
        return duration;
    }
    monthSelectedHandler(normalizedMonthAndYear, datepicker) {
        datepicker.close();
        let duration = moment$1(normalizedMonthAndYear).format("YYYY-MM");
        return duration;
    }
    dailySelectedHandler(selectedDate) {
        let duration = moment$1(selectedDate).format("YYYY-MM-DD");
        return duration;
    }
    formatDate(selectedDate, format) {
        const date = new Date(selectedDate);
        return moment$1(date).format(format);
    }
    convertUtcToTimeZone(utcTimeString, targetTimeZone, format) {
        const utcDate = moment$1(utcTimeString);
        let convertedTimeZone = utcDate.tz(targetTimeZone).format(format);
        return convertedTimeZone;
    }
    getRelativeTimeAgoLabel(dateTime, timezone) {
        return dateTime ? moment$1.tz(dateTime, timezone).fromNow() : COMMON_CONSTANT.HYPHEN;
    }
    getStartDateTime(selectedRange) {
        let startTime;
        const timezone = this.storageService.getStorage('timezone');
        switch (selectedRange) {
            case DateTimeIntervalEnum.CURRENT_HOUR:
                startTime = moment$1().startOf('hour').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_24_HRS:
                startTime = moment$1().subtract(24, 'hours').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.YESTERDAY:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_DAY:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_WEEK:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('week').add(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_7_DAYS:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_MONTH:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_30_DAYS:
                startTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_12_MONTHS:
                startTime = moment$1().subtract(1, 'year').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.LAST_12th_MONTH:
                startTime = moment$1().subtract(1, 'year').startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_YEAR:
                startTime = moment$1().set({ month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }).tz(timezone).format();
                break;
            default:
                startTime = null;
        }
        return startTime;
    }
    getEndDateTime(selectedRange) {
        let endTime;
        const timezone = this.storageService.getStorage('timezone');
        switch (selectedRange) {
            case DateTimeIntervalEnum.CURRENT_TIME:
                endTime = moment$1().tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_DAY:
                endTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_DAY:
                endTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'days').startOf('day').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_WEEK:
                endTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'week').startOf('week').add(1, 'days').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.NEXT_MONTH:
                endTime = moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'months').startOf('month').tz(timezone).format();
                break;
            case DateTimeIntervalEnum.CURRENT_YEAR:
                endTime = moment$1().startOf('year').tz(timezone).format();
                break;
            default:
                endTime = null;
        }
        return endTime;
    }
    getReportingPeriodList(orgID, endYearLength) {
        return __awaiter(this, void 0, void 0, function* () {
            this.organizationM = (yield this.organizationSerive.getOrganizationByID(orgID));
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
                }
                else {
                    endYear = startYear + 1;
                }
                let startDate = new Date(startYear, startMonth);
                let endDate = new Date(endYear, endMonth + 1, 0);
                let startMonthLabel = startDate.toLocaleString('default', { month: 'short' });
                let endMonthLabel = endDate.toLocaleString('default', { month: 'short' });
                let period = {
                    name: `${startMonthLabel} ${startYear} - ${endMonthLabel} ${endYear}`,
                    startDate: moment$1(startDate).format("YYYY-MM-DD"),
                    endDate: moment$1(endDate).format("YYYY-MM-DD")
                };
                reportingPeriodsList.push(period);
            }
            return reportingPeriodsList;
        });
    }
    getMonthIndex(month) {
        return MONTH_CONSTANT.indexOf(month);
    }
    getCurrentYear() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }
}
DateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService, deps: [{ token: i1.StorageService }, { token: i2.OrganizationService }], target: i0.ɵɵFactoryTarget.Injectable });
DateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.OrganizationService }]; } });

const DATE_YEAR_MONTH_FORMAT = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'DD-MMM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const MONTH_YEAR_FORMAT = {
    parse: {
        dateInput: 'MMM YYYY',
    },
    display: {
        dateInput: 'MMM YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const YEAR_FORMAT = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
class DateMonthYearFormatDirective {
    constructor() { }
}
DateMonthYearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DateMonthYearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: DATE_YEAR_MONTH_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appDateMonthYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: DATE_YEAR_MONTH_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class MonthYearFormatDirective {
    constructor() { }
}
MonthYearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthYearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MonthYearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: MonthYearFormatDirective, selector: "[appMonthYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MONTH_YEAR_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthYearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appMonthYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: MONTH_YEAR_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class YearFormatDirective {
    constructor() { }
}
YearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
YearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: YearFormatDirective, selector: "[appYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: YEAR_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: YEAR_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class DateMonthYearFormatModule {
}
DateMonthYearFormatModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateMonthYearFormatModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective], exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective] });
DateMonthYearFormatModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                    exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                }]
        }] });

class DateFilterComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.frequencyOptions = [];
        this.defaultSelectedFrequency = null;
        this.emitFilter = new EventEmitter();
        this.FrequencyEnum = FrequencyEnum;
        this.today = new Date();
        this.daterange = new FormControl();
        this.frequencyFC = new FormControl();
        this.durationFC = new FormControl();
        this.startDateFC = new FormControl();
        this.endDateFC = new FormControl();
    }
    ngOnInit() {
        this.frequencyFC.patchValue(this.defaultSelectedFrequency || FrequencyEnum.MONTHLY);
        this.frequencyOptions = this.frequencyOptions.length ? this.frequencyOptions : FREQUENCY_CONSTANT;
        this.frequencyChange();
    }
    frequencyChange() {
        let duration;
        let startDate;
        let endDate;
        switch (this.frequencyFC.value) {
            case FrequencyEnum.DAILY:
                duration = moment(this.today).format("YYYY-MM-DD");
                startDate = moment().startOf('day').utc().format();
                endDate = moment().endOf('day').utc().format();
                break;
            case FrequencyEnum.MONTHLY:
                duration = moment(this.today).utc().format("YYYY-MM");
                startDate = moment().startOf('month').utc().format();
                endDate = moment().endOf('month').utc().format();
                break;
            case FrequencyEnum.YEARLY:
                duration = moment(this.today).utc().format("YYYY");
                startDate = moment().startOf('year').utc().format();
                endDate = moment().endOf('year').utc().format();
                break;
            case FrequencyEnum.CUSTOM:
                console.log("frequency: ", this.frequencyFC.value);
                break;
            default:
                console.log('undefined case encountered!');
        }
        this.durationFC.patchValue(duration);
        if (this.frequencyFC.value != FrequencyEnum.CUSTOM) {
            this.daterange.patchValue('');
            this.startDateFC.patchValue(startDate);
            this.endDateFC.patchValue(endDate);
            this.emitFilter.emit();
        }
    }
    openDatepicker() {
        if (this.frequencyFC.value == FrequencyEnum.CUSTOM) {
            this.pickerDirective.open();
        }
    }
    openDatepickerOnClick(datepicker) {
        this.dateService.openDatepickerOnClick(datepicker);
    }
    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }
    dailyDateSelectedHandler(chosenDate) {
        let duration = this.dateService.dailySelectedHandler(chosenDate);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(chosenDate).startOf('day').utc().format());
        this.endDateFC.patchValue(moment(chosenDate).endOf('day').utc().format());
        this.emitFilter.emit();
    }
    monthlyDateSelectedHandler(normalizedMonthAndYear, datepicker) {
        let duration = this.dateService.monthSelectedHandler(normalizedMonthAndYear, datepicker);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(normalizedMonthAndYear).startOf('month').utc().format());
        this.endDateFC.patchValue(moment(normalizedMonthAndYear).endOf('month').utc().format());
        this.emitFilter.emit();
    }
    yearlyDateSelectedHandler(normalizedYear, datepicker) {
        let duration = this.dateService.yearSelectedHandler(normalizedYear, datepicker);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment(normalizedYear).startOf('year').utc().format());
        this.endDateFC.patchValue(moment(normalizedYear).endOf('year').utc().format());
        this.emitFilter.emit();
    }
    customDateRange(selectedValue) {
        if (this.frequencyFC.value == FrequencyEnum.CUSTOM) {
            this.startDateFC.patchValue(moment(selectedValue.startDate).utc().format());
            this.endDateFC.patchValue(moment(selectedValue.endDate).utc().format());
            this.durationFC.patchValue(this.endDateFC);
            this.emitFilter.emit();
        }
    }
}
DateFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterComponent, deps: [{ token: DateService }], target: i0.ɵɵFactoryTarget.Component });
DateFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterComponent, selector: "lib-date-filter", inputs: { frequencyOptions: "frequencyOptions", defaultSelectedFrequency: "defaultSelectedFrequency" }, outputs: { emitFilter: "emitFilter" }, viewQueries: [{ propertyName: "pickerDirective", first: true, predicate: DaterangepickerDirective, descendants: true }], ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyFC\" (change)=\"frequencyChange()\">\n    <mat-button-toggle *ngFor=\"let frequency of frequencyOptions\" value=\"{{ frequency.keyID }}\">\n        {{ frequency.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-form-field class=\"ms-3\" id=\"dailyField\" appDateMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.DAILY}\" (click)=\"openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(daily)\" (keydown.enter)=\"openDatepickerOnClick(daily)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationFC\" [max]=\"today\"\n        (dateInput)=\"dailyDateSelectedHandler($event.value)\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"takeFocusAway('dailyField')\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"monthlyField\" appMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.MONTHLY}\" (click)=\"openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(monthly)\" (keydown.enter)=\"openDatepickerOnClick(monthly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"durationFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n        (monthSelected)=\"monthlyDateSelectedHandler($event, monthly)\" (closed)=\"takeFocusAway('monthlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"yearlyField\" appYearFormat [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.YEARLY}\"\n    (click)=\"openDatepickerOnClick(yearly)\" (keydown.arrowdown)=\"openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"openDatepickerOnClick(yearly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"yearly\" [formControl]=\"durationFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"yearPicker\" #yearly startView=\"multi-year\"\n        (yearSelected)=\"yearlyDateSelectedHandler($event, yearly)\" (closed)=\"takeFocusAway('yearlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.CUSTOM}\">\n    <mat-label class=\"formLabel\"> Select date </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: 'DD-MMM-YYYY', customRangeLabel: 'Custom Range'}\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateRange(daterange.value)\" [readonly]=\"true\" />\n</mat-form-field>\n", styles: [".matBtnFilter mat-button-toggle.mat-button-toggle-checked{background-color:#e6e6e6!important}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:30px!important}.mat-button-toggle-group-appearance-standard{border-radius:20px!important}\n"], components: [{ type: i2$1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i2$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i2$1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$2.MatSuffix, selector: "[matSuffix]" }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i2$2.MatLabel, selector: "mat-label" }, { type: i1$1.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date-filter',
                    templateUrl: './date-filter.component.html',
                    styleUrls: ['./date-filter.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { frequencyOptions: [{
                type: Input
            }], defaultSelectedFrequency: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }], pickerDirective: [{
                type: ViewChild,
                args: [DaterangepickerDirective, { static: false }]
            }] } });

class DateFilterModule {
}
DateFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, declarations: [DateFilterComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule, i1$1.NgxDaterangepickerMd, DateMonthYearFormatModule], exports: [DateFilterComponent] });
DateFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonToggleModule,
            MatInputModule,
            MatNativeDateModule,
            MatDatepickerModule,
            NgxDaterangepickerMd.forRoot(),
            DateMonthYearFormatModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateFilterComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonToggleModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        NgxDaterangepickerMd.forRoot(),
                        DateMonthYearFormatModule
                    ],
                    exports: [
                        DateFilterComponent,
                    ]
                }]
        }] });

// /tsc-library/
class DateInputComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.dateTypeEnum = DateTypeEnum;
        this.formErrorEnum = FormErrorEnum;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.emitFilter = new EventEmitter();
        this.dateType = this.dateTypeEnum.INCLUSIVE;
        this.formFieldAppearance = '';
        this.label = '';
        this.cDRformat = 'YYYY-MM-DD';
        this.timezone = 'UTC';
        this.range = null;
        this.materialFieldWidth = false;
        this.isMandatoryField = false;
        this.showCdrRangeLabel = false;
        this.showRange = false;
        this.showDefaultDuration = false;
        this.showTimeInCDR = false;
        this.daterange = new FormControl();
        this.durationFC = new FormControl();
        this.startDateFC = new FormControl();
        this.endDateFC = new FormControl();
    }
    ngOnInit() {
        this.date = moment$1().tz(this.timezone).format();
    }
    ngOnChanges(changes) {
        if (changes.materialFormFieldAppearanceInp && this.materialFormFieldAppearanceInp) {
            this.formFieldAppearance = this.materialFormFieldAppearanceInp;
        }
        if (changes.materialFieldWidthInp && this.materialFieldWidthInp) {
            this.materialFieldWidth = this.materialFieldWidthInp;
        }
        if (changes.isMandatoryFieldInp && this.isMandatoryFieldInp) {
            this.isMandatoryField = this.isMandatoryFieldInp;
        }
        if (changes.labelInp && this.labelInp) {
            this.label = this.labelInp;
        }
        if (changes.cdrFormatInp && this.cdrFormatInp) {
            this.cDRformat = this.cdrFormatInp;
        }
        if (changes.showCdrRangeLabelInp && this.showCdrRangeLabelInp) {
            this.showCdrRangeLabel = this.showCdrRangeLabelInp;
        }
        if (changes.showRangeInp && this.showRangeInp) {
            this.showRange = this.showRangeInp;
        }
        if (changes.rangeInp && this.rangeInp) {
            this.range = this.rangeInp;
        }
        if (changes.showTimeInCDRInp && this.showTimeInCDRInp) {
            this.showTimeInCDR = this.showTimeInCDRInp;
        }
        if (changes.dateTypeInp && this.dateTypeInp) {
            this.dateType = this.dateTypeInp;
        }
        if (changes.timezoneInp && this.timezoneInp) {
            this.timezone = this.timezoneInp;
        }
        if (changes.dateInputTypeInp && this.dateInputTypeInp) {
            this.dateInputType = this.dateInputTypeInp;
        }
        if (changes.showDefaultDurationInp && this.showDefaultDurationInp) {
            this.showDefaultDuration = this.showDefaultDurationInp;
            this.patchDefaultConfig();
        }
        if (changes.frequencyInp && this.frequencyInp) {
            this.patchDefaultConfig();
        }
    }
    patchDefaultConfig() {
        if (this.dateInputType == this.dateInputTypeEnum.DAY_INPUT) {
            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment$1(this.date).format('YYYY-MM-DD'));
                this.startDateFC.patchValue(moment$1().startOf('day').tz(this.timezone).format());
                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment$1().tz(this.timezone).format()
                    : moment$1().add(1, 'days').startOf('day').tz(this.timezone).format();
                this.endDateFC.patchValue(endDateValue);
            }
        }
        else if (this.dateInputType == this.dateInputTypeEnum.MONTH_INPUT) {
            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment$1(this.date).format('YYYY-MM'));
                this.startDateFC.patchValue(moment$1().startOf('month').tz(this.timezone).format());
                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment$1().endOf('month').tz(this.timezone).format()
                    : moment$1().add(1, 'months').startOf('month').tz(this.timezone).format();
                this.endDateFC.patchValue(endDateValue);
            }
        }
        else if (this.dateInputType == this.dateInputTypeEnum.YEAR_INPUT) {
            if (this.showDefaultDuration) {
                this.durationFC.patchValue(moment$1(this.date).format('YYYY'));
                this.startDateFC.patchValue(moment$1().startOf('year').tz(this.timezone).format());
                const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                    ? moment$1().endOf('year').tz(this.timezone).format()
                    : moment$1().add(1, 'year').startOf('year').tz(this.timezone).format();
                this.endDateFC.patchValue(endDateValue);
            }
        }
        else if (this.dateInputType == this.dateInputTypeEnum.CUSTOM_INPUT) {
            if (this.showDefaultDuration) {
                if (this.showTimeInCDR) {
                    this.daterange.patchValue({ startDate: moment$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), endDate: moment$1() });
                }
                else {
                    this.daterange.patchValue({ startDate: moment$1().startOf('day'), endDate: moment$1() });
                }
                this.startDateFC.patchValue(moment$1(this.daterange.value.startDate).tz(this.timezone).format());
                this.endDateFC.patchValue(moment$1(this.daterange.value.endDate).tz(this.timezone).format());
            }
        }
    }
    ngAfterViewInit() {
        this.emitFilter.emit();
    }
    dayDateInput(selectedDate) {
        let duration = this.dateService.dailySelectedHandler(selectedDate);
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment$1(selectedDate).startOf('day').tz(this.timezone).format());
        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment$1(selectedDate).endOf('day').tz(this.timezone).format()
            : moment$1(selectedDate).add(1, 'days').startOf('day').tz(this.timezone).format();
        this.endDateFC.patchValue(endDateValue);
        this.emitFilter.emit();
    }
    monthDateInput(selectedDate, datepicker) {
        let duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY-MM");
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment$1(selectedDate).startOf('month').tz(this.timezone).format());
        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment$1(selectedDate).endOf('month').tz(this.timezone).format()
            : moment$1(selectedDate).add(1, 'months').startOf('month').tz(this.timezone).format();
        this.endDateFC.patchValue(endDateValue);
        this.emitFilter.emit();
    }
    yearDateInput(selectedDate, datepicker) {
        let duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY");
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(moment$1(selectedDate).startOf('year').tz(this.timezone).format());
        const endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
            ? moment$1(selectedDate).endOf('year').tz(this.timezone).format()
            : moment$1(selectedDate).add(1, 'year').startOf('year').tz(this.timezone).format();
        this.endDateFC.patchValue(endDateValue);
        this.emitFilter.emit();
    }
    customDateInput(selectedDate) {
        this.startDateFC.patchValue(moment$1(selectedDate.startDate).tz(this.timezone).format());
        this.endDateFC.patchValue(moment$1(selectedDate.endDate).tz(this.timezone).format());
        this.emitFilter.emit();
    }
}
DateInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputComponent, deps: [{ token: DateService }], target: i0.ɵɵFactoryTarget.Component });
DateInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateInputComponent, selector: "lib-date-input", inputs: { materialFormFieldAppearanceInp: "materialFormFieldAppearanceInp", materialFieldWidthInp: "materialFieldWidthInp", frequencyInp: "frequencyInp", dateInputTypeInp: "dateInputTypeInp", dateTypeInp: "dateTypeInp", timezoneInp: "timezoneInp", labelInp: "labelInp", rangeInp: "rangeInp", cdrFormatInp: "cdrFormatInp", isMandatoryFieldInp: "isMandatoryFieldInp", showRangeInp: "showRangeInp", showCdrRangeLabelInp: "showCdrRangeLabelInp", showDefaultDurationInp: "showDefaultDurationInp", showTimeInCDRInp: "showTimeInCDRInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0, template: "<mat-form-field [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.DAY_INPUT, 'matFieldWidth100': materialFieldWidth}\" [appearance]=\"formFieldAppearance\"\n    id=\"dailyField\" appDateMonthYearFormat (click)=\"dateService.openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(daily)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(daily)\">\n    <mat-label> {{ label }} </mat-label>\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationFC\" [max]=\"date\"\n        (dateInput)=\"dayDateInput($event.value)\" [required]=\"isMandatoryField\" readOnly/>\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"dateService.takeFocusAway('dailyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ formErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>\n\n\n<mat-form-field class=\"cursorPointer\"\n    [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.MONTH_INPUT, 'matFieldWidth100': materialFieldWidth}\"\n    [appearance]=\"formFieldAppearance\" id=\"monthlyField\" appMonthYearFormat\n    (click)=\"dateService.openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(monthly)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(monthly)\">\n    <mat-label> {{ label }} </mat-label>\n    <input matInput [matDatepicker]=\"monthly\" [formControl]=\"durationFC\" [max]=\"date\" [required]=\"isMandatoryField\" readOnly/>\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker #monthly panelClass=\"monthPicker\" startView=\"year\" (monthSelected)=\"monthDateInput($event, monthly)\"\n        (closed)=\"dateService.takeFocusAway('monthlyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ formErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field class=\"cursorPointer\"\n    [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.YEAR_INPUT, 'matFieldWidth100': materialFieldWidth}\"\n    [appearance]=\"formFieldAppearance\" id=\"yearlyField\" appYearFormat\n    (click)=\"dateService.openDatepickerOnClick(yearly)\" (keydown.arrowdown)=\"dateService.openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(yearly)\">\n    <mat-label> {{ label }} </mat-label>\n    <input matInput [matDatepicker]=\"yearly\" [formControl]=\"durationFC\" [max]=\"date\" [required]=\"isMandatoryField\" readOnly/>\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker #yearly startView=\"multi-year\" panelClass=\"yearPicker\"\n        (yearSelected)=\"yearDateInput($event, yearly)\"\n        (closed)=\"dateService.takeFocusAway('yearlyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ formErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field class=\"cursorPointer\"\n    [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.CUSTOM_INPUT, 'matFieldWidth100': materialFieldWidth}\"\n    [appearance]=\"formFieldAppearance\">\n    <mat-label> {{ label }} </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: cDRformat, customRangeLabel: 'Custom Range'}\"\n        [showCustomRangeLabel]=\"showCdrRangeLabel\" [timePicker]=\"showTimeInCDR\" [ranges]=\"showRange ? range : null\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateInput(daterange.value)\" [required]=\"isMandatoryField\" readOnly/>\n    <mat-error *ngIf=\"daterange.touched && daterange.hasError('required')\">\n        {{ formErrorEnum.REQUIRED }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i2$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2$2.MatLabel, selector: "mat-label" }, { type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2$2.MatSuffix, selector: "[matSuffix]" }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i1$1.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date-input',
                    templateUrl: './date-input.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { materialFormFieldAppearanceInp: [{
                type: Input
            }], materialFieldWidthInp: [{
                type: Input
            }], frequencyInp: [{
                type: Input
            }], dateInputTypeInp: [{
                type: Input
            }], dateTypeInp: [{
                type: Input
            }], timezoneInp: [{
                type: Input
            }], labelInp: [{
                type: Input
            }], rangeInp: [{
                type: Input
            }], cdrFormatInp: [{
                type: Input
            }], isMandatoryFieldInp: [{
                type: Input
            }], showRangeInp: [{
                type: Input
            }], showCdrRangeLabelInp: [{
                type: Input
            }], showDefaultDurationInp: [{
                type: Input
            }], showTimeInCDRInp: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }] } });

// /tsc-library/
class DateFilterTwoComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.frequencyEnum = FrequencyEnum;
        this.dateInputTypeEnum = DateInputTypeEnum;
        this.frequencyInp = [];
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
        this.frequency = FREQUENCY_CONSTANT;
        this.frequencyFC = new FormControl(this.frequencyEnum.DAILY);
        this.durationFC = new FormControl();
        this.startDateFC = new FormControl();
        this.endDateFC = new FormControl();
        this.dateFilterEmitter = new EventEmitter();
    }
    ngOnInit() {
        this.formFieldAppearance = this.materialFormFieldAppearanceInp;
        this.dateType = this.dateTypeInp;
        this.timezone = this.timezoneInp;
        this.label = this.labelInp;
        this.cdrFormat = this.cdrFormatInp;
        this.range = this.rangeInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
        this.showCdrRangeLabel = this.showCdrRangeLabelInp;
        this.showRange = this.showRangeInp;
        this.showTimeInCDR = this.showTimeInCDRInp;
    }
    ngOnChanges(changes) {
        if (changes.defaultFrequencyInp && this.defaultFrequencyInp) {
            this.frequencyFC.patchValue(this.defaultFrequencyInp);
        }
        if (changes.frequencyInp && this.frequencyInp) {
            this.frequency = this.frequencyInp;
        }
        if (changes.showDefaultDurationInp && this.showDefaultDurationInp) {
            this.showDefaultDuration = this.showDefaultDurationInp;
        }
    }
    onChange() {
        let duration;
        let startDate;
        let endDate;
        switch (this.frequencyFC.value) {
            case this.frequencyEnum.DAILY:
                duration = this.dayDateInput.durationFC.value;
                startDate = this.dayDateInput.startDateFC.value;
                endDate = this.dayDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.MONTHLY:
                duration = this.monthDateInput.durationFC.value;
                startDate = this.monthDateInput.startDateFC.value;
                endDate = this.monthDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.YEARLY:
                duration = this.yearDateInput.durationFC.value;
                startDate = this.yearDateInput.startDateFC.value;
                endDate = this.yearDateInput.endDateFC.value;
                break;
            case this.frequencyEnum.CUSTOM:
                duration = this.customDateInput.durationFC.value;
                startDate = this.customDateInput.startDateFC.value;
                endDate = this.customDateInput.endDateFC.value;
                break;
            default:
                console.log('undefined case encountered!');
        }
        this.durationFC.patchValue(duration);
        this.startDateFC.patchValue(startDate);
        this.endDateFC.patchValue(endDate);
        this.dateFilterEmitter.emit({ frequency: this.frequencyFC.value, duration: this.durationFC.value, startDate: this.startDateFC.value, endDate: this.endDateFC.value });
    }
}
DateFilterTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoComponent, deps: [{ token: DateService }], target: i0.ɵɵFactoryTarget.Component });
DateFilterTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: { materialFormFieldAppearanceInp: "materialFormFieldAppearanceInp", frequencyInp: "frequencyInp", defaultFrequencyInp: "defaultFrequencyInp", dateTypeInp: "dateTypeInp", timezoneInp: "timezoneInp", labelInp: "labelInp", showDefaultDurationInp: "showDefaultDurationInp", cdrFormatInp: "cdrFormatInp", rangeInp: "rangeInp", showRangeInp: "showRangeInp", showTimeInCDRInp: "showTimeInCDRInp", showCdrRangeLabelInp: "showCdrRangeLabelInp" }, outputs: { dateFilterEmitter: "dateFilterEmitter" }, viewQueries: [{ propertyName: "dayDateInput", first: true, predicate: ["dayDateInput"], descendants: true }, { propertyName: "monthDateInput", first: true, predicate: ["monthDateInput"], descendants: true }, { propertyName: "yearDateInput", first: true, predicate: ["yearDateInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyFC\">\n    <mat-button-toggle *ngFor=\"let freq of frequency\" value=\"{{ freq.keyID }}\" (click)=\"onChange()\">\n        {{ freq.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.DAILY}\" #dayDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.DAILY && onChange()\" [frequencyInp]=\"frequencyFC.value\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.DAY_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.MONTHLY}\" #monthDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.MONTHLY && onChange()\" [frequencyInp]=\"frequencyFC.value\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.MONTH_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.YEARLY}\" #yearDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.YEARLY && onChange()\" [frequencyInp]=\"frequencyFC.value\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.YEAR_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.CUSTOM}\" #customDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.CUSTOM && onChange()\" [frequencyInp]=\"frequencyFC.value\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\"\n    [showCdrRangeLabelInp]=\"showCdrRangeLabel\" [labelInp]=\"label\" [timezoneInp]=\"timezone\" [rangeInp]=\"\"\n    [showTimeInCDRInp]=\"showTimeInCDR\" [showRangeInp]=\"showRange\"></lib-date-input>", components: [{ type: i2$1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }], directives: [{ type: i2$1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date-filter-two',
                    templateUrl: './date-filter-two.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { materialFormFieldAppearanceInp: [{
                type: Input
            }], frequencyInp: [{
                type: Input
            }], defaultFrequencyInp: [{
                type: Input
            }], dateTypeInp: [{
                type: Input
            }], timezoneInp: [{
                type: Input
            }], labelInp: [{
                type: Input
            }], showDefaultDurationInp: [{
                type: Input
            }], cdrFormatInp: [{
                type: Input
            }], rangeInp: [{
                type: Input
            }], showRangeInp: [{
                type: Input
            }], showTimeInCDRInp: [{
                type: Input
            }], showCdrRangeLabelInp: [{
                type: Input
            }], dateFilterEmitter: [{
                type: Output
            }], dayDateInput: [{
                type: ViewChild,
                args: ['dayDateInput']
            }], monthDateInput: [{
                type: ViewChild,
                args: ['monthDateInput']
            }], yearDateInput: [{
                type: ViewChild,
                args: ['yearDateInput']
            }], customDateInput: [{
                type: ViewChild,
                args: ['customDateInput']
            }] } });

class DateInputModule {
}
DateInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputModule, declarations: [DateInputComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateMonthYearFormatModule, i1$1.NgxDaterangepickerMd], exports: [DateInputComponent] });
DateInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatSelectModule,
            MatFormFieldModule,
            MatNativeDateModule,
            MatDatepickerModule,
            DateMonthYearFormatModule,
            NgxDaterangepickerMd.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateInputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        DateMonthYearFormatModule,
                        NgxDaterangepickerMd.forRoot(),
                    ],
                    exports: [DateInputComponent]
                }]
        }] });

class DateFilterTwoModule {
}
DateFilterTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateFilterTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, declarations: [DateFilterTwoComponent], imports: [CommonModule,
        DateInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule, i1$1.NgxDaterangepickerMd, DateMonthYearFormatModule], exports: [DateFilterTwoComponent] });
DateFilterTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, imports: [[
            CommonModule,
            DateInputModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonToggleModule,
            MatInputModule,
            MatNativeDateModule,
            MatDatepickerModule,
            NgxDaterangepickerMd.forRoot(),
            DateMonthYearFormatModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateFilterTwoComponent
                    ],
                    imports: [
                        CommonModule,
                        DateInputModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonToggleModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        NgxDaterangepickerMd.forRoot(),
                        DateMonthYearFormatModule
                    ],
                    exports: [
                        DateFilterTwoComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of date
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE, DATE_CONSTANT, DATE_YEAR_MONTH_FORMAT, DateComponent, DateFilterComponent, DateFilterModule, DateFilterTwoComponent, DateFilterTwoModule, DateFormatEnum, DateInputComponent, DateInputModule, DateInputTypeEnum, DateModule, DateMonthYearFormatDirective, DateMonthYearFormatModule, DateService, DateService2, DateTimeIntervalEnum, DateTypeEnum, FREQUENCY_CONSTANT, FrequencyEnum, MONTH_CONSTANT, MONTH_YEAR_FORMAT, MonthYearFormatDirective, YEAR_FORMAT, YearFormatDirective };
//# sourceMappingURL=library-date.js.map
