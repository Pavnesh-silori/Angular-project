import { Inject, Injectable } from "@angular/core";
import { StorageService } from "@library/storage-service";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    ACCOUNT_KEY_ID = "ACCOUNT";

    constructor(
        @Inject('environment') private environment: any,
        private storageService: StorageService,
    ) { }

    isLoggedIn() {
        // return this.getStorage('token');

        let userID: string = '';
        // let netZeroA: string = '';
        // let primaryOrgID: string = '';
        // let defaultApp: string = '';
        // let currentApp: string = '';
        // let currentOrgID: string = '';
        let token: string = '';
        // let resourcePermissions: string = '';
        // let currentOrgType: string = '';

        userID = this.storageService.getStorage('userID');
        // netZeroA = this.getStorage('netZeroA');
        // primaryOrgID = this.getStorage('primaryOrgID');
        // defaultApp = this.getStorage('defaultApp');
        // currentApp = this.getStorage('currentApp');
        // currentOrgID = this.getStorage('currentOrgID');
        token = this.storageService.getStorage('token');
        // resourcePermissions = this.getStorage('resourcePermissions');
        // currentOrgType = this.getStorage('currentOrgType');

        // console.log('userID', userID);
        // console.log('netZeroA', netZeroA);
        // console.log('primaryOrgID', primaryOrgID);
        // console.log('defaultApp', defaultApp);
        // console.log('currentApp', currentApp);
        // console.log('currentOrgID', currentOrgID);
        // console.log('token', token);
        // console.log('resourcePermissions', resourcePermissions);
        // console.log('currentOrgType', currentOrgType);

        // let userIDLength = userID.length;
        // let netZeroALength = netZeroA.length;
        // let primaryOrgIDLength = primaryOrgID.length;
        // let defaultAppLength = defaultApp.length;
        // let currentAppLength = currentApp.length;
        // let currentOrgIDLength = currentOrgID.length;
        // let tokenLength = token.length;
        // let permissionsLength = resourcePermissions.length;
        // let currentOrgTypeLength = currentOrgType.length;

        if (
            userID == 'undefined' ||
            // netZeroA == 'undefined' ||
            // primaryOrgID == 'undefined' ||
            // defaultApp == 'undefined' ||
            // currentApp == 'undefined' ||
            // currentOrgID == 'undefined' ||
            token == 'undefined' ||
            // resourcePermissions == 'undefined' ||
            // currentOrgType == 'undefined' ||
            userID == 'null' ||
            // netZeroA == 'null' ||
            // primaryOrgID == 'null' ||
            // defaultApp == 'null' ||
            // currentApp == 'null' ||
            // currentOrgID == 'null' ||
            token == 'null' ||
            // resourcePermissions == 'null' ||
            // currentOrgType == 'null' ||
            userID == null ||
            // netZeroA == null ||
            // primaryOrgID == null ||
            // defaultApp == null ||
            // currentApp == null ||
            // currentOrgID == null ||
            token == null ||
            // resourcePermissions == null ||
            // currentOrgType == null ||
            userID == '' ||
            // netZeroA == '' ||
            // primaryOrgID == '' ||
            // defaultApp == '' ||
            // currentApp == '' ||
            // currentOrgID == '' ||
            token == ''
            // resourcePermissions == '' ||
            // currentOrgType == ''
            // userIDLength == 0 ||
            // netZeroALength == 0 ||
            // primaryOrgIDLength == 0 ||
            // defaultAppLength == 0 ||
            // currentAppLength == 0 ||
            // currentOrgIDLength == 0 ||
            // tokenLength == 0 ||
            // permissionsLength == 0 ||
            // currentOrgTypeLength == 0 
        ) {
            return false;
        } else {
            return true;
        }
    }

    logout(redirectUrl, pageUrl, action, applicationKeyID = '') {
        localStorage.clear();
        sessionStorage.clear();

        if (applicationKeyID != this.ACCOUNT_KEY_ID && action == 'interceptor') {
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}`;
        } else {            
            window.location.href = `${this.environment.ACCOUNT_URL}login?redirectUrl=${redirectUrl}&pageUrl=${pageUrl}&action=${action}`;
        }
    }

}