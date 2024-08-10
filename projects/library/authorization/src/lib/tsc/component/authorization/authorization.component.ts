import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { AuthorizationM } from '../../model/authorization.model';
import { AuthorizationService } from '../../service/authorization.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { AuthenticationService } from '@library/authentication-service';
import { SubscriptionService } from '@library/subscription-service';
import { ApplicationKeyID, ApplicationService } from '@library/application-service';
import { ApplicationResourcePermission, RBACService } from '@library/rbac-service';
import { ApplicationFeature, FeatureService } from '@library/feature-service';
import { OrgStatus } from '@library/organization-service';
// /tsc-library/

@Component({
    selector: 'lib-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {
    ApplicationKeyID: ApplicationKeyID;

    redirectUrl: string = '';
    applicationKeyID: string;
    token: string = '';
    userID: any;
    orgID: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private storageService: StorageService,
        private applicationService: ApplicationService,
        private authenticationService: AuthenticationService,
        private subscriptionService: SubscriptionService,
        private rbacService: RBACService,
        private featureService: FeatureService,
    ) { }

    ngOnInit(): void {
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

    async getAuthorizationByApp(applicationKeyID, orgID) {
        let authorizationM: AuthorizationM;
        let permissionResult: any = null;
        let featureResult: any = null;

        authorizationM = <AuthorizationM>await this.authorizationService.getAuthorizationByApp(applicationKeyID, orgID);

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
                } else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            } else if (authorizationM.subscriptionStatus != 'ACTIVE') {
                if (this.applicationKeyID == ApplicationKeyID.ADMIN_KEY_ID) {
                    this.router.navigate([`/subscription-new/active`]);
                } else {
                    this.storageService.clearStorage();
                    window.location.href = `${this.applicationService.appRedirect(ApplicationKeyID.ADMIN_KEY_ID)}login?token=${this.token}&userID=${this.userID}&orgID=${authorizationM.orgID}`;
                }
            } else if (authorizationM.subscriptionStatus == 'ACTIVE') {
                this.router.navigate(['/authorization/success'], { queryParams: { redirectUrl: this.redirectUrl } });
            } else {
                this.authenticationService.logout('', '', '');
            }
        // } else {
        //     console.error('Error in permissionResult or featureResult');
        //     console.log('permissionResult', permissionResult);
        //     console.log('permissionResult', permissionResult);
        //     this.authenticationService.logout('', '', '');
        // }
    }

}
