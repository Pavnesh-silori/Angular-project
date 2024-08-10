import { Injectable } from '@angular/core';
// import { Utility } from '@rootApp/net-zero/common/function/net-zero.function';
import { SubscriptionController } from '@Admin/controller/subscription.controller';
import { ExpiringSubscriptionM, SubscriptionM } from '@Admin/model/subscription.model';

@Injectable({
    providedIn: 'root'
})

export class SubscriptionService {
    subscriptionM: SubscriptionM[] = [];

    constructor(
        // private utility: Utility,
        private subscriptionService: SubscriptionController,
    ) { }

    getSubscriptionByRootOrgID(rootOrgID): Promise<SubscriptionM[]> {
        return new Promise(resolve => {
            this.subscriptionService.getSubscriptionByRootOrgID(rootOrgID).subscribe(
                (getSubscriptionByRootOrgIDRes: SubscriptionM[]) => {
                    this.subscriptionM = getSubscriptionByRootOrgIDRes;
                    if (this.subscriptionM.length == 0) {
                        // this.utility.openToast('Info', 'There are no subscriptions available.Please contact admin.', 'info');
                    }
                },
                error => {
                    console.log('Error in getSubscriptionByRootOrgID -', error);
                    // this.utility.openToast('Error', 'Error in getting Subscription.', 'error');
                }
            ).add(() => {
                resolve(this.subscriptionM);
            });
        });
    }

    getExpiringSubscribtion(orgID, applicationID): Promise<ExpiringSubscriptionM> {
        let expiringSubscriptionM = new ExpiringSubscriptionM();
        let expiringSubscription = new ExpiringSubscriptionM();

        return new Promise(resolve => {
            this.subscriptionService.getExpiringSubscription(orgID, applicationID).subscribe((res) => {
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
