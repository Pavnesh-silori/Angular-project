import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReportPreferenceM, ReportingPrefenceForReportDetailM } from '@report-framework/model/reporting-preference.model';


@Injectable({
	providedIn: 'root'
})
export class ReportingPreferenceController {

	constructor(
		private http: HttpClient
	) { }

	createReportingPreference(orgID, data) {
		return this.http.post(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-preference`, data)
	}

	updateReportingPreference(orgID, data) {
		return this.http.patch(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-preference`, data)
	}

	getReportingPreferenceForReportDetails(orgID): Observable<ReportingPrefenceForReportDetailM> {
		return this.http.get<ReportingPrefenceForReportDetailM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-preference/report`);
	}

	getReportingPreferenceByOrgID(orgID): Observable<ReportPreferenceM> {
	  return this.http.get<ReportPreferenceM>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-preference`);
      // return this.http.get<ReportPreferenceM>(`${environment.MOCK_SERVER}reporting-pref`);

	}

	getReportingPreferencesByOrgID(orgID): Observable<ReportingPrefenceForReportDetailM[]> {
		return this.http.get<ReportingPrefenceForReportDetailM[]>(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-preference/report`);
	}

    getPreferenceEnableFramwork(orgID) {
		//return this.http.get(`${environment.MOCK_SERVER}pref-enable-framework`);
        return this.http.get(`${environment.REPORTING_FRAMEWORK_API_URL}organizations/${orgID}/reporting-framework`);

    }

}
