import { TimeZoneController } from "../controller/time-zone.controller";
import { TimeZoneM } from '../model/time-zone.model';
import * as i0 from "@angular/core";
export declare class TimeZoneService {
    private timeZoneController;
    constructor(timeZoneController: TimeZoneController);
    getTimeZone(): Promise<TimeZoneM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeZoneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimeZoneService>;
}
