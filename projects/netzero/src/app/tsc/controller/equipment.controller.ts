import { Injectable } from '@angular/core';

import {
    HttpClient, 
    HttpParams
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EquipmentController{

    constructor(
        private http: HttpClient
    ) { }

    createEquipment(equipment, currentOrgID) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group`, equipment);
    }

    getEquipmentPage(pageNo: number, pazeSize: number, sortBy: string, orderBy, filterArr: Array<string>, currentOrgID: any) {

        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });

        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/page`, { params: params });
    }

    getEquipmentByGroupID(currentOrgID, groupID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/${groupID}`);
    }

    updateEquipment(currentOrgID, groupID, equipment){
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/${groupID}`, equipment);
    }

    deleteByID(currentOrgID, groupID) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${currentOrgID}/equipment-group/${groupID}`);
    }

    getEquipment(){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}equipment`);
    }

}