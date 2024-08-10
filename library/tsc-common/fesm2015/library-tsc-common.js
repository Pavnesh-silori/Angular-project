import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Pipe, Inject, EventEmitter, Input, Output, ViewChild, Directive, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, throwError, Subject, ReplaySubject } from 'rxjs';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import { finalize, catchError, map, takeUntil } from 'rxjs/operators';
import * as i1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i1$2 from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@library/storage-service';
import * as i2$1 from '@library/toastr-service';
import { ToastrTitle, ToastrColor } from '@library/toastr-service';
import * as i3 from '@library/application-service';
import { ApplicationKeyID, Application, UserApplication } from '@library/application-service';
import * as i5 from '@library/authentication-service';
import { __awaiter, __decorate } from 'tslib';
import * as i2$3 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import * as i6$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i5$1 from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig, NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i4 from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { select } from '@angular-redux/store';
import * as i7 from '@library/feature-service';
import { FeatureDirectiveModule2 } from '@library/feature-service';
import * as i8 from '@library/rbac-service';
import { RBACDirectiveModule2 } from '@library/rbac-service';
import * as i2$2 from '@library/user-service';
import { User, ProfileImg } from '@library/user-service';
import * as i5$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i3$1 from '@library/layout-service';
import { Layout } from '@library/layout-service';
import * as i4$3 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3$2 from '@library/organization-service';
import { OrgType, OrgStatus, OrgSiteAccessType, Organization, OrgSiteAccess } from '@library/organization-service';
import * as i4$2 from '@library/facility-service';
import { Facility } from '@library/facility-service';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import * as i1$3 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i4$1 from '@angular/material/core';
import { MatRippleModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';
import * as i4$5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import * as i4$4 from '@ngx-loading-bar/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import * as i1$4 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i3$4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4$6 from 'ngx-image-cropper';
import { base64ToFile, ImageCropperModule } from 'ngx-image-cropper';
import * as i5$3 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i4$7 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i9 from 'ngx-daterangepicker-material';
import { DaterangepickerDirective, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as i1$5 from 'ngx-skeleton-loader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import * as i3$5 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import * as i3$6 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i5$4 from 'ngx-mat-select-search';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import * as i1$6 from 'ngx-echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as i5$5 from '@angular/flex-layout/flex';

class TscCommonService {
    constructor() { }
}
TscCommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TscCommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TscCommonComponent {
    constructor() { }
    ngOnInit() {
    }
}
TscCommonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TscCommonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TscCommonComponent, selector: "lib-tsc-common", ngImport: i0, template: `
    <p>
      tsc-common works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-tsc-common',
                    template: `
    <p>
      tsc-common works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class TscCommonModule {
    static forRoot(environment) {
        return {
            ngModule: TscCommonModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TscCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TscCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonModule, declarations: [TscCommonComponent], exports: [TscCommonComponent] });
TscCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscCommonModule, decorators: [{
            type: NgModule,
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

class Response {
}

class StaticPageOne {
    constructor() {
        this.cardClass = null;
        this.title = null;
        this.body = null;
        this.imgPath = null;
        this.imgClass = null;
        this.imgAlt = null;
        this.containsHeaderFooter = null;
    }
}

class StaticPageTwo {
    constructor() {
        this.body = null;
    }
}

class Country {
}

class State {
}

class TimeZone {
}

// export class LookupValue implements LookupValueM {
//     code: string;
//     description: string;
//     id: number;
//     keyID: string;
//     lookupKey: string;
//     name: string;
// }

class Static {
}

const COMMON_CONSTANT = {
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

const TABLE_CONSTANT = {
    TABLE_NO_DATA: 'No Data',
    DEFAULT_PAGE_SIZE: 50,
    PAGE_SIZE_OPTION: [50, 100, 150, 200]
    // DEFAULT_PAGE_SIZE: 2,
    // PAGE_SIZE_OPTION: [2, 4, 6, 8],
};

const FREQUENCY_CONSTANT = [
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

const MATERIAL_CONSTANT = {
    MAT_RIPPLE_CENTER: true
};

const LOADING_GRAPHIC = {
    graphic: {
        elements: [
            {
                type: 'group',
                left: 'center',
                top: 'center',
                children: new Array(7).fill(0).map((val, i) => ({
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
                }))
            }
        ]
    }
};
const NO_DATA_GRAPHIC = {
    type: 'text',
    left: 'center',
    top: 'middle',
    style: {
        fill: '#6c757d',
        fontSize: 25,
        text: "No Data",
    }
};

const GENDER_CONSTANT = [
    {
        name: 'Male',
        keyID: 'MALE'
    },
    {
        name: 'Female',
        keyID: 'FEMALE'
    }
];

const STATUS_CONSTANT = [
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
const COMMON_STATUS_CONSTANT = [
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

var PageTitleEnum;
(function (PageTitleEnum) {
    PageTitleEnum["CREATE"] = "Create";
    PageTitleEnum["UPDATE"] = "Update";
    PageTitleEnum["ADD"] = "Add";
})(PageTitleEnum || (PageTitleEnum = {}));
var ComponentSourceEnum;
(function (ComponentSourceEnum) {
    ComponentSourceEnum["PAGE"] = "PAGE";
    ComponentSourceEnum["DIALOG"] = "DIALOG";
})(ComponentSourceEnum || (ComponentSourceEnum = {}));

var ButtonLabelEnum;
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
})(ButtonLabelEnum || (ButtonLabelEnum = {}));
var ButtonTooltipEnum;
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
})(ButtonTooltipEnum || (ButtonTooltipEnum = {}));

var InvalidForm;
(function (InvalidForm) {
    InvalidForm["INVALID_FORM_TITLE"] = "Invalid details!";
    InvalidForm["INVALID_FORM_MESSAGE"] = "Please fill valid details.";
})(InvalidForm || (InvalidForm = {}));
var FormAction;
(function (FormAction) {
    FormAction["CREATE"] = "CREATE";
    FormAction["UPDATE"] = "UPDATE";
    FormAction["ADD"] = "ADD";
    FormAction["DELETE"] = "DELETE";
    FormAction["CONFIRM"] = "CONFIRM";
    FormAction["VIEW"] = "VIEW";
})(FormAction || (FormAction = {}));
var FormErrorEnum;
(function (FormErrorEnum) {
    FormErrorEnum["REQUIRED"] = "Required field";
    FormErrorEnum["EMAIL"] = "Invalid email";
    FormErrorEnum["NEGATIVE"] = "This field can't be negative";
})(FormErrorEnum || (FormErrorEnum = {}));

var MaterialFormFieldAppearance;
(function (MaterialFormFieldAppearance) {
    MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_NONE"] = "none";
    MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_STANDARD"] = "standard";
    MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE"] = "outline";
    MaterialFormFieldAppearance["FORM_FIELD_APPEARANCE_FILL"] = "fill";
})(MaterialFormFieldAppearance || (MaterialFormFieldAppearance = {}));

var FrequencyEnum;
(function (FrequencyEnum) {
    FrequencyEnum["DAILY_KEY_ID"] = "DAILY";
    FrequencyEnum["MONTHLY_KEY_ID"] = "MONTHLY";
    FrequencyEnum["YEARLY_KEY_ID"] = "YEARLY";
    FrequencyEnum["CUSTOM_KEY_ID"] = "CUSTOM";
})(FrequencyEnum || (FrequencyEnum = {}));
var Frequency;
(function (Frequency) {
    Frequency["DAILY"] = "DAILY";
    Frequency["MONTHLY"] = "MONTHLY";
    Frequency["YEARLY"] = "YEARLY";
    Frequency["CUSTOM"] = "CUSTOM";
})(Frequency || (Frequency = {}));

var DialogEnum;
(function (DialogEnum) {
    DialogEnum["DELETE_DR"] = "DELETE";
    DialogEnum["SUCCESS_DR"] = "SUCCESS";
    DialogEnum["CLOSE_DR"] = "CLOSE";
    DialogEnum["CONFIRM_DR"] = "CONFIRM";
    DialogEnum["CANCEL_DR"] = "CANCEL";
})(DialogEnum || (DialogEnum = {}));
var DialogResponseEnum;
(function (DialogResponseEnum) {
    DialogResponseEnum["NO"] = "NO";
    DialogResponseEnum["YES"] = "YES";
    DialogResponseEnum["CANCEL"] = "CANCEL";
    DialogResponseEnum["SUCCESS"] = "SUCCESS";
})(DialogResponseEnum || (DialogResponseEnum = {}));

var DialogOneEnum;
(function (DialogOneEnum) {
    DialogOneEnum["DELETE"] = "delete";
    DialogOneEnum["INFO"] = "info";
    DialogOneEnum["CONFIRMATION"] = "confirmation";
})(DialogOneEnum || (DialogOneEnum = {}));

var BulkUploadEnum;
(function (BulkUploadEnum) {
    BulkUploadEnum[BulkUploadEnum["MAX_FILE_SIZE"] = 10485760] = "MAX_FILE_SIZE";
    BulkUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .xlsx";
    BulkUploadEnum["INVAID_FILE_SIZE_ERROR"] = "Invalid file size! The size limit for file is 100.0 MB. Reduce the file size and try again.";
    BulkUploadEnum["INVALID"] = "Something went wrong!";
    BulkUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
    BulkUploadEnum["NO_FILE"] = "Please upload a file!";
})(BulkUploadEnum || (BulkUploadEnum = {}));

var StatusEnum;
(function (StatusEnum) {
    StatusEnum["ACTIVE_STATUS"] = "Active";
    StatusEnum["INACTIVE_STATUS"] = "Inactive";
})(StatusEnum || (StatusEnum = {}));

var ImageTypeEnum;
(function (ImageTypeEnum) {
    ImageTypeEnum["USER_PROFILE"] = "USER_PROFILE";
    ImageTypeEnum["ORG_LOGO"] = "ORG_LOGO";
    ImageTypeEnum["FACILITY_LOGO"] = "FACILITY_LOGO";
    ImageTypeEnum["REGULATOR_LOGO"] = "REGULATOR_LOGO";
})(ImageTypeEnum || (ImageTypeEnum = {}));
var ImageDefaultPathEnum;
(function (ImageDefaultPathEnum) {
    ImageDefaultPathEnum["USER_PROFILE"] = "/assets/images/default-profile-img.jpeg";
    ImageDefaultPathEnum["ORG_LOGO"] = "/assets/images/org-default.jpeg";
    ImageDefaultPathEnum["FACILITY_LOGO"] = "/assets/images/org-default.jpeg";
    ImageDefaultPathEnum["REGULATOR_LOGO"] = "/assets/images/default-img.jpeg";
    ImageDefaultPathEnum["DEFAULT_LOGO"] = "/assets/images/default-img.jpeg";
})(ImageDefaultPathEnum || (ImageDefaultPathEnum = {}));
var ImageErrorEnum;
(function (ImageErrorEnum) {
    ImageErrorEnum["INVALID_IMAGE_SIZE_ERROR"] = "Invalid file size! The size limit for images is 10.0 MB. Reduce the image size and try again.";
    ImageErrorEnum["INVALID_IMAGE_TYPE_ERROR"] = "Invalid file type! Please upload the following file types: .jpeg, .jpg, .png.";
    ImageErrorEnum["INVALID_IMAGE_NUMBER_ERROR"] = "Multiple images are not allowed. Select/Drop single image only.";
})(ImageErrorEnum || (ImageErrorEnum = {}));

var MessageAlertTypeEnum;
(function (MessageAlertTypeEnum) {
    MessageAlertTypeEnum["INFO"] = "INFO";
    MessageAlertTypeEnum["SUCCESS"] = "SUCCESS";
    MessageAlertTypeEnum["WARNING"] = "WARNING";
    MessageAlertTypeEnum["DANGER"] = "DANGER";
})(MessageAlertTypeEnum || (MessageAlertTypeEnum = {}));
var MessageAlertIconEnum;
(function (MessageAlertIconEnum) {
    MessageAlertIconEnum["INFO_ICON"] = "#info-fill";
    MessageAlertIconEnum["SUCCESS_ICON"] = "#check-circle-fill";
    MessageAlertIconEnum["WARNING_ICON"] = "#exclamation-triangle-fill";
    MessageAlertIconEnum["DANGER_ICON"] = "#exclamation-triangle-fill";
})(MessageAlertIconEnum || (MessageAlertIconEnum = {}));

var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["PDF"] = "pdf";
    FileTypeEnum["CSV"] = "csv";
    FileTypeEnum["XLSX"] = "xlsx";
})(FileTypeEnum || (FileTypeEnum = {}));
var FileUploadEnum;
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
})(FileUploadEnum || (FileUploadEnum = {}));

var NocFileUploadEnum;
(function (NocFileUploadEnum) {
    NocFileUploadEnum[NocFileUploadEnum["MAX_FILE_SIZE"] = 10485760] = "MAX_FILE_SIZE";
    NocFileUploadEnum["INVALID_FILE_TYPE_ERROR"] = "Invalid file type! Please upload file types: .pdf";
    NocFileUploadEnum["INVAID_FILE_SIZE_ERROR"] = "Invalid file size! The size limit for file is 10.0 MB. Reduce the file size and try again.";
    NocFileUploadEnum["INVALID"] = "Something went wrong!";
    NocFileUploadEnum["UPLOAD_FILE_ERROR"] = "Error while uploading file!";
    NocFileUploadEnum["NO_FILE"] = "Please upload a file!";
})(NocFileUploadEnum || (NocFileUploadEnum = {}));

var ActivityFormTypeEnum;
(function (ActivityFormTypeEnum) {
    ActivityFormTypeEnum["PFF"] = "pff";
    ActivityFormTypeEnum["AD_HOC"] = "ad-hoc";
})(ActivityFormTypeEnum || (ActivityFormTypeEnum = {}));

class StaticPageOneJson {
}
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
class StaticPageThreeJson {
}
StaticPageThreeJson.featureNotConfigure = {
    cardClass: 'cardHeightWithHF',
    title: 'Feature not configured!',
    body: 'Oops! Looks like this feature is not configured yet.<br />Contact <span class="text-primary">support@thesustainabilitycloud.com.',
    imgPath: '/assets/images/feature-not-configure.jpg',
    imgClass: 'pageOneDefaultImage',
    imgAlt: 'Feature not configured',
    containsHeaderFooter: false
};

class CommonEvent {
    constructor() {
        this.layoutChange = new BehaviorSubject('YES');
    }
}
CommonEvent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonEvent, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonEvent.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonEvent, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonEvent, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class TSCCommonService {
    constructor(location) {
        this.location = location;
    }
    nullToBlank(value) {
        return value ? value : '';
    }
    back() {
        this.location.back();
    }
    formatLargeNumber(value, roundOff, decimalPlace) {
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
    }
    removeSelectAllID(arr) {
        return arr.filter(item => item != -1);
    }
    getUniqueObject(objList, key, value) {
        return objList.find(obj => obj[key] == value);
    }
    getButtonLabel(action) {
        let label;
        switch (action) {
            case FormAction.CREATE:
                label = ButtonLabelEnum.CREATE_BTN_LABEL;
                break;
            case FormAction.UPDATE:
                label = ButtonLabelEnum.UPDATE_BTN_LABEL;
                break;
            default:
                label = ButtonLabelEnum.SAVE_BTN_LABEL;
                break;
        }
        return label;
    }
    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
TSCCommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, deps: [{ token: i6.Location }], target: i0.ɵɵFactoryTarget.Injectable });
TSCCommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i6.Location }]; } });

class LoaderOneComponent {
    constructor(loaderOneService) {
        this.loaderOneService = loaderOneService;
        this.isLoading = this.loaderOneService.isLoading;
    }
}
LoaderOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneComponent, deps: [{ token: LoaderOneService }], target: i0.ɵɵFactoryTarget.Component });
LoaderOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LoaderOneComponent, selector: "app-loader-one", ngImport: i0, template: "<!-- loader -->\n<div class=\"d-flex justify-content-center\" *ngIf=\"isLoading | async\">\n    <div class=\"d-flex m-auto loaderContainer\">\n        <mat-spinner class=\"m-auto\"></mat-spinner>\n    </div>\n</div>\n<!-- /loader/ -->\n", styles: [".loaderContainer{position:fixed;height:100vh;width:100vw;background:black;opacity:.7;z-index:99999}\n"], components: [{ type: i1.MatSpinner, selector: "mat-spinner", inputs: ["color"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-loader-one',
                    templateUrl: './loader-one.component.html',
                    styleUrls: ['./loader-one.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: LoaderOneService }]; } });
class LoaderOneService {
    constructor() {
        this.isLoading = new BehaviorSubject(false);
    }
    show() {
        // console.log('in show loader');
        this.isLoading.next(true);
    }
    hide() {
        // console.log('in hide loader');
        this.isLoading.next(false);
    }
}
LoaderOneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoaderOneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class LoaderOneInterceptor {
    constructor(loaderOneService) {
        this.loaderOneService = loaderOneService;
        this.httpCount = 0;
    }
    intercept(request, next) {
        let skipLoader = request.headers.get('skipLoader');
        if (skipLoader == 'YES') {
            // console.log('skipLoader');
        }
        else {
            this.httpCount++;
            this.loaderOneService.show();
            return next.handle(request).pipe(finalize(() => {
                this.httpCount--;
                if (this.httpCount == 0) {
                    this.loaderOneService.hide();
                    // console.log('return next');
                }
            }));
        }
        return next.handle(request).pipe(finalize(() => {
            // console.log('return skipLoader');
        }));
    }
}
LoaderOneInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor, deps: [{ token: LoaderOneService }], target: i0.ɵɵFactoryTarget.Injectable });
LoaderOneInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LoaderOneService }]; } });

class InterceptorOneService {
    constructor(router, storageService, toastrService, applicationService, authenticationService) {
        this.router = router;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.applicationService = applicationService;
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        let token = this.storageService.getStorage('token');
        let userID = this.storageService.getStorage('userID');
        let rootOrgID = this.storageService.getStorage('rootOrgID');
        let applicationID = this.storageService.getStorage('applicationID');
        let applicationKeyID = this.storageService.getStorage('applicationKeyID');
        let redirectUrl = '';
        let pageUrl = '';
        let skipAuth = request.headers.get('skipAuth');
        let skipSuccessStatus = request.headers.get('skipSuccessStatus');
        let skipErrorStatus = request.headers.get('skipErrorStatus');
        if (skipAuth == '1') {
            // console.log('skipAuth');
        }
        else {
            if (token) {
                request = request.clone({
                    setHeaders: { Authorization: `Bearer ${token}`, userID: `${userID}`, rootOrgID: `${rootOrgID}`, applicationID: `${applicationID}` }
                });
            }
            else {
                // alert('auth interceptor exception.');
            }
        }
        return next.handle(request).pipe(catchError((error) => {
            let responseM = new Response();
            let toast;
            if (error instanceof HttpErrorResponse) {
                if (skipErrorStatus != '1' && error.error) {
                    responseM = error.error;
                    toast = this.toastrService.getToastStatus(responseM.status);
                    if (responseM.message && responseM.status) {
                        this.toastrService.openToast(toast.title, responseM.message, toast.color);
                    }
                    else {
                        this.toastrService.openToast('Error', 'Something went wrong!', 'error');
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
                        redirectUrl = this.applicationService.appRedirect(applicationKeyID) + 'login';
                        pageUrl = this.router.url;
                        this.authenticationService.logout(this.storageService.getStorage('redirectUrl') ? this.storageService.getStorage('redirectUrl') : redirectUrl, this.storageService.getStorage('pageUrl') ? this.storageService.getStorage('pageUrl') : pageUrl, 'interceptor', applicationKeyID);
                    }
                }
                else if (error.status == 403) {
                    if (responseM.errorCode == 4003) {
                        this.storageService.clearStorage();
                        this.router.navigate(['/no-access']);
                    }
                }
            }
            return throwError(error);
        }), map((response) => {
            let responseM = new Response();
            let toast;
            if (response instanceof HttpResponse) {
                responseM = response.body;
                if (skipSuccessStatus != '1' && response.body.status && response.body.message) {
                    toast = this.toastrService.getToastStatus(response.body.status);
                    this.toastrService.openToast(toast.title, responseM.message, toast.color);
                }
                // Logic for handling successful responses
                // if (response.status === 200) {
                //     // Do something with the response
                //     console.log('Successful response:', response);
                // }
            }
            return response; // Return the response or modified response
        }));
    }
}
InterceptorOneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, deps: [{ token: i1$1.Router }, { token: i2.StorageService }, { token: i2$1.ToastrService }, { token: i3.ApplicationService }, { token: i5.AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
InterceptorOneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.StorageService }, { type: i2$1.ToastrService }, { type: i3.ApplicationService }, { type: i5.AuthenticationService }]; } });

class MatSelectSearchService {
    constructor(searchBy) {
        this.entityArr = [];
        this.filterFC = new FormControl();
        this.filterUnsubscribe = new Subject();
        this.filteredEntities = new ReplaySubject(1);
        this.searchBy = searchBy;
    }
    createSubscription() {
        this.filteredEntities.next(this.entityArr);
        this.filterFC.valueChanges
            .pipe(takeUntil(this.filterUnsubscribe))
            .subscribe(() => __awaiter(this, void 0, void 0, function* () {
            this.filteredEntities = yield this.filterMultipleValue(this.entityArr, this.filterFC.value, this.searchBy);
        }));
    }
    filterMultipleValue(data, filterValue, filterBy) {
        return new Promise(resolve => {
            let filtered = new ReplaySubject(1);
            if (!data) {
                resolve('');
            }
            let search = filterValue;
            if (!search) {
                filtered.next(data.slice());
            }
            else {
                search = search.toLowerCase();
                filtered.next(data.filter((filterData) => filterBy.some(field => filterData[field].toLowerCase().indexOf(search) > -1)));
            }
            resolve(filtered);
        });
    }
}
MatSelectSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable });
MatSelectSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined }]; } });

class EllipsisPipeService {
    transform(value, limit) {
        if (value == null)
            return null;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
EllipsisPipeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EllipsisPipeService.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, name: "dotdotdot" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, decorators: [{
            type: Pipe,
            args: [{
                    name: 'dotdotdot'
                }]
        }] });
class EllipsisPipeModule {
}
EllipsisPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EllipsisPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, declarations: [EllipsisPipeService], imports: [CommonModule], exports: [EllipsisPipeService] });
EllipsisPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [EllipsisPipeService],
                    exports: [EllipsisPipeService]
                }]
        }] });

class CountryController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getCountry() {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get(`${this.environment.ORGANIZATION_PUBLIC_API_URL}country`, { headers: headers });
    }
}
CountryController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryController, deps: [{ token: i1$2.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
CountryController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class SystemController {
    constructor(http) {
        this.http = http;
    }
    getSystemInfo() {
        let headers = new HttpHeaders();
        headers = headers.append('skipAuth', '1');
        headers = headers.append('skipSuccessStatus', '1');
        headers = headers.append('skipErrorStatus', '1');
        return this.http.get(`https://ipinfo.io/json`, { headers: headers });
    }
}
SystemController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
SystemController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }]; } });

class SystemService {
    constructor(systemController) {
        this.systemController = systemController;
    }
    getSystemInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let systemInfo;
            try {
                systemInfo = (yield this.systemController.getSystemInfo().toPromise());
                if (systemInfo) {
                    return systemInfo;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return null;
            }
        });
    }
}
SystemService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, deps: [{ token: SystemController }], target: i0.ɵɵFactoryTarget.Injectable });
SystemService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SystemService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: SystemController }]; } });

class CountryService {
    constructor(countryController, systemService) {
        this.countryController = countryController;
        this.systemService = systemService;
        this.redirectUrl = '';
    }
    getCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            let countryM;
            let country = [new Country()];
            try {
                countryM = yield this.countryController.getCountry().toPromise();
                if (countryM) {
                    return countryM;
                }
                else {
                    return country;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return country;
            }
        });
    }
    getCurrentCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            let systemInfo;
            let countryCode;
            systemInfo = (yield this.systemService.getSystemInfo());
            if (systemInfo) {
                countryCode = systemInfo.country;
            }
            else {
                countryCode = null;
            }
            return countryCode;
        });
    }
}
CountryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, deps: [{ token: CountryController }, { token: SystemService }], target: i0.ɵɵFactoryTarget.Injectable });
CountryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: CountryController }, { type: SystemService }]; } });

class StateController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getState(countryCode) {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get(`${this.environment.ORGANIZATION_PUBLIC_API_URL}states/${countryCode}`, { headers: headers });
    }
}
StateController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, deps: [{ token: i1$2.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
StateController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class StateService {
    constructor(stateController) {
        this.stateController = stateController;
    }
    getState(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let stateM;
            let state = [new State()];
            try {
                stateM = yield this.stateController.getState(countryCode).toPromise();
                if (stateM) {
                    return stateM;
                }
                else {
                    return state;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return state;
            }
        });
    }
}
StateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, deps: [{ token: StateController }], target: i0.ɵɵFactoryTarget.Injectable });
StateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: StateController }]; } });

class StatusService {
    constructor() { }
    getStatusClass(status) {
        let className;
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
    }
    getStatusValue(status) {
        let value;
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
    }
    getYesByBoolean(value) {
        let label;
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
    }
    getActiveByBoolean(value) {
        let label;
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
    }
    getEnableByBoolean(value) {
        let label;
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
    }
    getYesActiveClassByBoolean(value) {
        let className;
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
    }
}
StatusService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StatusService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TimeZoneController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getTimeZone() {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get(`${this.environment.ORGANIZATION_PUBLIC_API_URL}time-zone`, { headers: headers });
    }
}
TimeZoneController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, deps: [{ token: i1$2.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
TimeZoneController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class TimeZoneService {
    constructor(timeZoneController) {
        this.timeZoneController = timeZoneController;
    }
    getTimeZone() {
        return __awaiter(this, void 0, void 0, function* () {
            let timeZoneM;
            try {
                timeZoneM = yield this.timeZoneController.getTimeZone().toPromise();
                return timeZoneM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
TimeZoneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, deps: [{ token: TimeZoneController }], target: i0.ɵɵFactoryTarget.Injectable });
TimeZoneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: TimeZoneController }]; } });

class LookupController {
    constructor(http) {
        this.http = http;
    }
    getLookupValue(baseUrl, lookup) {
        return this.http.post(`${baseUrl}lookup`, lookup);
    }
}
LookupController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
LookupController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }]; } });

class LookupService {
    constructor(lookupController) {
        this.lookupController = lookupController;
    }
    getLookup(baseUrl, lookup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lookupM = yield this.lookupController.getLookupValue(baseUrl, lookup).toPromise();
                if (lookupM) {
                    return lookupM;
                }
            }
            catch (error) {
                console.error('Error -', error);
            }
            return [];
        });
    }
}
LookupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, deps: [{ token: LookupController }], target: i0.ɵɵFactoryTarget.Injectable });
LookupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LookupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: LookupController }]; } });

class ImageService {
    constructor() { }
    getUploadImage(type, image) {
        let returnImage;
        let showDeleteBtn = false;
        if (image) {
            returnImage = image;
            showDeleteBtn = true;
        }
        else {
            showDeleteBtn = false;
            switch (type) {
                case ImageTypeEnum.USER_PROFILE:
                    returnImage = ImageDefaultPathEnum.USER_PROFILE;
                    break;
                case ImageTypeEnum.ORG_LOGO:
                    returnImage = ImageDefaultPathEnum.ORG_LOGO;
                    break;
                case ImageTypeEnum.FACILITY_LOGO:
                    returnImage = ImageDefaultPathEnum.FACILITY_LOGO;
                    break;
                case ImageTypeEnum.REGULATOR_LOGO:
                    returnImage = ImageDefaultPathEnum.REGULATOR_LOGO;
                    break;
                default:
                    returnImage = ImageDefaultPathEnum.DEFAULT_LOGO;
                    break;
            }
        }
        return {
            returnImage, showDeleteBtn
        };
    }
}
ImageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ImageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FileController {
    constructor(http) {
        this.http = http;
    }
    updateFile(apiUrl, orgID, fileID, file) {
        return this.http.patch(`${apiUrl}files/${fileID}`, file);
    }
    updateFileNew(apiUrl, orgID, fileID, fileFormData) {
        return this.http.patch(`${apiUrl}organizations/${orgID}/files/${fileID}`, fileFormData);
    }
    deleteFile(apiUrl, orgID, fileID) {
        return this.http.delete(`${apiUrl}organizations/${orgID}/files/${fileID}`);
    }
}
FileController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, deps: [{ token: i1$2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FileController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.HttpClient }]; } });

class FileService {
    constructor(fileController) {
        this.fileController = fileController;
    }
    updateFile(apiUrl, orgID, fileID, file) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.updateFile(apiUrl, orgID, fileID, file).toPromise();
            }
            catch (error) {
                console.error('Error in updateFile -', error);
            }
            return res;
        });
    }
    updateFileNew(apiUrl, orgID, fileID, fileFormData) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.updateFileNew(apiUrl, orgID, fileID, fileFormData).toPromise();
            }
            catch (error) {
                console.error('Error in updateFileNew -', error);
            }
        });
    }
    deleteFile(apiUrl, orgID, fileID) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = new Response();
            try {
                res = yield this.fileController.deleteFile(apiUrl, orgID, fileID).toPromise();
            }
            catch (error) {
                console.error('Error in deleteFile -', error);
            }
            return res;
        });
    }
}
FileService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, deps: [{ token: FileController }], target: i0.ɵɵFactoryTarget.Injectable });
FileService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FileService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: FileController }]; } });

class HeaderOneComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: HeaderOneComponent, selector: "app-header-one", ngImport: i0, template: "<div class=\"container-fluid d-flex headerOneWrapper\">\n    <div class=\"container my-auto\">\n        <header>\n            <img class=\"headerOneLogo\" src=\"/assets/images/application-logo/tsc-with-name.png\">\n        </header>\n    </div>\n</div>\n", styles: [".headerOneWrapper{height:60px}.headerOneLogo{height:44px;width:auto}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-header-one',
                    templateUrl: './header-one.component.html',
                    styleUrls: ['./header-one.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

class HeaderOneModule {
}
HeaderOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeaderOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneModule, declarations: [HeaderOneComponent], exports: [HeaderOneComponent] });
HeaderOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HeaderOneModule, decorators: [{
            type: NgModule,
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

class FooterOneComponent {
    constructor() {
        this.COMMON_CONSTANT = COMMON_CONSTANT;
    }
    ngOnInit() {
    }
}
FooterOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterOneComponent, selector: "app-footer-one", ngImport: i0, template: "<div class=\"container-fluid d-flex align-items-center justify-content-between footerOneWrapper\">\n    <div class=\"container\">\n        <footer>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"float-start\">\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.PRIVACY\" target=\"_blank\">Privacy</a>\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.TERMS\" target=\"_blank\">Terms</a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <div class=\"float-end text-light pt-2\">\n                        Copyright \u00A9 LogicLadder\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n", styles: [".footerOneWrapper{background-color:#1a202c;height:60px;position:absolute;bottom:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-footer-one',
                    templateUrl: './footer-one.component.html',
                    styleUrls: ['./footer-one.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

class FooterOneModule {
}
FooterOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FooterOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneModule, declarations: [FooterOneComponent], exports: [FooterOneComponent] });
FooterOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneModule, decorators: [{
            type: NgModule,
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

class FooterTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterTwoComponent, selector: "app-footer-two", ngImport: i0, template: "<div class=\"app-footer mt-4\">\n    <div class=\"app-footer__inner\">\n        <div class=\"app-footer-left\">\n            Copyright \u00A9 LogicLadder\n        </div>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-footer-two',
                    templateUrl: './footer-two.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FooterTwoModule {
}
FooterTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FooterTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoModule, declarations: [FooterTwoComponent], exports: [FooterTwoComponent] });
FooterTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterTwoModule, decorators: [{
            type: NgModule,
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

class FooterThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterThreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterThreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterThreeComponent, selector: "lib-footer-three", ngImport: i0, template: "<div class=\"app-footer\">\n    <div class=\"app-footer__inner\">\n        <div class=\"app-footer-left\">\n            Copyright \u00A9 LogicLadder\n        </div>\n    </div>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-footer-three',
                    templateUrl: './footer-three.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FooterThreeModule {
}
FooterThreeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FooterThreeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeModule, declarations: [FooterThreeComponent], exports: [FooterThreeComponent] });
FooterThreeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterThreeModule, decorators: [{
            type: NgModule,
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
class SideNavComponent {
    constructor(router, storageService, applicationService) {
        this.router = router;
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.menuOutput = new EventEmitter();
        this.toggleSidebarGlobal = new EventEmitter(true);
        this.toggleSettingDrawerGlobal = new EventEmitter(true);
        this.sidebarArray = [];
        this.activeID = [];
    }
    ngOnInit() {
        this.applicationKeyID = this.storageService.getStorage(['applicationKeyID']);
        this.sidebarType = this.sidebarTypeInp;
        this.sidebarArray = this.sidebarArrayInp;
        this.openAccordion();
        // this.handleActiveTabOnRefresh();  /* TODO: SOMYA AGRAWAL, added to handle selected tab on refresh, not working properly */
    }
    ngOnChanges(changes) {
        if (changes.sidebarArrayInp && this.sidebarArrayInp) {
            this.onMenuClick(this.sidebarArrayInp);
        }
    }
    onMenuClick(menu) {
        if (menu === null || menu === void 0 ? void 0 : menu.route) {
            this.navigate(menu);
        }
        if (menu.dualMenu) {
            if (this.sidebarType == 'LEFT') {
                this.sidebarArray = menu.dualMenu;
                this.openAccordion();
            }
            const defaultMenu = this.findDefaultLandingPage(menu.dualMenu);
            if (defaultMenu) {
                this.navigate(defaultMenu);
            }
        }
        if (this.sidebarType == 'RIGHT') {
            const clonedMenu = Object.assign({}, menu);
            this.menuOutput.emit(clonedMenu);
            this.toggleSettingDrawerFun();
        }
    }
    findDefaultLandingPage(menuArray) {
        for (const menu of menuArray) {
            if (menu.isDefaultLandingPage) {
                return menu;
            }
            if (menu.children) {
                const result = this.findDefaultLandingPage(menu.children);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    backFunc(menu) {
        if (menu === null || menu === void 0 ? void 0 : menu.backMenuItem) {
            this.sidebarArray = menu.backMenuItem;
        }
        if (menu === null || menu === void 0 ? void 0 : menu.navigateToLandingPage) {
            const landingPageItem = menu === null || menu === void 0 ? void 0 : menu.backMenuItem.find(item => item.isLandingPage);
            if (landingPageItem) {
                this.navigate(landingPageItem);
                return;
            }
        }
        this.openAccordion();
    }
    openAccordion() {
        var _a;
        const openAccordionItems = (_a = this.sidebarArray) === null || _a === void 0 ? void 0 : _a.filter(item => (item === null || item === void 0 ? void 0 : item.type) == 'ACCORDION' && (item === null || item === void 0 ? void 0 : item.defaultState) == 'OPEN');
        this.activeID = openAccordionItems === null || openAccordionItems === void 0 ? void 0 : openAccordionItems.map(item => item === null || item === void 0 ? void 0 : item.label);
    }
    changeAccordionState(menu) {
        this.accordion.collapseAll();
        this.activeID = menu.label;
        this.accordion.expand(menu.label);
        if (menu.children) {
            menu.children.forEach((child) => {
                this.accordion.expand(child.label);
            });
        }
    }
    handleActiveTabOnRefresh() {
        this.sidebarArray.forEach(menu => {
            if (menu.dualMenu) {
                menu.dualMenu.forEach(dualMenuItem => {
                    if (dualMenuItem.children) {
                        dualMenuItem.children.forEach(child => {
                            if ((child === null || child === void 0 ? void 0 : child.route) == window.location.pathname) {
                                child.active = true;
                            }
                        });
                    }
                });
            }
        });
    }
    isActiveRoute(menu) {
        if (!menu) {
            return false;
        }
        if (menu.activeLink) {
            for (const parentLink of menu.activeLink) {
                if (this.router.isActive(parentLink, false)) {
                    return true;
                }
            }
        }
        return false;
    }
    navigate(menu) {
        this.router.navigate([
            menu === null || menu === void 0 ? void 0 : menu.route,
            { outlets: this.getOutlets(menu) }
        ], { queryParams: this.getQueryParams(menu) });
    }
    getOutlets(menu) {
        let outlets = {};
        if (menu === null || menu === void 0 ? void 0 : menu.outlet) {
            menu === null || menu === void 0 ? void 0 : menu.outlet.forEach(outlet => {
                outlets[outlet['outlet']] = outlet['route'];
            });
        }
        return outlets;
    }
    getQueryParams(menu) {
        let params = {};
        if (menu === null || menu === void 0 ? void 0 : menu.queryParam) {
            menu === null || menu === void 0 ? void 0 : menu.queryParam.forEach(param => {
                params[param['key']] = param['param'];
            });
        }
        return params;
    }
    navigateToLandingPage() {
        this.router.navigate([this.landingPageRouteInp]);
    }
    toggleSidebarFun() {
        this.toggleSidebar = !this.toggleSidebar;
        this.toggleSidebarGlobal.emit(this.toggleSidebar);
    }
    toggleSettingDrawerFun() {
        this.toggleSettingDrawer = !this.toggleSettingDrawer;
        this.toggleSettingDrawerGlobal.emit(this.toggleSettingDrawer);
    }
}
SideNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavComponent, deps: [{ token: i1$1.Router }, { token: i2.StorageService }, { token: i3.ApplicationService }], target: i0.ɵɵFactoryTarget.Component });
SideNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SideNavComponent, selector: "lib-side-nav", inputs: { sidebarTypeInp: "sidebarTypeInp", sidebarArrayInp: "sidebarArrayInp", sidebarHeaderLabelInp: "sidebarHeaderLabelInp", headerLogo: "headerLogo", footerLogo: "footerLogo", toggleSidebar: "toggleSidebar", toggleSettingDrawer: "toggleSettingDrawer", landingPageRouteInp: "landingPageRouteInp" }, outputs: { menuOutput: "menuOutput", toggleSidebarGlobal: "toggleSidebarGlobal", toggleSettingDrawerGlobal: "toggleSettingDrawerGlobal" }, providers: [NgbAccordionConfig], viewQueries: [{ propertyName: "accordion", first: true, predicate: NgbAccordion, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div\n    [ngClass]=\"[sidebarType == 'LEFT' ? 'app-sidebar sidebar-shadow ' : 'setting-sidebar setting-drawer-wrapper', toggleSettingDrawer ? 'setting-drawer-open' : '']\">\n\n    <div class=\"app-header__logo separator-bottom\" *ngIf=\"headerLogo\">\n        <div (click)=\"navigateToLandingPage()\" class=\"cursorPointer\" *ngIf=\"!toggleSidebar\">\n            <img class=\"headerProductLogo ms-1\"\n                [src]=\"applicationService.getApplicationLogoWithSideName(applicationKeyID)\" alt=\"Application logo\" />\n        </div>\n        <div class=\"header__pane ms-auto\">\n            <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : !toggleSidebar}\"\n                (click)=\"toggleSidebarFun();\">\n                <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"drawer-nav-btn\" *ngIf=\"!headerLogo\">\n        <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : toggleSettingDrawer}\"\n            (click)=\"toggleSettingDrawerFun()\">\n            <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n        </button>\n    </div>\n\n    <div class=\"app-sidebar-content pt-2\" [ngClass]=\"{'drawer-content-wrapper': sidebarType == 'RIGHT'}\">\n        <div class=\"app-sidebar-scroll\">\n            <perfect-scrollbar [config]=\"{wheelPropagation: false}\" class=\"scroll-fix\" [scrollIndicators]=\"true\">\n                <div class=\"v-sidebar-menu\">\n                    <div class=\"vsm-list\">\n                        <div *ngIf=\"sidebarHeaderLabelInp\" [ngClass]=\"{'bottomMargin': sidebarHeaderLabelInp}\">\n                            <span class=\"fw-bold ms-2 fs-4\">{{ sidebarHeaderLabelInp }}</span>\n                        </div>\n\n                        <div *ngFor=\"let menu of sidebarArray\">\n                            <ng-container *ngIf=\"!toggleSidebar; else closedSidebar\">\n                                <ng-container *ngIf=\"!menu.children && !menu.isSidebarHeaderLabel; else childrenView\">\n                                    <ng-container *isRenderFeature=\"menu?.featureKeyID\">\n                                        <ng-container *isRenderRBAC=\"menu?.resourcePermission\">\n                                            <div class=\"vsm-link mb-1\"\n                                                [ngClass]=\"{'mb-3': menu.isBackButton, 'customPadding': !menu?.icon, 'selected': isActiveRoute(menu)}\"\n                                                (click)=\"menu.isBackButton ? backFunc(menu) : onMenuClick(menu)\"\n                                                routerLinkActive=\"active-item\"\n                                                [matTooltip]=\"menu?.label?.length>18? menu.label: ''\"\n                                                matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                                <div class=\"d-flex align-items-center\">\n                                                    <span class=\"material-symbols-outlined vsm-icon icon me-3\"> {{\n                                                        menu?.icon }}\n                                                    </span>\n                                                    <span\n                                                        [ngClass]=\"{'fw-bold fs-4': menu.isSidebarHeaderLabel, 'fw-bold': isActiveRoute(menu)}\">{{\n                                                        menu?.label | dotdotdot:18 }}</span>\n                                                    <span class=\"material-symbols-outlined showRightArrowOnHover ms-2\"\n                                                        *ngIf=\"menu?.dualMenu\">\n                                                        arrow_circle_right\n                                                    </span>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                    </ng-container>\n                                </ng-container>\n\n                                <ng-template #childrenView>\n\n                                    <ng-container *ngIf=\"menu.type == 'ACCORDION'; else openMenuView\">\n                                        <ng-container\n                                            *ngTemplateOutlet=\"accordionTemplate; context: { accordionContent: menu }\"></ng-container>\n                                    </ng-container>\n\n                                    <ng-template #openMenuView>\n                                        <div class=\"openMenuHeader vsm-title mb-2\"\n                                            [ngClass]=\"{'fw-bold fs-4': menu.isSidebarHeaderLabel}\"\n                                            [matTooltip]=\"menu?.label?.length>18? menu.label: ''\"\n                                            matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                            {{ menu?.label | dotdotdot:18 }}\n                                        </div>\n                                        <div *ngFor=\"let openMenuChildren of menu.children\">\n                                            <ng-container *isRenderFeature=\"openMenuChildren?.featureKeyID\">\n                                                <ng-container *isRenderRBAC=\"openMenuChildren?.resourcePermission\">\n                                                    <a class=\"vsm-link mb-1\"\n                                                        [ngClass]=\"{'selected': isActiveRoute(openMenuChildren)}\"\n                                                        routerLinkActive=\"active-item\"\n                                                        (click)=\"navigate(openMenuChildren)\"\n                                                        [matTooltip]=\"openMenuChildren?.label?.length>18? openMenuChildren.label: ''\"\n                                                        matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                                        <div class=\"d-flex align-items-center\">\n                                                            <span class=\"material-symbols-outlined icon ms-3\"> {{\n                                                                openMenuChildren?.icon }} </span>\n                                                            <span class=\"ms-3\"\n                                                                [ngClass]=\"{'fw-bold': isActiveRoute(openMenuChildren)}\">\n                                                                {{\n                                                                openMenuChildren?.label | dotdotdot:18 }} </span>\n                                                        </div>\n                                                    </a>\n                                                </ng-container>\n                                            </ng-container>\n                                        </div>\n                                    </ng-template>\n\n                                </ng-template>\n                            </ng-container>\n\n                            <ng-template #closedSidebar>\n                                <div *ngIf=\"!menu.children && !menu.isSidebarHeaderLabel\">\n                                    <ng-container\n                                        *ngTemplateOutlet=\"closedSidebarTemplate; context: { menuItem: menu }\"></ng-container>\n                                </div>\n                                <ng-container *ngFor=\"let child of menu.children\">\n                                    <ng-container *ngIf=\"!child.subLabel\">\n                                        <ng-container\n                                            *ngTemplateOutlet=\"closedSidebarTemplate; context: { menuItem: child }\"></ng-container>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-template>\n\n                        </div>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </div>\n    </div>\n\n    <div class=\"app-header__logo separator-top\" *ngIf=\"footerLogo\">\n        <img class=\"tscLogoWithName\" [ngClass]=\"{'d-none': toggleSidebar}\"\n            src=\"../assets/images/application-logo/tsc-with-name.png\" />\n        <img class=\"tscLogoWithoutName\" [ngClass]=\"{'d-none': !toggleSidebar}\"\n            src=\"../assets/images/application-logo/tsc-without-name.png\" />\n    </div>\n</div>\n\n<div class=\"setting-drawer-overlay\" (click)=\"toggleSettingDrawerFun()\"></div>\n\n<ng-template #accordionTemplate let-accordionContent=\"accordionContent\">\n    <ngb-accordion [destroyOnHide]=\"true\" #acc=\"ngbAccordion\" [activeIds]=\"activeID\">\n        <ngb-panel [id]=\"accordionContent.label\">\n\n            <ng-template ngbPanelHeader>\n                <button ngbPanelToggle routerLinkActive=\"active-item\" class=\"vsm-link\"\n                    [ngClass]=\"{'customPadding': !accordionContent?.icon}\"\n                    [matTooltip]=\"accordionContent?.label?.length>18? accordionContent.label: ''\"\n                    matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                    <div class=\"d-flex align-items-center\">\n                        <span class=\"material-symbols-outlined icon me-3\">{{ accordionContent?.icon }}</span>\n                        <span class=\"fw-normal\">{{ accordionContent?.label | dotdotdot:18 }}</span>\n                    </div>\n                    <i class=\"vsm-arrow\"></i>\n                </button>\n            </ng-template>\n\n            <ng-template ngbPanelContent>\n                <div class=\"vsm-dropdown\">\n                    <div class=\"vsm-list\">\n                        <ng-container *ngFor=\"let submenuItem of accordionContent?.children\">\n\n                            <ng-container *ngIf=\"!submenuItem.subLabel; else subMenuSubHeader\">\n                                <ng-container *isRenderFeature=\"submenuItem?.featureKeyID\">\n                                    <ng-container *isRenderRBAC=\"submenuItem?.resourcePermission\">\n                                        <a class=\"vsm-link mb-1 ms-3\"\n                                            [ngClass]=\"{'selected': isActiveRoute(submenuItem)}\"\n                                            routerLinkActive=\"active-item\"\n                                            (click)=\"changeAccordionState(accordionContent); navigate(submenuItem)\"\n                                            [matTooltip]=\"submenuItem?.label?.length>18? submenuItem.label: ''\"\n                                            matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                                            <div class=\"d-flex align-items-center\">\n                                                <span class=\"material-symbols-outlined icon me-3\"> {{ submenuItem?.icon\n                                                    }}\n                                                </span>\n                                                <span [ngClass]=\"{'fw-bold': isActiveRoute(openMenuChildren)}\"> {{\n                                                    submenuItem?.label | dotdotdot:18}} </span>\n                                            </div>\n                                        </a>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n\n                            <ng-template #subMenuSubHeader>\n                                <div class=\"ms-4 text-secondary fw-bold mb-2\"\n                                    [matTooltip]=\"submenuItem?.label?.length>18? submenuItem.label: ''\"\n                                    matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\"> {{ submenuItem.subLabel\n                                    | dotdotdot:18}} </div>\n                            </ng-template>\n\n                        </ng-container>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n</ng-template>\n\n<ng-template #closedSidebarTemplate let-menuItem=\"menuItem\">\n    <ng-container *isRenderFeature=\"menuItem?.featureKeyID\">\n        <ng-container *isRenderRBAC=\"menuItem?.resourcePermission\">\n            <a class=\"vsm-link mb-1 closedSideBarIconPadding\" [ngClass]=\"{'selected': isActiveRoute(menuItem)}\"\n                routerLinkActive=\"active-item\"\n                (click)=\"menuItem.isBackButton ? backFunc(menuItem) : onMenuClick(menuItem); navigate(menuItem)\"\n                [matTooltip]=\"menuItem?.label\" matTooltipPosition=\"left\" matTooltipClass=\"sideBarTooltip\">\n                <div class=\"d-flex align-items-center\">\n                    <span class=\"material-symbols-outlined vsm-icon icon me-3\"> {{ menuItem?.icon }}\n                    </span>\n                </div>\n            </a>\n        </ng-container>\n    </ng-container>\n</ng-template>", styles: [".scroll-fix{height:calc(100vh - 122px)!important}.material-symbols-outlined{font-variation-settings:\"FILL\" 1}.headerProductLogo{height:40px;width:auto}.vsm-link.selected{background-color:#e0f3ff;color:#3f6ad8}.vsm-link{font-weight:normal!important;min-height:30px!important;border-radius:16px}.vsm-link:hover .showRightArrowOnHover{opacity:1}.showRightArrowOnHover{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;right:5px;top:50%;margin-top:-17px;font-size:1.5rem;opacity:0}.showLeftArrow{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;left:5px;top:50%;margin-top:-17px;font-size:1.5rem}.customPadding{padding:0 1.5rem 0 15px}.sideBarTooltip{white-space:pre-line!important;max-width:1100px!important;max-height:550px!important;font-size:18px!important}.openMenuHeader{pointer-events:none;padding:0 1.5rem 0 15px}.vsm-title{font-size:14px;white-space:nowrap;position:relative;font-weight:normal}.v-sidebar-menu .vsm-dropdown .vsm-list{padding:.75rem}.vsm-icon{opacity:1}.icon{text-align:center;width:34px;height:34px;line-height:34px;position:absolute;left:5px;top:50%;margin-top:-17px;font-size:1.3rem}.subLabelMargin{margin-left:1.9rem!important}.separator-top{border-top:1px solid #f6eded;background-color:#fff!important;position:fixed;bottom:0;left:0}.tscLogoWithName{height:38px;width:auto}.tscLogoWithoutName{width:32px;height:32px}.bottomMargin{margin-bottom:17px}.closedSideBarIconPadding{padding:unset}\n"], components: [{ type: i4.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i5$1.NgbAccordion, selector: "ngb-accordion", inputs: ["animation", "activeIds", "closeOthers", "destroyOnHide", "type"], outputs: ["panelChange", "shown", "hidden"], exportAs: ["ngbAccordion"] }], directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.FeatureDirective2, selector: "[isRenderFeature]", inputs: ["isRenderFeature"] }, { type: i8.RBACDirective2, selector: "[isRenderRBAC]", inputs: ["isRenderRBAC"] }, { type: i6$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i5$1.NgbPanel, selector: "ngb-panel", inputs: ["disabled", "id", "title", "type", "cardClass"], outputs: ["shown", "hidden"] }, { type: i5$1.NgbPanelHeader, selector: "ng-template[ngbPanelHeader]" }, { type: i5$1.NgbPanelToggle, selector: "button[ngbPanelToggle]", inputs: ["ngbPanelToggle"] }, { type: i5$1.NgbPanelContent, selector: "ng-template[ngbPanelContent]" }], pipes: { "dotdotdot": EllipsisPipeService } });
__decorate([
    select('config')
], SideNavComponent.prototype, "config$", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-side-nav',
                    templateUrl: './side-nav.component.html',
                    styleUrls: ['./side-nav.component.scss'],
                    providers: [NgbAccordionConfig],
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.StorageService }, { type: i3.ApplicationService }]; }, propDecorators: { sidebarTypeInp: [{
                type: Input
            }], sidebarArrayInp: [{
                type: Input
            }], sidebarHeaderLabelInp: [{
                type: Input
            }], headerLogo: [{
                type: Input
            }], footerLogo: [{
                type: Input
            }], toggleSidebar: [{
                type: Input
            }], toggleSettingDrawer: [{
                type: Input
            }], landingPageRouteInp: [{
                type: Input
            }], menuOutput: [{
                type: Output
            }], toggleSidebarGlobal: [{
                type: Output
            }], toggleSettingDrawerGlobal: [{
                type: Output
            }], config$: [], accordion: [{
                type: ViewChild,
                args: [NgbAccordion]
            }] } });

// /tsc-library/
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class SideNavModule {
}
SideNavModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SideNavModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, declarations: [SideNavComponent], imports: [BrowserModule,
        NgbModule,
        PerfectScrollbarModule,
        MatIconModule,
        MatTooltipModule,
        RBACDirectiveModule2,
        FeatureDirectiveModule2,
        EllipsisPipeModule], exports: [SideNavComponent] });
SideNavModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        }
    ], imports: [[
            BrowserModule,
            NgbModule,
            PerfectScrollbarModule,
            MatIconModule,
            MatTooltipModule,
            RBACDirectiveModule2,
            FeatureDirectiveModule2,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SideNavComponent,
                    ],
                    imports: [
                        BrowserModule,
                        NgbModule,
                        PerfectScrollbarModule,
                        MatIconModule,
                        MatTooltipModule,
                        RBACDirectiveModule2,
                        FeatureDirectiveModule2,
                        EllipsisPipeModule
                    ],
                    exports: [
                        SideNavComponent
                    ],
                    providers: [
                        {
                            provide: PERFECT_SCROLLBAR_CONFIG,
                            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                        }
                    ]
                }]
        }] });

class UserDrawerComponent {
    constructor(environment, storageService, userService, applicationService, tscCommonService) {
        this.environment = environment;
        this.storageService = storageService;
        this.userService = userService;
        this.applicationService = applicationService;
        this.tscCommonService = tscCommonService;
        this.userM = new User();
    }
    ngOnInit() {
        this.userID = this.storageService.getStorage('userID');
        this.getUserByID();
    }
    getUserByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.userM = (yield this.userService.getUserByID(this.userID));
        });
    }
    defaultImage(userM) {
        return this.userService.defaultImage(((userM === null || userM === void 0 ? void 0 : userM['firstName']) ? userM['firstName'] + ' ' : '') +
            ((userM === null || userM === void 0 ? void 0 : userM['lastName']) == null ? '' : userM['lastName']), ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);
    }
    logout() {
        let applicationKeyID = '';
        applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.applicationService.appBtnLogout(applicationKeyID);
    }
}
UserDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerComponent, deps: [{ token: 'environment' }, { token: i2.StorageService }, { token: i2$2.UserService }, { token: i3.ApplicationService }, { token: TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
UserDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UserDrawerComponent, selector: "lib-user-drawer", ngImport: i0, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn btn-link text-secondary p-0\" ngbDropdownToggle>\n            <img class=\"rounded-circle border profileImageHeaderView headerIcon mb-1\"\n                [src]=\"userM.profileImgUrl || defaultImage(userM)\" alt=\"profile image\">\n        </button>\n        <div class=\"dropdown-menu-xl mt-3 pt-4 pb-3 userDrawerPositioning\" ngbDropdownMenu>\n            <div class=\"grid-menu grid-menu-xl grid-menu-3col\">\n                <div class=\"row g-1\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <img class=\"headerImg rounded-circle border\"\n                                [src]=\"userM.profileImgUrl || defaultImage(userM)\" alt=\"profile image\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"menu-header-content\">\n                            <h5 class=\"menu-header-title headerSection py-3 text-center\">\n                                <span class=\"fs-5\">\n                                    Hi, {{ userM.firstName + ' ' +\n                                    tscCommonService.nullToBlank(userM.lastName) }}!\n                                </span>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1 mb-3\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <span #tooltip=\"matTooltip\" matTooltipPosition=\"above\" matTooltip=\"User ID\">\n                                User ID: {{ userM.id }}\n                            </span><br />\n                            {{ userM.email }}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row g-1 mb-3\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"text-center\">\n                            <mat-button-toggle-group class=\"matBtnFilter\">\n                                <mat-button-toggle class=\"matButtonOnHover\">\n                                    <a class=\"text-dark\" href=\"{{ environment.ACCOUNT_URL }}\" target=\"_blank\">\n                                        <div class=\"d-flex align-items-center\">\n                                            <span class=\"material-symbols-outlined\">\n                                                person\n                                            </span>\n                                            <span class=\"ps-2\">My Account</span>\n                                        </div>\n                                    </a>\n                                </mat-button-toggle>\n                                <mat-button-toggle class=\"btn-outline-danger\" (click)=\"logout();\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <span class=\"material-symbols-outlined\">\n                                            power_settings_new\n                                        </span>\n                                        <span class=\"ps-2\">Logout</span>\n                                    </div>\n                                </mat-button-toggle>\n                            </mat-button-toggle-group>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".userDrawerPositioning{transform:translate(-320px,35px)!important;border-radius:20px}.profileImageHeaderView{height:25px;width:25px}.headerImg{height:70px}.matBtnFilter mat-button-toggle{width:140px}.matButtonOnHover .mat-button-toggle-appearance-standard{background:whitesmoke}\n"], components: [{ type: i5$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i5$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i5$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-user-drawer',
                    templateUrl: './user-drawer.component.html',
                    styleUrls: ['./user-drawer.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i2.StorageService }, { type: i2$2.UserService }, { type: i3.ApplicationService }, { type: TSCCommonService }]; } });

class UserDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: UserDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
UserDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, declarations: [UserDrawerComponent], imports: [CommonModule,
        NgbModule,
        MatTooltipModule,
        MatButtonToggleModule], exports: [UserDrawerComponent] });
UserDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, imports: [[
            CommonModule,
            NgbModule,
            MatTooltipModule,
            MatButtonToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UserDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        MatTooltipModule,
                        MatButtonToggleModule
                    ],
                    exports: [
                        UserDrawerComponent,
                    ]
                }]
        }] });

class LayoutDrawerComponent {
    constructor(router, storageService, layoutService, commonEvent) {
        this.router = router;
        this.storageService = storageService;
        this.layoutService = layoutService;
        this.commonEvent = commonEvent;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.layoutM = [new Layout()];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage(['currentOrgID']);
        this.commonEvent.layoutChange.subscribe((msg) => {
            this.getLayoutByOrgID();
        });
    }
    getLayoutByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.layoutM = (yield this.layoutService.getLayoutByOrgID(this.orgID));
            const layoutID = this.storageService.getStorage('layoutID');
            if (layoutID) {
                this.selectedLayout = this.layoutM.find(layout => layout.id == layoutID);
            }
            else {
                const defaultLayout = this.layoutM.find(layout => layout.isDefault);
                if (defaultLayout) {
                    this.selectedLayout = defaultLayout;
                    this.storageService.setStorage('layoutID', defaultLayout.id);
                }
            }
        });
    }
    changeLayout(layout) {
        this.storageService.setStorage('layoutID', layout.id);
        this.selectedLayout = layout;
        window.location.reload();
    }
    viewLayout(layoutID) {
        this.router.navigate([`layout/${layoutID}/list`]);
    }
}
LayoutDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerComponent, deps: [{ token: i1$1.Router }, { token: i2.StorageService }, { token: i3$1.LayoutService }, { token: CommonEvent }], target: i0.ɵɵFactoryTarget.Component });
LayoutDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutDrawerComponent, selector: "lib-layout-drawer", ngImport: i0, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn dropdownAfter\" ngbDropdownToggle>\n            <span class=\"material-symbols-outlined layoutIcon\" matTooltip=\"Layout\" matTooltipPosition=\"below\">\n                grid_view\n            </span>\n        </button>\n        <div class=\"selectedItem\" ngbDropdownMenu>\n            <ng-container *ngIf=\"layoutM && layoutM.length > 0 && layoutM[0]['id']; else noLayoutFound\">\n                <a class=\"dropdown-item mt-1\" *ngFor=\"let layout of layoutM\"\n                    [ngClass]=\"{'active': layout.id == selectedLayout?.id}\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"float-start\">\n                                <span class=\"me-2\" [matTooltip]=\"layout?.['name']?.length>22? layout['name']: ''\"\n                                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\"\n                                    (click)=\"changeLayout(layout)\">{{ layout?.name | dotdotdot:22\n                                    }}</span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"float-end\">\n                                <span class=\"text-secondary me-1\">|</span>\n                                <span class=\"text-primary\" (click)=\"viewLayout(layout.id)\">View</span>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </ng-container>\n            <ng-template #noLayoutFound>\n                <a class=\"dropdown-item\">\n                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                </a>\n            </ng-template>\n        </div>\n    </div>\n</div>", styles: [".layoutIcon{color:#4d4d4d;font-size:22px}.dropdownAfter:after{display:none}.selectedItem .dropdown-item.active,.selectedItem .dropdown-item:active{color:#000;background-color:#e0f3ff}.dropdown-menu .dropdown-item{display:block!important}\n"], directives: [{ type: i5$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i6$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "dotdotdot": EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-layout-drawer',
                    templateUrl: './layout-drawer.component.html',
                    styleUrls: ['./layout-drawer.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i2.StorageService }, { type: i3$1.LayoutService }, { type: CommonEvent }]; } });

class LayoutDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: LayoutDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
LayoutDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, declarations: [LayoutDrawerComponent], imports: [CommonModule,
        NgbModule,
        MatTooltipModule,
        EllipsisPipeModule], exports: [LayoutDrawerComponent] });
LayoutDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, imports: [[
            CommonModule,
            NgbModule,
            MatTooltipModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        MatTooltipModule,
                        EllipsisPipeModule
                    ],
                    exports: [
                        LayoutDrawerComponent,
                    ]
                }]
        }] });

class ApplicationDrawerComponent {
    constructor(storageService, applicationService) {
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.applicationM = [];
        this.applicationFilter = [];
        this.currentOrgType = '';
        this.currentOrgID = '';
        this.currentRootOrgID = '';
    }
    ngOnInit() {
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentRootOrgID = this.storageService.getStorage('rootOrgID');
        if (this.applicationKeyID == ApplicationKeyID.ACCOUNT_KEY_ID) {
            this.getAllApplication();
        }
        else {
            this.getApplicationByUserAccess();
        }
    }
    getAllApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            this.applicationM = (yield this.applicationService.getAllApplication());
            this.applicationFilter = this.applicationM.filter(applicationFilter => applicationFilter['keyID'] != ApplicationKeyID.NETZERO_ADMIN_KEY_ID &&
                applicationFilter['keyID'] != ApplicationKeyID.EMPLOYEE_KEY_ID);
        });
    }
    getApplicationByUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            this.applicationM = (yield this.applicationService.getApplicationByUserAccess());
            this.applicationFilter = this.applicationM.filter(applicationFilter => applicationFilter['keyID'] != this.applicationKeyID &&
                applicationFilter['keyID'] != ApplicationKeyID.EMPLOYEE_KEY_ID);
        });
    }
    getApplicationLogo(keyID) {
        let logo;
        logo = this.applicationService.getApplicationLogoWithoutName(keyID);
        return logo;
    }
    appUrlBuilder(applicationKeyID, appURL) {
        let url = appURL;
        let orgLevelApp = [ApplicationKeyID.ADMIN_KEY_ID, ApplicationKeyID.OFFSET_KEY_ID];
        let siteLevelApp = [ApplicationKeyID.ENERGY_KEY_ID, ApplicationKeyID.WATER_KEY_ID, ApplicationKeyID.ENVIRO_KEY_ID];
        let orgSiteLevelApp = [ApplicationKeyID.NETZERO_KEY_ID, ApplicationKeyID.CONNECT_KEY_ID];
        if (orgLevelApp.includes(applicationKeyID) && this.currentOrgType == OrgType.ORGANIZATION) {
            url = `${appURL}&orgID=${this.currentRootOrgID}`;
        }
        else if (siteLevelApp.includes(applicationKeyID) && this.currentOrgType == OrgType.SITE) {
            url = `${appURL}&orgID=${this.currentOrgID}`;
        }
        else if (orgSiteLevelApp.includes(applicationKeyID) && (this.currentOrgType == OrgType.ORGANIZATION || this.currentOrgType == OrgType.SITE)) {
            url = `${appURL}&orgID=${this.currentOrgID}`;
        }
        else {
            url = appURL;
        }
        return url;
    }
}
ApplicationDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerComponent, deps: [{ token: i2.StorageService }, { token: i3.ApplicationService }], target: i0.ɵɵFactoryTarget.Component });
ApplicationDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ApplicationDrawerComponent, selector: "lib-application-drawer", ngImport: i0, template: "<div class=\"header-dots\">\n    <div class=\"btn-group\" ngbDropdown placement=\"bottom\">\n        <button type=\"button\" class=\"btn btn-link text-secondary p-0\" ngbDropdownToggle>\n            <span class=\"material-symbols-outlined fw-bolder\">\n                apps\n            </span>\n        </button>\n        <div class=\"dropdown-menu-xl mt-3 appDrawerPositioning\" ngbDropdownMenu>\n            <div class=\"grid-menu grid-menu-xl grid-menu-3col\">\n                <div class=\"g-0 row\">\n\n                    <div class=\"col-sm-4 col-xl-4 border-0\" *ngFor=\"let applicationsM of applicationFilter\">\n                        <a class=\"btn\" [href]=\"appUrlBuilder(applicationsM.keyID, applicationsM.url)\" target=\"_blank\">\n\n                            <img class=\"appDrawerIcon\" [src]=\"getApplicationLogo(applicationsM.keyID)\" alt=\"{{ applicationsM.name }}\">\n                            <br />\n                            <span class=\"appDrawerName\">{{ applicationsM.name }}</span>\n                        </a>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".appDrawerPositioning{transform:translate(-355px,35px)!important;border-radius:20px}.appDrawerIcon{width:auto;height:40px;margin-bottom:10px}.appDrawerName{font-size:14px}\n"], directives: [{ type: i5$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i5$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i5$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-application-drawer',
                    templateUrl: './application-drawer.component.html',
                    styleUrls: ['./application-drawer.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }, { type: i3.ApplicationService }]; } });

class ApplicationDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: ApplicationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
ApplicationDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, declarations: [ApplicationDrawerComponent], imports: [CommonModule,
        MatCardModule,
        MatTooltipModule,
        NgbModule], exports: [ApplicationDrawerComponent] });
ApplicationDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, imports: [[
            CommonModule,
            MatCardModule,
            MatTooltipModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApplicationDrawerComponent
                    ],
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatTooltipModule,
                        NgbModule
                    ],
                    exports: [
                        ApplicationDrawerComponent
                    ]
                }]
        }] });

class SearchBarTwoComponent {
    constructor() {
        this.faTimes = faTimes;
        this.faSearch = faSearch;
        this.searchFC = new FormControl('');
        this.type = 'text';
        this.searchBy = '';
        this.clear = false;
        this.emitSearch = new EventEmitter();
        this.active = false;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.clear) {
            this.searchFC.reset('', { onlySelf: true, emitEvent: false });
        }
    }
    searchFn() {
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
    }
    searchReset() {
        this.searchFC.reset('');
        this.searchFn();
    }
    searchClear() {
        this.active = false;
        this.searchFC.reset('');
    }
}
SearchBarTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBarTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: { type: "type", searchBy: "searchBy", clear: "clear" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\" (keyup)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-search-bar-two',
                    templateUrl: './search-bar-two.component.html',
                    styleUrls: ['./search-bar-two.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], searchBy: [{
                type: Input
            }], clear: [{
                type: Input
            }], emitSearch: [{
                type: Output
            }] } });

class OrganizationDrawerComponent {
    constructor(activatedRoute, storageService, organizationService, facilityService) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.organizationService = organizationService;
        this.facilityService = facilityService;
        this.toggleOrgDrawerGlobal = new EventEmitter(true);
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.showOrgAndFacility = false;
        this.OrgStatus = OrgStatus;
        this.OrgType = OrgType;
        this.OrgSiteAccessType = OrgSiteAccessType;
        this.organizationM = new Organization();
        this.facilityM = new Facility();
        this.orgSiteAccessM = new OrgSiteAccess();
        this.filteredOrgAccessM = [];
    }
    ngOnInit() {
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
    }
    getOrgByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.organizationM = (yield this.organizationService.getOrganizationByID(this.rootOrgID));
        });
    }
    getFacilityByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.facilityM = (yield this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID));
        });
    }
    getOrgSiteWithUserAccess() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.orgSiteAccessM = (yield this.organizationService.getOrgSiteWithUserAccess(this.userID));
            this.filteredOrgAccessM = [...(_a = this.orgSiteAccessM) === null || _a === void 0 ? void 0 : _a.records];
        });
    }
    toggleOrgDrawerFun() {
        this.toggleOrgDrawer = !this.toggleOrgDrawer;
        this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
    }
    searchFn(value) {
        var _a, _b;
        const searchTerm = value.trim().toLowerCase();
        if (searchTerm.length > 0) {
            this.filteredOrgAccessM = (_a = this.orgSiteAccessM) === null || _a === void 0 ? void 0 : _a.records.filter(org => org.name.trim().toLowerCase().includes(searchTerm));
        }
        else {
            this.searchBar.searchClear();
            this.filteredOrgAccessM = [...(_b = this.orgSiteAccessM) === null || _b === void 0 ? void 0 : _b.records];
        }
    }
    orgSwitch(orgID) {
        let currentRoute = this.activatedRoute;
        let orgSwitchRedirect = null;
        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
            if (currentRoute.snapshot.data && currentRoute.snapshot.data.orgSwitchRedirect) {
                orgSwitchRedirect = currentRoute.snapshot.data.orgSwitchRedirect;
            }
        }
        this.organizationService.orgSwitch(orgID, orgSwitchRedirect);
    }
}
OrganizationDrawerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: i3$2.OrganizationService }, { token: i4$2.FacilityService }], target: i0.ɵɵFactoryTarget.Component });
OrganizationDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationDrawerComponent, selector: "lib-organization-drawer", inputs: { toggleOrgDrawer: "toggleOrgDrawer", drawerAccessType: "drawerAccessType" }, outputs: { toggleOrgDrawerGlobal: "toggleOrgDrawerGlobal" }, viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"drawer-wrapper\">\n    <div class=\"drawer-nav-btn\">\n        <button type=\"button\" class=\"hamburger hamburger--elastic\" [ngClass]=\"{'is-active' : toggleOrgDrawer}\"\n            (click)=\"toggleOrgDrawerFun()\">\n            <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>\n        </button>\n    </div>\n    <div class=\"drawer-content-wrapper\">\n        <section class=\"scrollbar-container\">\n            <perfect-scrollbar [autoPropagation]=\"true\">\n                <div class=\"container mt-5\">\n                    <div class=\"row mt-3\" *ngIf=\"showOrgAndFacility\">\n                        <ng-container *ngTemplateOutlet=\"orgFacilityTemplate; \n                            context: {\n                                matCardClass: 'org-border-left',\n                                name: organizationM.name,\n                                idLabel: 'Org ID',\n                                id: organizationM.id,\n                                state: organizationM.stateName,\n                                country: organizationM.countryName,\n                                status: organizationM.status,\n                                image: organizationM.logoUrl,\n                                orgFacilityLabel: 'Organization',\n                                orgFacilityLabelClass: 'bg-primary',\n                                type: OrgType.ORGANIZATION\n                            }\">\n                        </ng-container>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <ng-container *ngTemplateOutlet=\"orgFacilityTemplate; \n                            context: {\n                                matCardClass: 'current-org-border-left',\n                                name: facilityM.name,\n                                idLabel: rootOrgID == currentOrgID ? 'Org ID' : 'Facility ID',\n                                id: facilityM.id,\n                                state: facilityM.stateName,\n                                country: facilityM.countryName,\n                                status: facilityM.status,\n                                image: facilityM.logoUrl,\n                                orgFacilityLabel: rootOrgID == currentOrgID ? 'Current organization' : 'Current facility',\n                                orgFacilityLabelClass: 'bg-success',\n                                type: rootOrgID == currentOrgID ? OrgType.ORGANIZATION : OrgType.SITE\n                            }\">\n                        </ng-container>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <div class=\"col-sm-6\">\n                            <span class=\"card-title sectionTitle\">\n                                <ng-container *ngIf=\"drawerAccessType == OrgSiteAccessType.SITE; else showOrg;\">\n                                    All Facilities\n                                </ng-container>\n                                <ng-template #showOrg>\n                                    All Organizations\n                                </ng-template>\n                            </span>\n                            <span class=\"badge rounded-pill bg-light text-dark ms-3\">{{ orgSiteAccessM ?\n                                orgSiteAccessM.totalCount : COMMON_CONSTANT.HYPHEN }}</span>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <lib-search-bar-two class=\"float-end me-3\" #searchBar searchBy=\"name\"\n                                (emitSearch)=\"searchFn($event)\">\n                            </lib-search-bar-two>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-sm-12 mb-3\" *ngFor=\"let org of filteredOrgAccessM; let i=index\"\n                            (click)=\"currentOrgID != org.id && orgSwitch(org.id)\"\n                            [ngClass]=\"{'cursorPointer': currentOrgID != org.id}\">\n                            <mat-card class=\"card cardOverwrite\"\n                                [ngClass]=\"{'current-org': currentOrgID == org.id, 'border': currentOrgID != org.id}\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-8 d-flex flex-column justify-content-center\">\n                                        <span class=\"fw-bold\">{{ org.name ? org.name :\n                                            COMMON_CONSTANT.HYPHEN }}</span>\n                                        <div class=\"row text-secondary\">\n                                            <div class=\"col-sm-4\" *ngIf=\"org.type == OrgType.ORGANIZATION\">Org ID:\n                                            </div>\n                                            <div class=\"col-sm-4\" *ngIf=\"org.type == OrgType.SITE\">Facility ID:</div>\n                                            <div class=\"col-sm-8 fw-bold\">{{ org.id }}</div>\n                                        </div>\n                                        <div *ngIf=\"org.type == OrgType.SITE\">\n                                            <div class=\"row text-secondary\">\n                                                <div class=\"col-sm-4\">Org Name:</div>\n                                                <div class=\"col-sm-8 fw-bold\">{{ org.orgName }}</div>\n                                            </div>\n                                            <div class=\"row text-secondary\">\n                                                <div class=\"col-sm-4\">Org ID:</div>\n                                                <div class=\"col-sm-8 fw-bold\">{{ org.orgID }}</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4 d-flex flex-column align-items-center justify-content-center\">\n                                        <ng-container *ngIf=\"org.logoUrl && org.logoUrl != null; else showDefaultIcon;\">\n                                            <img class=\"listOrgView\" [src]=\"org.logoUrl\" alt=\"org-logo\" />\n                                        </ng-container>\n                                        <ng-template #showDefaultIcon>\n                                            <ng-container *ngIf=\"org.type == OrgType.ORGANIZATION\">\n                                                <span class=\"material-symbols-outlined fs-1\">\n                                                    corporate_fare\n                                                </span>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"org.type == OrgType.SITE\">\n                                                <span class=\"material-symbols-outlined fs-1\">\n                                                    factory\n                                                </span>\n                                            </ng-container>\n                                        </ng-template>\n                                        <span [ngSwitch]=\"org.type\">\n                                            <span class=\"badge rounded-pill mt-2\"\n                                                [ngClass]=\"{'bg-success': currentOrgID == org.id, 'bg-secondary': currentOrgID != org.id}\"\n                                                *ngSwitchCase=\"'ORG'\">Organization</span>\n                                            <span class=\"badge rounded-pill mt-2\"\n                                                [ngClass]=\"{'bg-success': currentOrgID == org.id, 'bg-secondary': currentOrgID != org.id}\"\n                                                *ngSwitchCase=\"'SITE'\">Facility</span>\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"org.subscriptionStatus == OrgStatus.INACTIVE_STATUS\">\n                                    <div class=\"col-sm-12\">\n                                        <span class=\"text-danger me-3 fw-bold float-end expiredFontSize\">\n                                            Subscription expired\n                                        </span>\n                                    </div>\n                                </div>\n                            </mat-card>\n                        </div>\n                    </div>\n                </div>\n            </perfect-scrollbar>\n        </section>\n    </div>\n</div>\n\n<div class=\"drawer-overlay\" (click)=\"toggleOrgDrawerFun()\"></div>\n\n<ng-template #orgFacilityTemplate let-name=\"name\" let-state=\"state\" let-country=\"country\" let-status=\"status\"\n    let-type=\"type\" let-idLabel=\"idLabel\" let-id=\"id\" let-matCardClass=\"matCardClass\" let-image=\"image\"\n    let-orgFacilityLabel=\"orgFacilityLabel\" let-orgFacilityLabelClass=\"orgFacilityLabelClass\">\n    <div class=\"col-sm-12\">\n        <mat-card class=\"cardOverwrite cardBackgroundColor\" [class]=\"matCardClass\">\n            <div class=\"row\">\n                <div class=\"col-sm-8\">\n                    <div class=\"d-flex flex-column\">\n                        <span class=\"fw-bold\">\n                            {{ name ? name : COMMON_CONSTANT.HYPHEN }}\n                        </span>\n                        <div class=\"row text-secondary\">\n                            <div class=\"col-sm-4\">\n                                {{ idLabel }}\n                            </div>\n                            <div class=\"col-sm-8 fw-bold\">\n                                {{ id }}\n                            </div>\n                        </div>\n                        <div class=\"row text-secondary\">\n                            <div class=\"col-sm-4\">Address:</div>\n                            <div class=\"col-sm-8 fw-bold\">{{ state }}, {{ country }}</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4 text-secondary\">Status:</div>\n                            <div class=\"col-sm-8 fw-bold\"\n                                [ngClass]=\"{'text-success': status == OrgStatus.ACTIVE_STATUS, 'text-danger': status == OrgStatus.INACTIVE_STATUS}\">\n                                {{ status | titlecase }}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4 d-flex flex-column align-items-center justify-content-center\">\n                    <ng-container *ngIf=\"image && image != null; else showIcon;\">\n                        <img class=\"orgViewLogo\" [src]=\"image\" alt=\"org-logo\" />\n                    </ng-container>\n                    <ng-template #showIcon>\n                        <ng-container *ngIf=\"type == OrgType.ORGANIZATION\">\n                            <span class=\"material-symbols-outlined fs-1\">\n                                corporate_fare\n                            </span>\n                        </ng-container>\n                        <ng-container *ngIf=\"type == OrgType.SITE\">\n                            <span class=\"material-symbols-outlined fs-1\">\n                                factory\n                            </span>\n                        </ng-container>\n                    </ng-template>\n                    <span class=\"badge rounded-pill mt-2\" [class]=\"orgFacilityLabelClass\">{{ orgFacilityLabel }}</span>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</ng-template>", styles: [".mat-card{padding:12px}.current-org-border-left{border-left:5px solid #3ac47d}.org-border-left{border-left:5px solid #007bff}.cardBackgroundColor{background:whitesmoke}.badge{text-transform:none}.orgViewLogo{height:45px}.listOrgView{height:30px}.current-org{border-left:5px solid #3ac47d;background:whitesmoke}.expiredFontSize{font-size:12px}\n"], components: [{ type: i4.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i4$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i6.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], pipes: { "titlecase": i6.TitleCasePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-organization-drawer',
                    templateUrl: './organization-drawer.component.html',
                    styleUrls: ['./organization-drawer.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: i3$2.OrganizationService }, { type: i4$2.FacilityService }]; }, propDecorators: { toggleOrgDrawer: [{
                type: Input
            }], drawerAccessType: [{
                type: Input
            }], toggleOrgDrawerGlobal: [{
                type: Output
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

class SearchBarTwoModule {
}
SearchBarTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SearchBarTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoModule, declarations: [SearchBarTwoComponent], imports: [CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule], exports: [SearchBarTwoComponent] });
SearchBarTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoModule, imports: [[
            CommonModule,
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatInputModule,
            MatRippleModule,
            MatFormFieldModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SearchBarTwoComponent
                    ],
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatInputModule,
                        MatRippleModule,
                        MatFormFieldModule,
                    ],
                    exports: [SearchBarTwoComponent]
                }]
        }] });

class OrganizationDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: OrganizationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
OrganizationDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrganizationDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, declarations: [OrganizationDrawerComponent], imports: [CommonModule,
        PerfectScrollbarModule,
        MatCardModule,
        MatTooltipModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        SearchBarTwoModule], exports: [OrganizationDrawerComponent] });
OrganizationDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, imports: [[
            CommonModule,
            PerfectScrollbarModule,
            MatCardModule,
            MatTooltipModule,
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            SearchBarTwoModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrganizationDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        PerfectScrollbarModule,
                        MatCardModule,
                        MatTooltipModule,
                        FontAwesomeModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SearchBarTwoModule
                    ],
                    exports: [
                        OrganizationDrawerComponent,
                    ]
                }]
        }] });

class OrgDrawerHeaderComponent {
    constructor(storageService, organizationService, facilityService) {
        this.storageService = storageService;
        this.organizationService = organizationService;
        this.facilityService = facilityService;
        this.toggleOrgDrawerGlobal = new EventEmitter(true);
        this.OrgType = OrgType;
        this.organizationM = new Organization();
        this.facilityM = new Facility();
    }
    ngOnInit() {
        this.toggleOrgDrawerGlobal.emit(false);
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentOrgType = this.storageService.getStorage(['currentOrgType']);
        this.getOrgDetail();
    }
    getOrgDetail() {
        switch (this.currentOrgType) {
            case OrgType.ORGANIZATION:
            case OrgType.NETZERO_ADMIN:
                this.getOrgByID();
                break;
            case OrgType.SITE:
                this.getFacilityByID();
                break;
            default:
                console.error('Exception in getOrgDetail');
        }
    }
    getOrgByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.organizationM = (yield this.organizationService.getOrganizationByID(this.currentOrgID));
        });
    }
    getFacilityByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.facilityM = (yield this.facilityService.getFacilityByID(this.rootOrgID, this.currentOrgID));
        });
    }
    toggleOrgDrawFn() {
        this.toggleOrgDrawer = !this.toggleOrgDrawer;
        this.toggleOrgDrawerGlobal.emit(this.toggleOrgDrawer);
    }
}
OrgDrawerHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderComponent, deps: [{ token: i2.StorageService }, { token: i3$2.OrganizationService }, { token: i4$2.FacilityService }], target: i0.ɵɵFactoryTarget.Component });
OrgDrawerHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrgDrawerHeaderComponent, selector: "lib-org-drawer-header", inputs: { toggleOrgDrawer: "toggleOrgDrawer" }, outputs: { toggleOrgDrawerGlobal: "toggleOrgDrawerGlobal" }, ngImport: i0, template: "<div class=\"headerText\" placement=\"bottom-right\">\n    <button type=\"button\" class=\"btn\" (click)=\"toggleOrgDrawFn()\">\n        <div class=\"d-flex align-items-center\"\n            *ngIf=\"currentOrgType == OrgType.ORGANIZATION || currentOrgType == OrgType.NETZERO_ADMIN\">\n            <ng-container *ngIf=\"organizationM.logoUrl && organizationM.logoUrl != null; else showDefaultOrgIcon\">\n                <img class=\"headerImg pe-2\" [src]=\"organizationM.logoUrl\" alt=\"logo\" />\n            </ng-container>\n            <ng-template #showDefaultOrgIcon>\n                <span class=\"material-symbols-outlined fs-1 pe-2\">\n                    corporate_fare\n                </span>\n            </ng-template>\n            <span class=\"headerSection\">{{ organizationM.name }}</span>\n            &nbsp;\n            <i class=\"fa fa-caret-down\"></i>\n        </div>\n\n        <div class=\"d-flex align-items-center\" *ngIf=\"currentOrgType == OrgType.SITE\">\n            <ng-container *ngIf=\"facilityM.logoUrl && facilityM.logoUrl != null; else showDefaultFacilityIcon\">\n                <img class=\"headerImg pe-2\" [src]=\"facilityM.logoUrl\" alt=\"logo\" />\n            </ng-container>\n            <ng-template #showDefaultFacilityIcon>\n                <span class=\"material-symbols-outlined fs-1 pe-2\">\n                    factory\n                </span>\n            </ng-template>\n            <span class=\"headerSection\">{{ facilityM.name }}</span>\n            &nbsp;\n            <i class=\"fa fa-caret-down\"></i>\n        </div>\n    </button>\n</div>", styles: [".drawer-overlay{position:fixed;height:0%;width:0%;z-index:999;background:rgba(0,0,0,.3);display:block;content:\"\";left:0;top:0;visibility:hidden;opacity:0;transition:opacity .2s}.drawer-wrapper{width:500px;height:100%;position:fixed;right:-500px;top:0;transition:all .2s;z-index:9999}.org-drawer-open .drawer-wrapper{right:0;box-shadow:0 .76875rem 2.4875rem #343a404d,0 1.3375rem 1.70625rem #343a404d,0 .55rem .53125rem #0000000d,0 .225rem .4375rem #343a404d}.org-drawer-open .drawer-wrapper:before{opacity:1}.org-drawer-open .drawer-overlay{visibility:visible;opacity:1;height:100%;width:100%}.headerText{color:#4d4d4d}.headerSection{font-size:15px}.headerImg{height:40px}\n"], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-org-drawer-header',
                    templateUrl: './org-drawer-header.component.html',
                    styleUrls: ['./org-drawer-header.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }, { type: i3$2.OrganizationService }, { type: i4$2.FacilityService }]; }, propDecorators: { toggleOrgDrawer: [{
                type: Input
            }], toggleOrgDrawerGlobal: [{
                type: Output
            }] } });

class OrgDrawerHeaderModule {
}
OrgDrawerHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrgDrawerHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, declarations: [OrgDrawerHeaderComponent], imports: [NgbModule,
        BrowserModule,
        FontAwesomeModule], exports: [OrgDrawerHeaderComponent] });
OrgDrawerHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, imports: [[
            NgbModule,
            BrowserModule,
            FontAwesomeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrgDrawerHeaderComponent,
                    ],
                    imports: [
                        NgbModule,
                        BrowserModule,
                        FontAwesomeModule
                    ],
                    exports: [
                        OrgDrawerHeaderComponent
                    ]
                }]
        }] });

// import { LoaderService } from '@loginCommon/service/loader.service';
class LayoutOneComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LayoutOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutOneComponent, selector: "app-layout-one", ngImport: i0, template: "<app-loader-one></app-loader-one>\n<app-header-one></app-header-one>\n\n<div class=\"layoutOneWrapper\">\n    <div class=\"layoutOneContainer\">\n        <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n            <router-outlet #o=\"outlet\"></router-outlet>\n        </div>\n    </div>\n    <app-footer-one></app-footer-one>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", styles: [".layoutOneWrapper{background-color:#f1f3f6;position:relative;min-height:calc(100vh - 60px)}.layoutOneContainer{padding-top:40px;padding-bottom:calc(60px + 40px)}\n"], components: [{ type: LoaderOneComponent, selector: "app-loader-one" }, { type: HeaderOneComponent, selector: "app-header-one" }, { type: FooterOneComponent, selector: "app-footer-one" }, { type: i4$4.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i1$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }),
                ]),
                query(':enter', [
                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                ], { optional: true }),
                query(':leave', [
                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                ], { optional: true })
            ]),
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-layout-one',
                    templateUrl: './layout-one.component.html',
                    styleUrls: ['./layout-one.component.scss'],
                    animations: [
                        trigger('architectUIAnimation', [
                            transition('* <=> *', [
                                query(':enter, :leave', [
                                    style({
                                        opacity: 0,
                                        display: 'flex',
                                        flex: '1',
                                        flexDirection: 'column'
                                    }),
                                ]),
                                query(':enter', [
                                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                                ], { optional: true }),
                                query(':leave', [
                                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                                ], { optional: true })
                            ]),
                        ])
                    ]
                }]
        }], ctorParameters: function () { return []; } });

class LoaderOneModule {
}
LoaderOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoaderOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneModule, declarations: [LoaderOneComponent], imports: [CommonModule,
        MatProgressSpinnerModule], exports: [LoaderOneComponent] });
LoaderOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneModule, imports: [[
            CommonModule,
            MatProgressSpinnerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoaderOneComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatProgressSpinnerModule
                    ],
                    exports: [
                        LoaderOneComponent
                    ]
                }]
        }] });

class LayoutOneModule {
}
LayoutOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, declarations: [LayoutOneComponent], imports: [RouterModule,
        LoadingBarRouterModule,
        HeaderOneModule,
        FooterOneModule,
        LoaderOneModule], exports: [LayoutOneComponent] });
LayoutOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, imports: [[
            RouterModule,
            LoadingBarRouterModule,
            HeaderOneModule,
            FooterOneModule,
            LoaderOneModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutOneComponent,
                    ],
                    imports: [
                        RouterModule,
                        LoadingBarRouterModule,
                        HeaderOneModule,
                        FooterOneModule,
                        LoaderOneModule
                    ],
                    exports: [
                        LayoutOneComponent
                    ]
                }]
        }] });

class LayoutTwoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LayoutTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutTwoComponent, selector: "app-layout-two", ngImport: i0, template: "<app-loader-one></app-loader-one>\n\n<div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", components: [{ type: LoaderOneComponent, selector: "app-loader-one" }, { type: i4$4.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i1$1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }),
                ]),
                query(':enter', [
                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                ], { optional: true }),
                query(':leave', [
                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                ], { optional: true })
            ]),
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-layout-two',
                    templateUrl: './layout-two.component.html',
                    styleUrls: [],
                    animations: [
                        trigger('architectUIAnimation', [
                            transition('* <=> *', [
                                query(':enter, :leave', [
                                    style({
                                        opacity: 0,
                                        display: 'flex',
                                        flex: '1',
                                        flexDirection: 'column'
                                    }),
                                ]),
                                query(':enter', [
                                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                                ], { optional: true }),
                                query(':leave', [
                                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                                ], { optional: true })
                            ]),
                        ])
                    ]
                }]
        }], ctorParameters: function () { return []; } });

class LayoutTwoModule {
}
LayoutTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoModule, declarations: [LayoutTwoComponent], imports: [RouterModule,
        LoadingBarRouterModule,
        LoaderOneModule], exports: [LayoutTwoComponent] });
LayoutTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoModule, imports: [[
            RouterModule,
            LoadingBarRouterModule,
            LoaderOneModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutTwoComponent,
                    ],
                    imports: [
                        RouterModule,
                        LoadingBarRouterModule,
                        LoaderOneModule
                    ],
                    exports: [
                        LayoutTwoComponent
                    ]
                }]
        }] });

class StaticPageOneComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = new StaticPageOne();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }
}
StaticPageOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneComponent, deps: [{ token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
StaticPageOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageOneComponent, selector: "lib-static-page-one", ngImport: i0, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-static-page-one',
                    templateUrl: './static-page-one.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }]; } });

class StaticPageOneModule {
}
StaticPageOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StaticPageOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneModule, declarations: [StaticPageOneComponent], imports: [CommonModule], exports: [StaticPageOneComponent] });
StaticPageOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        StaticPageOneComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        StaticPageOneComponent
                    ]
                }]
        }] });

class StaticPageTwoComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = new StaticPageTwo();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }
}
StaticPageTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoComponent, deps: [{ token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
StaticPageTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageTwoComponent, selector: "app-static-page-two", ngImport: i0, template: "<div class=\"d-flex align-items-center justify-content-center position-fixed top-0 start-0 end-0 bottom-0 fs-3\">\n    <p [innerHTML]=\"data.body\"></p>\n</div>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-static-page-two',
                    templateUrl: './static-page-two.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }]; } });

class StaticPageTwoModule {
}
StaticPageTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StaticPageTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoModule, declarations: [StaticPageTwoComponent], exports: [StaticPageTwoComponent] });
StaticPageTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageTwoModule, decorators: [{
            type: NgModule,
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

class StaticPageThreeComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.data = new StaticPageOne();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }
}
StaticPageThreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeComponent, deps: [{ token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
StaticPageThreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: StaticPageThreeComponent, selector: "lib-static-page-three", ngImport: i0, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlign cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 px-5 py-2 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n\n            <div class=\"col-sm-12 px-5 py-2\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold centerAlign\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <div class=\"centerAlign\">\n                        <p class=\"text-center\" [innerHTML]=\"data.body\"></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n", directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-static-page-three',
                    templateUrl: './static-page-three.component.html',
                    styleUrls: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }]; } });

class StaticPageThreeModule {
}
StaticPageThreeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StaticPageThreeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeModule, declarations: [StaticPageThreeComponent], imports: [CommonModule], exports: [StaticPageThreeComponent] });
StaticPageThreeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StaticPageThreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        StaticPageThreeComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        StaticPageThreeComponent
                    ]
                }]
        }] });

// /tsc-library/
class TimezoneNotFoundComponent {
    constructor(activatedRoute, storageService, environment) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.environment = environment;
        this.data = new StaticPageOne();
    }
    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentOrgType = this.storageService.getStorage('currentOrgType');
        this.token = this.storageService.getStorage('token');
        this.userID = this.storageService.getStorage('userID');
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
        if (this.currentOrgType == OrgType.ORGANIZATION) {
            this.redirectUrl = `organization/${this.currentOrgID}/update`;
        }
        else if (this.currentOrgType == OrgType.SITE) {
            this.redirectUrl = `facility/${this.currentOrgID}/update`;
        }
        else {
            this.redirectUrl = `organization/view`;
        }
        this.appRedirectUrl = `${this.environment.ADMIN_URL}login?token=${this.token}&userID=${this.userID}&orgID=${this.rootOrgID}&redirectUrl=${this.redirectUrl}`;
        this.storageService.clearStorage();
    }
}
TimezoneNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Component });
TimezoneNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TimezoneNotFoundComponent, selector: "lib-timezone-not-found", ngImport: i0, template: "<div [ngClass]=\"{'container': !data.containsHeaderFooter}\">\n    <div class=\"card main-card centerAlignHorizontal cardOverwrite\" [class]=\"data.cardClass\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <img [class]=\"data.imgClass\" [src]=\"data.imgPath\" [alt]=\"data.imgAlt\" />\n            </div>\n            <div class=\"col-sm-6 p-5 centerAlign\">\n                <div class=\"card-body\">\n                    <div class=\"fs-4 fw-bold\">\n                        {{ data.title }}\n                    </div>\n                    <br />\n                    <p class=\"d-flex align-items-center\" [innerHTML]=\"data.body\">\n                    </p>\n                    <a [href]=\"appRedirectUrl\">Click here to set timezone.</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-timezone-not-found',
                    templateUrl: './timezone-not-found.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class TimezoneNotFoundModule {
    static forRoot(environment) {
        return {
            ngModule: TimezoneNotFoundModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TimezoneNotFoundModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimezoneNotFoundModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, declarations: [TimezoneNotFoundComponent], imports: [CommonModule], exports: [TimezoneNotFoundComponent] });
TimezoneNotFoundModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TimezoneNotFoundComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TimezoneNotFoundComponent
                    ]
                }]
        }] });

class SearchBarOneComponent {
    constructor() {
        this.faTimes = faTimes;
        this.faSearch = faSearch;
        this.searchFC = new FormControl('');
        this.type = 'text';
        this.searchBy = '';
        this.clear = false;
        this.emitValueOnChange = false;
        this.emitSearch = new EventEmitter();
        this.active = false;
    }
    ngOnInit() {
        if (this.emitValueOnChange) {
            this.searchFC.valueChanges.subscribe((value) => {
                if (value.length == 0) {
                    this.emitSearch.emit('');
                }
                else {
                    this.emitSearch.emit(value);
                }
            });
        }
    }
    ngOnChanges() {
        if (!this.clear) {
            this.searchFC.reset('', { onlySelf: true, emitEvent: false });
        }
    }
    searchFn() {
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
    }
    searchReset() {
        this.searchFC.reset('');
        this.searchFn();
    }
    searchClear() {
        this.active = false;
        this.searchFC.reset('');
    }
}
SearchBarOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBarOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarOneComponent, selector: "lib-search-bar-one", inputs: { type: "type", searchBy: "searchBy", clear: "clear", emitValueOnChange: "emitValueOnChange" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-search-bar-one',
                    templateUrl: './search-bar-one.component.html',
                    styleUrls: ['./search-bar-one.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], searchBy: [{
                type: Input
            }], clear: [{
                type: Input
            }], emitValueOnChange: [{
                type: Input
            }], emitSearch: [{
                type: Output
            }] } });

class SearchBarOneModule {
}
SearchBarOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SearchBarOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneModule, declarations: [SearchBarOneComponent], imports: [CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule], exports: [SearchBarOneComponent] });
SearchBarOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneModule, imports: [[
            CommonModule,
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatInputModule,
            MatRippleModule,
            MatFormFieldModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SearchBarOneComponent
                    ],
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatInputModule,
                        MatRippleModule,
                        MatFormFieldModule,
                    ],
                    exports: [SearchBarOneComponent]
                }]
        }] });

class BackButtonComponent {
    constructor(tSCCommonService) {
        this.tSCCommonService = tSCCommonService;
        this.faArrowAltCircleLeft = faArrowAltCircleLeft;
    }
    ngOnInit() {
    }
    backBtnClick() {
        this.tSCCommonService.back();
    }
}
BackButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonComponent, deps: [{ token: TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
BackButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BackButtonComponent, selector: "lib-back-button", ngImport: i0, template: "<button class=\"btn btn-outline-light text-dark rounded-pill\" (click)=\"backBtnClick();\">\n    <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon> &nbsp;Back\n</button>\n", components: [{ type: i1$3.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-back-button',
                    templateUrl: './back-button.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: TSCCommonService }]; } });

class BackButtonModule {
}
BackButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BackButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonModule, declarations: [BackButtonComponent], imports: [FontAwesomeModule], exports: [BackButtonComponent] });
BackButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonModule, imports: [[
            FontAwesomeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BackButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BackButtonComponent,
                    ],
                    imports: [
                        FontAwesomeModule
                    ],
                    exports: [
                        BackButtonComponent
                    ]
                }]
        }] });

class DialogOneComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.dialogOne = DialogOneEnum;
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
    }
    success() {
        this.dialogRef.close(true);
    }
    fail() {
        this.dialogRef.close(false);
    }
}
DialogOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneComponent, deps: [{ token: i1$4.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
DialogOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DialogOneComponent, selector: "lib-dialog-one", ngImport: i0, template: "<div mat-dialog-title class=\"dialogTitle mb-0\">\n    <div *ngIf=\"data.type == dialogOne.DELETE;else ElseBlock\" class=\"d-flex text-danger row\">\n        <div class=\"row d-flix\">\n            <div class=\"col-sm-1 centerAlign\">\n                <span class=\"material-symbols-outlined \">\n                    {{data.icon}}\n                </span>\n            </div>\n            <div class=\"col-sm-11\">\n                <strong>\n                    {{data.header}}\n                </strong>\n            </div>\n        </div>\n\n    </div>\n    <ng-template #ElseBlock class=\"d-flex row\">\n        <div class=\"row\" [ngClass]=\"{'text-warning': data.type == dialogOne.CONFIRMATION, 'text-info': data.type == dialogOne.INFO}\">\n            <div class=\"col-sm-1 ps-2 centerAlign\">\n                <span class=\"material-symbols-outlined\">\n                    {{data.icon}}\n                </span>\n            </div>\n            <div class=\"col-sm-11\">\n                <strong>\n                    {{data.header}}\n                </strong>\n            </div>\n        </div>\n    </ng-template>\n</div>\n<div class=\"card-body breakLine mat-typography ms-4\">\n    <div [innerHTML]=\"data.body\"></div><br />\n</div>\n<div *ngIf=\"data.type == dialogOne.DELETE\">\n    <button class=\"btn btn-sm btn-secondary float-end ms-2\" (click)=\"fail()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n    <button class=\"btn btn-sm btn-danger float-end ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonTwo }}\n    </button>\n</div>\n\n<div *ngIf=\"data.type == dialogOne.INFO\">\n    <button class=\"btn btn-sm  float-centre ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n</div>\n\n<div *ngIf=\"data.type == dialogOne.CONFIRMATION\">\n    <button class=\"btn btn-sm btn-warning text-white float-end ms-2\" (click)=\"success()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonTwo }}\n    </button>\n    <button class=\"btn btn-sm btn-secondary float-end ms-2\" (click)=\"fail()\" matRipple\n        [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        {{ data.buttonOne }}\n    </button>\n</div>", directives: [{ type: i1$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-dialog-one',
                    templateUrl: './dialog-one.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$4.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

class DialogOneModule {
}
DialogOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, declarations: [DialogOneComponent], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule], exports: [DialogOneComponent] });
DialogOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DialogOneComponent],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule
                    ],
                    exports: [DialogOneComponent]
                }]
        }] });

class TypeConfirmationDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.DialogOneEnum = DialogOneEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.btnFlag = false;
    }
    ngOnInit() {
    }
    confirmationCheck(value) {
        this.data.confirmationInput == value ? this.btnFlag = true : this.btnFlag = false;
    }
    success() {
        this.dialogRef.close(true);
    }
    fail() {
        this.dialogRef.close(false);
    }
}
TypeConfirmationDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialog, deps: [{ token: i1$4.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
TypeConfirmationDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TypeConfirmationDialog, selector: "app-type-dialog", ngImport: i0, template: "<ng-container *ngIf=\"data.type; else deleteTemplate\">\n    <div mat-dialog-title class=\"fw-4 mb-1 d-flex\">\n        <div class=\"col-sm-1\">\n            <span class=\"material-symbols-outlined mr-2 pt-2 ps-3\">\n                {{data.icon}}\n            </span>\n        </div>\n\n        <strong class=\"col-sm-11 \">\n            <div class=\"pt-1\" [innerHTML]=\"data.header\"></div>\n        </strong>\n    </div>\n</ng-container>\n\n<ng-template #deleteTemplate>\n    <div mat-dialog-title class=\"fw-4 mb-1 text-danger d-flex\">\n        <div class=\"col-sm-1\">\n            <span class=\"material-symbols-outlined mr-2 pt-2 ps-3\">\n                {{data.icon}}\n            </span>\n        </div>\n\n        <strong class=\"col-sm-11 \">\n            <div class=\"pt-1\" [innerHTML]=\"data.header\"></div>\n        </strong>\n    </div>\n</ng-template>\n\n<div mat-dialog-content class=\"card-body ms-4 mb-2\">\n    <div [innerHTML]=\"data.body\"></div><br />\n    <div class=\"ps-2\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label class=\"formLabel\">Please type \"{{data.confirmationInput}}\" to continue.</mat-label>\n                <input matInput type=\"text\" placeholder=\"\"  (input)=\"confirmationCheck($event.target.value)\">\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n\n<div mat-dialog-footer align=\"end\" class=\"ms-2 mb-3\">\n    <ng-container *ngIf=\"data.type; else elseBlock\">\n        <button class=\"btn btn-sm btn-secondary float-end ms-2 mb-3 me-1\" (click)=\"fail()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n            {{ data.buttonOne }}\n        </button>\n        <button class=\"btn btn-sm btn-success float-end ms-2 mb-3 me-1\" (click)=\"success()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [disabled]=\"!btnFlag\">\n            {{ data.buttonTwo }}\n        </button>\n    </ng-container>\n\n    <ng-template #elseBlock>\n        <button class=\"btn btn-sm btn-secondary float-end ms-2 mb-3 me-1\" (click)=\"fail()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n            {{ data.buttonOne }}\n        </button>\n        <button class=\"btn btn-sm btn-danger float-end ms-2 mb-3 me-1\" (click)=\"success()\" matRipple\n            [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [disabled]=\"!btnFlag\">\n            {{ data.buttonTwo }}\n        </button>\n    </ng-template>\n</div>", components: [{ type: i3$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i3$3.MatLabel, selector: "mat-label" }, { type: i4$5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialog, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-type-dialog',
                    templateUrl: './type-confirmation.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1$4.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });

class TypeConfirmationDialogModule {
}
TypeConfirmationDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TypeConfirmationDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialogModule, declarations: [TypeConfirmationDialog], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatFormFieldModule], exports: [TypeConfirmationDialog] });
TypeConfirmationDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialogModule, imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatInputModule,
            MatFormFieldModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TypeConfirmationDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TypeConfirmationDialog
                    ],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatInputModule,
                        MatFormFieldModule,
                    ],
                    exports: [TypeConfirmationDialog]
                }]
        }] });

// /tsc-library/
class ProfileLogoUploadComponent {
    constructor(dialog, toastrService) {
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.roundCropper = false;
        this.showDeleteBtnInp = false;
        this.removeImgActionInp = 'REMOVE';
        this.imageSelectedEvent = new EventEmitter();
        this.imageRemoveEvent = new EventEmitter();
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.image = [];
        this.croppedImage = null;
        this.previewBtnLabel = 'Update';
        this.hideCropper = true;
        this.imageChangedEvent = '';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.imageInp && this.imageInp) {
            this.currentImg = this.imageInp;
        }
        if (changes.previewBtnLabelInp && this.previewBtnLabelInp) {
            this.previewBtnLabel = this.previewBtnLabelInp;
        }
    }
    chooseImage() {
        this.imageUpdate.nativeElement.click();
    }
    imageSelected() {
        this.cropperImageInput.nativeElement.click();
    }
    emptyInput() {
        this.cropperImageInput.nativeElement.value = '';
    }
    imageCropped(event) {
        this.image = [];
        this.croppedImage = event.base64;
        this.image.push(base64ToFile(this.croppedImage));
    }
    imageLoaded(image) { }
    ;
    cropperReady() { }
    loadImageFailed() {
        this.toastrService.openToast('Error', 'Couldn\'t load image. Try again!', 'error');
    }
    fileChangeEvent(event) {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        }
        else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
            }
            else {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
            }
            this.emptyInput();
            return;
        }
    }
    isFileAllowed(fileName) {
        let isFileAllowed = false;
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);
        if (undefined !== extension && null !== extension) {
            for (const ext of COMMON_CONSTANT.ALLOWED_IMAGE_TYPES) {
                if (ext === extension[0]) {
                    isFileAllowed = true;
                }
            }
        }
        return isFileAllowed;
    }
    isFileSizeAllowed(size) {
        let isSizeAllowed = false;
        if (size < COMMON_CONSTANT.MAX_IMAGE_SIZE) {
            isSizeAllowed = true;
        }
        return isSizeAllowed;
    }
    openEditDialog() {
        this.dialogRef = this.dialog.open(this.openCropper, {
            minWidth: '350px'
        });
        this.dialogRef.disableClose = true;
        this.dialogRef.afterClosed()
            .subscribe(result => {
            this.imageUpdate.nativeElement.value = null;
        });
    }
    updateFile(fileEvent) {
        const file = fileEvent.target.files[0];
        if (file) {
            this.fileChangeEvent(fileEvent);
            this.openEditDialog();
        }
    }
    updateImage() {
        if (this.image.length == 0) {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Please select a picture', ToastrColor.ERROR);
            return;
        }
        this.currentImg = this.croppedImage;
        // this.showDeleteBtnInp = true;
        this.imageSelectedEvent.emit({ image: this.image[0] });
        this.hideCropper = true;
        this.dialogRef.close();
    }
    removeImage() {
        if (this.removeImgActionInp == 'DELETE') {
            this.deleteImage();
        }
        else {
            this.imageRemoveEvent.emit();
        }
    }
    deleteImage() {
        this.dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete Image?',
                body: `Are you sure you want to delete this image?`,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            },
            minHeight: '200px',
            minWidth: '450px',
        });
        this.dialogRef.disableClose = true;
        this.dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.imageRemoveEvent.emit();
            }
        });
    }
}
ProfileLogoUploadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadComponent, deps: [{ token: i1$4.MatDialog }, { token: i2$1.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ProfileLogoUploadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileLogoUploadComponent, selector: "lib-profile-logo-upload", inputs: { roundCropper: "roundCropper", imageInp: "imageInp", showDeleteBtnInp: "showDeleteBtnInp", previewBtnLabelInp: "previewBtnLabelInp", removeImgActionInp: "removeImgActionInp" }, outputs: { imageSelectedEvent: "imageSelectedEvent", imageRemoveEvent: "imageRemoveEvent" }, viewQueries: [{ propertyName: "imageUpdate", first: true, predicate: ["imageUpdate"], descendants: true }, { propertyName: "openCropper", first: true, predicate: ["openCropper"], descendants: true }, { propertyName: "cropperImageInput", first: true, predicate: ["cropperImageInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"imageContainer border rounded\">\n    <img class=\"imgView d-block cursorPointer\" [src]=\"currentImg\" alt=\"Uploaded Image\" (click)=\"chooseImage()\">\n\n    <button class=\"editImgBtn profilelogoBtn\" type=\"button\" (click)=\"chooseImage()\" #tooltip=\"matTooltip\"\n        matTooltipPosition=\"above\" matTooltip=\"Click to edit image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            edit\n        </span>\n    </button>\n\n    <button *ngIf=\"showDeleteBtnInp\" class=\"deleteImgBtn profilelogoBtn\" type=\"button\" (click)=\"removeImage()\"\n        #tooltip=\"matTooltip\" matTooltipPosition=\"above\" matTooltip=\"Remove image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            delete\n        </span>\n    </button>\n\n    <input #imageUpdate class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n        (change)=\"updateFile($event)\" />\n</div>\n\n<ng-template #openCropper>\n    <h6 mat-dialog-title>\n        <strong [ngClass]=\"{'d-none': hideCropper}\">Crop Image</strong>\n        <strong [ngClass]=\"{'d-none': !hideCropper}\">Preview</strong>\n        <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n            matTooltipPosition=\"before\">\n            <span class=\"material-symbols-outlined\">close</span>\n        </button>\n    </h6>\n    <hr class=\"mt-0\" />\n    <div mat-dialog-content>\n        <form enctype=\"multipart/form-data\">\n            <div class=\"row cropperDimensions mx-auto\" [ngClass]=\"{'d-none': hideCropper}\">\n                <input #cropperImageInput class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n                    (change)=\"fileChangeEvent($event)\" />\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"roundCropper\"\n                    [roundCropper]=\"roundCropper\" format=\"png,jpg,jpeg\" (imageCropped)=\"imageCropped($event)\"\n                    (imageLoaded)=\"imageLoaded($event)\" (cropperReady)=\"cropperReady()\"\n                    (loadImageFailed)=\"loadImageFailed()\">\n                </image-cropper>\n            </div>\n            <div class=\"row\" [ngClass]=\"{'d-none': !hideCropper}\">\n                <div class=\"col-sm-12\">\n                    <img class=\"border d-block mx-auto updateImgPreview\" [src]=\"croppedImage\"\n                        [ngClass]=\"{'rounded-circle': roundCropper}\" />\n                </div>\n            </div>\n        </form>\n    </div>\n    <mat-divider class=\"mt-2\"></mat-divider>\n    <mat-dialog-actions align=\"end\">\n        <div [ngClass]=\"{'d-none': hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-primary ms-2\" type=\"button\" (click)=\"hideCropper = !hideCropper\">\n                Crop\n            </button>\n        </div>\n        <div [ngClass]=\"{'d-none': !hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-success ms-2\" type=\"button\" (click)=\"updateImage()\">\n                {{ previewBtnLabel }}\n            </button>\n        </div>\n    </mat-dialog-actions>\n</ng-template>", styles: [".imageContainer{will-change:transform;width:110px;height:110px;display:flex;flex:auto;align-items:center;justify-content:center;float:left;padding:3px}.imageContainer :hover{opacity:.85;transition:transform .5s;transform:scale(1.05)}.imgView{max-width:100%;max-height:100%}.profilelogoBtn{will-change:transform;bottom:3px;position:absolute!important;width:25px!important;height:25px!important;color:#fff;background-color:#000;border-radius:50%;border:1px solid white!important;opacity:.5;display:flex!important;align-items:center;justify-content:center}.editImgBtn{right:3px}.deleteImgBtn{right:30px}.imageIcon{will-change:transform;font-size:small}.cropperDimensions{max-width:350px;max-height:auto}.updateImgPreview{width:250px}.matDialogClose{background-color:#80808033}\n"], components: [{ type: i3$4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i4$6.ImageCropperComponent, selector: "image-cropper", inputs: ["format", "transform", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "cropper", "alignImage", "disabled", "imageChangedEvent", "imageURL", "imageBase64", "imageFile"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed"] }, { type: i5$3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], directives: [{ type: i6$1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i1$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1$4.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-profile-logo-upload',
                    templateUrl: './profile-logo-upload.component.html',
                    styleUrls: ['./profile-logo-upload.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$4.MatDialog }, { type: i2$1.ToastrService }]; }, propDecorators: { roundCropper: [{
                type: Input
            }], imageInp: [{
                type: Input
            }], showDeleteBtnInp: [{
                type: Input
            }], previewBtnLabelInp: [{
                type: Input
            }], removeImgActionInp: [{
                type: Input
            }], imageSelectedEvent: [{
                type: Output
            }], imageRemoveEvent: [{
                type: Output
            }], imageUpdate: [{
                type: ViewChild,
                args: ['imageUpdate']
            }], openCropper: [{
                type: ViewChild,
                args: ['openCropper']
            }], cropperImageInput: [{
                type: ViewChild,
                args: ['cropperImageInput']
            }] } });

class ProfileLogoUploadModule {
}
ProfileLogoUploadModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProfileLogoUploadModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadModule, declarations: [ProfileLogoUploadComponent], imports: [CommonModule,
        MatDialogModule,
        ImageCropperModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule], exports: [ProfileLogoUploadComponent] });
ProfileLogoUploadModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadModule, imports: [[
            CommonModule,
            MatDialogModule,
            ImageCropperModule,
            MatTooltipModule,
            MatButtonModule,
            MatIconModule,
            MatDividerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ProfileLogoUploadComponent
                    ],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        ImageCropperModule,
                        MatTooltipModule,
                        MatButtonModule,
                        MatIconModule,
                        MatDividerModule
                    ],
                    exports: [
                        ProfileLogoUploadComponent
                    ]
                }]
        }] });

const DATE_YEAR_MONTH_FORMAT = {
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
const MONTH_YEAR_FORMAT = {
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
const YEAR_FORMAT = {
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
class DateMonthYearFormatDirective {
    constructor() { }
}
DateMonthYearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DateMonthYearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: DATE_YEAR_MONTH_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appDateMonthYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: DATE_YEAR_MONTH_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class MonthYearFormatDirective {
    constructor() { }
}
MonthYearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthYearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MonthYearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: MonthYearFormatDirective, selector: "[appMonthYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MONTH_YEAR_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MonthYearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appMonthYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: MONTH_YEAR_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class YearFormatDirective {
    constructor() { }
}
YearFormatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YearFormatDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
YearFormatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: YearFormatDirective, selector: "[appYearFormat]", providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: YEAR_FORMAT
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: YearFormatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[appYearFormat]',
                    providers: [
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE]
                        },
                        {
                            provide: MAT_DATE_FORMATS,
                            useValue: YEAR_FORMAT
                        }
                    ],
                }]
        }], ctorParameters: function () { return []; } });
class DateMonthYearFormatModule {
}
DateMonthYearFormatModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateMonthYearFormatModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective], exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective] });
DateMonthYearFormatModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateMonthYearFormatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                    exports: [DateMonthYearFormatDirective, MonthYearFormatDirective, YearFormatDirective],
                }]
        }] });

class DateFilterComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.frequency = [];
        this.defaultFlag = null;
        this.emitFilter = new EventEmitter();
        this.today = new Date();
        this.durationValueFC = new FormControl(moment().format("YYYY-MM"));
        this.daterange = new FormControl();
        this.startDate = new FormControl(moment().startOf('month').format("YYYY-MM-DD"));
        this.endDate = new FormControl(moment().endOf('month').format("YYYY-MM-DD"));
        this.frequencyKeyIDFC = new FormControl();
    }
    ngOnInit() {
        if (this.defaultFlag) {
            this.frequencyKeyIDFC.patchValue(this.defaultFlag);
        }
        else {
            this.frequencyKeyIDFC.patchValue(FrequencyEnum.MONTHLY_KEY_ID);
        }
        if (this.frequency.length == 0) {
            this.frequency = FREQUENCY_CONSTANT;
        }
        this.frequencyChange();
    }
    frequencyChange() {
        let duration;
        let startDate;
        let endDate;
        switch (this.frequencyKeyIDFC.value) {
            case FrequencyEnum.DAILY_KEY_ID:
                duration = moment(this.today).format("YYYY-MM-DD");
                startDate = moment().format("YYYY-MM-DD");
                endDate = moment().format("YYYY-MM-DD");
                break;
            case FrequencyEnum.MONTHLY_KEY_ID:
                duration = moment(this.today).format("YYYY-MM");
                startDate = moment().startOf('month').format("YYYY-MM-DD");
                endDate = moment().endOf('month').format("YYYY-MM-DD");
                break;
            case FrequencyEnum.YEARLY_KEY_ID:
                duration = moment(this.today).format("YYYY");
                startDate = moment().startOf('year').format("YYYY-MM-DD");
                endDate = moment().endOf('year').format("YYYY-MM-DD");
                break;
            case FrequencyEnum.CUSTOM_KEY_ID:
                console.log("Frequency: ", this.frequencyKeyIDFC.value);
                break;
            default:
                console.log('undefined case encountered!');
        }
        this.durationValueFC.patchValue(duration);
        if (this.frequencyKeyIDFC.value != FrequencyEnum.CUSTOM_KEY_ID) {
            this.daterange.patchValue('');
            this.startDate.patchValue(startDate);
            this.endDate.patchValue(endDate);
            this.emitFilter.emit();
        }
    }
    openDatepicker() {
        if (this.frequencyKeyIDFC.value == FrequencyEnum.CUSTOM_KEY_ID) {
            this.pickerDirective.open();
        }
    }
    openDatepickerOnClick(datepicker) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }
    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }
    dateSelectedHandler(chosenDate) {
        this.durationValueFC.patchValue(moment(chosenDate).format("YYYY-MM-DD"));
        this.startDate.patchValue(moment(chosenDate).format("YYYY-MM-DD"));
        this.endDate.patchValue(moment(chosenDate).format("YYYY-MM-DD"));
        this.emitFilter.emit();
    }
    monthSelectedHandler(normalizedMonthAndYear, datepicker) {
        datepicker.close();
        let duration = moment(normalizedMonthAndYear).format("YYYY-MM");
        this.durationValueFC.patchValue(duration);
        this.startDate.patchValue(moment(normalizedMonthAndYear).startOf('month').format("YYYY-MM-DD"));
        this.endDate.patchValue(moment(normalizedMonthAndYear).endOf('month').format("YYYY-MM-DD"));
        this.emitFilter.emit();
    }
    yearSelectedHandler(normalizedYear, datepicker) {
        datepicker.close();
        let duration = moment(normalizedYear).format("YYYY");
        this.durationValueFC.patchValue(duration);
        this.startDate.patchValue(moment(normalizedYear).startOf('year').format("YYYY-MM-DD"));
        this.endDate.patchValue(moment(normalizedYear).endOf('year').format("YYYY-MM-DD"));
        this.emitFilter.emit();
    }
    customDateRange(selectedValue) {
        if (this.frequencyKeyIDFC.value == FrequencyEnum.CUSTOM_KEY_ID) {
            this.startDate.patchValue(moment(selectedValue.startDate).format('YYYY-MM-DD'));
            this.endDate.patchValue(moment(selectedValue.endDate).format('YYYY-MM-DD'));
            this.durationValueFC.patchValue(this.endDate);
            this.emitFilter.emit();
        }
    }
}
DateFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterComponent, deps: [{ token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Component });
DateFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: DateFilterComponent, selector: "lib-date-filter", inputs: { frequency: "frequency", defaultFlag: "defaultFlag" }, outputs: { emitFilter: "emitFilter" }, viewQueries: [{ propertyName: "pickerDirective", first: true, predicate: DaterangepickerDirective, descendants: true }], ngImport: i0, template: "<mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"frequencyKeyIDFC\" (change)=\"frequencyChange()\">\n    <mat-button-toggle *ngFor=\"let frequency2 of frequency\" value=\"{{ frequency2.keyID }}\">\n        {{ frequency2.name }}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-form-field class=\"ms-3\" id=\"dailyField\" appDateMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='DAILY'}\" (click)=\"openDatepickerOnClick(daily)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(daily)\" (keydown.enter)=\"openDatepickerOnClick(daily)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"daily\" [formControl]=\"durationValueFC\" [max]=\"today\"\n        (dateInput)=\"dateSelectedHandler($event.value)\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"daily\"></mat-datepicker-toggle>\n    <mat-datepicker #daily (closed)=\"takeFocusAway('dailyField')\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"monthlyField\" appMonthYearFormat\n    [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='MONTHLY'}\" (click)=\"openDatepickerOnClick(monthly)\"\n    (keydown.arrowdown)=\"openDatepickerOnClick(monthly)\" (keydown.enter)=\"openDatepickerOnClick(monthly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"durationValueFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n        (monthSelected)=\"monthSelectedHandler($event, monthly)\" (closed)=\"takeFocusAway('monthlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" id=\"yearlyField\" appYearFormat [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='YEARLY'}\"\n    (click)=\"openDatepickerOnClick(yearly)\" (keydown.arrowdown)=\"openDatepickerOnClick(yearly)\"\n    (keydown.enter)=\"openDatepickerOnClick(yearly)\">\n    <input matInput class=\"noFocus\" [matDatepicker]=\"yearly\" [formControl]=\"durationValueFC\" [max]=\"today\" readonly />\n    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"yearly\"></mat-datepicker-toggle>\n    <mat-datepicker panelClass=\"yearPicker\" #yearly startView=\"multi-year\"\n        (yearSelected)=\"yearSelectedHandler($event, yearly)\" (closed)=\"takeFocusAway('yearlyField')\">\n    </mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"ms-3\" [ngClass]=\"{'d-none': frequencyKeyIDFC.value !='CUSTOM'}\">\n    <mat-label class=\"formLabel\"> Select date </mat-label>\n    <input type=\"text\" matInput ngxDaterangepickerMd\n        [locale]=\"{direction: 'ltr', applyLabel: 'Apply', format: 'DD-MMM-YYYY', customRangeLabel: 'Custom Range'}\"\n        [drops]=\"'down'\" [opens]=\"'right'\" [alwaysShowCalendars]=\"true\" [keepCalendarOpeningWithRange]=\"true\"\n        [showDropdowns]=\"true\" [showCancel]=\"true\" autocomplete=\"off\" name=\"daterange\" [formControl]=\"daterange\"\n        (ngModelChange)=\"customDateRange(daterange.value)\" [readonly]=\"true\" />\n</mat-form-field>", styles: [".matBtnFilter mat-button-toggle.mat-button-toggle-checked{background-color:#e6e6e6!important}.noFocus{pointer-events:none}.formLabel{text-transform:none}\n"], components: [{ type: i5$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4$7.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i4$7.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i5$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: DateMonthYearFormatDirective, selector: "[appDateMonthYearFormat]" }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i4$7.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i2$3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3$3.MatSuffix, selector: "[matSuffix]" }, { type: MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: YearFormatDirective, selector: "[appYearFormat]" }, { type: i3$3.MatLabel, selector: "mat-label" }, { type: i9.DaterangepickerDirective, selector: "input[ngxDaterangepickerMd]", inputs: ["dateLimit", "showCancel", "lockStartDate", "timePicker", "timePicker24Hour", "timePickerIncrement", "timePickerSeconds", "closeOnAutoApply", "_endKey", "drops", "opens", "locale", "startKey", "endKey", "minDate", "maxDate", "autoApply", "alwaysShowCalendars", "showCustomRangeLabel", "linkedCalendars", "singleDatePicker", "showWeekNumbers", "showISOWeekNumbers", "showDropdowns", "isInvalidDate", "isCustomDate", "isTooltipDate", "showClearButton", "customRangeDirection", "ranges", "lastMonthDayClass", "emptyWeekRowClass", "emptyWeekColumnClass", "firstDayOfNextMonthClass", "lastDayOfPreviousMonthClass", "keepCalendarOpeningWithRange", "showRangeLabelOnInput"], outputs: ["change", "rangeClicked", "datesUpdated", "startDateChanged", "endDateChanged"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-date-filter',
                    templateUrl: './date-filter.component.html',
                    styleUrls: ['./date-filter.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }]; }, propDecorators: { frequency: [{
                type: Input
            }], defaultFlag: [{
                type: Input
            }], emitFilter: [{
                type: Output
            }], pickerDirective: [{
                type: ViewChild,
                args: [DaterangepickerDirective, { static: false }]
            }] } });

class DateFilterModule {
}
DateFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, declarations: [DateFilterComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateMonthYearFormatModule, i9.NgxDaterangepickerMd], exports: [DateFilterComponent] });
DateFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonToggleModule,
            MatInputModule,
            MatNativeDateModule,
            MatDatepickerModule,
            DateMonthYearFormatModule,
            NgxDaterangepickerMd.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateFilterComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonToggleModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        DateMonthYearFormatModule,
                        NgxDaterangepickerMd.forRoot(),
                    ],
                    exports: [
                        DateFilterComponent
                    ]
                }]
        }] });

class SkeletonComponent {
}
SkeletonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkeletonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SkeletonComponent, selector: "lib-skeleton-loader", inputs: { count: "count", appearance: "appearance", theme: "theme" }, ngImport: i0, template: "<ngx-skeleton-loader [count]=\"count\" [appearance]=\"appearance\" [theme]=\"theme\" animation=\"progress\">\n</ngx-skeleton-loader>", components: [{ type: i1$5.NgxSkeletonLoaderComponent, selector: "ngx-skeleton-loader", inputs: ["count", "loadingText", "appearance", "animation", "ariaLabel", "theme"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-skeleton-loader',
                    templateUrl: './skeleton.component.html',
                    styleUrls: []
                }]
        }], propDecorators: { count: [{
                type: Input
            }], appearance: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });

class SkeletonModule {
}
SkeletonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkeletonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, declarations: [SkeletonComponent], imports: [i1$5.NgxSkeletonLoaderModule, CommonModule], exports: [SkeletonComponent] });
SkeletonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, imports: [[
            NgxSkeletonLoaderModule.forRoot(),
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkeletonComponent],
                    imports: [
                        NgxSkeletonLoaderModule.forRoot(),
                        CommonModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    exports: [SkeletonComponent]
                }]
        }] });

class BulkUploadDialogLib {
    constructor(dialogRef, data, toastrService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toastrService = toastrService;
        this.error = false;
        this.duplicateData = null;
        this.mandatoryData = null;
        this.loaded = 0;
        this.fileUploaded = new EventEmitter();
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.templateFileSrc = this.data['source'];
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (!this.isFileAllowed(file.name)) {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
                return;
            }
            else if (file.size > BulkUploadEnum.MAX_FILE_SIZE) {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('loadstart', () => {
                this.loaded = 0;
                this.progress = true;
            });
            reader.addEventListener('progress', (event) => this.loaded = (event.loaded / event.total) * 100);
            reader.addEventListener('load', () => {
                this.bulkUpload = file;
                this.fileName = file.name;
            });
            reader.addEventListener('loadend', () => this.progress = false);
            reader.addEventListener('abort', () => {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID, ToastrColor.ERROR);
            });
            reader.addEventListener('error', () => {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.UPLOAD_FILE_ERROR, ToastrColor.ERROR);
            });
        }
    }
    resetFileInput() {
        this.fileName = null;
        this.bulkUpload = null;
        this.bulkUploadFile.nativeElement.value = null;
    }
    isFileAllowed(fileName) {
        let isFileAllowed = false;
        const allowedFiles = ['.xlsx', '.xls'];
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);
        if (undefined !== extension && null !== extension) {
            allowedFiles.forEach(extnsn => {
                if (extnsn === extension[0]) {
                    isFileAllowed = true;
                }
            });
        }
        return isFileAllowed;
    }
    bulkUploadBtn(controlName) {
        document.getElementById(controlName).click();
    }
    toFormData(bulkUpload) {
        const formData = new FormData();
        formData.append('file', this.bulkUpload);
        return formData;
    }
    bulkUploadFun() {
        if (this.bulkUpload == null) {
            this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.NO_FILE, ToastrColor.ERROR);
            return;
        }
        this.dialogRef.close(this.bulkUpload);
    }
}
BulkUploadDialogLib.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLib, deps: [{ token: i1$4.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2$1.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
BulkUploadDialogLib.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BulkUploadDialogLib, selector: "app-bulk-upload-dialog", outputs: { fileUploaded: "fileUploaded" }, viewQueries: [{ propertyName: "bulkUploadFile", first: true, predicate: ["bulkUploadFile"], descendants: true }], ngImport: i0, template: "<h6 mat-dialog-title>\n    <strong class=\"dialogTitle\" [ngClass]=\"{'d-none': error}\">\n        Import\n    </strong>\n</h6>\n<hr />\n\n<div class=\"row\" [ngClass]=\"{'d-none': error}\">\n    <div class=\"centerAlign mt-2\">\n        <span class=\"material-symbols-outlined fs-2\">\n            download\n        </span>\n        <a [href]=\"templateFileSrc\" download class=\"ms-2\">Download template file</a>\n    </div><br />\n    <div class=\"text-center\">\n        <input #bulkUploadFile id=\"bulkUploadFile\" class=\"d-none\" type=\"file\" accept=\".xlsx, .xls\"\n            (change)=\"onFileChange($event)\" />\n\n        <button class=\"btn btn-primary mt-4\" type=\"button\" (click)=\"bulkUploadBtn('bulkUploadFile')\">\n            Upload file\n        </button>\n        <p class=\"mt-2\" *ngIf=\"!progress\">{{ fileName }}</p>\n    </div>\n\n    <div *ngIf=\"progress\" class=\"mt-1 mb-3\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 centerAlign\">\n                <mat-progress-bar class=\"rounded fileUploadBar\" mode=\"determinate\" [value]=\"loaded\"></mat-progress-bar>\n            </div>\n            <div class=\"col-sm-2 centerAlign\">\n                {{ loaded }} %\n            </div>\n        </div>\n    </div>\n\n    <div align=\"end\">\n        <button type=\"button\" class=\"button btn btn-secondary me-2\" mat-dialog-close>Cancel</button>\n        <button type=\"submit\" class=\"button btn btn-success ms-2\" (click)=\"bulkUploadFun()\">\n            Submit\n        </button>\n    </div>\n</div>\n", components: [{ type: i3$5.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "mode", "value", "bufferValue"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLib, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-bulk-upload-dialog',
                    templateUrl: './bulk-upload-dialog.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1$4.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2$1.ToastrService }]; }, propDecorators: { fileUploaded: [{
                type: Output
            }], bulkUploadFile: [{
                type: ViewChild,
                args: ['bulkUploadFile']
            }] } });
class BulkUploadDialogLibModule {
}
BulkUploadDialogLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulkUploadDialogLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, declarations: [BulkUploadDialogLib], imports: [CommonModule,
        MatDialogModule,
        MatProgressBarModule], exports: [BulkUploadDialogLib] });
BulkUploadDialogLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, imports: [[
            CommonModule,
            MatDialogModule,
            MatProgressBarModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatProgressBarModule
                    ],
                    exports: [BulkUploadDialogLib],
                    declarations: [BulkUploadDialogLib]
                }]
        }] });

class FunnelFilterComponent {
    constructor() {
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
        this.mono = new EventEmitter(); /* emits selected value for single select */
        this.multi = new EventEmitter(); /* emits selected value for multiple select */
        this.selected = new EventEmitter(); /* output for selected object for chip creation */
        this.all_entities_length = 0;
        this.filterFC = new FormControl();
        this.init = true;
        this.all_entities_value = [];
        this.selected_entities = new Set();
        this.multiFilterApplied = false;
        this.searchUtil = new MatSelectSearchService(this.searchBy);
    }
    ;
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.searchBy) {
            this.searchUtil.searchBy = this.searchBy;
        }
        if ((changes === null || changes === void 0 ? void 0 : changes.entityList) || ((changes === null || changes === void 0 ? void 0 : changes.resetFlag) && !changes.resetFlag.firstChange)) {
            this.addAllEntities();
        }
    }
    addAllEntities() {
        if (this.entityList != null && this.entityList != undefined && this.entityList.length > 0) {
            if (this.type == 'multi') {
                this.all_entities_length = this.entityList.length;
                this.all_entities_value = ['all'];
                this.entityList.forEach(entity => {
                    this.selected_entities.add(entity);
                    this.all_entities_value.push(entity[this.value]);
                });
                this.selectFC.patchValue(this.all_entities_value);
            }
            this.searchUtil.entityArr = this.entityList;
            this.searchUtil.createSubscription();
        }
    }
    selectionChange(value) { this.mono.emit(value); }
    selectedEntity(entity) { this.selected.next(entity); }
    resetOnNoChange(event) {
        if (event) {
            this.prev = this.selectFC.value;
            this.multiFilterApplied = false;
        }
        else {
            if (this.prev != this.selectFC.value && !this.multiFilterApplied) {
                this.selectFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }
    selectEntity(entity /* entity: json */) {
        if (!this.selected_entities.delete(entity)) {
            this.selected_entities.add(entity);
        }
        const k = this.selectFC.value.indexOf('all');
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
    }
    applyFilter() {
        if (this.selectFC.value.length == 0)
            return;
        this.multiFilterApplied = true;
        this.multi.emit(this.selectFC.value);
        this.selected.next(this.selected_entities);
    }
    selectAllEntities() {
        if (!this.selectFC.value.includes('all') && this.selectFC.value.length > 0) {
            this.selectFC.reset([]);
            this.selected_entities.clear();
            return;
        }
        this.selectFC.patchValue(this.all_entities_value);
        this.entityList.forEach(entity => this.selected_entities.add(entity));
    }
}
FunnelFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FunnelFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FunnelFilterComponent, selector: "funnel-filter", inputs: { header: "header", active: "active", showSearchBar: "showSearchBar", searchByPlaceholder: "searchByPlaceholder", searchBy: "searchBy", selectAllLabel: "selectAllLabel", entityList: "entityList", view: "view", value: "value", type: "type", selectFC: "selectFC", resetFlag: "resetFlag" }, outputs: { mono: "mono", multi: "multi", selected: "selected" }, usesOnChanges: true, ngImport: i0, template: "<!-- for single select -->\n<ng-container *ngIf=\"type == 'mono'\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 centerAlignVertical d-flex justify-content-start\">\n            {{ header }}\n            <div>\n                <button mat-icon-button (click)=\"select.open()\">\n                    <span class=\"fs-4 material-symbols-outlined funnel\" [ngClass]=\"{'text-primary': active}\">\n                        filter_alt\n                    </span>\n                    <div class=\"funnelFilterDD\">\n                        <mat-form-field>\n                            <mat-select #select [formControl]=\"selectFC\" (selectionChange)=\"selectionChange($event);\">\n                                <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                                <mat-option *ngIf=\"showSearchBar\">\n                                    <ngx-mat-select-search [formControl]=\"searchUtil.filterFC\"\n                                        [placeholderLabel]=\"'Search by '+ searchByPlaceholder\"\n                                        noEntriesFoundLabel=\"No match found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n\n                                <mat-option *ngFor=\"let entity of searchUtil.filteredEntities | async\"\n                                    [value]=\"entity?.[value]\" (click)=\"selectedEntity(entity)\">\n                                    <span class=\"d-flex justify-content-between\">\n                                        {{ entity?.[view] }}\n                                    </span>\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n\n<!-- for multiple select -->\n<ng-container *ngIf=\"type == 'multi'\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 centerAlignVertical justify-content-start pe-0\">\n            {{ header }}\n            <div>\n                <button mat-icon-button (click)=\"multiSelect.open()\">\n                    <span class=\"material-symbols-outlined fs-4 funnel\" [ngClass]=\"{'text-primary': active}\">\n                        filter_alt\n                    </span>\n                    <div class=\"funnelFilterDD\">\n                        <mat-form-field>\n                            <mat-select #multiSelect [formControl]=\"selectFC\" (openedChange)=\"resetOnNoChange($event)\"\n                                multiple>\n                                <mat-option *ngIf=\"showSearchBar\">\n                                    <ngx-mat-select-search [formControl]=\"searchUtil.filterFC\"\n                                        [placeholderLabel]=\"'Search by '+ searchByPlaceholder\"\n                                        noEntriesFoundLabel=\"No match found.\">\n                                    </ngx-mat-select-search>\n                                </mat-option>\n                                <mat-select-trigger class=\"d-none\"></mat-select-trigger>\n                                <mat-option value=\"all\" (click)=\"selectAllEntities()\">\n                                    {{ selectAllLabel }}\n                                </mat-option>\n                                <mat-option *ngFor=\"let entity of searchUtil.filteredEntities | async\"\n                                    [value]=\"entity[value]\" (click)=\"selectEntity(entity)\">\n                                    {{ entity[view] }}\n                                </mat-option>\n                                <div class=\"row m-0 dropdownFooter\">\n                                    <div class=\"col-sm-12\">\n                                        <button class=\"button btn btn-primary float-end m-1\"\n                                            [ngClass]=\"{'disableBtn': selectFC.value.length == 0}\"\n                                            (click)=\"selectFC.value.length == 0 ? null : applyFilter();\"\n                                            (click)=\"selectFC.value.length == 0 ? null : multiSelect.close();\" matRipple\n                                            [matRippleCentered]=\"MATERIAL_CONSTANT.matRippleCentered\">\n                                            Apply\n                                        </button>\n                                    </div>\n                                </div>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>", styles: [".funnelFilterDD{width:0;height:0;overflow:hidden}.dropdownFooter{position:sticky;bottom:0;background-color:#fff;padding:8px;z-index:1000}\n"], components: [{ type: i3$4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3$3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i3$6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i4$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i5$4.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2$3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$3.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3$6.MatSelectTrigger, selector: "mat-select-trigger" }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }], pipes: { "async": i6.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'funnel-filter',
                    templateUrl: './funnel-filter.component.html',
                    styleUrls: ['./funnel-filter.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { header: [{
                type: Input
            }], active: [{
                type: Input
            }], showSearchBar: [{
                type: Input
            }], searchByPlaceholder: [{
                type: Input
            }], searchBy: [{
                type: Input
            }], selectAllLabel: [{
                type: Input
            }], entityList: [{
                type: Input
            }], view: [{
                type: Input
            }], value: [{
                type: Input
            }], type: [{
                type: Input
            }], selectFC: [{
                type: Input
            }], resetFlag: [{
                type: Input
            }], mono: [{
                type: Output
            }], multi: [{
                type: Output
            }], selected: [{
                type: Output
            }] } });

class FunnelFilterModule {
}
FunnelFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FunnelFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, declarations: [FunnelFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRippleModule,
        MatSelectModule,
        MatButtonModule], exports: [FunnelFilterComponent] });
FunnelFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatInputModule,
            MatSelectModule,
            MatRadioModule,
            MatFormFieldModule,
            NgxMatSelectSearchModule,
            MatSlideToggleModule,
            MatCheckboxModule,
            MatRippleModule,
            MatSelectModule,
            MatButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FunnelFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatInputModule,
                        MatSelectModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        NgxMatSelectSearchModule,
                        MatSlideToggleModule,
                        MatCheckboxModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatButtonModule
                    ],
                    declarations: [FunnelFilterComponent],
                    exports: [FunnelFilterComponent]
                }]
        }] });

class BarChartComponent {
    constructor() {
        this.renderFlag = 'LOADING';
        this.emissionData = [];
        this.seriesName = [];
    }
    ngOnInit() {
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
    }
    ngOnChanges(changes) {
        if (changes.chartData.currentValue) {
            this.chartDataCheck();
        }
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    drawChart() {
        const seriesData = this.chartData.series.map((seriesItem, index) => {
            this.chartData.data.forEach((item) => {
                item.data.forEach((data) => {
                    this.emissionData.push(data);
                });
            });
            this.seriesName = this.chartData.series;
            return {
                name: this.seriesName[index],
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: this.emissionData,
                tooltip: {
                    valueFormatter: (value) => {
                        return value == null ? 'No data' : value + ' ' + this.chartData.uomName;
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
                text: `${this.chartMetaData.title}`,
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
                data: this.chartData.data.map(m => ({
                    value: m.xAxisLabel,
                })),
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
    }
}
BarChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BarChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BarChartComponent, selector: "lib-bar-chart", inputs: { renderFlag: "renderFlag", chartData: "chartData", chartMetaData: "chartMetaData" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"card main-card cardOverwrite\">\n    <div class=\"card-body\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>\n\n\n\n", directives: [{ type: i1$6.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bar-chart',
                    templateUrl: './bar-chart.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { renderFlag: [{
                type: Input
            }], chartData: [{
                type: Input
            }], chartMetaData: [{
                type: Input
            }] } });
class BarChartModule {
}
BarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, declarations: [BarChartComponent], imports: [CommonModule, i1$6.NgxEchartsModule], exports: [BarChartComponent] });
BarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
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

const routes$1 = [
    {
        path: '',
        loadChildren: () => Promise.resolve().then(function () { return view_module; }).then(m => m.ViewModule)
    }
];
class ApplicationRoutingModule {
}
ApplicationRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ApplicationRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

class ApplicationModule {
}
ApplicationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationModule, imports: [CommonModule,
        ApplicationRoutingModule] });
ApplicationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationModule, imports: [[
            CommonModule,
            ApplicationRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        ApplicationRoutingModule
                    ]
                }]
        }] });

// /library/
class ViewComponent {
    constructor(storageService, applicationService, userService) {
        this.storageService = storageService;
        this.applicationService = applicationService;
        this.userService = userService;
        this.isCurrentAppIsAccount = false;
        this.applicationFilter = [new Application()];
        this.excludeApplicationKeyID = [ApplicationKeyID.ADMIN_KEY_ID, ApplicationKeyID.NETZERO_ADMIN_KEY_ID, ApplicationKeyID.EMPLOYEE_KEY_ID];
        // userApplicationM: UserApplicationM[];
        this.userApplicationM = [new UserApplication()];
        this.userM = new User();
    }
    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.currentAppKeyID = this.storageService.getStorage(['applicationKeyID']);
        this.userID = this.storageService.getStorage(['userID']);
        this.isCurrentAppIsAccountFnc(this.currentAppKeyID);
        this.getAllApplication();
        this.getUserByID();
        if (!this.isCurrentAppIsAccount) {
            this.getApplicationByUserAccess();
        }
    }
    getAllApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            this.applicationM = (yield this.applicationService.getAllApplication());
            this.applicationFilter = this.applicationM.filter((applicationres) => !this.excludeApplicationKeyID.includes(applicationres.keyID));
        });
    }
    getApplicationByUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            this.userApplicationM = (yield this.applicationService.getSubscribedApplicationsByOrgID(this.currentOrgID));
        });
    }
    getUserByID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.userM = (yield this.userService.getUserByID(this.userID));
        });
    }
    getApplicationLogoWithoutName(keyID) {
        let logo;
        logo = this.applicationService.getApplicationLogoWithoutName(keyID);
        return logo;
    }
    isCurrentAppIsAccountFnc(appKeyID) {
        this.isCurrentAppIsAccount = appKeyID == ApplicationKeyID.ACCOUNT_KEY_ID ? true : false;
    }
    isAccess(applicationID) {
        return this.userApplicationM.some(item => item.id == applicationID);
    }
}
ViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, deps: [{ token: i2.StorageService }, { token: i3.ApplicationService }, { token: i2$2.UserService }], target: i0.ɵɵFactoryTarget.Component });
ViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ViewComponent, selector: "app-view", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100 mb-4 appTile\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">\n                Hello {{ userM.firstName }}{{ userM.lastName ? ' ' + userM.lastName : ''}}, welcome to The\n                Sustainability Cloud! <img class=\"celebrateEmoji\" src=\"/assets/images/celebrate-emoji.png\">\n            </div>\n            <div class=\"pageSubtitle\">\n                Let's transition your business to netzero.\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"20px grid\">\n            <div class=\"appCardOuter\" fxFlex=\"50%\" fxFlex.xs=\"50%\" fxFlex.sm=\"50%\"\n                *ngFor=\"let applications of applicationFilter\">\n\n                <a href=\"{{ applications.url }}\" target=\"_blank\">\n                    <mat-card class=\"border appCardInner cardOverwrite cursorPointer matHeader\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <span class=\"centerAlign\">\n                                    <img class=\"appImg\" [src]=\"getApplicationLogoWithoutName(applications.keyID)\"\n                                        alt=\"{{ applications.name }}\">\n                                </span>\n                            </div>\n                            <div class=\"col-sm-9\">\n                                <mat-card-header>\n                                    <mat-card-title-group>\n                                        <mat-card-title class=\"ps-0\">\n                                            <p class=\"fs-4 fw-bold\">\n                                                {{ applications.name }}\n                                                <span *ngIf=\"!isCurrentAppIsAccount && isAccess(applications.id)\">\n                                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n                                                        class=\"check-circle-fill flex-shrink-0 me-2 mb-2 ms-2 tickIcon text-success\"\n                                                        viewBox=\"0 0 16 16\" role=\"img\" aria-label=\"Success:\">\n                                                        <path\n                                                            d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n                                                    </svg>\n                                                </span>\n                                            </p>\n                                        </mat-card-title>\n                                    </mat-card-title-group>\n                                </mat-card-header>\n                                <mat-card-content>\n                                    <p>{{ applications.description }}</p>\n                                </mat-card-content>\n                            </div>\n                        </div>\n                    </mat-card>\n                </a>\n\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".appTile .celebrateEmoji{max-width:20px}.appTile .appImg{max-width:70%;height:auto}.appTile .appCardOuter .mat-card{min-height:70px!important}.appTile .appCardInner{height:8rem;transition:all .3s cubic-bezier(.25,.8,.25,1)}.appTile .appCardInner:hover{box-shadow:0 1px 20px #0000,0 10px 10px #0000000d!important}.appTile .mat-card-subtitle,.appTile .mat-card-content{font-size:13px}.appTile .mat-card-title{font-size:16px!important;margin:0!important;color:#495057}.appTile .mat-card-title p{margin-bottom:0!important}.appTile .mat-card-content{color:gray}.appTile .tickIcon{width:24px;height:24px}\n"], components: [{ type: i4$3.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i4$3.MatCardHeader, selector: "mat-card-header" }, { type: i4$3.MatCardTitleGroup, selector: "mat-card-title-group" }], directives: [{ type: i5$5.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i5$5.DefaultLayoutGapDirective, selector: "  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]", inputs: ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5$5.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i4$3.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4$3.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-view',
                    templateUrl: './view.component.html',
                    styleUrls: ['./view.component.scss'
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }, { type: i3.ApplicationService }, { type: i2$2.UserService }]; } });

const routes = [
    {
        path: '',
        component: ViewComponent
    }
];
class ViewRoutingModule {
}
ViewRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ViewRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ViewRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class ViewModule {
}
ViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, declarations: [ViewComponent], imports: [CommonModule,
        FlexLayoutModule,
        MatCardModule,
        ViewRoutingModule] });
ViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, imports: [[
            CommonModule,
            FlexLayoutModule,
            MatCardModule,
            ViewRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ViewComponent
                    ],
                    imports: [
                        CommonModule,
                        FlexLayoutModule,
                        MatCardModule,
                        ViewRoutingModule
                    ]
                }]
        }] });

var view_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ViewModule: ViewModule
});

class MessageAlertComponent {
    constructor() {
        this.messageAlertTypeEnum = MessageAlertTypeEnum;
        this.label = '';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.labelInp && this.labelInp) {
            this.label = this.labelInp;
        }
    }
}
MessageAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MessageAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MessageAlertComponent, selector: "lib-message-alert", inputs: { messageAlertTypeInp: "messageAlertTypeInp", messageAlertIconInp: "messageAlertIconInp", labelInp: "labelInp", contentInp: "contentInp" }, usesOnChanges: true, ngImport: i0, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n    <symbol id=\"check-circle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n    </symbol>\n    <symbol id=\"info-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\" />\n    </symbol>\n    <symbol id=\"exclamation-triangle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\" />\n    </symbol>\n</svg>\n\n<div class=\"pt-2\">\n    <div class=\"alert m-0 centerAlignVertical roundedBorder\" [ngClass]=\"{\n        'alert-primary': messageAlertTypeInp == messageAlertTypeEnum.INFO,\n        'alert-success': messageAlertTypeInp == messageAlertTypeEnum.SUCCESS,\n        'alert-warning': messageAlertTypeInp == messageAlertTypeEnum.WARNING,\n        'alert-danger': messageAlertTypeInp == messageAlertTypeEnum.DANGER\n    }\">\n        <div class=\"d-flex align-items-center\">\n            <svg class=\"bi flex-shrink-0 me-3 cardIcon\">\n                <use [attr.xlink:href]=\"messageAlertIconInp\" />\n            </svg>\n            <div class=\"endAlignVertical\">\n                <div *ngIf=\"labelInp\"><strong>{{ label }}</strong></div>\n                <div [class.mt-1]=\"labelInp\">\n                    {{ contentInp }}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", directives: [{ type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-message-alert',
                    templateUrl: './message-alert.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { messageAlertTypeInp: [{
                type: Input
            }], messageAlertIconInp: [{
                type: Input
            }], labelInp: [{
                type: Input
            }], contentInp: [{
                type: Input
            }] } });

class MessageAlertModule {
}
MessageAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MessageAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertModule, declarations: [MessageAlertComponent], imports: [CommonModule], exports: [MessageAlertComponent] });
MessageAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MessageAlertComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MessageAlertComponent
                    ]
                }]
        }] });

class InfoDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.title = 'Title';
        this.body = 'Body';
        this.dialogRef.disableClose = false;
    }
    ngOnInit() {
        this.title = this.data['title'];
        this.body = this.data['body'];
    }
}
InfoDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$4.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
InfoDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: InfoDialogComponent, selector: "app-info-dialog", ngImport: i0, template: "<h6 mat-dialog-title class=\"dialogTitle mb-0\">\n    <div class=\"d-flex align-items-center\">\n        <strong> {{ title }} </strong>\n    </div>\n</h6>\n\n<mat-dialog-content class=\"mat-typography\">\n    <div [innerHTML]=\"body\"></div>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n    <button class=\"button btn btn-secondary px-4\" type=\"button\" mat-dialog-close matRipple\n    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\">\n        Close\n    </button>\n</mat-dialog-actions>\n", styles: [""], directives: [{ type: i1$4.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$4.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1$4.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }, { type: i1$4.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i4$1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-info-dialog',
                    templateUrl: './info-dialog.component.html',
                    styles: ['']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$4.MatDialogRef }]; } });

class InfoDialogModule {
}
InfoDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InfoDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogModule, declarations: [InfoDialogComponent], imports: [MatDialogModule,
        MatRippleModule] });
InfoDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogModule, imports: [[
            MatDialogModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InfoDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InfoDialogComponent],
                    imports: [
                        MatDialogModule,
                        MatRippleModule
                    ],
                }]
        }] });

/*
 * Public API Surface of tsc-common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActivityFormTypeEnum, ApplicationDrawerComponent, ApplicationDrawerModule, ApplicationModule, BackButtonComponent, BackButtonModule, BarChartComponent, BarChartModule, BulkUploadDialogLib, BulkUploadDialogLibModule, BulkUploadEnum, ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, COMMON_STATUS_CONSTANT, CommonEvent, ComponentSourceEnum, Country, CountryService, DateFilterComponent, DateFilterModule, DialogEnum, DialogOneComponent, DialogOneEnum, DialogOneModule, DialogResponseEnum, EllipsisPipeModule, EllipsisPipeService, FREQUENCY_CONSTANT, FileService, FileTypeEnum, FileUploadEnum, FooterOneComponent, FooterOneModule, FooterThreeComponent, FooterThreeModule, FooterTwoComponent, FooterTwoModule, FormAction, FormErrorEnum, Frequency, FrequencyEnum, FunnelFilterComponent, FunnelFilterModule, GENDER_CONSTANT, HeaderOneComponent, HeaderOneModule, ImageDefaultPathEnum, ImageErrorEnum, ImageService, ImageTypeEnum, InfoDialogComponent, InfoDialogModule, InterceptorOneService, InvalidForm, LOADING_GRAPHIC, LayoutDrawerComponent, LayoutDrawerModule, LayoutOneComponent, LayoutOneModule, LayoutTwoComponent, LayoutTwoModule, LoaderOneComponent, LoaderOneInterceptor, LoaderOneModule, LoaderOneService, LookupService, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertComponent, MessageAlertIconEnum, MessageAlertModule, MessageAlertTypeEnum, NO_DATA_GRAPHIC, NocFileUploadEnum, OrgDrawerHeaderComponent, OrgDrawerHeaderModule, OrganizationDrawerComponent, OrganizationDrawerModule, PageTitleEnum, ProfileLogoUploadComponent, ProfileLogoUploadModule, Response, STATUS_CONSTANT, SearchBarOneComponent, SearchBarOneModule, SearchBarTwoComponent, SearchBarTwoModule, SideNavComponent, SideNavModule, SkeletonComponent, SkeletonModule, State, StateService, Static, StaticPageOne, StaticPageOneComponent, StaticPageOneJson, StaticPageOneModule, StaticPageThreeComponent, StaticPageThreeJson, StaticPageThreeModule, StaticPageTwo, StaticPageTwoComponent, StaticPageTwoModule, StatusEnum, StatusService, TABLE_CONSTANT, TSCCommonService, TimeZone, TimeZoneService, TimezoneNotFoundComponent, TimezoneNotFoundModule, TscCommonComponent, TscCommonModule, TscCommonService, TypeConfirmationDialog, TypeConfirmationDialogModule, UserDrawerComponent, UserDrawerModule, ViewModule };
//# sourceMappingURL=library-tsc-common.js.map
