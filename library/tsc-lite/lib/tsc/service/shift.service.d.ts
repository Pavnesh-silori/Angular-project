import { ShiftM } from '../model/shift.model';
import { ShiftController } from '../controller/shift.controller';
import * as i0 from "@angular/core";
export declare class ShiftService {
    private shiftController;
    constructor(shiftController: ShiftController);
    getShift(orgID: any): Promise<ShiftM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShiftService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShiftService>;
}
