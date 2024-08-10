import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { StorageService } from '@library/storage-service';
import { Organization, OrganizationService } from '@library/organization-service';
import * as i0 from "@angular/core";
export declare class DateService {
    private storageService;
    private organizationSerive;
    organizationM: Organization;
    constructor(storageService: StorageService, organizationSerive: OrganizationService);
    takeFocusAway(duration: any): void;
    openDatepickerOnClick(datepicker: MatDatepicker<Moment>): void;
    handleDateInput(normalizedDate: Moment, datepicker: MatDatepicker<Moment>, format: string): string;
    yearSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>): string;
    monthSelectedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>): string;
    dailySelectedHandler(selectedDate: Moment): string;
    formatDate(selectedDate: string, format: string): string;
    convertUtcToTimeZone(utcTimeString: string, targetTimeZone: string, format: string): string;
    getRelativeTimeAgoLabel(dateTime: string): string;
    getStartDateTime(selectedRange: any): string;
    getEndDateTime(selectedRange: any): string;
    getReportingPeriodList(orgID: any, endYearLength: any): Promise<any[]>;
    getMonthIndex(month: string): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateService>;
}
