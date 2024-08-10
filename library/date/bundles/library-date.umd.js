(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('@angular/common'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/button-toggle'), require('@angular/material/datepicker'), require('ngx-daterangepicker-material'), require('moment-timezone'), require('@library/organization-service'), require('@library/tsc-common'), require('@library/storage-service'), require('@angular/material/form-field'), require('@angular/material-moment-adapter'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('@library/date', ['exports', '@angular/core', 'moment', '@angular/common', '@angular/forms', '@angular/material/card', '@angular/material/input', '@angular/material/core', '@angular/material/button-toggle', '@angular/material/datepicker', 'ngx-daterangepicker-material', 'moment-timezone', '@library/organization-service', '@library/tsc-common', '@library/storage-service', '@angular/material/form-field', '@angular/material-moment-adapter', '@angular/material/select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library.date = {}), global.ng.core, global.moment, global.ng.common, global.ng.forms, global.ng.material.card, global.ng.material.input, global.ng.material.core, global.ng.material.buttonToggle, global.ng.material.datepicker, global.i1$1, global.moment$1, global.i2, global.tscCommon, global.i1, global.ng.material.formField, global.ng.materialMomentAdapter, global.ng.material.select));
})(this, (function (exports, i0, moment, i5, i7, card, i8, core, i2$1, i4, i1$1, moment$1, i2, tscCommon, i1, i2$2, materialMomentAdapter, select) { 'use strict';

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
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var moment__namespace$1 = /*#__PURE__*/_interopNamespace(moment$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$2);

    var DateService2 = /** @class */ (function () {
        function DateService2() {
        }
        return DateService2;
    }());
    DateService2.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService2, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DateService2.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService2, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService2, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var DateComponent = /** @class */ (function () {
        function DateComponent() {
        }
        DateComponent.prototype.ngOnInit = function () {
        };
        return DateComponent;
    }());
    DateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateComponent, selector: "lib-date", ngImport: i0__namespace, template: "\n    <p>\n      date works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date',
                        template: "\n    <p>\n      date works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var DateModule = /** @class */ (function () {
        function DateModule() {
        }
        return DateModule;
    }());
    DateModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateModule, declarations: [DateComponent], exports: [DateComponent] });
    DateModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DateComponent,
                        ],
                        imports: [],
                        exports: [
                            DateComponent
                        ]
                    }]
            }] });

    exports.FrequencyEnum = void 0;
    (function (FrequencyEnum) {
        FrequencyEnum["DAILY"] = "DAILY";
        FrequencyEnum["MONTHLY"] = "MONTHLY";
        FrequencyEnum["YEARLY"] = "YEARLY";
        FrequencyEnum["CUSTOM"] = "CUSTOM";
    })(exports.FrequencyEnum || (exports.FrequencyEnum = {}));

    exports.DateInputTypeEnum = void 0;
    (function (DateInputTypeEnum) {
        DateInputTypeEnum["DAY_INPUT"] = "DAY_INPUT";
        DateInputTypeEnum["MONTH_INPUT"] = "MONTH_INPUT";
        DateInputTypeEnum["YEAR_INPUT"] = "YEAR_INPUT";
        DateInputTypeEnum["CUSTOM_INPUT"] = "CUSTOM_INPUT";
    })(exports.DateInputTypeEnum || (exports.DateInputTypeEnum = {}));
    exports.DateTypeEnum = void 0;
    (function (DateTypeEnum) {
        DateTypeEnum["INCLUSIVE"] = "INCLUSIVE";
        DateTypeEnum["EXCLUSIVE"] = "EXCLUSIVE";
    })(exports.DateTypeEnum || (exports.DateTypeEnum = {}));
    exports.DateFormatEnum = void 0;
    (function (DateFormatEnum) {
        DateFormatEnum["DATE_TIME"] = "DD-MMM-YYYY HH:mm:ss";
    })(exports.DateFormatEnum || (exports.DateFormatEnum = {}));
    exports.DateTimeIntervalEnum = void 0;
    (function (DateTimeIntervalEnum) {
        DateTimeIntervalEnum["CURRENT_TIME"] = "CURRENT_TIME";
        DateTimeIntervalEnum["CURRENT_HOUR"] = "CURRENT_HOUR";
        DateTimeIntervalEnum["LAST_24_HRS"] = "LAST_24_HRS";
        DateTimeIntervalEnum["YESTERDAY"] = "YESTERDAY";
        DateTimeIntervalEnum["CURRENT_DAY"] = "CURRENT_DAY";
        DateTimeIntervalEnum["NEXT_DAY"] = "NEXT_DAY";
        DateTimeIntervalEnum["LAST_7_DAYS"] = "LAST_7_DAYS";
        DateTimeIntervalEnum["CURRENT_WEEK"] = "CURRENT_WEEK";
        DateTimeIntervalEnum["NEXT_WEEK"] = "NEXT_WEEK";
        DateTimeIntervalEnum["LAST_30_DAYS"] = "LAST_30_DAYS";
        DateTimeIntervalEnum["CURRENT_MONTH"] = "CURRENT_MONTH";
        DateTimeIntervalEnum["NEXT_MONTH"] = "NEXT_MONTH";
        DateTimeIntervalEnum["LAST_12th_MONTH"] = "LAST_12th_MONTH";
        DateTimeIntervalEnum["CURRENT_YEAR"] = "CURRENT_YEAR";
        DateTimeIntervalEnum["LAST_12_MONTHS"] = "LAST_12_MONTHS";
    })(exports.DateTimeIntervalEnum || (exports.DateTimeIntervalEnum = {}));

    var FREQUENCY_CONSTANT = [
        {
            name: 'Daily',
            keyID: 'DAILY'
        },
        {
            name: 'Monthly',
            keyID: 'MONTHLY'
        },
        {
            name: 'Yearly',
            keyID: 'YEARLY'
        },
        {
            name: 'Custom',
            keyID: 'CUSTOM'
        }
    ];

    var MONTH_CONSTANT = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ];

    var CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE = {
        'Today': [moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), moment__namespace()],
        'Yesterday': [moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days'), moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
        'Last 7 Days': [moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days'), moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
        'Last 30 Days': [moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days'), moment__namespace().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day')],
        'This Month': [moment__namespace().startOf('month'), moment__namespace().add(1, 'months').startOf('month')],
        'Last Month': [moment__namespace().subtract(1, 'month').startOf('month'), moment__namespace().startOf('month')]
    };

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

    // /tsc-library/
    var DateService = /** @class */ (function () {
        function DateService(storageService, organizationSerive) {
            this.storageService = storageService;
            this.organizationSerive = organizationSerive;
            this.organizationM = new i2.Organization();
        }
        DateService.prototype.takeFocusAway = function (duration) {
            return document.getElementById(duration).classList.remove('mat-focused', 'mat-form-field-should-float');
        };
        DateService.prototype.openDatepickerOnClick = function (datepicker) {
            if (!datepicker.opened) {
                datepicker.open();
            }
        };
        DateService.prototype.handleDateInput = function (normalizedDate, datepicker, format) {
            datepicker.close();
            return moment__namespace$1(normalizedDate).format(format);
        };
        DateService.prototype.yearSelectedHandler = function (normalizedYear, datepicker) {
            datepicker.close();
            var duration = moment__namespace$1(normalizedYear).format("YYYY");
            return duration;
        };
        DateService.prototype.monthSelectedHandler = function (normalizedMonthAndYear, datepicker) {
            datepicker.close();
            var duration = moment__namespace$1(normalizedMonthAndYear).format("YYYY-MM");
            return duration;
        };
        DateService.prototype.dailySelectedHandler = function (selectedDate) {
            var duration = moment__namespace$1(selectedDate).format("YYYY-MM-DD");
            return duration;
        };
        DateService.prototype.formatDate = function (selectedDate, format) {
            var date = new Date(selectedDate);
            return moment__namespace$1(date).format(format);
        };
        DateService.prototype.convertUtcToTimeZone = function (utcTimeString, targetTimeZone, format) {
            var utcDate = moment__namespace$1(utcTimeString);
            var convertedTimeZone = utcDate.tz(targetTimeZone).format(format);
            return convertedTimeZone;
        };
        DateService.prototype.getRelativeTimeAgoLabel = function (dateTime) {
            var timezone = this.storageService.getStorage('timezone');
            return dateTime ? moment__namespace$1.tz(dateTime, timezone).fromNow() : tscCommon.COMMON_CONSTANT.HYPHEN;
        };
        DateService.prototype.getStartDateTime = function (selectedRange) {
            var startTime;
            var timezone = this.storageService.getStorage('timezone');
            switch (selectedRange) {
                case exports.DateTimeIntervalEnum.CURRENT_HOUR:
                    startTime = moment__namespace$1().startOf('hour').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.LAST_24_HRS:
                    startTime = moment__namespace$1().subtract(24, 'hours').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.YESTERDAY:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(1, 'days').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_DAY:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_WEEK:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('week').add(1, 'days').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.LAST_7_DAYS:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(7, 'days').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_MONTH:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('month').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.LAST_30_DAYS:
                    startTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).subtract(30, 'days').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.LAST_12_MONTHS:
                    startTime = moment__namespace$1().subtract(1, 'year').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.LAST_12th_MONTH:
                    startTime = moment__namespace$1().subtract(1, 'year').startOf('month').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_YEAR:
                    startTime = moment__namespace$1().set({ month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }).tz(timezone).format();
                    break;
                default:
                    startTime = null;
            }
            return startTime;
        };
        DateService.prototype.getEndDateTime = function (selectedRange) {
            var endTime;
            var timezone = this.storageService.getStorage('timezone');
            switch (selectedRange) {
                case exports.DateTimeIntervalEnum.CURRENT_TIME:
                    endTime = moment__namespace$1().tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_DAY:
                    endTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.NEXT_DAY:
                    endTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'days').startOf('day').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.NEXT_WEEK:
                    endTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'week').startOf('week').add(1, 'days').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.NEXT_MONTH:
                    endTime = moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).add(1, 'months').startOf('month').tz(timezone).format();
                    break;
                case exports.DateTimeIntervalEnum.CURRENT_YEAR:
                    endTime = moment__namespace$1().startOf('year').tz(timezone).format();
                    break;
                default:
                    endTime = null;
            }
            return endTime;
        };
        DateService.prototype.getReportingPeriodList = function (orgID, endYearLength) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, reportingPeriodsList, currentDate, currentYear, startMonth, endMonth, year, startYear, endYear, startDate, endDate, startMonthLabel, endMonthLabel, period;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.organizationSerive.getOrganizationByID(orgID)];
                        case 1:
                            _a.organizationM = (_b.sent());
                            reportingPeriodsList = [];
                            currentDate = new Date();
                            currentYear = currentDate.getFullYear();
                            startMonth = this.getMonthIndex(this.organizationM.fiscalStartMonth);
                            endMonth = (startMonth + 11) % 12;
                            for (year = currentYear; year >= currentYear - endYearLength; year--) {
                                startYear = year;
                                endYear = void 0;
                                if (startMonth == 0) {
                                    endYear = startYear;
                                }
                                else {
                                    endYear = startYear + 1;
                                }
                                startDate = new Date(startYear, startMonth);
                                endDate = new Date(endYear, endMonth);
                                startMonthLabel = startDate.toLocaleString('default', { month: 'short' });
                                endMonthLabel = endDate.toLocaleString('default', { month: 'short' });
                                period = {
                                    name: startMonthLabel + " " + startYear + " - " + endMonthLabel + " " + endYear,
                                    startDate: moment__namespace$1(startDate).format("YYYY-MM-DD"),
                                    endDate: moment__namespace$1(endDate).format("YYYY-MM-DD")
                                };
                                reportingPeriodsList.push(period);
                            }
                            return [2 /*return*/, reportingPeriodsList];
                    }
                });
            });
        };
        DateService.prototype.getMonthIndex = function (month) {
            return MONTH_CONSTANT.indexOf(month);
        };
        return DateService;
    }());
    DateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService, deps: [{ token: i1__namespace.StorageService }, { token: i2__namespace.OrganizationService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.StorageService }, { type: i2__namespace.OrganizationService }]; } });

    var DATE_YEAR_MONTH_FORMAT = {
        parse: {
            dateInput: 'DD-MM-YYYY',
        },
        display: {
            dateInput: 'DD-MMM-YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    var MONTH_YEAR_FORMAT = {
        parse: {
            dateInput: 'MMM YYYY',
        },
        display: {
            dateInput: 'MMM YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    var YEAR_FORMAT = {
        parse: {
            dateInput: 'YYYY',
        },
        display: {
            dateInput: 'YYYY',
            monthYearLabel: 'YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'YYYY',
        },
    };
    var DateMonthYearFormatDirective = /** @class */ (function () {
        function DateMonthYearFormatDirective() {
        }
        return DateMonthYearFormatDirective;
    }());
    DateMonthYearFormatDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    DateMonthYearFormatDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]", providers: [
            {
                provide: core.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [core.MAT_DATE_LOCALE]
            },
            {
                provide: core.MAT_DATE_FORMATS,
                useValue: DATE_YEAR_MONTH_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appDateMonthYearFormat]',
                        providers: [
                            {
                                provide: core.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [core.MAT_DATE_LOCALE]
                            },
                            {
                                provide: core.MAT_DATE_FORMATS,
                                useValue: DATE_YEAR_MONTH_FORMAT
                            }
                        ],
                    }]
            }], ctorParameters: function () { return []; } });
    var MonthYearFormatDirective = /** @class */ (function () {
        function MonthYearFormatDirective() {
        }
        return MonthYearFormatDirective;
    }());
    MonthYearFormatDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MonthYearFormatDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    MonthYearFormatDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: MonthYearFormatDirective, selector: "[appMonthYearFormat]", providers: [
            {
                provide: core.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [core.MAT_DATE_LOCALE]
            },
            {
                provide: core.MAT_DATE_FORMATS,
                useValue: MONTH_YEAR_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MonthYearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appMonthYearFormat]',
                        providers: [
                            {
                                provide: core.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [core.MAT_DATE_LOCALE]
                            },
                            {
                                provide: core.MAT_DATE_FORMATS,
                                useValue: MONTH_YEAR_FORMAT
                            }
                        ],
                    }]
            }], ctorParameters: function () { return []; } });
    var YearFormatDirective = /** @class */ (function () {
        function YearFormatDirective() {
        }
        return YearFormatDirective;
    }());
    YearFormatDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YearFormatDirective, deps: [], target: i0__namespace.ɵɵFactoryTarget.Directive });
    YearFormatDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: YearFormatDirective, selector: "[appYearFormat]", providers: [
            {
                provide: core.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [core.MAT_DATE_LOCALE]
            },
            {
                provide: core.MAT_DATE_FORMATS,
                useValue: YEAR_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appYearFormat]',
                        providers: [
                            {
                                provide: core.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [core.MAT_DATE_LOCALE]
                            },
                            {
                                provide: core.MAT_DATE_FORMATS,
                                useValue: YEAR_FORMAT
                            }
                        ],
                    }]
            }], ctorParameters: function () { return []; } });
    var DateMonthYearFormatModule = /** @class */ (function () {
        function DateMonthYearFormatModule() {
        }
        return DateMonthYearFormatModule;
    }());
    DateMonthYearFormatModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateMonthYearFormatModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatModule, declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective], exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective] });
    DateMonthYearFormatModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatModule });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                        exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                    }]
            }] });

    var DateFilterComponent = /** @class */ (function () {
        function DateFilterComponent(dateService) {
            this.dateService = dateService;
            this.frequencyOptions = [];
            this.defaultSelectedFrequency = null;
            this.emitFilter = new i0.EventEmitter();
            this.FrequencyEnum = exports.FrequencyEnum;
            this.today = new Date();
            this.daterange = new i7.FormControl();
            this.frequencyFC = new i7.FormControl();
            this.durationFC = new i7.FormControl();
            this.startDateFC = new i7.FormControl();
            this.endDateFC = new i7.FormControl();
        }
        DateFilterComponent.prototype.ngOnInit = function () {
            this.frequencyFC.patchValue(this.defaultSelectedFrequency || exports.FrequencyEnum.MONTHLY);
            this.frequencyOptions = this.frequencyOptions.length ? this.frequencyOptions : FREQUENCY_CONSTANT;
            this.frequencyChange();
        };
        DateFilterComponent.prototype.frequencyChange = function () {
            var duration;
            var startDate;
            var endDate;
            switch (this.frequencyFC.value) {
                case exports.FrequencyEnum.DAILY:
                    duration = moment__namespace(this.today).format("YYYY-MM-DD");
                    startDate = moment__namespace().startOf('day').utc().format();
                    endDate = moment__namespace().endOf('day').utc().format();
                    break;
                case exports.FrequencyEnum.MONTHLY:
                    duration = moment__namespace(this.today).utc().format("YYYY-MM");
                    startDate = moment__namespace().startOf('month').utc().format();
                    endDate = moment__namespace().endOf('month').utc().format();
                    break;
                case exports.FrequencyEnum.YEARLY:
                    duration = moment__namespace(this.today).utc().format("YYYY");
                    startDate = moment__namespace().startOf('year').utc().format();
                    endDate = moment__namespace().endOf('year').utc().format();
                    break;
                case exports.FrequencyEnum.CUSTOM:
                    console.log("frequency: ", this.frequencyFC.value);
                    break;
                default:
                    console.log('undefined case encountered!');
            }
            this.durationFC.patchValue(duration);
            if (this.frequencyFC.value != exports.FrequencyEnum.CUSTOM) {
                this.daterange.patchValue('');
                this.startDateFC.patchValue(startDate);
                this.endDateFC.patchValue(endDate);
                this.emitFilter.emit();
            }
        };
        DateFilterComponent.prototype.openDatepicker = function () {
            if (this.frequencyFC.value == exports.FrequencyEnum.CUSTOM) {
                this.pickerDirective.open();
            }
        };
        DateFilterComponent.prototype.openDatepickerOnClick = function (datepicker) {
            this.dateService.openDatepickerOnClick(datepicker);
        };
        DateFilterComponent.prototype.takeFocusAway = function (durationField) {
            this.durationField = document.getElementById(durationField);
            this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
        };
        DateFilterComponent.prototype.dailyDateSelectedHandler = function (chosenDate) {
            var duration = this.dateService.dailySelectedHandler(chosenDate);
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace(chosenDate).startOf('day').utc().format());
            this.endDateFC.patchValue(moment__namespace(chosenDate).endOf('day').utc().format());
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.monthlyDateSelectedHandler = function (normalizedMonthAndYear, datepicker) {
            var duration = this.dateService.monthSelectedHandler(normalizedMonthAndYear, datepicker);
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace(normalizedMonthAndYear).startOf('month').utc().format());
            this.endDateFC.patchValue(moment__namespace(normalizedMonthAndYear).endOf('month').utc().format());
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.yearlyDateSelectedHandler = function (normalizedYear, datepicker) {
            var duration = this.dateService.yearSelectedHandler(normalizedYear, datepicker);
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace(normalizedYear).startOf('year').utc().format());
            this.endDateFC.patchValue(moment__namespace(normalizedYear).endOf('year').utc().format());
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.customDateRange = function (selectedValue) {
            if (this.frequencyFC.value == exports.FrequencyEnum.CUSTOM) {
                this.startDateFC.patchValue(moment__namespace(selectedValue.startDate).utc().format());
                this.endDateFC.patchValue(moment__namespace(selectedValue.endDate).utc().format());
                this.durationFC.patchValue(this.endDateFC);
                this.emitFilter.emit();
            }
        };
        return DateFilterComponent;
    }());
    DateFilterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterComponent, deps: [{ token: DateService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DateFilterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterComponent, selector: "lib-date-filter", inputs: { frequencyOptions: "frequencyOptions", defaultSelectedFrequency: "defaultSelectedFrequency" }, outputs: { emitFilter: "emitFilter" }, viewQueries: [{ propertyName: "pickerDirective", first: true, predicate: i1$1.DaterangepickerDirective, descendants: true }], ngImport: i0__namespace, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyFC\" (change)=\"frequencyChange()\">\n    <mat-button-toggle *ngFor=\"let frequency of frequencyOptions\" value=\"{{ frequency.keyID }}\">\n        {{ frequency.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-form-field class=\"ms-3\" id=\"dailyField\" appDateMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.DAILY}\" (click)=\"openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(daily)\" (keydown.enter)=\"openDatepickerOnClick(daily)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationFC\" [max]=\"today\"\n        (dateInput)=\"dailyDateSelectedHandler($event.value)\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"takeFocusAway('dailyField')\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"monthlyField\" appMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.MONTHLY}\" (click)=\"openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(monthly)\" (keydown.enter)=\"openDatepickerOnClick(monthly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"durationFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n        (monthSelected)=\"monthlyDateSelectedHandler($event, monthly)\" (closed)=\"takeFocusAway('monthlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"yearlyField\" appYearFormat [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.YEARLY}\"\n    (click)=\"openDatepickerOnClick(yearly)\" (keydown.arrowdown)=\"openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"openDatepickerOnClick(yearly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"yearly\" [formControl]=\"durationFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"yearPicker\" #yearly startView=\"multi-year\"\n        (yearSelected)=\"yearlyDateSelectedHandler($event, yearly)\" (closed)=\"takeFocusAway('yearlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != FrequencyEnum.CUSTOM}\">\n    <mat-label class=\"formLabel\"> Select date </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: 'DD-MMM-YYYY', customRangeLabel: 'Custom Range'}\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateRange(daterange.value)\" [readonly]=\"true\" />\n</mat-form-field>\n", styles: [".matBtnFilter mat-button-toggle.mat-button-toggle-checked{background-color:#e6e6e6!important}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:30px!important}.mat-button-toggle-group-appearance-standard{border-radius:20px!important}\n"], components: [{ type: i2__namespace$1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i2__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4__namespace.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i2__namespace$1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4__namespace.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$2.MatSuffix, selector: "[matSuffix]" }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i2__namespace$2.MatLabel, selector: "mat-label" }, { type: i1__namespace$1.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date-filter',
                        templateUrl: './date-filter.component.html',
                        styleUrls: ['./date-filter.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { frequencyOptions: [{
                    type: i0.Input
                }], defaultSelectedFrequency: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }], pickerDirective: [{
                    type: i0.ViewChild,
                    args: [i1$1.DaterangepickerDirective, { static: false }]
                }] } });

    var DateFilterModule = /** @class */ (function () {
        function DateFilterModule() {
        }
        return DateFilterModule;
    }());
    DateFilterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateFilterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, declarations: [DateFilterComponent], imports: [i5.CommonModule,
            i7.ReactiveFormsModule,
            card.MatCardModule,
            i2$1.MatButtonToggleModule,
            i8.MatInputModule,
            core.MatNativeDateModule,
            i4.MatDatepickerModule, i1__namespace$1.NgxDaterangepickerMd, DateMonthYearFormatModule], exports: [DateFilterComponent] });
    DateFilterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, imports: [[
                i5.CommonModule,
                i7.ReactiveFormsModule,
                card.MatCardModule,
                i2$1.MatButtonToggleModule,
                i8.MatInputModule,
                core.MatNativeDateModule,
                i4.MatDatepickerModule,
                i1$1.NgxDaterangepickerMd.forRoot(),
                DateMonthYearFormatModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DateFilterComponent,
                        ],
                        imports: [
                            i5.CommonModule,
                            i7.ReactiveFormsModule,
                            card.MatCardModule,
                            i2$1.MatButtonToggleModule,
                            i8.MatInputModule,
                            core.MatNativeDateModule,
                            i4.MatDatepickerModule,
                            i1$1.NgxDaterangepickerMd.forRoot(),
                            DateMonthYearFormatModule
                        ],
                        exports: [
                            DateFilterComponent,
                        ]
                    }]
            }] });

    // /tsc-library/
    var DateInputComponent = /** @class */ (function () {
        function DateInputComponent(dateService) {
            this.dateService = dateService;
            this.dateInputTypeEnum = exports.DateInputTypeEnum;
            this.dateTypeEnum = exports.DateTypeEnum;
            this.materialFormFieldAppearance = tscCommon.MaterialFormFieldAppearance;
            this.emitFilter = new i0.EventEmitter();
            this.formFieldAppearance = this.materialFormFieldAppearance.FORM_FIELD_APPEARANCE;
            this.dateType = this.dateTypeEnum.INCLUSIVE;
            this.label = '';
            this.cDRformat = 'YYYY-MM-DD';
            this.timezone = 'UTC';
            this.range = null;
            this.materialFieldWidth = false;
            this.isMandatoryField = false;
            this.showCdrRangeLabel = false;
            this.showRange = false;
            this.showDefaultDuration = false;
            this.showTimeInCDR = false;
            this.daterange = new i7.FormControl();
            this.durationFC = new i7.FormControl();
            this.startDateFC = new i7.FormControl();
            this.endDateFC = new i7.FormControl();
        }
        DateInputComponent.prototype.ngOnInit = function () {
            this.date = moment__namespace$1().tz(this.timezone).format();
        };
        DateInputComponent.prototype.ngOnChanges = function (changes) {
            if (changes.materialFormFieldAppearanceInp && this.materialFormFieldAppearanceInp) {
                this.formFieldAppearance = this.materialFormFieldAppearanceInp;
            }
            if (changes.materialFieldWidthInp && this.materialFieldWidthInp) {
                this.materialFieldWidth = this.materialFieldWidthInp;
            }
            if (changes.isMandatoryFieldInp && this.isMandatoryFieldInp) {
                this.isMandatoryField = this.isMandatoryFieldInp;
            }
            if (changes.labelInp && this.labelInp) {
                this.label = this.labelInp;
            }
            if (changes.cdrFormatInp && this.cdrFormatInp) {
                this.cDRformat = this.cdrFormatInp;
            }
            if (changes.showCdrRangeLabelInp && this.showCdrRangeLabelInp) {
                this.showCdrRangeLabel = this.showCdrRangeLabelInp;
            }
            if (changes.showRangeInp && this.showRangeInp) {
                this.showRange = this.showRangeInp;
            }
            if (changes.rangeInp && this.rangeInp) {
                this.range = this.rangeInp;
            }
            if (changes.showDefaultDurationInp && this.showDefaultDurationInp) {
                this.showDefaultDuration = this.showDefaultDurationInp;
            }
            if (changes.showTimeInCDRInp && this.showTimeInCDRInp) {
                this.showTimeInCDR = this.showTimeInCDRInp;
            }
            if (changes.dateTypeInp && this.dateTypeInp) {
                this.dateType = this.dateTypeInp;
            }
            if (changes.timezoneInp && this.timezoneInp) {
                this.timezone = this.timezoneInp;
            }
            if (changes.dateInputTypeInp && this.dateInputTypeInp) {
                this.dateInputType = this.dateInputTypeInp;
            }
            this.patchDefaultConfig();
        };
        DateInputComponent.prototype.patchDefaultConfig = function () {
            if (this.dateInputType == this.dateInputTypeEnum.DAY_INPUT) {
                if (this.showDefaultDuration) {
                    this.durationFC.patchValue(moment__namespace$1(this.date).format('YYYY-MM-DD'));
                    this.startDateFC.patchValue(moment__namespace$1().startOf('day').tz(this.timezone).format());
                    this.endDateFC.patchValue(moment__namespace$1().tz(this.timezone).format());
                }
            }
            else if (this.dateInputType == this.dateInputTypeEnum.MONTH_INPUT) {
                if (this.showDefaultDuration) {
                    this.durationFC.patchValue(moment__namespace$1(this.date).format('YYYY-MM'));
                    this.startDateFC.patchValue(moment__namespace$1().startOf('month').tz(this.timezone).format());
                    var endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                        ? moment__namespace$1().endOf('month').tz(this.timezone).format()
                        : moment__namespace$1().add(1, 'months').startOf('month').tz(this.timezone).format();
                    this.endDateFC.patchValue(endDateValue);
                }
            }
            else if (this.dateInputType == this.dateInputTypeEnum.YEAR_INPUT) {
                if (this.showDefaultDuration) {
                    this.durationFC.patchValue(moment__namespace$1(this.date).format('YYYY'));
                    this.startDateFC.patchValue(moment__namespace$1().startOf('year').tz(this.timezone).format());
                    var endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                        ? moment__namespace$1().endOf('year').tz(this.timezone).format()
                        : moment__namespace$1().add(1, 'year').startOf('year').tz(this.timezone).format();
                    this.endDateFC.patchValue(endDateValue);
                }
            }
            else if (this.dateInputType == this.dateInputTypeEnum.CUSTOM_INPUT) {
                if (this.showDefaultDuration) {
                    if (this.showTimeInCDR) {
                        this.daterange.patchValue({ startDate: moment__namespace$1().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).startOf('day'), endDate: moment__namespace$1() });
                    }
                    else {
                        this.daterange.patchValue({ startDate: moment__namespace$1().startOf('day'), endDate: moment__namespace$1() });
                    }
                    this.startDateFC.patchValue(moment__namespace$1(this.daterange.value.startDate).tz(this.timezone).format());
                    this.endDateFC.patchValue(moment__namespace$1(this.daterange.value.endDate).tz(this.timezone).format());
                }
            }
        };
        DateInputComponent.prototype.ngAfterViewInit = function () {
            this.emitFilter.emit();
        };
        DateInputComponent.prototype.dayDateInput = function (selectedDate) {
            var duration = this.dateService.dailySelectedHandler(selectedDate);
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace$1(selectedDate).startOf('day').tz(this.timezone).format());
            var endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                ? moment__namespace$1(selectedDate).endOf('day').tz(this.timezone).format()
                : moment__namespace$1(selectedDate).add(1, 'days').startOf('day').tz(this.timezone).format();
            this.endDateFC.patchValue(endDateValue);
            this.emitFilter.emit();
        };
        DateInputComponent.prototype.monthDateInput = function (selectedDate, datepicker) {
            var duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY-MM");
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace$1(selectedDate).startOf('month').tz(this.timezone).format());
            var endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                ? moment__namespace$1(selectedDate).endOf('month').tz(this.timezone).format()
                : moment__namespace$1(selectedDate).add(1, 'months').startOf('month').tz(this.timezone).format();
            this.endDateFC.patchValue(endDateValue);
            this.emitFilter.emit();
        };
        DateInputComponent.prototype.yearDateInput = function (selectedDate, datepicker) {
            var duration = this.dateService.handleDateInput(selectedDate, datepicker, "YYYY");
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(moment__namespace$1(selectedDate).startOf('year').tz(this.timezone).format());
            var endDateValue = this.dateType == this.dateTypeEnum.INCLUSIVE
                ? moment__namespace$1(selectedDate).endOf('year').tz(this.timezone).format()
                : moment__namespace$1(selectedDate).add(1, 'year').startOf('year').tz(this.timezone).format();
            this.endDateFC.patchValue(endDateValue);
            this.emitFilter.emit();
        };
        DateInputComponent.prototype.customDateInput = function (selectedDate) {
            this.startDateFC.patchValue(moment__namespace$1(selectedDate.startDate).tz(this.timezone).format());
            this.endDateFC.patchValue(moment__namespace$1(selectedDate.endDate).tz(this.timezone).format());
            this.emitFilter.emit();
        };
        return DateInputComponent;
    }());
    DateInputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputComponent, deps: [{ token: DateService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DateInputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateInputComponent, selector: "lib-date-input", inputs: { materialFormFieldAppearanceInp: "materialFormFieldAppearanceInp", materialFieldWidthInp: "materialFieldWidthInp", dateInputTypeInp: "dateInputTypeInp", dateTypeInp: "dateTypeInp", timezoneInp: "timezoneInp", labelInp: "labelInp", rangeInp: "rangeInp", cdrFormatInp: "cdrFormatInp", isMandatoryFieldInp: "isMandatoryFieldInp", showRangeInp: "showRangeInp", showCdrRangeLabelInp: "showCdrRangeLabelInp", showDefaultDurationInp: "showDefaultDurationInp", showTimeInCDRInp: "showTimeInCDRInp" }, outputs: { emitFilter: "emitFilter" }, usesOnChanges: true, ngImport: i0__namespace, template: "<mat-form-field [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.DAY_INPUT, 'matFieldWidth100': materialFieldWidth}\" [appearance]=\"formFieldAppearance\"\n    id=\"dailyField\" appDateMonthYearFormat (click)=\"dateService.openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(daily)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(daily)\">\n    <!-- <mat-label> {{ label }} </mat-label> -->\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationFC\" [max]=\"date\"\n        (dateInput)=\"dayDateInput($event.value)\" readonly [required]=\"isMandatoryField\"/>\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"dateService.takeFocusAway('dailyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ label }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field\n    [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.MONTH_INPUT, 'matFieldWidth100': materialFieldWidth}\"\n    [appearance]=\"formFieldAppearance\" id=\"monthlyField\" appMonthYearFormat\n    (click)=\"dateService.openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(monthly)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(monthly)\">\n    <mat-label> {{ label }} </mat-label>\n    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"durationFC\" [max]=\"date\" readonly\n        [required]=\"isMandatoryField\" />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker #monthly panelClass=\"monthPicker\" startView=\"year\" (monthSelected)=\"monthDateInput($event, monthly)\"\n        (closed)=\"dateService.takeFocusAway('monthlyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ label }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.YEAR_INPUT, 'matFieldWidth100': materialFieldWidth}\" [appearance]=\"formFieldAppearance\"\n    id=\"yearlyField\" appYearFormat (click)=\"dateService.openDatepickerOnClick(yearly)\"\n    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"dateService.openDatepickerOnClick(yearly)\">\n    <mat-label> {{ label }} </mat-label>\n    <input matInput class=\"noFocus\" [matDatepicker]=\"yearly\" [formControl]=\"durationFC\" [max]=\"date\" readonly [required]=\"isMandatoryField\"/>\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker #yearly startView=\"multi-year\" panelClass=\"yearPicker\"\n        (yearSelected)=\"yearDateInput($event, yearly)\"\n        (closed)=\"dateService.takeFocusAway('yearlyField')\"></mat-datepicker>\n    <mat-error *ngIf=\"durationFC.touched && durationFC.hasError('required')\">\n        {{ label }}\n    </mat-error>\n</mat-form-field>\n\n<mat-form-field [ngClass]=\"{'d-none': dateInputType != dateInputTypeEnum.CUSTOM_INPUT, 'matFieldWidth100': materialFieldWidth}\"\n    [appearance]=\"formFieldAppearance\">\n    <mat-label> {{ label }} </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: cDRformat, customRangeLabel: 'Custom Range'}\"\n        [showCustomRangeLabel]=\"showCdrRangeLabel\" [timePicker]=\"showTimeInCDR\" [ranges]=\"showRange ? range : null\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateInput(daterange.value)\" [readonly]=\"true\" [required]=\"isMandatoryField\"/>\n    <mat-error *ngIf=\"daterange.touched && daterange.hasError('required')\">\n        {{ label }}\n    </mat-error>\n</mat-form-field>", components: [{ type: i2__namespace$2.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4__namespace.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i8__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4__namespace.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i7__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7__namespace.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2__namespace$2.MatSuffix, selector: "[matSuffix]" }, { type: i5__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace$2.MatError, selector: "mat-error", inputs: ["id"] }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: i2__namespace$2.MatLabel, selector: "mat-label" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i1__namespace$1.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date-input',
                        templateUrl: './date-input.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { materialFormFieldAppearanceInp: [{
                    type: i0.Input
                }], materialFieldWidthInp: [{
                    type: i0.Input
                }], dateInputTypeInp: [{
                    type: i0.Input
                }], dateTypeInp: [{
                    type: i0.Input
                }], timezoneInp: [{
                    type: i0.Input
                }], labelInp: [{
                    type: i0.Input
                }], rangeInp: [{
                    type: i0.Input
                }], cdrFormatInp: [{
                    type: i0.Input
                }], isMandatoryFieldInp: [{
                    type: i0.Input
                }], showRangeInp: [{
                    type: i0.Input
                }], showCdrRangeLabelInp: [{
                    type: i0.Input
                }], showDefaultDurationInp: [{
                    type: i0.Input
                }], showTimeInCDRInp: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }] } });

    // /tsc-library/
    var DateFilterTwoComponent = /** @class */ (function () {
        function DateFilterTwoComponent(dateService) {
            this.dateService = dateService;
            this.frequencyEnum = exports.FrequencyEnum;
            this.dateInputTypeEnum = exports.DateInputTypeEnum;
            this.frequencyInp = [];
            this.formFieldAppearance = tscCommon.MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
            this.frequency = FREQUENCY_CONSTANT;
            this.frequencyFC = new i7.FormControl(this.frequencyEnum.DAILY);
            this.durationFC = new i7.FormControl();
            this.startDateFC = new i7.FormControl();
            this.endDateFC = new i7.FormControl();
            this.dateFilterEmitter = new i0.EventEmitter();
        }
        DateFilterTwoComponent.prototype.ngOnInit = function () {
            this.formFieldAppearance = this.materialFormFieldAppearanceInp;
            this.dateType = this.dateTypeInp;
            this.timezone = this.timezoneInp;
            this.label = this.labelInp;
            this.cdrFormat = this.cdrFormatInp;
            this.showDefaultDuration = this.showDefaultDurationInp;
            this.range = this.rangeInp;
            this.showRange = this.showRangeInp;
            this.showTimeInCDR = this.showTimeInCDRInp;
            this.showCdrRangeLabel = this.showCdrRangeLabelInp;
            this.showRange = this.showRangeInp;
            this.showTimeInCDR = this.showTimeInCDRInp;
        };
        DateFilterTwoComponent.prototype.ngOnChanges = function (changes) {
            if (changes.defaultFrequencyInp && this.defaultFrequencyInp) {
                this.frequencyFC.patchValue(this.defaultFrequencyInp);
            }
            if (changes.frequencyInp && this.frequencyInp) {
                this.frequency = this.frequencyInp;
            }
        };
        DateFilterTwoComponent.prototype.onChange = function () {
            var duration;
            var startDate;
            var endDate;
            switch (this.frequencyFC.value) {
                case this.frequencyEnum.DAILY:
                    duration = this.dayDateInput.durationFC.value;
                    startDate = this.dayDateInput.startDateFC.value;
                    endDate = this.dayDateInput.endDateFC.value;
                    break;
                case this.frequencyEnum.MONTHLY:
                    duration = this.monthDateInput.durationFC.value;
                    startDate = this.monthDateInput.startDateFC.value;
                    endDate = this.monthDateInput.endDateFC.value;
                    break;
                case this.frequencyEnum.YEARLY:
                    duration = this.yearDateInput.durationFC.value;
                    startDate = this.yearDateInput.startDateFC.value;
                    endDate = this.yearDateInput.endDateFC.value;
                    break;
                case this.frequencyEnum.CUSTOM:
                    duration = this.customDateInput.durationFC.value;
                    startDate = this.customDateInput.startDateFC.value;
                    endDate = this.customDateInput.endDateFC.value;
                    break;
                default:
                    console.log('undefined case encountered!');
            }
            this.durationFC.patchValue(duration);
            this.startDateFC.patchValue(startDate);
            this.endDateFC.patchValue(endDate);
            this.dateFilterEmitter.emit({ frequency: this.frequencyFC.value, duration: this.durationFC.value, startDate: this.startDateFC.value, endDate: this.endDateFC.value });
        };
        return DateFilterTwoComponent;
    }());
    DateFilterTwoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoComponent, deps: [{ token: DateService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DateFilterTwoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: { materialFormFieldAppearanceInp: "materialFormFieldAppearanceInp", frequencyInp: "frequencyInp", defaultFrequencyInp: "defaultFrequencyInp", dateTypeInp: "dateTypeInp", timezoneInp: "timezoneInp", labelInp: "labelInp", showDefaultDurationInp: "showDefaultDurationInp", cdrFormatInp: "cdrFormatInp", rangeInp: "rangeInp", showRangeInp: "showRangeInp", showTimeInCDRInp: "showTimeInCDRInp", showCdrRangeLabelInp: "showCdrRangeLabelInp" }, outputs: { dateFilterEmitter: "dateFilterEmitter" }, viewQueries: [{ propertyName: "dayDateInput", first: true, predicate: ["dayDateInput"], descendants: true }, { propertyName: "monthDateInput", first: true, predicate: ["monthDateInput"], descendants: true }, { propertyName: "yearDateInput", first: true, predicate: ["yearDateInput"], descendants: true }, { propertyName: "customDateInput", first: true, predicate: ["customDateInput"], descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyFC\">\n    <mat-button-toggle *ngFor=\"let freq of frequency\" value=\"{{ freq.keyID }}\" (click)=\"onChange()\">\n        {{ freq.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.DAILY}\" #dayDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.DAILY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.DAY_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.MONTHLY}\" #monthDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.MONTHLY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.MONTH_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.YEARLY}\" #yearDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.YEARLY && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.YEAR_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\" [labelInp]=\"label\"\n    [timezoneInp]=\"timezone\"></lib-date-input>\n\n<lib-date-input class=\"ms-3\" [ngClass]=\"{'d-none': frequencyFC.value != frequencyEnum.CUSTOM}\" #customDateInput\n    (emitFilter)=\"frequencyFC.value == frequencyEnum.CUSTOM && onChange()\" [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [dateTypeInp]=\"dateType\"\n    [dateInputTypeInp]=\"dateInputTypeEnum.CUSTOM_INPUT\" [showDefaultDurationInp]=\"showDefaultDuration\"\n    [showCdrRangeLabelInp]=\"showCdrRangeLabel\" [labelInp]=\"label\" [timezoneInp]=\"timezone\" [rangeInp]=\"\"\n    [showTimeInCDRInp]=\"showTimeInCDR\" [showRangeInp]=\"showRange\"></lib-date-input>", components: [{ type: i2__namespace$1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: DateInputComponent, selector: "lib-date-input", inputs: ["materialFormFieldAppearanceInp", "materialFieldWidthInp", "dateInputTypeInp", "dateTypeInp", "timezoneInp", "labelInp", "rangeInp", "cdrFormatInp", "isMandatoryFieldInp", "showRangeInp", "showCdrRangeLabelInp", "showDefaultDurationInp", "showTimeInCDRInp"], outputs: ["emitFilter"] }], directives: [{ type: i2__namespace$1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i7__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7__namespace.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i5__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date-filter-two',
                        templateUrl: './date-filter-two.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: DateService }]; }, propDecorators: { materialFormFieldAppearanceInp: [{
                    type: i0.Input
                }], frequencyInp: [{
                    type: i0.Input
                }], defaultFrequencyInp: [{
                    type: i0.Input
                }], dateTypeInp: [{
                    type: i0.Input
                }], timezoneInp: [{
                    type: i0.Input
                }], labelInp: [{
                    type: i0.Input
                }], showDefaultDurationInp: [{
                    type: i0.Input
                }], cdrFormatInp: [{
                    type: i0.Input
                }], rangeInp: [{
                    type: i0.Input
                }], showRangeInp: [{
                    type: i0.Input
                }], showTimeInCDRInp: [{
                    type: i0.Input
                }], showCdrRangeLabelInp: [{
                    type: i0.Input
                }], dateFilterEmitter: [{
                    type: i0.Output
                }], dayDateInput: [{
                    type: i0.ViewChild,
                    args: ['dayDateInput']
                }], monthDateInput: [{
                    type: i0.ViewChild,
                    args: ['monthDateInput']
                }], yearDateInput: [{
                    type: i0.ViewChild,
                    args: ['yearDateInput']
                }], customDateInput: [{
                    type: i0.ViewChild,
                    args: ['customDateInput']
                }] } });

    var DateInputModule = /** @class */ (function () {
        function DateInputModule() {
        }
        return DateInputModule;
    }());
    DateInputModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateInputModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputModule, declarations: [DateInputComponent], imports: [i5.CommonModule,
            i7.FormsModule,
            i7.ReactiveFormsModule,
            i8.MatInputModule,
            select.MatSelectModule,
            i2$2.MatFormFieldModule,
            core.MatNativeDateModule,
            i4.MatDatepickerModule,
            DateMonthYearFormatModule, i1__namespace$1.NgxDaterangepickerMd], exports: [DateInputComponent] });
    DateInputModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputModule, imports: [[
                i5.CommonModule,
                i7.FormsModule,
                i7.ReactiveFormsModule,
                i8.MatInputModule,
                select.MatSelectModule,
                i2$2.MatFormFieldModule,
                core.MatNativeDateModule,
                i4.MatDatepickerModule,
                DateMonthYearFormatModule,
                i1$1.NgxDaterangepickerMd.forRoot(),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateInputModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DateInputComponent
                        ],
                        imports: [
                            i5.CommonModule,
                            i7.FormsModule,
                            i7.ReactiveFormsModule,
                            i8.MatInputModule,
                            select.MatSelectModule,
                            i2$2.MatFormFieldModule,
                            core.MatNativeDateModule,
                            i4.MatDatepickerModule,
                            DateMonthYearFormatModule,
                            i1$1.NgxDaterangepickerMd.forRoot(),
                        ],
                        exports: [DateInputComponent]
                    }]
            }] });

    var DateFilterTwoModule = /** @class */ (function () {
        function DateFilterTwoModule() {
        }
        return DateFilterTwoModule;
    }());
    DateFilterTwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateFilterTwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoModule, declarations: [DateFilterTwoComponent], imports: [i5.CommonModule,
            DateInputModule,
            i7.ReactiveFormsModule,
            card.MatCardModule,
            i2$1.MatButtonToggleModule,
            i8.MatInputModule,
            core.MatNativeDateModule,
            i4.MatDatepickerModule, i1__namespace$1.NgxDaterangepickerMd, DateMonthYearFormatModule], exports: [DateFilterTwoComponent] });
    DateFilterTwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoModule, imports: [[
                i5.CommonModule,
                DateInputModule,
                i7.ReactiveFormsModule,
                card.MatCardModule,
                i2$1.MatButtonToggleModule,
                i8.MatInputModule,
                core.MatNativeDateModule,
                i4.MatDatepickerModule,
                i1$1.NgxDaterangepickerMd.forRoot(),
                DateMonthYearFormatModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterTwoModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DateFilterTwoComponent
                        ],
                        imports: [
                            i5.CommonModule,
                            DateInputModule,
                            i7.ReactiveFormsModule,
                            card.MatCardModule,
                            i2$1.MatButtonToggleModule,
                            i8.MatInputModule,
                            core.MatNativeDateModule,
                            i4.MatDatepickerModule,
                            i1$1.NgxDaterangepickerMd.forRoot(),
                            DateMonthYearFormatModule
                        ],
                        exports: [
                            DateFilterTwoComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of date
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE = CUSTOM_RANGE_CONSTANT_EXCLUSIVE_DATE;
    exports.DATE_YEAR_MONTH_FORMAT = DATE_YEAR_MONTH_FORMAT;
    exports.DateComponent = DateComponent;
    exports.DateFilterComponent = DateFilterComponent;
    exports.DateFilterModule = DateFilterModule;
    exports.DateFilterTwoComponent = DateFilterTwoComponent;
    exports.DateFilterTwoModule = DateFilterTwoModule;
    exports.DateInputComponent = DateInputComponent;
    exports.DateInputModule = DateInputModule;
    exports.DateModule = DateModule;
    exports.DateMonthYearFormatDirective = DateMonthYearFormatDirective;
    exports.DateMonthYearFormatModule = DateMonthYearFormatModule;
    exports.DateService = DateService;
    exports.DateService2 = DateService2;
    exports.FREQUENCY_CONSTANT = FREQUENCY_CONSTANT;
    exports.MONTH_CONSTANT = MONTH_CONSTANT;
    exports.MONTH_YEAR_FORMAT = MONTH_YEAR_FORMAT;
    exports.MonthYearFormatDirective = MonthYearFormatDirective;
    exports.YEAR_FORMAT = YEAR_FORMAT;
    exports.YearFormatDirective = YearFormatDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-date.umd.js.map
