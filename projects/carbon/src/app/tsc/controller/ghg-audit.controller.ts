import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { GhgAuditDetailsM } from '@carbon/model/ghg-audit.model'; 

@Injectable({
	providedIn: 'root'
})
export class GhgAuditController {

	constructor(
		private http: HttpClient,
	) { }

	createGhgAuditDetails(orgID, body) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/audit`, body);
	}

	patchGhgAuditDetails(orgID, id, body) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/audit/${id}`, body);
	}

	getGhgAuditDetailsByYear(orgID, year): Observable<GhgAuditDetailsM> {
		return this.http.get<GhgAuditDetailsM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/audit/${year}`);
	}
}
