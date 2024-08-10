import { FeatureController } from '../controller/feature.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class FeatureService {
    private featureController;
    constructor(featureController: FeatureController);
    getFeatureByOrgID(orgID: number): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureService>;
}
export declare class IsFeatureAvailable {
    private storageService;
    private netzeroAdminFeature;
    private adminFeature;
    private netzeroFeature;
    private energyFeature;
    private waterFeature;
    private enviroFeature;
    private connectFeature;
    private offsetFeature;
    private supplierFeature;
    private employeeFeature;
    constructor(storageService: StorageService);
    isFeatureAvailable(featureKeyIDP: Array<Array<string>>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsFeatureAvailable, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IsFeatureAvailable>;
}
