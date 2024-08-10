import { Component, OnInit, Inject } from '@angular/core';

// import { ThemeOptions } from '@rootProject/theme-options';

import { PlanPriceType } from '../../enum/plan.enum';
import { ExpiringSubscriptionM } from '../../model/subscription.model';
import { SubscriptionService } from '../../service/subscription.service';

import { MATERIAL_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'lib-expiry-alert',
    templateUrl: './expiry-alert.component.html',
    styleUrls: ['./expiry-alert.component.scss']
})

export class ExpiryAlertComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    rootOrgID: any;
    applicationID: any;
    showSubscriptionMessage = false;
    message: string = '';
    showCloseBtn: boolean;
    buyLink: string = this.environment.ADMIN_URL + 'subscription-new/active';
    buyLinkMsg: string = "Click <a href='" + this.buyLink + "' target='blank'>here</a> to buy a subscription."
    expiredSubscribtionMsg = "Your subscription is expired. " + this.buyLinkMsg;
    subscriptionM = new ExpiringSubscriptionM();
    
    constructor(
        // public globals: ThemeOptions,
        @Inject('environment') private environment: any,
        private subscriptionService: SubscriptionService,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.applicationID = this.storageService.getStorage(['applicationID']);
        this.getMessage(this.rootOrgID, this.applicationID);
    }

    async getMessage(rootOrgID, applicationID) {
        this.subscriptionM = <ExpiringSubscriptionM>await this.subscriptionService.getExpiringSubscribtion(rootOrgID, applicationID);

        if (this.storageService.getStorage('hideSubscriptionMessage') != 'YES') {
            if (this.subscriptionM.subscriptionDayLeft <= 10 || this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE) {

                if (this.subscriptionM.subscriptionDayLeft == 0) {
                    this.message = `Your ${this.subscriptionM.planName} subscription expires today. ${this.buyLinkMsg}`;
                } else if (this.subscriptionM.subscriptionDayLeft == 1) {
                    this.message = `Your ${this.subscriptionM.planName} subscription expires in ${this.subscriptionM.subscriptionDayLeft} day. ${this.buyLinkMsg}`;
                } else if (this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE && this.subscriptionM.subscriptionDayLeft > 10) {
                    this.message = `You are currently on the ${this.subscriptionM.planName} subscription. ${this.buyLinkMsg}`;
                } else if (this.subscriptionM.subscriptionDayLeft <= 10  && this.subscriptionM.subscriptionDayLeft >= 0) {
                    this.message = `Your ${this.subscriptionM.planName} subscription expires in ${this.subscriptionM.subscriptionDayLeft} days. ${this.buyLinkMsg}`;
                } else if (this.subscriptionM.subscriptionDayLeft < 0) {
                    this.message = `Your ${this.subscriptionM.planName} subscription has expired. ${this.buyLinkMsg}`;
                }

                if (this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE) {
                    this.showCloseBtn = false;
                } else if (this.subscriptionM.subscriptionDayLeft < 0) {
                    this.showCloseBtn = false;
                } else {
                    this.showCloseBtn = true;
                }

                this.showSubscriptionMessage = true;
                // this.globals.toggleSubscriptionExpiring = true;
            }
        }

        if (this.subscriptionM.priceType == null) {
            this.showSubscriptionMessage = false;
        }
    }

    hideSubscriptionMessage() {
        // this.globals.toggleSubscriptionExpiring = false;
        this.storageService.setStorage('hideSubscriptionMessage', 'YES');
        this.showSubscriptionMessage = !('YES' == this.storageService.getStorage('hideSubscriptionMessage'));
    }
}
