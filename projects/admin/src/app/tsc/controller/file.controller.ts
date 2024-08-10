import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class FileController {
    constructor(private http: HttpClient) { }

    updateFile(fileID, file) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}files/${fileID}`, file);
    }

}
