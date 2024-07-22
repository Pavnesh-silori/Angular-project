import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ActivityDataController {

    constructor(
        private http: HttpClient
    ) { }

    getActivityDataByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy: string, orgID, activityKeyID, filterArr: Array<string>, startDate: any, endDate: any, dateFlag = false) {
        let params = new HttpParams();

        params = params.append('pageNo', (pageNo + 1).toString()); // Convert to string
        params = params.append('pageSize', pazeSize.toString()); // Convert to string
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('dateFlag', dateFlag);

        if (startDate != null) {
            params = params.append('startDate', startDate);
            params = params.append('endDate', endDate);
        }

        filterArr.forEach(filter => params = params.append('filter', filter))

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/data/page`, { params: params });
    }

    getActivityDataPageNew(pageNo: number, pazeSize: number, sortBy: string, orderBy: string, orgID: any, activityKeyID: string, searchFlag: boolean, searchValue: any,
        filterArr: Array<string>, startDate: any, endDate: any) {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        if (startDate != null) {
            params = params.append('startDate', startDate);
            params = params.append('endDate', endDate);
        }

        filterArr.forEach(filter => params = params.append('filter', filter));

        if (searchFlag) { params = params.append('search', searchValue); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/data/page`, { params: params });
    }

    updateActivityData(orgID, activityKeyID, activityDataID, activityData, action) {
        let params = new HttpParams();
        params = params.append('action', action);
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${activityKeyID}/activity-data/${activityDataID}`, activityData, { params: params });
    }

    getRenewableValue(orgID, renewableData) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/renewable`, renewableData);
    }

    getScope3ActivityDataByID(currentOrgID, activityDataID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/scope3/record/${activityDataID}`);
    }

    getEmissionDataForEmployeeComm(currentOrgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/employee-commuting/emission/${cedID}/survey-detail`);
    }

    getEmissionDataByActivityDataID(currentOrgID, cedID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/calculated-emission/${cedID}/data`);
    }

    //Employee Commuting record details page
    getEmissionDataByActivityDataIDForEmployee(currentOrgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/employee-commuting/emission/${cedID}/emission-data`);
    }

    getCalculatedEmissionDataByCEDID(currentOrgID, cedID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/emission-data/${cedID}/factor-details`);
    }

    getEmissionFactorForModeOfTransport(currentOrgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/employee-commuting/emission/${cedID}/factor-detail`);
    }

    getActivityDataByID(currentOrgID, activityKeyID, activityDataID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/activity-data/${activityDataID}`);
    }

    getFugitiveRefrigerationActivityDataByCedID(currentOrgID, activityKeyID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/activity-data/${cedID}`);
    }

    getFactorDetailsByFormDataID(currentOrgID, activityDataID, activityKeyID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/factor-details/${activityDataID}`);
    }

    getActivityDataWithActivityDataConfigByID(currentOrgID, activityKeyID, activityDataID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityKeyID}/activity-data/${activityDataID}`)
    }

    getSalesRecord(orgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/${cedID}/equipment-group-capacity-details`)
    }

    getScreeningActivity(orgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/${cedID}/equipment-groups`);
    }

    getWasateGeneratedDetails(orgID, keyID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/waste-generated-in-operations/activity-data/${keyID}`)
    }

    getFugitiveRecordData(orgID, cedID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/refrigeration-ac-and-fire-suppression/activity-data/${cedID}`)
    }

    //for scope 3 newly added use this n make all generic
    getScope3ActivityDataByKeyID(currentOrgID, activityDataKeyID, activityDataID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/${activityDataKeyID}/activity-data/${activityDataID}`);
    }
}