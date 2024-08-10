import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FacilityM } from "../model/facility.model";
import * as i0 from "@angular/core";
export declare class FacilityController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getFacilityByID(rootOrgID: any, facilityID: any): Observable<FacilityM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacilityController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FacilityController>;
}
