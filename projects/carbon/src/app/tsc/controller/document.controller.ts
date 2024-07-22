import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CarbonDocumentController {

    constructor(
        private http: HttpClient,
    ) { }

    postDoc(typeID, fileType, filePayload) {
        let params = new HttpParams();
        params = params.append('fileType', fileType);
        params = params.append('typeID', typeID);

        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/files/doc`, filePayload, { params: params });
    }

    createDocument(orgID,typeID, typeKeyID, payload) {
        let params = new HttpParams();
        params = params.append('typeKeyID', typeKeyID);
        params = params.append('typeID', typeID);

        return this.http.post(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/files/doc`, payload, { params: params });
    }

    updateDocument(orgID, docID, payload) {
        return this.http.patch(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/files/doc/${docID}`, payload);
    }

    deleteDocument(orgID,docID) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/files/doc/${docID}`);
    }  

    deleteOrgFileByActivity(orgID: number, acitivityKeyID: string, acitivityID: number, docID: number) {
        return this.http.delete(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/activity/${acitivityKeyID}/${acitivityID}/files/doc/${docID}`);
    }


}
