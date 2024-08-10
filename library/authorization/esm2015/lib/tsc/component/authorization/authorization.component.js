import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { ApplicationKeyID } from '@library/application-service';
import { OrgStatus } from '@library/organization-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../service/authorization.service";
import * as i3 from "@library/storage-service";
import * as i4 from "@library/application-service";
import * as i5 from "@library/authentication-service";
import * as i6 from "@library/subscription-service";
import * as i7 from "@library/rbac-service";
import * as i8 from "@library/feature-service";
// /tsc-library/
export class AuthorizationComponent {
    constructor(router, activatedRoute, authorizationService, storageService, applicationService, authenticationService, subscriptionService, rbacService, featureService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authorizationService = authorizationService;
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.authenticationService = authenticationService;
        this.subscriptionService = subscriptionService;
        this.rbacService = rbacService;
        this.featureService = featureService;
        this.redirectUrl = '';
        this.token = '';
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.applicationKeyID = data.applicationKeyID;
        });
        this.activatedRoute.queryParams.subscribe(queryParam => {
            this.token = queryParam.token;
            this.userID = queryParam.userID;
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
            if (queryParam.orgID) {
                this.orgID = queryParam.orgID;
            }
            this.storageService.setStorage('token', this.token);
            this.storageService.setStorage('userID', this.userID);
            this.storageService.setStorage('applicationKeyID', this.applicationKeyID);
            this.getAuthorizationByApp(this.applicationKeyID, this.orgID);
        });
    }
    getAuthorizationByApp(applicationKeyID, orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let authorizationM;
            let permissionResult = null;
            let featureResult = null;
            authorizationM = (yield this.authorizationService.getAuthorizationByApp(applicationKeyID, orgID));
            this.storageService.setStorage('currentOrgID', authorizationM.orgID);
            this.storageService.setStorage('rootOrgID', authorizationM.rootOrgID);
            this.storageService.setStorage('currentOrgType', authorizationM.orgType);
            this.storageService.setStorage('userUID', authorizationM.userUID);
            this.storageService.setStorage('applicationID', authorizationM.applicationID);
            this.storageService.setStorage('enableModule', authorizationM.enableModule);
            // permissionResult = <any>await this.rbacService.getResourcePermissionByOrgIDAndUserID(authorizationM.rootOrgID, authorizationM.userID);
            // this.storageService.setStorage(ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION, JSON.stringify(permissionResult));
            // featureResult = <any>await this.featureService.getFeatureByOrgID(authorizationM.rootOrgID);
            // this.storageService.setStorage(ApplicationFeature.ADMIN_FEATURE, JSON.stringify(featureResult));
            // if (permissionResult && featureResult) {
            if (authorizationM.orgStatus == OrgStatus.SETUP_PENDING_STATUS) {
                if (this.applicationKeyID == ApplicationKeyID.ADMIN_KEY_ID) {
                    this.router.navigate(['/organization', authorizationM.orgID, 'setup'], { queryParams: { subscriptionStatus: authorizationM.subscriptionStatus } });
                }
                else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            }
            else if (authorizationM.subscriptionStatus != 'ACTIVE') {
                if (this.applicationKeyID == ApplicationKeyID.ADMIN_KEY_ID) {
                    this.router.navigate([`/subscription-new/active`]);
                }
                else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            }
            else if (authorizationM.subscriptionStatus == 'ACTIVE') {
                this.router.navigate(['/authorization/success'], { queryParams: { redirectUrl: this.redirectUrl } });
            }
            else {
                this.authenticationService.logout('', '', '');
            }
            // } else {
            //     console.error('Error in permissionResult or featureResult');
            //     console.log('permissionResult', permissionResult);
            //     console.log('permissionResult', permissionResult);
            //     this.authenticationService.logout('', '', '');
            // }
        });
    }
}
AuthorizationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.AuthorizationService }, { token: i3.StorageService }, { token: i4.ApplicationService }, { token: i5.AuthenticationService }, { token: i6.SubscriptionService }, { token: i7.RBACService }, { token: i8.FeatureService }], target: i0.ɵɵFactoryTarget.Component });
AuthorizationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AuthorizationComponent, selector: "lib-authorization", ngImport: i0, template: "<div class=\"d-flex h-100 justify-content-center align-items-center\">\n    <div class=\"text-center fs-4\"><img class=\"appAuthImg\"\n            src=\"assets/images/application-logo/tsc-with-name.png\" />\n        <br />\n        <br />\n        <span class=\"spinner-border spinner-border-sm text-success\"></span> ..\n    </div>\n</div>", styles: [".appAuthImg{height:55px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-authorization',
                    templateUrl: './authorization.component.html',
                    styleUrls: ['./authorization.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.AuthorizationService }, { type: i3.StorageService }, { type: i4.ApplicationService }, { type: i5.AuthenticationService }, { type: i6.SubscriptionService }, { type: i7.RBACService }, { type: i8.FeatureService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2F1dGhvcml6YXRpb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2F1dGhvcml6YXRpb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFFWixNQUFNLGVBQWUsQ0FBQztBQWN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQXNCLE1BQU0sOEJBQThCLENBQUM7QUFHcEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0FBQzFELGdCQUFnQjtBQVFoQixNQUFNLE9BQU8sc0JBQXNCO0lBUy9CLFlBQ1ksTUFBYyxFQUNkLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMscUJBQTRDLEVBQzVDLG1CQUF3QyxFQUN4QyxXQUF3QixFQUN4QixjQUE4QjtRQVI5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWYxQyxnQkFB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WCxtRUFBbUU7WUFDbkUseURBQXlEO1lBQ3pELHlEQUF5RDtZQUN6RCxxREFBcUQ7WUFDckQsSUFBSTtRQUNSLENBQUM7S0FBQTs7b0hBNUZRLHNCQUFzQjt3R0FBdEIsc0JBQXNCLHlEQzdCbkMsc1ZBT007NEZEc0JPLHNCQUFzQjtrQkFObEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQWN0aXZhdGVkUm91dGUsXG4gICAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhvcml6YXRpb25NIH0gZnJvbSAnLi4vLi4vbW9kZWwvYXV0aG9yaXphdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBBdXRob3JpemF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXV0aG9yaXphdGlvbi5zZXJ2aWNlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N1YnNjcmlwdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uS2V5SUQsIEFwcGxpY2F0aW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L2FwcGxpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZXNvdXJjZVBlcm1pc3Npb24sIFJCQUNTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvcmJhYy1zZXJ2aWNlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uRmVhdHVyZSwgRmVhdHVyZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9mZWF0dXJlLXNlcnZpY2UnO1xuaW1wb3J0IHsgT3JnU3RhdHVzIH0gZnJvbSAnQGxpYnJhcnkvb3JnYW5pemF0aW9uLXNlcnZpY2UnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1hdXRob3JpemF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQXBwbGljYXRpb25LZXlJRDogQXBwbGljYXRpb25LZXlJRDtcblxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSAnJztcbiAgICBhcHBsaWNhdGlvbktleUlEOiBzdHJpbmc7XG4gICAgdG9rZW46IHN0cmluZyA9ICcnO1xuICAgIHVzZXJJRDogYW55O1xuICAgIG9yZ0lEOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgYXV0aG9yaXphdGlvblNlcnZpY2U6IEF1dGhvcml6YXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvblNlcnZpY2U6IEFwcGxpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25TZXJ2aWNlOiBTdWJzY3JpcHRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJiYWNTZXJ2aWNlOiBSQkFDU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBmZWF0dXJlU2VydmljZTogRmVhdHVyZVNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbktleUlEID0gZGF0YS5hcHBsaWNhdGlvbktleUlEO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShxdWVyeVBhcmFtID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBxdWVyeVBhcmFtLnRva2VuO1xuICAgICAgICAgICAgdGhpcy51c2VySUQgPSBxdWVyeVBhcmFtLnVzZXJJRDtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW0ucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VXJsID0gcXVlcnlQYXJhbS5yZWRpcmVjdFVybDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW0ub3JnSUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZ0lEID0gcXVlcnlQYXJhbS5vcmdJRDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRTdG9yYWdlKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRTdG9yYWdlKCd1c2VySUQnLCB0aGlzLnVzZXJJRCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnLCB0aGlzLmFwcGxpY2F0aW9uS2V5SUQpO1xuXG4gICAgICAgICAgICB0aGlzLmdldEF1dGhvcml6YXRpb25CeUFwcCh0aGlzLmFwcGxpY2F0aW9uS2V5SUQsIHRoaXMub3JnSUQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBdXRob3JpemF0aW9uQnlBcHAoYXBwbGljYXRpb25LZXlJRCwgb3JnSUQpIHtcbiAgICAgICAgbGV0IGF1dGhvcml6YXRpb25NOiBBdXRob3JpemF0aW9uTTtcbiAgICAgICAgbGV0IHBlcm1pc3Npb25SZXN1bHQ6IGFueSA9IG51bGw7XG4gICAgICAgIGxldCBmZWF0dXJlUmVzdWx0OiBhbnkgPSBudWxsO1xuXG4gICAgICAgIGF1dGhvcml6YXRpb25NID0gPEF1dGhvcml6YXRpb25NPmF3YWl0IHRoaXMuYXV0aG9yaXphdGlvblNlcnZpY2UuZ2V0QXV0aG9yaXphdGlvbkJ5QXBwKGFwcGxpY2F0aW9uS2V5SUQsIG9yZ0lEKTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcsIGF1dGhvcml6YXRpb25NLm9yZ0lEKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRTdG9yYWdlKCdyb290T3JnSUQnLCBhdXRob3JpemF0aW9uTS5yb290T3JnSUQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ2N1cnJlbnRPcmdUeXBlJywgYXV0aG9yaXphdGlvbk0ub3JnVHlwZSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0U3RvcmFnZSgndXNlclVJRCcsIGF1dGhvcml6YXRpb25NLnVzZXJVSUQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uSUQnLCBhdXRob3JpemF0aW9uTS5hcHBsaWNhdGlvbklEKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRTdG9yYWdlKCdlbmFibGVNb2R1bGUnLCBhdXRob3JpemF0aW9uTS5lbmFibGVNb2R1bGUpO1xuXG4gICAgICAgIC8vIHBlcm1pc3Npb25SZXN1bHQgPSA8YW55PmF3YWl0IHRoaXMucmJhY1NlcnZpY2UuZ2V0UmVzb3VyY2VQZXJtaXNzaW9uQnlPcmdJREFuZFVzZXJJRChhdXRob3JpemF0aW9uTS5yb290T3JnSUQsIGF1dGhvcml6YXRpb25NLnVzZXJJRCk7XG4gICAgICAgIC8vIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0U3RvcmFnZShBcHBsaWNhdGlvblJlc291cmNlUGVybWlzc2lvbi5BRE1JTl9SRVNPVVJDRV9QRVJNSVNTSU9OLCBKU09OLnN0cmluZ2lmeShwZXJtaXNzaW9uUmVzdWx0KSk7XG5cbiAgICAgICAgLy8gZmVhdHVyZVJlc3VsdCA9IDxhbnk+YXdhaXQgdGhpcy5mZWF0dXJlU2VydmljZS5nZXRGZWF0dXJlQnlPcmdJRChhdXRob3JpemF0aW9uTS5yb290T3JnSUQpO1xuICAgICAgICAvLyB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldFN0b3JhZ2UoQXBwbGljYXRpb25GZWF0dXJlLkFETUlOX0ZFQVRVUkUsIEpTT04uc3RyaW5naWZ5KGZlYXR1cmVSZXN1bHQpKTtcblxuICAgICAgICAvLyBpZiAocGVybWlzc2lvblJlc3VsdCAmJiBmZWF0dXJlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbk0ub3JnU3RhdHVzID09IE9yZ1N0YXR1cy5TRVRVUF9QRU5ESU5HX1NUQVRVUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPT0gQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvb3JnYW5pemF0aW9uJywgYXV0aG9yaXphdGlvbk0ub3JnSUQsICdzZXR1cCddLCB7IHF1ZXJ5UGFyYW1zOiB7IHN1YnNjcmlwdGlvblN0YXR1czogYXV0aG9yaXphdGlvbk0uc3Vic2NyaXB0aW9uU3RhdHVzIH0gfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt0aGlzLmFwcGxpY2F0aW9uU2VydmljZS5hcHBSZWRpcmVjdChBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRCl9bG9naW4/dG9rZW49JHt0aGlzLnRva2VufSZ1c2VySUQ9JHt0aGlzLnVzZXJJRH0mb3JnSUQ9JHthdXRob3JpemF0aW9uTS5vcmdJRH1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXV0aG9yaXphdGlvbk0uc3Vic2NyaXB0aW9uU3RhdHVzICE9ICdBQ1RJVkUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb25LZXlJRCA9PSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9zdWJzY3JpcHRpb24tbmV3L2FjdGl2ZWBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3RoaXMuYXBwbGljYXRpb25TZXJ2aWNlLmFwcFJlZGlyZWN0KEFwcGxpY2F0aW9uS2V5SUQuQURNSU5fS0VZX0lEKX1sb2dpbj90b2tlbj0ke3RoaXMudG9rZW59JnVzZXJJRD0ke3RoaXMudXNlcklEfSZvcmdJRD0ke2F1dGhvcml6YXRpb25NLm9yZ0lEfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdXRob3JpemF0aW9uTS5zdWJzY3JpcHRpb25TdGF0dXMgPT0gJ0FDVElWRScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRob3JpemF0aW9uL3N1Y2Nlc3MnXSwgeyBxdWVyeVBhcmFtczogeyByZWRpcmVjdFVybDogdGhpcy5yZWRpcmVjdFVybCB9IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQoJycsICcnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwZXJtaXNzaW9uUmVzdWx0IG9yIGZlYXR1cmVSZXN1bHQnKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdwZXJtaXNzaW9uUmVzdWx0JywgcGVybWlzc2lvblJlc3VsdCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncGVybWlzc2lvblJlc3VsdCcsIHBlcm1pc3Npb25SZXN1bHQpO1xuICAgICAgICAvLyAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KCcnLCAnJywgJycpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZC1mbGV4IGgtMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGZzLTRcIj48aW1nIGNsYXNzPVwiYXBwQXV0aEltZ1wiXG4gICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL2FwcGxpY2F0aW9uLWxvZ28vdHNjLXdpdGgtbmFtZS5wbmdcIiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1zdWNjZXNzXCI+PC9zcGFuPiAuLlxuICAgIDwvZGl2PlxuPC9kaXY+Il19