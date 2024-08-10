import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class NetZeroController {

    constructor(
        private http: HttpClient
    ) { }

    authenticateToken() {
        return this.http.get(`${environment.ORGANIZATION_API_URL}authenticate/token`);
    }

}
