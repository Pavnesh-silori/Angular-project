import { Injectable } from '@angular/core';

import { GhgAuditController } from '@carbon/controller/ghg-audit.controller';
import { GhgAuditDetailsM } from '@carbon/model/ghg-audit.model';

@Injectable({
	providedIn: 'root'
})
export class GhgAuditService {

	constructor(
		private ghgAuditController: GhgAuditController,
	) { }

	async getGhgAuditDetailsByYear(currentOrgID, year): Promise<GhgAuditDetailsM> {
		let ghgAuditDetailsM: GhgAuditDetailsM;
		try {
			ghgAuditDetailsM = await this.ghgAuditController.getGhgAuditDetailsByYear(currentOrgID, year).toPromise();
			if (ghgAuditDetailsM) {
				return ghgAuditDetailsM;
			} else {
				return new GhgAuditDetailsM();
			}
		} catch (error) {
			console.error('Error -', error);
			return new GhgAuditDetailsM();
		}
	}

}
