(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@library/storage-service'), require('@angular/common/http'), require('@angular/common'), require('@angular/material/core'), require('@ng-bootstrap/ng-bootstrap'), require('@library/tsc-common')) :
    typeof define === 'function' && define.amd ? define('@library/subscription-service', ['exports', '@angular/core', '@library/storage-service', '@angular/common/http', '@angular/common', '@angular/material/core', '@ng-bootstrap/ng-bootstrap', '@library/tsc-common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["subscription-service"] = {}), global.ng.core, global.i1$1, global.ng.common.http, global.ng.common, global.ng.material.core, global.ngBootstrap, global.tscCommon));
})(this, (function (exports, i0, i1$1, i1, i3, i4, ngBootstrap, tscCommon) { 'use strict';

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
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    var SubscriptionServiceService = /** @class */ (function () {
        function SubscriptionServiceService() {
        }
        return SubscriptionServiceService;
    }());
    SubscriptionServiceService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SubscriptionServiceService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var SubscriptionServiceComponent = /** @class */ (function () {
        function SubscriptionServiceComponent() {
        }
        SubscriptionServiceComponent.prototype.ngOnInit = function () {
        };
        return SubscriptionServiceComponent;
    }());
    SubscriptionServiceComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SubscriptionServiceComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SubscriptionServiceComponent, selector: "lib-subscription-service", ngImport: i0__namespace, template: "\n    <p>\n      subscription-service works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-subscription-service',
                        template: "\n    <p>\n      subscription-service works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var SubscriptionServiceModule = /** @class */ (function () {
        function SubscriptionServiceModule() {
        }
        SubscriptionServiceModule.forRoot = function (environment) {
            return {
                ngModule: SubscriptionServiceModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return SubscriptionServiceModule;
    }());
    SubscriptionServiceModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SubscriptionServiceModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceModule, declarations: [SubscriptionServiceComponent], exports: [SubscriptionServiceComponent] });
    SubscriptionServiceModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionServiceModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SubscriptionServiceComponent
                        ],
                        imports: [],
                        exports: [
                            SubscriptionServiceComponent
                        ]
                    }]
            }] });

    var SUBSCRIPTION_CONSTANT = {
        BILLING_PROFILE_DELETE: 'BILLING_PROFILE_DELETE',
    };

    exports.PlanPriceType = void 0;
    (function (PlanPriceType) {
        PlanPriceType["PLAN_PRICE_TYPE_FREE"] = "FREE";
        PlanPriceType["PLAN_PRICE_TYPE_PAID"] = "PAID";
    })(exports.PlanPriceType || (exports.PlanPriceType = {}));
    exports.PlanGroupType = void 0;
    (function (PlanGroupType) {
        PlanGroupType["PLAN_STANDALONE"] = "STANDALONE";
        PlanGroupType["PLAN_BUNDLED"] = "BUNDLED";
    })(exports.PlanGroupType || (exports.PlanGroupType = {}));

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

    var ExpiringSubscriptionM = /** @class */ (function () {
        function ExpiringSubscriptionM() {
        }
        return ExpiringSubscriptionM;
    }());

    var SubscriptionController = /** @class */ (function () {
        function SubscriptionController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        SubscriptionController.prototype.orgPlanType = function (orgID) {
            return this.http.get(this.environment.SUBSCRIPTION_API_URL + "organizations/" + orgID + "/plan-type");
        };
        SubscriptionController.prototype.getExpiringSubscription = function (orgID, applicationID) {
            return this.http.get(this.environment.SUBSCRIPTION_API_URL + "organizations/" + orgID + "/applications/" + applicationID + "/subscription/expiring");
        };
        return SubscriptionController;
    }());
    SubscriptionController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SubscriptionController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionController, decorators: [{
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

    var SubscriptionService = /** @class */ (function () {
        function SubscriptionService(environment, storageService, subscriptionController) {
            this.environment = environment;
            this.storageService = storageService;
            this.subscriptionController = subscriptionController;
        }
        SubscriptionService.prototype.orgPlanType = function (orgID) {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.subscriptionController.orgPlanType(orgID).toPromise()];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res];
                        case 2:
                            error_1 = _a.sent();
                            console.error('error in orgPlanType -', error_1);
                            return [2 /*return*/, res];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        SubscriptionService.prototype.redirectOnSubscriptionExpire = function () {
            this.storageService.clearStorage();
            window.location.href = this.environment.ADMIN_URL + 'subscription-new/active';
        };
        SubscriptionService.prototype.getExpiringSubscribtion = function (orgID, applicationID) {
            var _this = this;
            var expiringSubscriptionM = new ExpiringSubscriptionM();
            var expiringSubscription = new ExpiringSubscriptionM();
            return new Promise(function (resolve) {
                _this.subscriptionController.getExpiringSubscription(orgID, applicationID).subscribe(function (res) {
                    expiringSubscriptionM = res;
                }, function (error) {
                    expiringSubscriptionM = expiringSubscription;
                    console.error('error in getExpiringSubscribtion -', error);
                }).add(function () {
                    resolve(expiringSubscriptionM);
                });
            });
        };
        return SubscriptionService;
    }());
    SubscriptionService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionService, deps: [{ token: 'environment' }, { token: i1__namespace$1.StorageService }, { token: SubscriptionController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SubscriptionService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SubscriptionService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }, { type: i1__namespace$1.StorageService }, { type: SubscriptionController }];
        } });

    var ExpiryAlertComponent = /** @class */ (function () {
        function ExpiryAlertComponent(
        // public globals: ThemeOptions,
        environment, subscriptionService, storageService) {
            this.environment = environment;
            this.subscriptionService = subscriptionService;
            this.storageService = storageService;
            this.MATERIAL_CONSTANT = tscCommon.MATERIAL_CONSTANT;
            this.showSubscriptionMessage = false;
            this.message = '';
            this.buyLink = this.environment.ADMIN_URL + 'subscription-new/active';
            this.buyLinkMsg = "Click <a href='" + this.buyLink + "' target='blank'>here</a> to buy a subscription.";
            this.expiredSubscribtionMsg = "Your subscription is expired. " + this.buyLinkMsg;
            this.subscriptionM = new ExpiringSubscriptionM();
        }
        ExpiryAlertComponent.prototype.ngOnInit = function () {
            this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
            this.applicationID = this.storageService.getStorage(['applicationID']);
            this.getMessage(this.rootOrgID, this.applicationID);
        };
        ExpiryAlertComponent.prototype.getMessage = function (rootOrgID, applicationID) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.subscriptionService.getExpiringSubscribtion(rootOrgID, applicationID)];
                        case 1:
                            _a.subscriptionM = (_b.sent());
                            if (this.storageService.getStorage('hideSubscriptionMessage') != 'YES') {
                                if (this.subscriptionM.subscriptionDayLeft <= 10 || this.subscriptionM.priceType == exports.PlanPriceType.PLAN_PRICE_TYPE_FREE) {
                                    if (this.subscriptionM.subscriptionDayLeft == 0) {
                                        this.message = "Your " + this.subscriptionM.planName + " subscription expires today. " + this.buyLinkMsg;
                                    }
                                    else if (this.subscriptionM.subscriptionDayLeft == 1) {
                                        this.message = "Your " + this.subscriptionM.planName + " subscription expires in " + this.subscriptionM.subscriptionDayLeft + " day. " + this.buyLinkMsg;
                                    }
                                    else if (this.subscriptionM.priceType == exports.PlanPriceType.PLAN_PRICE_TYPE_FREE && this.subscriptionM.subscriptionDayLeft > 10) {
                                        this.message = "You are currently on the " + this.subscriptionM.planName + " subscription. " + this.buyLinkMsg;
                                    }
                                    else if (this.subscriptionM.subscriptionDayLeft <= 10 && this.subscriptionM.subscriptionDayLeft >= 0) {
                                        this.message = "Your " + this.subscriptionM.planName + " subscription expires in " + this.subscriptionM.subscriptionDayLeft + " days. " + this.buyLinkMsg;
                                    }
                                    else if (this.subscriptionM.subscriptionDayLeft < 0) {
                                        this.message = "Your " + this.subscriptionM.planName + " subscription has expired. " + this.buyLinkMsg;
                                    }
                                    if (this.subscriptionM.priceType == exports.PlanPriceType.PLAN_PRICE_TYPE_FREE) {
                                        this.showCloseBtn = false;
                                    }
                                    else if (this.subscriptionM.subscriptionDayLeft < 0) {
                                        this.showCloseBtn = false;
                                    }
                                    else {
                                        this.showCloseBtn = true;
                                    }
                                    this.showSubscriptionMessage = true;
                                    // this.globals.toggleSubscriptionExpiring = true;
                                }
                            }
                            if (this.subscriptionM.priceType == null) {
                                this.showSubscriptionMessage = false;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        ExpiryAlertComponent.prototype.hideSubscriptionMessage = function () {
            // this.globals.toggleSubscriptionExpiring = false;
            this.storageService.setStorage('hideSubscriptionMessage', 'YES');
            this.showSubscriptionMessage = !('YES' == this.storageService.getStorage('hideSubscriptionMessage'));
        };
        return ExpiryAlertComponent;
    }());
    ExpiryAlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertComponent, deps: [{ token: 'environment' }, { token: SubscriptionService }, { token: i1__namespace$1.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ExpiryAlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ExpiryAlertComponent, selector: "lib-expiry-alert", ngImport: i0__namespace, template: "<div [ngClass]=\"{'showSubscriptionMessage': showSubscriptionMessage}\">\n    <div class=\"alert alert-danger subscriptionExpiringMessage centerAlign\"\n        [ngClass]=\"{'d-none': !showSubscriptionMessage}\">\n        <span class=\"text-light\" [innerHTML]=\"message\"></span>\n        <button *ngIf=\"showCloseBtn\" matRipple [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" type=\"button\" \n            class=\"btn-close rounded-circle btnCloseCustom pt-2\"\n            (click)=\"hideSubscriptionMessage()\">\n        </button>\n    </div>\n</div>\n\n", styles: [".showSubscriptionMessage{margin-bottom:50px!important}.subscriptionExpiringMessage{background-color:#b3261e;z-index:10;position:fixed;height:50px;width:100%;margin:0;border:none;border-radius:0}.btnCloseCustom{font-size:.7rem;position:absolute;right:12px}\n"], directives: [{ type: i3__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-expiry-alert',
                        templateUrl: './expiry-alert.component.html',
                        styleUrls: ['./expiry-alert.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }, { type: SubscriptionService }, { type: i1__namespace$1.StorageService }];
        } });

    var ExpiryAlertModule = /** @class */ (function () {
        function ExpiryAlertModule() {
        }
        return ExpiryAlertModule;
    }());
    ExpiryAlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ExpiryAlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertModule, declarations: [ExpiryAlertComponent], imports: [i3.CommonModule,
            i4.MatRippleModule,
            ngBootstrap.NgbModule], exports: [ExpiryAlertComponent] });
    ExpiryAlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertModule, imports: [[
                i3.CommonModule,
                i4.MatRippleModule,
                ngBootstrap.NgbModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ExpiryAlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ExpiryAlertComponent
                        ],
                        imports: [
                            i3.CommonModule,
                            i4.MatRippleModule,
                            ngBootstrap.NgbModule
                        ],
                        exports: [
                            ExpiryAlertComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of subscription-service
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ExpiryAlertComponent = ExpiryAlertComponent;
    exports.ExpiryAlertModule = ExpiryAlertModule;
    exports.SUBSCRIPTION_CONSTANT = SUBSCRIPTION_CONSTANT;
    exports.SubscriptionService = SubscriptionService;
    exports.SubscriptionServiceComponent = SubscriptionServiceComponent;
    exports.SubscriptionServiceModule = SubscriptionServiceModule;
    exports.SubscriptionServiceService = SubscriptionServiceService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-subscription-service.umd.js.map
