import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OldUnitM } from '../model/unit.model';
import * as i0 from "@angular/core";
export declare class UnitController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getUnit(filters: string[]): Observable<OldUnitM[]>;
    getUnitUsingPublicUrl(filters: string[]): Observable<OldUnitM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnitController>;
}
