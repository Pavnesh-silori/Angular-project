import { HttpClient } from "@angular/common/http";
import { LookupRequestM, LookupValueM } from "../model/lookup.model";
import * as i0 from "@angular/core";
export declare class LookupController {
    private http;
    constructor(http: HttpClient);
    getLookupValue(baseUrl: string, lookup: LookupRequestM[]): import("rxjs").Observable<LookupValueM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LookupController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LookupController>;
}
