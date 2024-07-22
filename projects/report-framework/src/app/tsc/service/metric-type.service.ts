import { Injectable } from '@angular/core';

import { StandardI } from '@report-framework/model/standard.model';

import { EscMetricController } from '@report-framework/controller/esg-metric.controller';

@Injectable({
	providedIn: 'root'
})
export class MetricTypeService {

	constructor(
		private escMetricController: EscMetricController

	) { }

	async getMetricTypeList(orgID): Promise<StandardI[]> {
		let standardI: StandardI[] = [];
		try {
			standardI = await this.escMetricController.getMetricTypeList().toPromise();

			if (standardI) {
				return standardI;
			} else {
				return [];
			}
		} catch (error) {
			console.error('Error in getMetricTypeList() -', error);
			return [];
		}
	}
}
