import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductionRouteController {

    constructor(
        private http: HttpClient,
    ) { }

    getProductionRoutePage(orgID: any, pageNo: number, pageSize: number, sortBy: string, orderBy: string, searchValue: string) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue != null) { params = params.append('searchBy', searchValue); }

        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/production-route/page`, { params: params });
    }

    createProductionRoute(orgID: any, productionRoute) {
        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/production-route`, productionRoute);
    }

    getProductionRouteByID(orgID: any, productionRouteID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/production-route/${productionRouteID}`);
    }

    updateProductionRoute(orgID: any, productionRouteID: any, productionRoute) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/production-route/${productionRouteID}`, productionRoute);
    }

}
