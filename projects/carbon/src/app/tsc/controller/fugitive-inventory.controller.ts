import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { InventoryM } from '@carbon/model/fugitive.model';
import { Observable } from 'rxjs';
import { PageM } from '@library/tsc-common'; 

@Injectable({
	providedIn: 'root'
})
export class FugitiveInventoryController {

	constructor(
		private http: HttpClient
	) { }

	getInventoryRecord(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, startDate: any, endDate: any, calculationApproachKeyID: any): Observable<PageM<InventoryM>> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);
		params = params.append('calculationApproachKeyID', calculationApproachKeyID);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		return this.http.get<PageM<InventoryM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/inventory/page`, { params: params });
	}

	createInventoryRecord(currentOrgID, formData) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/inventory`, formData);
	}

	updateInventoryRecord(currentOrgID, inventoryID, data) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/inventory/${inventoryID}`, data);
	}

	getInventoryRecordByID(currentOrgID, inventoryID): Observable<InventoryM> {
		return this.http.get<InventoryM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/inventory/${inventoryID}`);
	}

	deleteInventoryRecord(currentOrgID, inventoryID) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/inventory/${inventoryID}`);
	}

}
