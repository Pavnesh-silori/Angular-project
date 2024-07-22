import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class FugitiveSectorSpecificController {

    constructor(
        private http: HttpClient
    ) { }

    createSource(orgID, source) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${orgID}/other-fugitive-source`, source);
    }

    getSourceByID(orgID, sourceID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/other-fugitive-source/${sourceID}`);
    }

    updateSourceByID(orgID, sourceID, source) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${orgID}/other-fugitive-source/${sourceID}`, source);
    }

    deleteSourceByID(orgID, sourceID) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${orgID}/other-fugitive-source/${sourceID}`);

    }

    getSourceByPage(pageNo: number, pazeSize: number, sortBy: string, orderBy: string, filterArr: Array<string>, orgID: any) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        
        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });

        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/other-fugitive-source/page`, { params: params });
    }
}
