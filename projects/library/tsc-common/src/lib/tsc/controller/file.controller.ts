import {
    HttpClient
} from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FileController {
    constructor(
        private http: HttpClient
    ) { }

    updateFile(apiUrl: string, orgID, fileID, file): Observable<any> {
        return this.http.patch<any>(`${apiUrl}files/${fileID}`, file);
    }

    updateFileNew(apiUrl: string, orgID, fileID, fileFormData): Observable<any> {
        return this.http.patch<any>(`${apiUrl}organizations/${orgID}/files/${fileID}`, fileFormData);
    }

    deleteFile(apiUrl: string, orgID, fileID): Observable<any> {
        return this.http.delete<any>(`${apiUrl}organizations/${orgID}/files/${fileID}`);
    }

}
