import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
} from '@angular/router';

import { environment } from 'src/environments/environment';
import { PagePathEnum } from '@Admin/enum/page-path.enum';

import { AuthorizationM } from '@Admin/model/authorization.model';

import { AuthorizationService } from '@Admin/service/authorization.service';

// library
import { StorageService } from '@library/storage-service';
import { ApplicationResourcePermission, RBACService } from '@library/rbac-service';
import { ApplicationFeature, FeatureService } from '@library/feature-service';
import { ApplicationKeyID } from '@library/application-service';
// /library/

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {
    redirectUrl: string = PagePathEnum.ADMIN_APP_HOME_PAGE;
    applicationKeyID: string = ApplicationKeyID.ADMIN_KEY_ID;

    token: string = '';
    userID: any;
    userUID: any;

    orgID: any = '';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authorizationService: AuthorizationService,

        private storageService: StorageService,
        private rbacService: RBACService,
        private featureService: FeatureService
    ) { }

    ngOnInit(): void {
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
            this.storageService.setStorage('netZeroA', 'NO');

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
        this.storageService.setStorage('userUID', authorizationM.userUID);
        this.storageService.setStorage('applicationID', authorizationM.applicationID);
        this.storageService.setStorage('currentOrgType', authorizationM.orgType);

        // permissionResult = <any>await this.rbacService.getResourcePermissionByOrgIDAndUserID(authorizationM.rootOrgID, authorizationM.userID);
        // this.storageService.setStorage(ApplicationResourcePermission.ADMIN_RESOURCE_PERMISSION, JSON.stringify(permissionResult));

        // featureResult = <any>await this.featureService.getFeatureByOrgID(authorizationM.rootOrgID);
        // this.storageService.setStorage(ApplicationFeature.ADMIN_FEATURE, JSON.stringify(featureResult));

        // if (permissionResult && featureResult) {
        if (authorizationM.orgStatus == 'SETUP_PENDING') {
            window.location.href = environment.ADMIN_URL + 'organization/' + authorizationM.orgID + '/setup?subscriptionStatus=' + authorizationM.subscriptionStatus;
        } else if (authorizationM.subscriptionStatus != 'ACTIVE') {
            this.router.navigate([`/subscription-new/plan`]);
        } else {
            this.router.navigate([this.redirectUrl]);
        }
        // } else {
        //     this.authService.logout('', '', '');
        // }
    }

}
