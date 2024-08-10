import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { ApplicationFeature } from '../enum/feature.enum';
import { ApplicationKeyID } from '@library/application-service';
import * as i0 from "@angular/core";
import * as i1 from "../controller/feature.controller";
import * as i2 from "@library/storage-service";
export class FeatureService {
    constructor(featureController) {
        this.featureController = featureController;
    }
    getFeatureByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let feature;
            try {
                feature = yield this.featureController.getFeatureByOrgID(orgID).toPromise();
                return feature;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
FeatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, deps: [{ token: i1.FeatureController }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.FeatureController }]; } });
export class IsFeatureAvailable {
    constructor(storageService) {
        this.storageService = storageService;
        this.netzeroAdminFeature = [];
        this.adminFeature = [];
        this.netzeroFeature = [];
        this.energyFeature = [];
        this.waterFeature = [];
        this.enviroFeature = [];
        this.connectFeature = [];
        this.offsetFeature = [];
        this.supplierFeature = [];
        this.employeeFeature = [];
        this.netzeroAdminFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.NETZERO_ADMIN_FEATURE));
        this.adminFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ADMIN_FEATURE));
        this.netzeroFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.NETZERO_FEATURE));
        this.energyFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ENERGY_FEATURE));
        this.waterFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.WATER_FEATURE));
        this.enviroFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.ENVIRO_FEATURE));
        this.connectFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.CONNECT_FEATURE));
        this.offsetFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.OFFSET_FEATURE));
        this.supplierFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.SUPPLIER_FEATURE));
        this.employeeFeature = JSON.parse(this.storageService.getStorage(ApplicationFeature.EMPLOYEE_FEATURE));
    }
    isFeatureAvailable(featureKeyIDP) {
        let storageFeature = [];
        let paramFeature;
        if (featureKeyIDP) {
            paramFeature = JSON.stringify(featureKeyIDP[1]).slice(1, -1);
            if (paramFeature == 'BY_DEFAULT_FEATURE') {
                return true;
            }
            for (const featureKeyIDPs of featureKeyIDP[0] || []) {
                switch (featureKeyIDPs) {
                    case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                        storageFeature = this.netzeroAdminFeature;
                        break;
                    case ApplicationKeyID.ADMIN_KEY_ID:
                        storageFeature = this.adminFeature;
                        break;
                    case ApplicationKeyID.NETZERO_KEY_ID:
                        storageFeature = this.netzeroFeature;
                        break;
                    case ApplicationKeyID.ENERGY_KEY_ID:
                        storageFeature = this.energyFeature;
                        break;
                    case ApplicationKeyID.WATER_KEY_ID:
                        storageFeature = this.waterFeature;
                        break;
                    case ApplicationKeyID.ENVIRO_KEY_ID:
                        storageFeature = this.enviroFeature;
                        break;
                    case ApplicationKeyID.CONNECT_KEY_ID:
                        storageFeature = this.connectFeature;
                        break;
                    case ApplicationKeyID.OFFSET_KEY_ID:
                        storageFeature = this.offsetFeature;
                        break;
                    case ApplicationKeyID.SUPPLIER_KEY_ID:
                        storageFeature = this.supplierFeature;
                        break;
                    case ApplicationKeyID.EMPLOYEE_KEY_ID:
                        storageFeature = this.employeeFeature;
                        break;
                    default:
                        storageFeature = [];
                        break;
                }
                const matchingFeature = storageFeature.find((f) => f['keyID'] == paramFeature);
                if (matchingFeature && matchingFeature['count'] > 0) {
                    return true;
                }
            }
        }
        return false;
    }
}
IsFeatureAvailable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, deps: [{ token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
IsFeatureAvailable.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: IsFeatureAvailable, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9mZWF0dXJlLXNlcnZpY2Uvc3JjL2xpYi90c2Mvc2VydmljZS9mZWF0dXJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFRaEUsTUFBTSxPQUFPLGNBQWM7SUFDdkIsWUFDWSxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM1QyxDQUFDO0lBRUMsaUJBQWlCLENBQUMsS0FBYTs7WUFDakMsSUFBSSxPQUFPLENBQUM7WUFFWixJQUFJO2dCQUNBLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDNUUsT0FBTyxPQUFPLENBQUM7YUFDbEI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUM7S0FBQTs7NEdBZFEsY0FBYztnSEFBZCxjQUFjLGNBSFgsTUFBTTs0RkFHVCxjQUFjO2tCQUoxQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7QUF3QkQsTUFBTSxPQUFPLGtCQUFrQjtJQVkzQixZQUNZLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVpsQyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7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a0I7b0hBQWxCLGtCQUFrQixjQUhmLE1BQU07NEZBR1Qsa0JBQWtCO2tCQUo5QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwbGljYXRpb25GZWF0dXJlIH0gZnJvbSAnLi4vZW51bS9mZWF0dXJlLmVudW0nO1xuaW1wb3J0IHsgQXBwbGljYXRpb25LZXlJRCB9IGZyb20gJ0BsaWJyYXJ5L2FwcGxpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2ZlYXR1cmUuY29udHJvbGxlcic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmVhdHVyZUNvbnRyb2xsZXI6IEZlYXR1cmVDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldEZlYXR1cmVCeU9yZ0lEKG9yZ0lEOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBsZXQgZmVhdHVyZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmVhdHVyZSA9IGF3YWl0IHRoaXMuZmVhdHVyZUNvbnRyb2xsZXIuZ2V0RmVhdHVyZUJ5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJc0ZlYXR1cmVBdmFpbGFibGUge1xuICAgIHByaXZhdGUgbmV0emVyb0FkbWluRmVhdHVyZSA9IFtdO1xuICAgIHByaXZhdGUgYWRtaW5GZWF0dXJlID0gW107XG4gICAgcHJpdmF0ZSBuZXR6ZXJvRmVhdHVyZSA9IFtdO1xuICAgIHByaXZhdGUgZW5lcmd5RmVhdHVyZSA9IFtdO1xuICAgIHByaXZhdGUgd2F0ZXJGZWF0dXJlID0gW107XG4gICAgcHJpdmF0ZSBlbnZpcm9GZWF0dXJlID0gW107XG4gICAgcHJpdmF0ZSBjb25uZWN0RmVhdHVyZSA9IFtdO1xuICAgIHByaXZhdGUgb2Zmc2V0RmVhdHVyZSA9IFtdO1xuICAgIHByaXZhdGUgc3VwcGxpZXJGZWF0dXJlID0gW107XG4gICAgcHJpdmF0ZSBlbXBsb3llZUZlYXR1cmUgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLm5ldHplcm9BZG1pbkZlYXR1cmUgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvbkZlYXR1cmUuTkVUWkVST19BRE1JTl9GRUFUVVJFKSk7XG4gICAgICAgIHRoaXMuYWRtaW5GZWF0dXJlID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLkFETUlOX0ZFQVRVUkUpKTtcbiAgICAgICAgdGhpcy5uZXR6ZXJvRmVhdHVyZSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKEFwcGxpY2F0aW9uRmVhdHVyZS5ORVRaRVJPX0ZFQVRVUkUpKTtcbiAgICAgICAgdGhpcy5lbmVyZ3lGZWF0dXJlID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLkVORVJHWV9GRUFUVVJFKSk7XG4gICAgICAgIHRoaXMud2F0ZXJGZWF0dXJlID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLldBVEVSX0ZFQVRVUkUpKTtcbiAgICAgICAgdGhpcy5lbnZpcm9GZWF0dXJlID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLkVOVklST19GRUFUVVJFKSk7XG4gICAgICAgIHRoaXMuY29ubmVjdEZlYXR1cmUgPSBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZShBcHBsaWNhdGlvbkZlYXR1cmUuQ09OTkVDVF9GRUFUVVJFKSk7XG4gICAgICAgIHRoaXMub2Zmc2V0RmVhdHVyZSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKEFwcGxpY2F0aW9uRmVhdHVyZS5PRkZTRVRfRkVBVFVSRSkpO1xuICAgICAgICB0aGlzLnN1cHBsaWVyRmVhdHVyZSA9IEpTT04ucGFyc2UodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKEFwcGxpY2F0aW9uRmVhdHVyZS5TVVBQTElFUl9GRUFUVVJFKSk7XG4gICAgICAgIHRoaXMuZW1wbG95ZWVGZWF0dXJlID0gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLkVNUExPWUVFX0ZFQVRVUkUpKTtcbiAgICB9XG5cbiAgICBpc0ZlYXR1cmVBdmFpbGFibGUoZmVhdHVyZUtleUlEUDogQXJyYXk8QXJyYXk8c3RyaW5nPj4pIHtcbiAgICAgICAgbGV0IHN0b3JhZ2VGZWF0dXJlID0gW107XG4gICAgICAgIGxldCBwYXJhbUZlYXR1cmU7XG5cbiAgICAgICAgaWYgKGZlYXR1cmVLZXlJRFApIHtcbiAgICAgICAgICAgIHBhcmFtRmVhdHVyZSA9IEpTT04uc3RyaW5naWZ5KGZlYXR1cmVLZXlJRFBbMV0pLnNsaWNlKDEsIC0xKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtRmVhdHVyZSA9PSAnQllfREVGQVVMVF9GRUFUVVJFJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZlYXR1cmVLZXlJRFBzIG9mIGZlYXR1cmVLZXlJRFBbMF0gfHwgW10pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZlYXR1cmVLZXlJRFBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0FETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gdGhpcy5uZXR6ZXJvQWRtaW5GZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlRmVhdHVyZSA9IHRoaXMuYWRtaW5GZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gdGhpcy5uZXR6ZXJvRmVhdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gdGhpcy5lbmVyZ3lGZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5XQVRFUl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlRmVhdHVyZSA9IHRoaXMud2F0ZXJGZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTlZJUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUZlYXR1cmUgPSB0aGlzLmVudmlyb0ZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkNPTk5FQ1RfS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUZlYXR1cmUgPSB0aGlzLmNvbm5lY3RGZWF0dXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5PRkZTRVRfS0VZX0lEOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUZlYXR1cmUgPSB0aGlzLm9mZnNldEZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELlNVUFBMSUVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gdGhpcy5zdXBwbGllckZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVNUExPWUVFX0tFWV9JRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gdGhpcy5lbXBsb3llZUZlYXR1cmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VGZWF0dXJlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGluZ0ZlYXR1cmUgPSBzdG9yYWdlRmVhdHVyZS5maW5kKChmKSA9PiBmWydrZXlJRCddID09IHBhcmFtRmVhdHVyZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdGZWF0dXJlICYmIG1hdGNoaW5nRmVhdHVyZVsnY291bnQnXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=