import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { ApplicationResourcePermission } from '../enum/rbac.enum';
import { ApplicationKeyID } from '@library/application-service';
import * as i0 from "@angular/core";
import * as i1 from "../controller/rbac.controller";
import * as i2 from "@library/storage-service";
export class RBACService {
    constructor(rBACController) {
        this.rBACController = rBACController;
    }
    getResourcePermissionByOrgIDAndUserID(orgID, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let resourcePermission;
            try {
                resourcePermission = yield this.rBACController.getResourcePermissionByOrgIDAndUserID(orgID, userID).toPromise();
                return resourcePermission;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
RBACService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, deps: [{ token: i1.RBACController }], target: i0.ɵɵFactoryTarget.Injectable });
RBACService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.RBACController }]; } });
export class IsResourcePermission {
    constructor(storageService) {
        this.storageService = storageService;
        this.netzeroAdminResourcePermission = [];
        this.adminResourcePermission = [];
        this.netzeroResourcePermission = [];
        this.energyResourcePermission = [];
        this.waterResourcePermission = [];
        this.enviroResourcePermission = [];
        this.connectResourcePermission = [];
        this.offsetResourcePermission = [];
        this.supplierResourcePermission = [];
        this.employeeResourcePermission = [];
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
    isResourcePermission(resourcePermissionP) {
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
IsResourcePermission.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, deps: [{ token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
IsResourcePermission.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsResourcePermission, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9yYmFjLXNlcnZpY2Uvc3JjL2xpYi90c2Mvc2VydmljZS9yYmFjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFRaEUsTUFBTSxPQUFPLFdBQVc7SUFDcEIsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdEMsQ0FBQztJQUVDLHFDQUFxQyxDQUFDLEtBQWEsRUFBRSxNQUFjOztZQUNyRSxJQUFJLGtCQUFrQixDQUFDO1lBRXZCLElBQUk7Z0JBQ0Esa0JBQWtCLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHFDQUFxQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEgsT0FBTyxrQkFBa0IsQ0FBQzthQUM3QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQztLQUFBOzt5R0FkUSxXQUFXOzZHQUFYLFdBQVcsY0FIUixNQUFNOzRGQUdULFdBQVc7a0JBSnZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOztBQXVCRCxNQUFNLE9BQU8sb0JBQW9CO0lBWTdCLFlBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBWmxDLG1DQUE4QixHQUFHLEVBQUUsQ0FBQztRQUNwQyw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsOEJBQXlCLEdB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SyxDQUFDO0lBQ2pCLENBQUM7O2tIQWxGUSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUhqQixNQUFNOzRGQUdULG9CQUFvQjtrQkFKaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVzb3VyY2VQZXJtaXNzaW9uIH0gZnJvbSAnLi4vZW51bS9yYmFjLmVudW0nO1xuaW1wb3J0IHsgQXBwbGljYXRpb25LZXlJRCB9IGZyb20gJ0BsaWJyYXJ5L2FwcGxpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgUkJBQ0NvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3JiYWMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSQkFDU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgckJBQ0NvbnRyb2xsZXI6IFJCQUNDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldFJlc291cmNlUGVybWlzc2lvbkJ5T3JnSURBbmRVc2VySUQob3JnSUQ6IG51bWJlciwgdXNlcklEOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgcmVzb3VyY2VQZXJtaXNzaW9uO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSBhd2FpdCB0aGlzLnJCQUNDb250cm9sbGVyLmdldFJlc291cmNlUGVybWlzc2lvbkJ5T3JnSURBbmRVc2VySUQob3JnSUQsIHVzZXJJRCkudG9Qcm9taXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VQZXJtaXNzaW9uO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIElzUmVzb3VyY2VQZXJtaXNzaW9uIHtcbiAgICBwcml2YXRlIG5ldHplcm9BZG1pblJlc291cmNlUGVybWlzc2lvbiA9IFtdO1xuICAgIHByaXZhdGUgYWRtaW5SZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcbiAgICBwcml2YXRlIG5ldHplcm9SZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcbiAgICBwcml2YXRlIGVuZXJneVJlc291cmNlUGVybWlzc2lvbiA9IFtdO1xuICAgIHByaXZhdGUgd2F0ZXJSZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcbiAgICBwcml2YXRlIGVudmlyb1Jlc291cmNlUGVybWlzc2lvbiA9IFtdO1xuICAgIHByaXZhdGUgY29ubmVjdFJlc291cmNlUGVybWlzc2lvbiA9IFtdO1xuICAgIHByaXZhdGUgb2Zmc2V0UmVzb3VyY2VQZXJtaXNzaW9uID0gW107XG4gICAgcHJpdmF0ZSBzdXBwbGllclJlc291cmNlUGVybWlzc2lvbiA9IFtdO1xuICAgIHByaXZhdGUgZW1wbG95ZWVSZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5uZXR6ZXJvQWRtaW5SZXNvdXJjZVBlcm1pc3Npb24gPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvblJlc291cmNlUGVybWlzc2lvbi5ORVRaRVJPX0FETUlOX1JFU09VUkNFX1BFUk1JU1NJT04pKTtcbiAgICAgICAgdGhpcy5hZG1pblJlc291cmNlUGVybWlzc2lvbiA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKEFwcGxpY2F0aW9uUmVzb3VyY2VQZXJtaXNzaW9uLkFETUlOX1JFU09VUkNFX1BFUk1JU1NJT04pKTtcbiAgICAgICAgdGhpcy5uZXR6ZXJvUmVzb3VyY2VQZXJtaXNzaW9uID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25SZXNvdXJjZVBlcm1pc3Npb24uTkVUWkVST19SRVNPVVJDRV9QRVJNSVNTSU9OKSk7XG4gICAgICAgIHRoaXMuZW5lcmd5UmVzb3VyY2VQZXJtaXNzaW9uID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25SZXNvdXJjZVBlcm1pc3Npb24uRU5FUkdZX1JFU09VUkNFX1BFUk1JU1NJT04pKTtcbiAgICAgICAgdGhpcy53YXRlclJlc291cmNlUGVybWlzc2lvbiA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKEFwcGxpY2F0aW9uUmVzb3VyY2VQZXJtaXNzaW9uLldBVEVSX1JFU09VUkNFX1BFUk1JU1NJT04pKTtcbiAgICAgICAgdGhpcy5lbnZpcm9SZXNvdXJjZVBlcm1pc3Npb24gPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvblJlc291cmNlUGVybWlzc2lvbi5FTlZJUk9fUkVTT1VSQ0VfUEVSTUlTU0lPTikpO1xuICAgICAgICB0aGlzLmNvbm5lY3RSZXNvdXJjZVBlcm1pc3Npb24gPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvblJlc291cmNlUGVybWlzc2lvbi5DT05ORUNUX1JFU09VUkNFX1BFUk1JU1NJT04pKTtcbiAgICAgICAgdGhpcy5vZmZzZXRSZXNvdXJjZVBlcm1pc3Npb24gPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvblJlc291cmNlUGVybWlzc2lvbi5PRkZTRVRfUkVTT1VSQ0VfUEVSTUlTU0lPTikpO1xuICAgICAgICB0aGlzLnN1cHBsaWVyUmVzb3VyY2VQZXJtaXNzaW9uID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25SZXNvdXJjZVBlcm1pc3Npb24uU1VQUExJRVJfUkVTT1VSQ0VfUEVSTUlTU0lPTikpO1xuICAgICAgICB0aGlzLmVtcGxveWVlUmVzb3VyY2VQZXJtaXNzaW9uID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25SZXNvdXJjZVBlcm1pc3Npb24uRU1QTE9ZRUVfUkVTT1VSQ0VfUEVSTUlTU0lPTikpO1xuICAgIH1cblxuICAgIGlzUmVzb3VyY2VQZXJtaXNzaW9uKHJlc291cmNlUGVybWlzc2lvblA6IEFycmF5PEFycmF5PHN0cmluZz4+KSB7XG4gICAgICAgIGxldCByZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJlc291cmNlUGVybWlzc2lvblBzIG9mIHJlc291cmNlUGVybWlzc2lvblAgfHwgW10pIHtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZVBlcm1pc3Npb25Qc1syXSA9PSAnQllfREVGQVVMVF9QRVJNSVNTSU9OJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlUGVybWlzc2lvblBzWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fQURNSU5fS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSB0aGlzLm5ldHplcm9BZG1pblJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VQZXJtaXNzaW9uID0gdGhpcy5hZG1pblJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSB0aGlzLm5ldHplcm9SZXNvdXJjZVBlcm1pc3Npb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSB0aGlzLmVuZXJneVJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VQZXJtaXNzaW9uID0gdGhpcy53YXRlclJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVOVklST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlUGVybWlzc2lvbiA9IHRoaXMuZW52aXJvUmVzb3VyY2VQZXJtaXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQ09OTkVDVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlUGVybWlzc2lvbiA9IHRoaXMuY29ubmVjdFJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk9GRlNFVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlUGVybWlzc2lvbiA9IHRoaXMub2Zmc2V0UmVzb3VyY2VQZXJtaXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuU1VQUExJRVJfS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSB0aGlzLnN1cHBsaWVyUmVzb3VyY2VQZXJtaXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU1QTE9ZRUVfS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSB0aGlzLmVtcGxveWVlUmVzb3VyY2VQZXJtaXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVBlcm1pc3Npb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgcmVzb3VyY2VQZXJtaXNzaW9uIHx8IFtdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlUGVybWlzc2lvblBzWzFdID09IHJlc291cmNlLnJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGVybWlzc2lvbiBvZiByZXNvdXJjZS5wZXJtaXNzaW9ucyB8fCBbXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24gPT0gcmVzb3VyY2VQZXJtaXNzaW9uUHNbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19