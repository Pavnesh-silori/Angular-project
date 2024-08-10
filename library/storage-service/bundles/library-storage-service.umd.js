(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@library/storage-service', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["storage-service"] = {}), global.ng.core));
})(this, (function (exports, i0) { 'use strict';

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

    var StorageServiceService = /** @class */ (function () {
        function StorageServiceService() {
        }
        return StorageServiceService;
    }());
    StorageServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StorageServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var StorageServiceComponent = /** @class */ (function () {
        function StorageServiceComponent() {
        }
        StorageServiceComponent.prototype.ngOnInit = function () {
        };
        return StorageServiceComponent;
    }());
    StorageServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    StorageServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StorageServiceComponent, selector: "lib-storage-service", ngImport: i0__namespace, template: "\n    <p>\n      storage-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-storage-service',
                        template: "\n    <p>\n      storage-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var StorageServiceModule = /** @class */ (function () {
        function StorageServiceModule() {
        }
        return StorageServiceModule;
    }());
    StorageServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StorageServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceModule, declarations: [StorageServiceComponent], exports: [StorageServiceComponent] });
    StorageServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StorageServiceComponent
                        ],
                        imports: [],
                        exports: [
                            StorageServiceComponent
                        ]
                    }]
            }] });

    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        StorageService.prototype.setStorage = function (key, value) {
            return localStorage.setItem(key, value);
        };
        StorageService.prototype.getStorage = function (key) {
            return localStorage.getItem(key);
        };
        StorageService.prototype.deleteStorage = function (key) {
            localStorage.removeItem(key);
        };
        StorageService.prototype.clearStorage = function () {
            localStorage.clear();
            sessionStorage.clear();
        };
        return StorageService;
    }());
    StorageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StorageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StorageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    /*
     * Public API Surface of storage-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.StorageService = StorageService;
    exports.StorageServiceComponent = StorageServiceComponent;
    exports.StorageServiceModule = StorageServiceModule;
    exports.StorageServiceService = StorageServiceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-storage-service.umd.js.map
