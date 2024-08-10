import { UnitM } from '../model/unit.model';
import { UnitController } from '../controller/unit.controller';
import * as i0 from "@angular/core";
export declare class UnitService {
    private unitController;
    constructor(unitController: UnitController);
    getUnitByParameterID(orgID: any, parameterID: any): Promise<UnitM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnitService>;
}
