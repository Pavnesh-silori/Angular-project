import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { ProductManufactureM } from '@carbon/model/fugitive.model';
import { Observable } from 'rxjs';
import { PageM } from '@library/tsc-common'; 

@Injectable({
	providedIn: 'root'
})

export class FugitiveMyselfManufacturerController {

	constructor(
		private http: HttpClient
	) { }

	getEquipmentGasQuantityRecord(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, activityType: any, startDate: any, endDate: any, calculationApproachKeyID: any): Observable<PageM<ProductManufactureM>> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('activityType', activityType);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);
		params = params.append('calculationApproachKeyID', calculationApproachKeyID);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		return this.http.get<PageM<ProductManufactureM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/${calculationApproachKeyID}/page`, { params: params });
	}

	createEquipmentGasQuantityRecord(currentOrgID, formData, calculationApproachKeyID: any) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/${calculationApproachKeyID}`, formData);
	}

	updateEquipmentGasQuantityRecord(currentOrgID, recordID, data, calculationApproachKeyID: any) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/${calculationApproachKeyID}/${recordID}`, data);
	}

	getEquipmentGasQuantityRecordByID(currentOrgID, recordID, calculationApproachKeyID: any): Observable<ProductManufactureM> {
		return this.http.get<ProductManufactureM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/${calculationApproachKeyID}/${recordID}`);;
	}

	deleteEquipmentGasQuantityRecord(currentOrgID, recordID, calculationApproachKeyID: any) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/${calculationApproachKeyID}/${recordID}`);
	}


}
