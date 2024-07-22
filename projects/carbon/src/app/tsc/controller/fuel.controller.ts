import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class FuelController {

    constructor(
        private http: HttpClient
    ) { }

    getFuelSource() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}fuel-sources`);
    }

    getFuelByActivityKeyID(activityKeyID: any) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}fuel/${activityKeyID}`)
    }

    getHhv(orgId, fID) {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}organizations/${orgId}/fuel/hhv?fuelID=${fID}`)
    }

    getFuelStationaryCombustion() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}fuel/stationary-combustion`);
    }

    getChpFuelList() {
        return this.http.get(`${environment.CARBON_ACCOUNTING_API_URL}chp-fuels`);
    }
}
