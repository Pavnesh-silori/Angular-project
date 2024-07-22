import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { SBTITargetSetBooleans, SbtiCriteriaM, SbtiPageM, SbtiSectorM, SbtiSettingDifferenceM, SbtiSettingM, TargetDashboardM } from '@carbon/model/sbti.model';

import { PageM } from '@library/tsc-common';

@Injectable({
    providedIn: 'root'
})
export class SbtiController {

    constructor(
        private http: HttpClient,
    ) { }

    getTargetPageRecords(orgID, pageNo: number, pazeSize: number, sortBy: string, orderBy: string, search: any[], status: string): Observable<PageM<SbtiPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('status', status);

        search.forEach(search => params = params.append('search', search));

        return this.http.get<PageM<SbtiPageM>>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets/page`, { params: params });
    }

    deleteTargetPageRecords(orgID, targetID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets/${targetID}`);
    }

    updateTargetStatus(orgID, targetID, status) {
        let params = new HttpParams();
        params = params.append('status', status);

        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets/${targetID}/status`,'', { params: params });
    }

    getSBTiTargetCompaniesList(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[]) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/target/benchmark/page`, { params: params });
    }

    getTargetbranchmarkLocationList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/location`);
    }

    getTargetDashboardDetails(orgID, targetID) {
        return this.http.get<TargetDashboardM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/target/${targetID}/dashboard`);
    }

    getSBTiZeroEmissionYears(orgID): Observable<any> {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/yearly-emission`);
    }

    getAllSbtiSector(): Observable<SbtiSectorM[]> {
        return this.http.get<SbtiSectorM[]>(`${environment.CARBON_ACCOUNTING_API_URL}sbti/sectors`);
    }

    createSbtiSetting(orgID, data) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/settings`, data);
    }

    getSbtiSettingsByOrgID(orgID): Observable<SbtiSettingM> {
        return this.http.get<SbtiSettingM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/settings`);
    }

    updateSbtiSetting(orgID, data, sbtiSettingID) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/settings/${sbtiSettingID}`, data);
    }

    isSBTITargetSet(orgID): Observable<SBTITargetSetBooleans> {
        return this.http.get<SBTITargetSetBooleans>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets-info`);
    }

    isSBTiEnterpriseTargetSet(orgID): Observable<SBTITargetSetBooleans> {
        return this.http.get<SBTITargetSetBooleans>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets-enterprise-info`);
    }

    createTarget(orgID, target) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets`, target);
    }

    getTargetByID(orgID, targetID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets/${targetID}`);
    }

    updateTarget(orgID, targetID, target) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets/${targetID}`, target);
    }

    getIfAnyTargetExist(orgID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/targets-exist`);
    }

    getSettingEmissionDifference(orgID, formData): Observable<SbtiSettingDifferenceM[]> {
        return this.http.post<SbtiSettingDifferenceM[]>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/targets`, formData);
    }

    getSbtiCriteriaCheckList(orgID): Observable<SbtiCriteriaM> {
        return this.http.get<SbtiCriteriaM>(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti/criteria`);
    }

    getTargetCreatedActivityList(orgID, targetType) {
        let params = new HttpParams();
        params = params.append('targetType', targetType);
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/sbti-targets-activity`, { params: params });
    }

}