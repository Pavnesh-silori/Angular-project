(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash-es'), require('ngx-toastr')) :
    typeof define === 'function' && define.amd ? define('@library/toastr-service', ['exports', '@angular/core', 'lodash-es', 'ngx-toastr'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["toastr-service"] = {}), global.ng.core, global.lodashEs, global.i1));
})(this, (function (exports, i0, lodashEs, i1) { 'use strict';

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

    var ToastrServiceService = /** @class */ (function () {
        function ToastrServiceService() {
        }
        return ToastrServiceService;
    }());
    ToastrServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ToastrServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var ToastrServiceComponent = /** @class */ (function () {
        function ToastrServiceComponent() {
        }
        ToastrServiceComponent.prototype.ngOnInit = function () {
        };
        return ToastrServiceComponent;
    }());
    ToastrServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ToastrServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ToastrServiceComponent, selector: "lib-toastr-service", ngImport: i0__namespace, template: "\n    <p>\n      toastr-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-toastr-service',
                        template: "\n    <p>\n      toastr-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ToastrServiceModule = /** @class */ (function () {
        function ToastrServiceModule() {
        }
        return ToastrServiceModule;
    }());
    ToastrServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ToastrServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceModule, declarations: [ToastrServiceComponent], exports: [ToastrServiceComponent] });
    ToastrServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ToastrServiceComponent
                        ],
                        imports: [],
                        exports: [
                            ToastrServiceComponent
                        ]
                    }]
            }] });

    exports.ToastrTitle = void 0;
    (function (ToastrTitle) {
        ToastrTitle["SUCCESS"] = "Success";
        ToastrTitle["WARNING"] = "Warning";
        ToastrTitle["ERROR"] = "Error";
        ToastrTitle["INFO"] = "Info";
    })(exports.ToastrTitle || (exports.ToastrTitle = {}));
    exports.ToastrColor = void 0;
    (function (ToastrColor) {
        ToastrColor["SUCCESS"] = "success";
        ToastrColor["WARNING"] = "warning";
        ToastrColor["ERROR"] = "error";
        ToastrColor["INFO"] = "info";
    })(exports.ToastrColor || (exports.ToastrColor = {}));

    var ToastrService = /** @class */ (function () {
        function ToastrService(ngxToastrService) {
            var _this = this;
            this.ngxToastrService = ngxToastrService;
            this.success = function (message) {
                _this.openToast(exports.ToastrTitle.SUCCESS, message, exports.ToastrColor.SUCCESS);
            };
            this.error = function (message) {
                _this.openToast(exports.ToastrTitle.ERROR, message, exports.ToastrColor.ERROR);
            };
            this.warn = function (message) {
                _this.openToast(exports.ToastrTitle.WARNING, message, exports.ToastrColor.WARNING);
            };
            this.info = function (message) {
                _this.openToast(exports.ToastrTitle.INFO, message, exports.ToastrColor.INFO);
            };
        }
        ToastrService.prototype.openToast = function (title, message, notiType) {
            // Clone current config so it doesn't change when ngModel updates
            var opt = lodashEs.cloneDeep(this.ngxToastrService.toastrConfig);
            var inserted = this.ngxToastrService.show(message, title, opt, this.ngxToastrService.toastrConfig.iconClasses[notiType]);
            return inserted;
        };
        ToastrService.prototype.getToastStatus = function (status) {
            var toast = {
                title: '',
                color: '',
            };
            switch (status) {
                case "error":
                    toast.title = exports.ToastrTitle.ERROR;
                    toast.color = exports.ToastrColor.ERROR;
                    break;
                case 'warning':
                    toast.title = exports.ToastrTitle.WARNING;
                    toast.color = exports.ToastrColor.WARNING;
                    break;
                case 'info':
                    toast.title = exports.ToastrTitle.INFO;
                    toast.color = exports.ToastrColor.INFO;
                    break;
                case 'success':
                    toast.title = exports.ToastrTitle.SUCCESS;
                    toast.color = exports.ToastrColor.SUCCESS;
                    break;
                default:
                    toast.title = exports.ToastrTitle.ERROR;
                    toast.color = exports.ToastrColor.ERROR;
            }
            return toast;
        };
        return ToastrService;
    }());
    ToastrService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrService, deps: [{ token: i1__namespace.ToastrService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ToastrService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ToastrService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ToastrService }]; } });

    /*
     * Public API Surface of toastr-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ToastrService = ToastrService;
    exports.ToastrServiceComponent = ToastrServiceComponent;
    exports.ToastrServiceModule = ToastrServiceModule;
    exports.ToastrServiceService = ToastrServiceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-toastr-service.umd.js.map
