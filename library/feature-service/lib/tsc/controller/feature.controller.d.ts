import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class FeatureController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getFeatureByOrgID(orgID: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureController>;
}
