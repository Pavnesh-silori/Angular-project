import * as i0 from "@angular/core";
export declare class StatusService {
    constructor();
    getStatusClass(status: string): string;
    getStatusValue(status: string): string;
    getYesByBoolean(value: boolean): string;
    getActiveByBoolean(value: boolean): string;
    getEnableByBoolean(value: boolean): string;
    getYesActiveClassByBoolean(value: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatusService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatusService>;
}
