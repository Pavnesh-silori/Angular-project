import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleCategoryM, VehicleTypeM, VehicleByTypeM, VehicleM, VehiclePageM, EngineStrokeM } from '../model/vehicle.model';
import * as i0 from "@angular/core";
export declare class VehicleController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    createVehicle(orgID: any, value: any): Observable<Object>;
    createVehicleForEmployee(orgID: any, employeeID: any, value: any): Observable<Object>;
    getVehicleByPage(pageNo: number, pazeSize: number, orgId: any, filterArr: any): Observable<VehiclePageM>;
    getVehicleByID(orgID: any, vehicleID: any): Observable<VehicleM>;
    updateVehicle(orgID: any, value: any, vehicleID: any): Observable<Object>;
    vehicleExist(orgID: any, vehicleNumber: any): Observable<Object>;
    getVehicleType(): Observable<VehicleTypeM[]>;
    getVehicleCategory(): Observable<VehicleCategoryM[]>;
    getEngineStroke(): Observable<EngineStrokeM[]>;
    vehicleBulkUpload(orgId: any, file: any): Observable<Object>;
    getVehicleByTypeID(orgID: any, vehicleTypeID: any): Observable<VehicleByTypeM[]>;
    getAllVehicle(orgID: any): Observable<VehicleByTypeM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VehicleController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VehicleController>;
}
