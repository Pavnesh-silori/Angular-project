import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusInfoM } from '../model/device.model';
import { RegulatorTypeI, RegulatorsEntitiesI } from '../model/regulator.model';
import * as i0 from "@angular/core";
export declare class RegulatorController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getRegulatorStatusInfo(orgID: any): Observable<StatusInfoM>;
    getRegulatorsType(orgID: any): Observable<RegulatorTypeI[]>;
    getRegulatorsEntities(regulatorTypeFilterArr: any, orgID: any): Observable<RegulatorsEntitiesI[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RegulatorController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RegulatorController>;
}
