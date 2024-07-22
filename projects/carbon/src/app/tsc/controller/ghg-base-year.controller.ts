import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { PageM } from '@library/tsc-common'; 

import { StructuralChangePageM, StructuralChangeDataM, ghgBaseYearAllEmissionsM } from '@carbon/model/ghg-base-year.model';

@Injectable({
    providedIn: 'root'
})
export class GhgBaseYearController {

    constructor(
        private http: HttpClient,
    ) { }

    getStructuralChangeByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], orgID: number, type): Observable<PageM<StructuralChangePageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('type', type);

        search.forEach(search => params = params.append('search', search));

        return this.http.get<PageM<StructuralChangePageM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/structural-change/page`, { params: params });
    }

    getStructuralChangeOrgByID(orgID, recordID, type): Observable<StructuralChangeDataM> {
        let params = new HttpParams();
        params = params.append('type', type);
        return this.http.get<StructuralChangeDataM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/structural-change/${recordID}`, { params: params });
    }

    createStructuralChangeOrg(orgID, structuralChange) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/structural-change`, structuralChange);
    }

    updateStructuralChangeOrg(orgID, recordID, structuralChange) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/structural-change/${recordID}`, structuralChange);
    }

    deleteStructuralChangeorgByID(orgID, recordID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/structural-change/${recordID}`);
    }

    getGHGBaseYearConfirmView(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/ghg-base-year/emission`);
    }

    createBaseYear(orgID, type, value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year`, value);
    }

    getBaseYear(orgID, type) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`);
    }

    getBaseYearAndEmission(orgID, type) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}/emission`);
    }

    updateBaseYear(orgID, baseYear) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year`, baseYear);
    }

    /* TODO_PN remove it */
    postGHGBaseYearAllEmissions(orgID, value) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/setup`, value);
    }
    getGHGBaseYearUpdate(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/setup`);
    }

    getGHGBaseEmissions(orgID, year): Observable<ghgBaseYearAllEmissionsM[]> {
        return this.http.get<ghgBaseYearAllEmissionsM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/base-year/${year}/emissions`);
    }

    patchGHGBaseYearAllEmissions(orgID, value) {
        console.log("ads")
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/ghg/setup`, value);

    }

    getBaseYearByOrgIDAndType(orgID, type)  {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/base-year/${type}`);
    }
}