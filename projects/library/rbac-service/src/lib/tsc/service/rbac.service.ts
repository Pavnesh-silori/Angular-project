import { Injectable } from '@angular/core';

import { ApplicationResourcePermission } from '../enum/rbac.enum';
import { ApplicationKeyID } from '@library/application-service';
import { RBACController } from '../controller/rbac.controller';
import { StorageService } from '@library/storage-service';

@Injectable({
    providedIn: 'root'
})

export class RBACService {
    constructor(
        private rBACController: RBACController
    ) { }

    async getResourcePermissionByOrgIDAndUserID(orgID: number, userID: number): Promise<any> {
        let resourcePermission;

        try {
            resourcePermission = await this.rBACController.getResourcePermissionByOrgIDAndUserID(orgID, userID).toPromise();
            return resourcePermission;
        } catch (error) {
            console.error('Error -', error);
        }
    }
}

@Injectable({
    providedIn: 'root'
})

export class IsResourcePermission {
    private netzeroAdminResourcePermission = [];
    private adminResourcePermission = [];
    private netzeroResourcePermission = [];
    private energyResourcePermission = [];
    private waterResourcePermission = [];
    private enviroResourcePermission = [];
    private connectResourcePermission = [];
    private offsetResourcePermission = [];
    private supplierResourcePermission = [];
    private employeeResourcePermission = [];

    constructor(
        private storageService: StorageService,
    ) {
        this.netzeroAdminResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.NETZERO_ADMIN_RESOURCE_PERMISSION));
        this.adminResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION));
        this.netzeroResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.NETZERO_RESOURCE_PERMISSION));
        this.energyResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ENERGY_RESOURCE_PERMISSION));
        this.waterResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.WATER_RESOURCE_PERMISSION));
        this.enviroResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.ENVIRO_RESOURCE_PERMISSION));
        this.connectResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.CONNECT_RESOURCE_PERMISSION));
        this.offsetResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.OFFSET_RESOURCE_PERMISSION));
        this.supplierResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.SUPPLIER_RESOURCE_PERMISSION));
        this.employeeResourcePermission = JSON.parse(this.storageService.getStorage(ApplicationResourcePermission.EMPLOYEE_RESOURCE_PERMISSION));
    }

    isResourcePermission(resourcePermissionP: Array<Array<string>>) {
        let resourcePermission = [];

        for (const resourcePermissionPs of resourcePermissionP || []) {
            if (resourcePermissionPs[2] == 'BY_DEFAULT_PERMISSION') {
                return true;
            }

            switch (resourcePermissionPs[0]) {
                case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                    resourcePermission = this.netzeroAdminResourcePermission;
                    break;
                case ApplicationKeyID.ADMIN_KEY_ID:
                    resourcePermission = this.adminResourcePermission;
                    break;
                case ApplicationKeyID.NETZERO_KEY_ID:
                    resourcePermission = this.netzeroResourcePermission;
                    break;
                case ApplicationKeyID.ENERGY_KEY_ID:
                    resourcePermission = this.energyResourcePermission;
                    break;
                case ApplicationKeyID.WATER_KEY_ID:
                    resourcePermission = this.waterResourcePermission;
                    break;
                case ApplicationKeyID.ENVIRO_KEY_ID:
                    resourcePermission = this.enviroResourcePermission;
                    break;
                case ApplicationKeyID.CONNECT_KEY_ID:
                    resourcePermission = this.connectResourcePermission;
                    break;
                case ApplicationKeyID.OFFSET_KEY_ID:
                    resourcePermission = this.offsetResourcePermission;
                    break;
                case ApplicationKeyID.SUPPLIER_KEY_ID:
                    resourcePermission = this.supplierResourcePermission;
                    break;
                case ApplicationKeyID.EMPLOYEE_KEY_ID:
                    resourcePermission = this.employeeResourcePermission;
                    break;
                default:
                    resourcePermission = [];
                    break;
            }

            for (const resource of resourcePermission || []) {
                if (resourcePermissionPs[1] == resource.resource) {
                    for (const permission of resource.permissions || []) {
                        if (permission == resourcePermissionPs[2]) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
}
