import { FacilityM } from "../model/facility.model";
import { FacilityController } from "../controller/facility.controller";
import * as i0 from "@angular/core";
export declare class FacilityService {
    private facilityController;
    constructor(facilityController: FacilityController);
    getFacilityByID(rootOrgID: number, facilityID: number): Promise<FacilityM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacilityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FacilityService>;
}
