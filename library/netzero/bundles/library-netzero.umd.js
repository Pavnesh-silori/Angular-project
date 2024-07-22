(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@library/tsc-common'), require('@angular/common/http'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@angular/material/table'), require('@angular/material/paginator'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/tooltip'), require('@angular/material/datepicker'), require('@angular/material/core'), require('@angular/material/radio'), require('ngx-daterangepicker-material'), require('@angular/material/dialog'), require('rxjs'), require('lodash'), require('@library/unit-service'), require('@library/toastr-service'), require('@library/application-service'), require('@library/date'), require('@library/storage-service'), require('@fortawesome/angular-fontawesome'), require('rxjs/operators'), require('@fortawesome/free-solid-svg-icons')) :
    typeof define === 'function' && define.amd ? define('@library/netzero', ['exports', '@angular/core', '@angular/common', '@angular/router', '@library/tsc-common', '@angular/common/http', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@angular/material/table', '@angular/material/paginator', '@angular/material/button', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/select', '@angular/material/tooltip', '@angular/material/datepicker', '@angular/material/core', '@angular/material/radio', 'ngx-daterangepicker-material', '@angular/material/dialog', 'rxjs', 'lodash', '@library/unit-service', '@library/toastr-service', '@library/application-service', '@library/date', '@library/storage-service', '@fortawesome/angular-fontawesome', 'rxjs/operators', '@fortawesome/free-solid-svg-icons'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library.netzero = {}), global.ng.core, global.ng.common, global.ng.router, global.i10, global.ng.common.http, global.i14$1, global.ng.forms, global.ng.material.table, global.ng.material.paginator, global.ng.material.button, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.select, global.ng.material.tooltip, global.ng.material.datepicker, global.ng.material.core, global.ng.material.radio, global.ngxDaterangepickerMaterial, global.ng.material.dialog, global.rxjs, global.lodash, global.i5, global.i4, global.applicationService, global.i15, global.i9, global.i9$1, global.rxjs.operators, global.freeSolidSvgIcons));
})(this, (function (exports, i0, i16, i2, i10, i1, i14$1, i3, i10$1, i11$1, button, i11, icon, i17, i13, i13$1, datepicker, i14, i12, ngxDaterangepickerMaterial, i1$1, rxjs, lodash, i5, i4, applicationService, i15, i9, i9$1, operators, freeSolidSvgIcons) { 'use strict';

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
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i14__namespace$1 = /*#__PURE__*/_interopNamespace(i14$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);
    var i11__namespace$1 = /*#__PURE__*/_interopNamespace(i11$1);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i17__namespace = /*#__PURE__*/_interopNamespace(i17);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i13__namespace$1 = /*#__PURE__*/_interopNamespace(i13$1);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i9__namespace$1 = /*#__PURE__*/_interopNamespace(i9$1);

    var NetzeroService = /** @class */ (function () {
        function NetzeroService() {
        }
        return NetzeroService;
    }());
    NetzeroService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NetzeroService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NetzeroComponent = /** @class */ (function () {
        function NetzeroComponent() {
        }
        NetzeroComponent.prototype.ngOnInit = function () {
        };
        return NetzeroComponent;
    }());
    NetzeroComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NetzeroComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: NetzeroComponent, selector: "lib-netzero", ngImport: i0__namespace, template: "\n    <p>\n      netzero works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-netzero',
                        template: "\n    <p>\n      netzero works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var NetzeroModule = /** @class */ (function () {
        function NetzeroModule() {
        }
        NetzeroModule.forRoot = function (environment, constant) {
            return {
                ngModule: NetzeroModule,
                providers: [
                    { provide: 'environment', useValue: environment },
                    { provide: 'constant', useValue: constant }
                ]
            };
        };
        return NetzeroModule;
    }());
    NetzeroModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NetzeroModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroModule, declarations: [NetzeroComponent], exports: [NetzeroComponent] });
    NetzeroModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NetzeroModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NetzeroComponent
                        ],
                        imports: [],
                        exports: [
                            NetzeroComponent
                        ]
                    }]
            }] });

    exports.VehicleTypeEnum = void 0;
    (function (VehicleTypeEnum) {
        VehicleTypeEnum["ON_ROAD"] = "on-road";
        VehicleTypeEnum["NON_ROAD"] = "non-road";
    })(exports.VehicleTypeEnum || (exports.VehicleTypeEnum = {}));

    var VehicleType = /** @class */ (function () {
        function VehicleType() {
        }
        return VehicleType;
    }());
    var VehicleCategory = /** @class */ (function () {
        function VehicleCategory() {
        }
        return VehicleCategory;
    }());
    var EngineStroke = /** @class */ (function () {
        function EngineStroke() {
        }
        return EngineStroke;
    }());
    ;
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        return Vehicle;
    }());
    var VehiclePage = /** @class */ (function () {
        function VehiclePage() {
        }
        return VehiclePage;
    }());
    var VehicleByType = /** @class */ (function () {
        function VehicleByType() {
        }
        return VehicleByType;
    }());

    var routes$2 = [
        {
            path: 'create',
            loadChildren: function () { return Promise.resolve().then(function () { return createUpdate_module; }).then(function (m) { return m.CreateUpdateModule; }); },
            data: { action: i10.FormAction.CREATE, source: i10.VIEW_TYPE_ENUM.PAGE }
        },
        {
            path: ':vehicleID/update',
            loadChildren: function () { return Promise.resolve().then(function () { return createUpdate_module; }).then(function (m) { return m.CreateUpdateModule; }); },
            data: { action: i10.FormAction.UPDATE, source: i10.VIEW_TYPE_ENUM.PAGE }
        },
        {
            path: 'page',
            loadChildren: function () { return Promise.resolve().then(function () { return page_module; }).then(function (m) { return m.PageModule; }); }
        }
    ];
    var VehicleRoutingModule = /** @class */ (function () {
        function VehicleRoutingModule() {
        }
        return VehicleRoutingModule;
    }());
    VehicleRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    VehicleRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleRoutingModule, imports: [i2__namespace.RouterModule], exports: [i2.RouterModule] });
    VehicleRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleRoutingModule, imports: [[i2.RouterModule.forChild(routes$2)], i2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.RouterModule.forChild(routes$2)],
                        exports: [i2.RouterModule]
                    }]
            }] });

    var VehicleModule = /** @class */ (function () {
        function VehicleModule() {
        }
        return VehicleModule;
    }());
    VehicleModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    VehicleModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleModule, imports: [i16.CommonModule,
            VehicleRoutingModule] });
    VehicleModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleModule, imports: [[
                i16.CommonModule,
                VehicleRoutingModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i16.CommonModule,
                            VehicleRoutingModule,
                        ]
                    }]
            }] });

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var VehicleController = /** @class */ (function () {
        function VehicleController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        VehicleController.prototype.createVehicle = function (orgID, value) {
            return this.http.post(this.environment.COMMON_API_URL + "organizations/" + orgID + "/vehicles", value);
        };
        VehicleController.prototype.createVehicleForEmployee = function (orgID, employeeID, value) {
            return this.http.post(this.environment.COMMON_API_URL + "organizations/" + orgID + "/employees/" + employeeID + "/vehicles", value);
        };
        VehicleController.prototype.getVehicleByPage = function (pageNo, pazeSize, orgId, filterArr) {
            var params = new i1.HttpParams();
            params = params.append('pageNo', pageNo);
            params = params.append('pageSize', pazeSize);
            filterArr.forEach(function (filter) { return params = params.append('filter', filter); });
            return this.http.get(this.environment.COMMON_API_URL + "organizations/" + orgId + "/vehicles", { params: params });
        };
        VehicleController.prototype.getVehicleByID = function (orgID, vehicleID) {
            return this.http.get(this.environment.COMMON_API_URL + "organizations/" + orgID + "/" + vehicleID);
        };
        VehicleController.prototype.updateVehicle = function (orgID, value, vehicleID) {
            return this.http.patch(this.environment.COMMON_API_URL + "organizations/" + orgID + "/vehicles/" + vehicleID, value);
        };
        VehicleController.prototype.vehicleExist = function (orgID, vehicleNumber) {
            return this.http.get(this.environment.COMMON_API_URL + "organizations/" + orgID + "/vehicles/exit-vehicle/" + vehicleNumber);
        };
        VehicleController.prototype.getVehicleType = function () {
            return this.http.get(this.environment.COMMON_API_URL + "vehicle-type");
        };
        VehicleController.prototype.getVehicleCategory = function () {
            return this.http.get(this.environment.COMMON_API_URL + "vehicle-category");
        };
        VehicleController.prototype.getEngineStroke = function () {
            return this.http.get(this.environment.COMMON_API_URL + "engine-stroke");
        };
        VehicleController.prototype.vehicleBulkUpload = function (orgId, file) {
            return this.http.post(this.environment.COMMON_API_URL + "organizations/" + orgId + "/vehicles/bulk-upload", file);
        };
        VehicleController.prototype.getVehicleByTypeID = function (orgID, vehicleTypeID) {
            var params = new i1.HttpParams();
            params = params.append('vehicleTypeId', vehicleTypeID);
            return this.http.get(this.environment.COMMON_API_URL + "organizations/" + orgID + "/vehicles/all", { params: params });
        };
        VehicleController.prototype.getAllVehicle = function (orgID) {
            return this.http.get(this.environment.COMMON_API_URL + "organizations/" + orgID + "/vehicles/all");
        };
        return VehicleController;
    }());
    VehicleController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    VehicleController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var VehicleService = /** @class */ (function () {
        function VehicleService(vehicleController) {
            this.vehicleController = vehicleController;
        }
        VehicleService.prototype.getVehicleType = function () {
            return __awaiter(this, void 0, void 0, function () {
                var vehicleTypeM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.vehicleController.getVehicleType().toPromise()];
                        case 1:
                            vehicleTypeM = _a.sent();
                            if (vehicleTypeM) {
                                return [2 /*return*/, vehicleTypeM];
                            }
                            else {
                                return [2 /*return*/, [new VehicleType()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error in getVehicleType -', error_1);
                            return [2 /*return*/, [new VehicleType()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        VehicleService.prototype.getVehicleCategory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var vehicleCategoryM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.vehicleController.getVehicleCategory().toPromise()];
                        case 1:
                            vehicleCategoryM = _a.sent();
                            if (vehicleCategoryM) {
                                return [2 /*return*/, vehicleCategoryM];
                            }
                            else {
                                return [2 /*return*/, [new VehicleCategory()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error in getVehicleCategory -', error_2);
                            return [2 /*return*/, [new VehicleCategory()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        VehicleService.prototype.getEngineStroke = function () {
            return __awaiter(this, void 0, void 0, function () {
                var engineStrokeM, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.vehicleController.getEngineStroke().toPromise()];
                        case 1:
                            engineStrokeM = _a.sent();
                            if (engineStrokeM) {
                                return [2 /*return*/, engineStrokeM];
                            }
                            else {
                                return [2 /*return*/, [new EngineStroke()]];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            console.error('Error in getEngineStroke -', error_3);
                            return [2 /*return*/, [new EngineStroke()]];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        VehicleService.prototype.getVehicleByTypeID = function (currentOrgID, VechileTypeID) {
            return __awaiter(this, void 0, void 0, function () {
                var vechileTypeM, vechileType, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            vechileType = [new VehicleByType()];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.vehicleController.getVehicleByTypeID(currentOrgID, VechileTypeID).toPromise()];
                        case 2:
                            vechileTypeM = _a.sent();
                            if (vechileTypeM) {
                                return [2 /*return*/, vechileTypeM];
                            }
                            else {
                                return [2 /*return*/, vechileType];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_4 = _a.sent();
                            console.error('Error -', error_4);
                            return [2 /*return*/, vechileType];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        VehicleService.prototype.getAllVehicle = function (currentOrgID) {
            return __awaiter(this, void 0, void 0, function () {
                var vechileTypeM, vechileType, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            vechileType = [new VehicleByType()];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.vehicleController.getAllVehicle(currentOrgID).toPromise()];
                        case 2:
                            vechileTypeM = _a.sent();
                            if (vechileTypeM) {
                                return [2 /*return*/, vechileTypeM];
                            }
                            else {
                                return [2 /*return*/, vechileType];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_5 = _a.sent();
                            console.error('Error -', error_5);
                            return [2 /*return*/, vechileType];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return VehicleService;
    }());
    VehicleService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleService, deps: [{ token: VehicleController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    VehicleService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: VehicleService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: VehicleController }]; } });

    var PagePathEnum;
    (function (PagePathEnum) {
        PagePathEnum["VEHICLE_LIST_PAGE"] = "/source/vehicle1/page";
    })(PagePathEnum || (PagePathEnum = {}));

    exports.EMISSION_FACTOR_SOUREC_KEYID_ENUM = void 0;
    (function (EMISSION_FACTOR_SOUREC_KEYID_ENUM) {
        EMISSION_FACTOR_SOUREC_KEYID_ENUM["IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES"] = "ipcc-guidelines-for-national-greenhouse-gas-inventories";
        EMISSION_FACTOR_SOUREC_KEYID_ENUM["GHG_EMISSION_FACTORS_HUB_US_EPA"] = "ghg-emission-factors-hub-us-epa";
    })(exports.EMISSION_FACTOR_SOUREC_KEYID_ENUM || (exports.EMISSION_FACTOR_SOUREC_KEYID_ENUM = {}));

    var ACTIVITY_KEYID_ENUM;
    (function (ACTIVITY_KEYID_ENUM) {
        ACTIVITY_KEYID_ENUM["PURCHASED_ELECTRICITY"] = "purchased-electricity";
        ACTIVITY_KEYID_ENUM["PURCHASED_HEAT_STEAM"] = "purchased-heat-steam";
        ACTIVITY_KEYID_ENUM["PURCHASED_COOLING"] = "purchased-cooling";
        ACTIVITY_KEYID_ENUM["STATIONARY_COMBUSTION"] = "stationary-combustion";
        ACTIVITY_KEYID_ENUM["MOBILE_COMBUSTION"] = "mobile-combustion";
        ACTIVITY_KEYID_ENUM["PURCHASED_GOODS_AND_SERVICES"] = "purchased-goods-and-services";
        ACTIVITY_KEYID_ENUM["CAPITAL_GOODS"] = "capital-goods";
        ACTIVITY_KEYID_ENUM["UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION"] = "upstream-transportation-and-distribution";
        ACTIVITY_KEYID_ENUM["DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION"] = "downstream-transportation-and-distribution";
        ACTIVITY_KEYID_ENUM["BUSINESS_TRAVEL"] = "business-travel";
        ACTIVITY_KEYID_ENUM["REFRIGERATION_AC_AND_FIRE_SUPPRESSION"] = "refrigeration-ac-and-fire-suppression";
        ACTIVITY_KEYID_ENUM["OTHER_FUGITIVE_EMISSION"] = "other-fugitive-emission";
        ACTIVITY_KEYID_ENUM["WASTE_GENERATED_IN_OPERATIONS"] = "waste-generated-in-operations";
        ACTIVITY_KEYID_ENUM["EMPLOYEE_COMMUTING"] = "employee-commuting";
        ACTIVITY_KEYID_ENUM["PROCESS_EMISSION"] = "process-emission";
        ACTIVITY_KEYID_ENUM["CHP_ATTRIBUTION"] = "chp-attribution";
        ACTIVITY_KEYID_ENUM["PROCESS_ELECTRICITY_CONSUMPTION"] = "process-electricity-consumption";
        ACTIVITY_KEYID_ENUM["PROCESS_HEAT_CONSUMPTION"] = "process-heat-consumption";
        ACTIVITY_KEYID_ENUM["PROCESS_FUEL_CONSUMPTION"] = "process-fuel-consumption";
        ACTIVITY_KEYID_ENUM["PURCHASED_PRECURSOR"] = "purchased-precursor";
        ACTIVITY_KEYID_ENUM["PROCESS_PRECURSOR_CONSUMPTION"] = "process-precursor-consumption";
        ACTIVITY_KEYID_ENUM["PROCESS_ELECTRICITY_EXPORT"] = "process-electricity-export";
        ACTIVITY_KEYID_ENUM["PROCESS_HEAT_EXPORT"] = "process-heat-export";
        ACTIVITY_KEYID_ENUM["PROCESS_PRECURSOR_EXPORT"] = "process-precursor-export";
        ACTIVITY_KEYID_ENUM["PROCESS_WASTE_GAS_EXPORT"] = "process-waste-gas-export";
        ACTIVITY_KEYID_ENUM["PROCESS_INTERMEDIATE_PRODUCT_EXPORT"] = "process-intermediate-product-export";
        ACTIVITY_KEYID_ENUM["PROCESS_PRODUCTION_LEVEL"] = "process-production-level";
        ACTIVITY_KEYID_ENUM["SPEND_BASED_METHOD"] = "spend-based-method";
        // factor standard database 
        ACTIVITY_KEYID_ENUM["US_EEIO_KEY_ID"] = "us-eeio";
        // factor standard database 
    })(ACTIVITY_KEYID_ENUM || (ACTIVITY_KEYID_ENUM = {}));
    var ProcessEmissionActivityTypeKeyIDEnum;
    (function (ProcessEmissionActivityTypeKeyIDEnum) {
        ProcessEmissionActivityTypeKeyIDEnum["STANDARD"] = "STANDARD";
        ProcessEmissionActivityTypeKeyIDEnum["CUSTOM"] = "CUSTOM";
    })(ProcessEmissionActivityTypeKeyIDEnum || (ProcessEmissionActivityTypeKeyIDEnum = {}));

    var PreferenceController = /** @class */ (function () {
        function PreferenceController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        PreferenceController.prototype.getOrgPreference = function (orgID) {
            return this.http.get(this.environment.CARBON_ACCOUNTING_API_URL + "organizations/" + orgID + "/preference");
        };
        return PreferenceController;
    }());
    PreferenceController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PreferenceController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var PreferenceService = /** @class */ (function () {
        function PreferenceService(preferenceController) {
            this.preferenceController = preferenceController;
        }
        PreferenceService.prototype.getOrgPreference = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var preference, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            preference = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.preferenceController.getOrgPreference(orgID).toPromise()];
                        case 2:
                            preference = _a.sent();
                            if (preference) {
                                return [2 /*return*/, preference];
                            }
                            else {
                                throw new Error('Preference not found');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, null];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return PreferenceService;
    }());
    PreferenceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceService, deps: [{ token: PreferenceController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PreferenceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PreferenceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: PreferenceController }]; } });

    // /tsc-library/
    var CreateUpdateComponent = /** @class */ (function () {
        function CreateUpdateComponent(dialogData, dialogRef, activatedRoute, router, formBuilder, toastrService, unitService, vehicleController, vehicleService, preferenceService, storageService, tSCCommonService, constant) {
            var _this = this;
            this.dialogData = dialogData;
            this.dialogRef = dialogRef;
            this.activatedRoute = activatedRoute;
            this.router = router;
            this.formBuilder = formBuilder;
            this.toastrService = toastrService;
            this.unitService = unitService;
            this.vehicleController = vehicleController;
            this.vehicleService = vehicleService;
            this.preferenceService = preferenceService;
            this.storageService = storageService;
            this.tSCCommonService = tSCCommonService;
            this.constant = constant;
            this.FormAction = i10.FormAction;
            this.FormErrorEnum = i10.FormErrorEnum;
            this.ButtonLabelEnum = i10.ButtonLabelEnum;
            this.PageTitleEnum = i10.PageTitleEnum;
            this.VIEW_TYPE_ENUM = i10.VIEW_TYPE_ENUM;
            this.VehicleTypeEnum = exports.VehicleTypeEnum;
            this.MaterialFormFieldAppearance = i10.MaterialFormFieldAppearance;
            this.DateInputTypeEnum = i15.DateInputTypeEnum;
            this.isEngineStroke = false;
            this.isEqual = true;
            this.isIpcc = false;
            this.errorHandling = function (control, error) {
                return _this.vehicleFG.get(control).hasError(error);
            };
        }
        CreateUpdateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.rootOrgID = this.storageService.getStorage('rootOrgID');
            this.userID = this.storageService.getStorage('userID');
            this.vehicleFGInit();
            this.ipccFieldHandler();
            if (this.dialogData) {
                this.action = this.dialogData.action;
                this.source = this.dialogData.source;
                if (this.action == i10.FormAction.UPDATE) {
                    this.vehicleID = this.dialogData.vehicleID;
                }
            }
            else {
                this.activatedRoute.data.subscribe(function (data) {
                    _this.action = data.action;
                    _this.source = data.source;
                });
                this.activatedRoute.params.subscribe(function (params) {
                    if (_this.action == i10.FormAction.UPDATE) {
                        _this.vehicleID = params.vehicleID;
                    }
                });
            }
        };
        CreateUpdateComponent.prototype.vehicleFGInit = function () {
            this.vehicleFG = this.formBuilder.group({
                vehicleName: [, i3.Validators.required],
                vehicleNumber: [, i3.Validators.required],
                vehicleTypeID: [, i3.Validators.required],
                vehicleCategoryID: [],
                engineStrokeId: [],
                odoMeterUnitID: [, i3.Validators.required],
                year: []
            });
        };
        CreateUpdateComponent.prototype.dateInpChange = function () {
            var duration = this.yearInput.durationFC.value;
            this.vehicleFG.get('year').patchValue(duration);
        };
        CreateUpdateComponent.prototype.getVehicleType = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.vehicleService.getVehicleType()];
                        case 1:
                            _c.vehicleTypeM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.getVehicleCategory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.vehicleService.getVehicleCategory()];
                        case 1:
                            _c.vehicleCategoryM = (_d.sent());
                            this.vehicleCategoryOR = this.vehicleCategoryM.filter(function (item) { return item['vehicleType']['keyID'] == exports.VehicleTypeEnum.ON_ROAD; });
                            this.vehicleCategoryNR = this.vehicleCategoryM.filter(function (item) { return item['vehicleType']['keyID'] == exports.VehicleTypeEnum.NON_ROAD; });
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.getEngineStroke = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.vehicleService.getEngineStroke()];
                        case 1:
                            _c.engineStrokeM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.getUnit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c, error_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 2, , 3]);
                            _c = this;
                            return [4 /*yield*/, this.unitService.getUnitUsingPublicUrl(["type:" + i5.UnitTypeKeyID.LENGTH])];
                        case 1:
                            _c.unitM = (_d.sent());
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _d.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.onVehicleTypeChange = function (vehicleType) {
            this.vehicleFG.patchValue({
                vehicleCategoryID: null,
                engineStrokeId: null
            });
            if (vehicleType.keyID == exports.VehicleTypeEnum.ON_ROAD) {
                this.isEngineStroke = false;
                this.vehicleCategory = this.vehicleCategoryOR;
            }
            else {
                this.isEngineStroke = true;
                this.vehicleCategory = this.vehicleCategoryNR;
            }
        };
        CreateUpdateComponent.prototype.vehicleExist = function () {
            var _this = this;
            var vehicleNumber = this.vehicleFG.get('vehicleNumber').value;
            this.vehicleController.vehicleExist(this.rootOrgID, vehicleNumber).subscribe(function (res) {
                if (res.status == false) {
                    if (_this.constant.CURRENT_APPLICATION_KEY_ID == applicationService.ApplicationKeyID.NETZERO_KEY_ID) {
                        _this.createVehicle();
                    }
                    else if (_this.constant.CURRENT_APPLICATION_KEY_ID == applicationService.ApplicationKeyID.EMPLOYEE_KEY_ID) {
                        _this.createVehicleForEmployee();
                    }
                }
                else {
                    var toast = void 0;
                    toast = _this.toastrService.getToastStatus(res.status);
                    _this.toastrService.openToast(toast.title, res.message, toast.color);
                }
            });
        };
        CreateUpdateComponent.prototype.vechileSubmit = function () {
            if (this.vehicleFG.invalid) {
                this.toastrService.openToast(i10.InvalidForm.INVALID_FORM_TITLE, i10.InvalidForm.INVALID_FORM_MESSAGE, i4.ToastrColor.ERROR);
                return;
            }
            else {
                if (this.action == i10.FormAction.CREATE) {
                    this.vehicleExist();
                }
                else if (this.action == i10.FormAction.UPDATE) {
                    this.updateVehicle();
                }
            }
        };
        CreateUpdateComponent.prototype.createVehicle = function () {
            var _this = this;
            this.vehicleController.createVehicle(this.rootOrgID, this.vehicleFG.value).subscribe(function (res) {
                var toast;
                toast = _this.toastrService.getToastStatus(res.status);
                _this.toastrService.openToast(toast.title, res.message, toast.color);
                _this.createUpdateVehiclePostAction(res);
            }, function (error) {
                console.log('error in createVehicle -', error);
            });
        };
        CreateUpdateComponent.prototype.createVehicleForEmployee = function () {
            var _this = this;
            this.vehicleController.createVehicleForEmployee(this.rootOrgID, this.userID, this.vehicleFG.value).subscribe(function (res) {
                var toast;
                toast = _this.toastrService.getToastStatus(res.status);
                _this.toastrService.openToast(toast.title, res.message, toast.color);
                _this.createUpdateVehiclePostAction(res);
            }, function (error) {
                console.log('error in createVehicleForEmployee -', error);
            });
        };
        CreateUpdateComponent.prototype.getVehicleByIDHandler = function () {
            var _this = this;
            rxjs.forkJoin([this.getVehicleType(), this.getVehicleCategory(), this.getEngineStroke(), this.getUnit()]).subscribe(function (_c) {
                if (_this.action == i10.FormAction.UPDATE) {
                    _this.getVehicleByID();
                }
            }, function (error) {
                console.error('error in forkJoin -', error);
            });
        };
        CreateUpdateComponent.prototype.getVehicleByID = function () {
            var _this = this;
            this.vehicleController.getVehicleByID(this.rootOrgID, this.vehicleID).subscribe(function (res) {
                _this.vehicle = res;
                _this.patchVehicle();
            }, function (error) {
                console.log(error);
            });
        };
        CreateUpdateComponent.prototype.patchVehicle = function () {
            var _this = this;
            var _a, _b;
            this.onVehicleTypeChange(this.vehicle['vehicleType']);
            this.vehicleFG.patchValue({
                vehicleName: this.vehicle['vehicleName'],
                vehicleTypeID: this.vehicle['vehicleType'].id,
                vehicleNumber: this.vehicle['vehicleNumber'],
                odoMeterUnitID: this.vehicle['odoMeterUnit'].unitID,
                vehicleCategoryID: (_a = this.vehicle.vehicleCategory) === null || _a === void 0 ? void 0 : _a.id,
                year: (_b = this.vehicle) === null || _b === void 0 ? void 0 : _b.year
            });
            if (!this.isIpcc) {
                var durationToPatch = this.vehicleFG.get('year').value;
                this.yearInput.durationFC.patchValue(durationToPatch.toString());
            }
            if (this.vehicle['engineStroke'] !== null) {
                this.isEngineStroke = true;
                this.vehicleFG.patchValue({
                    engineStrokeId: this.vehicle['engineStroke'].id
                });
            }
            this.intialObject = this.vehicleFG.value;
            this.vehicleFG.valueChanges.subscribe(function () {
                _this.isEqual = lodash.isEqual(_this.intialObject, _this.vehicleFG.value);
            });
        };
        CreateUpdateComponent.prototype.updateVehicle = function () {
            var _this = this;
            this.vehicleController.updateVehicle(this.rootOrgID, this.vehicleFG.value, this.vehicleID).subscribe(function (res) {
                var toast;
                toast = _this.toastrService.getToastStatus(res.status);
                _this.toastrService.openToast(toast.title, res.message, toast.color);
                _this.createUpdateVehiclePostAction(res);
            }, function (error) {
                console.log('error in updateVehicle -', error);
            });
        };
        CreateUpdateComponent.prototype.createUpdateVehiclePostAction = function (res) {
            if (this.source == i10.VIEW_TYPE_ENUM.PAGE) {
                this.router.navigate([PagePathEnum.VEHICLE_LIST_PAGE]);
            }
            else if (this.source == i10.VIEW_TYPE_ENUM.DIALOG) {
                var result = {
                    status: i10.DialogEnum.SUCCESS_DR,
                    res: res
                };
                this.dialogRef.close(result);
            }
        };
        CreateUpdateComponent.prototype.cancelButtonClick = function () {
            if (this.source == i10.VIEW_TYPE_ENUM.PAGE) {
                this.tSCCommonService.back();
            }
            else if (this.source == i10.VIEW_TYPE_ENUM.DIALOG) {
                this.dialogRef.close();
            }
        };
        CreateUpdateComponent.prototype.ipccFieldHandler = function () {
            return __awaiter(this, void 0, void 0, function () {
                var preference, activity, calculationApproach_1, emissionFactorSource;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(this.constant.CURRENT_APPLICATION_KEY_ID == applicationService.ApplicationKeyID.NETZERO_KEY_ID)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.preferenceService.getOrgPreference(this.rootOrgID)];
                        case 1:
                            preference = _c.sent();
                            if (preference.preferenceID != null) {
                                activity = preference.activity.find(function (item) { return item.activityKeyID == ACTIVITY_KEYID_ENUM.STATIONARY_COMBUSTION; });
                                // if (activity.emissionFactorSourceKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                //     this.isIpcc = true;
                                // }
                                if (activity) {
                                    calculationApproach_1 = activity.calculationApproach.length > 0 ? activity.calculationApproach[0] : null;
                                    if (calculationApproach_1) {
                                        emissionFactorSource = calculationApproach_1.emissionFactorSource.find(function (ef) { return ef.id == calculationApproach_1.emissionFactorSourceID; });
                                        if (emissionFactorSource) {
                                            if (emissionFactorSource.keyID == exports.EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                                this.isIpcc = true;
                                            }
                                            ;
                                        }
                                    }
                                }
                            }
                            this.getVehicleByIDHandler();
                            return [3 /*break*/, 3];
                        case 2:
                            this.getVehicleByIDHandler();
                            _c.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CreateUpdateComponent;
    }());
    CreateUpdateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateComponent, deps: [{ token: i1$1.MAT_DIALOG_DATA, optional: true }, { token: i1__namespace$1.MatDialogRef, optional: true }, { token: i2__namespace.ActivatedRoute }, { token: i2__namespace.Router }, { token: i3__namespace.FormBuilder }, { token: i4__namespace.ToastrService }, { token: i5__namespace.UnitService }, { token: VehicleController }, { token: VehicleService }, { token: PreferenceService }, { token: i9__namespace.StorageService }, { token: i10__namespace.TSCCommonService }, { token: 'constant' }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateComponent, selector: "app-create-update", viewQueries: [{ propertyName: "yearInput", first: true, predicate: ["yearInput"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE :\n                PageTitleEnum.UPDATE }} vehicle\n            </div>\n            <div class=\"pageSubtitle\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\" [ngClass]=\"{ 'vechileCreateUpdateForm' : source == VIEW_TYPE_ENUM.PAGE }\">\n        <form [formGroup]=\"vehicleFG\" (ngSubmit)=\"vechileSubmit()\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Vehicle number</mat-label>\n                        <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Vehicle number\"\n                            formControlName=\"vehicleNumber\" required />\n                        <mat-error *ngIf=\"errorHandling('vehicleNumber', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Vehicle name</mat-label>\n                        <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Vehicle name\"\n                            formControlName=\"vehicleName\" required />\n                        <mat-error *ngIf=\"errorHandling('vehicleName', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"radioBtnGroupLabel\">Select a vehicle type</div>\n                    <mat-radio-group formControlName=\"vehicleTypeID\">\n                        <div class=\"row mt-1\">\n                            <div class=\"col-sm-6\" *ngFor=\"let data of vehicleTypeM\">\n                                <mat-radio-button class=\"radioBtnLabel\" [value]=\"data.id\"\n                                    (change)=\"onVehicleTypeChange(data)\">\n                                    {{ data.name }}\n                                </mat-radio-button>\n                            </div>\n                        </div>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\" *ngIf=\"!isIpcc\">\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select vehicle category\n                        </mat-label>\n                        <mat-select formControlName=\"vehicleCategoryID\" required>\n                            <mat-option *ngFor=\"let method of vehicleCategory\" [value]=\"method.id\">\n                                {{ method.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('vehicleCategoryID', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field *ngIf=\"isEngineStroke\" class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select engine stroke</mat-label>\n                        <mat-select formControlName=\"engineStrokeId\" required>\n                            <mat-option *ngFor=\"let data of engineStrokeM\" [value]=\"data.id\">\n                                <span class=\"d-flex justify-content-between\">{{ data.name }}\n                                </span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('engineStrokeId', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\" *ngIf=\"!isIpcc\">\n                    <lib-date-input class=\"cursorPointer\"  #yearInput (emitFilter)=\"dateInpChange()\" [materialFieldWidthInp]=\"true\"\n                        [materialFormFieldAppearanceInp]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\"\n                        [isMandatoryFieldInp]=\"true\" [dateInputTypeInp]=\"DateInputTypeEnum.YEAR_INPUT\"\n                        [labelInp]=\"'Vehicle Year'\"></lib-date-input>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select odometer unit</mat-label>\n                        <mat-select formControlName=\"odoMeterUnitID\" required>\n                            <mat-option *ngFor=\"let units of unitM\" [value]=\"units.id\">\n                                <span class=\"d-flex justify-content-between\">{{ units.name }}\n                                    <span>{{ units.uomCode }} </span></span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('odoMeterUnitID', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"float-end\">\n                <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancelButtonClick()\">\n                    Cancel\n                </button>\n\n                <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                        'btn-success' : action == FormAction.CREATE,\n                        'btn-primary' : action == FormAction.UPDATE,\n                        'disabled' : action == FormAction.UPDATE && isEqual\n                    }\" type=\"submit\">{{ action ==\n                    FormAction.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n                    ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                </button>\n            </div>\n        </form>\n    </div>\n</div>", styles: [".vechileCreateUpdateForm{width:600px}\n"], components: [{ type: i11__namespace.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i12__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i13__namespace.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i14__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i15__namespace.DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "frequencyInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }], directives: [{ type: i16__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3__namespace.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i11__namespace.MatLabel, selector: "mat-label" }, { type: i17__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i3__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3__namespace.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i16__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i11__namespace.MatError, selector: "mat-error", inputs: ["id"] }, { type: i12__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i16__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-create-update',
                        templateUrl: './create-update.component.html',
                        styleUrls: ['./create-update.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i1$1.MAT_DIALOG_DATA]
                        }] }, { type: i1__namespace$1.MatDialogRef, decorators: [{
                            type: i0.Optional
                        }] }, { type: i2__namespace.ActivatedRoute }, { type: i2__namespace.Router }, { type: i3__namespace.FormBuilder }, { type: i4__namespace.ToastrService }, { type: i5__namespace.UnitService }, { type: VehicleController }, { type: VehicleService }, { type: PreferenceService }, { type: i9__namespace.StorageService }, { type: i10__namespace.TSCCommonService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['constant']
                        }] }];
        }, propDecorators: { yearInput: [{
                    type: i0.ViewChild,
                    args: ['yearInput']
                }] } });

    var routes$1 = [
        {
            path: '',
            component: CreateUpdateComponent,
        }
    ];
    var CreateUpdateRoutingModule = /** @class */ (function () {
        function CreateUpdateRoutingModule() {
        }
        return CreateUpdateRoutingModule;
    }());
    CreateUpdateRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, imports: [i2__namespace.RouterModule], exports: [i2.RouterModule] });
    CreateUpdateRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, imports: [[i2.RouterModule.forChild(routes$1)], i2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.RouterModule.forChild(routes$1)],
                        exports: [i2.RouterModule]
                    }]
            }] });

    var CreateUpdateModule = /** @class */ (function () {
        function CreateUpdateModule() {
        }
        return CreateUpdateModule;
    }());
    CreateUpdateModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, declarations: [CreateUpdateComponent], imports: [i16.CommonModule,
            i14$1.NgbModule,
            CreateUpdateRoutingModule,
            i3.FormsModule,
            i3.ReactiveFormsModule,
            i10$1.MatTableModule,
            icon.MatIconModule,
            i17.MatInputModule,
            i12.MatRadioModule,
            i13.MatSelectModule,
            i13$1.MatTooltipModule,
            i14.MatOptionModule,
            datepicker.MatDatepickerModule,
            i11.MatFormFieldModule,
            i11$1.MatPaginatorModule,
            button.MatButtonModule,
            ngxDaterangepickerMaterial.NgxDaterangepickerMd,
            i15.DateInputModule], exports: [CreateUpdateComponent] });
    CreateUpdateModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, imports: [[
                i16.CommonModule,
                i14$1.NgbModule,
                CreateUpdateRoutingModule,
                i3.FormsModule,
                i3.ReactiveFormsModule,
                i10$1.MatTableModule,
                icon.MatIconModule,
                i17.MatInputModule,
                i12.MatRadioModule,
                i13.MatSelectModule,
                i13$1.MatTooltipModule,
                i14.MatOptionModule,
                datepicker.MatDatepickerModule,
                i11.MatFormFieldModule,
                i11$1.MatPaginatorModule,
                button.MatButtonModule,
                ngxDaterangepickerMaterial.NgxDaterangepickerMd,
                i15.DateInputModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateComponent
                        ],
                        imports: [
                            i16.CommonModule,
                            i14$1.NgbModule,
                            CreateUpdateRoutingModule,
                            i3.FormsModule,
                            i3.ReactiveFormsModule,
                            i10$1.MatTableModule,
                            icon.MatIconModule,
                            i17.MatInputModule,
                            i12.MatRadioModule,
                            i13.MatSelectModule,
                            i13$1.MatTooltipModule,
                            i14.MatOptionModule,
                            datepicker.MatDatepickerModule,
                            i11.MatFormFieldModule,
                            i11$1.MatPaginatorModule,
                            button.MatButtonModule,
                            ngxDaterangepickerMaterial.NgxDaterangepickerMd,
                            i15.DateInputModule
                        ],
                        exports: [
                            CreateUpdateComponent
                        ]
                    }]
            }] });

    var createUpdate_module = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CreateUpdateModule: CreateUpdateModule
    });

    // /tsc-library/
    var PageComponent = /** @class */ (function () {
        function PageComponent(dialog, vehicleController, storageService, vehicleService, preferenceService, unitService, toastrService, constant) {
            var _this = this;
            this.dialog = dialog;
            this.vehicleController = vehicleController;
            this.storageService = storageService;
            this.vehicleService = vehicleService;
            this.preferenceService = preferenceService;
            this.unitService = unitService;
            this.toastrService = toastrService;
            this.constant = constant;
            this.COMMON_CONSTANT = i10.COMMON_CONSTANT;
            this.MATERIAL_CONSTANT = i10.MATERIAL_CONSTANT;
            this.TABLE_CONSTANT = i10.TABLE_CONSTANT;
            this.ButtonTooltipEnum = i10.ButtonTooltipEnum;
            this.FormAction = i10.FormAction;
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faEllipsisV = freeSolidSvgIcons.faEllipsisV;
            this.displayedColumns = ['vehicleNumber', 'vehicleName', 'vehicleType', 'vehicleCategory', 'engineStroke', 'year', 'odometer', 'option'];
            this.searchFlag = false;
            this.error = false;
            this.isIpcc = false;
            this.isDataLoaded = false;
            this.vehicleTypeList = [];
            this.vehicleTypeFc = new i3.FormControl();
            this.vehicleTypeFlag = false;
            this.vehicleCategoryList = [];
            this.vehicleCategoryFc = new i3.FormControl();
            this.vehicleCategoryFlag = false;
            this.odometerList = [];
            this.odometerFc = new i3.FormControl();
            this.odometerFlag = false;
            this.filterArr = [];
            this.createUpdateVehicle = function (actionP, row) {
                var action = actionP;
                var dialogRef;
                var data;
                if (action == i10.FormAction.CREATE) {
                    data = {
                        action: i10.FormAction.CREATE,
                        source: i10.VIEW_TYPE_ENUM.DIALOG
                    };
                }
                else if (action == i10.FormAction.UPDATE) {
                    data = {
                        action: i10.FormAction.UPDATE,
                        source: i10.VIEW_TYPE_ENUM.DIALOG,
                        vehicleID: row.id
                    };
                }
                dialogRef = _this.dialog.open(CreateUpdateComponent, {
                    data: data,
                    minWidth: '600px',
                    maxWidth: '600px',
                    height: '100%',
                    position: { right: '-2px', top: '0px' },
                    panelClass: 'matDialogContainerOverride'
                });
                dialogRef.afterClosed()
                    .subscribe(function (result) {
                    if (result.status == i10.DialogEnum.SUCCESS_DR) {
                        _this.refreshBtn.nativeElement.click();
                    }
                });
            };
        }
        PageComponent.prototype.ngOnInit = function () {
            this.rootOrgID = this.storageService.getStorage('rootOrgID');
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            this.getVehicleType();
            this.getVehicleCategory();
            this.getUnit();
        };
        PageComponent.prototype.SearchFn = function ($event) {
            this.searchValue = $event;
            if (this.searchValue.length > 0) {
                this.searchFlag = true;
            }
            else {
                this.searchFlag = false;
            }
            this.vehicleCategoryFlag = false;
            this.vehicleTypeFlag = false;
            this.refreshBtn.nativeElement.click();
        };
        PageComponent.prototype.getVehicleCategory = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.vehicleService.getVehicleCategory()];
                        case 1:
                            _a.vehicleCategoryList = _b.sent();
                            this.vehicleCategoryList.unshift({ id: 'all', name: 'All', keyID: 'all' });
                            return [2 /*return*/];
                    }
                });
            });
        };
        PageComponent.prototype.getVehicleType = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.vehicleService.getVehicleType()];
                        case 1:
                            _a.vehicleTypeList = _b.sent();
                            this.vehicleTypeList.unshift({ id: 'all', name: 'All', keyID: 'all' });
                            return [2 /*return*/];
                    }
                });
            });
        };
        PageComponent.prototype.getUnit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            _a = this;
                            return [4 /*yield*/, this.unitService.getUnitUsingPublicUrl(["type:" + i5.UnitTypeKeyID.LENGTH])];
                        case 1:
                            _a.odometerList = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _b.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PageComponent.prototype.ngAfterViewInit = function () {
            this.ipccFieldHandler();
        };
        PageComponent.prototype.getVehicleByPage = function () {
            var _this = this;
            this.getMerge().pipe(operators.startWith({}), operators.switchMap(function () {
                _this.filterArr = [];
                if (_this.vehicleTypeFlag) {
                    if (_this.vehicleTypeFc.value == 'all') {
                        _this.vehicleTypeFlag = false;
                    }
                    else {
                        _this.filterArr.push('vehicleType:' + _this.vehicleTypeFc.value);
                    }
                }
                if (_this.vehicleCategoryFlag) {
                    if (_this.vehicleCategoryFc.value == 'all') {
                        _this.vehicleCategoryFlag = false;
                    }
                    else {
                        _this.filterArr.push('vehicleCategory:' + _this.vehicleCategoryFc.value);
                    }
                }
                if (_this.odometerFlag) {
                    if (_this.odometerFc.value == 'Select none') {
                        _this.odometerFlag = false;
                    }
                    else {
                        _this.filterArr.push('vehicleOdoMeterUnit:' + _this.odometerFc.value);
                    }
                }
                if (_this.searchFlag) {
                    _this.filterArr.push('searchVehicleName:' + _this.searchValue);
                }
                return _this.vehicleController.getVehicleByPage(_this.paginator.pageIndex, _this.paginator.pageSize, _this.currentOrgID, _this.filterArr).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (dataSource) {
                if (dataSource === null) {
                    return [];
                }
                _this.resultLength = dataSource.totalCount;
                return dataSource.vehicle;
            })).subscribe(function (dataSource) { return (_this.dataSource = dataSource); });
        };
        PageComponent.prototype.bulkUpload = function () {
            var _this = this;
            var dialogRef = this.dialog.open(i10.BulkUploadDialogLib, {
                data: { source: "assets/files/vehicle-upload.xlsx" },
                minWidth: "600px",
                maxWidth: "600px",
            });
            dialogRef.afterClosed().subscribe(function (response) {
                _this.bulkUploadResponse = response;
                if (response) {
                    _this.vehicleBulkUpload();
                }
            });
        };
        PageComponent.prototype.toFormData = function () {
            var formData = new FormData();
            formData.append('file', this.bulkUploadResponse);
            return formData;
        };
        PageComponent.prototype.vehicleBulkUpload = function () {
            var _this = this;
            this.vehicleController.vehicleBulkUpload(this.currentOrgID, this.toFormData())
                .subscribe(function (bulkUploadRes) {
                if (bulkUploadRes['title'] == 'Success') {
                    _this.toastrService.openToast(i4.ToastrTitle.SUCCESS, bulkUploadRes['message'], bulkUploadRes['result']);
                }
                else if (bulkUploadRes['title'] == 'Error') {
                    _this.error = true;
                    _this.title = bulkUploadRes['title'];
                    _this.message = bulkUploadRes['message'];
                    _this.response = bulkUploadRes['response'];
                    _this.errorDialog(_this.title, _this.message, _this.response);
                    _this.getErrorData();
                }
            });
        };
        PageComponent.prototype.errorDialog = function (title, message, response) {
            var _this = this;
            var dialogRef = this.dialog.open(i10.DialogOneComponent, {
                minWidth: '450px',
                maxWidth: '700px',
                data: {
                    type: i10.DialogOneEnum.CONFIRMATION,
                    icon: 'warning',
                    header: title,
                    body: message,
                    buttonOne: 'Cancel',
                    buttonTwo: 'Try again'
                }
            });
            dialogRef.afterClosed()
                .subscribe(function (result) {
                if (result) {
                    _this.bulkUpload();
                }
                else { }
            });
        };
        PageComponent.prototype.getErrorData = function () {
            if (this.response['duplicateDataInRows'].length != 0) {
                var dupDataInRows = this.response['duplicateDataInRows'];
                this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
            }
            if (this.response['mandatoryDataMissingInRows'].length != 0) {
                var manDataMissingInRows = this.response['mandatoryDataMissingInRows'];
                this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
            }
        };
        PageComponent.prototype.refreshFn = function () {
            this.vehicleTypeFlag = false;
            this.vehicleCategoryFlag = false;
            this.odometerFlag = false;
            this.refreshBtn.nativeElement.click();
        };
        PageComponent.prototype.handleClick = function (func, params) {
            func.apply(void 0, __spreadArray([], __read(params)));
        };
        PageComponent.prototype.ipccFieldHandler = function () {
            return __awaiter(this, void 0, void 0, function () {
                var preference, activity, calculationApproach_1, emissionFactorSource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.constant.CURRENT_APPLICATION_KEY_ID == applicationService.ApplicationKeyID.NETZERO_KEY_ID)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.preferenceService.getOrgPreference(this.rootOrgID)];
                        case 1:
                            preference = _a.sent();
                            if (preference.preferenceID != null) {
                                activity = preference.activity.find(function (item) { return item.activityKeyID == ACTIVITY_KEYID_ENUM.STATIONARY_COMBUSTION; });
                                // if (activity.emissionFactorSourceKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                //     this.isIpcc = true;
                                // }
                                if (activity) {
                                    calculationApproach_1 = activity.calculationApproach.length > 0 ? activity.calculationApproach[0] : null;
                                    if (calculationApproach_1) {
                                        emissionFactorSource = calculationApproach_1.emissionFactorSource.find(function (ef) { return ef.id == calculationApproach_1.emissionFactorSourceID; });
                                        if (emissionFactorSource) {
                                            if (emissionFactorSource.keyID == exports.EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                                this.isIpcc = true;
                                            }
                                            ;
                                        }
                                    }
                                }
                            }
                            this.getVehicleByPage();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        PageComponent.prototype.getMerge = function () {
            if (this.isIpcc) {
                return rxjs.merge(this.paginator.page, this.vehicleType.mono, this.odometer.mono, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click'));
            }
            else {
                return rxjs.merge(this.paginator.page, this.vehicleType.mono, this.vehicleCategory.mono, this.odometer.mono, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click'));
            }
        };
        return PageComponent;
    }());
    PageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, deps: [{ token: i1__namespace$1.MatDialog }, { token: VehicleController }, { token: i9__namespace.StorageService }, { token: VehicleService }, { token: PreferenceService }, { token: i5__namespace.UnitService }, { token: i4__namespace.ToastrService }, { token: 'constant' }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "paginator", first: true, predicate: i11$1.MatPaginator, descendants: true, static: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true, static: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true, static: true }, { propertyName: "vehicleType", first: true, predicate: ["vehicleType"], descendants: true }, { propertyName: "vehicleCategory", first: true, predicate: ["vehicleCategory"], descendants: true }, { propertyName: "odometer", first: true, predicate: ["odometer"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Vehicles</div>\n            <div class=\"pageSubtitle\">Create company owned vehicles to track their emissions.</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar [searchBy]=\"'vehicle name'\"\n                    (emitSearch)=\"SearchFn($event)\"></lib-search-bar-one>\n\n                <button class=\"btn btn-sm btn-light centerAlign me-3 py-1 refreshBtn\" #refreshBtn matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.REFRESH\">\n                    <span class=\"material-symbols-outlined\">\n                        refresh\n                    </span>\n                </button>\n\n\n\n                <button type=\"button\" class=\"btn btn-sm btn-success btnRightRadiusZero\"\n                    (click)=\"createUpdateVehicle(FormAction.CREATE, '')\" matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.CREATE\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp;&nbsp;Vehicle\n                </button>\n\n                <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\" matTooltipPosition=\"below\"\n                    [matTooltip]=\"ButtonTooltipEnum.MORE\">\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-sm btn-success btnLeftRadiusZero\">\n                    </button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\" (click)=\"bulkUpload()\" matRipple\n                            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n                            Import\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort matSort matSortActive=\"employeeID\" matSortDirection=\"desc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"vehicleNumber\">\n            <th mat-header-cell class=\"col-sm-2 \" *matHeaderCellDef disableClear> Vehicle Number </th>\n            <td mat-cell *matCellDef=\"let row\"> {{ row.vehicleNumber ? row.vehicleNumber : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleName\">\n            <th mat-header-cell class=\"col-sm-2\" *matHeaderCellDef> Vehicle Name </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.vehicleName ? row.vehicleName : COMMON_CONSTANT.HYPHEN}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleType\">\n            <th mat-header-cell class=\"vehicleType\" *matHeaderCellDef disableClear>\n                <funnel-filter #vehicleType header=\"Vehicle Type\" type=\"mono\" value=\"id\" [entityList]=\"vehicleTypeList\"\n                    [selectFC]=\"vehicleTypeFc\" [active]=\"vehicleTypeFlag\" (mono)=\"vehicleTypeFlag = true;\">\n                </funnel-filter>\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.vehicleType.name ? row.vehicleType.name : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleCategory\">\n            <th mat-header-cell class=\"vehicleCategory\" *matHeaderCellDef disableClear [ngClass]=\"{'d-none': isIpcc}\">\n                <funnel-filter #vehicleCategory header=\"Vehicle Category\" value=\"id\" type=\"mono\"\n                    [entityList]=\"vehicleCategoryList\" [selectFC]=\"vehicleCategoryFc\" [active]=\"vehicleCategoryFlag\"\n                    (mono)=\"vehicleCategoryFlag = true;\"></funnel-filter>\n            </th>\n\n            <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{'d-none': isIpcc}\"> {{row.vehicleCategory ?\n                row.vehicleCategory.name :\n                COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"engineStroke\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef [ngClass]=\"{'d-none': isIpcc}\"> Engine Stroke </th>\n            <td mat-cell *matCellDef=\"let row\" [ngClass]=\"{'d-none': isIpcc}\">\n                {{ row.engineStroke ? row.engineStroke.name : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"year\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef [ngClass]=\"{'d-none': isIpcc}\"> Year </th>\n            <td mat-cell *matCellDef=\"let row;\" [ngClass]=\"{'d-none': isIpcc}\">\n                {{row.year ? row.year : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"odometer\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef> <funnel-filter #odometer header=\"Odometer\"\n                    type=\"mono\" value=\"id\" view=\"name\" [entityList]=\"odometerList\" [selectFC]=\"odometerFc\"\n                    [active]=\"odometerFlag\" (mono)=\"odometerFlag = true;\"></funnel-filter></th>\n            <td mat-cell *matCellDef=\"let row;\">\n                {{row.odoMeterUnit.uomCode ? row.odoMeterUnit.uomCode : COMMON_CONSTANT.HYPHEN}}\n            </td>\n            <td mat-cell *matCellDef=\"let row;\">\n                {{ row.odoMeterUnit.uomCode ? row.odoMeterUnit.uomName + \" (\" + row.odoMeterUnit.uomCode + \")\" :\n                COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"option\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let row\">\n                <div class=\"centerAlignVertical\">\n                    <ng-container *ngTemplateOutlet=\"icon; \n                    context: {\n                        icon: 'edit',\n                        tooltip: ButtonTooltipEnum.UPDATE,\n                        class: 'text-primary',\n                        function: createUpdateVehicle,\n                        functionParameter: [FormAction.UPDATE, row]\n                    }\">\n                    </ng-container>\n                </div>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"dataRow\"></tr>\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumns.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator class=\"roundedBorder\" #paginator [length]=\"resultLength\"\n        [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\" [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\"\n        showFirstLastButtons>\n    </mat-paginator>\n</div>\n\n<ng-template #icon let-icon=\"icon\" let-tooltip=\"tooltip\" let-class=\"class\" let-function=\"function\"\n    let-functionParameter=\"functionParameter\">\n    <button class=\"iconBtn centerAlign\" [class]=\"class\" matTooltipPosition=\"below\" [matTooltip]=\"tooltip\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" (click)=\"handleClick(function, functionParameter)\">\n        <span class=\"material-symbols-outlined icon\">\n            {{ icon }}\n        </span>\n    </button>\n</ng-template>\n", styles: [".vehicleType{width:155px}.vehicleCategory{width:150px}\n"], components: [{ type: i10__namespace.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear", "emitValueOnChange"], outputs: ["emitSearch"] }, { type: i9__namespace$1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i10__namespace$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10__namespace.FunnelFilterComponent, selector: "funnel-filter", inputs: ["header", "active", "showSearchBar", "searchByPlaceholder", "searchBy", "selectAllLabel", "entityList", "view", "value", "type", "selectFC", "resetFlag"], outputs: ["mono", "multi", "selected"] }, { type: i10__namespace$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i10__namespace$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i11__namespace$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i14__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i13__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i14__namespace$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i14__namespace$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i14__namespace$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i10__namespace$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i10__namespace$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i10__namespace$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i10__namespace$1.MatCellDef, selector: "[matCellDef]" }, { type: i10__namespace$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i16__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i16__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i10__namespace$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i10__namespace$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i10__namespace$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$1.MatDialog }, { type: VehicleController }, { type: i9__namespace.StorageService }, { type: VehicleService }, { type: PreferenceService }, { type: i5__namespace.UnitService }, { type: i4__namespace.ToastrService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['constant']
                        }] }];
        }, propDecorators: { paginator: [{
                    type: i0.ViewChild,
                    args: [i11$1.MatPaginator, { static: true }]
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar', { static: true }]
                }], refreshBtn: [{
                    type: i0.ViewChild,
                    args: ['refreshBtn', { static: true }]
                }], vehicleType: [{
                    type: i0.ViewChild,
                    args: ['vehicleType']
                }], vehicleCategory: [{
                    type: i0.ViewChild,
                    args: ['vehicleCategory']
                }], odometer: [{
                    type: i0.ViewChild,
                    args: ['odometer']
                }] } });

    var routes = [
        {
            path: '',
            component: PageComponent,
        }
    ];
    var PageRoutingModule = /** @class */ (function () {
        function PageRoutingModule() {
        }
        return PageRoutingModule;
    }());
    PageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [i2__namespace.RouterModule], exports: [i2.RouterModule] });
    PageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [[i2.RouterModule.forChild(routes)], i2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.RouterModule.forChild(routes)],
                        exports: [i2.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var PageModule = /** @class */ (function () {
        function PageModule() {
        }
        return PageModule;
    }());
    PageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, declarations: [PageComponent], imports: [i16.CommonModule,
            i14.MatRippleModule,
            i13$1.MatTooltipModule,
            i10$1.MatTableModule,
            i11$1.MatPaginatorModule,
            button.MatButtonModule,
            i1$1.MatDialogModule,
            // CreateUpdateModule,
            i14$1.NgbModule,
            i9$1.FontAwesomeModule,
            PageRoutingModule,
            i10.SearchBarOneModule,
            i10.FunnelFilterModule,
            i15.DateInputModule] });
    PageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, imports: [[
                i16.CommonModule,
                i14.MatRippleModule,
                i13$1.MatTooltipModule,
                i10$1.MatTableModule,
                i11$1.MatPaginatorModule,
                button.MatButtonModule,
                i1$1.MatDialogModule,
                // CreateUpdateModule,
                i14$1.NgbModule,
                i9$1.FontAwesomeModule,
                PageRoutingModule,
                i10.SearchBarOneModule,
                i10.FunnelFilterModule,
                i15.DateInputModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PageComponent,
                        ],
                        imports: [
                            i16.CommonModule,
                            i14.MatRippleModule,
                            i13$1.MatTooltipModule,
                            i10$1.MatTableModule,
                            i11$1.MatPaginatorModule,
                            button.MatButtonModule,
                            i1$1.MatDialogModule,
                            // CreateUpdateModule,
                            i14$1.NgbModule,
                            i9$1.FontAwesomeModule,
                            PageRoutingModule,
                            i10.SearchBarOneModule,
                            i10.FunnelFilterModule,
                            i15.DateInputModule,
                        ]
                    }]
            }] });

    var page_module = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PageModule: PageModule
    });

    /*
     * Public API Surface of netzero
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CreateUpdateComponent = CreateUpdateComponent;
    exports.CreateUpdateModule = CreateUpdateModule;
    exports.EngineStroke = EngineStroke;
    exports.NetzeroComponent = NetzeroComponent;
    exports.NetzeroModule = NetzeroModule;
    exports.NetzeroService = NetzeroService;
    exports.PageComponent = PageComponent;
    exports.PageModule = PageModule;
    exports.Vehicle = Vehicle;
    exports.VehicleByType = VehicleByType;
    exports.VehicleCategory = VehicleCategory;
    exports.VehicleModule = VehicleModule;
    exports.VehiclePage = VehiclePage;
    exports.VehicleService = VehicleService;
    exports.VehicleType = VehicleType;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-netzero.umd.js.map
