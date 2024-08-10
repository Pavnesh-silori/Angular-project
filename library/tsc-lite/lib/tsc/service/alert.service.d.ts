import { AlertM } from "../model/alert.model";
import * as i0 from "@angular/core";
export declare class AlertService {
    setAlertProperties(alertObject: AlertM, label: string, content: string, type: string, icon: string): AlertM;
    resetAlertProperties(alertObject: AlertM): AlertM;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
