import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { VehicleCategoryM, VehicleTypeM, VehicleByTypeM, VehicleM, VehiclePageM, EngineStrokeM } from '../model/vehicle.model';

@Injectable({
    providedIn: 'root'
})
export class VehicleController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    createVehicle(orgID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles`, value);
    }

    createVehicleForEmployee(orgID, employeeID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/employees/${employeeID}/vehicles`, value);
    }

    getVehicleByPage(pageNo: number, pazeSize: number, orgId, filterArr): Observable<VehiclePageM> {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pazeSize);
        filterArr.forEach(filter => params = params.append('filter', filter))
        return this.http.get<VehiclePageM>(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles`, { params: params });
    }

    getVehicleByID(orgID, vehicleID): Observable<VehicleM> {
        return this.http.get<VehicleM>(`${this.environment.COMMON_API_URL}organizations/${orgID}/${vehicleID}`)
    }

    updateVehicle(orgID, value, vehicleID) {
        return this.http.patch(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/${vehicleID}`, value);
    }

    vehicleExist(orgID, vehicleNumber) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/exit-vehicle/${vehicleNumber}`)
    }

    getVehicleType(): Observable<VehicleTypeM[]> {
        return this.http.get<VehicleTypeM[]>(`${this.environment.COMMON_API_URL}vehicle-type`);
    }

    getVehicleCategory(): Observable<VehicleCategoryM[]> {
        return this.http.get<VehicleCategoryM[]>(`${this.environment.COMMON_API_URL}vehicle-category`);
    }

    getEngineStroke(): Observable<EngineStrokeM[]> {
        return this.http.get<EngineStrokeM[]>(`${this.environment.COMMON_API_URL}engine-stroke`);
    }

    vehicleBulkUpload(orgId, file) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles/bulk-upload`, file);
    }

    getVehicleByTypeID(orgID, vehicleTypeID):Observable<VehicleByTypeM[]> {
        let params = new HttpParams();
        params = params.append('vehicleTypeId', vehicleTypeID);

        return this.http.get<VehicleByTypeM[]>(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`, {params:params});
    }

    getAllVehicle(orgID):Observable<VehicleByTypeM[]>{
        return this.http.get<VehicleByTypeM[]>(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`);
    }


}
