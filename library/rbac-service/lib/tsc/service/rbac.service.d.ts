import { RBACController } from '../controller/rbac.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class RBACService {
    private rBACController;
    constructor(rBACController: RBACController);
    getResourcePermissionByOrgIDAndUserID(orgID: number, userID: number): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBACService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RBACService>;
}
export declare class IsResourcePermission {
    private storageService;
    private netzeroAdminResourcePermission;
    private adminResourcePermission;
    private netzeroResourcePermission;
    private energyResourcePermission;
    private waterResourcePermission;
    private enviroResourcePermission;
    private connectResourcePermission;
    private offsetResourcePermission;
    private supplierResourcePermission;
    private employeeResourcePermission;
    constructor(storageService: StorageService);
    isResourcePermission(resourcePermissionP: Array<Array<string>>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IsResourcePermission, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IsResourcePermission>;
}
