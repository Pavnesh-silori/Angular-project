import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscalationLevelCountM, EscalationLevelInfoM, EscalationPermissionM } from '../model/escalation.model';
import * as i0 from "@angular/core";
export declare class EscalationController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getEscalationPermission(orgID: any): Observable<EscalationPermissionM>;
    getEscalationLevelCount(orgID: any): Observable<EscalationLevelCountM>;
    createEsclationByLevelID(orgID: any, requestBody: any): Observable<Object>;
    getAllLevelEscalation(orgID: any, alertRuleID: any): Observable<EscalationLevelInfoM[]>;
    updateEsclationByLevelID(orgID: any, escalationRuleID: any, requestBody: any): Observable<Object>;
    deleteEsclationByLevelID(orgID: any, escalationRuleID: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EscalationController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EscalationController>;
}
