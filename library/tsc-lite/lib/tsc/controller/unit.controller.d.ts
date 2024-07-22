import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitM } from '../model/unit.model';
import * as i0 from "@angular/core";
export declare class UnitController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getUnitByParameterID(orgID: any, parameterID: any): Observable<UnitM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnitController>;
}
