(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@library/facility-service'), require('@angular/router'), require('@library/storage-service'), require('@library/application-service')) :
    typeof define === 'function' && define.amd ? define('@library/organization-service', ['exports', '@angular/core', '@angular/common/http', '@library/facility-service', '@angular/router', '@library/storage-service', '@library/application-service'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["organization-service"] = {}), global.ng.core, global.ng.common.http, global.i5, global.ng.router, global.i2, global.i3));
})(this, (function (exports, i0, i1, i5, i1$1, i2, i3) { 'use strict';

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
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var OrganizationServiceService = /** @class */ (function () {
        function OrganizationServiceService() {
        }
        return OrganizationServiceService;
    }());
    OrganizationServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrganizationServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var OrganizationServiceComponent = /** @class */ (function () {
        function OrganizationServiceComponent() {
        }
        OrganizationServiceComponent.prototype.ngOnInit = function () {
        };
        return OrganizationServiceComponent;
    }());
    OrganizationServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    OrganizationServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationServiceComponent, selector: "lib-organization-service", ngImport: i0__namespace, template: "\n    <p>\n      organization-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-organization-service',
                        template: "\n    <p>\n      organization-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var OrganizationServiceModule = /** @class */ (function () {
        function OrganizationServiceModule() {
        }
        OrganizationServiceModule.forRoot = function (environment) {
            return {
                ngModule: OrganizationServiceModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return OrganizationServiceModule;
    }());
    OrganizationServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OrganizationServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceModule, declarations: [OrganizationServiceComponent], exports: [OrganizationServiceComponent] });
    OrganizationServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            OrganizationServiceComponent
                        ],
                        imports: [],
                        exports: [
                            OrganizationServiceComponent
                        ]
                    }]
            }] });

    exports.OrgType = void 0;
    (function (OrgType) {
        OrgType["SITE"] = "SITE";
        OrgType["ORGANIZATION"] = "ORG";
        OrgType["NETZERO_ADMIN"] = "NETZEROADMIN";
        OrgType["ORGANIZAION_GROUP"] = "ORG_GROUP";
    })(exports.OrgType || (exports.OrgType = {}));
    exports.OrgStatus = void 0;
    (function (OrgStatus) {
        OrgStatus["ACTIVE_STATUS"] = "ACTIVE";
        OrgStatus["INACTIVE_STATUS"] = "INACTIVE";
        OrgStatus["SETUP_PENDING_STATUS"] = "SETUP_PENDING";
    })(exports.OrgStatus || (exports.OrgStatus = {}));
    exports.OrgSiteAccessType = void 0;
    (function (OrgSiteAccessType) {
        OrgSiteAccessType["ORG"] = "ORG";
        OrgSiteAccessType["SITE"] = "SITE";
        OrgSiteAccessType["ORG_SITE"] = "ORG_SITE";
    })(exports.OrgSiteAccessType || (exports.OrgSiteAccessType = {}));
    exports.OrganizationStatus = void 0;
    (function (OrganizationStatus) {
        OrganizationStatus["ACTIVE"] = "ACTIVE";
        OrganizationStatus["INACTIVE"] = "INACTIVE";
        OrganizationStatus["PENDING_SETUP"] = "PENDING_SETUP";
    })(exports.OrganizationStatus || (exports.OrganizationStatus = {}));

    var Organization = /** @class */ (function () {
        function Organization() {
        }
        return Organization;
    }());
    var OrgAccess = /** @class */ (function () {
        function OrgAccess() {
        }
        return OrgAccess;
    }());
    var OrgSiteAccess = /** @class */ (function () {
        function OrgSiteAccess() {
        }
        return OrgSiteAccess;
    }());

    var OrganizationController = /** @class */ (function () {
        function OrganizationController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        OrganizationController.prototype.getOrganizationByID = function (orgID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "organizations/" + orgID);
        };
        OrganizationController.prototype.getOrgByAccess = function (userID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "users/" + userID + "/organizations-sites/access");
        };
        OrganizationController.prototype.getOrganizations = function (orgID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "organizations/" + orgID + "/org-facility");
        };
        OrganizationController.prototype.getOrganizationsByType = function (orgID, type) {
            var params = new i1.HttpParams();
            params = params.append('type', type);
            return this.http.get(this.environment.ORGANIZATION_API_URL + "organizations/" + orgID + "/org-facility", { params: params });
        };
        OrganizationController.prototype.getOrgSiteWithUserAccess = function (userID) {
            return this.http.get(this.environment.ORGANIZATION_API_URL + "users/" + userID + "/organizations-sites/access-new");
        };
        return OrganizationController;
    }());
    OrganizationController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrganizationController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationController, decorators: [{
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

    var OrganizationService = /** @class */ (function () {
        function OrganizationService(router, storageService, applicationService, organizationController, facilityService) {
            this.router = router;
            this.storageService = storageService;
            this.applicationService = applicationService;
            this.organizationController = organizationController;
            this.facilityService = facilityService;
            this.organizationM = new Organization();
            this.facilityM = new i5.Facility();
            this.redirectUrl = '';
        }
        OrganizationService.prototype.orgSwitch = function (orgID, orgSwitchRedirect) {
            var applicationKeyID;
            var token;
            var userID;
            var queryParam;
            var currentUrl = '';
            applicationKeyID = this.storageService.getStorage('applicationKeyID');
            token = this.storageService.getStorage('token');
            userID = this.storageService.getStorage('userID');
            if (orgSwitchRedirect == 'NO') {
                currentUrl = '';
            }
            else {
                currentUrl = this.router.url;
            }
            queryParam = "login?token=" + token + "&userID=" + userID + "&orgID=" + orgID + "&redirectUrl=" + currentUrl;
            window.location.href = this.applicationService.appRedirect(applicationKeyID) + queryParam;
        };
        OrganizationService.prototype.getOrganizationByID = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var organizationM, organization, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            organization = new Organization();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.organizationController.getOrganizationByID(orgID).toPromise()];
                        case 2:
                            organizationM = _a.sent();
                            if (organizationM) {
                                return [2 /*return*/, organizationM];
                            }
                            else {
                                return [2 /*return*/, organization];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, organization];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationService.prototype.getOrgByAccess = function (userID) {
            return __awaiter(this, void 0, void 0, function () {
                var orgAccessM, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.organizationController.getOrgByAccess(userID).toPromise()];
                        case 1:
                            orgAccessM = _a.sent();
                            return [2 /*return*/, orgAccessM];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Error -', error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationService.prototype.getOrganizations = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var orgAccessM, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.organizationController.getOrganizations(orgID).toPromise()];
                        case 1:
                            orgAccessM = _a.sent();
                            return [2 /*return*/, orgAccessM];
                        case 2:
                            error_3 = _a.sent();
                            console.error('Error -', error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationService.prototype.getOrganizationsByType = function (orgID, type) {
            return __awaiter(this, void 0, void 0, function () {
                var orgAccessM, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.organizationController.getOrganizationsByType(orgID, type).toPromise()];
                        case 1:
                            orgAccessM = _a.sent();
                            return [2 /*return*/, orgAccessM];
                        case 2:
                            error_4 = _a.sent();
                            console.error('Error in getOrganizationsByType -', error_4);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationService.prototype.getOrgSiteWithUserAccess = function (userID) {
            return __awaiter(this, void 0, void 0, function () {
                var orgSiteAccessM, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.organizationController.getOrgSiteWithUserAccess(userID).toPromise()];
                        case 1:
                            orgSiteAccessM = _a.sent();
                            return [2 /*return*/, orgSiteAccessM];
                        case 2:
                            error_5 = _a.sent();
                            console.error('Error -', error_5);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationService.prototype.getOrgStatus = function (status) {
            switch (status) {
                case exports.OrganizationStatus.ACTIVE:
                    return 'Active';
                case exports.OrganizationStatus.INACTIVE:
                    return 'Inactive';
                case exports.OrganizationStatus.PENDING_SETUP:
                    return 'Pending setup';
                default:
                    console.log('Invalid organization status');
            }
        };
        OrganizationService.prototype.getOrgTimezone = function () {
            return __awaiter(this, void 0, void 0, function () {
                var timezone, _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.currentOrgType = this.storageService.getStorage('currentOrgType');
                            this.rootOrgID = this.storageService.getStorage('rootOrgID');
                            this.currentOrgID = this.storageService.getStorage('currentOrgID');
                            timezone = null;
                            if (!(this.currentOrgType == exports.OrgType.ORGANIZATION)) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, this.getOrganizationByID(this.currentOrgID)];
                        case 1:
                            _a.organizationM = (_d.sent());
                            if (this.organizationM.timeZoneName) {
                                timezone = this.organizationM.timeZoneName;
                            }
                            return [3 /*break*/, 6];
                        case 2:
                            if (!(this.currentOrgType == exports.OrgType.SITE)) return [3 /*break*/, 6];
                            _b = this;
                            return [4 /*yield*/, this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID)];
                        case 3:
                            _b.facilityM = (_d.sent());
                            if (!this.facilityM.timeZoneName) return [3 /*break*/, 4];
                            timezone = this.facilityM.timeZoneName;
                            return [3 /*break*/, 6];
                        case 4:
                            _c = this;
                            return [4 /*yield*/, this.getOrganizationByID(this.rootOrgID)];
                        case 5:
                            _c.organizationM = (_d.sent());
                            if (this.organizationM.timeZoneName) {
                                timezone = this.organizationM.timeZoneName;
                            }
                            _d.label = 6;
                        case 6: return [2 /*return*/, timezone];
                    }
                });
            });
        };
        return OrganizationService;
    }());
    OrganizationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationService, deps: [{ token: i1__namespace$1.Router }, { token: i2__namespace.StorageService }, { token: i3__namespace.ApplicationService }, { token: OrganizationController }, { token: i5__namespace.FacilityService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrganizationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i2__namespace.StorageService }, { type: i3__namespace.ApplicationService }, { type: OrganizationController }, { type: i5__namespace.FacilityService }]; } });

    var OrgTypeGuard = /** @class */ (function () {
        function OrgTypeGuard(router, storageService) {
            this.router = router;
            this.storageService = storageService;
        }
        OrgTypeGuard.prototype.canActivate = function (route, state) {
            var currentOrgType;
            var orgTypeAccess;
            currentOrgType = this.storageService.getStorage('currentOrgType');
            orgTypeAccess = route.data.orgTypeAccess;
            if (currentOrgType == exports.OrgType.SITE && (orgTypeAccess == exports.OrgSiteAccessType.SITE || orgTypeAccess == exports.OrgSiteAccessType.ORG_SITE)) {
                return true;
            }
            else if (currentOrgType == exports.OrgType.ORGANIZATION && (orgTypeAccess == exports.OrgSiteAccessType.ORG || orgTypeAccess == exports.OrgSiteAccessType.ORG_SITE)) {
                return true;
            }
            else {
                return this.router.navigate(['/']);
                return false;
            }
        };
        return OrgTypeGuard;
    }());
    OrgTypeGuard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgTypeGuard, deps: [{ token: i1__namespace$1.Router }, { token: i2__namespace.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OrgTypeGuard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgTypeGuard, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgTypeGuard, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i2__namespace.StorageService }]; } });

    /*
     * Public API Surface of organization-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OrgAccess = OrgAccess;
    exports.OrgSiteAccess = OrgSiteAccess;
    exports.OrgTypeGuard = OrgTypeGuard;
    exports.Organization = Organization;
    exports.OrganizationController = OrganizationController;
    exports.OrganizationService = OrganizationService;
    exports.OrganizationServiceComponent = OrganizationServiceComponent;
    exports.OrganizationServiceModule = OrganizationServiceModule;
    exports.OrganizationServiceService = OrganizationServiceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-organization-service.umd.js.map
