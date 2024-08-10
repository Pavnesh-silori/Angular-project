import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { EscalationLevelCountM, EscalationLevelInfoM, EscalationPermissionM } from '../model/escalation.model';

@Injectable({
    providedIn: 'root'
})

export class EscalationController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getEscalationPermission(orgID): Observable<EscalationPermissionM> {
        return this.http.get<EscalationPermissionM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/permission`);
    }

    getEscalationLevelCount(orgID): Observable<EscalationLevelCountM> {
        return this.http.get<EscalationLevelCountM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/level/count`);
    }

    createEsclationByLevelID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation`, requestBody);
    }

    getAllLevelEscalation(orgID, alertRuleID): Observable<EscalationLevelInfoM[]> {
        return this.http.get<EscalationLevelInfoM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/${alertRuleID}/escalation`);
    }

    updateEsclationByLevelID(orgID, escalationRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`, requestBody);
    }

    deleteEsclationByLevelID(orgID, escalationRuleID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`)
    }

}