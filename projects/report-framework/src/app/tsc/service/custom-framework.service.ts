import { Injectable } from '@angular/core';

import { StandardI } from '@report-framework/model/standard.model';

import { CustomFrameworkController } from '@report-framework/controller/custom-framework.controller';

@Injectable({
	providedIn: 'root'
})
export class CustomFrameworkService {

	constructor(
		private customFrameworkController: CustomFrameworkController

	) { }

	async getCustomFrameworkList(orgID): Promise<StandardI[]> {
		let standardI: StandardI[] = [];
		try {
			standardI = await this.customFrameworkController.getCustomFrameworkList(orgID).toPromise();

			if (standardI) {
				return standardI;
			} else {
				return [];
			}
		} catch (error) {
			console.error('Error in getAllCustomFramework() -', error);
			return [];
		}
	}
}
