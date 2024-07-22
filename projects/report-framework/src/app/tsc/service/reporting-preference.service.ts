import { Injectable } from '@angular/core';

import { ReportPreference, ReportPreferenceM, ReportingPrefenceForReportDetail, ReportingPrefenceForReportDetailM } from '@report-framework/model/reporting-preference.model';
import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';

@Injectable({
	providedIn: 'root'
})
export class ReportingPreferenceService {

	constructor(
		private reportingPreferenceController: ReportingPreferenceController
	) { }

	async getReportingPreferenceForReportDetails(orgID): Promise<ReportingPrefenceForReportDetailM> {
		let ReportingPrefenceForReportDetailM: ReportingPrefenceForReportDetailM;
		try {
			ReportingPrefenceForReportDetailM = await this.reportingPreferenceController.getReportingPreferenceForReportDetails(orgID).toPromise();

			if (ReportingPrefenceForReportDetailM) {
				return ReportingPrefenceForReportDetailM;
			} else {
				return new ReportingPrefenceForReportDetail();
			}
		} catch (error) {
			console.error('Error in getReportingPreferenceForReportDetails -', error);
			return new ReportingPrefenceForReportDetail();
		}
	}

	async getReportingPreferenceByOrgID(orgID): Promise<ReportPreferenceM> {
		let ReportingPrefenceForReportDetailM: ReportPreferenceM;
		try {
			ReportingPrefenceForReportDetailM = await this.reportingPreferenceController.getReportingPreferenceByOrgID(orgID).toPromise();

			if (ReportingPrefenceForReportDetailM) {
				return ReportingPrefenceForReportDetailM;
			} else {
				return new ReportPreference();
			}
		} catch (error) {
			console.error('Error in getReportingPreferenceByOrgID -', error);
			return new ReportPreference();
		}
	}

}
