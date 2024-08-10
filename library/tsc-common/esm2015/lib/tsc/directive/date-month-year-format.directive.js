import { Directive, NgModule } from '@angular/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import * as i0 from "@angular/core";
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
export class DateMonthYearFormatDirective {
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
export class MonthYearFormatDirective {
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
export class YearFormatDirective {
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
export class DateMonthYearFormatModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tb250aC15ZWFyLWZvcm1hdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvZGlyZWN0aXZlL2RhdGUtbW9udGgteWVhci1mb3JtYXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFBO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXhGLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHO0lBQ2xDLEtBQUssRUFBRTtRQUNILFNBQVMsRUFBRSxZQUFZO0tBQzFCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsU0FBUyxFQUFFLGFBQWE7UUFDeEIsY0FBYyxFQUFFLFVBQVU7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsV0FBVztLQUNsQztDQUNKLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUM3QixLQUFLLEVBQUU7UUFDSCxTQUFTLEVBQUUsVUFBVTtLQUN4QjtJQUNELE9BQU8sRUFBRTtRQUNMLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDbEM7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHO0lBQ3ZCLEtBQUssRUFBRTtRQUNILFNBQVMsRUFBRSxNQUFNO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsU0FBUyxFQUFFLE1BQU07UUFDakIsY0FBYyxFQUFFLE1BQU07UUFDdEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsTUFBTTtLQUM3QjtDQUNKLENBQUM7QUFnQkYsTUFBTSxPQUFPLDRCQUE0QjtJQUNyQyxnQkFBZ0IsQ0FBQzs7MEhBRFIsNEJBQTRCOzhHQUE1Qiw0QkFBNEIsbURBWjFCO1FBQ1A7WUFDSSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMxQjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsc0JBQXNCO1NBQ25DO0tBQ0o7NEZBRVEsNEJBQTRCO2tCQWR4QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO3lCQUMxQjt3QkFDRDs0QkFDSSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixRQUFRLEVBQUUsc0JBQXNCO3lCQUNuQztxQkFDSjtpQkFDSjs7QUFvQkQsTUFBTSxPQUFPLHdCQUF3QjtJQUNqQyxnQkFBZ0IsQ0FBQzs7c0hBRFIsd0JBQXdCOzBHQUF4Qix3QkFBd0IsK0NBYnRCO1FBQ1A7WUFDSSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMxQjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCO0tBQ0o7NEZBR1Esd0JBQXdCO2tCQWZwQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsV0FBVzs0QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO3lCQUMxQjt3QkFDRDs0QkFDSSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixRQUFRLEVBQUUsaUJBQWlCO3lCQUM5QjtxQkFDSjtpQkFDSjs7QUFxQkQsTUFBTSxPQUFPLG1CQUFtQjtJQUM1QixnQkFBZ0IsQ0FBQzs7aUhBRFIsbUJBQW1CO3FHQUFuQixtQkFBbUIsMENBYmpCO1FBQ1A7WUFDSSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMxQjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsV0FBVztTQUN4QjtLQUNKOzRGQUdRLG1CQUFtQjtrQkFmL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7NEJBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQzt5QkFDMUI7d0JBQ0Q7NEJBQ0ksT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsUUFBUSxFQUFFLFdBQVc7eUJBQ3hCO3FCQUNKO2lCQUNKOztBQVdELE1BQU0sT0FBTyx5QkFBeUI7O3VIQUF6Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkEvQ3pCLDRCQUE0QixFQW1CNUIsd0JBQXdCLEVBbUJ4QixtQkFBbUIsYUF0Q25CLDRCQUE0QixFQW1CNUIsd0JBQXdCLEVBbUJ4QixtQkFBbUI7d0hBU25CLHlCQUF5Qjs0RkFBekIseUJBQXlCO2tCQUxyQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLDRCQUE0QixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixDQUFDO29CQUMzRixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQztpQkFDekYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb21lbnREYXRlQWRhcHRlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlclwiXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IERBVEVfWUVBUl9NT05USF9GT1JNQVQgPSB7XG4gICAgcGFyc2U6IHtcbiAgICAgICAgZGF0ZUlucHV0OiAnREQtTU0tWVlZWScsXG4gICAgfSxcbiAgICBkaXNwbGF5OiB7XG4gICAgICAgIGRhdGVJbnB1dDogJ0RELU1NTS1ZWVlZJyxcbiAgICAgICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNT05USF9ZRUFSX0ZPUk1BVCA9IHtcbiAgICBwYXJzZToge1xuICAgICAgICBkYXRlSW5wdXQ6ICdNTU0gWVlZWScsXG4gICAgfSxcbiAgICBkaXNwbGF5OiB7XG4gICAgICAgIGRhdGVJbnB1dDogJ01NTSBZWVlZJyxcbiAgICAgICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBZRUFSX0ZPUk1BVCA9IHtcbiAgICBwYXJzZToge1xuICAgICAgICBkYXRlSW5wdXQ6ICdZWVlZJyxcbiAgICB9LFxuICAgIGRpc3BsYXk6IHtcbiAgICAgICAgZGF0ZUlucHV0OiAnWVlZWScsXG4gICAgICAgIG1vbnRoWWVhckxhYmVsOiAnWVlZWScsXG4gICAgICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ1lZWVknLFxuICAgIH0sXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBEYXRlTW9udGhZZWFyRm9ybWF0XScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBEQVRFX1lFQVJfTU9OVEhfRk9STUFUXG4gICAgICAgIH1cbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlTW9udGhZZWFyRm9ybWF0RGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1thcHBNb250aFllYXJGb3JtYXRdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLFxuICAgICAgICAgICAgdXNlVmFsdWU6IE1PTlRIX1lFQVJfRk9STUFUXG4gICAgICAgIH1cbiAgICBdLFxufSlcblxuZXhwb3J0IGNsYXNzIE1vbnRoWWVhckZvcm1hdERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYXBwWWVhckZvcm1hdF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgICAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgICAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsXG4gICAgICAgICAgICB1c2VWYWx1ZTogWUVBUl9GT1JNQVRcbiAgICAgICAgfVxuICAgIF0sXG59KVxuXG5leHBvcnQgY2xhc3MgWWVhckZvcm1hdERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXRlTW9udGhZZWFyRm9ybWF0RGlyZWN0aXZlLCBNb250aFllYXJGb3JtYXREaXJlY3RpdmUsIFllYXJGb3JtYXREaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtEYXRlTW9udGhZZWFyRm9ybWF0RGlyZWN0aXZlLCBNb250aFllYXJGb3JtYXREaXJlY3RpdmUsIFllYXJGb3JtYXREaXJlY3RpdmVdLFxufSlcblxuZXhwb3J0IGNsYXNzIERhdGVNb250aFllYXJGb3JtYXRNb2R1bGUgeyB9XG4iXX0=