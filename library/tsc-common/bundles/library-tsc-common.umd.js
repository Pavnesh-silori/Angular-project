(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('rxjs/operators'), require('@angular/material/progress-spinner'), require('@angular/common/http'), require('@angular/router'), require('@library/storage-service'), require('@library/toastr-service'), require('@library/application-service'), require('@library/authentication-service'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/material/icon'), require('@angular/material/tooltip'), require('@ng-bootstrap/ng-bootstrap'), require('ngx-perfect-scrollbar'), require('@angular-redux/store'), require('@library/feature-service'), require('@library/rbac-service'), require('@library/user-service'), require('@angular/material/button-toggle'), require('@library/layout-service'), require('@angular/material/card'), require('@library/organization-service'), require('@library/facility-service'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/angular-fontawesome'), require('@angular/material/core'), require('@angular/material/input'), require('@angular/material/form-field'), require('@ngx-loading-bar/router'), require('@angular/animations'), require('@ngx-loading-bar/core'), require('@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft'), require('@angular/material/dialog'), require('@angular/material/button'), require('ngx-image-cropper'), require('@angular/material/divider'), require('@angular/material/datepicker'), require('ngx-daterangepicker-material'), require('moment'), require('@angular/material-moment-adapter'), require('ngx-skeleton-loader'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/checkbox'), require('@angular/material/slide-toggle'), require('ngx-mat-select-search'), require('ngx-echarts'), require('@angular/flex-layout'), require('@angular/flex-layout/flex')) :
    typeof define === 'function' && define.amd ? define('@library/tsc-common', ['exports', '@angular/core', 'rxjs', '@angular/common', 'rxjs/operators', '@angular/material/progress-spinner', '@angular/common/http', '@angular/router', '@library/storage-service', '@library/toastr-service', '@library/application-service', '@library/authentication-service', '@angular/forms', '@angular/platform-browser', '@angular/material/icon', '@angular/material/tooltip', '@ng-bootstrap/ng-bootstrap', 'ngx-perfect-scrollbar', '@angular-redux/store', '@library/feature-service', '@library/rbac-service', '@library/user-service', '@angular/material/button-toggle', '@library/layout-service', '@angular/material/card', '@library/organization-service', '@library/facility-service', '@fortawesome/free-solid-svg-icons', '@fortawesome/angular-fontawesome', '@angular/material/core', '@angular/material/input', '@angular/material/form-field', '@ngx-loading-bar/router', '@angular/animations', '@ngx-loading-bar/core', '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft', '@angular/material/dialog', '@angular/material/button', 'ngx-image-cropper', '@angular/material/divider', '@angular/material/datepicker', 'ngx-daterangepicker-material', 'moment', '@angular/material-moment-adapter', 'ngx-skeleton-loader', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/select', '@angular/material/checkbox', '@angular/material/slide-toggle', 'ngx-mat-select-search', 'ngx-echarts', '@angular/flex-layout', '@angular/flex-layout/flex'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library["tsc-common"] = {}), global.ng.core, global.rxjs, global.ng.common, global.rxjs.operators, global.ng.material.progressSpinner, global.ng.common.http, global.ng.router, global.i2, global.i2$1, global.i3, global.i5, global.ng.forms, global.ng.platformBrowser, global.ng.material.icon, global.ng.material.tooltip, global.i5$1, global.i4, global.store, global.i7, global.i8, global.i2$3, global.ng.material.buttonToggle, global.i3$1, global.ng.material.card, global.i3$2, global.i4$3, global.freeSolidSvgIcons, global.i1$3, global.ng.material.core, global.ng.material.input, global.ng.material.formField, global.router, global.ng.animations, global.i4$5, global.faArrowAltCircleLeft, global.ng.material.dialog, global.ng.material.button, global.i4$6, global.ng.material.divider, global.ng.material.datepicker, global.i9, global.moment, global.ng.materialMomentAdapter, global.i1$5, global.ng.material.progressBar, global.ng.material.radio, global.ng.material.select, global.ng.material.checkbox, global.ng.material.slideToggle, global.i5$4, global.i1$6, global.ng.flexLayout, global.ng.flexLayout.flex));
})(this, (function (exports, i0, rxjs, i6, operators, i1, i1$1, i1$2, i2, i2$1, i3, i5, i2$2, platformBrowser, icon, i6$1, i5$1, i4, store, i7, i8, i2$3, i5$2, i3$1, i4$1, i3$2, i4$3, freeSolidSvgIcons, i1$3, i4$2, i4$4, i3$3, router, animations, i4$5, faArrowAltCircleLeft, i1$4, i3$4, i4$6, i5$3, i4$7, i9, moment, materialMomentAdapter, i1$5, i3$5, radio, i3$6, checkbox, slideToggle, i5$4, i1$6, flexLayout, i5$5) { 'use strict';

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
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$2);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace$3 = /*#__PURE__*/_interopNamespace(i2$2);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$3);
    var i5__namespace$2 = /*#__PURE__*/_interopNamespace(i5$2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace$3 = /*#__PURE__*/_interopNamespace(i4$1);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i4__namespace$2 = /*#__PURE__*/_interopNamespace(i4$3);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$2);
    var i4__namespace$5 = /*#__PURE__*/_interopNamespace(i4$4);
    var i3__namespace$3 = /*#__PURE__*/_interopNamespace(i3$3);
    var i4__namespace$4 = /*#__PURE__*/_interopNamespace(i4$5);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i3__namespace$4 = /*#__PURE__*/_interopNamespace(i3$4);
    var i4__namespace$6 = /*#__PURE__*/_interopNamespace(i4$6);
    var i5__namespace$3 = /*#__PURE__*/_interopNamespace(i5$3);
    var i4__namespace$7 = /*#__PURE__*/_interopNamespace(i4$7);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i1__namespace$5 = /*#__PURE__*/_interopNamespace(i1$5);
    var i3__namespace$5 = /*#__PURE__*/_interopNamespace(i3$5);
    var i3__namespace$6 = /*#__PURE__*/_interopNamespace(i3$6);
    var i5__namespace$4 = /*#__PURE__*/_interopNamespace(i5$4);
    var i1__namespace$6 = /*#__PURE__*/_interopNamespace(i1$6);
    var i5__namespace$5 = /*#__PURE__*/_interopNamespace(i5$5);

    var TscCommonService = /** @class */ (function () {
        function TscCommonService() {
        }
        return TscCommonService;
    }());
    TscCommonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TscCommonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var TscCommonComponent = /** @class */ (function () {
        function TscCommonComponent() {
        }
        TscCommonComponent.prototype.ngOnInit = function () {
        };
        return TscCommonComponent;
    }());
    TscCommonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TscCommonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TscCommonComponent, selector: "lib-tsc-common", ngImport: i0__namespace, template: "\n    <p>\n      tsc-common works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-tsc-common',
                        template: "\n    <p>\n      tsc-common works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var TscCommonModule = /** @class */ (function () {
        function TscCommonModule() {
        }
        TscCommonModule.forRoot = function (environment) {
            return {
                ngModule: TscCommonModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return TscCommonModule;
    }());
    TscCommonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TscCommonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonModule, declarations: [TscCommonComponent], exports: [TscCommonComponent] });
    TscCommonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TscCommonModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TscCommonComponent,
                        ],
                        imports: [],
                        exports: [
                            TscCommonComponent,
                        ]
                    }]
            }] });

    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());

    var StaticPageOne = /** @class */ (function () {
        function StaticPageOne() {
            this.cardClass = null;
            this.title = null;
            this.body = null;
            this.imgPath = null;
            this.imgClass = null;
            this.imgAlt = null;
            this.containsHeaderFooter = null;
        }
        return StaticPageOne;
    }());

    var StaticPageTwo = /** @class */ (function () {
        function StaticPageTwo() {
            this.body = null;
        }
        return StaticPageTwo;
    }());

    var Country = /** @class */ (function () {
        function Country() {
        }
        return Country;
    }());

    var State = /** @class */ (function () {
        function State() {
        }
        return State;
    }());

    var TimeZone = /** @class */ (function () {
        function TimeZone() {
        }
        return TimeZone;
    }());

    // export class LookupValue implements LookupValueM {
    //     code: string;
    //     description: string;
    //     id: number;
    //     keyID: string;
    //     lookupKey: string;
    //     name: string;
    // }

    var Static = /** @class */ (function () {
        function Static() {
        }
        return Static;
    }());

    var COMMON_CONSTANT = {
        PRIVACY: 'https://www.logicladder.com/privacy/',
        TERMS: 'https://www.logicladder.com/terms/',
        PRICING: 'https://www.thesustainabilitycloud.com/pricing',
        SUPPORT_EMAIL: 'support@thesustainabilitycloud.com',
        HYPHEN: '--',
        NO_DATA_FOUND: 'No data found',
        NO_DATA: 'No data',
        // Email Pattern
        EMAIL_PATTERN: ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),
        // Zipcode Pattern
        ZIPCODE_PATTERN: ("[A-Za-z0-9]*"),
        // GST Number Pattern
        GST_NUMBER_PATTERN: ("[A-Za-z0-9]*"),
        SPECIAL_CHARACTERS_PATTERN: ("^[a-zA-Z][a-zA-Z0-9-_\. ]*$"),
        ALLOWED_IMAGE_TYPES: ['.JPG', '.jpg', '.JPEG', '.jpeg', '.PNG', '.png'],
        DECIMAL_PATTERN: "[0-9]+([,.][0-9]+)?",
        MAX_IMAGE_SIZE: 10485760,
        // for convert utc to asian
        ASIAN_KOLKATA: 'Asia/Kolkata',
        VIEW_API_KEY_ID: "View API key ID",
        NO_MATCH_FOUND: 'No match found'
    };

    var TABLE_CONSTANT = {
        TABLE_NO_DATA: 'No Data',
        DEFAULT_PAGE_SIZE: 50,
        PAGE_SIZE_OPTION: [50, 100, 150, 200]
        // DEFAULT_PAGE_SIZE: 2,
        // PAGE_SIZE_OPTION: [2, 4, 6, 8],
    };

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

    var MATERIAL_CONSTANT = {
        MAT_RIPPLE_CENTER: true
    };

    var LOADING_GRAPHIC = {
        graphic: {
            elements: [
                {
                    type: 'group',
                    left: 'center',
                    top: 'center',
                    children: new Array(7).fill(0).map(function (val, i) { return ({
                        type: 'rect',
                        x: i * 20,
                        shape: {
                            x: 0,
                            y: -40,
                            width: 10,
                            height: 80
                        },
                        style: { fill: '#0E2F44' },
                        keyframeAnimation: {
                            duration: 1000,
                            delay: i * 200,
                            loop: true,
                            keyframes: [
                                {
                                    percent: 0.5,
                                    scaleY: 0.3,
                                    easing: 'cubicIn'
                                },
                                {
                                    percent: 1,
                                    scaleY: 1,
                                    easing: 'cubicOut'
                                }
                            ]
                        }
                    }); })
                }
            ]
        }
    };
    var NO_DATA_GRAPHIC = {
        type: 'text',
        left: 'center',
        top: 'middle',
        style: {
            fill: '#6c757d',
            fontSize: 25,
            text: "No Data",
        }
    };

    var GENDER_CONSTANT = [
        {
            name: 'Male',
            keyID: 'MALE'
        },
        {
            name: 'Female',
            keyID: 'FEMALE'
        }
    ];

    var STATUS_CONSTANT = [
        {
            name: 'Active',
            keyID: 'ACTIVE'
        },
        {
            name: 'Inactive',
            keyID: 'INACTIVE'
        },
        {
            name: 'Deleted',
            keyID: 'DELETED'
        }
    ];
    var COMMON_STATUS_CONSTANT = [
        {
            name: "All",
            keyID: "ALL"
        },
        {
            name: 'Active',
            keyID: 'ACTIVE'
        },
        {
            name: 'Inactive',
            keyID: 'INACTIVE'
        },
        {
            name: 'Deleted',
            keyID: 'DELETED'
        },
        {
            name: 'Pending',
            keyID: 'PENDING'
        }
    ];

    exports.PageTitleEnum = void 0;
    (function (PageTitleEnum) {
        PageTitleEnum["CREATE"] = "Create";
        PageTitleEnum["UPDATE"] = "Update";
        PageTitleEnum["ADD"] = "Add";
    })(exports.PageTitleEnum || (exports.PageTitleEnum = {}));
    exports.ComponentSourceEnum = void 0;
    (function (ComponentSourceEnum) {
        ComponentSourceEnum["PAGE"] = "PAGE";
        ComponentSourceEnum["DIALOG"] = "DIALOG";
    })(exports.ComponentSourceEnum || (exports.ComponentSourceEnum = {}));

    exports.ButtonLabelEnum = void 0;
    (function (ButtonLabelEnum) {
        ButtonLabelEnum["CREATE_BTN_LABEL"] = "Create";
        ButtonLabelEnum["READ_BTN_LABEL"] = "View";
        ButtonLabelEnum["UPDATE_BTN_LABEL"] = "Update";
        ButtonLabelEnum["DELETE_BTN_LABEL"] = "Delete";
        ButtonLabelEnum["ADD_BTN_LABEL"] = "Add";
        ButtonLabelEnum["SUBMIT_BTN_LABEL"] = "Submit";
        ButtonLabelEnum["SAVE_BTN_LABEL"] = "Save";
        ButtonLabelEnum["CANCEL_BTN_LABEL"] = "Cancel";
        ButtonLabelEnum["BACK_BTN_LABEL"] = "Back";
        ButtonLabelEnum["CONFIRM_BTN_LABEL"] = "Confirm";
        ButtonLabelEnum["YES_BTN_LABEL"] = "Yes";
        ButtonLabelEnum["NO_BTN_LABEL"] = "No";
    })(exports.ButtonLabelEnum || (exports.ButtonLabelEnum = {}));
    exports.ButtonTooltipEnum = void 0;
    (function (ButtonTooltipEnum) {
        ButtonTooltipEnum["CREATE"] = "Create";
        ButtonTooltipEnum["VIEW"] = "View";
        ButtonTooltipEnum["UPDATE"] = "Update";
        ButtonTooltipEnum["DELETE"] = "Delete";
        ButtonTooltipEnum["MORE"] = "More";
        ButtonTooltipEnum["REFRESH"] = "Refresh";
        ButtonTooltipEnum["CLOSE"] = "Close";
        ButtonTooltipEnum["CANCEL"] = "Cancel";
        ButtonTooltipEnum["NO_CHANGE"] = "No change to save";
    })(exports.ButtonTooltipEnum || (exports.ButtonTooltipEnum = {}));

    exports.InvalidForm = void 0;
    (function (InvalidForm) {
        InvalidForm["INVALID_FORM_TITLE"] = "Invalid details!";
        InvalidForm["INVALID_FORM_MESSAGE"] = "Please fill valid details.";
    })(exports.InvalidForm || (exports.InvalidForm = {}));
    exports.FormAction = void 0;
    (function (FormAction) {
        FormAction["CREATE"] = "CREATE";
        FormAction["UPDATE"] = "UPDATE";
        FormAction["ADD"] = "ADD";
        FormAction["DELETE"] = "DELETE";
        FormAction["CONFIRM"] = "CONFIRM";
        FormAction["VIEW"] = "VIEW";
    })(exports.FormAction || (exports.FormAction = {}));
    exports.FormErrorEnum = void 0;
    (function (FormErrorEnum) {
        FormErrorEnum["REQUIRED"] = "Required field";
        FormErrorEnum["EMAIL"] = "Invalid email";
        FormErrorEnum["NEGATIVE"] = "This field can't be negative";
    })(exports.FormErrorEnum || (exports.FormErrorEnum = {}));

    exports.MaterialFormFieldAppearance = void 0;
    (function (MaterialFormFieldAppearance) {
        MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_NONE"] = "none";
        MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_STANDARD"] = "standard";
        MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE"] = "outline";
        MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_FILL"] = "fill";
    })(exports.MaterialFormFieldAppearance || (exports.MaterialFormFieldAppearance = {}));

    exports.FrequencyEnum = void 0;
    (function (FrequencyEnum) {
        FrequencyEnum["DAILY_KEY_ID"] = "DAILY";
        FrequencyEnum["MONTHLY_KEY_ID"] = "MONTHLY";
        FrequencyEnum["YEARLY_KEY_ID"] = "YEARLY";
        FrequencyEnum["CUSTOM_KEY_ID"] = "CUSTOM";
    })(exports.FrequencyEnum || (exports.FrequencyEnum = {}));
    exports.Frequency = void 0;
    (function (Frequency) {
        Frequency["DAILY"] = "DAILY";
        Frequency["MONTHLY"] = "MONTHLY";
        Frequency["YEARLY"] = "YEARLY";
        Frequency["CUSTOM"] = "CUSTOM";
    })(exports.Frequency || (exports.Frequency = {}));

    exports.DialogEnum = void 0;
    (function (DialogEnum) {
        DialogEnum["DELETE_DR"] = "DELETE";
        DialogEnum["SUCCESS_DR"] = "SUCCESS";
        DialogEnum["CLOSE_DR"] = "CLOSE";
        DialogEnum["CONFIRM_DR"] = "CONFIRM";
        DialogEnum["CANCEL_DR"] = "CANCEL";
    })(exports.DialogEnum || (exports.DialogEnum = {}));
    exports.DialogResponseEnum = void 0;
    (function (DialogResponseEnum) {
        DialogResponseEnum["NO"] = "NO";
        DialogResponseEnum["YES"] = "YES";
        DialogResponseEnum["CANCEL"] = "CANCEL";
        DialogResponseEnum["SUCCESS"] = "SUCCESS";
    })(exports.DialogResponseEnum || (exports.DialogResponseEnum = {}));

    exports.DialogOneEnum = void 0;
    (function (DialogOneEnum) {
        DialogOneEnum["DELETE"] = "delete";
        DialogOneEnum["INFO"] = "info";
        DialogOneEnum["CONFIRMATION"] = "confirmation";
    })(exports.DialogOneEnum || (exports.DialogOneEnum = {}));

    exports.BulkUploadEnum = void 0;
    (function (BulkUploadEnum) {
        BulkUploadEnum[BulkUploadEnum["MAX_FILE_SIZE"] = 10485760] = "MAX_FILE_SIZE";
        BulkUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .xlsx";
        BulkUploadEnum["INVAID_FILE_SIZE_ERROR"] = "Invalid file size! The size limit for file is 100.0 MB. Reduce the file size and try again.";
        BulkUploadEnum["INVALID"] = "Something went wrong!";
        BulkUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
        BulkUploadEnum["NO_FILE"] = "Please upload a file!";
    })(exports.BulkUploadEnum || (exports.BulkUploadEnum = {}));

    exports.StatusEnum = void 0;
    (function (StatusEnum) {
        StatusEnum["ACTIVE_STATUS"] = "Active";
        StatusEnum["INACTIVE_STATUS"] = "Inactive";
    })(exports.StatusEnum || (exports.StatusEnum = {}));

    exports.ImageTypeEnum = void 0;
    (function (ImageTypeEnum) {
        ImageTypeEnum["USER_PROFILE"] = "USER_PROFILE";
        ImageTypeEnum["ORG_LOGO"] = "ORG_LOGO";
        ImageTypeEnum["FACILITY_LOGO"] = "FACILITY_LOGO";
        ImageTypeEnum["REGULATOR_LOGO"] = "REGULATOR_LOGO";
    })(exports.ImageTypeEnum || (exports.ImageTypeEnum = {}));
    exports.ImageDefaultPathEnum = void 0;
    (function (ImageDefaultPathEnum) {
        ImageDefaultPathEnum["USER_PROFILE"] = "/assets/images/default-profile-img.jpeg";
        ImageDefaultPathEnum["ORG_LOGO"] = "/assets/images/org-default.jpeg";
        ImageDefaultPathEnum["FACILITY_LOGO"] = "/assets/images/org-default.jpeg";
        ImageDefaultPathEnum["REGULATOR_LOGO"] = "/assets/images/default-img.jpeg";
        ImageDefaultPathEnum["DEFAULT_LOGO"] = "/assets/images/default-img.jpeg";
    })(exports.ImageDefaultPathEnum || (exports.ImageDefaultPathEnum = {}));
    exports.ImageErrorEnum = void 0;
    (function (ImageErrorEnum) {
        ImageErrorEnum["INVALID_IMAGE_SIZE_ERROR"] = "Invalid file size! The size limit for images is 10.0 MB. Reduce the image size and try again.";
        ImageErrorEnum["INVALID_IMAGE_TYPE_ERROR"] = "Invalid file type! Please upload the following file types: .jpeg, .jpg, .png.";
        ImageErrorEnum["INVALID_IMAGE_NUMBER_ERROR"] = "Multiple images are not allowed. Select/Drop single image only.";
    })(exports.ImageErrorEnum || (exports.ImageErrorEnum = {}));

    exports.MessageAlertTypeEnum = void 0;
    (function (MessageAlertTypeEnum) {
        MessageAlertTypeEnum["INFO"] = "INFO";
        MessageAlertTypeEnum["SUCCESS"] = "SUCCESS";
        MessageAlertTypeEnum["WARNING"] = "WARNING";
        MessageAlertTypeEnum["DANGER"] = "DANGER";
    })(exports.MessageAlertTypeEnum || (exports.MessageAlertTypeEnum = {}));
    exports.MessageAlertIconEnum = void 0;
    (function (MessageAlertIconEnum) {
        MessageAlertIconEnum["INFO_ICON"] = "#info-fill";
        MessageAlertIconEnum["SUCCESS_ICON"] = "#check-circle-fill";
        MessageAlertIconEnum["WARNING_ICON"] = "#exclamation-triangle-fill";
        MessageAlertIconEnum["DANGER_ICON"] = "#exclamation-triangle-fill";
    })(exports.MessageAlertIconEnum || (exports.MessageAlertIconEnum = {}));

    exports.FileTypeEnum = void 0;
    (function (FileTypeEnum) {
        FileTypeEnum["PDF"] = "pdf";
        FileTypeEnum["CSV"] = "csv";
        FileTypeEnum["XLSX"] = "xlsx";
    })(exports.FileTypeEnum || (exports.FileTypeEnum = {}));
    exports.FileUploadEnum = void 0;
    (function (FileUploadEnum) {
        FileUploadEnum[FileUploadEnum["MAX_FILE_SIZE_10_MB"] = 10485760] = "MAX_FILE_SIZE_10_MB";
        FileUploadEnum[FileUploadEnum["MAX_FILE_SIZE_1_MB"] = 1000000] = "MAX_FILE_SIZE_1_MB";
        FileUploadEnum["INVALID_XLSX_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .xlsx";
        FileUploadEnum["INVALID_PDF_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .pdf";
        FileUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types:";
        FileUploadEnum["INVAID_FILE_SIZE_ERROR_10_MB"] = "Invalid file size! The size limit for file is 10.0 MB. Reduce the file size and try again.";
        FileUploadEnum["INVAID_FILE_SIZE_ERROR_1_MB"] = "Invalid file size! The size limit for file is 1 MB. Reduce the file size and try again.";
        FileUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
        FileUploadEnum["NO_FILE"] = "Please upload a file!";
    })(exports.FileUploadEnum || (exports.FileUploadEnum = {}));

    exports.NocFileUploadEnum = void 0;
    (function (NocFileUploadEnum) {
        NocFileUploadEnum[NocFileUploadEnum["MAX_FILE_SIZE"] = 10485760] = "MAX_FILE_SIZE";
        NocFileUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .pdf";
        NocFileUploadEnum["INVAID_FILE_SIZE_ERROR"] = "Invalid file size! The size limit for file is 10.0 MB. Reduce the file size and try again.";
        NocFileUploadEnum["INVALID"] = "Something went wrong!";
        NocFileUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
        NocFileUploadEnum["NO_FILE"] = "Please upload a file!";
    })(exports.NocFileUploadEnum || (exports.NocFileUploadEnum = {}));

    exports.ActivityFormTypeEnum = void 0;
    (function (ActivityFormTypeEnum) {
        ActivityFormTypeEnum["PFF"] = "pff";
        ActivityFormTypeEnum["AD_HOC"] = "ad-hoc";
    })(exports.ActivityFormTypeEnum || (exports.ActivityFormTypeEnum = {}));

    var StaticPageOneJson = /** @class */ (function () {
        function StaticPageOneJson() {
        }
        return StaticPageOneJson;
    }());
    StaticPageOneJson.pageNotFound = {
        cardClass: 'cardHeightWithoutHF',
        title: '404 Not Found',
        body: "The page you are trying to reach does not exist!",
        imgPath: '/assets/images/page-not-found.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: '404 not found',
        containsHeaderFooter: false
    };
    StaticPageOneJson.noAccess = {
        cardClass: 'cardHeightWithoutHF',
        title: 'No Access!',
        body: "You don't have acces.",
        imgPath: '/assets/images/no-access.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'No access',
        containsHeaderFooter: false
    };
    StaticPageOneJson.linkExpired = {
        cardClass: 'cardHeightWithoutHF',
        title: 'Link expired!',
        body: 'The link sent to you is expired.',
        imgPath: '/assets/images/link-expire.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Link expired',
        containsHeaderFooter: false
    };
    StaticPageOneJson.featureUnavailable = {
        cardClass: 'cardHeightWithHF',
        title: 'Restricted!',
        body: 'This feature is not currently available on your subscription plan.',
        imgPath: '/assets/images/feature-unavialable.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Feature not available',
        containsHeaderFooter: true
    };
    StaticPageOneJson.timezoneNotFound = {
        cardClass: 'cardHeightWithoutHF',
        title: "Timezone is missing. Let's fix it!",
        body: "It looks like you haven't set up your time zone yet. Setting your time zone helps us provide you with accurate information. Click on the link below to select your preferred timezone.",
        imgPath: '/assets/images/timezone-not-found.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Timezone not set',
        containsHeaderFooter: false
    };
    var StaticPageThreeJson = /** @class */ (function () {
        function StaticPageThreeJson() {
        }
        return StaticPageThreeJson;
    }());
    StaticPageThreeJson.featureNotConfigure = {
        cardClass: 'cardHeightWithHF',
        title: 'Feature not configured!',
        body: 'Oops! Looks like this feature is not configured yet.<br />Contact <span class="text-primary">support@thesustainabilitycloud.com.',
        imgPath: '/assets/images/feature-not-configure.jpg',
        imgClass: 'pageOneDefaultImage',
        imgAlt: 'Feature not configured',
        containsHeaderFooter: false
    };

    var CommonEvent = /** @class */ (function () {
        function CommonEvent() {
            this.layoutChange = new rxjs.BehaviorSubject('YES');
        }
        return CommonEvent;
    }());
    CommonEvent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonEvent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CommonEvent.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonEvent, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonEvent, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var TSCCommonService = /** @class */ (function () {
        function TSCCommonService(location) {
            this.location = location;
        }
        TSCCommonService.prototype.nullToBlank = function (value) {
            return value ? value : '';
        };
        TSCCommonService.prototype.back = function () {
            this.location.back();
        };
        TSCCommonService.prototype.formatLargeNumber = function (value, roundOff, decimalPlace) {
            if (!roundOff) {
                roundOff = true;
            }
            if (!decimalPlace) {
                decimalPlace = 0;
            }
            var preFix = "";
            var postFix = "";
            if (value < 0) {
                value *= -1;
                preFix = "-";
            }
            if (value >= 1000) {
                if (value > 1000000000) {
                    value = value / 1000000000;
                    postFix = " G";
                }
                else if (value > 1000000) {
                    value = value / 1000000;
                    postFix = " M";
                }
                else if (value > 1000) {
                    value = value / 1000;
                    postFix = " K";
                }
                value = (roundOff == "true" ? Math.round(value) : value);
                if (roundOff == "false") {
                    value = value.toFixed(decimalPlace);
                }
            }
            var formattedNumber = preFix + value + postFix;
            return formattedNumber;
        };
        TSCCommonService.prototype.removeSelectAllID = function (arr) {
            return arr.filter(function (item) { return item != -1; });
        };
        TSCCommonService.prototype.getUniqueObject = function (objList, key, value) {
            return objList.find(function (obj) { return obj[key] == value; });
        };
        TSCCommonService.prototype.getButtonLabel = function (action) {
            var label;
            switch (action) {
                case exports.FormAction.CREATE:
                    label = exports.ButtonLabelEnum.CREATE_BTN_LABEL;
                    break;
                case exports.FormAction.UPDATE:
                    label = exports.ButtonLabelEnum.UPDATE_BTN_LABEL;
                    break;
                default:
                    label = exports.ButtonLabelEnum.SAVE_BTN_LABEL;
                    break;
            }
            return label;
        };
        TSCCommonService.prototype.isValidEmail = function (email) {
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        };
        return TSCCommonService;
    }());
    TSCCommonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TSCCommonService, deps: [{ token: i6__namespace.Location }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TSCCommonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TSCCommonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TSCCommonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i6__namespace.Location }]; } });

    var LoaderOneComponent = /** @class */ (function () {
        function LoaderOneComponent(loaderOneService) {
            this.loaderOneService = loaderOneService;
            this.isLoading = this.loaderOneService.isLoading;
        }
        return LoaderOneComponent;
    }());
    LoaderOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneComponent, deps: [{ token: LoaderOneService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoaderOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoaderOneComponent, selector: "app-loader-one", ngImport: i0__namespace, template: "<!-- loader -->\n<div class=\"d-flex justify-content-center\" *ngIf=\"isLoading | async\">\n    <div class=\"d-flex m-auto loaderContainer\">\n        <mat-spinner class=\"m-auto\"></mat-spinner>\n    </div>\n</div>\n<!-- /loader/ -->\n", styles: [".loaderContainer{position:fixed;height:100vh;width:100vw;background:black;opacity:.7;z-index:99999}\n"], components: [{ type: i1__namespace.MatSpinner, selector: "mat-spinner", inputs: ["color"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i6__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-loader-one',
                        templateUrl: './loader-one.component.html',
                        styleUrls: ['./loader-one.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: LoaderOneService }]; } });
    var LoaderOneService = /** @class */ (function () {
        function LoaderOneService() {
            this.isLoading = new rxjs.BehaviorSubject(false);
        }
        LoaderOneService.prototype.show = function () {
            // console.log('in show loader');
            this.isLoading.next(true);
        };
        LoaderOneService.prototype.hide = function () {
            // console.log('in hide loader');
            this.isLoading.next(false);
        };
        return LoaderOneService;
    }());
    LoaderOneService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoaderOneService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var LoaderOneInterceptor = /** @class */ (function () {
        function LoaderOneInterceptor(loaderOneService) {
            this.loaderOneService = loaderOneService;
            this.httpCount = 0;
        }
        LoaderOneInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            var skipLoader = request.headers.get('skipLoader');
            if (skipLoader == 'YES') {
                // console.log('skipLoader');
            }
            else {
                this.httpCount++;
                this.loaderOneService.show();
                return next.handle(request).pipe(operators.finalize(function () {
                    _this.httpCount--;
                    if (_this.httpCount == 0) {
                        _this.loaderOneService.hide();
                        // console.log('return next');
                    }
                }));
            }
            return next.handle(request).pipe(operators.finalize(function () {
                // console.log('return skipLoader');
            }));
        };
        return LoaderOneInterceptor;
    }());
    LoaderOneInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneInterceptor, deps: [{ token: LoaderOneService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoaderOneInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneInterceptor });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneInterceptor, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: LoaderOneService }]; } });

    var InterceptorOneService = /** @class */ (function () {
        function InterceptorOneService(router, storageService, toastrService, applicationService, authenticationService) {
            this.router = router;
            this.storageService = storageService;
            this.toastrService = toastrService;
            this.applicationService = applicationService;
            this.authenticationService = authenticationService;
        }
        InterceptorOneService.prototype.intercept = function (request, next) {
            var _this = this;
            var token = this.storageService.getStorage('token');
            var userID = this.storageService.getStorage('userID');
            var rootOrgID = this.storageService.getStorage('rootOrgID');
            var applicationID = this.storageService.getStorage('applicationID');
            var applicationKeyID = this.storageService.getStorage('applicationKeyID');
            var redirectUrl = '';
            var pageUrl = '';
            var skipAuth = request.headers.get('skipAuth');
            var skipSuccessStatus = request.headers.get('skipSuccessStatus');
            var skipErrorStatus = request.headers.get('skipErrorStatus');
            if (skipAuth == '1') {
                // console.log('skipAuth');
            }
            else {
                if (token) {
                    request = request.clone({
                        setHeaders: { Authorization: "Bearer " + token, userID: "" + userID, rootOrgID: "" + rootOrgID, applicationID: "" + applicationID }
                    });
                }
                else {
                    // alert('auth interceptor exception.');
                }
            }
            return next.handle(request).pipe(operators.catchError(function (error) {
                var responseM = new Response();
                var toast;
                if (error instanceof i1$1.HttpErrorResponse) {
                    if (skipErrorStatus != '1' && error.error) {
                        responseM = error.error;
                        toast = _this.toastrService.getToastStatus(responseM.status);
                        if (responseM.message && responseM.status) {
                            _this.toastrService.openToast(toast.title, responseM.message, toast.color);
                        }
                        else {
                            _this.toastrService.openToast('Error', 'Something went wrong!', 'error');
                        }
                    }
                    if (error.status == 401) {
                        // 4001 - Invalid cred
                        // 4002 - user is inactive
                        // 4003 - no access in app or org
                        if (responseM.errorCode == 4002 || responseM.errorCode == 4001) {
                            console.log('no logout');
                        }
                        else {
                            redirectUrl = _this.applicationService.appRedirect(applicationKeyID) + 'login';
                            pageUrl = _this.router.url;
                            _this.authenticationService.logout(_this.storageService.getStorage('redirectUrl') ? _this.storageService.getStorage('redirectUrl') : redirectUrl, _this.storageService.getStorage('pageUrl') ? _this.storageService.getStorage('pageUrl') : pageUrl, 'interceptor', applicationKeyID);
                        }
                    }
                    else if (error.status == 403) {
                        if (responseM.errorCode == 4003) {
                            _this.storageService.clearStorage();
                            _this.router.navigate(['/no-access']);
                        }
                    }
                }
                return rxjs.throwError(error);
            }), operators.map(function (response) {
                var responseM = new Response();
                var toast;
                if (response instanceof i1$1.HttpResponse) {
                    responseM = response.body;
                    if (skipSuccessStatus != '1' && response.body.status && response.body.message) {
                        toast = _this.toastrService.getToastStatus(response.body.status);
                        _this.toastrService.openToast(toast.title, responseM.message, toast.color);
                    }
                    // Logic for handling successful responses
                    // if (response.status === 200) {
                    //     // Do something with the response
                    //     console.log('Successful response:', response);
                    // }
                }
                return response; // Return the response or modified response
            }));
        };
        return InterceptorOneService;
    }());
    InterceptorOneService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InterceptorOneService, deps: [{ token: i1__namespace$1.Router }, { token: i2__namespace.StorageService }, { token: i2__namespace$1.ToastrService }, { token: i3__namespace.ApplicationService }, { token: i5__namespace.AuthenticationService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    InterceptorOneService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InterceptorOneService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InterceptorOneService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i2__namespace.StorageService }, { type: i2__namespace$1.ToastrService }, { type: i3__namespace.ApplicationService }, { type: i5__namespace.AuthenticationService }]; } });

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

    var MatSelectSearchService = /** @class */ (function () {
        function MatSelectSearchService(searchBy) {
            this.entityArr = [];
            this.filterFC = new i2$2.FormControl();
            this.filterUnsubscribe = new rxjs.Subject();
            this.filteredEntities = new rxjs.ReplaySubject(1);
            this.searchBy = searchBy;
        }
        MatSelectSearchService.prototype.createSubscription = function () {
            var _this = this;
            this.filteredEntities.next(this.entityArr);
            this.filterFC.valueChanges
                .pipe(operators.takeUntil(this.filterUnsubscribe))
                .subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.filterMultipleValue(this.entityArr, this.filterFC.value, this.searchBy)];
                        case 1:
                            _a.filteredEntities = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        MatSelectSearchService.prototype.filterMultipleValue = function (data, filterValue, filterBy) {
            return new Promise(function (resolve) {
                var filtered = new rxjs.ReplaySubject(1);
                if (!data) {
                    resolve('');
                }
                var search = filterValue;
                if (!search) {
                    filtered.next(data.slice());
                }
                else {
                    search = search.toLowerCase();
                    filtered.next(data.filter(function (filterData) { return filterBy.some(function (field) { return filterData[field].toLowerCase().indexOf(search) > -1; }); }));
                }
                resolve(filtered);
            });
        };
        return MatSelectSearchService;
    }());
    MatSelectSearchService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MatSelectSearchService, deps: "invalid", target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MatSelectSearchService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MatSelectSearchService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MatSelectSearchService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: undefined }]; } });

    var EllipsisPipeService = /** @class */ (function () {
        function EllipsisPipeService() {
        }
        EllipsisPipeService.prototype.transform = function (value, limit) {
            if (value == null)
                return null;
            return value.length > limit ? value.substring(0, limit) + '...' : value;
        };
        return EllipsisPipeService;
    }());
    EllipsisPipeService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    EllipsisPipeService.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeService, name: "dotdotdot" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeService, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'dotdotdot'
                    }]
            }] });
    var EllipsisPipeModule = /** @class */ (function () {
        function EllipsisPipeModule() {
        }
        return EllipsisPipeModule;
    }());
    EllipsisPipeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    EllipsisPipeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeModule, declarations: [EllipsisPipeService], imports: [i6.CommonModule], exports: [EllipsisPipeService] });
    EllipsisPipeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeModule, imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EllipsisPipeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule],
                        declarations: [EllipsisPipeService],
                        exports: [EllipsisPipeService]
                    }]
            }] });

    var CountryController = /** @class */ (function () {
        function CountryController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        CountryController.prototype.getCountry = function () {
            var headers = new i1$1.HttpHeaders().set('skipAuth', '1');
            return this.http.get(this.environment.ORGANIZATION_PUBLIC_API_URL + "country", { headers: headers });
        };
        return CountryController;
    }());
    CountryController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CountryController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var SystemController = /** @class */ (function () {
        function SystemController(http) {
            this.http = http;
        }
        SystemController.prototype.getSystemInfo = function () {
            var headers = new i1$1.HttpHeaders();
            headers = headers.append('skipAuth', '1');
            headers = headers.append('skipSuccessStatus', '1');
            headers = headers.append('skipErrorStatus', '1');
            return this.http.get("https://ipinfo.io/json", { headers: headers });
        };
        return SystemController;
    }());
    SystemController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemController, deps: [{ token: i1__namespace$2.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SystemController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }]; } });

    var SystemService = /** @class */ (function () {
        function SystemService(systemController) {
            this.systemController = systemController;
        }
        SystemService.prototype.getSystemInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var systemInfo, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.systemController.getSystemInfo().toPromise()];
                        case 1:
                            systemInfo = (_a.sent());
                            if (systemInfo) {
                                return [2 /*return*/, systemInfo];
                            }
                            else {
                                return [2 /*return*/, null];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return SystemService;
    }());
    SystemService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemService, deps: [{ token: SystemController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SystemService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SystemService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: SystemController }]; } });

    var CountryService = /** @class */ (function () {
        function CountryService(countryController, systemService) {
            this.countryController = countryController;
            this.systemService = systemService;
            this.redirectUrl = '';
        }
        CountryService.prototype.getCountry = function () {
            return __awaiter(this, void 0, void 0, function () {
                var countryM, country, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            country = [new Country()];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.countryController.getCountry().toPromise()];
                        case 2:
                            countryM = _a.sent();
                            if (countryM) {
                                return [2 /*return*/, countryM];
                            }
                            else {
                                return [2 /*return*/, country];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, country];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CountryService.prototype.getCurrentCountry = function () {
            return __awaiter(this, void 0, void 0, function () {
                var systemInfo, countryCode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.systemService.getSystemInfo()];
                        case 1:
                            systemInfo = (_a.sent());
                            if (systemInfo) {
                                countryCode = systemInfo.country;
                            }
                            else {
                                countryCode = null;
                            }
                            return [2 /*return*/, countryCode];
                    }
                });
            });
        };
        return CountryService;
    }());
    CountryService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryService, deps: [{ token: CountryController }, { token: SystemService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CountryService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CountryService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: CountryController }, { type: SystemService }]; } });

    var StateController = /** @class */ (function () {
        function StateController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        StateController.prototype.getState = function (countryCode) {
            var headers = new i1$1.HttpHeaders().set('skipAuth', '1');
            return this.http.get(this.environment.ORGANIZATION_PUBLIC_API_URL + "states/" + countryCode, { headers: headers });
        };
        return StateController;
    }());
    StateController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StateController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var StateService = /** @class */ (function () {
        function StateService(stateController) {
            this.stateController = stateController;
        }
        StateService.prototype.getState = function (countryCode) {
            return __awaiter(this, void 0, void 0, function () {
                var stateM, state, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            state = [new State()];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.stateController.getState(countryCode).toPromise()];
                        case 2:
                            stateM = _a.sent();
                            if (stateM) {
                                return [2 /*return*/, stateM];
                            }
                            else {
                                return [2 /*return*/, state];
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [2 /*return*/, state];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return StateService;
    }());
    StateService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateService, deps: [{ token: StateController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StateService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StateService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: StateController }]; } });

    var StatusService = /** @class */ (function () {
        function StatusService() {
        }
        StatusService.prototype.getStatusClass = function (status) {
            var className;
            switch (status) {
                case 'ACTIVE':
                case 'ONLINE':
                    className = 'text-success';
                    break;
                case 'INACTIVE':
                case 'OFFLINE':
                    className = 'text-danger';
                    break;
                case 'PENDING':
                    className = 'text-warning';
                    break;
                case 'DELETED':
                    className = 'text-danger';
                    break;
                default:
                    className = '';
                    break;
            }
            return className;
        };
        StatusService.prototype.getStatusValue = function (status) {
            var value;
            switch (status) {
                case 'ACTIVE':
                    value = 'Active';
                    break;
                case 'INACTIVE':
                    value = 'Inactive';
                    break;
                case 'PENDING':
                    value = 'Pending';
                    break;
                case 'DELETED':
                    value = 'Deleted';
                    break;
                case 'ONLINE':
                    value = 'Online';
                    break;
                case 'OFFLINE':
                    value = 'Offline';
                    break;
                default:
                    value = status;
                    break;
            }
            return value;
        };
        StatusService.prototype.getYesByBoolean = function (value) {
            var label;
            switch (value) {
                case true:
                    label = 'Yes';
                    break;
                case false:
                    label = 'No';
                    break;
                default:
                    label = value;
                    break;
            }
            return label;
        };
        StatusService.prototype.getActiveByBoolean = function (value) {
            var label;
            switch (value) {
                case true:
                    label = 'Active';
                    break;
                case false:
                    label = 'Inactive';
                    break;
                default:
                    label = value;
                    break;
            }
            return label;
        };
        StatusService.prototype.getEnableByBoolean = function (value) {
            var label;
            switch (value) {
                case true:
                    label = 'Enabled';
                    break;
                case false:
                    label = 'Disabled';
                    break;
                default:
                    label = value;
                    break;
            }
            return label;
        };
        StatusService.prototype.getYesActiveClassByBoolean = function (value) {
            var className;
            switch (value) {
                case true:
                    className = 'text-success';
                    break;
                case false:
                    className = 'text-danger';
                    break;
                default:
                    className = '';
                    break;
            }
            return className;
        };
        return StatusService;
    }());
    StatusService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StatusService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StatusService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StatusService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StatusService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var TimeZoneController = /** @class */ (function () {
        function TimeZoneController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        TimeZoneController.prototype.getTimeZone = function () {
            var headers = new i1$1.HttpHeaders().set('skipAuth', '1');
            return this.http.get(this.environment.ORGANIZATION_PUBLIC_API_URL + "time-zone", { headers: headers });
        };
        return TimeZoneController;
    }());
    TimeZoneController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneController, deps: [{ token: i1__namespace$2.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TimeZoneController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var TimeZoneService = /** @class */ (function () {
        function TimeZoneService(timeZoneController) {
            this.timeZoneController = timeZoneController;
        }
        TimeZoneService.prototype.getTimeZone = function () {
            return __awaiter(this, void 0, void 0, function () {
                var timeZoneM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.timeZoneController.getTimeZone().toPromise()];
                        case 1:
                            timeZoneM = _a.sent();
                            return [2 /*return*/, timeZoneM];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return TimeZoneService;
    }());
    TimeZoneService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneService, deps: [{ token: TimeZoneController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TimeZoneService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimeZoneService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: TimeZoneController }]; } });

    var LookupController = /** @class */ (function () {
        function LookupController(http) {
            this.http = http;
        }
        LookupController.prototype.getLookupValue = function (baseUrl, lookup) {
            return this.http.post(baseUrl + "lookup", lookup);
        };
        return LookupController;
    }());
    LookupController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupController, deps: [{ token: i1__namespace$2.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LookupController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }]; } });

    var LookupService = /** @class */ (function () {
        function LookupService(lookupController) {
            this.lookupController = lookupController;
        }
        LookupService.prototype.getLookup = function (baseUrl, lookup) {
            return __awaiter(this, void 0, void 0, function () {
                var lookupM, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.lookupController.getLookupValue(baseUrl, lookup).toPromise()];
                        case 1:
                            lookupM = _a.sent();
                            if (lookupM) {
                                return [2 /*return*/, lookupM];
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error('Error -', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/, []];
                    }
                });
            });
        };
        return LookupService;
    }());
    LookupService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupService, deps: [{ token: LookupController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LookupService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LookupService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: LookupController }]; } });

    var ImageService = /** @class */ (function () {
        function ImageService() {
        }
        ImageService.prototype.getUploadImage = function (type, image) {
            var returnImage;
            var showDeleteBtn = false;
            if (image) {
                returnImage = image;
                showDeleteBtn = true;
            }
            else {
                showDeleteBtn = false;
                switch (type) {
                    case exports.ImageTypeEnum.USER_PROFILE:
                        returnImage = exports.ImageDefaultPathEnum.USER_PROFILE;
                        break;
                    case exports.ImageTypeEnum.ORG_LOGO:
                        returnImage = exports.ImageDefaultPathEnum.ORG_LOGO;
                        break;
                    case exports.ImageTypeEnum.FACILITY_LOGO:
                        returnImage = exports.ImageDefaultPathEnum.FACILITY_LOGO;
                        break;
                    case exports.ImageTypeEnum.REGULATOR_LOGO:
                        returnImage = exports.ImageDefaultPathEnum.REGULATOR_LOGO;
                        break;
                    default:
                        returnImage = exports.ImageDefaultPathEnum.DEFAULT_LOGO;
                        break;
                }
            }
            return {
                returnImage: returnImage,
                showDeleteBtn: showDeleteBtn
            };
        };
        return ImageService;
    }());
    ImageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ImageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ImageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var FileController = /** @class */ (function () {
        function FileController(http) {
            this.http = http;
        }
        FileController.prototype.updateFile = function (apiUrl, orgID, fileID, file) {
            return this.http.patch(apiUrl + "files/" + fileID, file);
        };
        FileController.prototype.updateFileNew = function (apiUrl, orgID, fileID, fileFormData) {
            return this.http.patch(apiUrl + "organizations/" + orgID + "/files/" + fileID, fileFormData);
        };
        FileController.prototype.deleteFile = function (apiUrl, orgID, fileID) {
            return this.http.delete(apiUrl + "organizations/" + orgID + "/files/" + fileID);
        };
        return FileController;
    }());
    FileController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileController, deps: [{ token: i1__namespace$2.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FileController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileController, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }]; } });

    var FileService = /** @class */ (function () {
        function FileService(fileController) {
            this.fileController = fileController;
        }
        FileService.prototype.updateFile = function (apiUrl, orgID, fileID, file) {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = new Response();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.fileController.updateFile(apiUrl, orgID, fileID, file).toPromise()];
                        case 2:
                            res = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error in updateFile -', error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, res];
                    }
                });
            });
        };
        FileService.prototype.updateFileNew = function (apiUrl, orgID, fileID, fileFormData) {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = new Response();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.fileController.updateFileNew(apiUrl, orgID, fileID, fileFormData).toPromise()];
                        case 2:
                            res = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            console.error('Error in updateFileNew -', error_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        FileService.prototype.deleteFile = function (apiUrl, orgID, fileID) {
            return __awaiter(this, void 0, void 0, function () {
                var res, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = new Response();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.fileController.deleteFile(apiUrl, orgID, fileID).toPromise()];
                        case 2:
                            res = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_3 = _a.sent();
                            console.error('Error in deleteFile -', error_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, res];
                    }
                });
            });
        };
        return FileService;
    }());
    FileService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileService, deps: [{ token: FileController }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FileService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: FileController }]; } });

    var HeaderOneComponent = /** @class */ (function () {
        function HeaderOneComponent() {
        }
        HeaderOneComponent.prototype.ngOnInit = function () {
        };
        return HeaderOneComponent;
    }());
    HeaderOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    HeaderOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HeaderOneComponent, selector: "app-header-one", ngImport: i0__namespace, template: "<div class=\"container-fluid d-flex headerOneWrapper\">\n    <div class=\"container my-auto\">\n        <header>\n            <img class=\"headerOneLogo\" src=\"/assets/images/application-logo/tsc-with-name.png\">\n        </header>\n    </div>\n</div>\n", styles: [".headerOneWrapper{height:60px}.headerOneLogo{height:44px;width:auto}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-header-one',
                        templateUrl: './header-one.component.html',
                        styleUrls: ['./header-one.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var HeaderOneModule = /** @class */ (function () {
        function HeaderOneModule() {
        }
        return HeaderOneModule;
    }());
    HeaderOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HeaderOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneModule, declarations: [HeaderOneComponent], exports: [HeaderOneComponent] });
    HeaderOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HeaderOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HeaderOneComponent,
                        ],
                        imports: [],
                        exports: [
                            HeaderOneComponent
                        ]
                    }]
            }] });

    var FooterOneComponent = /** @class */ (function () {
        function FooterOneComponent() {
            this.COMMON_CONSTANT = COMMON_CONSTANT;
        }
        FooterOneComponent.prototype.ngOnInit = function () {
        };
        return FooterOneComponent;
    }());
    FooterOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterOneComponent, selector: "app-footer-one", ngImport: i0__namespace, template: "<div class=\"container-fluid d-flex align-items-center justify-content-between footerOneWrapper\">\n    <div class=\"container\">\n        <footer>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"float-start\">\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.PRIVACY\" target=\"_blank\">Privacy</a>\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.TERMS\" target=\"_blank\">Terms</a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <div class=\"float-end text-light pt-2\">\n                        Copyright \u00A9 LogicLadder\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n", styles: [".footerOneWrapper{background-color:#1a202c;height:60px;position:absolute;bottom:0}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-footer-one',
                        templateUrl: './footer-one.component.html',
                        styleUrls: ['./footer-one.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var FooterOneModule = /** @class */ (function () {
        function FooterOneModule() {
        }
        return FooterOneModule;
    }());
    FooterOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FooterOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneModule, declarations: [FooterOneComponent], exports: [FooterOneComponent] });
    FooterOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FooterOneComponent,
                        ],
                        imports: [],
                        exports: [
                            FooterOneComponent
                        ]
                    }]
            }] });

    var FooterTwoComponent = /** @class */ (function () {
        function FooterTwoComponent() {
        }
        FooterTwoComponent.prototype.ngOnInit = function () {
        };
        return FooterTwoComponent;
    }());
    FooterTwoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterTwoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterTwoComponent, selector: "app-footer-two", ngImport: i0__namespace, template: "<div class=\"app-footer mt-4\">\n    <div class=\"app-footer__inner\">\n        <div class=\"app-footer-left\">\n            Copyright \u00A9 LogicLadder\n        </div>\n    </div>\n</div>" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-footer-two',
                        templateUrl: './footer-two.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FooterTwoModule = /** @class */ (function () {
        function FooterTwoModule() {
        }
        return FooterTwoModule;
    }());
    FooterTwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FooterTwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoModule, declarations: [FooterTwoComponent], exports: [FooterTwoComponent] });
    FooterTwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterTwoModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FooterTwoComponent,
                        ],
                        imports: [],
                        exports: [
                            FooterTwoComponent
                        ]
                    }]
            }] });

    var FooterThreeComponent = /** @class */ (function () {
        function FooterThreeComponent() {
        }
        FooterThreeComponent.prototype.ngOnInit = function () {
        };
        return FooterThreeComponent;
    }());
    FooterThreeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FooterThreeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterThreeComponent, selector: "lib-footer-three", ngImport: i0__namespace, template: "<div class=\"app-footer\">\n    <div class=\"app-footer__inner\">\n        <div class=\"app-footer-left\">\n            Copyright \u00A9 LogicLadder\n        </div>\n    </div>\n</div>\n" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-footer-three',
                        templateUrl: './footer-three.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FooterThreeModule = /** @class */ (function () {
        function FooterThreeModule() {
        }
        return FooterThreeModule;
    }());
    FooterThreeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FooterThreeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeModule, declarations: [FooterThreeComponent], exports: [FooterThreeComponent] });
    FooterThreeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FooterThreeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FooterThreeComponent,
                        ],
                        imports: [],
                        exports: [
                            FooterThreeComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var SideNavComponent = /** @class */ (function () {
        function SideNavComponent(router, storageService, applicationService) {
            this.router = router;
            this.storageService = storageService;
            this.applicationService = applicationService;
            this.menuOutput = new i0.EventEmitter();
            this.toggleSidebarGlobal = new i0.EventEmitter(true);
            this.toggleSettingDrawerGlobal = new i0.EventEmitter(true);
            this.sidebarArray = [];
            this.activeID = [];
        }
        SideNavComponent.prototype.ngOnInit = function () {
            this.applicationKeyID = this.storageService.getStorage(['applicationKeyID']);
            this.sidebarType = this.sidebarTypeInp;
            this.sidebarArray = this.sidebarArrayInp;
            this.openAccordion();
            // this.handleActiveTabOnRefresh();  /* TODO: SOMYA AGRAWAL, added to handle selected tab on refresh, not working properly */
        };
        SideNavComponent.prototype.ngOnChanges = function (changes) {
            if (changes.sidebarArrayInp && this.sidebarArrayInp) {
                this.onMenuClick(this.sidebarArrayInp);
            }
        };
        SideNavComponent.prototype.onMenuClick = function (menu) {
            if (menu === null || menu === void 0 ? void 0 : menu.route) {
                this.navigate(menu);
            }
            if (menu.dualMenu) {
                if (this.sidebarType == 'LEFT') {
                    this.sidebarArray = menu.dualMenu;
                    this.openAccordion();
                }
                var defaultMenu = this.findDefaultLandingPage(menu.dualMenu);
                if (defaultMenu) {
                    this.navigate(defaultMenu);
                }
            }
            if (this.sidebarType == 'RIGHT') {
                var clonedMenu = Object.assign({}, menu);
                this.menuOutput.emit(clonedMenu);
                this.toggleSettingDrawerFun();
            }
        };
        SideNavComponent.prototype.findDefaultLandingPage = function (menuArray) {
            var e_1, _b;
            try {
                for (var menuArray_1 = __values(menuArray), menuArray_1_1 = menuArray_1.next(); !menuArray_1_1.done; menuArray_1_1 = menuArray_1.next()) {
                    var menu = menuArray_1_1.value;
                    if (menu.isDefaultLandingPage) {
                        return menu;
                    }
                    if (menu.children) {
                        var result = this.findDefaultLandingPage(menu.children);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (menuArray_1_1 && !menuArray_1_1.done && (_b = menuArray_1.return)) _b.call(menuArray_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        SideNavComponent.prototype.backFunc = function (menu) {
            if (menu === null || menu === void 0 ? void 0 : menu.backMenuItem) {
                this.sidebarArray = menu.backMenuItem;
            }
            if (menu === null || menu === void 0 ? void 0 : menu.navigateToLandingPage) {
                var landingPageItem = menu === null || menu === void 0 ? void 0 : menu.backMenuItem.find(function (item) { return item.isLandingPage; });
                if (landingPageItem) {
                    this.navigate(landingPageItem);
                    return;
                }
            }
            this.openAccordion();
        };
        SideNavComponent.prototype.openAccordion = function () {
            var _a;
            var openAccordionItems = (_a = this.sidebarArray) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return (item === null || item === void 0 ? void 0 : item.type) == 'ACCORDION' && (item === null || item === void 0 ? void 0 : item.defaultState) == 'OPEN'; });
            this.activeID = openAccordionItems === null || openAccordionItems === void 0 ? void 0 : openAccordionItems.map(function (item) { return item === null || item === void 0 ? void 0 : item.label; });
        };
        SideNavComponent.prototype.changeAccordionState = function (menu) {
            var _this = this;
            this.accordion.collapseAll();
            this.activeID = menu.label;
            this.accordion.expand(menu.label);
            if (menu.children) {
                menu.children.forEach(function (child) {
                    _this.accordion.expand(child.label);
                });
            }
        };
        SideNavComponent.prototype.handleActiveTabOnRefresh = function () {
            this.sidebarArray.forEach(function (menu) {
                if (menu.dualMenu) {
                    menu.dualMenu.forEach(function (dualMenuItem) {
                        if (dualMenuItem.children) {
                            dualMenuItem.children.forEach(function (child) {
                                if ((child === null || child === void 0 ? void 0 : child.route) == window.location.pathname) {
                                    child.active = true;
                                }
                            });
                        }
                    });
                }
            });
        };
        SideNavComponent.prototype.isActiveRoute = function (menu) {
            var e_2, _b;
            if (!menu) {
                return false;
            }
            if (menu.activeLink) {
                try {
                    for (var _c = __values(menu.activeLink), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var parentLink = _d.value;
                        if (this.router.isActive(parentLink, false)) {
                            return true;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            return false;
        };
        SideNavComponent.prototype.navigate = function (menu) {
            this.router.navigate([
                menu === null || menu === void 0 ? void 0 : menu.route,
                { outlets: this.getOutlets(menu) }
            ], { queryParams: this.getQueryParams(menu) });
        };
        SideNavComponent.prototype.getOutlets = function (menu) {
            var outlets = {};
            if (menu === null || menu === void 0 ? void 0 : menu.outlet) {
                menu === null || menu === void 0 ? void 0 : menu.outlet.forEach(function (outlet) {
                    outlets[outlet['outlet']] = outlet['route'];
                });
            }
            return outlets;
        };
        SideNavComponent.prototype.getQueryParams = function (menu) {
            var params = {};
            if (menu === null || menu === void 0 ? void 0 : menu.queryParam) {
                menu === null || menu === void 0 ? void 0 : menu.queryParam.forEach(function (param) {
                    params[param['key']] = param['param'];
                });
            }
            return params;
        };
        SideNavComponent.prototype.navigateToLandingPage = function () {
            this.router.navigate([this.landingPageRouteInp]);
        };
        SideNavComponent.prototype.toggleSidebarFun = function () {
            this.toggleSidebar = !this.toggleSidebar;
            this.toggleSidebarGlobal.emit(this.toggleSidebar);
        };
        SideNavComponent.prototype.toggleSettingDrawerFun = function () {
            this.toggleSettingDrawer = !this.toggleSettingDrawer;
            this.toggleSettingDrawerGlobal.emit(this.toggleSettingDrawer);
        };
        return SideNavComponent;
    }());
    SideNavComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavComponent, deps: [{ token: i1__namespace$1.Router }, { token: i2__namespace.StorageService }, { token: i3__namespace.ApplicationService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    SideNavComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SideNavComponent, selector: "lib-side-nav", inputs: { sidebarTypeInp: "sidebarTypeInp", sidebarArrayInp: "sidebarArrayInp", sidebarHeaderLabelInp: "sidebarHeaderLabelInp", headerLogo: "headerLogo", footerLogo: "footerLogo", toggleSidebar: "toggleSidebar", toggleSettingDrawer: "toggleSettingDrawer", landingPageRouteInp: "landingPageRouteInp" }, outputs: { menuOutput: "menuOutput", toggleSidebarGlobal: "toggleSidebarGlobal", toggleSettingDrawerGlobal: "toggleSettingDrawerGlobal" }, providers: [i5$1.NgbAccordionConfig], viewQueries: [{ propertyName: "accordion", first: true, predicate: i5$1.NgbAccordion, descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<div\n    [ngClass]=\"[sidebarType == 'LEFT' ? 'app-sidebar sidebar-shadow ' : 'setting-sidebar setting-drawer-wrapper', toggleSettingDrawer ? 'setting-drawer-open' : '']\">\n\n    <div class=\"app-header__logo separator-bottom\" *ngIf=\"headerLogo\">\n        <div (click)=\"navigateToLandingPage()\" class=\"cursorPointer\" *ngIf=\"!toggleSidebar\">\n            <img class=\"headerProductLogo ms-1\"\n                [src]=\"applicationService.getApplicationLogoWithSideName(applicationKeyID)\" alt=\"Application logo\" />\n        </div>\n        <div class=\"header__pane ms-auto\">\n            <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : !toggleSidebar}\"\n                (click)=\"toggleSidebarFun();\">\n                <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"drawer-nav-btn\" *ngIf=\"!headerLogo\">\n        <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : toggleSettingDrawer}\"\n            (click)=\"toggleSettingDrawerFun()\">\n            <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n        </button>\n    </div>\n\n    <div class=\"app-sidebar-content pt-2\" [ngClass]=\"{'drawer-content-wrapper': sidebarType == 'RIGHT'}\">\n        <div class=\"app-sidebar-scroll\">\n            <perfect-scrollbar [config]=\"{wheelPropagation: false}\" class=\"scroll-fix\" [scrollIndicators]=\"true\">\n                <div class=\"v-sidebar-menu\">\n                    <div class=\"vsm-list\">\n                        <div *ngIf=\"sidebarHeaderLabelInp\" [ngClass]=\"{'bottomMargin': sidebarHeaderLabelInp}\">\n                            <span class=\"fw-bold ms-2 fs-4\">{{ sidebarHeaderLabelInp }}</span>\n                        </div>\n\n                        <div *ngFor=\"let menu of sidebarArray\">\n                            <ng-container *ngIf=\"!toggleSidebar; else closedSidebar\">\n                                <ng-container *ngIf=\"!menu.children && !menu.isSidebarHeaderLabel; else childrenView\">\n                                    <ng-container *isRenderFeature=\"menu?.featureKeyID\">\n                                        <ng-container *isRenderRBAC=\"menu?.resourcePermission\">\n                                            <div class=\"vsm-link mb-1\"\n                                                [ngClass]=\"{'mb-3': menu.isBackButton, 'customPadding': !menu?.icon, 'selected': isActiveRoute(menu)}\"\n                                                (click)=\"menu.isBackButton ? backFunc(menu) : onMenuClick(menu)\"\n                                                routerLinkActive=\"active-item\"\n                                                [matTooltip]=\"menu?.label?.length>18? menu.label: ''\"\n                                                matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                                <div class=\"d-flex align-items-center\">\n                                                    <span class=\"material-symbols-outlined vsm-icon icon me-3\"> {{\n                                                        menu?.icon }}\n                                                    </span>\n                                                    <span\n                                                        [ngClass]=\"{'fw-bold fs-4': menu.isSidebarHeaderLabel, 'fw-bold': isActiveRoute(menu)}\">{{\n                                                        menu?.label | dotdotdot:18 }}</span>\n                                                    <span class=\"material-symbols-outlined showRightArrowOnHover ms-2\"\n                                                        *ngIf=\"menu?.dualMenu\">\n                                                        arrow_circle_right\n                                                    </span>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n\n                                <ng-template #childrenView>\n\n                                    <ng-container *ngIf=\"menu.type == 'ACCORDION'; else openMenuView\">\n                                        <ng-container\n                                            *ngTemplateOutlet=\"accordionTemplate; context: { accordionContent: menu }\"></ng-container>\n                                    </ng-container>\n\n                                    <ng-template #openMenuView>\n                                        <div class=\"openMenuHeader vsm-title mb-2\"\n                                            [ngClass]=\"{'fw-bold fs-4': menu.isSidebarHeaderLabel}\"\n                                            [matTooltip]=\"menu?.label?.length>18? menu.label: ''\"\n                                            matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                            {{ menu?.label | dotdotdot:18 }}\n                                        </div>\n                                        <div *ngFor=\"let openMenuChildren of menu.children\">\n                                            <ng-container *isRenderFeature=\"openMenuChildren?.featureKeyID\">\n                                                <ng-container *isRenderRBAC=\"openMenuChildren?.resourcePermission\">\n                                                    <a class=\"vsm-link mb-1\"\n                                                        [ngClass]=\"{'selected': isActiveRoute(openMenuChildren)}\"\n                                                        routerLinkActive=\"active-item\"\n                                                        (click)=\"navigate(openMenuChildren)\"\n                                                        [matTooltip]=\"openMenuChildren?.label?.length>18? openMenuChildren.label: ''\"\n                                                        matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined icon ms-3\"> {{\n                                                                openMenuChildren?.icon }} </span>\n                                                            <span class=\"ms-3\"\n                                                                [ngClass]=\"{'fw-bold': isActiveRoute(openMenuChildren)}\">\n                                                                {{\n                                                                openMenuChildren?.label | dotdotdot:18 }} </span>\n                                                        </div>\n                                                    </a>\n                                                </ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n\n                                </ng-template>\n                            </ng-container>\n\n                            <ng-template #closedSidebar>\n                                <div *ngIf=\"!menu.children && !menu.isSidebarHeaderLabel\">\n                                    <ng-container\n                                        *ngTemplateOutlet=\"closedSidebarTemplate; context: { menuItem: menu }\"></ng-container>\n                                </div>\n                                <ng-container *ngFor=\"let child of menu.children\">\n                                    <ng-container *ngIf=\"!child.subLabel\">\n                                        <ng-container\n                                            *ngTemplateOutlet=\"closedSidebarTemplate; context: { menuItem: child }\"></ng-container>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-template>\n\n                        </div>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n\n    <div class=\"app-header__logo separator-top\" *ngIf=\"footerLogo\">\n        <img class=\"tscLogoWithName\" [ngClass]=\"{'d-none': toggleSidebar}\"\n            src=\"../assets/images/application-logo/tsc-with-name.png\" />\n        <img class=\"tscLogoWithoutName\" [ngClass]=\"{'d-none': !toggleSidebar}\"\n            src=\"../assets/images/application-logo/tsc-without-name.png\" />\n    </div>\n</div>\n\n<div class=\"setting-drawer-overlay\" (click)=\"toggleSettingDrawerFun()\"></div>\n\n<ng-template #accordionTemplate let-accordionContent=\"accordionContent\">\n    <ngb-accordion [destroyOnHide]=\"true\" #acc=\"ngbAccordion\" [activeIds]=\"activeID\">\n        <ngb-panel [id]=\"accordionContent.label\">\n\n            <ng-template ngbPanelHeader>\n                <button ngbPanelToggle routerLinkActive=\"active-item\" class=\"vsm-link\"\n                    [ngClass]=\"{'customPadding': !accordionContent?.icon}\"\n                    [matTooltip]=\"accordionContent?.label?.length>18? accordionContent.label: ''\"\n                    matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                    <div class=\"d-flex align-items-center\">\n                        <span class=\"material-symbols-outlined icon me-3\">{{ accordionContent?.icon }}</span>\n                        <span class=\"fw-normal\">{{ accordionContent?.label | dotdotdot:18 }}</span>\n                    </div>\n                    <i class=\"vsm-arrow\"></i>\n                </button>\n            </ng-template>\n\n            <ng-template ngbPanelContent>\n                <div class=\"vsm-dropdown\">\n                    <div class=\"vsm-list\">\n                        <ng-container *ngFor=\"let submenuItem of accordionContent?.children\">\n\n                            <ng-container *ngIf=\"!submenuItem.subLabel; else subMenuSubHeader\">\n                                <ng-container *isRenderFeature=\"submenuItem?.featureKeyID\">\n                                    <ng-container *isRenderRBAC=\"submenuItem?.resourcePermission\">\n                                        <a class=\"vsm-link mb-1 ms-3\"\n                                            [ngClass]=\"{'selected': isActiveRoute(submenuItem)}\"\n                                            routerLinkActive=\"active-item\"\n                                            (click)=\"changeAccordionState(accordionContent); navigate(submenuItem)\"\n                                            [matTooltip]=\"submenuItem?.label?.length>18? submenuItem.label: ''\"\n                                            matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                            <div class=\"d-flex align-items-center\">\n                                                <span class=\"material-symbols-outlined icon me-3\"> {{ submenuItem?.icon\n                                                    }}\n                                                </span>\n                                                <span [ngClass]=\"{'fw-bold': isActiveRoute(openMenuChildren)}\"> {{\n                                                    submenuItem?.label | dotdotdot:18}} </span>\n                                            </div>\n                                        </a>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n\n                            <ng-template #subMenuSubHeader>\n                                <div class=\"ms-4 text-secondary fw-bold mb-2\"\n                                    [matTooltip]=\"submenuItem?.label?.length>18? submenuItem.label: ''\"\n                                    matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\"> {{ submenuItem.subLabel\n                                    | dotdotdot:18}} </div>\n                            </ng-template>\n\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n</ng-template>\n\n<ng-template #closedSidebarTemplate let-menuItem=\"menuItem\">\n    <ng-container *isRenderFeature=\"menuItem?.featureKeyID\">\n        <ng-container *isRenderRBAC=\"menuItem?.resourcePermission\">\n            <a class=\"vsm-link mb-1 closedSideBarIconPadding\" [ngClass]=\"{'selected': isActiveRoute(menuItem)}\"\n                routerLinkActive=\"active-item\"\n                (click)=\"menuItem.isBackButton ? backFunc(menuItem) : onMenuClick(menuItem); navigate(menuItem)\"\n                [matTooltip]=\"menuItem?.label\" matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined vsm-icon icon me-3\"> {{ menuItem?.icon }}\n                    </span>\n                </div>\n            </a>\n        </ng-container>\n    </ng-container>\n</ng-template>", styles: [".scroll-fix{height:calc(100vh - 122px)!important}.material-symbols-outlined{font-variation-settings:\"FILL\" 1}.headerProductLogo{height:40px;width:auto}.vsm-link.selected{background-color:#e0f3ff;color:#3f6ad8}.vsm-link{font-weight:normal!important;min-height:30px!important;border-radius:16px}.vsm-link:hover .showRightArrowOnHover{opacity:1}.showRightArrowOnHover{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;right:5px;top:50%;margin-top:-17px;font-size:1.5rem;opacity:0}.showLeftArrow{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;left:5px;top:50%;margin-top:-17px;font-size:1.5rem}.customPadding{padding:0 1.5rem 0 15px}.sideBarTooltip{white-space:pre-line!important;max-width:1100px!important;max-height:550px!important;font-size:18px!important}.openMenuHeader{pointer-events:none;padding:0 1.5rem 0 15px}.vsm-title{font-size:14px;white-space:nowrap;position:relative;font-weight:normal}.v-sidebar-menu .vsm-dropdown .vsm-list{padding:.75rem}.vsm-icon{opacity:1}.icon{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;left:5px;top:50%;margin-top:-17px;font-size:1.3rem}.subLabelMargin{margin-left:1.9rem!important}.separator-top{border-top:1px solid #f6eded;background-color:#fff!important;position:fixed;bottom:0;left:0}.tscLogoWithName{height:38px;width:auto}.tscLogoWithoutName{width:32px;height:32px}.bottomMargin{margin-bottom:17px}.closedSideBarIconPadding{padding:unset}\n"], components: [{ type: i4__namespace.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i5__namespace$1.NgbAccordion, selector: "ngb-accordion", inputs: ["animation", "activeIds", "closeOthers", "destroyOnHide", "type"], outputs: ["panelChange", "shown", "hidden"], exportAs: ["ngbAccordion"] }], directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.FeatureDirective2, selector: "[isRenderFeature]", inputs: ["isRenderFeature"] }, { type: i8__namespace.RBACDirective2, selector: "[isRenderRBAC]", inputs: ["isRenderRBAC"] }, { type: i6__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i6__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5__namespace$1.NgbPanel, selector: "ngb-panel", inputs: ["disabled", "id", "title", "type", "cardClass"], outputs: ["shown", "hidden"] }, { type: i5__namespace$1.NgbPanelHeader, selector: "ng-template[ngbPanelHeader]" }, { type: i5__namespace$1.NgbPanelToggle, selector: "button[ngbPanelToggle]", inputs: ["ngbPanelToggle"] }, { type: i5__namespace$1.NgbPanelContent, selector: "ng-template[ngbPanelContent]" }], pipes: { "dotdotdot": EllipsisPipeService } });
    __decorate([
        store.select('config')
    ], SideNavComponent.prototype, "config$", void 0);
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-side-nav',
                        templateUrl: './side-nav.component.html',
                        styleUrls: ['./side-nav.component.scss'],
                        providers: [i5$1.NgbAccordionConfig],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i2__namespace.StorageService }, { type: i3__namespace.ApplicationService }]; }, propDecorators: { sidebarTypeInp: [{
                    type: i0.Input
                }], sidebarArrayInp: [{
                    type: i0.Input
                }], sidebarHeaderLabelInp: [{
                    type: i0.Input
                }], headerLogo: [{
                    type: i0.Input
                }], footerLogo: [{
                    type: i0.Input
                }], toggleSidebar: [{
                    type: i0.Input
                }], toggleSettingDrawer: [{
                    type: i0.Input
                }], landingPageRouteInp: [{
                    type: i0.Input
                }], menuOutput: [{
                    type: i0.Output
                }], toggleSidebarGlobal: [{
                    type: i0.Output
                }], toggleSettingDrawerGlobal: [{
                    type: i0.Output
                }], config$: [], accordion: [{
                    type: i0.ViewChild,
                    args: [i5$1.NgbAccordion]
                }] } });

    // /tsc-library/
    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
    };
    var SideNavModule = /** @class */ (function () {
        function SideNavModule() {
        }
        return SideNavModule;
    }());
    SideNavModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SideNavModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavModule, declarations: [SideNavComponent], imports: [platformBrowser.BrowserModule,
            i5$1.NgbModule,
            i4.PerfectScrollbarModule,
            icon.MatIconModule,
            i6$1.MatTooltipModule,
            i8.RBACDirectiveModule2,
            i7.FeatureDirectiveModule2,
            EllipsisPipeModule], exports: [SideNavComponent] });
    SideNavModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavModule, providers: [
            {
                provide: i4.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            }
        ], imports: [[
                platformBrowser.BrowserModule,
                i5$1.NgbModule,
                i4.PerfectScrollbarModule,
                icon.MatIconModule,
                i6$1.MatTooltipModule,
                i8.RBACDirectiveModule2,
                i7.FeatureDirectiveModule2,
                EllipsisPipeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SideNavModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SideNavComponent,
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            i5$1.NgbModule,
                            i4.PerfectScrollbarModule,
                            icon.MatIconModule,
                            i6$1.MatTooltipModule,
                            i8.RBACDirectiveModule2,
                            i7.FeatureDirectiveModule2,
                            EllipsisPipeModule
                        ],
                        exports: [
                            SideNavComponent
                        ],
                        providers: [
                            {
                                provide: i4.PERFECT_SCROLLBAR_CONFIG,
                                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                            }
                        ]
                    }]
            }] });

    var UserDrawerComponent = /** @class */ (function () {
        function UserDrawerComponent(environment, storageService, userService, applicationService, tscCommonService) {
            this.environment = environment;
            this.storageService = storageService;
            this.userService = userService;
            this.applicationService = applicationService;
            this.tscCommonService = tscCommonService;
            this.userM = new i2$3.User();
        }
        UserDrawerComponent.prototype.ngOnInit = function () {
            this.userID = this.storageService.getStorage('userID');
            this.getUserByID();
        };
        UserDrawerComponent.prototype.getUserByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.userService.getUserByID(this.userID)];
                        case 1:
                            _a.userM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        UserDrawerComponent.prototype.defaultImage = function (userM) {
            return this.userService.defaultImage(((userM === null || userM === void 0 ? void 0 : userM['firstName']) ? userM['firstName'] + ' ' : '') +
                ((userM === null || userM === void 0 ? void 0 : userM['lastName']) == null ? '' : userM['lastName']), i2$3.ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);
        };
        UserDrawerComponent.prototype.logout = function () {
            var applicationKeyID = '';
            applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.applicationService.appBtnLogout(applicationKeyID);
        };
        return UserDrawerComponent;
    }());
    UserDrawerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerComponent, deps: [{ token: 'environment' }, { token: i2__namespace.StorageService }, { token: i2__namespace$2.UserService }, { token: i3__namespace.ApplicationService }, { token: TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserDrawerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UserDrawerComponent, selector: "lib-user-drawer", ngImport: i0__namespace, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn btn-link text-secondary p-0\" ngbDropdownToggle>\n            <img class=\"rounded-circle border profileImageHeaderView headerIcon mb-1\"\n                [src]=\"userM.profileImgUrl || defaultImage(userM)\" alt=\"profile image\">\n        </button>\n        <div class=\"dropdown-menu-xl mt-3 pt-4 pb-3 userDrawerPositioning\" ngbDropdownMenu>\n            <div class=\"grid-menu grid-menu-xl grid-menu-3col\">\n                <div class=\"row g-1\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <img class=\"headerImg rounded-circle border\"\n                                [src]=\"userM.profileImgUrl || defaultImage(userM)\" alt=\"profile image\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"menu-header-content\">\n                            <h5 class=\"menu-header-title headerSection py-3 text-center\">\n                                <span class=\"fs-5\">\n                                    Hi, {{ userM.firstName + ' ' +\n                                    tscCommonService.nullToBlank(userM.lastName) }}!\n                                </span>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1 mb-3\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <span #tooltip=\"matTooltip\" matTooltipPosition=\"above\" matTooltip=\"User ID\">\n                                User ID: {{ userM.id }}\n                            </span><br />\n                            {{ userM.email }}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1 mb-3\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <mat-button-toggle-group class=\"matBtnFilter\">\n                                <mat-button-toggle class=\"matButtonOnHover\">\n                                    <a class=\"text-dark\" href=\"{{ environment.ACCOUNT_URL }}\" target=\"_blank\">\n                                        <div class=\"d-flex align-items-center\">\n                                            <span class=\"material-symbols-outlined\">\n                                                person\n                                            </span>\n                                            <span class=\"ps-2\">My Account</span>\n                                        </div>\n                                    </a>\n                                </mat-button-toggle>\n                                <mat-button-toggle class=\"btn-outline-danger\" (click)=\"logout();\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <span class=\"material-symbols-outlined\">\n                                            power_settings_new\n                                        </span>\n                                        <span class=\"ps-2\">Logout</span>\n                                    </div>\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".userDrawerPositioning{transform:translate(-320px,35px)!important;border-radius:20px}.profileImageHeaderView{height:25px;width:25px}.headerImg{height:70px}.matBtnFilter mat-button-toggle{width:140px}.matButtonOnHover .mat-button-toggle-appearance-standard{background:whitesmoke}\n"], components: [{ type: i5__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i5__namespace$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5__namespace$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i5__namespace$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-user-drawer',
                        templateUrl: './user-drawer.component.html',
                        styleUrls: ['./user-drawer.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }, { type: i2__namespace.StorageService }, { type: i2__namespace$2.UserService }, { type: i3__namespace.ApplicationService }, { type: TSCCommonService }];
        } });

    var UserDrawerModule = /** @class */ (function () {
        function UserDrawerModule() {
        }
        UserDrawerModule.forRoot = function (environment) {
            return {
                ngModule: UserDrawerModule,
                providers: [
                    { provide: 'environment', useValue: environment },
                ]
            };
        };
        return UserDrawerModule;
    }());
    UserDrawerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserDrawerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerModule, declarations: [UserDrawerComponent], imports: [i6.CommonModule,
            i5$1.NgbModule,
            i6$1.MatTooltipModule,
            i5$2.MatButtonToggleModule], exports: [UserDrawerComponent] });
    UserDrawerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerModule, imports: [[
                i6.CommonModule,
                i5$1.NgbModule,
                i6$1.MatTooltipModule,
                i5$2.MatButtonToggleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: UserDrawerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UserDrawerComponent,
                        ],
                        imports: [
                            i6.CommonModule,
                            i5$1.NgbModule,
                            i6$1.MatTooltipModule,
                            i5$2.MatButtonToggleModule
                        ],
                        exports: [
                            UserDrawerComponent,
                        ]
                    }]
            }] });

    var LayoutDrawerComponent = /** @class */ (function () {
        function LayoutDrawerComponent(router, storageService, layoutService, commonEvent) {
            this.router = router;
            this.storageService = storageService;
            this.layoutService = layoutService;
            this.commonEvent = commonEvent;
            this.COMMON_CONSTANT = COMMON_CONSTANT;
            this.layoutM = [new i3$1.Layout()];
        }
        LayoutDrawerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage(['currentOrgID']);
            this.commonEvent.layoutChange.subscribe(function (msg) {
                _this.getLayoutByOrgID();
            });
        };
        LayoutDrawerComponent.prototype.getLayoutByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, layoutID, defaultLayout;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.layoutService.getLayoutByOrgID(this.orgID)];
                        case 1:
                            _a.layoutM = (_b.sent());
                            layoutID = this.storageService.getStorage('layoutID');
                            if (layoutID) {
                                this.selectedLayout = this.layoutM.find(function (layout) { return layout.id == layoutID; });
                            }
                            else {
                                defaultLayout = this.layoutM.find(function (layout) { return layout.isDefault; });
                                if (defaultLayout) {
                                    this.selectedLayout = defaultLayout;
                                    this.storageService.setStorage('layoutID', defaultLayout.id);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        LayoutDrawerComponent.prototype.changeLayout = function (layout) {
            this.storageService.setStorage('layoutID', layout.id);
            this.selectedLayout = layout;
            window.location.reload();
        };
        LayoutDrawerComponent.prototype.viewLayout = function (layoutID) {
            this.router.navigate(["layout/" + layoutID + "/list"]);
        };
        return LayoutDrawerComponent;
    }());
    LayoutDrawerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerComponent, deps: [{ token: i1__namespace$1.Router }, { token: i2__namespace.StorageService }, { token: i3__namespace$1.LayoutService }, { token: CommonEvent }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LayoutDrawerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutDrawerComponent, selector: "lib-layout-drawer", ngImport: i0__namespace, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn dropdownAfter\" ngbDropdownToggle>\n            <span class=\"material-symbols-outlined layoutIcon\" matTooltip=\"Layout\" matTooltipPosition=\"below\">\n                grid_view\n            </span>\n        </button>\n        <div class=\"selectedItem\" ngbDropdownMenu>\n            <ng-container *ngIf=\"layoutM && layoutM.length > 0 && layoutM[0]['id']; else noLayoutFound\">\n                <a class=\"dropdown-item mt-1\" *ngFor=\"let layout of layoutM\"\n                    [ngClass]=\"{'active': layout.id == selectedLayout?.id}\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"float-start\">\n                                <span class=\"me-2\" [matTooltip]=\"layout?.['name']?.length>22? layout['name']: ''\"\n                                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\"\n                                    (click)=\"changeLayout(layout)\">{{ layout?.name | dotdotdot:22\n                                    }}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"float-end\">\n                                <span class=\"text-secondary me-1\">|</span>\n                                <span class=\"text-primary\" (click)=\"viewLayout(layout.id)\">View</span>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </ng-container>\n            <ng-template #noLayoutFound>\n                <a class=\"dropdown-item\">\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </a>\n            </ng-template>\n        </div>\n    </div>\n</div>", styles: [".layoutIcon{color:#4d4d4d;font-size:22px}.dropdownAfter:after{display:none}.selectedItem .dropdown-item.active,.selectedItem .dropdown-item:active{color:#000;background-color:#e0f3ff}.dropdown-menu .dropdown-item{display:block!important}\n"], directives: [{ type: i5__namespace$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5__namespace$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i6__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5__namespace$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "dotdotdot": EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-layout-drawer',
                        templateUrl: './layout-drawer.component.html',
                        styleUrls: ['./layout-drawer.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i2__namespace.StorageService }, { type: i3__namespace$1.LayoutService }, { type: CommonEvent }]; } });

    var LayoutDrawerModule = /** @class */ (function () {
        function LayoutDrawerModule() {
        }
        LayoutDrawerModule.forRoot = function (environment) {
            return {
                ngModule: LayoutDrawerModule,
                providers: [
                    { provide: 'environment', useValue: environment },
                ]
            };
        };
        return LayoutDrawerModule;
    }());
    LayoutDrawerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutDrawerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerModule, declarations: [LayoutDrawerComponent], imports: [i6.CommonModule,
            i5$1.NgbModule,
            i6$1.MatTooltipModule,
            EllipsisPipeModule], exports: [LayoutDrawerComponent] });
    LayoutDrawerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerModule, imports: [[
                i6.CommonModule,
                i5$1.NgbModule,
                i6$1.MatTooltipModule,
                EllipsisPipeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutDrawerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutDrawerComponent,
                        ],
                        imports: [
                            i6.CommonModule,
                            i5$1.NgbModule,
                            i6$1.MatTooltipModule,
                            EllipsisPipeModule
                        ],
                        exports: [
                            LayoutDrawerComponent,
                        ]
                    }]
            }] });

    var ApplicationDrawerComponent = /** @class */ (function () {
        function ApplicationDrawerComponent(storageService, applicationService) {
            this.storageService = storageService;
            this.applicationService = applicationService;
            this.applicationM = [];
            this.applicationFilter = [];
            this.currentOrgType = '';
            this.currentOrgID = '';
            this.currentRootOrgID = '';
        }
        ApplicationDrawerComponent.prototype.ngOnInit = function () {
            this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
            this.currentOrgType = this.storageService.getStorage('currentOrgType');
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            this.currentRootOrgID = this.storageService.getStorage('rootOrgID');
            if (this.applicationKeyID == i3.ApplicationKeyID.ACCOUNT_KEY_ID) {
                this.getAllApplication();
            }
            else {
                this.getApplicationByUserAccess();
            }
        };
        ApplicationDrawerComponent.prototype.getAllApplication = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.applicationService.getAllApplication()];
                        case 1:
                            _a.applicationM = (_b.sent());
                            this.applicationFilter = this.applicationM.filter(function (applicationFilter) { return applicationFilter['keyID'] != i3.ApplicationKeyID.NETZERO_ADMIN_KEY_ID &&
                                applicationFilter['keyID'] != i3.ApplicationKeyID.EMPLOYEE_KEY_ID; });
                            return [2 /*return*/];
                    }
                });
            });
        };
        ApplicationDrawerComponent.prototype.getApplicationByUserAccess = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.applicationService.getApplicationByUserAccess()];
                        case 1:
                            _a.applicationM = (_b.sent());
                            this.applicationFilter = this.applicationM.filter(function (applicationFilter) { return applicationFilter['keyID'] != _this.applicationKeyID &&
                                applicationFilter['keyID'] != i3.ApplicationKeyID.EMPLOYEE_KEY_ID; });
                            return [2 /*return*/];
                    }
                });
            });
        };
        ApplicationDrawerComponent.prototype.getApplicationLogo = function (keyID) {
            var logo;
            logo = this.applicationService.getApplicationLogoWithoutName(keyID);
            return logo;
        };
        ApplicationDrawerComponent.prototype.appUrlBuilder = function (applicationKeyID, appURL) {
            var url = appURL;
            var orgLevelApp = [i3.ApplicationKeyID.ADMIN_KEY_ID, i3.ApplicationKeyID.OFFSET_KEY_ID];
            var siteLevelApp = [i3.ApplicationKeyID.ENERGY_KEY_ID, i3.ApplicationKeyID.WATER_KEY_ID, i3.ApplicationKeyID.ENVIRO_KEY_ID];
            var orgSiteLevelApp = [i3.ApplicationKeyID.NETZERO_KEY_ID, i3.ApplicationKeyID.CONNECT_KEY_ID];
            if (orgLevelApp.includes(applicationKeyID) && this.currentOrgType == i3$2.OrgType.ORGANIZATION) {
                url = appURL + "&orgID=" + this.currentRootOrgID;
            }
            else if (siteLevelApp.includes(applicationKeyID) && this.currentOrgType == i3$2.OrgType.SITE) {
                url = appURL + "&orgID=" + this.currentOrgID;
            }
            else if (orgSiteLevelApp.includes(applicationKeyID) && (this.currentOrgType == i3$2.OrgType.ORGANIZATION || this.currentOrgType == i3$2.OrgType.SITE)) {
                url = appURL + "&orgID=" + this.currentOrgID;
            }
            else {
                url = appURL;
            }
            return url;
        };
        return ApplicationDrawerComponent;
    }());
    ApplicationDrawerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerComponent, deps: [{ token: i2__namespace.StorageService }, { token: i3__namespace.ApplicationService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ApplicationDrawerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ApplicationDrawerComponent, selector: "lib-application-drawer", ngImport: i0__namespace, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn btn-link text-secondary p-0\" ngbDropdownToggle>\n            <span class=\"material-symbols-outlined fw-bolder\">\n                apps\n            </span>\n        </button>\n        <div class=\"dropdown-menu-xl mt-3 appDrawerPositioning\" ngbDropdownMenu>\n            <div class=\"grid-menu grid-menu-xl grid-menu-3col\">\n                <div class=\"g-0 row\">\n\n                    <div class=\"col-sm-4 col-xl-4 border-0\" *ngFor=\"let applicationsM of applicationFilter\">\n                        <a class=\"btn\" [href]=\"appUrlBuilder(applicationsM.keyID, applicationsM.url)\" target=\"_blank\">\n\n                            <img class=\"appDrawerIcon\" [src]=\"getApplicationLogo(applicationsM.keyID)\" alt=\"{{ applicationsM.name }}\">\n                            <br />\n                            <span class=\"appDrawerName\">{{ applicationsM.name }}</span>\n                        </a>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".appDrawerPositioning{transform:translate(-355px,35px)!important;border-radius:20px}.appDrawerIcon{width:auto;height:40px;margin-bottom:10px}.appDrawerName{font-size:14px}\n"], directives: [{ type: i5__namespace$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5__namespace$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i5__namespace$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-application-drawer',
                        templateUrl: './application-drawer.component.html',
                        styleUrls: ['./application-drawer.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }, { type: i3__namespace.ApplicationService }]; } });

    var ApplicationDrawerModule = /** @class */ (function () {
        function ApplicationDrawerModule() {
        }
        ApplicationDrawerModule.forRoot = function (environment) {
            return {
                ngModule: ApplicationDrawerModule,
                providers: [
                    { provide: 'environment', useValue: environment },
                ]
            };
        };
        return ApplicationDrawerModule;
    }());
    ApplicationDrawerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ApplicationDrawerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerModule, declarations: [ApplicationDrawerComponent], imports: [i6.CommonModule,
            i4$1.MatCardModule,
            i6$1.MatTooltipModule,
            i5$1.NgbModule], exports: [ApplicationDrawerComponent] });
    ApplicationDrawerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerModule, imports: [[
                i6.CommonModule,
                i4$1.MatCardModule,
                i6$1.MatTooltipModule,
                i5$1.NgbModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationDrawerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ApplicationDrawerComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            i4$1.MatCardModule,
                            i6$1.MatTooltipModule,
                            i5$1.NgbModule
                        ],
                        exports: [
                            ApplicationDrawerComponent
                        ]
                    }]
            }] });

    var SearchBarTwoComponent = /** @class */ (function () {
        function SearchBarTwoComponent() {
            this.faTimes = freeSolidSvgIcons.faTimes;
            this.faSearch = freeSolidSvgIcons.faSearch;
            this.searchFC = new i2$2.FormControl('');
            this.type = 'text';
            this.searchBy = '';
            this.clear = false;
            this.emitSearch = new i0.EventEmitter();
            this.active = false;
        }
        SearchBarTwoComponent.prototype.ngOnInit = function () { };
        SearchBarTwoComponent.prototype.ngOnChanges = function () {
            if (!this.clear) {
                this.searchFC.reset('', { onlySelf: true, emitEvent: false });
            }
        };
        SearchBarTwoComponent.prototype.searchFn = function () {
            if (this.searchFC.value.length > 0) {
                this.active = true;
                this.emitSearch.emit(this.searchFC.value);
                return;
            }
            if (!this.active) {
                return;
            }
            if (this.searchFC.value.length == 0 && this.active) {
                this.active = false;
                this.emitSearch.emit('');
                return;
            }
        };
        SearchBarTwoComponent.prototype.searchReset = function () {
            this.searchFC.reset('');
            this.searchFn();
        };
        SearchBarTwoComponent.prototype.searchClear = function () {
            this.active = false;
            this.searchFC.reset('');
        };
        return SearchBarTwoComponent;
    }());
    SearchBarTwoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SearchBarTwoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: { type: "type", searchBy: "searchBy", clear: "clear" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\" (keyup)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1__namespace$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2__namespace$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-search-bar-two',
                        templateUrl: './search-bar-two.component.html',
                        styleUrls: ['./search-bar-two.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                    type: i0.Input
                }], searchBy: [{
                    type: i0.Input
                }], clear: [{
                    type: i0.Input
                }], emitSearch: [{
                    type: i0.Output
                }] } });

    var OrganizationDrawerComponent = /** @class */ (function () {
        function OrganizationDrawerComponent(activatedRoute, storageService, organizationService, facilityService) {
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.organizationService = organizationService;
            this.facilityService = facilityService;
            this.toggleOrgDrawerGlobal = new i0.EventEmitter(true);
            this.COMMON_CONSTANT = COMMON_CONSTANT;
            this.showOrgAndFacility = false;
            this.OrgStatus = i3$2.OrgStatus;
            this.OrgType = i3$2.OrgType;
            this.OrgSiteAccessType = i3$2.OrgSiteAccessType;
            this.organizationM = new i3$2.Organization();
            this.facilityM = new i4$3.Facility();
            this.orgSiteAccessM = new i3$2.OrgSiteAccess();
            this.filteredOrgAccessM = [];
        }
        OrganizationDrawerComponent.prototype.ngOnInit = function () {
            this.toggleOrgDrawerGlobal.emit(false);
            this.userID = this.storageService.getStorage('userID');
            this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            if (this.rootOrgID == this.currentOrgID) {
                this.getFacilityByID();
            }
            else {
                this.getOrgByID();
                this.getFacilityByID();
                this.showOrgAndFacility = true;
            }
            this.getOrgSiteWithUserAccess();
        };
        OrganizationDrawerComponent.prototype.getOrgByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.organizationService.getOrganizationByID(this.rootOrgID)];
                        case 1:
                            _c.organizationM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationDrawerComponent.prototype.getFacilityByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID)];
                        case 1:
                            _c.facilityM = (_d.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationDrawerComponent.prototype.getOrgSiteWithUserAccess = function () {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _c = this;
                            return [4 /*yield*/, this.organizationService.getOrgSiteWithUserAccess(this.userID)];
                        case 1:
                            _c.orgSiteAccessM = (_d.sent());
                            this.filteredOrgAccessM = __spreadArray([], __read((_a = this.orgSiteAccessM) === null || _a === void 0 ? void 0 : _a.records));
                            return [2 /*return*/];
                    }
                });
            });
        };
        OrganizationDrawerComponent.prototype.toggleOrgDrawerFun = function () {
            this.toggleOrgDrawer = !this.toggleOrgDrawer;
            this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
        };
        OrganizationDrawerComponent.prototype.searchFn = function (value) {
            var _a, _b;
            var searchTerm = value.trim().toLowerCase();
            if (searchTerm.length > 0) {
                this.filteredOrgAccessM = (_a = this.orgSiteAccessM) === null || _a === void 0 ? void 0 : _a.records.filter(function (org) { return org.name.trim().toLowerCase().includes(searchTerm); });
            }
            else {
                this.searchBar.searchClear();
                this.filteredOrgAccessM = __spreadArray([], __read((_b = this.orgSiteAccessM) === null || _b === void 0 ? void 0 : _b.records));
            }
        };
        OrganizationDrawerComponent.prototype.orgSwitch = function (orgID) {
            var currentRoute = this.activatedRoute;
            var orgSwitchRedirect = null;
            while (currentRoute.firstChild) {
                currentRoute = currentRoute.firstChild;
                if (currentRoute.snapshot.data && currentRoute.snapshot.data.orgSwitchRedirect) {
                    orgSwitchRedirect = currentRoute.snapshot.data.orgSwitchRedirect;
                }
            }
            this.organizationService.orgSwitch(orgID, orgSwitchRedirect);
        };
        return OrganizationDrawerComponent;
    }());
    OrganizationDrawerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: i3__namespace$2.OrganizationService }, { token: i4__namespace$2.FacilityService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OrganizationDrawerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationDrawerComponent, selector: "lib-organization-drawer", inputs: { toggleOrgDrawer: "toggleOrgDrawer", drawerAccessType: "drawerAccessType" }, outputs: { toggleOrgDrawerGlobal: "toggleOrgDrawerGlobal" }, viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"drawer-wrapper\">\n    <div class=\"drawer-nav-btn\">\n        <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : toggleOrgDrawer}\"\n            (click)=\"toggleOrgDrawerFun()\">\n            <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n        </button>\n    </div>\n    <div class=\"drawer-content-wrapper\">\n        <section class=\"scrollbar-container\">\n            <perfect-scrollbar [autoPropagation]=\"true\">\n                <div class=\"container mt-5\">\n                    <div class=\"row mt-3\" *ngIf=\"showOrgAndFacility\">\n                        <ng-container *ngTemplateOutlet=\"orgFacilityTemplate; \n                            context: {\n                                matCardClass: 'org-border-left',\n                                name: organizationM.name,\n                                idLabel: 'Org ID',\n                                id: organizationM.id,\n                                state: organizationM.stateName,\n                                country: organizationM.countryName,\n                                status: organizationM.status,\n                                image: organizationM.logoUrl,\n                                orgFacilityLabel: 'Organization',\n                                orgFacilityLabelClass: 'bg-primary',\n                                type: OrgType.ORGANIZATION\n                            }\">\n                        </ng-container>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <ng-container *ngTemplateOutlet=\"orgFacilityTemplate; \n                            context: {\n                                matCardClass: 'current-org-border-left',\n                                name: facilityM.name,\n                                idLabel: rootOrgID == currentOrgID ? 'Org ID' : 'Facility ID',\n                                id: facilityM.id,\n                                state: facilityM.stateName,\n                                country: facilityM.countryName,\n                                status: facilityM.status,\n                                image: facilityM.logoUrl,\n                                orgFacilityLabel: rootOrgID == currentOrgID ? 'Current organization' : 'Current facility',\n                                orgFacilityLabelClass: 'bg-success',\n                                type: rootOrgID == currentOrgID ? OrgType.ORGANIZATION : OrgType.SITE\n                            }\">\n                        </ng-container>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-sm-6\">\n                            <span class=\"card-title sectionTitle\">\n                                <ng-container *ngIf=\"drawerAccessType == OrgSiteAccessType.SITE; else showOrg;\">\n                                    All Facilities\n                                </ng-container>\n                                <ng-template #showOrg>\n                                    All Organizations\n                                </ng-template>\n                            </span>\n                            <span class=\"badge rounded-pill bg-light text-dark ms-3\">{{ orgSiteAccessM ?\n                                orgSiteAccessM.totalCount : COMMON_CONSTANT.HYPHEN }}</span>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                (emitSearch)=\"searchFn($event)\">\n                            </lib-search-bar-two>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-sm-12 mb-3\" *ngFor=\"let org of filteredOrgAccessM; let i=index\"\n                            (click)=\"currentOrgID != org.id && orgSwitch(org.id)\"\n                            [ngClass]=\"{'cursorPointer': currentOrgID != org.id}\">\n                            <mat-card class=\"card cardOverwrite\"\n                                [ngClass]=\"{'current-org': currentOrgID == org.id, 'border': currentOrgID != org.id}\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-8 d-flex flex-column justify-content-center\">\n                                        <span class=\"fw-bold\">{{ org.name ? org.name :\n                                            COMMON_CONSTANT.HYPHEN }}</span>\n                                        <div class=\"row text-secondary\">\n                                            <div class=\"col-sm-4\" *ngIf=\"org.type == OrgType.ORGANIZATION\">Org ID:\n                                            </div>\n                                            <div class=\"col-sm-4\" *ngIf=\"org.type == OrgType.SITE\">Facility ID:</div>\n                                            <div class=\"col-sm-8 fw-bold\">{{ org.id }}</div>\n                                        </div>\n                                        <div *ngIf=\"org.type == OrgType.SITE\">\n                                            <div class=\"row text-secondary\">\n                                                <div class=\"col-sm-4\">Org Name:</div>\n                                                <div class=\"col-sm-8 fw-bold\">{{ org.orgName }}</div>\n                                            </div>\n                                            <div class=\"row text-secondary\">\n                                                <div class=\"col-sm-4\">Org ID:</div>\n                                                <div class=\"col-sm-8 fw-bold\">{{ org.orgID }}</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4 d-flex flex-column align-items-center justify-content-center\">\n                                        <ng-container *ngIf=\"org.logoUrl && org.logoUrl != null; else showDefaultIcon;\">\n                                            <img class=\"listOrgView\" [src]=\"org.logoUrl\" alt=\"org-logo\" />\n                                        </ng-container>\n                                        <ng-template #showDefaultIcon>\n                                            <ng-container *ngIf=\"org.type == OrgType.ORGANIZATION\">\n                                                <span class=\"material-symbols-outlined fs-1\">\n                                                    corporate_fare\n                                                </span>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"org.type == OrgType.SITE\">\n                                                <span class=\"material-symbols-outlined fs-1\">\n                                                    factory\n                                                </span>\n                                            </ng-container>\n                                        </ng-template>\n                                        <span [ngSwitch]=\"org.type\">\n                                            <span class=\"badge rounded-pill mt-2\"\n                                                [ngClass]=\"{'bg-success': currentOrgID == org.id, 'bg-secondary': currentOrgID != org.id}\"\n                                                *ngSwitchCase=\"'ORG'\">Organization</span>\n                                            <span class=\"badge rounded-pill mt-2\"\n                                                [ngClass]=\"{'bg-success': currentOrgID == org.id, 'bg-secondary': currentOrgID != org.id}\"\n                                                *ngSwitchCase=\"'SITE'\">Facility</span>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"org.subscriptionStatus == OrgStatus.INACTIVE_STATUS\">\n                                    <div class=\"col-sm-12\">\n                                        <span class=\"text-danger me-3 fw-bold float-end expiredFontSize\">\n                                            Subscription expired\n                                        </span>\n                                    </div>\n                                </div>\n                            </mat-card>\n                        </div>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </section>\n    </div>\n</div>\n\n<div class=\"drawer-overlay\" (click)=\"toggleOrgDrawerFun()\"></div>\n\n<ng-template #orgFacilityTemplate let-name=\"name\" let-state=\"state\" let-country=\"country\" let-status=\"status\"\n    let-type=\"type\" let-idLabel=\"idLabel\" let-id=\"id\" let-matCardClass=\"matCardClass\" let-image=\"image\"\n    let-orgFacilityLabel=\"orgFacilityLabel\" let-orgFacilityLabelClass=\"orgFacilityLabelClass\">\n    <div class=\"col-sm-12\">\n        <mat-card class=\"cardOverwrite cardBackgroundColor\" [class]=\"matCardClass\">\n            <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    <div class=\"d-flex flex-column\">\n                        <span class=\"fw-bold\">\n                            {{ name ? name : COMMON_CONSTANT.HYPHEN }}\n                        </span>\n                        <div class=\"row text-secondary\">\n                            <div class=\"col-sm-4\">\n                                {{ idLabel }}\n                            </div>\n                            <div class=\"col-sm-8 fw-bold\">\n                                {{ id }}\n                            </div>\n                        </div>\n                        <div class=\"row text-secondary\">\n                            <div class=\"col-sm-4\">Address:</div>\n                            <div class=\"col-sm-8 fw-bold\">{{ state }}, {{ country }}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 text-secondary\">Status:</div>\n                            <div class=\"col-sm-8 fw-bold\"\n                                [ngClass]=\"{'text-success': status == OrgStatus.ACTIVE_STATUS, 'text-danger': status == OrgStatus.INACTIVE_STATUS}\">\n                                {{ status | titlecase }}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4 d-flex flex-column align-items-center justify-content-center\">\n                    <ng-container *ngIf=\"image && image != null; else showIcon;\">\n                        <img class=\"orgViewLogo\" [src]=\"image\" alt=\"org-logo\" />\n                    </ng-container>\n                    <ng-template #showIcon>\n                        <ng-container *ngIf=\"type == OrgType.ORGANIZATION\">\n                            <span class=\"material-symbols-outlined fs-1\">\n                                corporate_fare\n                            </span>\n                        </ng-container>\n                        <ng-container *ngIf=\"type == OrgType.SITE\">\n                            <span class=\"material-symbols-outlined fs-1\">\n                                factory\n                            </span>\n                        </ng-container>\n                    </ng-template>\n                    <span class=\"badge rounded-pill mt-2\" [class]=\"orgFacilityLabelClass\">{{ orgFacilityLabel }}</span>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</ng-template>", styles: [".mat-card{padding:12px}.current-org-border-left{border-left:5px solid #3ac47d}.org-border-left{border-left:5px solid #007bff}.cardBackgroundColor{background:whitesmoke}.badge{text-transform:none}.orgViewLogo{height:45px}.listOrgView{height:30px}.current-org{border-left:5px solid #3ac47d;background:whitesmoke}.expiredFontSize{font-size:12px}\n"], components: [{ type: i4__namespace.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i4__namespace$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i6__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], pipes: { "titlecase": i6__namespace.TitleCasePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-organization-drawer',
                        templateUrl: './organization-drawer.component.html',
                        styleUrls: ['./organization-drawer.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: i3__namespace$2.OrganizationService }, { type: i4__namespace$2.FacilityService }]; }, propDecorators: { toggleOrgDrawer: [{
                    type: i0.Input
                }], drawerAccessType: [{
                    type: i0.Input
                }], toggleOrgDrawerGlobal: [{
                    type: i0.Output
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }] } });

    var SearchBarTwoModule = /** @class */ (function () {
        function SearchBarTwoModule() {
        }
        return SearchBarTwoModule;
    }());
    SearchBarTwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SearchBarTwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoModule, declarations: [SearchBarTwoComponent], imports: [i6.CommonModule,
            i1$3.FontAwesomeModule,
            i2$2.FormsModule,
            i2$2.ReactiveFormsModule,
            icon.MatIconModule,
            i4$4.MatInputModule,
            i4$2.MatRippleModule,
            i3$3.MatFormFieldModule], exports: [SearchBarTwoComponent] });
    SearchBarTwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoModule, imports: [[
                i6.CommonModule,
                i1$3.FontAwesomeModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                icon.MatIconModule,
                i4$4.MatInputModule,
                i4$2.MatRippleModule,
                i3$3.MatFormFieldModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarTwoModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SearchBarTwoComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            i1$3.FontAwesomeModule,
                            i2$2.FormsModule,
                            i2$2.ReactiveFormsModule,
                            icon.MatIconModule,
                            i4$4.MatInputModule,
                            i4$2.MatRippleModule,
                            i3$3.MatFormFieldModule,
                        ],
                        exports: [SearchBarTwoComponent]
                    }]
            }] });

    var OrganizationDrawerModule = /** @class */ (function () {
        function OrganizationDrawerModule() {
        }
        OrganizationDrawerModule.forRoot = function (environment) {
            return {
                ngModule: OrganizationDrawerModule,
                providers: [
                    { provide: 'environment', useValue: environment },
                ]
            };
        };
        return OrganizationDrawerModule;
    }());
    OrganizationDrawerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OrganizationDrawerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerModule, declarations: [OrganizationDrawerComponent], imports: [i6.CommonModule,
            i4.PerfectScrollbarModule,
            i4$1.MatCardModule,
            i6$1.MatTooltipModule,
            i1$3.FontAwesomeModule,
            i2$2.FormsModule,
            i2$2.ReactiveFormsModule,
            SearchBarTwoModule], exports: [OrganizationDrawerComponent] });
    OrganizationDrawerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerModule, imports: [[
                i6.CommonModule,
                i4.PerfectScrollbarModule,
                i4$1.MatCardModule,
                i6$1.MatTooltipModule,
                i1$3.FontAwesomeModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                SearchBarTwoModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDrawerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            OrganizationDrawerComponent,
                        ],
                        imports: [
                            i6.CommonModule,
                            i4.PerfectScrollbarModule,
                            i4$1.MatCardModule,
                            i6$1.MatTooltipModule,
                            i1$3.FontAwesomeModule,
                            i2$2.FormsModule,
                            i2$2.ReactiveFormsModule,
                            SearchBarTwoModule
                        ],
                        exports: [
                            OrganizationDrawerComponent,
                        ]
                    }]
            }] });

    var OrgDrawerHeaderComponent = /** @class */ (function () {
        function OrgDrawerHeaderComponent(storageService, organizationService, facilityService) {
            this.storageService = storageService;
            this.organizationService = organizationService;
            this.facilityService = facilityService;
            this.toggleOrgDrawerGlobal = new i0.EventEmitter(true);
            this.OrgType = i3$2.OrgType;
            this.organizationM = new i3$2.Organization();
            this.facilityM = new i4$3.Facility();
        }
        OrgDrawerHeaderComponent.prototype.ngOnInit = function () {
            this.toggleOrgDrawerGlobal.emit(false);
            this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
            this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
            this.currentOrgType = this.storageService.getStorage(['currentOrgType']);
            this.getOrgDetail();
        };
        OrgDrawerHeaderComponent.prototype.getOrgDetail = function () {
            switch (this.currentOrgType) {
                case i3$2.OrgType.ORGANIZATION:
                case i3$2.OrgType.NETZERO_ADMIN:
                    this.getOrgByID();
                    break;
                case i3$2.OrgType.SITE:
                    this.getFacilityByID();
                    break;
                default:
                    console.error('Exception in getOrgDetail');
            }
        };
        OrgDrawerHeaderComponent.prototype.getOrgByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.organizationService.getOrganizationByID(this.currentOrgID)];
                        case 1:
                            _a.organizationM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        OrgDrawerHeaderComponent.prototype.getFacilityByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID)];
                        case 1:
                            _a.facilityM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        OrgDrawerHeaderComponent.prototype.toggleOrgDrawFn = function () {
            this.toggleOrgDrawer = !this.toggleOrgDrawer;
            this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
        };
        return OrgDrawerHeaderComponent;
    }());
    OrgDrawerHeaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderComponent, deps: [{ token: i2__namespace.StorageService }, { token: i3__namespace$2.OrganizationService }, { token: i4__namespace$2.FacilityService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OrgDrawerHeaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrgDrawerHeaderComponent, selector: "lib-org-drawer-header", inputs: { toggleOrgDrawer: "toggleOrgDrawer" }, outputs: { toggleOrgDrawerGlobal: "toggleOrgDrawerGlobal" }, ngImport: i0__namespace, template: "<div class=\"headerText\" placement=\"bottom-right\">\n    <button type=\"button\" class=\"btn\" (click)=\"toggleOrgDrawFn()\">\n        <div class=\"d-flex align-items-center\"\n            *ngIf=\"currentOrgType == OrgType.ORGANIZATION || currentOrgType == OrgType.NETZERO_ADMIN\">\n            <ng-container *ngIf=\"organizationM.logoUrl && organizationM.logoUrl != null; else showDefaultOrgIcon\">\n                <img class=\"headerImg pe-2\" [src]=\"organizationM.logoUrl\" alt=\"logo\" />\n            </ng-container>\n            <ng-template #showDefaultOrgIcon>\n                <span class=\"material-symbols-outlined fs-1 pe-2\">\n                    corporate_fare\n                </span>\n            </ng-template>\n            <span class=\"headerSection\">{{ organizationM.name }}</span>\n            &nbsp;\n            <i class=\"fa fa-caret-down\"></i>\n        </div>\n\n        <div class=\"d-flex align-items-center\" *ngIf=\"currentOrgType == OrgType.SITE\">\n            <ng-container *ngIf=\"facilityM.logoUrl && facilityM.logoUrl != null; else showDefaultFacilityIcon\">\n                <img class=\"headerImg pe-2\" [src]=\"facilityM.logoUrl\" alt=\"logo\" />\n            </ng-container>\n            <ng-template #showDefaultFacilityIcon>\n                <span class=\"material-symbols-outlined fs-1 pe-2\">\n                    factory\n                </span>\n            </ng-template>\n            <span class=\"headerSection\">{{ facilityM.name }}</span>\n            &nbsp;\n            <i class=\"fa fa-caret-down\"></i>\n        </div>\n    </button>\n</div>", styles: [".drawer-overlay{position:fixed;height:0%;width:0%;z-index:999;background:rgba(0,0,0,.3);display:block;content:\"\";left:0;top:0;visibility:hidden;opacity:0;transition:opacity .2s}.drawer-wrapper{width:500px;height:100%;position:fixed;right:-500px;top:0;transition:all .2s;z-index:9999}.org-drawer-open .drawer-wrapper{right:0;box-shadow:0 .76875rem 2.4875rem #343a404d,0 1.3375rem 1.70625rem #343a404d,0 .55rem .53125rem #0000000d,0 .225rem .4375rem #343a404d}.org-drawer-open .drawer-wrapper:before{opacity:1}.org-drawer-open .drawer-overlay{visibility:visible;opacity:1;height:100%;width:100%}.headerText{color:#4d4d4d}.headerSection{font-size:15px}.headerImg{height:40px}\n"], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-org-drawer-header',
                        templateUrl: './org-drawer-header.component.html',
                        styleUrls: ['./org-drawer-header.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }, { type: i3__namespace$2.OrganizationService }, { type: i4__namespace$2.FacilityService }]; }, propDecorators: { toggleOrgDrawer: [{
                    type: i0.Input
                }], toggleOrgDrawerGlobal: [{
                    type: i0.Output
                }] } });

    var OrgDrawerHeaderModule = /** @class */ (function () {
        function OrgDrawerHeaderModule() {
        }
        return OrgDrawerHeaderModule;
    }());
    OrgDrawerHeaderModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OrgDrawerHeaderModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderModule, declarations: [OrgDrawerHeaderComponent], imports: [i5$1.NgbModule,
            platformBrowser.BrowserModule,
            i1$3.FontAwesomeModule], exports: [OrgDrawerHeaderComponent] });
    OrgDrawerHeaderModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderModule, imports: [[
                i5$1.NgbModule,
                platformBrowser.BrowserModule,
                i1$3.FontAwesomeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrgDrawerHeaderModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            OrgDrawerHeaderComponent,
                        ],
                        imports: [
                            i5$1.NgbModule,
                            platformBrowser.BrowserModule,
                            i1$3.FontAwesomeModule
                        ],
                        exports: [
                            OrgDrawerHeaderComponent
                        ]
                    }]
            }] });

    // import { LoaderService } from '@loginCommon/service/loader.service';
    var LayoutOneComponent = /** @class */ (function () {
        function LayoutOneComponent() {
        }
        LayoutOneComponent.prototype.ngOnInit = function () {
        };
        return LayoutOneComponent;
    }());
    LayoutOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    LayoutOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutOneComponent, selector: "app-layout-one", ngImport: i0__namespace, template: "<app-loader-one></app-loader-one>\n<app-header-one></app-header-one>\n\n<div class=\"layoutOneWrapper\">\n    <div class=\"layoutOneContainer\">\n        <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n            <router-outlet #o=\"outlet\"></router-outlet>\n        </div>\n    </div>\n    <app-footer-one></app-footer-one>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", styles: [".layoutOneWrapper{background-color:#f1f3f6;position:relative;min-height:calc(100vh - 60px)}.layoutOneContainer{padding-top:40px;padding-bottom:calc(60px + 40px)}\n"], components: [{ type: LoaderOneComponent, selector: "app-loader-one" }, { type: HeaderOneComponent, selector: "app-header-one" }, { type: FooterOneComponent, selector: "app-footer-one" }, { type: i4__namespace$4.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i1__namespace$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
            animations.trigger('architectUIAnimation', [
                animations.transition('* <=> *', [
                    animations.query(':enter, :leave', [
                        animations.style({
                            opacity: 0,
                            display: 'flex',
                            flex: '1',
                            flexDirection: 'column'
                        }),
                    ]),
                    animations.query(':enter', [
                        animations.animate('100ms ease', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                    ], { optional: true }),
                    animations.query(':leave', [
                        animations.animate('100ms ease', animations.style({ opacity: 0, transform: 'translateY(-10px)' })),
                    ], { optional: true })
                ]),
            ])
        ] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-layout-one',
                        templateUrl: './layout-one.component.html',
                        styleUrls: ['./layout-one.component.scss'],
                        animations: [
                            animations.trigger('architectUIAnimation', [
                                animations.transition('* <=> *', [
                                    animations.query(':enter, :leave', [
                                        animations.style({
                                            opacity: 0,
                                            display: 'flex',
                                            flex: '1',
                                            flexDirection: 'column'
                                        }),
                                    ]),
                                    animations.query(':enter', [
                                        animations.animate('100ms ease', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                                    ], { optional: true }),
                                    animations.query(':leave', [
                                        animations.animate('100ms ease', animations.style({ opacity: 0, transform: 'translateY(-10px)' })),
                                    ], { optional: true })
                                ]),
                            ])
                        ]
                    }]
            }], ctorParameters: function () { return []; } });

    var LoaderOneModule = /** @class */ (function () {
        function LoaderOneModule() {
        }
        return LoaderOneModule;
    }());
    LoaderOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LoaderOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneModule, declarations: [LoaderOneComponent], imports: [i6.CommonModule,
            i1.MatProgressSpinnerModule], exports: [LoaderOneComponent] });
    LoaderOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneModule, imports: [[
                i6.CommonModule,
                i1.MatProgressSpinnerModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LoaderOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LoaderOneComponent,
                        ],
                        imports: [
                            i6.CommonModule,
                            i1.MatProgressSpinnerModule
                        ],
                        exports: [
                            LoaderOneComponent
                        ]
                    }]
            }] });

    var LayoutOneModule = /** @class */ (function () {
        function LayoutOneModule() {
        }
        return LayoutOneModule;
    }());
    LayoutOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneModule, declarations: [LayoutOneComponent], imports: [i1$2.RouterModule,
            router.LoadingBarRouterModule,
            HeaderOneModule,
            FooterOneModule,
            LoaderOneModule], exports: [LayoutOneComponent] });
    LayoutOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneModule, imports: [[
                i1$2.RouterModule,
                router.LoadingBarRouterModule,
                HeaderOneModule,
                FooterOneModule,
                LoaderOneModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutOneComponent,
                        ],
                        imports: [
                            i1$2.RouterModule,
                            router.LoadingBarRouterModule,
                            HeaderOneModule,
                            FooterOneModule,
                            LoaderOneModule
                        ],
                        exports: [
                            LayoutOneComponent
                        ]
                    }]
            }] });

    var LayoutTwoComponent = /** @class */ (function () {
        function LayoutTwoComponent() {
        }
        LayoutTwoComponent.prototype.ngOnInit = function () {
        };
        return LayoutTwoComponent;
    }());
    LayoutTwoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    LayoutTwoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutTwoComponent, selector: "app-layout-two", ngImport: i0__namespace, template: "<app-loader-one></app-loader-one>\n\n<div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", components: [{ type: LoaderOneComponent, selector: "app-loader-one" }, { type: i4__namespace$4.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i1__namespace$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
            animations.trigger('architectUIAnimation', [
                animations.transition('* <=> *', [
                    animations.query(':enter, :leave', [
                        animations.style({
                            opacity: 0,
                            display: 'flex',
                            flex: '1',
                            flexDirection: 'column'
                        }),
                    ]),
                    animations.query(':enter', [
                        animations.animate('100ms ease', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                    ], { optional: true }),
                    animations.query(':leave', [
                        animations.animate('100ms ease', animations.style({ opacity: 0, transform: 'translateY(-10px)' })),
                    ], { optional: true })
                ]),
            ])
        ] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-layout-two',
                        templateUrl: './layout-two.component.html',
                        styleUrls: [],
                        animations: [
                            animations.trigger('architectUIAnimation', [
                                animations.transition('* <=> *', [
                                    animations.query(':enter, :leave', [
                                        animations.style({
                                            opacity: 0,
                                            display: 'flex',
                                            flex: '1',
                                            flexDirection: 'column'
                                        }),
                                    ]),
                                    animations.query(':enter', [
                                        animations.animate('100ms ease', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                                    ], { optional: true }),
                                    animations.query(':leave', [
                                        animations.animate('100ms ease', animations.style({ opacity: 0, transform: 'translateY(-10px)' })),
                                    ], { optional: true })
                                ]),
                            ])
                        ]
                    }]
            }], ctorParameters: function () { return []; } });

    var LayoutTwoModule = /** @class */ (function () {
        function LayoutTwoModule() {
        }
        return LayoutTwoModule;
    }());
    LayoutTwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    LayoutTwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoModule, declarations: [LayoutTwoComponent], imports: [i1$2.RouterModule,
            router.LoadingBarRouterModule,
            LoaderOneModule], exports: [LayoutTwoComponent] });
    LayoutTwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoModule, imports: [[
                i1$2.RouterModule,
                router.LoadingBarRouterModule,
                LoaderOneModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LayoutTwoModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LayoutTwoComponent,
                        ],
                        imports: [
                            i1$2.RouterModule,
                            router.LoadingBarRouterModule,
                            LoaderOneModule
                        ],
                        exports: [
                            LayoutTwoComponent
                        ]
                    }]
            }] });

    var StaticPageOneComponent = /** @class */ (function () {
        function StaticPageOneComponent(activatedRoute) {
            this.activatedRoute = activatedRoute;
            this.data = new StaticPageOne();
        }
        StaticPageOneComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.data = data.data;
            });
        };
        return StaticPageOneComponent;
    }());
    StaticPageOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StaticPageOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageOneComponent, selector: "lib-static-page-one", ngImport: i0__namespace, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-static-page-one',
                        templateUrl: './static-page-one.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }]; } });

    var StaticPageOneModule = /** @class */ (function () {
        function StaticPageOneModule() {
        }
        return StaticPageOneModule;
    }());
    StaticPageOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StaticPageOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneModule, declarations: [StaticPageOneComponent], imports: [i6.CommonModule], exports: [StaticPageOneComponent] });
    StaticPageOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneModule, imports: [[
                i6.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StaticPageOneComponent,
                        ],
                        imports: [
                            i6.CommonModule
                        ],
                        exports: [
                            StaticPageOneComponent
                        ]
                    }]
            }] });

    var StaticPageTwoComponent = /** @class */ (function () {
        function StaticPageTwoComponent(activatedRoute) {
            this.activatedRoute = activatedRoute;
            this.data = new StaticPageTwo();
        }
        StaticPageTwoComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.data = data.data;
            });
        };
        return StaticPageTwoComponent;
    }());
    StaticPageTwoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StaticPageTwoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageTwoComponent, selector: "app-static-page-two", ngImport: i0__namespace, template: "<div class=\"d-flex align-items-center justify-content-center position-fixed top-0 start-0 end-0 bottom-0 fs-3\">\n    <p [innerHTML]=\"data.body\"></p>\n</div>\n" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-static-page-two',
                        templateUrl: './static-page-two.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }]; } });

    var StaticPageTwoModule = /** @class */ (function () {
        function StaticPageTwoModule() {
        }
        return StaticPageTwoModule;
    }());
    StaticPageTwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StaticPageTwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoModule, declarations: [StaticPageTwoComponent], exports: [StaticPageTwoComponent] });
    StaticPageTwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageTwoModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StaticPageTwoComponent,
                        ],
                        imports: [],
                        exports: [
                            StaticPageTwoComponent
                        ]
                    }]
            }] });

    var StaticPageThreeComponent = /** @class */ (function () {
        function StaticPageThreeComponent(activatedRoute) {
            this.activatedRoute = activatedRoute;
            this.data = new StaticPageOne();
        }
        StaticPageThreeComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activatedRoute.data.subscribe(function (data) {
                _this.data = data.data;
            });
        };
        return StaticPageThreeComponent;
    }());
    StaticPageThreeComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    StaticPageThreeComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageThreeComponent, selector: "lib-static-page-three", ngImport: i0__namespace, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlign cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 px-5 py-2 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n\n            <div class=\"col-sm-12 px-5 py-2\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold centerAlign\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <div class=\"centerAlign\">\n                        <p class=\"text-center\" [innerHTML]=\"data.body\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-static-page-three',
                        templateUrl: './static-page-three.component.html',
                        styleUrls: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }]; } });

    var StaticPageThreeModule = /** @class */ (function () {
        function StaticPageThreeModule() {
        }
        return StaticPageThreeModule;
    }());
    StaticPageThreeModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    StaticPageThreeModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeModule, declarations: [StaticPageThreeComponent], imports: [i6.CommonModule], exports: [StaticPageThreeComponent] });
    StaticPageThreeModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeModule, imports: [[
                i6.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: StaticPageThreeModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            StaticPageThreeComponent,
                        ],
                        imports: [
                            i6.CommonModule
                        ],
                        exports: [
                            StaticPageThreeComponent
                        ]
                    }]
            }] });

    // /tsc-library/
    var TimezoneNotFoundComponent = /** @class */ (function () {
        function TimezoneNotFoundComponent(activatedRoute, storageService, environment) {
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.environment = environment;
            this.data = new StaticPageOne();
        }
        TimezoneNotFoundComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.rootOrgID = this.storageService.getStorage('rootOrgID');
            this.currentOrgID = this.storageService.getStorage('currentOrgID');
            this.currentOrgType = this.storageService.getStorage('currentOrgType');
            this.token = this.storageService.getStorage('token');
            this.userID = this.storageService.getStorage('userID');
            this.activatedRoute.data.subscribe(function (data) {
                _this.data = data.data;
            });
            if (this.currentOrgType == i3$2.OrgType.ORGANIZATION) {
                this.redirectUrl = "organization/" + this.currentOrgID + "/update";
            }
            else if (this.currentOrgType == i3$2.OrgType.SITE) {
                this.redirectUrl = "facility/" + this.currentOrgID + "/update";
            }
            else {
                this.redirectUrl = "organization/view";
            }
            this.appRedirectUrl = this.environment.ADMIN_URL + "login?token=" + this.token + "&userID=" + this.userID + "&orgID=" + this.rootOrgID + "&redirectUrl=" + this.redirectUrl;
            this.storageService.clearStorage();
        };
        return TimezoneNotFoundComponent;
    }());
    TimezoneNotFoundComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TimezoneNotFoundComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TimezoneNotFoundComponent, selector: "lib-timezone-not-found", ngImport: i0__namespace, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                    <a [href]=\"appRedirectUrl\">Click here to set timezone.</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-timezone-not-found',
                        templateUrl: './timezone-not-found.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['environment']
                        }] }];
        } });

    var TimezoneNotFoundModule = /** @class */ (function () {
        function TimezoneNotFoundModule() {
        }
        TimezoneNotFoundModule.forRoot = function (environment) {
            return {
                ngModule: TimezoneNotFoundModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return TimezoneNotFoundModule;
    }());
    TimezoneNotFoundModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TimezoneNotFoundModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundModule, declarations: [TimezoneNotFoundComponent], imports: [i6.CommonModule], exports: [TimezoneNotFoundComponent] });
    TimezoneNotFoundModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundModule, imports: [[
                i6.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TimezoneNotFoundModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TimezoneNotFoundComponent,
                        ],
                        imports: [
                            i6.CommonModule
                        ],
                        exports: [
                            TimezoneNotFoundComponent
                        ]
                    }]
            }] });

    var SearchBarOneComponent = /** @class */ (function () {
        function SearchBarOneComponent() {
            this.faTimes = freeSolidSvgIcons.faTimes;
            this.faSearch = freeSolidSvgIcons.faSearch;
            this.searchFC = new i2$2.FormControl('');
            this.type = 'text';
            this.searchBy = '';
            this.clear = false;
            this.emitValueOnChange = false;
            this.emitSearch = new i0.EventEmitter();
            this.active = false;
        }
        SearchBarOneComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.emitValueOnChange) {
                this.searchFC.valueChanges.subscribe(function (value) {
                    if (value.length == 0) {
                        _this.emitSearch.emit('');
                    }
                    else {
                        _this.emitSearch.emit(value);
                    }
                });
            }
        };
        SearchBarOneComponent.prototype.ngOnChanges = function () {
            if (!this.clear) {
                this.searchFC.reset('', { onlySelf: true, emitEvent: false });
            }
        };
        SearchBarOneComponent.prototype.searchFn = function () {
            if (this.searchFC.value.length > 0) {
                this.active = true;
                this.emitSearch.emit(this.searchFC.value);
                return;
            }
            if (!this.active) {
                return;
            }
            if (this.searchFC.value.length == 0 && this.active) {
                this.active = false;
                this.emitSearch.emit('');
                return;
            }
        };
        SearchBarOneComponent.prototype.searchReset = function () {
            this.searchFC.reset('');
            this.searchFn();
        };
        SearchBarOneComponent.prototype.searchClear = function () {
            this.active = false;
            this.searchFC.reset('');
        };
        return SearchBarOneComponent;
    }());
    SearchBarOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SearchBarOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarOneComponent, selector: "lib-search-bar-one", inputs: { type: "type", searchBy: "searchBy", clear: "clear", emitValueOnChange: "emitValueOnChange" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1__namespace$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2__namespace$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-search-bar-one',
                        templateUrl: './search-bar-one.component.html',
                        styleUrls: ['./search-bar-one.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                    type: i0.Input
                }], searchBy: [{
                    type: i0.Input
                }], clear: [{
                    type: i0.Input
                }], emitValueOnChange: [{
                    type: i0.Input
                }], emitSearch: [{
                    type: i0.Output
                }] } });

    var SearchBarOneModule = /** @class */ (function () {
        function SearchBarOneModule() {
        }
        return SearchBarOneModule;
    }());
    SearchBarOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SearchBarOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneModule, declarations: [SearchBarOneComponent], imports: [i6.CommonModule,
            i1$3.FontAwesomeModule,
            i2$2.FormsModule,
            i2$2.ReactiveFormsModule,
            icon.MatIconModule,
            i4$4.MatInputModule,
            i4$2.MatRippleModule,
            i3$3.MatFormFieldModule], exports: [SearchBarOneComponent] });
    SearchBarOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneModule, imports: [[
                i6.CommonModule,
                i1$3.FontAwesomeModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                icon.MatIconModule,
                i4$4.MatInputModule,
                i4$2.MatRippleModule,
                i3$3.MatFormFieldModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SearchBarOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SearchBarOneComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            i1$3.FontAwesomeModule,
                            i2$2.FormsModule,
                            i2$2.ReactiveFormsModule,
                            icon.MatIconModule,
                            i4$4.MatInputModule,
                            i4$2.MatRippleModule,
                            i3$3.MatFormFieldModule,
                        ],
                        exports: [SearchBarOneComponent]
                    }]
            }] });

    var BackButtonComponent = /** @class */ (function () {
        function BackButtonComponent(tSCCommonService) {
            this.tSCCommonService = tSCCommonService;
            this.faArrowAltCircleLeft = faArrowAltCircleLeft.faArrowAltCircleLeft;
        }
        BackButtonComponent.prototype.ngOnInit = function () {
        };
        BackButtonComponent.prototype.backBtnClick = function () {
            this.tSCCommonService.back();
        };
        return BackButtonComponent;
    }());
    BackButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonComponent, deps: [{ token: TSCCommonService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BackButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BackButtonComponent, selector: "lib-back-button", ngImport: i0__namespace, template: "<button class=\"btn btn-outline-light text-dark rounded-pill\" (click)=\"backBtnClick();\">\n    <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon> &nbsp;Back\n</button>\n", components: [{ type: i1__namespace$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-back-button',
                        templateUrl: './back-button.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: TSCCommonService }]; } });

    var BackButtonModule = /** @class */ (function () {
        function BackButtonModule() {
        }
        return BackButtonModule;
    }());
    BackButtonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BackButtonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonModule, declarations: [BackButtonComponent], imports: [i1$3.FontAwesomeModule], exports: [BackButtonComponent] });
    BackButtonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonModule, imports: [[
                i1$3.FontAwesomeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BackButtonModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            BackButtonComponent,
                        ],
                        imports: [
                            i1$3.FontAwesomeModule
                        ],
                        exports: [
                            BackButtonComponent
                        ]
                    }]
            }] });

    var DialogOneComponent = /** @class */ (function () {
        function DialogOneComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
            this.dialogOne = exports.DialogOneEnum;
            this.dialogRef.disableClose = true;
        }
        DialogOneComponent.prototype.ngOnInit = function () {
        };
        DialogOneComponent.prototype.success = function () {
            this.dialogRef.close(true);
        };
        DialogOneComponent.prototype.fail = function () {
            this.dialogRef.close(false);
        };
        return DialogOneComponent;
    }());
    DialogOneComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneComponent, deps: [{ token: i1__namespace$4.MatDialogRef }, { token: i1$4.MAT_DIALOG_DATA }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DialogOneComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DialogOneComponent, selector: "lib-dialog-one", ngImport: i0__namespace, template: "<div mat-dialog-title class=\"dialogTitle mb-0\">\n    <div *ngIf=\"data.type == dialogOne.DELETE;else ElseBlock\" class=\"d-flex text-danger row\">\n        <div class=\"row d-flix\">\n            <div class=\"col-sm-1 centerAlign\">\n                <span class=\"material-symbols-outlined \">\n                    {{data.icon}}\n                </span>\n            </div>\n            <div class=\"col-sm-11\">\n                <strong>\n                    {{data.header}}\n                </strong>\n            </div>\n        </div>\n\n    </div>\n    <ng-template #ElseBlock class=\"d-flex row\">\n        <div class=\"row\" [ngClass]=\"{'text-warning': data.type == dialogOne.CONFIRMATION, 'text-info': data.type == dialogOne.INFO}\">\n            <div class=\"col-sm-1 ps-2 centerAlign\">\n                <span class=\"material-symbols-outlined\">\n                    {{data.icon}}\n                </span>\n            </div>\n            <div class=\"col-sm-11\">\n                <strong>\n                    {{data.header}}\n                </strong>\n            </div>\n        </div>\n    </ng-template>\n</div>\n<div class=\"card-body breakLine mat-typography ms-4\">\n    <div [innerHTML]=\"data.body\"></div><br />\n</div>\n<div *ngIf=\"data.type == dialogOne.DELETE\">\n    <button class=\"btn btn-sm btn-secondary float-end ms-2\" (click)=\"fail()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n    <button class=\"btn btn-sm btn-danger float-end ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonTwo }}\n    </button>\n</div>\n\n<div *ngIf=\"data.type == dialogOne.INFO\">\n    <button class=\"btn btn-sm  float-centre ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n</div>\n\n<div *ngIf=\"data.type == dialogOne.CONFIRMATION\">\n    <button class=\"btn btn-sm btn-warning text-white float-end ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonTwo }}\n    </button>\n    <button class=\"btn btn-sm btn-secondary float-end ms-2\" (click)=\"fail()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n</div>", directives: [{ type: i1__namespace$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-dialog-one',
                        templateUrl: './dialog-one.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$4.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$4.MAT_DIALOG_DATA]
                        }] }];
        } });

    var DialogOneModule = /** @class */ (function () {
        function DialogOneModule() {
        }
        return DialogOneModule;
    }());
    DialogOneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DialogOneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneModule, declarations: [DialogOneComponent], imports: [i6.CommonModule,
            i1$4.MatDialogModule,
            icon.MatIconModule,
            i3$4.MatButtonModule,
            i4$2.MatRippleModule], exports: [DialogOneComponent] });
    DialogOneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneModule, imports: [[
                i6.CommonModule,
                i1$4.MatDialogModule,
                icon.MatIconModule,
                i3$4.MatButtonModule,
                i4$2.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DialogOneModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [DialogOneComponent],
                        imports: [
                            i6.CommonModule,
                            i1$4.MatDialogModule,
                            icon.MatIconModule,
                            i3$4.MatButtonModule,
                            i4$2.MatRippleModule
                        ],
                        exports: [DialogOneComponent]
                    }]
            }] });

    var TypeConfirmationDialog = /** @class */ (function () {
        function TypeConfirmationDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
            this.DialogOneEnum = exports.DialogOneEnum;
            this.MaterialFormFieldAppearance = exports.MaterialFormFieldAppearance;
            this.btnFlag = false;
        }
        TypeConfirmationDialog.prototype.ngOnInit = function () {
        };
        TypeConfirmationDialog.prototype.confirmationCheck = function (value) {
            this.data.confirmationInput == value ? this.btnFlag = true : this.btnFlag = false;
        };
        TypeConfirmationDialog.prototype.success = function () {
            this.dialogRef.close(true);
        };
        TypeConfirmationDialog.prototype.fail = function () {
            this.dialogRef.close(false);
        };
        return TypeConfirmationDialog;
    }());
    TypeConfirmationDialog.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialog, deps: [{ token: i1__namespace$4.MatDialogRef }, { token: i1$4.MAT_DIALOG_DATA }], target: i0__namespace.ɵɵFactoryTarget.Component });
    TypeConfirmationDialog.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TypeConfirmationDialog, selector: "app-type-dialog", ngImport: i0__namespace, template: "<ng-container *ngIf=\"data.type; else deleteTemplate\">\n    <div mat-dialog-title class=\"fw-4 mb-1 d-flex\">\n        <div class=\"col-sm-1\">\n            <span class=\"material-symbols-outlined mr-2 pt-2 ps-3\">\n                {{data.icon}}\n            </span>\n        </div>\n\n        <strong class=\"col-sm-11 \">\n            <div class=\"pt-1\" [innerHTML]=\"data.header\"></div>\n        </strong>\n    </div>\n</ng-container>\n\n<ng-template #deleteTemplate>\n    <div mat-dialog-title class=\"fw-4 mb-1 text-danger d-flex\">\n        <div class=\"col-sm-1\">\n            <span class=\"material-symbols-outlined mr-2 pt-2 ps-3\">\n                {{data.icon}}\n            </span>\n        </div>\n\n        <strong class=\"col-sm-11 \">\n            <div class=\"pt-1\" [innerHTML]=\"data.header\"></div>\n        </strong>\n    </div>\n</ng-template>\n\n<div mat-dialog-content class=\"card-body ms-4 mb-2\">\n    <div [innerHTML]=\"data.body\"></div><br />\n    <div class=\"ps-2\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label class=\"formLabel\">Please type \"{{data.confirmationInput}}\" to continue.</mat-label>\n                <input matInput type=\"text\" placeholder=\"\"  (input)=\"confirmationCheck($event.target.value)\">\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n\n<div mat-dialog-footer align=\"end\" class=\"ms-2 mb-3\">\n    <ng-container *ngIf=\"data.type; else elseBlock\">\n        <button class=\"btn btn-sm btn-secondary float-end ms-2 mb-3 me-1\" (click)=\"fail()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n            {{ data.buttonOne }}\n        </button>\n        <button class=\"btn btn-sm btn-success float-end ms-2 mb-3 me-1\" (click)=\"success()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [disabled]=\"!btnFlag\">\n            {{ data.buttonTwo }}\n        </button>\n    </ng-container>\n\n    <ng-template #elseBlock>\n        <button class=\"btn btn-sm btn-secondary float-end ms-2 mb-3 me-1\" (click)=\"fail()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n            {{ data.buttonOne }}\n        </button>\n        <button class=\"btn btn-sm btn-danger float-end ms-2 mb-3 me-1\" (click)=\"success()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [disabled]=\"!btnFlag\">\n            {{ data.buttonTwo }}\n        </button>\n    </ng-template>\n</div>", components: [{ type: i3__namespace$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3__namespace$3.MatLabel, selector: "mat-label" }, { type: i4__namespace$5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialog, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-type-dialog',
                        templateUrl: './type-confirmation.component.html',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$4.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$4.MAT_DIALOG_DATA]
                        }] }];
        } });

    var TypeConfirmationDialogModule = /** @class */ (function () {
        function TypeConfirmationDialogModule() {
        }
        return TypeConfirmationDialogModule;
    }());
    TypeConfirmationDialogModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialogModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TypeConfirmationDialogModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialogModule, declarations: [TypeConfirmationDialog], imports: [i6.CommonModule,
            i1$4.MatDialogModule,
            icon.MatIconModule,
            i3$4.MatButtonModule,
            i4$2.MatRippleModule,
            i4$4.MatInputModule,
            i3$3.MatFormFieldModule], exports: [TypeConfirmationDialog] });
    TypeConfirmationDialogModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialogModule, imports: [[
                i6.CommonModule,
                i1$4.MatDialogModule,
                icon.MatIconModule,
                i3$4.MatButtonModule,
                i4$2.MatRippleModule,
                i4$4.MatInputModule,
                i3$3.MatFormFieldModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: TypeConfirmationDialogModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TypeConfirmationDialog
                        ],
                        imports: [
                            i6.CommonModule,
                            i1$4.MatDialogModule,
                            icon.MatIconModule,
                            i3$4.MatButtonModule,
                            i4$2.MatRippleModule,
                            i4$4.MatInputModule,
                            i3$3.MatFormFieldModule,
                        ],
                        exports: [TypeConfirmationDialog]
                    }]
            }] });

    // /tsc-library/
    var ProfileLogoUploadComponent = /** @class */ (function () {
        function ProfileLogoUploadComponent(dialog, toastrService) {
            this.dialog = dialog;
            this.toastrService = toastrService;
            this.roundCropper = false;
            this.showDeleteBtnInp = false;
            this.removeImgActionInp = 'REMOVE';
            this.imageSelectedEvent = new i0.EventEmitter();
            this.imageRemoveEvent = new i0.EventEmitter();
            this.ButtonLabelEnum = exports.ButtonLabelEnum;
            this.image = [];
            this.croppedImage = null;
            this.previewBtnLabel = 'Update';
            this.hideCropper = true;
            this.imageChangedEvent = '';
        }
        ProfileLogoUploadComponent.prototype.ngOnInit = function () { };
        ProfileLogoUploadComponent.prototype.ngOnChanges = function (changes) {
            if (changes.imageInp && this.imageInp) {
                this.currentImg = this.imageInp;
            }
            if (changes.previewBtnLabelInp && this.previewBtnLabelInp) {
                this.previewBtnLabel = this.previewBtnLabelInp;
            }
        };
        ProfileLogoUploadComponent.prototype.chooseImage = function () {
            this.imageUpdate.nativeElement.click();
        };
        ProfileLogoUploadComponent.prototype.imageSelected = function () {
            this.cropperImageInput.nativeElement.click();
        };
        ProfileLogoUploadComponent.prototype.emptyInput = function () {
            this.cropperImageInput.nativeElement.value = '';
        };
        ProfileLogoUploadComponent.prototype.imageCropped = function (event) {
            this.image = [];
            this.croppedImage = event.base64;
            this.image.push(i4$6.base64ToFile(this.croppedImage));
        };
        ProfileLogoUploadComponent.prototype.imageLoaded = function (image) { };
        ;
        ProfileLogoUploadComponent.prototype.cropperReady = function () { };
        ProfileLogoUploadComponent.prototype.loadImageFailed = function () {
            this.toastrService.openToast('Error', 'Couldn\'t load image. Try again!', 'error');
        };
        ProfileLogoUploadComponent.prototype.fileChangeEvent = function (event) {
            if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
                this.hideCropper = false;
                this.imageChangedEvent = event;
            }
            else {
                if (!this.isFileAllowed(event.target.files[0].name)) {
                    this.toastrService.openToast('Error', exports.ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
                }
                else {
                    this.toastrService.openToast('Error', exports.ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
                }
                this.emptyInput();
                return;
            }
        };
        ProfileLogoUploadComponent.prototype.isFileAllowed = function (fileName) {
            var e_1, _a;
            var isFileAllowed = false;
            var regex = /(?:\.([^.]+))?$/;
            var extension = regex.exec(fileName);
            if (undefined !== extension && null !== extension) {
                try {
                    for (var _b = __values(COMMON_CONSTANT.ALLOWED_IMAGE_TYPES), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ext = _c.value;
                        if (ext === extension[0]) {
                            isFileAllowed = true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return isFileAllowed;
        };
        ProfileLogoUploadComponent.prototype.isFileSizeAllowed = function (size) {
            var isSizeAllowed = false;
            if (size < COMMON_CONSTANT.MAX_IMAGE_SIZE) {
                isSizeAllowed = true;
            }
            return isSizeAllowed;
        };
        ProfileLogoUploadComponent.prototype.openEditDialog = function () {
            var _this = this;
            this.dialogRef = this.dialog.open(this.openCropper, {
                minWidth: '350px'
            });
            this.dialogRef.disableClose = true;
            this.dialogRef.afterClosed()
                .subscribe(function (result) {
                _this.imageUpdate.nativeElement.value = null;
            });
        };
        ProfileLogoUploadComponent.prototype.updateFile = function (fileEvent) {
            var file = fileEvent.target.files[0];
            if (file) {
                this.fileChangeEvent(fileEvent);
                this.openEditDialog();
            }
        };
        ProfileLogoUploadComponent.prototype.updateImage = function () {
            if (this.image.length == 0) {
                this.toastrService.openToast(i2$1.ToastrTitle.ERROR, 'Please select a picture', i2$1.ToastrColor.ERROR);
                return;
            }
            this.currentImg = this.croppedImage;
            // this.showDeleteBtnInp = true;
            this.imageSelectedEvent.emit({ image: this.image[0] });
            this.hideCropper = true;
            this.dialogRef.close();
        };
        ProfileLogoUploadComponent.prototype.removeImage = function () {
            if (this.removeImgActionInp == 'DELETE') {
                this.deleteImage();
            }
            else {
                this.imageRemoveEvent.emit();
            }
        };
        ProfileLogoUploadComponent.prototype.deleteImage = function () {
            var _this = this;
            this.dialogRef = this.dialog.open(DialogOneComponent, {
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: 'Delete Image?',
                    body: "Are you sure you want to delete this image?",
                    buttonOne: exports.ButtonLabelEnum.CANCEL_BTN_LABEL,
                    buttonTwo: exports.ButtonLabelEnum.DELETE_BTN_LABEL
                },
                minHeight: '200px',
                minWidth: '450px',
            });
            this.dialogRef.disableClose = true;
            this.dialogRef.afterClosed().subscribe(function (res) {
                if (res) {
                    _this.imageRemoveEvent.emit();
                }
            });
        };
        return ProfileLogoUploadComponent;
    }());
    ProfileLogoUploadComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadComponent, deps: [{ token: i1__namespace$4.MatDialog }, { token: i2__namespace$1.ToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ProfileLogoUploadComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileLogoUploadComponent, selector: "lib-profile-logo-upload", inputs: { roundCropper: "roundCropper", imageInp: "imageInp", showDeleteBtnInp: "showDeleteBtnInp", previewBtnLabelInp: "previewBtnLabelInp", removeImgActionInp: "removeImgActionInp" }, outputs: { imageSelectedEvent: "imageSelectedEvent", imageRemoveEvent: "imageRemoveEvent" }, viewQueries: [{ propertyName: "imageUpdate", first: true, predicate: ["imageUpdate"], descendants: true }, { propertyName: "openCropper", first: true, predicate: ["openCropper"], descendants: true }, { propertyName: "cropperImageInput", first: true, predicate: ["cropperImageInput"], descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"imageContainer border rounded\">\n    <img class=\"imgView d-block cursorPointer\" [src]=\"currentImg\" alt=\"Uploaded Image\" (click)=\"chooseImage()\">\n\n    <button class=\"editImgBtn profilelogoBtn\" type=\"button\" (click)=\"chooseImage()\" #tooltip=\"matTooltip\"\n        matTooltipPosition=\"above\" matTooltip=\"Click to edit image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            edit\n        </span>\n    </button>\n\n    <button *ngIf=\"showDeleteBtnInp\" class=\"deleteImgBtn profilelogoBtn\" type=\"button\" (click)=\"removeImage()\"\n        #tooltip=\"matTooltip\" matTooltipPosition=\"above\" matTooltip=\"Remove image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            delete\n        </span>\n    </button>\n\n    <input #imageUpdate class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n        (change)=\"updateFile($event)\" />\n</div>\n\n<ng-template #openCropper>\n    <h6 mat-dialog-title>\n        <strong [ngClass]=\"{'d-none': hideCropper}\">Crop Image</strong>\n        <strong [ngClass]=\"{'d-none': !hideCropper}\">Preview</strong>\n        <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n            matTooltipPosition=\"before\">\n            <span class=\"material-symbols-outlined\">close</span>\n        </button>\n    </h6>\n    <hr class=\"mt-0\" />\n    <div mat-dialog-content>\n        <form enctype=\"multipart/form-data\">\n            <div class=\"row cropperDimensions mx-auto\" [ngClass]=\"{'d-none': hideCropper}\">\n                <input #cropperImageInput class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n                    (change)=\"fileChangeEvent($event)\" />\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"roundCropper\"\n                    [roundCropper]=\"roundCropper\" format=\"png,jpg,jpeg\" (imageCropped)=\"imageCropped($event)\"\n                    (imageLoaded)=\"imageLoaded($event)\" (cropperReady)=\"cropperReady()\"\n                    (loadImageFailed)=\"loadImageFailed()\">\n                </image-cropper>\n            </div>\n            <div class=\"row\" [ngClass]=\"{'d-none': !hideCropper}\">\n                <div class=\"col-sm-12\">\n                    <img class=\"border d-block mx-auto updateImgPreview\" [src]=\"croppedImage\"\n                        [ngClass]=\"{'rounded-circle': roundCropper}\" />\n                </div>\n            </div>\n        </form>\n    </div>\n    <mat-divider class=\"mt-2\"></mat-divider>\n    <mat-dialog-actions align=\"end\">\n        <div [ngClass]=\"{'d-none': hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-primary ms-2\" type=\"button\" (click)=\"hideCropper = !hideCropper\">\n                Crop\n            </button>\n        </div>\n        <div [ngClass]=\"{'d-none': !hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-success ms-2\" type=\"button\" (click)=\"updateImage()\">\n                {{ previewBtnLabel }}\n            </button>\n        </div>\n    </mat-dialog-actions>\n</ng-template>", styles: [".imageContainer{will-change:transform;width:110px;height:110px;display:flex;flex:auto;align-items:center;justify-content:center;float:left;padding:3px}.imageContainer :hover{opacity:.85;transition:transform .5s;transform:scale(1.05)}.imgView{max-width:100%;max-height:100%}.profilelogoBtn{will-change:transform;bottom:3px;position:absolute!important;width:25px!important;height:25px!important;color:#fff;background-color:#000;border-radius:50%;border:1px solid white!important;opacity:.5;display:flex!important;align-items:center;justify-content:center}.editImgBtn{right:3px}.deleteImgBtn{right:30px}.imageIcon{will-change:transform;font-size:small}.cropperDimensions{max-width:350px;max-height:auto}.updateImgPreview{width:250px}.matDialogClose{background-color:#80808033}\n"], components: [{ type: i3__namespace$4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i4__namespace$6.ImageCropperComponent, selector: "image-cropper", inputs: ["format", "transform", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "cropper", "alignImage", "disabled", "imageChangedEvent", "imageURL", "imageBase64", "imageFile"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed"] }, { type: i5__namespace$3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], directives: [{ type: i6__namespace$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i1__namespace$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1__namespace$4.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-profile-logo-upload',
                        templateUrl: './profile-logo-upload.component.html',
                        styleUrls: ['./profile-logo-upload.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$4.MatDialog }, { type: i2__namespace$1.ToastrService }]; }, propDecorators: { roundCropper: [{
                    type: i0.Input
                }], imageInp: [{
                    type: i0.Input
                }], showDeleteBtnInp: [{
                    type: i0.Input
                }], previewBtnLabelInp: [{
                    type: i0.Input
                }], removeImgActionInp: [{
                    type: i0.Input
                }], imageSelectedEvent: [{
                    type: i0.Output
                }], imageRemoveEvent: [{
                    type: i0.Output
                }], imageUpdate: [{
                    type: i0.ViewChild,
                    args: ['imageUpdate']
                }], openCropper: [{
                    type: i0.ViewChild,
                    args: ['openCropper']
                }], cropperImageInput: [{
                    type: i0.ViewChild,
                    args: ['cropperImageInput']
                }] } });

    var ProfileLogoUploadModule = /** @class */ (function () {
        function ProfileLogoUploadModule() {
        }
        return ProfileLogoUploadModule;
    }());
    ProfileLogoUploadModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ProfileLogoUploadModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadModule, declarations: [ProfileLogoUploadComponent], imports: [i6.CommonModule,
            i1$4.MatDialogModule,
            i4$6.ImageCropperModule,
            i6$1.MatTooltipModule,
            i3$4.MatButtonModule,
            icon.MatIconModule,
            i5$3.MatDividerModule], exports: [ProfileLogoUploadComponent] });
    ProfileLogoUploadModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadModule, imports: [[
                i6.CommonModule,
                i1$4.MatDialogModule,
                i4$6.ImageCropperModule,
                i6$1.MatTooltipModule,
                i3$4.MatButtonModule,
                icon.MatIconModule,
                i5$3.MatDividerModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ProfileLogoUploadModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ProfileLogoUploadComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            i1$4.MatDialogModule,
                            i4$6.ImageCropperModule,
                            i6$1.MatTooltipModule,
                            i3$4.MatButtonModule,
                            icon.MatIconModule,
                            i5$3.MatDividerModule
                        ],
                        exports: [
                            ProfileLogoUploadComponent
                        ]
                    }]
            }] });

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
                provide: i4$2.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [i4$2.MAT_DATE_LOCALE]
            },
            {
                provide: i4$2.MAT_DATE_FORMATS,
                useValue: DATE_YEAR_MONTH_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateMonthYearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appDateMonthYearFormat]',
                        providers: [
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE]
                            },
                            {
                                provide: i4$2.MAT_DATE_FORMATS,
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
                provide: i4$2.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [i4$2.MAT_DATE_LOCALE]
            },
            {
                provide: i4$2.MAT_DATE_FORMATS,
                useValue: MONTH_YEAR_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MonthYearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appMonthYearFormat]',
                        providers: [
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE]
                            },
                            {
                                provide: i4$2.MAT_DATE_FORMATS,
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
                provide: i4$2.DateAdapter,
                useClass: materialMomentAdapter.MomentDateAdapter,
                deps: [i4$2.MAT_DATE_LOCALE]
            },
            {
                provide: i4$2.MAT_DATE_FORMATS,
                useValue: YEAR_FORMAT
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: YearFormatDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[appYearFormat]',
                        providers: [
                            {
                                provide: i4$2.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i4$2.MAT_DATE_LOCALE]
                            },
                            {
                                provide: i4$2.MAT_DATE_FORMATS,
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
        function DateFilterComponent(storageService) {
            this.storageService = storageService;
            this.frequency = [];
            this.defaultFlag = null;
            this.emitFilter = new i0.EventEmitter();
            this.today = new Date();
            this.durationValueFC = new i2$2.FormControl(moment__namespace().format("YYYY-MM"));
            this.daterange = new i2$2.FormControl();
            this.startDate = new i2$2.FormControl(moment__namespace().startOf('month').format("YYYY-MM-DD"));
            this.endDate = new i2$2.FormControl(moment__namespace().endOf('month').format("YYYY-MM-DD"));
            this.frequencyKeyIDFC = new i2$2.FormControl();
        }
        DateFilterComponent.prototype.ngOnInit = function () {
            if (this.defaultFlag) {
                this.frequencyKeyIDFC.patchValue(this.defaultFlag);
            }
            else {
                this.frequencyKeyIDFC.patchValue(exports.FrequencyEnum.MONTHLY_KEY_ID);
            }
            if (this.frequency.length == 0) {
                this.frequency = FREQUENCY_CONSTANT;
            }
            this.frequencyChange();
        };
        DateFilterComponent.prototype.frequencyChange = function () {
            var duration;
            var startDate;
            var endDate;
            switch (this.frequencyKeyIDFC.value) {
                case exports.FrequencyEnum.DAILY_KEY_ID:
                    duration = moment__namespace(this.today).format("YYYY-MM-DD");
                    startDate = moment__namespace().format("YYYY-MM-DD");
                    endDate = moment__namespace().format("YYYY-MM-DD");
                    break;
                case exports.FrequencyEnum.MONTHLY_KEY_ID:
                    duration = moment__namespace(this.today).format("YYYY-MM");
                    startDate = moment__namespace().startOf('month').format("YYYY-MM-DD");
                    endDate = moment__namespace().endOf('month').format("YYYY-MM-DD");
                    break;
                case exports.FrequencyEnum.YEARLY_KEY_ID:
                    duration = moment__namespace(this.today).format("YYYY");
                    startDate = moment__namespace().startOf('year').format("YYYY-MM-DD");
                    endDate = moment__namespace().endOf('year').format("YYYY-MM-DD");
                    break;
                case exports.FrequencyEnum.CUSTOM_KEY_ID:
                    console.log("Frequency: ", this.frequencyKeyIDFC.value);
                    break;
                default:
                    console.log('undefined case encountered!');
            }
            this.durationValueFC.patchValue(duration);
            if (this.frequencyKeyIDFC.value != exports.FrequencyEnum.CUSTOM_KEY_ID) {
                this.daterange.patchValue('');
                this.startDate.patchValue(startDate);
                this.endDate.patchValue(endDate);
                this.emitFilter.emit();
            }
        };
        DateFilterComponent.prototype.openDatepicker = function () {
            if (this.frequencyKeyIDFC.value == exports.FrequencyEnum.CUSTOM_KEY_ID) {
                this.pickerDirective.open();
            }
        };
        DateFilterComponent.prototype.openDatepickerOnClick = function (datepicker) {
            if (!datepicker.opened) {
                datepicker.open();
            }
        };
        DateFilterComponent.prototype.takeFocusAway = function (durationField) {
            this.durationField = document.getElementById(durationField);
            this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
        };
        DateFilterComponent.prototype.dateSelectedHandler = function (chosenDate) {
            this.durationValueFC.patchValue(moment__namespace(chosenDate).format("YYYY-MM-DD"));
            this.startDate.patchValue(moment__namespace(chosenDate).format("YYYY-MM-DD"));
            this.endDate.patchValue(moment__namespace(chosenDate).format("YYYY-MM-DD"));
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.monthSelectedHandler = function (normalizedMonthAndYear, datepicker) {
            datepicker.close();
            var duration = moment__namespace(normalizedMonthAndYear).format("YYYY-MM");
            this.durationValueFC.patchValue(duration);
            this.startDate.patchValue(moment__namespace(normalizedMonthAndYear).startOf('month').format("YYYY-MM-DD"));
            this.endDate.patchValue(moment__namespace(normalizedMonthAndYear).endOf('month').format("YYYY-MM-DD"));
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.yearSelectedHandler = function (normalizedYear, datepicker) {
            datepicker.close();
            var duration = moment__namespace(normalizedYear).format("YYYY");
            this.durationValueFC.patchValue(duration);
            this.startDate.patchValue(moment__namespace(normalizedYear).startOf('year').format("YYYY-MM-DD"));
            this.endDate.patchValue(moment__namespace(normalizedYear).endOf('year').format("YYYY-MM-DD"));
            this.emitFilter.emit();
        };
        DateFilterComponent.prototype.customDateRange = function (selectedValue) {
            if (this.frequencyKeyIDFC.value == exports.FrequencyEnum.CUSTOM_KEY_ID) {
                this.startDate.patchValue(moment__namespace(selectedValue.startDate).format('YYYY-MM-DD'));
                this.endDate.patchValue(moment__namespace(selectedValue.endDate).format('YYYY-MM-DD'));
                this.durationValueFC.patchValue(this.endDate);
                this.emitFilter.emit();
            }
        };
        return DateFilterComponent;
    }());
    DateFilterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterComponent, deps: [{ token: i2__namespace.StorageService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    DateFilterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterComponent, selector: "lib-date-filter", inputs: { frequency: "frequency", defaultFlag: "defaultFlag" }, outputs: { emitFilter: "emitFilter" }, viewQueries: [{ propertyName: "pickerDirective", first: true, predicate: i9.DaterangepickerDirective, descendants: true }], ngImport: i0__namespace, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyKeyIDFC\" (change)=\"frequencyChange()\">\n    <mat-button-toggle *ngFor=\"let frequency2 of frequency\" value=\"{{ frequency2.keyID }}\">\n        {{ frequency2.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-form-field class=\"ms-3\" id=\"dailyField\" appDateMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='DAILY'}\" (click)=\"openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(daily)\" (keydown.enter)=\"openDatepickerOnClick(daily)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationValueFC\" [max]=\"today\"\n        (dateInput)=\"dateSelectedHandler($event.value)\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"takeFocusAway('dailyField')\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"monthlyField\" appMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='MONTHLY'}\" (click)=\"openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(monthly)\" (keydown.enter)=\"openDatepickerOnClick(monthly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"durationValueFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n        (monthSelected)=\"monthSelectedHandler($event, monthly)\" (closed)=\"takeFocusAway('monthlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"yearlyField\" appYearFormat [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='YEARLY'}\"\n    (click)=\"openDatepickerOnClick(yearly)\" (keydown.arrowdown)=\"openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"openDatepickerOnClick(yearly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"yearly\" [formControl]=\"durationValueFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"yearPicker\" #yearly startView=\"multi-year\"\n        (yearSelected)=\"yearSelectedHandler($event, yearly)\" (closed)=\"takeFocusAway('yearlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='CUSTOM'}\">\n    <mat-label class=\"formLabel\"> Select date </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: 'DD-MMM-YYYY', customRangeLabel: 'Custom Range'}\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateRange(daterange.value)\" [readonly]=\"true\" />\n</mat-form-field>", styles: [".matBtnFilter mat-button-toggle.mat-button-toggle-checked{background-color:#e6e6e6!important}.noFocus{pointer-events:none}.formLabel{text-transform:none}\n"], components: [{ type: i5__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3__namespace$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace$7.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4__namespace$7.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i5__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2__namespace$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4__namespace$5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4__namespace$7.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i2__namespace$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace$3.MatSuffix, selector: "[matSuffix]" }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i3__namespace$3.MatLabel, selector: "mat-label" }, { type: i9__namespace.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date-filter',
                        templateUrl: './date-filter.component.html',
                        styleUrls: ['./date-filter.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }]; }, propDecorators: { frequency: [{
                    type: i0.Input
                }], defaultFlag: [{
                    type: i0.Input
                }], emitFilter: [{
                    type: i0.Output
                }], pickerDirective: [{
                    type: i0.ViewChild,
                    args: [i9.DaterangepickerDirective, { static: false }]
                }] } });

    var DateFilterModule = /** @class */ (function () {
        function DateFilterModule() {
        }
        return DateFilterModule;
    }());
    DateFilterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DateFilterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, declarations: [DateFilterComponent], imports: [i6.CommonModule,
            i2$2.ReactiveFormsModule,
            i4$1.MatCardModule,
            i5$2.MatButtonToggleModule,
            i4$4.MatInputModule,
            i4$2.MatNativeDateModule,
            i4$7.MatDatepickerModule,
            DateMonthYearFormatModule, i9__namespace.NgxDaterangepickerMd], exports: [DateFilterComponent] });
    DateFilterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, imports: [[
                i6.CommonModule,
                i2$2.ReactiveFormsModule,
                i4$1.MatCardModule,
                i5$2.MatButtonToggleModule,
                i4$4.MatInputModule,
                i4$2.MatNativeDateModule,
                i4$7.MatDatepickerModule,
                DateMonthYearFormatModule,
                i9.NgxDaterangepickerMd.forRoot(),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DateFilterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DateFilterComponent,
                        ],
                        imports: [
                            i6.CommonModule,
                            i2$2.ReactiveFormsModule,
                            i4$1.MatCardModule,
                            i5$2.MatButtonToggleModule,
                            i4$4.MatInputModule,
                            i4$2.MatNativeDateModule,
                            i4$7.MatDatepickerModule,
                            DateMonthYearFormatModule,
                            i9.NgxDaterangepickerMd.forRoot(),
                        ],
                        exports: [
                            DateFilterComponent
                        ]
                    }]
            }] });

    var SkeletonComponent = /** @class */ (function () {
        function SkeletonComponent() {
        }
        return SkeletonComponent;
    }());
    SkeletonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SkeletonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SkeletonComponent, selector: "lib-skeleton-loader", inputs: { count: "count", appearance: "appearance", theme: "theme" }, ngImport: i0__namespace, template: "<ngx-skeleton-loader [count]=\"count\" [appearance]=\"appearance\" [theme]=\"theme\" animation=\"progress\">\n</ngx-skeleton-loader>", components: [{ type: i1__namespace$5.NgxSkeletonLoaderComponent, selector: "ngx-skeleton-loader", inputs: ["count", "loadingText", "appearance", "animation", "ariaLabel", "theme"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-skeleton-loader',
                        templateUrl: './skeleton.component.html',
                        styleUrls: []
                    }]
            }], propDecorators: { count: [{
                    type: i0.Input
                }], appearance: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }] } });

    var SkeletonModule = /** @class */ (function () {
        function SkeletonModule() {
        }
        return SkeletonModule;
    }());
    SkeletonModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SkeletonModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonModule, declarations: [SkeletonComponent], imports: [i1__namespace$5.NgxSkeletonLoaderModule, i6.CommonModule], exports: [SkeletonComponent] });
    SkeletonModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonModule, imports: [[
                i1$5.NgxSkeletonLoaderModule.forRoot(),
                i6.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SkeletonModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SkeletonComponent],
                        imports: [
                            i1$5.NgxSkeletonLoaderModule.forRoot(),
                            i6.CommonModule
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [SkeletonComponent]
                    }]
            }] });

    var BulkUploadDialogLib = /** @class */ (function () {
        function BulkUploadDialogLib(dialogRef, data, toastrService) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.toastrService = toastrService;
            this.error = false;
            this.duplicateData = null;
            this.mandatoryData = null;
            this.loaded = 0;
            this.fileUploaded = new i0.EventEmitter();
            this.dialogRef.disableClose = true;
        }
        BulkUploadDialogLib.prototype.ngOnInit = function () {
            this.templateFileSrc = this.data['source'];
        };
        BulkUploadDialogLib.prototype.onFileChange = function (event) {
            var _this = this;
            if (event.target.files.length > 0) {
                var file_1 = event.target.files[0];
                if (!this.isFileAllowed(file_1.name)) {
                    this.resetFileInput();
                    this.toastrService.openToast(i2$1.ToastrTitle.ERROR, exports.BulkUploadEnum.INVALID_FILE_TYPE_ERROR, i2$1.ToastrColor.ERROR);
                    return;
                }
                else if (file_1.size > exports.BulkUploadEnum.MAX_FILE_SIZE) {
                    this.resetFileInput();
                    this.toastrService.openToast(i2$1.ToastrTitle.ERROR, exports.BulkUploadEnum.INVAID_FILE_SIZE_ERROR, i2$1.ToastrColor.ERROR);
                    return;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file_1);
                reader.addEventListener('loadstart', function () {
                    _this.loaded = 0;
                    _this.progress = true;
                });
                reader.addEventListener('progress', function (event) { return _this.loaded = (event.loaded / event.total) * 100; });
                reader.addEventListener('load', function () {
                    _this.bulkUpload = file_1;
                    _this.fileName = file_1.name;
                });
                reader.addEventListener('loadend', function () { return _this.progress = false; });
                reader.addEventListener('abort', function () {
                    _this.resetFileInput();
                    _this.toastrService.openToast(i2$1.ToastrTitle.ERROR, exports.BulkUploadEnum.INVALID, i2$1.ToastrColor.ERROR);
                });
                reader.addEventListener('error', function () {
                    _this.resetFileInput();
                    _this.toastrService.openToast(i2$1.ToastrTitle.ERROR, exports.BulkUploadEnum.UPLOAD_FILE_ERROR, i2$1.ToastrColor.ERROR);
                });
            }
        };
        BulkUploadDialogLib.prototype.resetFileInput = function () {
            this.fileName = null;
            this.bulkUpload = null;
            this.bulkUploadFile.nativeElement.value = null;
        };
        BulkUploadDialogLib.prototype.isFileAllowed = function (fileName) {
            var isFileAllowed = false;
            var allowedFiles = ['.xlsx', '.xls'];
            var regex = /(?:\.([^.]+))?$/;
            var extension = regex.exec(fileName);
            if (undefined !== extension && null !== extension) {
                allowedFiles.forEach(function (extnsn) {
                    if (extnsn === extension[0]) {
                        isFileAllowed = true;
                    }
                });
            }
            return isFileAllowed;
        };
        BulkUploadDialogLib.prototype.bulkUploadBtn = function (controlName) {
            document.getElementById(controlName).click();
        };
        BulkUploadDialogLib.prototype.toFormData = function (bulkUpload) {
            var formData = new FormData();
            formData.append('file', this.bulkUpload);
            return formData;
        };
        BulkUploadDialogLib.prototype.bulkUploadFun = function () {
            if (this.bulkUpload == null) {
                this.toastrService.openToast(i2$1.ToastrTitle.ERROR, exports.BulkUploadEnum.NO_FILE, i2$1.ToastrColor.ERROR);
                return;
            }
            this.dialogRef.close(this.bulkUpload);
        };
        return BulkUploadDialogLib;
    }());
    BulkUploadDialogLib.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLib, deps: [{ token: i1__namespace$4.MatDialogRef }, { token: i1$4.MAT_DIALOG_DATA }, { token: i2__namespace$1.ToastrService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    BulkUploadDialogLib.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BulkUploadDialogLib, selector: "app-bulk-upload-dialog", outputs: { fileUploaded: "fileUploaded" }, viewQueries: [{ propertyName: "bulkUploadFile", first: true, predicate: ["bulkUploadFile"], descendants: true }], ngImport: i0__namespace, template: "<h6 mat-dialog-title>\n    <strong class=\"dialogTitle\" [ngClass]=\"{'d-none': error}\">\n        Import\n    </strong>\n</h6>\n<hr />\n\n<div class=\"row\" [ngClass]=\"{'d-none': error}\">\n    <div class=\"centerAlign mt-2\">\n        <span class=\"material-symbols-outlined fs-2\">\n            download\n        </span>\n        <a [href]=\"templateFileSrc\" download class=\"ms-2\">Download template file</a>\n    </div><br />\n    <div class=\"text-center\">\n        <input #bulkUploadFile id=\"bulkUploadFile\" class=\"d-none\" type=\"file\" accept=\".xlsx, .xls\"\n            (change)=\"onFileChange($event)\" />\n\n        <button class=\"btn btn-primary mt-4\" type=\"button\" (click)=\"bulkUploadBtn('bulkUploadFile')\">\n            Upload file\n        </button>\n        <p class=\"mt-2\" *ngIf=\"!progress\">{{ fileName }}</p>\n    </div>\n\n    <div *ngIf=\"progress\" class=\"mt-1 mb-3\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 centerAlign\">\n                <mat-progress-bar class=\"rounded fileUploadBar\" mode=\"determinate\" [value]=\"loaded\"></mat-progress-bar>\n            </div>\n            <div class=\"col-sm-2 centerAlign\">\n                {{ loaded }} %\n            </div>\n        </div>\n    </div>\n\n    <div align=\"end\">\n        <button type=\"button\" class=\"button btn btn-secondary me-2\" mat-dialog-close>Cancel</button>\n        <button type=\"submit\" class=\"button btn btn-success ms-2\" (click)=\"bulkUploadFun()\">\n            Submit\n        </button>\n    </div>\n</div>\n", components: [{ type: i3__namespace$5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "mode", "value", "bufferValue"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1__namespace$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLib, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-bulk-upload-dialog',
                        templateUrl: './bulk-upload-dialog.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$4.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$4.MAT_DIALOG_DATA]
                        }] }, { type: i2__namespace$1.ToastrService }];
        }, propDecorators: { fileUploaded: [{
                    type: i0.Output
                }], bulkUploadFile: [{
                    type: i0.ViewChild,
                    args: ['bulkUploadFile']
                }] } });
    var BulkUploadDialogLibModule = /** @class */ (function () {
        function BulkUploadDialogLibModule() {
        }
        return BulkUploadDialogLibModule;
    }());
    BulkUploadDialogLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BulkUploadDialogLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLibModule, declarations: [BulkUploadDialogLib], imports: [i6.CommonModule,
            i1$4.MatDialogModule,
            i3$5.MatProgressBarModule], exports: [BulkUploadDialogLib] });
    BulkUploadDialogLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLibModule, imports: [[
                i6.CommonModule,
                i1$4.MatDialogModule,
                i3$5.MatProgressBarModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BulkUploadDialogLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6.CommonModule,
                            i1$4.MatDialogModule,
                            i3$5.MatProgressBarModule
                        ],
                        exports: [BulkUploadDialogLib],
                        declarations: [BulkUploadDialogLib]
                    }]
            }] });

    var FunnelFilterComponent = /** @class */ (function () {
        function FunnelFilterComponent() {
            this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
            this.header = 'Filter Key'; /* header value shown next to funnel icon */
            this.active = false; /* show filter icon with blue color or not */
            this.showSearchBar = true; /* show search bar or not */
            this.searchByPlaceholder = 'name'; /* search placehodler */
            this.searchBy = ['name']; /* in search bar which column used to search */
            this.selectAllLabel = 'All'; /* in dropdown first column for all */
            this.entityList = []; /* filter list */
            this.view = 'name'; /* values visible to user in dropdown */
            this.value = 'keyID'; /* value that gets passes to form control */
            this.resetFlag = false; /*reset all filter */
            this.mono = new i0.EventEmitter(); /* emits selected value for single select */
            this.multi = new i0.EventEmitter(); /* emits selected value for multiple select */
            this.selected = new i0.EventEmitter(); /* output for selected object for chip creation */
            this.all_entities_length = 0;
            this.filterFC = new i2$2.FormControl();
            this.init = true;
            this.all_entities_value = [];
            this.selected_entities = new Set();
            this.multiFilterApplied = false;
            this.searchUtil = new MatSelectSearchService(this.searchBy);
        }
        ;
        FunnelFilterComponent.prototype.ngOnInit = function () { };
        FunnelFilterComponent.prototype.ngOnChanges = function (changes) {
            if (changes.searchBy) {
                this.searchUtil.searchBy = this.searchBy;
            }
            if ((changes === null || changes === void 0 ? void 0 : changes.entityList) || ((changes === null || changes === void 0 ? void 0 : changes.resetFlag) && !changes.resetFlag.firstChange)) {
                this.addAllEntities();
            }
        };
        FunnelFilterComponent.prototype.addAllEntities = function () {
            var _this = this;
            if (this.entityList != null && this.entityList != undefined && this.entityList.length > 0) {
                if (this.type == 'multi') {
                    this.all_entities_length = this.entityList.length;
                    this.all_entities_value = ['all'];
                    this.entityList.forEach(function (entity) {
                        _this.selected_entities.add(entity);
                        _this.all_entities_value.push(entity[_this.value]);
                    });
                    this.selectFC.patchValue(this.all_entities_value);
                }
                this.searchUtil.entityArr = this.entityList;
                this.searchUtil.createSubscription();
            }
        };
        FunnelFilterComponent.prototype.selectionChange = function (value) { this.mono.emit(value); };
        FunnelFilterComponent.prototype.selectedEntity = function (entity) { this.selected.next(entity); };
        FunnelFilterComponent.prototype.resetOnNoChange = function (event) {
            if (event) {
                this.prev = this.selectFC.value;
                this.multiFilterApplied = false;
            }
            else {
                if (this.prev != this.selectFC.value && !this.multiFilterApplied) {
                    this.selectFC.patchValue(this.prev, { onlySelf: true });
                }
            }
        };
        FunnelFilterComponent.prototype.selectEntity = function (entity /* entity: json */) {
            if (!this.selected_entities.delete(entity)) {
                this.selected_entities.add(entity);
            }
            var k = this.selectFC.value.indexOf('all');
            if (k > -1) {
                if (this.selectFC.value.length > this.all_entities_length) {
                    this.selectFC.patchValue([]);
                }
                else if (this.selectFC.value.length == this.all_entities_length) {
                    this.selectFC.value.splice(k, 1);
                    this.selectFC.patchValue(this.selectFC.value);
                }
                else {
                    this.selectFC.patchValue(this.all_entities_value);
                }
            }
            else {
                if (this.selectFC.value.length == this.all_entities_length) {
                    this.selectFC.patchValue(this.all_entities_value);
                }
            }
        };
        FunnelFilterComponent.prototype.applyFilter = function () {
            if (this.selectFC.value.length == 0)
                return;
            this.multiFilterApplied = true;
            this.multi.emit(this.selectFC.value);
            this.selected.next(this.selected_entities);
        };
        FunnelFilterComponent.prototype.selectAllEntities = function () {
            var _this = this;
            if (!this.selectFC.value.includes('all') && this.selectFC.value.length > 0) {
                this.selectFC.reset([]);
                this.selected_entities.clear();
                return;
            }
            this.selectFC.patchValue(this.all_entities_value);
            this.entityList.forEach(function (entity) { return _this.selected_entities.add(entity); });
        };
        return FunnelFilterComponent;
    }());
    FunnelFilterComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FunnelFilterComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FunnelFilterComponent, selector: "funnel-filter", inputs: { header: "header", active: "active", showSearchBar: "showSearchBar", searchByPlaceholder: "searchByPlaceholder", searchBy: "searchBy", selectAllLabel: "selectAllLabel", entityList: "entityList", view: "view", value: "value", type: "type", selectFC: "selectFC", resetFlag: "resetFlag" }, outputs: { mono: "mono", multi: "multi", selected: "selected" }, usesOnChanges: true, ngImport: i0__namespace, template: "<!-- for single select -->\n<ng-container *ngIf=\"type == 'mono'\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 centerAlignVertical d-flex justify-content-start\">\n            {{ header }}\n            <div>\n                <button mat-icon-button (click)=\"select.open()\">\n                    <span class=\"fs-4 material-symbols-outlined funnel\" [ngClass]=\"{'text-primary': active}\">\n                        filter_alt\n                    </span>\n                    <div class=\"funnelFilterDD\">\n                        <mat-form-field>\n                            <mat-select #select [formControl]=\"selectFC\" (selectionChange)=\"selectionChange($event);\">\n                                <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                                <mat-option *ngIf=\"showSearchBar\">\n                                    <ngx-mat-select-search [formControl]=\"searchUtil.filterFC\"\n                                        [placeholderLabel]=\"'Search by '+ searchByPlaceholder\"\n                                        noEntriesFoundLabel=\"No match found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n\n                                <mat-option *ngFor=\"let entity of searchUtil.filteredEntities | async\"\n                                    [value]=\"entity?.[value]\" (click)=\"selectedEntity(entity)\">\n                                    <span class=\"d-flex justify-content-between\">\n                                        {{ entity?.[view] }}\n                                    </span>\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n<!-- for multiple select -->\n<ng-container *ngIf=\"type == 'multi'\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 centerAlignVertical justify-content-start pe-0\">\n            {{ header }}\n            <div>\n                <button mat-icon-button (click)=\"multiSelect.open()\">\n                    <span class=\"material-symbols-outlined fs-4 funnel\" [ngClass]=\"{'text-primary': active}\">\n                        filter_alt\n                    </span>\n                    <div class=\"funnelFilterDD\">\n                        <mat-form-field>\n                            <mat-select #multiSelect [formControl]=\"selectFC\" (openedChange)=\"resetOnNoChange($event)\"\n                                multiple>\n                                <mat-option *ngIf=\"showSearchBar\">\n                                    <ngx-mat-select-search [formControl]=\"searchUtil.filterFC\"\n                                        [placeholderLabel]=\"'Search by '+ searchByPlaceholder\"\n                                        noEntriesFoundLabel=\"No match found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n                                <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                                <mat-option value=\"all\" (click)=\"selectAllEntities()\">\n                                    {{ selectAllLabel }}\n                                </mat-option>\n                                <mat-option *ngFor=\"let entity of searchUtil.filteredEntities | async\"\n                                    [value]=\"entity[value]\" (click)=\"selectEntity(entity)\">\n                                    {{ entity[view] }}\n                                </mat-option>\n                                <div class=\"row m-0 dropdownFooter\">\n                                    <div class=\"col-sm-12\">\n                                        <button class=\"button btn btn-primary float-end m-1\"\n                                            [ngClass]=\"{'disableBtn': selectFC.value.length == 0}\"\n                                            (click)=\"selectFC.value.length == 0 ? null : applyFilter();\"\n                                            (click)=\"selectFC.value.length == 0 ? null : multiSelect.close();\" matRipple\n                                            [matRippleCentered]=\"MATERIAL_CONSTANT.matRippleCentered\">\n                                            Apply\n                                        </button>\n                                    </div>\n                                </div>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>", styles: [".funnelFilterDD{width:0;height:0;overflow:hidden}.dropdownFooter{position:sticky;bottom:0;background-color:#fff;padding:8px;z-index:1000}\n"], components: [{ type: i3__namespace$4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3__namespace$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i3__namespace$6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i4__namespace$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i5__namespace$4.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2__namespace$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3__namespace$6.MatSelectTrigger, selector: "mat-select-trigger" }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i6__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'funnel-filter',
                        templateUrl: './funnel-filter.component.html',
                        styleUrls: ['./funnel-filter.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { header: [{
                    type: i0.Input
                }], active: [{
                    type: i0.Input
                }], showSearchBar: [{
                    type: i0.Input
                }], searchByPlaceholder: [{
                    type: i0.Input
                }], searchBy: [{
                    type: i0.Input
                }], selectAllLabel: [{
                    type: i0.Input
                }], entityList: [{
                    type: i0.Input
                }], view: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], selectFC: [{
                    type: i0.Input
                }], resetFlag: [{
                    type: i0.Input
                }], mono: [{
                    type: i0.Output
                }], multi: [{
                    type: i0.Output
                }], selected: [{
                    type: i0.Output
                }] } });

    var FunnelFilterModule = /** @class */ (function () {
        function FunnelFilterModule() {
        }
        return FunnelFilterModule;
    }());
    FunnelFilterModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FunnelFilterModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterModule, declarations: [FunnelFilterComponent], imports: [i6.CommonModule,
            i2$2.FormsModule,
            i2$2.ReactiveFormsModule,
            i4$1.MatCardModule,
            i4$4.MatInputModule,
            i3$6.MatSelectModule,
            radio.MatRadioModule,
            i3$3.MatFormFieldModule,
            i5$4.NgxMatSelectSearchModule,
            slideToggle.MatSlideToggleModule,
            checkbox.MatCheckboxModule,
            i4$2.MatRippleModule,
            i3$6.MatSelectModule,
            i3$4.MatButtonModule], exports: [FunnelFilterComponent] });
    FunnelFilterModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterModule, imports: [[
                i6.CommonModule,
                i2$2.FormsModule,
                i2$2.ReactiveFormsModule,
                i4$1.MatCardModule,
                i4$4.MatInputModule,
                i3$6.MatSelectModule,
                radio.MatRadioModule,
                i3$3.MatFormFieldModule,
                i5$4.NgxMatSelectSearchModule,
                slideToggle.MatSlideToggleModule,
                checkbox.MatCheckboxModule,
                i4$2.MatRippleModule,
                i3$6.MatSelectModule,
                i3$4.MatButtonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FunnelFilterModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6.CommonModule,
                            i2$2.FormsModule,
                            i2$2.ReactiveFormsModule,
                            i4$1.MatCardModule,
                            i4$4.MatInputModule,
                            i3$6.MatSelectModule,
                            radio.MatRadioModule,
                            i3$3.MatFormFieldModule,
                            i5$4.NgxMatSelectSearchModule,
                            slideToggle.MatSlideToggleModule,
                            checkbox.MatCheckboxModule,
                            i4$2.MatRippleModule,
                            i3$6.MatSelectModule,
                            i3$4.MatButtonModule
                        ],
                        declarations: [FunnelFilterComponent],
                        exports: [FunnelFilterComponent]
                    }]
            }] });

    var BarChartComponent = /** @class */ (function () {
        function BarChartComponent() {
            this.renderFlag = 'LOADING';
            this.emissionData = [];
            this.seriesName = [];
        }
        BarChartComponent.prototype.ngOnInit = function () {
            this.noDataOption = {
                title: {
                    text: this.chartMetaData.title,
                    textStyle: {
                        color: this.chartMetaData.titleColor
                    },
                    padding: [7, 0, 0, 20],
                },
                graphic: NO_DATA_GRAPHIC,
                xAxis: { show: false },
                yAxis: { show: false },
            };
            this.chartDataCheck();
        };
        BarChartComponent.prototype.ngOnChanges = function (changes) {
            if (changes.chartData.currentValue) {
                this.chartDataCheck();
            }
        };
        BarChartComponent.prototype.chartDataCheck = function () {
            if (this.renderFlag == 'LOADING') {
                this.chartDataOption = LOADING_GRAPHIC;
            }
            else if (this.renderFlag == 'DATA') {
                this.drawChart();
            }
            else {
                this.chartDataOption = this.noDataOption;
            }
        };
        BarChartComponent.prototype.drawChart = function () {
            var _this = this;
            var seriesData = this.chartData.series.map(function (seriesItem, index) {
                _this.chartData.data.forEach(function (item) {
                    item.data.forEach(function (data) {
                        _this.emissionData.push(data);
                    });
                });
                _this.seriesName = _this.chartData.series;
                return {
                    name: _this.seriesName[index],
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: _this.emissionData,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value == null ? 'No data' : value + ' ' + _this.chartData.uomName;
                        }
                    },
                };
            });
            this.chartDataOption = {
                color: this.chartMetaData.color,
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: true },
                        magicType: { show: true, type: ['line'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                title: {
                    show: true,
                    text: "" + this.chartMetaData.title,
                    textStyle: {
                        color: this.chartMetaData.titleColor
                    },
                    padding: [7, 0, 0, 20],
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    },
                },
                legend: {
                    bottom: '1%',
                    left: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: this.chartData.data.map(function (m) { return ({
                        value: m.xAxisLabel,
                    }); }),
                    name: this.chartMetaData.xAxisName,
                    nameTextStyle: {
                        align: 'right',
                        verticalAlign: 'top',
                        padding: [30, 0, 0, 0],
                    },
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                },
                series: seriesData,
            };
        };
        return BarChartComponent;
    }());
    BarChartComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    BarChartComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData", chartMetaData: "chartMetaData" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite\">\n    <div class=\"card-body\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>\n\n\n\n", directives: [{ type: i1__namespace$6.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-bar-chart',
                        templateUrl: './bar-chart.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { renderFlag: [{
                    type: i0.Input
                }], chartData: [{
                    type: i0.Input
                }], chartMetaData: [{
                    type: i0.Input
                }] } });
    var BarChartModule = /** @class */ (function () {
        function BarChartModule() {
        }
        return BarChartModule;
    }());
    BarChartModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    BarChartModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, declarations: [BarChartComponent], imports: [i6.CommonModule, i1__namespace$6.NgxEchartsModule], exports: [BarChartComponent] });
    BarChartModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, imports: [[
                i6.CommonModule,
                i1$6.NgxEchartsModule.forRoot({
                    echarts: function () { return import('echarts'); }
                }),
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: BarChartModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6.CommonModule,
                            i1$6.NgxEchartsModule.forRoot({
                                echarts: function () { return import('echarts'); }
                            }),
                        ],
                        exports: [
                            BarChartComponent,
                        ],
                        declarations: [
                            BarChartComponent,
                        ]
                    }]
            }] });

    var routes$1 = [
        {
            path: '',
            loadChildren: function () { return Promise.resolve().then(function () { return view_module; }).then(function (m) { return m.ViewModule; }); }
        }
    ];
    var ApplicationRoutingModule = /** @class */ (function () {
        function ApplicationRoutingModule() {
        }
        return ApplicationRoutingModule;
    }());
    ApplicationRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ApplicationRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$2.RouterModule] });
    ApplicationRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationRoutingModule, imports: [[i1$2.RouterModule.forChild(routes$1)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes$1)],
                        exports: [i1$2.RouterModule]
                    }]
            }] });

    var ApplicationModule = /** @class */ (function () {
        function ApplicationModule() {
        }
        return ApplicationModule;
    }());
    ApplicationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ApplicationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationModule, imports: [i6.CommonModule,
            ApplicationRoutingModule] });
    ApplicationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationModule, imports: [[
                i6.CommonModule,
                ApplicationRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ApplicationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i6.CommonModule,
                            ApplicationRoutingModule
                        ]
                    }]
            }] });

    // /library/
    var ViewComponent = /** @class */ (function () {
        function ViewComponent(storageService, applicationService, userService) {
            this.storageService = storageService;
            this.applicationService = applicationService;
            this.userService = userService;
            this.isCurrentAppIsAccount = false;
            this.applicationFilter = [new i3.Application()];
            this.excludeApplicationKeyID = [i3.ApplicationKeyID.ADMIN_KEY_ID, i3.ApplicationKeyID.NETZERO_ADMIN_KEY_ID, i3.ApplicationKeyID.EMPLOYEE_KEY_ID];
            // userApplicationM: UserApplicationM[];
            this.userApplicationM = [new i3.UserApplication()];
            this.userM = new i2$3.User();
        }
        ViewComponent.prototype.ngOnInit = function () {
            this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
            this.currentAppKeyID = this.storageService.getStorage(['applicationKeyID']);
            this.userID = this.storageService.getStorage(['userID']);
            this.isCurrentAppIsAccountFnc(this.currentAppKeyID);
            this.getAllApplication();
            this.getUserByID();
            if (!this.isCurrentAppIsAccount) {
                this.getApplicationByUserAccess();
            }
        };
        ViewComponent.prototype.getAllApplication = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.applicationService.getAllApplication()];
                        case 1:
                            _a.applicationM = (_b.sent());
                            this.applicationFilter = this.applicationM.filter(function (applicationres) { return !_this.excludeApplicationKeyID.includes(applicationres.keyID); });
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewComponent.prototype.getApplicationByUserAccess = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.applicationService.getSubscribedApplicationsByOrgID(this.currentOrgID)];
                        case 1:
                            _a.userApplicationM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewComponent.prototype.getUserByID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.userService.getUserByID(this.userID)];
                        case 1:
                            _a.userM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        ViewComponent.prototype.getApplicationLogoWithoutName = function (keyID) {
            var logo;
            logo = this.applicationService.getApplicationLogoWithoutName(keyID);
            return logo;
        };
        ViewComponent.prototype.isCurrentAppIsAccountFnc = function (appKeyID) {
            this.isCurrentAppIsAccount = appKeyID == i3.ApplicationKeyID.ACCOUNT_KEY_ID ? true : false;
        };
        ViewComponent.prototype.isAccess = function (applicationID) {
            return this.userApplicationM.some(function (item) { return item.id == applicationID; });
        };
        return ViewComponent;
    }());
    ViewComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewComponent, deps: [{ token: i2__namespace.StorageService }, { token: i3__namespace.ApplicationService }, { token: i2__namespace$2.UserService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ViewComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ViewComponent, selector: "app-view", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100 mb-4 appTile\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">\n                Hello {{ userM.firstName }}{{ userM.lastName ? ' ' + userM.lastName : ''}}, welcome to The\n                Sustainability Cloud! <img class=\"celebrateEmoji\" src=\"/assets/images/celebrate-emoji.png\">\n            </div>\n            <div class=\"pageSubtitle\">\n                Let's transition your business to netzero.\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"20px grid\">\n            <div class=\"appCardOuter\" fxFlex=\"50%\" fxFlex.xs=\"50%\" fxFlex.sm=\"50%\"\n                *ngFor=\"let applications of applicationFilter\">\n\n                <a href=\"{{ applications.url }}\" target=\"_blank\">\n                    <mat-card class=\"border appCardInner cardOverwrite cursorPointer matHeader\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <span class=\"centerAlign\">\n                                    <img class=\"appImg\" [src]=\"getApplicationLogoWithoutName(applications.keyID)\"\n                                        alt=\"{{ applications.name }}\">\n                                </span>\n                            </div>\n                            <div class=\"col-sm-9\">\n                                <mat-card-header>\n                                    <mat-card-title-group>\n                                        <mat-card-title class=\"ps-0\">\n                                            <p class=\"fs-4 fw-bold\">\n                                                {{ applications.name }}\n                                                <span *ngIf=\"!isCurrentAppIsAccount && isAccess(applications.id)\">\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n                                                        class=\"check-circle-fill flex-shrink-0 me-2 mb-2 ms-2 tickIcon text-success\"\n                                                        viewBox=\"0 0 16 16\" role=\"img\" aria-label=\"Success:\">\n                                                        <path\n                                                            d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n                                                    </svg>\n                                                </span>\n                                            </p>\n                                        </mat-card-title>\n                                    </mat-card-title-group>\n                                </mat-card-header>\n                                <mat-card-content>\n                                    <p>{{ applications.description }}</p>\n                                </mat-card-content>\n                            </div>\n                        </div>\n                    </mat-card>\n                </a>\n\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".appTile .celebrateEmoji{max-width:20px}.appTile .appImg{max-width:70%;height:auto}.appTile .appCardOuter .mat-card{min-height:70px!important}.appTile .appCardInner{height:8rem;transition:all .3s cubic-bezier(.25,.8,.25,1)}.appTile .appCardInner:hover{box-shadow:0 1px 20px #0000,0 10px 10px #0000000d!important}.appTile .mat-card-subtitle,.appTile .mat-card-content{font-size:13px}.appTile .mat-card-title{font-size:16px!important;margin:0!important;color:#495057}.appTile .mat-card-title p{margin-bottom:0!important}.appTile .mat-card-content{color:gray}.appTile .tickIcon{width:24px;height:24px}\n"], components: [{ type: i4__namespace$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i4__namespace$3.MatCardHeader, selector: "mat-card-header" }, { type: i4__namespace$3.MatCardTitleGroup, selector: "mat-card-title-group" }], directives: [{ type: i5__namespace$5.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i5__namespace$5.DefaultLayoutGapDirective, selector: "  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]", inputs: ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5__namespace$5.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i4__namespace$3.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4__namespace$3.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-view',
                        templateUrl: './view.component.html',
                        styleUrls: ['./view.component.scss'
                        ]
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }, { type: i3__namespace.ApplicationService }, { type: i2__namespace$2.UserService }]; } });

    var routes = [
        {
            path: '',
            component: ViewComponent
        }
    ];
    var ViewRoutingModule = /** @class */ (function () {
        function ViewRoutingModule() {
        }
        return ViewRoutingModule;
    }());
    ViewRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ViewRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$2.RouterModule] });
    ViewRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, imports: [[i1$2.RouterModule.forChild(routes)], i1$2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$2.RouterModule.forChild(routes)],
                        exports: [i1$2.RouterModule]
                    }]
            }] });

    var ViewModule = /** @class */ (function () {
        function ViewModule() {
        }
        return ViewModule;
    }());
    ViewModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ViewModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, declarations: [ViewComponent], imports: [i6.CommonModule,
            flexLayout.FlexLayoutModule,
            i4$1.MatCardModule,
            ViewRoutingModule] });
    ViewModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, imports: [[
                i6.CommonModule,
                flexLayout.FlexLayoutModule,
                i4$1.MatCardModule,
                ViewRoutingModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ViewModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ViewComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            flexLayout.FlexLayoutModule,
                            i4$1.MatCardModule,
                            ViewRoutingModule
                        ]
                    }]
            }] });

    var view_module = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ViewModule: ViewModule
    });

    var MessageAlertComponent = /** @class */ (function () {
        function MessageAlertComponent() {
            this.messageAlertTypeEnum = exports.MessageAlertTypeEnum;
            this.label = '';
        }
        MessageAlertComponent.prototype.ngOnInit = function () {
        };
        MessageAlertComponent.prototype.ngOnChanges = function (changes) {
            if (changes.labelInp && this.labelInp) {
                this.label = this.labelInp;
            }
        };
        return MessageAlertComponent;
    }());
    MessageAlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MessageAlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MessageAlertComponent, selector: "lib-message-alert", inputs: { messageAlertTypeInp: "messageAlertTypeInp", messageAlertIconInp: "messageAlertIconInp", labelInp: "labelInp", contentInp: "contentInp" }, usesOnChanges: true, ngImport: i0__namespace, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n    <symbol id=\"check-circle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n    </symbol>\n    <symbol id=\"info-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\" />\n    </symbol>\n    <symbol id=\"exclamation-triangle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\" />\n    </symbol>\n</svg>\n\n<div class=\"pt-2\">\n    <div class=\"alert m-0 centerAlignVertical roundedBorder\" [ngClass]=\"{\n        'alert-primary': messageAlertTypeInp == messageAlertTypeEnum.INFO,\n        'alert-success': messageAlertTypeInp == messageAlertTypeEnum.SUCCESS,\n        'alert-warning': messageAlertTypeInp == messageAlertTypeEnum.WARNING,\n        'alert-danger': messageAlertTypeInp == messageAlertTypeEnum.DANGER\n    }\">\n        <div class=\"d-flex align-items-center\">\n            <svg class=\"bi flex-shrink-0 me-3 cardIcon\">\n                <use [attr.xlink:href]=\"messageAlertIconInp\" />\n            </svg>\n            <div class=\"endAlignVertical\">\n                <div *ngIf=\"labelInp\"><strong>{{ label }}</strong></div>\n                <div [class.mt-1]=\"labelInp\">\n                    {{ contentInp }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i6__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-message-alert',
                        templateUrl: './message-alert.component.html',
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { messageAlertTypeInp: [{
                    type: i0.Input
                }], messageAlertIconInp: [{
                    type: i0.Input
                }], labelInp: [{
                    type: i0.Input
                }], contentInp: [{
                    type: i0.Input
                }] } });

    var MessageAlertModule = /** @class */ (function () {
        function MessageAlertModule() {
        }
        return MessageAlertModule;
    }());
    MessageAlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MessageAlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertModule, declarations: [MessageAlertComponent], imports: [i6.CommonModule], exports: [MessageAlertComponent] });
    MessageAlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertModule, imports: [[
                i6.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MessageAlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MessageAlertComponent
                        ],
                        imports: [
                            i6.CommonModule
                        ],
                        exports: [
                            MessageAlertComponent
                        ]
                    }]
            }] });

    var InfoDialogComponent = /** @class */ (function () {
        function InfoDialogComponent(data, dialogRef) {
            this.data = data;
            this.dialogRef = dialogRef;
            this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
            this.title = 'Title';
            this.body = 'Body';
            this.dialogRef.disableClose = false;
        }
        InfoDialogComponent.prototype.ngOnInit = function () {
            this.title = this.data['title'];
            this.body = this.data['body'];
        };
        return InfoDialogComponent;
    }());
    InfoDialogComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogComponent, deps: [{ token: i1$4.MAT_DIALOG_DATA }, { token: i1__namespace$4.MatDialogRef }], target: i0__namespace.ɵɵFactoryTarget.Component });
    InfoDialogComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: InfoDialogComponent, selector: "app-info-dialog", ngImport: i0__namespace, template: "<h6 mat-dialog-title class=\"dialogTitle mb-0\">\n    <div class=\"d-flex align-items-center\">\n        <strong> {{ title }} </strong>\n    </div>\n</h6>\n\n<mat-dialog-content class=\"mat-typography\">\n    <div [innerHTML]=\"body\"></div>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n    <button class=\"button btn btn-secondary px-4\" type=\"button\" mat-dialog-close matRipple\n    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        Close\n    </button>\n</mat-dialog-actions>\n", styles: [""], directives: [{ type: i1__namespace$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1__namespace$4.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }, { type: i1__namespace$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i4__namespace$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-info-dialog',
                        templateUrl: './info-dialog.component.html',
                        styles: ['']
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$4.MAT_DIALOG_DATA]
                        }] }, { type: i1__namespace$4.MatDialogRef }];
        } });

    var InfoDialogModule = /** @class */ (function () {
        function InfoDialogModule() {
        }
        return InfoDialogModule;
    }());
    InfoDialogModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    InfoDialogModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogModule, declarations: [InfoDialogComponent], imports: [i1$4.MatDialogModule,
            i4$2.MatRippleModule] });
    InfoDialogModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogModule, imports: [[
                i1$4.MatDialogModule,
                i4$2.MatRippleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InfoDialogModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [InfoDialogComponent],
                        imports: [
                            i1$4.MatDialogModule,
                            i4$2.MatRippleModule
                        ],
                    }]
            }] });

    /*
     * Public API Surface of tsc-common
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ApplicationDrawerComponent = ApplicationDrawerComponent;
    exports.ApplicationDrawerModule = ApplicationDrawerModule;
    exports.ApplicationModule = ApplicationModule;
    exports.BackButtonComponent = BackButtonComponent;
    exports.BackButtonModule = BackButtonModule;
    exports.BarChartComponent = BarChartComponent;
    exports.BarChartModule = BarChartModule;
    exports.BulkUploadDialogLib = BulkUploadDialogLib;
    exports.BulkUploadDialogLibModule = BulkUploadDialogLibModule;
    exports.COMMON_CONSTANT = COMMON_CONSTANT;
    exports.COMMON_STATUS_CONSTANT = COMMON_STATUS_CONSTANT;
    exports.CommonEvent = CommonEvent;
    exports.Country = Country;
    exports.CountryService = CountryService;
    exports.DateFilterComponent = DateFilterComponent;
    exports.DateFilterModule = DateFilterModule;
    exports.DialogOneComponent = DialogOneComponent;
    exports.DialogOneModule = DialogOneModule;
    exports.EllipsisPipeModule = EllipsisPipeModule;
    exports.EllipsisPipeService = EllipsisPipeService;
    exports.FREQUENCY_CONSTANT = FREQUENCY_CONSTANT;
    exports.FileService = FileService;
    exports.FooterOneComponent = FooterOneComponent;
    exports.FooterOneModule = FooterOneModule;
    exports.FooterThreeComponent = FooterThreeComponent;
    exports.FooterThreeModule = FooterThreeModule;
    exports.FooterTwoComponent = FooterTwoComponent;
    exports.FooterTwoModule = FooterTwoModule;
    exports.FunnelFilterComponent = FunnelFilterComponent;
    exports.FunnelFilterModule = FunnelFilterModule;
    exports.GENDER_CONSTANT = GENDER_CONSTANT;
    exports.HeaderOneComponent = HeaderOneComponent;
    exports.HeaderOneModule = HeaderOneModule;
    exports.ImageService = ImageService;
    exports.InfoDialogComponent = InfoDialogComponent;
    exports.InfoDialogModule = InfoDialogModule;
    exports.InterceptorOneService = InterceptorOneService;
    exports.LOADING_GRAPHIC = LOADING_GRAPHIC;
    exports.LayoutDrawerComponent = LayoutDrawerComponent;
    exports.LayoutDrawerModule = LayoutDrawerModule;
    exports.LayoutOneComponent = LayoutOneComponent;
    exports.LayoutOneModule = LayoutOneModule;
    exports.LayoutTwoComponent = LayoutTwoComponent;
    exports.LayoutTwoModule = LayoutTwoModule;
    exports.LoaderOneComponent = LoaderOneComponent;
    exports.LoaderOneInterceptor = LoaderOneInterceptor;
    exports.LoaderOneModule = LoaderOneModule;
    exports.LoaderOneService = LoaderOneService;
    exports.LookupService = LookupService;
    exports.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    exports.MatSelectSearchService = MatSelectSearchService;
    exports.MessageAlertComponent = MessageAlertComponent;
    exports.MessageAlertModule = MessageAlertModule;
    exports.NO_DATA_GRAPHIC = NO_DATA_GRAPHIC;
    exports.OrgDrawerHeaderComponent = OrgDrawerHeaderComponent;
    exports.OrgDrawerHeaderModule = OrgDrawerHeaderModule;
    exports.OrganizationDrawerComponent = OrganizationDrawerComponent;
    exports.OrganizationDrawerModule = OrganizationDrawerModule;
    exports.ProfileLogoUploadComponent = ProfileLogoUploadComponent;
    exports.ProfileLogoUploadModule = ProfileLogoUploadModule;
    exports.Response = Response;
    exports.STATUS_CONSTANT = STATUS_CONSTANT;
    exports.SearchBarOneComponent = SearchBarOneComponent;
    exports.SearchBarOneModule = SearchBarOneModule;
    exports.SearchBarTwoComponent = SearchBarTwoComponent;
    exports.SearchBarTwoModule = SearchBarTwoModule;
    exports.SideNavComponent = SideNavComponent;
    exports.SideNavModule = SideNavModule;
    exports.SkeletonComponent = SkeletonComponent;
    exports.SkeletonModule = SkeletonModule;
    exports.State = State;
    exports.StateService = StateService;
    exports.Static = Static;
    exports.StaticPageOne = StaticPageOne;
    exports.StaticPageOneComponent = StaticPageOneComponent;
    exports.StaticPageOneJson = StaticPageOneJson;
    exports.StaticPageOneModule = StaticPageOneModule;
    exports.StaticPageThreeComponent = StaticPageThreeComponent;
    exports.StaticPageThreeJson = StaticPageThreeJson;
    exports.StaticPageThreeModule = StaticPageThreeModule;
    exports.StaticPageTwo = StaticPageTwo;
    exports.StaticPageTwoComponent = StaticPageTwoComponent;
    exports.StaticPageTwoModule = StaticPageTwoModule;
    exports.StatusService = StatusService;
    exports.TABLE_CONSTANT = TABLE_CONSTANT;
    exports.TSCCommonService = TSCCommonService;
    exports.TimeZone = TimeZone;
    exports.TimeZoneService = TimeZoneService;
    exports.TimezoneNotFoundComponent = TimezoneNotFoundComponent;
    exports.TimezoneNotFoundModule = TimezoneNotFoundModule;
    exports.TscCommonComponent = TscCommonComponent;
    exports.TscCommonModule = TscCommonModule;
    exports.TscCommonService = TscCommonService;
    exports.TypeConfirmationDialog = TypeConfirmationDialog;
    exports.TypeConfirmationDialogModule = TypeConfirmationDialogModule;
    exports.UserDrawerComponent = UserDrawerComponent;
    exports.UserDrawerModule = UserDrawerModule;
    exports.ViewModule = ViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-tsc-common.umd.js.map
