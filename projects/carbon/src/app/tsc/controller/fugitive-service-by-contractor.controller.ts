import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { EquipmentServicingM, EquipmentCapacityM } from '@carbon/model/fugitive.model';
import { Observable } from 'rxjs';
import { PageM } from '@library/tsc-common'; 

@Injectable({
	providedIn: 'root'
})
export class FugitiveServiceByContractorController {

	constructor(
		private http: HttpClient
	) { }

	getEquipmentCapacityRecord(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, activityType: any, startDate: any, endDate: any): Observable<PageM<EquipmentCapacityM>> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);
		params = params.append('activityType', activityType);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		return this.http.get<PageM<EquipmentCapacityM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/lifecycle-stage-approach-simplified-material-balance-approach/page`, { params: params });
	}

	createEquipmentCapacityRecord(currentOrgID, formData) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/lifecycle-stage-approach-simplified-material-balance-approach`, formData);
	}

	updateEquipmentCapacityRecord(currentOrgID, equipmentCapacityID, data) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/lifecycle-stage-approach-simplified-material-balance-approach/${equipmentCapacityID}`, data);
	}

	getEquipmentCapacityRecordByID(currentOrgID, equipmentCapacityID): Observable<EquipmentCapacityM> {
		return this.http.get<EquipmentCapacityM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/lifecycle-stage-approach-simplified-material-balance-approach/${equipmentCapacityID}`);
	}

	deleteEquipmentCapacityRecord(currentOrgID, equipmentCapacityID) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/lifecycle-stage-approach-simplified-material-balance-approach/${equipmentCapacityID}`);
	}

	getEquipmentServicing(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, startDate: any, endDate: any): Observable<PageM<EquipmentServicingM>> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		return this.http.get<PageM<EquipmentServicingM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/equipment-servicing/page`, { params: params });
	}

	createEquipmentServicingRecord(currentOrgID, formData) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/equipment-servicing`, formData);
	}

	updateEquipmentServicingRecord(currentOrgID, equipmentServicingID, data) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/equipment-servicing/${equipmentServicingID}`, data);
	}

	getEquipmentServicingRecordByID(currentOrgID, equipmentServicingID): Observable<EquipmentServicingM> {
		return this.http.get<EquipmentServicingM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/equipment-servicing/${equipmentServicingID}`);
	}

	deleteEquipmentServicingRecord(currentOrgID, equipmentServicingID) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/equipment-servicing/${equipmentServicingID}`);
	}


}
