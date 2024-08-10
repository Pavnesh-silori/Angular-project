import { SystemController } from "../controller/system.controller";
import * as i0 from "@angular/core";
export declare class SystemService {
    private systemController;
    constructor(systemController: SystemController);
    getSystemInfo(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemService>;
}
