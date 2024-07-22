import { ConsumptionParameterM, ParameterM, SavedConsumptionParameterM } from '../model/parameter.model';
import { ParameterController } from '../controller/parameter.controller';
import * as i0 from "@angular/core";
export declare class ParameterService {
    private parameterController;
    constructor(parameterController: ParameterController);
    getParameterByOrgID(orgID: any): Promise<ParameterM[]>;
    getParameterByLayoutID(orgID: any): Promise<ParameterM[]>;
    getParameterByDeviceID(orgID: any, requestBody: any): Promise<ParameterM[]>;
    getConsumptionParameter(orgID: any): Promise<ConsumptionParameterM>;
    getSavedConsumptionParameter(orgID: any): Promise<SavedConsumptionParameterM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ParameterService>;
}
