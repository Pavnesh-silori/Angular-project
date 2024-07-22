import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EquipmentCapacityM } from '@carbon/model/fugitive.model';
import { PageM } from '@library/tsc-common'; 

@Injectable({
	providedIn: 'root'
})
export class FugitiveScreeningController {

	constructor(
		private http: HttpClient
	) { }

	getEquipmentCapacity(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, activityType: string, startDate: any, endDate: any): Observable<PageM<EquipmentCapacityM>> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('activityType', activityType);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		return this.http.get<PageM<EquipmentCapacityM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/screening-method/page`, { params: params });
	}

	createEquipmentCapacityRecord(currentOrgID, formData) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/screening-method`, formData);
	}

	updateEquipmentCapacityRecord(currentOrgID, equipmentCapacityID, data) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/screening-method/${equipmentCapacityID}`, data);
	}

	getEquipmentCapacityRecordByID(currentOrgID, equipmentCapacityID): Observable<EquipmentCapacityM> {
		return this.http.get<EquipmentCapacityM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/screening-method/${equipmentCapacityID}`);
	}

	deleteEquipmentCapacityRecord(currentOrgID, equipmentCapacityID) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/screening-method/${equipmentCapacityID}`);
	}
}
