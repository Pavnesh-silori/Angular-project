import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CustomFuelController {

    constructor(
        private http: HttpClient,
    ) { }

    getCustomFuels(orgID: any) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels`);
    }

    getCustomFuelByID(orgID: any, fuelID: number) {
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/custom-fuels/${fuelID}`);
    }

}
