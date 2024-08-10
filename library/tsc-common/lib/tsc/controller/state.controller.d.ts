import { HttpClient } from "@angular/common/http";
import { StateM } from '../model/state.model';
import * as i0 from "@angular/core";
export declare class StateController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getState(countryCode: any): import("rxjs").Observable<StateM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateController>;
}
