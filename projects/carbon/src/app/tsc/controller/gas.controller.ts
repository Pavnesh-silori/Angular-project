import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class GasController{

    constructor(
        private http: HttpClient,
    ) { }

    getGas(){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}gases`);
    }
    
    /* returns list of gases of preferred gwp dataset(eg.AR5) {from org preference}  */
    getAllGasesFromOrgIDPreferenceDataset(orgID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/gwp/gas`);
    }
}