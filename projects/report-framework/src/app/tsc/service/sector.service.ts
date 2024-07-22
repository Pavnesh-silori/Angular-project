import { SectorController } from '@report-framework/controller/sector.controller';
import { SectorM } from '@report-framework/model/sector.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SectorService {

	constructor(
		private sectorController: SectorController

	) { }

	async getAllSectors(): Promise<SectorM[]> {
		let sectorM: SectorM[] = [];
		try {
			sectorM = await this.sectorController.getAllSectorList().toPromise();

			if (sectorM) {
				return sectorM;
			} else {
				return [];
			}
		} catch (error) {
			console.error('Error in getAllSectors() -', error);
			return [];
		}
	}
}
