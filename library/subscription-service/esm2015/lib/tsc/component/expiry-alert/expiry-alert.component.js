import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
// import { ThemeOptions } from '@rootProject/theme-options';
import { PlanPriceType } from '../../enum/plan.enum';
import { ExpiringSubscriptionM } from '../../model/subscription.model';
import { MATERIAL_CONSTANT } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "../../service/subscription.service";
import * as i2 from "@library/storage-service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
export class ExpiryAlertComponent {
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
ExpiryAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ExpiryAlertComponent, deps: [{ token: 'environment' }, { token: i1.SubscriptionService }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Component });
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
                }] }, { type: i1.SubscriptionService }, { type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwaXJ5LWFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvc3Vic2NyaXB0aW9uLXNlcnZpY2Uvc3JjL2xpYi90c2MvY29tcG9uZW50L2V4cGlyeS1hbGVydC9leHBpcnktYWxlcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9zdWJzY3JpcHRpb24tc2VydmljZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZXhwaXJ5LWFsZXJ0L2V4cGlyeS1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsNkRBQTZEO0FBRTdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0FBU3hELE1BQU0sT0FBTyxvQkFBb0I7SUFZN0I7SUFDSSxnQ0FBZ0M7SUFDRCxXQUFnQixFQUN2QyxtQkFBd0MsRUFDeEMsY0FBOEI7UUFGUCxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUN2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWYxQyxzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUd0Qyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixZQUFPLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7UUFDekUsZUFBVSxHQUFXLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcs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QVksR0FBRyxJQUFJLENBQUM7cUJBQzVCO29CQUVELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLGtEQUFrRDtpQkFDckQ7YUFDSjtZQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQztLQUFBO0lBRUQsdUJBQXVCO1FBQ25CLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7a0hBakVRLG9CQUFvQixrQkFjakIsYUFBYTtzR0FkaEIsb0JBQW9CLHdEQ2pCakMsNGpCQVdBOzRGRE1hLG9CQUFvQjtrQkFOaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDL0M7OzBCQWdCUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGltcG9ydCB7IFRoZW1lT3B0aW9ucyB9IGZyb20gJ0Byb290UHJvamVjdC90aGVtZS1vcHRpb25zJztcblxuaW1wb3J0IHsgUGxhblByaWNlVHlwZSB9IGZyb20gJy4uLy4uL2VudW0vcGxhbi5lbnVtJztcbmltcG9ydCB7IEV4cGlyaW5nU3Vic2NyaXB0aW9uTSB9IGZyb20gJy4uLy4uL21vZGVsL3N1YnNjcmlwdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9zdWJzY3JpcHRpb24uc2VydmljZSc7XG5cbmltcG9ydCB7IE1BVEVSSUFMX0NPTlNUQU5UIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWV4cGlyeS1hbGVydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cGlyeS1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXhwaXJ5LWFsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBFeHBpcnlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgTUFURVJJQUxfQ09OU1RBTlQgPSBNQVRFUklBTF9DT05TVEFOVDtcbiAgICByb290T3JnSUQ6IGFueTtcbiAgICBhcHBsaWNhdGlvbklEOiBhbnk7XG4gICAgc2hvd1N1YnNjcmlwdGlvbk1lc3NhZ2UgPSBmYWxzZTtcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnJztcbiAgICBzaG93Q2xvc2VCdG46IGJvb2xlYW47XG4gICAgYnV5TGluazogc3RyaW5nID0gdGhpcy5lbnZpcm9ubWVudC5BRE1JTl9VUkwgKyAnc3Vic2NyaXB0aW9uLW5ldy9hY3RpdmUnO1xuICAgIGJ1eUxpbmtNc2c6IHN0cmluZyA9IFwiQ2xpY2sgPGEgaHJlZj0nXCIgKyB0aGlzLmJ1eUxpbmsgKyBcIicgdGFyZ2V0PSdibGFuayc+aGVyZTwvYT4gdG8gYnV5IGEgc3Vic2NyaXB0aW9uLlwiXG4gICAgZXhwaXJlZFN1YnNjcmlidGlvbk1zZyA9IFwiWW91ciBzdWJzY3JpcHRpb24gaXMgZXhwaXJlZC4gXCIgKyB0aGlzLmJ1eUxpbmtNc2c7XG4gICAgc3Vic2NyaXB0aW9uTSA9IG5ldyBFeHBpcmluZ1N1YnNjcmlwdGlvbk0oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLy8gcHVibGljIGdsb2JhbHM6IFRoZW1lT3B0aW9ucyxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uU2VydmljZTogU3Vic2NyaXB0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm9vdE9yZ0lEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKFsncm9vdE9yZ0lEJ10pO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoWydhcHBsaWNhdGlvbklEJ10pO1xuICAgICAgICB0aGlzLmdldE1lc3NhZ2UodGhpcy5yb290T3JnSUQsIHRoaXMuYXBwbGljYXRpb25JRCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWVzc2FnZShyb290T3JnSUQsIGFwcGxpY2F0aW9uSUQpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25NID0gPEV4cGlyaW5nU3Vic2NyaXB0aW9uTT5hd2FpdCB0aGlzLnN1YnNjcmlwdGlvblNlcnZpY2UuZ2V0RXhwaXJpbmdTdWJzY3JpYnRpb24ocm9vdE9yZ0lELCBhcHBsaWNhdGlvbklEKTtcblxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdoaWRlU3Vic2NyaXB0aW9uTWVzc2FnZScpICE9ICdZRVMnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25NLnN1YnNjcmlwdGlvbkRheUxlZnQgPD0gMTAgfHwgdGhpcy5zdWJzY3JpcHRpb25NLnByaWNlVHlwZSA9PSBQbGFuUHJpY2VUeXBlLlBMQU5fUFJJQ0VfVFlQRV9GUkVFKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25NLnN1YnNjcmlwdGlvbkRheUxlZnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgWW91ciAke3RoaXMuc3Vic2NyaXB0aW9uTS5wbGFuTmFtZX0gc3Vic2NyaXB0aW9uIGV4cGlyZXMgdG9kYXkuICR7dGhpcy5idXlMaW5rTXNnfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN1YnNjcmlwdGlvbk0uc3Vic2NyaXB0aW9uRGF5TGVmdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGBZb3VyICR7dGhpcy5zdWJzY3JpcHRpb25NLnBsYW5OYW1lfSBzdWJzY3JpcHRpb24gZXhwaXJlcyBpbiAke3RoaXMuc3Vic2NyaXB0aW9uTS5zdWJzY3JpcHRpb25EYXlMZWZ0fSBkYXkuICR7dGhpcy5idXlMaW5rTXNnfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN1YnNjcmlwdGlvbk0ucHJpY2VUeXBlID09IFBsYW5QcmljZVR5cGUuUExBTl9QUklDRV9UWVBFX0ZSRUUgJiYgdGhpcy5zdWJzY3JpcHRpb25NLnN1YnNjcmlwdGlvbkRheUxlZnQgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgWW91IGFyZSBjdXJyZW50bHkgb24gdGhlICR7dGhpcy5zdWJzY3JpcHRpb25NLnBsYW5OYW1lfSBzdWJzY3JpcHRpb24uICR7dGhpcy5idXlMaW5rTXNnfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN1YnNjcmlwdGlvbk0uc3Vic2NyaXB0aW9uRGF5TGVmdCA8PSAxMCAgJiYgdGhpcy5zdWJzY3JpcHRpb25NLnN1YnNjcmlwdGlvbkRheUxlZnQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgWW91ciAke3RoaXMuc3Vic2NyaXB0aW9uTS5wbGFuTmFtZX0gc3Vic2NyaXB0aW9uIGV4cGlyZXMgaW4gJHt0aGlzLnN1YnNjcmlwdGlvbk0uc3Vic2NyaXB0aW9uRGF5TGVmdH0gZGF5cy4gJHt0aGlzLmJ1eUxpbmtNc2d9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3Vic2NyaXB0aW9uTS5zdWJzY3JpcHRpb25EYXlMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgWW91ciAke3RoaXMuc3Vic2NyaXB0aW9uTS5wbGFuTmFtZX0gc3Vic2NyaXB0aW9uIGhhcyBleHBpcmVkLiAke3RoaXMuYnV5TGlua01zZ31gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbk0ucHJpY2VUeXBlID09IFBsYW5QcmljZVR5cGUuUExBTl9QUklDRV9UWVBFX0ZSRUUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2xvc2VCdG4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3Vic2NyaXB0aW9uTS5zdWJzY3JpcHRpb25EYXlMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDbG9zZUJ0biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nsb3NlQnRuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdWJzY3JpcHRpb25NZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdsb2JhbHMudG9nZ2xlU3Vic2NyaXB0aW9uRXhwaXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uTS5wcmljZVR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93U3Vic2NyaXB0aW9uTWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVN1YnNjcmlwdGlvbk1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIHRoaXMuZ2xvYmFscy50b2dnbGVTdWJzY3JpcHRpb25FeHBpcmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ2hpZGVTdWJzY3JpcHRpb25NZXNzYWdlJywgJ1lFUycpO1xuICAgICAgICB0aGlzLnNob3dTdWJzY3JpcHRpb25NZXNzYWdlID0gISgnWUVTJyA9PSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2hpZGVTdWJzY3JpcHRpb25NZXNzYWdlJykpO1xuICAgIH1cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwieydzaG93U3Vic2NyaXB0aW9uTWVzc2FnZSc6IHNob3dTdWJzY3JpcHRpb25NZXNzYWdlfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgc3Vic2NyaXB0aW9uRXhwaXJpbmdNZXNzYWdlIGNlbnRlckFsaWduXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieydkLW5vbmUnOiAhc2hvd1N1YnNjcmlwdGlvbk1lc3NhZ2V9XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1saWdodFwiIFtpbm5lckhUTUxdPVwibWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dDbG9zZUJ0blwiIG1hdFJpcHBsZSBbbWF0UmlwcGxlQ2VudGVyZWRdPVwiTUFURVJJQUxfQ09OU1RBTlQuTUFUX1JJUFBMRV9DRU5URVJcIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi1jbG9zZSByb3VuZGVkLWNpcmNsZSBidG5DbG9zZUN1c3RvbSBwdC0yXCJcbiAgICAgICAgICAgIChjbGljayk9XCJoaWRlU3Vic2NyaXB0aW9uTWVzc2FnZSgpXCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==