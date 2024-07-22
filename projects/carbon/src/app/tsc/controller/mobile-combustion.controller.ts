import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { VehicleTypeM } from "@carbon/model/vehicle.model";
import { CurrencyM } from "@carbon/model/currency.model";

@Injectable({
    providedIn: "root",
})
export class MobileCombustionController {

    constructor(
        private http: HttpClient
    ) { }

    getVehicleByTypeID(orgID, vehicleTypeID):Observable<VehicleTypeM[]> {
        let params = new HttpParams();
        params = params.append('vehicleTypeId', vehicleTypeID);

        return this.http.get<VehicleTypeM[]>(`${environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`, {params:params});
    }

    getVehicleById(orgID, vehicleID){
        return this.http.get(`${environment.COMMON_API_URL}organizations/${orgID}/activity/mobile-combustion/activity-data/${vehicleID}`)
    }

    getAllVehicle(orgID):Observable<VehicleTypeM[]>{
        return this.http.get<VehicleTypeM[]>(`${environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`);
    }
    
    getCurrency():Observable<CurrencyM[]>{
        return this.http.get<CurrencyM[]>(`${environment.SUBSCRIPTION_API_URL}currency`);
    }
}
