import { ParameterM } from '../model/parameter.model';
import { ParameterController } from '../controller/parameter.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ParameterService {
    private parameterController;
    private storageService;
    constructor(parameterController: ParameterController, storageService: StorageService);
    getParameterByLayoutID(orgID: any): Promise<ParameterM[]>;
    getParameterByDeviceID(orgID: any, requestBody: any): Promise<ParameterM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ParameterService>;
}
