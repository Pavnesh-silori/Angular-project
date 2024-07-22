import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GwpdatasetController {

    constructor(
        private http: HttpClient,
    ) { }

    getGwpDatasetByID(gwpDatasetID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}gwp-dataset/${gwpDatasetID}`);
    }

    getGasAndGwpdatasetByID(gwpDatasetID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}gwp-dataset/${gwpDatasetID}/gwpgasdata`);
    }

    getGwpDataSet(orgID,cedID){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/${cedID}/gwp-dataset`)
    }

    getFugitiveFactorDetails(orgID,cedID){
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/emission/${cedID}/factor-details`)
    }
}
