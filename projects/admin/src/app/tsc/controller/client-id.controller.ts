import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientM } from '@Admin/model/client-id.model';

@Injectable({
    providedIn: 'root'
})
export class ClientIdController {

    constructor(
        private http: HttpClient
        ) { }

        generateClientID(orgID) {
            return this.http.post(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/client-id`, {});
        }
    
        getClientKey(pageNumber, pageSize, sortBy, orderBy, orgID) {
            let params = new HttpParams();
    
            params = params.append('pageNo', pageNumber + 1);
            params = params.append('pageSize', pageSize);
            params = params.append('sortBy', sortBy);
            params = params.append('orderBy', orderBy);
    
            return this.http.get<ClientM>(`${environment.ORGANIZATION_API_URL}organizations/${orgID}/client-id/page`, {params: params});
        }
}