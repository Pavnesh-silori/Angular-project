import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import { __awaiter } from 'tslib';
import * as i1$1 from '@library/storage-service';
import * as i1 from '@angular/common/http';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MATERIAL_CONSTANT } from '@library/tsc-common';

class SubscriptionServiceService {
    constructor() { }
}
SubscriptionServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SubscriptionServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SubscriptionServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SubscriptionServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SubscriptionServiceComponent, selector: "lib-subscription-service", ngImport: i0, template: `
    <p>
      subscription-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-subscription-service',
                    template: `
    <p>
      subscription-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SubscriptionServiceModule {
    static forRoot(environment) {
        return {
            ngModule: SubscriptionServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
SubscriptionServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SubscriptionServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceModule, declarations: [SubscriptionServiceComponent], exports: [SubscriptionServiceComponent] });
SubscriptionServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SubscriptionServiceComponent
                    ],
                    imports: [],
                    exports: [
                        SubscriptionServiceComponent
                    ]
                }]
        }] });

const SUBSCRIPTION_CONSTANT = {
    BILLING_PROFILE_DELETE: 'BILLING_PROFILE_DELETE',
};

var PlanPriceType;
(function (PlanPriceType) {
    PlanPriceType["PLAN_PRICE_TYPE_FREE"] = "FREE";
    PlanPriceType["PLAN_PRICE_TYPE_PAID"] = "PAID";
})(PlanPriceType || (PlanPriceType = {}));
var PlanGroupType;
(function (PlanGroupType) {
    PlanGroupType["PLAN_STANDALONE"] = "STANDALONE";
    PlanGroupType["PLAN_BUNDLED"] = "BUNDLED";
})(PlanGroupType || (PlanGroupType = {}));

class ExpiringSubscriptionM {
}

class SubscriptionController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    orgPlanType(orgID) {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/plan-type`);
    }
    getExpiringSubscription(orgID, applicationID) {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/applications/${applicationID}/subscription/expiring`);
    }
}
SubscriptionController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
SubscriptionController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class SubscriptionService {
    constructor(environment, storageService, subscriptionController) {
        this.environment = environment;
        this.storageService = storageService;
        this.subscriptionController = subscriptionController;
    }
    orgPlanType(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            try {
                res = yield this.subscriptionController.orgPlanType(orgID).toPromise();
                return res;
            }
            catch (error) {
                console.error('error in orgPlanType -', error);
                return res;
            }
        });
    }
    redirectOnSubscriptionExpire() {
        this.storageService.clearStorage();
        window.location.href = this.environment.ADMIN_URL + 'subscription-new/active';
    }
    getExpiringSubscribtion(orgID, applicationID) {
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
SubscriptionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, deps: [{ token: 'environment' }, { token: i1$1.StorageService }, { token: SubscriptionController }], target: i0.ɵɵFactoryTarget.Injectable });
SubscriptionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i1$1.StorageService }, { type: SubscriptionController }]; } });

class ExpiryAlertComponent {
    constructor(
    // public globals: ThemeOptions,
    environment, subscriptionService, storageService) {
        this.environment = environment;
        this.subscriptionService = subscriptionService;
        this.storageService = storageService;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.showSubscriptionMessage = false;
        this.message = '';
        this.buyLink = this.environment.ADMIN_URL + 'subscription-new/active';
        this.buyLinkMsg = "Click <a href='" + this.buyLink + "' target='blank'>here</a> to buy a subscription.";
        this.expiredSubscribtionMsg = "Your subscription is expired. " + this.buyLinkMsg;
        this.subscriptionM = new ExpiringSubscriptionM();
    }
    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.applicationID = this.storageService.getStorage(['applicationID']);
        this.getMessage(this.rootOrgID, this.applicationID);
    }
    getMessage(rootOrgID, applicationID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subscriptionM = (yield this.subscriptionService.getExpiringSubscribtion(rootOrgID, applicationID));
            if (this.storageService.getStorage('hideSubscriptionMessage') != 'YES') {
                if (this.subscriptionM.subscriptionDayLeft <= 10 || this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE) {
                    if (this.subscriptionM.subscriptionDayLeft == 0) {
                        this.message = `Your ${this.subscriptionM.planName} subscription expires today. ${this.buyLinkMsg}`;
                    }
                    else if (this.subscriptionM.subscriptionDayLeft == 1) {
                        this.message = `Your ${this.subscriptionM.planName} subscription expires in ${this.subscriptionM.subscriptionDayLeft} day. ${this.buyLinkMsg}`;
                    }
                    else if (this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE && this.subscriptionM.subscriptionDayLeft > 10) {
                        this.message = `You are currently on the ${this.subscriptionM.planName} subscription. ${this.buyLinkMsg}`;
                    }
                    else if (this.subscriptionM.subscriptionDayLeft <= 10 && this.subscriptionM.subscriptionDayLeft >= 0) {
                        this.message = `Your ${this.subscriptionM.planName} subscription expires in ${this.subscriptionM.subscriptionDayLeft} days. ${this.buyLinkMsg}`;
                    }
                    else if (this.subscriptionM.subscriptionDayLeft < 0) {
                        this.message = `Your ${this.subscriptionM.planName} subscription has expired. ${this.buyLinkMsg}`;
                    }
                    if (this.subscriptionM.priceType == PlanPriceType.PLAN_PRICE_TYPE_FREE) {
                        this.showCloseBtn = false;
                    }
                    else if (this.subscriptionM.subscriptionDayLeft < 0) {
                        this.showCloseBtn = false;
                    }
                    else {
                        this.showCloseBtn = true;
                    }
                    this.showSubscriptionMessage = true;
                    // this.globals.toggleSubscriptionExpiring = true;
                }
            }
            if (this.subscriptionM.priceType == null) {
                this.showSubscriptionMessage = false;
            }
        });
    }
    hideSubscriptionMessage() {
        // this.globals.toggleSubscriptionExpiring = false;
        this.storageService.setStorage('hideSubscriptionMessage', 'YES');
        this.showSubscriptionMessage = !('YES' == this.storageService.getStorage('hideSubscriptionMessage'));
    }
}
ExpiryAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertComponent, deps: [{ token: 'environment' }, { token: SubscriptionService }, { token: i1$1.StorageService }], target: i0.ɵɵFactoryTarget.Component });
ExpiryAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ExpiryAlertComponent, selector: "lib-expiry-alert", ngImport: i0, template: "<div [ngClass]=\"{'showSubscriptionMessage': showSubscriptionMessage}\">\n    <div class=\"alert alert-danger subscriptionExpiringMessage centerAlign\"\n        [ngClass]=\"{'d-none': !showSubscriptionMessage}\">\n        <span class=\"text-light\" [innerHTML]=\"message\"></span>\n        <button *ngIf=\"showCloseBtn\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" type=\"button\" \n            class=\"btn-close rounded-circle btnCloseCustom pt-2\"\n            (click)=\"hideSubscriptionMessage()\">\n        </button>\n    </div>\n</div>\n\n", styles: [".showSubscriptionMessage{margin-bottom:50px!important}.subscriptionExpiringMessage{background-color:#b3261e;z-index:10;position:fixed;height:50px;width:100%;margin:0;border:none;border-radius:0}.btnCloseCustom{font-size:.7rem;position:absolute;right:12px}\n"], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-expiry-alert',
                    templateUrl: './expiry-alert.component.html',
                    styleUrls: ['./expiry-alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: SubscriptionService }, { type: i1$1.StorageService }]; } });

class ExpiryAlertModule {
}
ExpiryAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExpiryAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertModule, declarations: [ExpiryAlertComponent], imports: [CommonModule,
        MatRippleModule,
        NgbModule], exports: [ExpiryAlertComponent] });
ExpiryAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertModule, imports: [[
            CommonModule,
            MatRippleModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ExpiryAlertComponent
                    ],
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        NgbModule
                    ],
                    exports: [
                        ExpiryAlertComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of subscription-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExpiryAlertComponent, ExpiryAlertModule, PlanGroupType, PlanPriceType, SUBSCRIPTION_CONSTANT, SubscriptionService, SubscriptionServiceComponent, SubscriptionServiceModule, SubscriptionServiceService };
//# sourceMappingURL=library-subscription-service.js.map
