import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ActiveFugitiveApproachM, ShowFugitiveApproachM } from '@carbon/model/fugitive.model';

@Injectable({
	providedIn: 'root'
})
export class FugitiveActivityConfiguratorController {

	constructor(
		private http: HttpClient
	) { }

	isActivityConfiguratorConfigured(currentOrgID) {
		return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-configurator`);
	}

	createActivityConfigurator(currentOrgID, formData) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-configurator`, formData);
	}

	updateActivityConfigurator(currentOrgID, data) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-configurator`, data);
	}

	getActiveConfiguredApproach(currentOrgID): Observable<ActiveFugitiveApproachM> {
		return this.http.get<ActiveFugitiveApproachM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-configurator/active-approach`);
	}

	getConfiguredApproach(currentOrgID): Observable<ShowFugitiveApproachM> {
		return this.http.get<ShowFugitiveApproachM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-configurator/configured-approach`);
	}

}
