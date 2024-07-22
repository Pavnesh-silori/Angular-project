import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SupplierController {

    constructor(
        private http: HttpClient,
    ) { }

    createSupplier(supplier, currentOrgID) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/supplier`, supplier);
    }

    getSupplier(pageNo: number, pazeSize: number, sortBy: string, orderBy, currentOrgID: any, filters) {

        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/org/supplier/page`, filters, { params: params });
    }

    getSupplierType() {
        return this.http.get(`${environment.COMMON_API_URL}supplier/type`);
    }

    bulkUpload(currentOrgID, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/supplier/bulk-upload`, file);
    }

    getSupplierActivityForm(supplierID, currentOrgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity-config/supplier/${supplierID}`);
    }

    updateAssign(supplierID, currentOrgID, assignValue) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/supplier/assigned/${supplierID}/${assignValue}`, '');
    }

    getSupplierByID(supplierID, currentOrgID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/supplier/${supplierID}`);
    }

    updateSupplier(supplier, supplierID, currentOrgID) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${currentOrgID}/org/supplier/${supplierID}`, supplier);
    }

    isSupplierCodeExist(currentOrgID, supplierCode) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/supplier/code/${supplierCode}`);
    }

    getGrid(countryCode) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}grids/country/${countryCode}`);
    }

    getSupplierByType(orgID, type) {
        let params = new HttpParams();
        params = params.append('type', type);

        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/suppliers`, { params: params });
    }

    getSupplierByPage(pageNo: number, pageSize: number, sortBy: string, orderBy, orgID: any, filterArr: Array<string>, searchValue: string, searchFlag: boolean) {
        console.log('filterArr', filterArr);
        let params = new HttpParams();

        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if(searchFlag == true) {
            params = params.append('search', searchValue)
        }
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });

        console.log('params', params);
        // return this.http.get<ActivityConfigPageM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity-configs/page`, { params: params });
        return this.http.get<any>(`${environment.COMMON_API_URL}organizations/${orgID}/org/supplier/page`, { params: params });
    }

    getSupplierTiers() {
        return this.http.get(`${environment.COMMON_API_URL}supplier/tier`);
    }
}
