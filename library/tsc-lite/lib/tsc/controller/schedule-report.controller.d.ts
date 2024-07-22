import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleReportI, ScheduleReportPageI } from '../model/schedule-report.model';
import { PageM } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ScheduleReportController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    createScheduleReport(orgID: any, scheduleReport: any): Observable<Object>;
    getScheduleReportByID(orgID: any, scheduleReportID: any): Observable<ScheduleReportI>;
    updateScheduleReport(orgID: any, scheduleReportID: any, scheduleReport: any): Observable<Object>;
    getScheduleReportByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: any, filterArr: any, orgID: any): Observable<PageM<ScheduleReportPageI>>;
    deleteScheduledReport(orgID: any, scheduleReportID: any): Observable<Object>;
    updateReportStatusByID(orgID: any, scheduleReportID: any, status: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduleReportController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScheduleReportController>;
}
