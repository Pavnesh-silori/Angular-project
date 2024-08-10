import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShiftM } from '../model/shift.model';
import * as i0 from "@angular/core";
export declare class ShiftController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getShift(orgID: any): Observable<ShiftM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShiftController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShiftController>;
}
