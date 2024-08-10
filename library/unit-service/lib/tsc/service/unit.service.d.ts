import { UnitM, OldUnitM } from '../model/unit.model';
import { UnitController } from '../controller/unit.controller';
import * as i0 from "@angular/core";
export declare class UnitService {
    private unitController;
    constructor(unitController: UnitController);
    getUnit(apiFilter: any): Promise<UnitM[]>;
    getUnitUsingPublicUrl(apiFilter: any): Promise<UnitM[]>;
    transformUnit(oldUnit: OldUnitM): UnitM;
    filterUnit(unit: UnitM[], unitTypeFilter: string[]): UnitM[];
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnitService>;
}
