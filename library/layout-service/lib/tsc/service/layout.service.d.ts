import { LayoutM } from '../model/layout.model';
import { LayoutController } from '../controller/layout.controller';
import * as i0 from "@angular/core";
export declare class LayoutService {
    private layoutController;
    constructor(layoutController: LayoutController);
    getLayoutByOrgID(orgID: any): Promise<LayoutM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutService>;
}
