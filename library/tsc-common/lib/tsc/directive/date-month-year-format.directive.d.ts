import * as i0 from "@angular/core";
export declare const DATE_YEAR_MONTH_FORMAT: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare const MONTH_YEAR_FORMAT: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare const YEAR_FORMAT: {
    parse: {
        dateInput: string;
    };
    display: {
        dateInput: string;
        monthYearLabel: string;
        dateA11yLabel: string;
        monthYearA11yLabel: string;
    };
};
export declare class DateMonthYearFormatDirective {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<DateMonthYearFormatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DateMonthYearFormatDirective, "[appDateMonthYearFormat]", never, {}, {}, never>;
}
export declare class MonthYearFormatDirective {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<MonthYearFormatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MonthYearFormatDirective, "[appMonthYearFormat]", never, {}, {}, never>;
}
export declare class YearFormatDirective {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<YearFormatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<YearFormatDirective, "[appYearFormat]", never, {}, {}, never>;
}
export declare class DateMonthYearFormatModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DateMonthYearFormatModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DateMonthYearFormatModule, [typeof DateMonthYearFormatDirective, typeof MonthYearFormatDirective, typeof YearFormatDirective], never, [typeof DateMonthYearFormatDirective, typeof MonthYearFormatDirective, typeof YearFormatDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DateMonthYearFormatModule>;
}
