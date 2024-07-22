import { HttpClient } from "@angular/common/http";
import { TimeZoneM } from '../model/time-zone.model';
import * as i0 from "@angular/core";
export declare class TimeZoneController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getTimeZone(): import("rxjs").Observable<TimeZoneM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeZoneController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimeZoneController>;
}
