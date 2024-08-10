import { Inject, Injectable } from '@angular/core';

import { ExpiringSubscriptionM } from '../model/subscription.model';
import { SubscriptionController } from '../controller/subscription.controller';

import { StorageService } from '@library/storage-service';

@Injectable({
    providedIn: 'root'
})

export class SubscriptionService {
    constructor(
        @Inject('environment') private environment: any,
        private storageService: StorageService,
        private subscriptionController: SubscriptionController
    ) { }

    async orgPlanType(orgID: number): Promise<any> {
        let res;

        try {
            res = await this.subscriptionController.orgPlanType(orgID).toPromise();
            return res;
        } catch (error) {
            console.error('error in orgPlanType -', error);
            return res;
        }
    }

    redirectOnSubscriptionExpire() {
        this.storageService.clearStorage();
        window.location.href = this.environment.ADMIN_URL + 'subscription-new/active';
    }

    getExpiringSubscribtion(orgID, applicationID): Promise<ExpiringSubscriptionM> {
        let expiringSubscriptionM = new ExpiringSubscriptionM();
        let expiringSubscription = new ExpiringSubscriptionM();

        return new Promise(resolve => {
            this.subscriptionController.getExpiringSubscription(orgID, applicationID).subscribe((res) => {
                expiringSubscriptionM = res;
            }, error => {
                expiringSubscriptionM = expiringSubscription;
                console.error('error in getExpiringSubscribtion -', error);
            }).add(() => {
                resolve(expiringSubscriptionM);
            });
        });
    }
}
