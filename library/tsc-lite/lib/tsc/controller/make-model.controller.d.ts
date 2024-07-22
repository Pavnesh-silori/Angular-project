import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MakeModelI } from '../model/make-model.model';
import * as i0 from "@angular/core";
export declare class MakeModelController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getMake(type: any): Observable<MakeModelI[]>;
    getModel(makeID: any, type: any): Observable<MakeModelI[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MakeModelController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MakeModelController>;
}
