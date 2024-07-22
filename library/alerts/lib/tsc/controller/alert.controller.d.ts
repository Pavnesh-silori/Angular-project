import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertPageM, AlertRuleM, AlertStatusI } from '../model/alert.model';
import { AlarmPageM } from '../model/alarm.model';
import { PageM, StaticI } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class AlertRuleController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getPeriodicAlertType(orgID: number): Observable<StaticI[]>;
    getAlertRuleByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], alertType: any, orgID: number): Observable<PageM<AlertPageM>>;
    getActiveAlertByPage(orgID: number, requestBody: any): Observable<PageM<AlarmPageM>>;
    getResolvedAlertByPage(orgID: number, requestBody: any): Observable<PageM<AlarmPageM>>;
    updateAlertRuleStatus(orgID: any, alertRuleID: any, requestBody: any): Observable<Object>;
    createAlertRule(orgID: any, requestBody: any): Observable<Object>;
    getAlertRuleByID(orgID: any, alertRuleID: any): Observable<AlertRuleM>;
    updateAlertRule(orgID: any, alertRuleID: any, requestBody: any): Observable<Object>;
    deleteAlertRule(orgID: any, alertRuleID: any): Observable<Object>;
    getAlertStatusInfo(orgID: any): Observable<AlertStatusI>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertRuleController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertRuleController>;
}
