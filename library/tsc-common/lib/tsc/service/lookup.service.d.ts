import { LookupController } from "../controller/lookup.controller";
import { LookupRequestM, LookupValueM } from "../model/lookup.model";
import * as i0 from "@angular/core";
export declare class LookupService {
    private lookupController;
    constructor(lookupController: LookupController);
    getLookup(baseUrl: string, lookup: LookupRequestM[]): Promise<LookupValueM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LookupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LookupService>;
}
