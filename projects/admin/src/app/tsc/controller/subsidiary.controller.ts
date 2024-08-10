import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { PageM } from '@Admin/model/page.model';
import { SubsidiaryM, SubsidiaryPageM } from '@Admin/model/subsidiary.model';

@Injectable({
    providedIn: 'root'
})
export class SubsidiaryController {

    constructor(
        private http: HttpClient,
    ) { }

    getSubsidiaryByPage(pageNo: number, pageSize: number, sortBy: string, orderBy: string, search: any[], filter: any[], orgID: number): Observable<PageM<SubsidiaryPageM>> {
        let params = new HttpParams();

        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);

        search.forEach(search => params = params.append('search', search));
        filter.forEach(filter => params = params.append('filter', filter));

        return this.http.get<PageM<SubsidiaryM>>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/page`, { params: params });
    }

    getSubsidiaryByID(orgID, subsidiaryID): Observable<SubsidiaryM> {
        return this.http.get<SubsidiaryM>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/${subsidiaryID}`);
    }

    createSubsidiary(orgID, subsidiary) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary`, subsidiary);
    }

    updateSubsidiary(orgID, subsidiaryID, subsidiary) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/${subsidiaryID}`, subsidiary);
    }

    updateSubsidaryStatusByID(orgID, subsidiaryID, status) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/${subsidiaryID}/status`, status);
    }

    deleteSubsidiaryByID(orgID, subsidiaryID) {
        return this.http.delete(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/subsidiary/${subsidiaryID}`);
    }

}
