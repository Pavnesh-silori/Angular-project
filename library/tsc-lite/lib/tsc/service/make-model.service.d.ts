import { MakeModelI } from '../model/make-model.model';
import { MakeModelController } from '../controller/make-model.controller';
import * as i0 from "@angular/core";
export declare class MakeModelService {
    private makeModelController;
    constructor(makeModelController: MakeModelController);
    getMake(type: any): Promise<MakeModelI[]>;
    getModel(makeID: any, type: any): Promise<MakeModelI[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MakeModelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MakeModelService>;
}
