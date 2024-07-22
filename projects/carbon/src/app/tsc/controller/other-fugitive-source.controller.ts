import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class OtherFugitiveSourceController{

    constructor(
        private http: HttpClient,
    ) { }

    getOtherFugitiveSourcePage(pageNo: number, pazeSize: number,sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any,startDate:any,endDate:any,searchValue:any,dateFlag) {

        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
         params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('startDate', startDate);
        params = params.append('endDate', endDate);
        if (searchValue !== null) {
            params = params.append('searchValue', searchValue);
          }
        params=params.append('dateFlag', dateFlag);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/activity/sector-specfic-fugitive-emission/data/page`, { params: params });
    }

    createOtherFugitiveSource(currentOrgID, formData){
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/fugitive-release`, formData);
    }

    getOtherFugitiveReleasedByID(currentOrgID, fugitvieReleasedID){

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/fugitive-release/${fugitvieReleasedID}`);
    }

    updateOtherFugitiveSource(currentOrgID,equipmentID, data) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/fugitive-release/${equipmentID}`, data); 
    }

    getGasesByFugitiveSourceID(currentOrgID,sourceID){
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/other-fugitive-source/gas/${sourceID}`)
    }

    getOtherFugitiveSourceListByOrg(currentOrgID){
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/other-fugitive-source/list`)
    }

    deleteOtherFugitiveSource(currentOrgID, fugitiveSourceID){
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/fugitive-release/${fugitiveSourceID}`);

    }

}

