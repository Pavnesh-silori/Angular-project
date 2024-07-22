import { Injectable } from '@angular/core';

import { ReportingFrameworkM } from '@report-framework/model/reporting-framework.model';

import { ReportFrameworkController } from '@report-framework/controller/report-framework.controller';

@Injectable({
	providedIn: 'root'
})
export class StandardFrameworkService {

	constructor(
		private reportFrameworkController: ReportFrameworkController

	) { }

	async getAllReportingFramework(): Promise<ReportingFrameworkM[]> {
		let frameworkI: ReportingFrameworkM[] = [];
		try {
			frameworkI = await this.reportFrameworkController.getAllReportingFramework().toPromise();

			if (frameworkI) {
				return frameworkI;
			} else {
				return [];
			}
		} catch (error) {
			console.error('Error in getAllReportingFramework() -', error);
			return [];
		}
	}
}
