import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject } from '@angular/core';
import * as i1 from '@angular/common/http';
import { __awaiter } from 'tslib';

class UserServiceService {
    constructor() { }
}
UserServiceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UserServiceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UserServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserServiceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
UserServiceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UserServiceComponent, selector: "lib-user-service", ngImport: i0, template: `
    <p>
      user-service works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-user-service',
                    template: `
    <p>
      user-service works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class UserServiceModule {
    static forRoot(environment) {
        return {
            ngModule: UserServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
UserServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, declarations: [UserServiceComponent], exports: [UserServiceComponent] });
UserServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UserServiceComponent
                    ],
                    imports: [],
                    exports: [
                        UserServiceComponent
                    ]
                }]
        }] });

var ProfileImg;
(function (ProfileImg) {
    ProfileImg["PROFILE_IMAGE_BODY_VIEW"] = "PROFILE_IMAGE_BODY_VIEW";
    ProfileImg["PROFILE_IMAGE_DROPDOWN_NAME_VIEW"] = "PROFILE_IMAGE_DROPDOWN_NAME_VIEW";
    ProfileImg["PROFILE_IMAGE_DROPDOWN_NAME_EMAIL_VIEW"] = "PROFILE_IMAGE_DROPDOWN_NAME_EMAIL_VIEW";
})(ProfileImg || (ProfileImg = {}));

var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
    UserStatus["INVITED"] = "INVITED";
})(UserStatus || (UserStatus = {}));
var UserContext;
(function (UserContext) {
    UserContext["ROOT_ORG_USER"] = "ROOT_ORG_USER";
    UserContext["CURRENT_ORG_USER"] = "CURRENT_ORG_USER";
})(UserContext || (UserContext = {}));

class User {
}
class UserOrgAccess {
}

class UserController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getUserByID(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}`);
    }
    getUserOrgAccess(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/user-access`);
    }
    getUsersByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users`);
    }
    getCurrentOrgUserAccess(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/access`);
    }
}
UserController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
UserController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class UserService {
    constructor(userController) {
        this.userController = userController;
    }
    getUserByID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let userM;
            try {
                userM = yield this.userController.getUserByID(userID).toPromise();
                if (userM) {
                    return userM;
                }
                else {
                    return new User();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new User();
            }
        });
    }
    getUserOrgAccess(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let userOrgAccessM;
            try {
                userOrgAccessM = yield this.userController.getUserOrgAccess(orgID).toPromise();
                if (userOrgAccessM) {
                    return userOrgAccessM;
                }
                else {
                    return new UserOrgAccess();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new UserOrgAccess();
            }
        });
    }
    getUsersByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgUserM;
            try {
                orgUserM = yield this.userController.getUsersByOrgID(orgID).toPromise();
                if (orgUserM) {
                    return orgUserM;
                }
                else {
                    return [new User()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new User()];
            }
        });
    }
    getCurrentOrgUserAccess(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentOrgUserM;
            try {
                currentOrgUserM = yield this.userController.getCurrentOrgUserAccess(orgID).toPromise();
                if (currentOrgUserM) {
                    return currentOrgUserM;
                }
                else {
                    return [new User()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new User()];
            }
        });
    }
    defaultImage(name, element) {
        let profileImg;
        if (name) {
            profileImg = this.generateDefaultImage(name, element);
        }
        else {
            profileImg = 'assets/images/default-profile-img.jpg';
        }
        return profileImg;
    }
    generateDefaultImage(name, element) {
        let canvasWidth;
        let canvasHeight;
        let fontSize;
        let fillTextDoubleStart;
        let fillTextDoubleTop;
        let fillTextSingleStart;
        let fillTextSingleTop;
        if (element == ProfileImg.PROFILE_IMAGE_BODY_VIEW) {
            canvasWidth = 22;
            canvasHeight = 22;
            fontSize = '11px';
            fillTextDoubleStart = 4;
            fillTextDoubleTop = 15;
            fillTextSingleStart = 8;
            fillTextSingleTop = 15;
        }
        else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW) {
            canvasWidth = 75;
            canvasHeight = 75;
            fontSize = '40px';
            fillTextDoubleStart = 13;
            fillTextDoubleTop = 52;
            fillTextSingleStart = 23;
            fillTextSingleTop = 52;
        }
        else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_EMAIL_VIEW) {
            //INFO: SOMYA AGRAWAL - currently WIP, configurations are not fully correct while showing name and email alongWith profile in dropdown!
            canvasWidth = 120;
            canvasHeight = 120;
            fontSize = '60px';
            fillTextDoubleStart = 20;
            fillTextDoubleTop = 62;
            fillTextSingleStart = 30;
            fillTextSingleTop = 62;
        }
        const canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        document.body.appendChild(canvas);
        const context = canvas.getContext('2d');
        context.fillStyle = '#3f6ad8';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = fontSize + ' Helvetica';
        context.fillStyle = '#fff';
        const nameArray = name.split(' ');
        let initials = '';
        for (let i = 0; i < nameArray.length; i++) {
            if (i <= 1) {
                if (nameArray[i].length > 0) {
                    initials = initials + nameArray[i][0];
                }
            }
        }
        if (initials.length > 1) {
            context.fillText(initials.toUpperCase(), fillTextDoubleStart, fillTextDoubleTop);
        }
        else {
            context.fillText(initials.toUpperCase(), fillTextSingleStart, fillTextSingleTop);
        }
        const data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
    }
}
UserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, deps: [{ token: UserController }], target: i0.ɵɵFactoryTarget.Injectable });
UserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: UserController }]; } });

/*
 * Public API Surface of user-service
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ProfileImg, User, UserContext, UserController, UserOrgAccess, UserService, UserServiceComponent, UserServiceModule, UserServiceService, UserStatus };
//# sourceMappingURL=library-user-service.js.map
