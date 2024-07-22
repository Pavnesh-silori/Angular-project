import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataInputMethodController {

    constructor(
        private http: HttpClient
    ) { }

    getDataInputMethodByActivityAndType(activityID, dataInputMehthodType) {
        let params = new HttpParams();
        params = params.append('activityID', activityID);
        params = params.append('dataInputMehthodType', dataInputMehthodType);

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}data-input-methods`, { params: params });        
    }

    getDataInputMethodByID(dataInputMethodID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}data-input-method/${dataInputMethodID}`);
    }

    getAllDataInputMethodList(){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}data-input-method-list`);         
    }

}
