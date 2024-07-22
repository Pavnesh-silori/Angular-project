import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { ResponseM } from '@library/tsc-common';
import { CategoryMappingM, CategoryRecordM, ImportRecordHistoryM, ImportRecordM, ImportRecordsEmissionM } from '@carbon/model/spend-based.model';

@Injectable({
    providedIn: 'root'
})
export class SpendBasedController {

    constructor(
        private http: HttpClient
    ) { }

    createImportRequest(orgID, body) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/request`, body);
    }

    getInflationRate(orgID, methodID, startDate, endDate, currencyID) {
        let params = new HttpParams();
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        params = params.append('methodID', methodID);
        params = params.append("currencyID", currencyID);
        return this.http.get<ResponseM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/inflation`, { params: params });
    }

    saveConfigureData(orgID, body) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/create`, body);
    }

    getConfigAccount(orgID, configID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}/account`);
    }

    getActivities(orgID, methodID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/method/${methodID}/activity`);
    }

    getCategoryRecords(pageNo: number, pageSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID, configID): Observable<CategoryRecordM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get<CategoryRecordM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}/records`, { params: params });
    }

    saveUserPrefrenceCategory(orgID, preferenceData) {
        return this.http.post<ResponseM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/record/preference`, preferenceData);
    }

    getUserPrefrenceCategory(orgID, recordID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/record/${recordID}/preference`);
    }

    saveCategoryRecordsData(orgID, configID, categoryData) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}/record`, categoryData);
    }

    getImportRecordsPreview(pageNo: number, pageSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID, configID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get<CategoryRecordM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}/preview`, { params: params });
    }

    submitPreviewData(orgID, configID, configStatus) {
        let params = new HttpParams();
        params = params.append('status', configStatus);
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/config/${configID}/submit`, '', { params: params });
    }

    getImportRecordHistory(pageNo: number, pageSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID): Observable<ImportRecordHistoryM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get<ImportRecordHistoryM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/history`, { params: params });
    }

    deleteImportRecordConfig(orgID, configID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}`);
    }

    getImportRecordConfiguredData(orgID, configID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}`);
    }

    updateConfiguredData(orgID, configID, configuredData) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/config/${configID}`, configuredData);
    }

    getImportRecordsAccountByOrg(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/import-record/account`);
    }

    getImportRecordsByOrg(pageNo: number, pageSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID, startDate: any, endDate: any): Observable<ImportRecordM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get<ImportRecordM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/scope3/record`, { params: params });
    }

    deleteImportRecord(orgID, recordID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/scope3/record/${recordID}`);
    }

    getImportRecordsEmissionByOrg(pageNo: number, pageSize: number, sortBy: string, orderBy, filterArr: Array<string>, orgID): Observable<ImportRecordsEmissionM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get<ImportRecordsEmissionM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/scope3/emission`, { params: params });
    }

    updateCategorizedRecords(orgID, recordID, categorizedRecords) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/scope3/record/${recordID}`, categorizedRecords);
    }

    getCategoryMapping(orgID): Observable<CategoryMappingM[]> {
        return this.http.get<CategoryMappingM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/category`);
    }

}
