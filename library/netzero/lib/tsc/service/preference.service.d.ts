import { PreferenceController } from '../controller/preference.controller';
import * as i0 from "@angular/core";
export declare class PreferenceService {
    private preferenceController;
    constructor(preferenceController: PreferenceController);
    getOrgPreference(orgID: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PreferenceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PreferenceService>;
}
