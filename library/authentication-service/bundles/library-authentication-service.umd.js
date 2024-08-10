(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@library/storage-service')) :
    typeof define === 'function' && define.amd ? define('@library/authentication-service', ['exports', '@angular/core', '@library/storage-service'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["authentication-service"] = {}), global.ng.core, global.i1));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var AuthenticationServiceService = /** @class */ (function () {
        function AuthenticationServiceService() {
        }
        return AuthenticationServiceService;
    }());
    AuthenticationServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthenticationServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthenticationServiceComponent = /** @class */ (function () {
        function AuthenticationServiceComponent() {
        }
        AuthenticationServiceComponent.prototype.ngOnInit = function () {
        };
        return AuthenticationServiceComponent;
    }());
    AuthenticationServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AuthenticationServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AuthenticationServiceComponent, selector: "lib-authentication-service", ngImport: i0__namespace, template: "\n    <p>\n      authentication-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-authentication-service',
                        template: "\n    <p>\n      authentication-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthenticationServiceModule = /** @class */ (function () {
        function AuthenticationServiceModule() {
        }
        AuthenticationServiceModule.forRoot = function (environment) {
            return {
                ngModule: AuthenticationServiceModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return AuthenticationServiceModule;
    }());
    AuthenticationServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AuthenticationServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceModule, declarations: [AuthenticationServiceComponent], exports: [AuthenticationServiceComponent] });
    AuthenticationServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AuthenticationServiceComponent
                        ],
                        imports: [],
                        exports: [
                            AuthenticationServiceComponent
                        ]
                    }]
            }] });

    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(environment, storageService) {
            this.environment = environment;
            this.storageService = storageService;
            this.ACCOUNT_KEY_ID = "ACCOUNT";
        }
        AuthenticationService.prototype.isLoggedIn = function () {
            // return this.getStorage('token');
            var userID = '';
            // let netZeroA: string = '';
            // let primaryOrgID: string = '';
            // let defaultApp: string = '';
            // let currentApp: string = '';
            // let currentOrgID: string = '';
            var token = '';
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
            if (userID == 'undefined' ||
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
            }
            else {
                return true;
            }
        };
        AuthenticationService.prototype.logout = function (redirectUrl, pageUrl, action, applicationKeyID) {
            if (applicationKeyID === void 0) { applicationKeyID = ''; }
            localStorage.clear();
            sessionStorage.clear();
            if (applicationKeyID != this.ACCOUNT_KEY_ID && action == 'interceptor') {
                window.location.href = this.environment.ACCOUNT_URL + "login?redirectUrl=" + redirectUrl + "&pageUrl=" + pageUrl;
            }
            else {
                window.location.href = this.environment.ACCOUNT_URL + "login?redirectUrl=" + redirectUrl + "&pageUrl=" + pageUrl + "&action=" + action;
            }
        };
        return AuthenticationService;
    }());
    AuthenticationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationService, deps: [{ token: 'environment' }, { token: i1__namespace.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthenticationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthenticationService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }, { type: i1__namespace.StorageService }];
        } });

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authenticationService) {
            this.authenticationService = authenticationService;
        }
        AuthGuard.prototype.canActivate = function (route, state) {
            if (this.authenticationService.isLoggedIn()) {
                return true;
            }
            else {
                var appURL = void 0;
                // this.activatedRoute.data.subscribe(data => {
                //     console.log('data -', data);
                //     appURL = data.appURL;
                // });
                appURL = route.data.appURL;
                this.authenticationService.logout(appURL + 'login', state.url, '');
                return false;
            }
        };
        return AuthGuard;
    }());
    AuthGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, deps: [{ token: AuthenticationService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: AuthenticationService }]; } });

    /*
     * Public API Surface of authentication-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthGuard = AuthGuard;
    exports.AuthenticationService = AuthenticationService;
    exports.AuthenticationServiceComponent = AuthenticationServiceComponent;
    exports.AuthenticationServiceModule = AuthenticationServiceModule;
    exports.AuthenticationServiceService = AuthenticationServiceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-authentication-service.umd.js.map
