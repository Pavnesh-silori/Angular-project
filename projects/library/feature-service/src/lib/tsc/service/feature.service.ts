import { Injectable } from '@angular/core';

import { ApplicationFeature } from '../enum/feature.enum';
import { ApplicationKeyID } from '@library/application-service';
import { FeatureController } from '../controller/feature.controller';
import { StorageService } from '@library/storage-service';

@Injectable({
    providedIn: 'root'
})

export class FeatureService {
    constructor(
        private featureController: FeatureController
    ) { }

    async getFeatureByOrgID(orgID: number): Promise<any> {
        let feature;

        try {
            feature = await this.featureController.getFeatureByOrgID(orgID).toPromise();
            return feature;
        } catch (error) {
            console.error('Error -', error);
        }
    }
}


@Injectable({
    providedIn: 'root'
})

export class IsFeatureAvailable {
    private netzeroAdminFeature = [];
    private adminFeature = [];
    private netzeroFeature = [];
    private energyFeature = [];
    private waterFeature = [];
    private enviroFeature = [];
    private connectFeature = [];
    private offsetFeature = [];
    private supplierFeature = [];
    private employeeFeature = [];

    constructor(
        private storageService: StorageService
    ) {
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

    isFeatureAvailable(featureKeyIDP: Array<Array<string>>) {
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
