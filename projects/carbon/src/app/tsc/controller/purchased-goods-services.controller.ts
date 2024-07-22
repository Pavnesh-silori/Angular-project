import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PageM } from '@library/tsc-common';
import { PurchasedGoodsServicesI, PurchasedGoodsServicesTypesI } from '@carbon/model/purchased-goods-services.model';

@Injectable({
	providedIn: 'root'
})

export class PurchasedGoodsServicesController {

	constructor(
		private http: HttpClient
	) { }

	getRecords(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any, activityKeyID: any, startDate: any, endDate: any, calculationApproachKeyID: any): Observable<any> {

		let params = new HttpParams();
		params = params.append('pageNo', pageNo + 1);
		params = params.append('pageSize', pazeSize);
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		// params = params.append('activityKeyID', activityKeyID);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);
		params = params.append('calculationApproachKeyID', calculationApproachKeyID);

		filterArr.forEach(filter => {
			params = params.append('filter', filter);
		});

		// if (searchFlag) {
		//     params = params.append('search', searchValue);
		// }
		// return this.http.get<PageM<any>>(`${environment.MOCK_SERVER}purchased_goods_services`);
		return this.http.get<PageM<PurchasedGoodsServicesI>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/data/page`, { params: params });
	}

	getActivityDataByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy: string, orgID, activityKeyID, filterArr: Array<string>, startDate: any, endDate: any, dateFlag, searchFlag: boolean, searchValue: string, calculationApproachKeyID: any) {
		let params = new HttpParams();

		params = params.append('pageNo', (pageNo + 1).toString()); // Convert to string
		params = params.append('pageSize', pazeSize.toString()); // Convert to string
		params = params.append('sortBy', sortBy);
		params = params.append('orderBy', orderBy);
		params = params.append('startDate', startDate);
		params = params.append('endDate', endDate);
		params = params.append('dateFlag', dateFlag);
		params = params.append('calculationApproachKeyID', calculationApproachKeyID);

		filterArr.forEach(filter => params = params.append('filter', filter));

		if (searchFlag) {
			params = params.append('search', searchValue);
		}

		return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/data/page`, { params: params });
	}

	createRecord(currentOrgID, formData, activityKeyID: any) {
		return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}`, formData);
	}

	updateRecord(currentOrgID, recordID, formData, activityKeyID: any) {
		return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/${recordID}`, formData);
	}

	getRecordByID(currentOrgID, recordID, activityKeyID: any): Observable<PurchasedGoodsServicesI> {
		return this.http.get<PurchasedGoodsServicesI>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/${recordID}`);;
	}

	deleteRecord(currentOrgID, activityKeyID: string, formData) {
		return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/bulk-delete`, { body: formData });
	}

	getAllProductTypes(activityID): Observable<Array<PurchasedGoodsServicesTypesI>> {
		let params = new HttpParams();
		params = params.append('activityID', activityID);
		return this.http.get<Array<PurchasedGoodsServicesTypesI>>(`${environment.CARBON_ACCOUNTING_API_URL}purchased-goods-services-types`, { params: params })
	}

}
