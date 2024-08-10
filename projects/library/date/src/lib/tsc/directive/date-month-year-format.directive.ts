import { Directive, NgModule } from '@angular/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter"
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";

export const DATE_YEAR_MONTH_FORMAT = {
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

export const MONTH_YEAR_FORMAT = {
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

export const YEAR_FORMAT = {
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

@Directive({
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
})
export class DateMonthYearFormatDirective {
    constructor() { }
}

@Directive({
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
})

export class MonthYearFormatDirective {
    constructor() { }
}

@Directive({
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
})

export class YearFormatDirective {
    constructor() { }
}

@NgModule({
    declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
    exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
})

export class DateMonthYearFormatModule { }
