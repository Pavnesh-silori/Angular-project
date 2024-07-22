import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AssetController {

    constructor(
        private http: HttpClient
    ) { }

    getAsset(pageNo: number, pazeSize: number, sortBy: string, orderBy: string, searchValue: string, filterArr: any[], currentOrgID: any) {

        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('filter', searchValue);

        // if (searchValue != null) { params = params.append('searchBy', searchValue); }

        filterArr.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets/page`, { params: params });
    }

    /* for {id: number, name: string} type response */
    getAllAssetList(orgID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/asset-list`);
    }

    getAllAsset(orgID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/assets`);
    }

    createAsset(asset, currentOrgID) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets`, asset);
    }

    getAssetByID(assetID, currentOrgID) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets/${assetID}`);
    }

    updateAsset(asset, assetID, currentOrgID) {
        return this.http.patch(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets/${assetID}`, asset);
    }

    deleteAsset(assetID, currentOrgID) {
        return this.http.delete(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets/${assetID}`)
    }

    bulkUpload(currentOrgID, file) {
        return this.http.post(`${environment.COMMON_API_URL}organizations/${currentOrgID}/assets/bulk-upload`, file);
    }
}
