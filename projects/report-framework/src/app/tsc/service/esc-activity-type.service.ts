import { Injectable } from '@angular/core';

import { EsgActivityTypeI } from '@report-framework/model/esg-activity-type.model';

import { EsgActivityTypeController } from '@report-framework/controller/esg-activity-type.controller';

@Injectable({
	providedIn: 'root'
})
export class EsgActivityTypeService {

	constructor(
		private esgActivityTypeController: EsgActivityTypeController

	) { }

	async getEsgActivityTypeList(): Promise<EsgActivityTypeI[]> {
		let esgActivityTypeI: EsgActivityTypeI[] = [];
		try {
			esgActivityTypeI = await this.esgActivityTypeController.getEsgActivityTypeList().toPromise();

			if (esgActivityTypeI) {
				return esgActivityTypeI;
			} else {
				return [];
			}
		} catch (error) {
			console.error('Error in getEsgActivityTypeList() -', error);
			return [];
		}
	}
}
