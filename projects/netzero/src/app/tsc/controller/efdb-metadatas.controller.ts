import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmissionMetadatasController {

    constructor(private http: HttpClient) {
    }

    getMaterialTypes(currentOrgID: any, activityKeyID: any, emissionFactorID: any): Observable<any> {
        let params = new HttpParams();
        params = params.append('activityKeyID', activityKeyID);
        params = params.append('emissionFactorSourceKeyID', emissionFactorID);
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/material-types`, { params: params });
    }

    getCategory(currentOrgID: any, activityKeyID: any, emissionFactorID: any): Observable<any> {
        let params = new HttpParams();
        // params = params.append('activityKeyID', activityKeyID);
        params = params.append('emissionFactorSourceKeyID', emissionFactorID);
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${currentOrgID}/category`, { params: params });
    }
}