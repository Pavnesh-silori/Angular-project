
import { Injectable } from '@angular/core';

import { EquipmentServicingM, InventoryM, ProductManufactureM, EquipmentCapacityM } from '@carbon/model/fugitive.model';

import { FugitiveInventoryController } from '@carbon/controller/fugitive-inventory.controller';
import { FugitiveMyselfManufacturerController } from '@carbon/controller/fugitive-myself-manufacture.controller';
import { FugitiveScreeningController } from '@carbon/controller/fugitive-screening.controller';
import { FugitiveServiceByContractorController } from '@carbon/controller/fugitive-service-by-contractor.controller';

@Injectable({
	providedIn: 'root'
})
export class FugitiveService {

	constructor(
		private fugitiveInventoryController: FugitiveInventoryController,
		private fugitiveServiceByContractorController: FugitiveServiceByContractorController,
		private fugitiveScreeningController: FugitiveScreeningController,
		private fugitiveMyselfManufacturerController: FugitiveMyselfManufacturerController
	) { }

	async getInventoryRecordByID(currentOrgID, inventoryID): Promise<InventoryM> {
		let inventoryM: InventoryM;
		try {
			inventoryM = await this.fugitiveInventoryController.getInventoryRecordByID(currentOrgID, inventoryID).toPromise();
			if (inventoryM) {
				return inventoryM;
			} else {
				return new InventoryM;
			}
		} catch (error) {
			console.log('error in getInventoryRecordByID -', error);
			return new InventoryM;
		}
	}

	async getEquipmentServicingRecordByID(currentOrgID, equipmentServicingID): Promise<EquipmentServicingM> {
		let equipmentServicingM: EquipmentServicingM;
		try {
			equipmentServicingM = await this.fugitiveServiceByContractorController.getEquipmentServicingRecordByID(currentOrgID, equipmentServicingID).toPromise();
			if (equipmentServicingM) {
				return equipmentServicingM;
			} else {
				return new EquipmentServicingM;
			}
		} catch (error) {
			console.log('error in getEquipmentServicingRecordByID -', error);
			return new EquipmentServicingM;
		}
	}

	async getScreeningRecordByID(currentOrgID, recordID): Promise<EquipmentCapacityM> {
		let screeningApproachM: EquipmentCapacityM;
		try {
			screeningApproachM = await this.fugitiveScreeningController.getEquipmentCapacityRecordByID(currentOrgID, recordID).toPromise();
			if (screeningApproachM) {
				return screeningApproachM;
			} else {
				return new EquipmentCapacityM;
			}
		} catch (error) {
			console.log('error in getScreeningRecordByID -', error);
			return new EquipmentCapacityM;
		}
	}

	async getServiceByContractorRecordByID(currentOrgID, recordID): Promise<EquipmentCapacityM> {
		let equipmentCapacityRecordM: EquipmentCapacityM;
		try {
			equipmentCapacityRecordM = await this.fugitiveServiceByContractorController.getEquipmentCapacityRecordByID(currentOrgID, recordID).toPromise();
			if (equipmentCapacityRecordM) {
				return equipmentCapacityRecordM;
			} else {
				return new EquipmentCapacityM;
			}
		} catch (error) {
			console.log('error in getServiceByContractorRecordByID -', error);
			return new EquipmentCapacityM;
		}
	}

	async getServiceMyselfRecordByID(currentOrgID, recordID, calculationApproachKeyID): Promise<ProductManufactureM> {
		let productManufactureM: ProductManufactureM;
		try {
			productManufactureM = await this.fugitiveMyselfManufacturerController.getEquipmentGasQuantityRecordByID(currentOrgID, recordID, calculationApproachKeyID).toPromise();
			if (productManufactureM) {
				return productManufactureM;
			} else {
				return new ProductManufactureM;
			}
		} catch (error) {
			console.log('error in getServiceMyselfRecordByID -', error);
			return new ProductManufactureM;
		}
	}


}
