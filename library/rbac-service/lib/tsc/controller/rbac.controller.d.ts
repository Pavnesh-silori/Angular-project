import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class RBACController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getResourcePermissionByOrgIDAndUserID(orgID: any, userID: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBACController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RBACController>;
}
