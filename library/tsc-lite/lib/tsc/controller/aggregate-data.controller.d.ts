import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class AggregateDataController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getAggregateData(orgID: any, requestBody: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateDataController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AggregateDataController>;
}
