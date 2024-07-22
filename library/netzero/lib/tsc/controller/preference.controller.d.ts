import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class PreferenceController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getOrgPreference(orgID: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PreferenceController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PreferenceController>;
}
