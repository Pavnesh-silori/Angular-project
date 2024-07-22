import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class BoundaryQuestionController {

	constructor(
		private http: HttpClient
	) { }

	createBoundaryQuestions(orgID, body) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/boundary-question`, body)
	}

	getBoundaryQuestions(orgID) {
		return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/boundary-question`);
	}

	getAllActivityFlagList(currentOrgID) {
		return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/boundary-question/activity`);
	}
}
