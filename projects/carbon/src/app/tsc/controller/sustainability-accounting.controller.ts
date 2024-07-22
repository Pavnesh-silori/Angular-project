import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SustainabilityAccountingController {

    constructor(
        private http: HttpClient
    ) { }

    getAccountList(currentOrgID, pageNo: number, pazeSize: number, sortBy: string, orderBy, startDate, endDate, includeSubsidiary, consolidationApproachKeyID: string, filterArr: Array<string>, dateFlag: boolean) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        params = params.append('includeSubsidiary', includeSubsidiary);
        params = params.append('consolidationApproachKeyID', consolidationApproachKeyID);
        params = params.append('dateFlag', dateFlag);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
 
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/accounting/record/page`, { params: params })
    }
}
