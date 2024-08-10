import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, ViewChild } from '@angular/core';
import * as i22 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge, fromEvent, of } from 'rxjs';
import { startWith, switchMap, catchError, map, filter } from 'rxjs/operators';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import * as i7$1 from '@library/tsc-common';
import { TABLE_CONSTANT, COMMON_CONSTANT, MATERIAL_CONSTANT, ButtonLabelEnum, DialogEnum, MaterialFormFieldAppearance, DialogOneComponent, DialogOneEnum, SearchBarOneModule, EllipsisPipeModule, FormAction, PageTitleEnum, InvalidForm, MatSelectSearchService, SearchBarTwoModule, StatusEnum } from '@library/tsc-common';
import * as i2 from '@library/storage-service';
import * as i7 from '@library/toastr-service';
import { ToastrColor } from '@library/toastr-service';
import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import * as i1$2 from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i8 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i9 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i10 from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import * as i11 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i12 from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i15 from '@angular/material/core';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import * as i14 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i16 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i20 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i9$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { __awaiter } from 'tslib';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { isEqual } from 'lodash';
import * as i3 from '@library/tsc-lite';
import { LIST_CONSTANT, EntityTree, DevicesWithEntities, Unit, Shift, ParameterModule } from '@library/tsc-lite';
import * as i4 from '@library/user-service';
import { UserContext, ProfileImg, User } from '@library/user-service';
import * as i9$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i10$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i11$1 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i12$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i13 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i14$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i16$1 from 'ngx-mat-select-search';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import * as i18 from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import * as i19 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i21 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i8$1 from '@angular/flex-layout/flex';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as moment from 'moment-timezone';
import * as i1$3 from '@library/date';
import { DateMonthYearFormatModule } from '@library/date';
import * as i3$1 from '@library/organization-service';
import * as i6 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i7$2 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

class AlertsService {
    constructor() { }
}
AlertsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AlertsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AlertsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlertsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertsComponent, selector: "lib-alerts", ngImport: i0, template: `
    <p>
      alerts works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-alerts',
                    template: `
    <p>
      alerts works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class AlertsModule {
    static forRoot(environment) {
        return {
            ngModule: AlertsModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
AlertsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, declarations: [AlertsComponent], exports: [AlertsComponent] });
AlertsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AlertsComponent,
                    ],
                    imports: [],
                    exports: [
                        AlertsComponent
                    ]
                }]
        }] });

class AlertPage {
}
class AlertRule {
}

class AlarmPage {
}

class EscalationPermission {
}
class EscalationLevelCount {
}
class EscalationLevelInfo {
}

var AlertPageLabelEnum;
(function (AlertPageLabelEnum) {
    AlertPageLabelEnum["INSTANTANEOUS_LABEL"] = "Instantaneous";
    AlertPageLabelEnum["PERIODIC_LABEL"] = "Periodic";
})(AlertPageLabelEnum || (AlertPageLabelEnum = {}));
var AlertTypeEnum;
(function (AlertTypeEnum) {
    AlertTypeEnum["INSTANTANEOUS"] = "INSTANTANEOUS";
    AlertTypeEnum["PERIODIC"] = "PERIODIC";
    AlertTypeEnum["ALL"] = "ALL";
})(AlertTypeEnum || (AlertTypeEnum = {}));
var AlertButtonLabelEnum;
(function (AlertButtonLabelEnum) {
    AlertButtonLabelEnum["ESCALATION_RULE"] = "Escalation rule";
})(AlertButtonLabelEnum || (AlertButtonLabelEnum = {}));
var AlertActionEnum;
(function (AlertActionEnum) {
    AlertActionEnum["CREATE"] = "Create";
    AlertActionEnum["UPDATE"] = "Update";
})(AlertActionEnum || (AlertActionEnum = {}));
var AlertStatusEnum;
(function (AlertStatusEnum) {
    AlertStatusEnum["ACTIVE"] = "ACTIVE";
    AlertStatusEnum["RESOLVED"] = "RESOLVED";
})(AlertStatusEnum || (AlertStatusEnum = {}));
var AlertStatusLabelEnum;
(function (AlertStatusLabelEnum) {
    AlertStatusLabelEnum["ACTIVE_LABEL"] = "Active";
    AlertStatusLabelEnum["RESOLVED_LABEL"] = "Resolved";
})(AlertStatusLabelEnum || (AlertStatusLabelEnum = {}));

// /tsc-library/
class AlertRuleController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAlertRuleByPage(pageNo, pageSize, sortBy, orderBy, search, alertType, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        params = params.append('alertType', alertType);
        search.forEach(search => params = params.append('search', search));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/page`, { params: params });
    }
    getActiveAlertByPage(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/active/page`, requestBody);
    }
    getResolvedAlertByPage(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/resolved/page`, requestBody);
    }
    updateAlertRuleStatus(orgID, alertRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}/status`, requestBody);
    }
    createAlertRule(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules`, requestBody);
    }
    getAlertRuleByID(orgID, alertRuleID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`);
    }
    updateAlertRule(orgID, alertRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`, requestBody);
    }
    deleteAlertRule(orgID, alertRuleID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alert-rules/${alertRuleID}`);
    }
}
AlertRuleController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertRuleController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
AlertRuleController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertRuleController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertRuleController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class EscalationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getEscalationPermission(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/permission`);
    }
    getEscalationLevelCount(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/escalation/level/count`);
    }
    createEsclationByLevelID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation`, requestBody);
    }
    getAllLevelEscalation(orgID, alertRuleID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/${alertRuleID}/escalation`);
    }
    updateEsclationByLevelID(orgID, escalationRuleID, requestBody) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`, requestBody);
    }
    deleteEsclationByLevelID(orgID, escalationRuleID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/alerts/escalation/${escalationRuleID}`);
    }
}
EscalationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EscalationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EscalationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

// /tsc-library/
class PageComponent {
    constructor(router, activatedRoute, storageService, toastrService, alertController, escalationController, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.alertController = alertController;
        this.escalationController = escalationController;
        this.dialog = dialog;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.AlertTypeEnum = AlertTypeEnum;
        this.AlertPageLabelEnum = AlertPageLabelEnum;
        this.AlertButtonLabelEnum = AlertButtonLabelEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.DialogEnum = DialogEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.displayedColumn = ['id', 'name', 'associatedWith', 'ruleDescription', 'status', 'action'];
        this.resultLength = 0;
        this.dataSource = [];
        this.searchFlag = false;
        this.searchArr = [];
        this.escalationPermissionM = new EscalationPermission();
        this.alertStatusFC = new FormControl();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe(data => {
            this.alertLabel = data['alertType'];
        });
        const currentUrl = this.router.url;
        const segments = currentUrl.split('/');
        segments.pop();
        this.baseUrl = segments.join('/');
        this.getEscalationPermission();
    }
    ngAfterViewInit() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.searchArr = [];
            if (this.searchFlag) {
                this.searchArr.push('name:' + this.searchValue);
            }
            const alertType = this.alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL ? AlertTypeEnum.INSTANTANEOUS : AlertTypeEnum.PERIODIC;
            return this.alertController.getAlertRuleByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.searchArr, alertType, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
            this.dataSource.forEach(alert => {
                this.alertStatusFC[alert.id] = new FormControl(alert.status);
            });
        });
    }
    getEscalationPermission() {
        this.escalationController.getEscalationPermission(this.orgID).subscribe((escalationPermissionRes) => {
            this.escalationPermissionM = escalationPermissionRes;
        }, error => {
            console.log('error in getEscalationPermission() -', error);
        });
    }
    getAlertStatusFC(alertID) {
        return this.alertStatusFC[alertID];
    }
    alertStatusChange(alertID) {
        let requestBody = {};
        requestBody['status'] = this.alertStatusFC[alertID].value;
        this.alertController.updateAlertRuleStatus(this.orgID, alertID, requestBody)
            .subscribe((alertStatusRes) => {
            let toast = this.toastrService.getToastStatus(alertStatusRes['status']);
            this.toastrService.openToast(toast.title, alertStatusRes.message, toast.color);
        }, error => {
            console.log('error in alertStatusChange - ', error);
        });
    }
    searchFn(value) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        }
        else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
    openDeleteAlertDialog(alertID, alertName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete alert rule?',
                body: '<b>' + alertName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteAlertRule(alertID);
            }
        });
    }
    deleteAlertRule(alertID) {
        this.alertController.deleteAlertRule(this.orgID, alertID).subscribe((deleteRes) => {
            this.refreshBtn.nativeElement.click();
            let toast = this.toastrService.getToastStatus(deleteRes.status);
            this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
        });
    }
}
PageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: i7.ToastrService }, { token: AlertRuleController }, { token: EscalationController }, { token: i1$2.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
PageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ alertLabel }} Alert</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [routerLink]=\"[baseUrl, 'create']\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; {{ alertLabel }} Alert\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"overflowX customScrollBar\">\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n            matSortDirection=\"asc\" matSortDisableClear>\n\n            <ng-container matColumnDef=\"id\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                    ID\n                </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    {{ row['id'] ? row['id']: COMMON_CONSTANT.HYPHEN }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <th class=\"px-3 columnWidth2\" mat-header-cell *matHeaderCellDef> Name </th>\n                <td class=\"px-3 columnWidth2\" mat-cell *matCellDef=\"let row\" [matTooltip]=\"row?.['name']?.length>20? row['name']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['name'] ? row['name']: COMMON_CONSTANT.HYPHEN) | dotdotdot:20}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"associatedWith\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['associatedWith']?.length>25? row['associatedWith']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['associatedWith'] ? row['associatedWith']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ruleDescription\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['ruleDescription']?.length>25? row['ruleDescription']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['ruleDescription'] ? row['ruleDescription']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <mat-slide-toggle class=\"slideToggleBtn\" [formControl]=\"getAlertStatusFC(row.id)\"\n                        (change)=\"alertStatusChange(row.id)\"></mat-slide-toggle>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef></th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                            <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                                <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                            </button>\n                            <div ngbDropdownMenu>\n                                <button class=\"dropdown-item\" [routerLink]=\"[baseUrl, row['id'], 'update']\">\n                                    {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                                </button>\n                                <button class=\"dropdown-item\" [routerLink]=\"[baseUrl + '/' + row['id'] + '/escalation']\" *ngIf=\"escalationPermissionM\">\n                                    {{ AlertButtonLabelEnum.ESCALATION_RULE }}\n                                </button>\n                                <button class=\"btn btn-outline-danger rounded-0 dropdown-item\" (click)=\"openDeleteAlertDialog(row.id, row.name)\">\n                                    {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n            <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:230px}.slideToggleBtn .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#3ac47d}.slideToggleBtn .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff}\n"], components: [{ type: i7$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i8.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i9.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i11.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i9.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i15.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i10.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9.MatCellDef, selector: "[matCellDef]" }, { type: i9.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i16.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i16.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i16.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i1$1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i22.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7$1.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: i7.ToastrService }, { type: AlertRuleController }, { type: EscalationController }, { type: i1$2.MatDialog }]; }, propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }], paginator: [{
                type: ViewChild,
                args: ['paginator']
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn']
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

const routes$4 = [
    {
        path: '',
        component: PageComponent
    }
];
class PageRoutingModule {
}
PageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
PageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [[RouterModule.forChild(routes$4)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$4)],
                    exports: [RouterModule]
                }]
        }] });

class PageModule {
}
PageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, declarations: [PageComponent], imports: [CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FontAwesomeModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTooltipModule,
        MatSlideToggleModule] });
PageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, imports: [[
            CommonModule,
            PageRoutingModule,
            SearchBarOneModule,
            EllipsisPipeModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            FontAwesomeModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatDialogModule,
            MatTooltipModule,
            MatSlideToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageComponent,
                    ],
                    imports: [
                        CommonModule,
                        PageRoutingModule,
                        SearchBarOneModule,
                        EllipsisPipeModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        FontAwesomeModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatSlideToggleModule
                    ]
                }]
        }] });

// /tsc-library/
class CreateUpdateComponent {
    constructor(activatedRoute, storageService, entityService, deviceService, unitService, shiftService, userService, tscCommonService, alertRuleFB, toastrService, alertController) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.entityService = entityService;
        this.deviceService = deviceService;
        this.unitService = unitService;
        this.shiftService = shiftService;
        this.userService = userService;
        this.tscCommonService = tscCommonService;
        this.alertRuleFB = alertRuleFB;
        this.toastrService = toastrService;
        this.alertController = alertController;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.LIST_CONSTANT = LIST_CONSTANT;
        this.AlertTypeEnum = AlertTypeEnum;
        this.AlertPageLabelEnum = AlertPageLabelEnum;
        this.AlertButtonLabelEnum = AlertButtonLabelEnum;
        this.FormAction = FormAction;
        this.PageTitleEnum = PageTitleEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.InvalidForm = InvalidForm;
        this.ToastrColor = ToastrColor;
        this.UserContext = UserContext;
        this.ProfileImg = ProfileImg;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEntityPanelExpanded = false;
        this.isFormSubmit = false;
        this.otherUser = false;
        this.isEqual = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.userContext = UserContext.ROOT_ORG_USER;
        this.inputPlaceholder = "email1@domain.com, email2@domain.com";
        this.entityM = [new EntityTree()];
        this.devicesWithEntitiesM = [new DevicesWithEntities()];
        this.unitM = [new Unit()];
        this.userM = [new User()];
        this.rootOrgUserM = [new User()];
        this.currentOrgUserM = [new User()];
        this.shiftM = [new Shift()];
        this.alertRuleM = new AlertRule();
        this.selectedEntities = [];
        this.manualSelectedEntities = [];
        this.allDeviceID = [];
        this.allShiftID = [];
        this.selectedUserIds = [];
        this.totalDeviceCount = 0;
        this.totalShiftCount = 0;
        this.userFC = new FormControl(true, Validators.required);
        this.selectedUserFC = new FormControl([], [Validators.required]);
        this.unitSearchUtil = new MatSelectSearchService(['name']);
        this.userSearchUtil = new MatSelectSearchService(['firstName', 'lastName', 'email']);
        this.errorHandling = (control, error) => {
            return this.alertRuleFG.controls[control].hasError(error);
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe(data => {
            this.alertLabel = data['alertType'];
            this.action = data['alertAction'];
        });
        this.getUsersByOrgID();
        this.getCurrentOrgUserAccess();
        this.getShift();
        this.alertInit();
        this.activatedRoute.params.subscribe((pathParam) => {
            if (pathParam.alertID != null) {
                this.alertRuleID = pathParam.alertID;
                this.getAlertRuleByID();
            }
        });
    }
    ngAfterViewInit() {
        merge(this.parameterFilterChild.emitFilter).subscribe(() => this.valueChange());
    }
    valueChange() {
        if (this.parameterFilterChild.selectedParameterFC.value) {
            const selectedParameter = this.parameterFilterChild.selectedParameterFC.value;
            this.alertRuleFG.controls['parameterID'].patchValue(selectedParameter);
            this.alertRuleFG.get('entityID').reset([]);
            this.alertRuleFG.get('isSubEntitiesSelected').patchValue(false);
            this.alertRuleFG.get('isAlertAtDeviceLevel').reset();
            this.allDeviceID = [];
            this.alertRuleFG.get('deviceID').reset([]);
            this.alertRuleFG.get('unitID').reset();
            this.getEntityHierarchyByParameterID(selectedParameter);
            this.getUnitByParameterID(selectedParameter);
        }
    }
    alertInit() {
        this.alertRuleFG = this.alertRuleFB.group({
            alertType: [this.alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL ? AlertTypeEnum.INSTANTANEOUS : AlertTypeEnum.PERIODIC],
            name: [, Validators.required],
            parameterID: [, Validators.required],
            entityID: [[], Validators.required],
            isSubEntitiesSelected: [false],
            isAlertAtDeviceLevel: [],
            deviceID: [[]],
            unitID: [, Validators.required],
            condition: [, Validators.required],
            frequency: [, Validators.required],
            value: [],
            startValue: [],
            endValue: [],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            isAnyOtherUser: [false],
            otherUserEmail: [[]],
            smsFrequency: [, Validators.required],
            emailFrequency: [, Validators.required],
            shiftID: [[], Validators.required]
        });
        if (this.alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL) {
            this.setValidatorsForAlertLevelPref();
            this.setValidatorsForDevice();
        }
    }
    getAlertRuleByID() {
        this.alertController.getAlertRuleByID(this.orgID, this.alertRuleID).subscribe((alertRuleRes) => {
            this.alertRuleM = alertRuleRes;
            this.initialObject = this.alertRuleM;
            this.getEntityHierarchyByParameterID(this.alertRuleM.parameterID);
            this.getUnitByParameterID(this.alertRuleM.parameterID);
            this.setValidatorsForOtherUser();
            this.patchAlertFG();
        }, error => {
            console.log('error in getAlertRuleByID() -', error);
        });
    }
    patchAlertFG() {
        this.alertRuleFG.patchValue({
            alertType: this.alertRuleM.alertType,
            name: this.alertRuleM.name,
            parameterID: this.alertRuleM.parameterID,
            isAlertAtDeviceLevel: this.alertRuleM.isAlertAtDeviceLevel,
            entityID: this.alertRuleM.entityID,
            isSubEntitiesSelected: this.alertRuleM.isSubEntitiesSelected,
            frequency: this.alertRuleM.frequency,
            unitID: this.alertRuleM.unitID,
            condition: this.alertRuleM.condition,
            value: this.alertRuleM.value,
            startValue: this.alertRuleM.startValue,
            endValue: this.alertRuleM.endValue,
            userChoice: this.alertRuleM.userChoice,
            userID: this.alertRuleM.userID,
            isAnyOtherUser: this.alertRuleM.isAnyOtherUser,
            otherUserEmail: this.alertRuleM.otherUserEmail,
            smsFrequency: this.alertRuleM.smsFrequency,
            emailFrequency: this.alertRuleM.emailFrequency,
        });
        this.conditionChange(this.alertRuleFG.get('condition').value);
        this.alertRuleFG.get('deviceID').patchValue((this.alertRuleM.deviceID.length == this.totalDeviceCount) ? [-1, ...this.alertRuleM.deviceID] : [...this.alertRuleM.deviceID]);
        this.alertRuleFG.get('shiftID').patchValue((this.alertRuleM.shiftID.length == this.totalShiftCount) ? [-1, ...this.alertRuleM.shiftID] : [...this.alertRuleM.shiftID]);
        this.parameterFilterChild.selectedParameterFC.patchValue(this.alertRuleM.parameterID);
        this.userFC.patchValue(this.alertRuleM.userChoice == UserContext.CURRENT_ORG_USER ? false : true);
        this.patchUserFields();
        this.alertRuleFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.alertRuleFG.value);
        });
    }
    patchUserFields() {
        this.selectedUserIds = this.alertRuleM.userID;
        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
        if (this.userContext == UserContext.ROOT_ORG_USER) {
            this.userM = this.rootOrgUserM.filter(user => !this.selectedUserIds.includes(user.id));
        }
        else {
            this.userM = this.currentOrgUserM.filter(user => !this.selectedUserIds.includes(user.id));
        }
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
    }
    /* entities code */
    getEntityHierarchyByParameterID(parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = (yield this.entityService.getEntityHierarchyByParameterID(this.orgID, parameterID));
        });
    }
    entityPanelOpened() {
        this.isEntityPanelExpanded = true;
    }
    entityPanelClosed() {
        this.isEntityPanelExpanded = false;
    }
    entityChange(entityID, event) {
        this.allDeviceID = [];
        this.alertRuleFG.get('deviceID').reset([]);
        let manualSelectedEntities = [...this.manualSelectedEntities];
        let selctedEntity = this.alertRuleFG.get('entityID').value || [];
        if (event.checked) {
            selctedEntity.push(entityID);
            manualSelectedEntities.push(entityID);
            if (this.alertRuleFG.get('isSubEntitiesSelected').value == true) {
                this.checkChildren(entityID, selctedEntity);
            }
        }
        else {
            selctedEntity = selctedEntity.filter(id => id != entityID);
            manualSelectedEntities = manualSelectedEntities.filter(id => id != entityID);
        }
        this.manualSelectedEntities = manualSelectedEntities;
        this.alertRuleFG.get('entityID').setValue(selctedEntity);
    }
    checkChildren(entityID, selectedEntities) {
        const entity = this.findEntityById(this.entityM, entityID);
        if (entity && entity.children && entity.children.length > 0) {
            const childIds = this.getAllEntityID(entity.children);
            childIds.forEach(id => {
                if (!selectedEntities.includes(id)) {
                    selectedEntities.push(id);
                }
            });
            this.alertRuleFG.get('entityID').setValue([...selectedEntities, ...childIds]);
        }
    }
    getAllEntityID(entities) {
        let allIds = [];
        for (const entity of entities) {
            allIds.push(entity.id);
            if (entity.children && entity.children.length > 0) {
                allIds = allIds.concat(this.getAllEntityID(entity.children));
            }
        }
        return allIds;
    }
    isSelected(entityId) {
        const selectedEntities = this.alertRuleFG.get('entityID').value || [];
        return selectedEntities.includes(entityId);
    }
    selectAllSubEntities(event) {
        this.alertRuleFG.get('deviceID').reset([]);
        const isSubEntitiesSelected = this.alertRuleFG.get('isSubEntitiesSelected');
        let selectedEntities = this.alertRuleFG.get('entityID').value || [];
        isSubEntitiesSelected.setValue(event.checked);
        if (isSubEntitiesSelected.value) {
            this.checkAllSubEntities(selectedEntities);
        }
        else {
            this.uncheckAllSubEntities(selectedEntities);
        }
    }
    checkAllSubEntities(selectedEntities) {
        let entitiesToAdd = new Set(selectedEntities);
        for (const entityId of selectedEntities) {
            const entity = this.findEntityById(this.entityM, entityId);
            if (entity && entity.children && entity.children.length > 0) {
                const childIds = this.getAllEntityID(entity.children);
                childIds.forEach(id => entitiesToAdd.add(id));
            }
        }
        this.alertRuleFG.get('entityID').setValue([...entitiesToAdd]);
    }
    uncheckAllSubEntities(selectedEntities) {
        let updatedSelectedEntities;
        if (this.action == FormAction.UPDATE) {
            updatedSelectedEntities = selectedEntities.filter(entityId => {
                const entity = this.findEntityById(this.entityM, entityId);
                if (entity && entity.children) {
                    selectedEntities = selectedEntities.filter(id => !entity.children.some(child => child.id == id));
                }
                this.alertRuleFG.get('entityID').setValue(selectedEntities);
            });
        }
        else {
            updatedSelectedEntities = selectedEntities.filter(id => this.manualSelectedEntities.includes(id));
            this.alertRuleFG.get('entityID').setValue(updatedSelectedEntities);
        }
    }
    findEntityById(entities, entityId) {
        for (const entity of entities) {
            if (entity.id == entityId) {
                return entity;
            }
            else if (entity.children && entity.children.length > 0) {
                const foundEntity = this.findEntityById(entity.children, entityId);
                if (foundEntity) {
                    return foundEntity;
                }
            }
        }
        return null;
    }
    /* entities code */
    setValidatorsForAlertLevelPref() {
        this.alertRuleFG.get('entityID').valueChanges.subscribe((value) => {
            const isAlertAtDeviceLevelControl = this.alertRuleFG.get('isAlertAtDeviceLevel');
            if (value && value.length > 0) {
                isAlertAtDeviceLevelControl.setValidators([Validators.required]);
            }
            else {
                isAlertAtDeviceLevelControl.clearValidators();
            }
            isAlertAtDeviceLevelControl.updateValueAndValidity();
        });
    }
    /* devices code */
    setValidatorsForDevice() {
        this.alertRuleFG.get('isAlertAtDeviceLevel').valueChanges.subscribe((value) => {
            const deviceIDControl = this.alertRuleFG.get('deviceID');
            const parameterID = this.alertRuleFG.get('parameterID').value;
            const entityID = this.alertRuleFG.get('entityID').value;
            if (value && this.alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL) {
                if (parameterID && (entityID === null || entityID === void 0 ? void 0 : entityID.length) > 0) {
                    this.getDevicesWithEntities(entityID, parameterID);
                }
                this.alertRuleFG.get('deviceID').reset([]);
                deviceIDControl.setValidators([Validators.required]);
            }
            else {
                this.alertRuleFG.get('deviceID').reset([]);
                deviceIDControl.clearValidators();
            }
            deviceIDControl.updateValueAndValidity();
        });
    }
    getDevicesWithEntities(entityID, parameterID) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody = {};
            requestBody['entityID'] = entityID;
            requestBody['parameterID'] = parameterID;
            this.devicesWithEntitiesM = (yield this.deviceService.getDevicesWithEntities(this.orgID, requestBody));
            (_a = this.devicesWithEntitiesM) === null || _a === void 0 ? void 0 : _a.forEach(entity => {
                var _a, _b, _c;
                this.totalDeviceCount += (_a = entity === null || entity === void 0 ? void 0 : entity.devices) === null || _a === void 0 ? void 0 : _a.length;
                const deviceIDs = (_b = entity === null || entity === void 0 ? void 0 : entity.devices) === null || _b === void 0 ? void 0 : _b.map(device => device === null || device === void 0 ? void 0 : device.id);
                (_c = this.allDeviceID) === null || _c === void 0 ? void 0 : _c.push(...deviceIDs);
            });
        });
    }
    selectAllDevices() {
        if (!this.alertRuleFG.get('deviceID').value.includes(-1)) {
            this.alertRuleFG.get('deviceID').reset([]);
            return;
        }
        this.alertRuleFG.get('deviceID').setValue([-1, ...this.allDeviceID]);
    }
    selectDevices() {
        const selected = this.alertRuleFG.get('deviceID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.alertRuleFG.get('deviceID').patchValue(selected);
        }
        else if (this.alertRuleFG.get('deviceID').value.length == this.totalDeviceCount) {
            this.allDeviceID.splice(0, 0, -1);
            this.alertRuleFG.get('deviceID').patchValue(this.allDeviceID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.alertRuleFG.get('deviceID').patchValue(filteredSelected);
        }
    }
    /* devices code */
    getUnitByParameterID(parameterID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.unitM = (yield this.unitService.getUnitByParameterID(this.orgID, parameterID));
            this.unitSearchUtil.entityArr = this.unitM;
            this.unitSearchUtil.createSubscription();
        });
    }
    unitChange(selectedUnit) {
        this.alertRuleFG.get('unitID').patchValue(selectedUnit);
    }
    conditionChange(condition) {
        if (condition == 'BETWEEN') {
            this.alertRuleFG.get('value').clearValidators();
            this.alertRuleFG.get('startValue').setValidators([Validators.required, this.validateStartEndValues.bind(this)]);
            this.alertRuleFG.get('endValue').setValidators([Validators.required, this.validateStartEndValues.bind(this)]);
        }
        else {
            this.alertRuleFG.get('startValue').clearValidators();
            this.alertRuleFG.get('endValue').clearValidators();
            this.alertRuleFG.get('value').setValidators([Validators.required]);
        }
        this.alertRuleFG.get('value').updateValueAndValidity();
        this.alertRuleFG.get('startValue').updateValueAndValidity();
        this.alertRuleFG.get('endValue').updateValueAndValidity();
    }
    showValueField() {
        return this.alertRuleFG.controls['condition'].value != 'BETWEEN';
    }
    showStartEndFields() {
        return this.alertRuleFG.controls['condition'].value == 'BETWEEN';
    }
    validateStartEndValues() {
        const startValue = this.alertRuleFG.get('startValue').value;
        const endValue = this.alertRuleFG.get('endValue').value;
        if (startValue != null && endValue != null && startValue >= endValue) {
            return { 'invalidRange': true };
        }
        return null;
    }
    getFrequency() {
        return this.alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL
            ? this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(option => option.value == 'INSTANT')
            : this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(option => option.value != 'INSTANT');
    }
    /* users code */
    getUsersByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rootOrgUserM = (yield this.userService.getUsersByOrgID(this.orgID));
            this.userM = this.rootOrgUserM;
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
        });
    }
    getCurrentOrgUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentOrgUserM = (yield this.userService.getCurrentOrgUserAccess(this.orgID));
        });
    }
    userContextChange() {
        this.selectedUserIds = [];
        if (this.userFC.value) {
            this.userContext = UserContext.ROOT_ORG_USER;
            this.userM = this.rootOrgUserM;
            this.alertRuleFG.get('userChoice').setValue(this.userContext);
        }
        else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.alertRuleFG.get('userChoice').setValue(this.userContext);
        }
        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
    }
    onUserSelectionChange(userId) {
        const index = this.selectedUserIds.indexOf(userId);
        if (index == -1) {
            this.selectedUserIds.push(userId);
            this.userM = this.userM.filter(user => user.id != userId);
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
        }
        this.selectedUserFC.setValue(this.selectedUserIds);
        this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
    }
    removeSelectedUsers(userId) {
        const index = this.selectedUserIds.indexOf(userId);
        if (index != -1) {
            this.selectedUserIds.splice(index, 1);
            this.selectedUserFC.setValue(this.selectedUserIds);
            this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
            const removedUser = this.userContext == UserContext.ROOT_ORG_USER ? this.rootOrgUserM.find(user => user.id == userId) : this.currentOrgUserM.find(user => user.id == userId);
            if (removedUser) {
                this.userM.push(removedUser);
                this.userSearchUtil.entityArr = this.userM;
                this.userSearchUtil.createSubscription();
            }
        }
    }
    getSelectedUsers() {
        return this.userContext == UserContext.ROOT_ORG_USER ? this.rootOrgUserM.filter(user => this.selectedUserIds.includes(user.id)) : this.currentOrgUserM.filter(user => this.selectedUserIds.includes(user.id));
    }
    setValidatorsForOtherUser() {
        this.alertRuleFG.get('isAnyOtherUser').valueChanges.subscribe((value) => {
            if (value == true) {
                this.otherUserEmail.setValidators([Validators.required]);
            }
            else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }
            this.otherUserEmail.updateValueAndValidity();
        });
    }
    addOtherUser(event) {
        const isAnyOtherUser = this.alertRuleFG.get('isAnyOtherUser');
        isAnyOtherUser.setValue(event.checked);
        if (isAnyOtherUser.value) {
            this.otherUserEmail.setValidators([Validators.required]);
        }
        else {
            this.otherUserEmail.reset([]);
            this.otherUserEmail.clearValidators();
        }
        this.otherUserEmail.updateValueAndValidity();
    }
    onInput() {
        this.inputPlaceholder = '';
    }
    get otherUserEmail() {
        return this.alertRuleFG.get('otherUserEmail');
    }
    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    add(event) {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.isValidEmail(email));
            if (validEmails.length > 0) {
                this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
            }
        }
        event.chipInput.clear();
    }
    removeEmail(email) {
        const index = this.otherUserEmail.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.otherUserEmail.value];
            emails.splice(index, 1);
            this.otherUserEmail.setValue(emails);
        }
    }
    /* users code */
    /* shift code */
    getShift() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shiftM = (yield this.shiftService.getShift(this.orgID));
            this.totalShiftCount = this.shiftM.length;
            this.shiftM.forEach(shift => this.allShiftID.push(shift['id']));
        });
    }
    selectAllShifts() {
        if (!this.alertRuleFG.get('shiftID').value.includes(-1)) {
            this.alertRuleFG.get('shiftID').reset([]);
            return;
        }
        this.alertRuleFG.get('shiftID').setValue([-1, ...this.allShiftID]);
    }
    selectedShift() {
        const selected = this.alertRuleFG.get('shiftID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.alertRuleFG.get('shiftID').patchValue(selected);
        }
        else if (this.alertRuleFG.get('shiftID').value.length == this.totalShiftCount) {
            this.allShiftID.splice(0, 0, -1);
            this.alertRuleFG.get('shiftID').patchValue(this.allShiftID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.alertRuleFG.get('shiftID').patchValue(filteredSelected);
        }
    }
    /* shift code */
    createUpdateAlert() {
        this.isFormSubmit = true;
        let shiftID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['shiftID'].value);
        let deviceID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['deviceID'].value);
        this.alertRuleFG.get('deviceID').patchValue(deviceID);
        this.alertRuleFG.get('shiftID').patchValue(shiftID);
        if (this.alertRuleFG.invalid) {
            this.alertRuleFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        if (this.action == FormAction.CREATE) {
            this.alertController.createAlertRule(this.orgID, this.alertRuleFG.value)
                .subscribe((createRes) => {
                let toast = this.toastrService.getToastStatus(createRes.status);
                this.toastrService.openToast(toast.title, createRes.message, toast.color);
                this.tscCommonService.back();
            }, error => {
                console.log('error in createAlertRule - ', error);
            });
        }
        else if (this.action == FormAction.UPDATE) {
            this.alertController.updateAlertRule(this.orgID, this.alertRuleID, this.alertRuleFG.value)
                .subscribe((updatedRes) => {
                let toast = this.toastrService.getToastStatus(updatedRes.status);
                this.toastrService.openToast(toast.title, updatedRes.message, toast.color);
                this.tscCommonService.back();
            }, error => {
                console.log('error in updateAlertRule - ', error);
            });
        }
    }
}
CreateUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: i3.EntityService }, { token: i3.DeviceService }, { token: i3.UnitService }, { token: i3.ShiftService }, { token: i4.UserService }, { token: i7$1.TSCCommonService }, { token: i2$1.FormBuilder }, { token: i7.ToastrService }, { token: AlertRuleController }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateComponent, selector: "lib-create-update", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "parameterFilterChild", first: true, predicate: ["parameterFilterChild"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE : PageTitleEnum.UPDATE }} {{ alertLabel\n                }} Alert Rule</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"alertRuleFG\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Alert On\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Alert name </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Alert name\" formControlName=\"name\"\n                                        required>\n                                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                                        Alert name is required\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <lib-parameter #parameterFilterChild></lib-parameter>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-1\" *ngIf=\"alertRuleFG.get('parameterID').value\">\n                            <div class=\"col-sm-12\">\n                                <mat-accordion>\n                                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isEntityPanelExpanded\" (opened)=\"entityPanelOpened()\"\n                                        (closed)=\"entityPanelClosed()\">\n                                        <mat-expansion-panel-header>\n                                            <mat-panel-title>\n                                                <div class=\"card-title sectionTitle\">\n                                                    Select entity *\n                                                </div>\n                                                <div class=\"row ms-2\">\n                                                    <mat-error class=\"entityError\"\n                                                        *ngIf=\"isFormSubmit && !isEntityPanelExpanded && errorHandling('entityID', 'required')\">\n                                                        Select entity\n                                                    </mat-error>\n                                                </div>\n                                            </mat-panel-title>\n                                        </mat-expansion-panel-header>\n                                        <div class=\"row\">\n                                            <div class=\"mb-3\">\n                                                <small class=\"pageSubtitle\">\n                                                    <span *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL\">\n                                                        Choose <span class=\"text-secondary fw-bold\">\n                                                            'Select all sub-entities'\n                                                        </span> to generate alert at the current selection and any future entities\n                                                        at that level.\n                                                    </span> </small>\n                                                <br />\n                                                <small class=\"pageSubtitle\">\n                                                    <span class=\"text-secondary fw-bold\">NOTE: </span> The parameter you've selected is not present in the entities\n                                                    highlighted in <span class=\"text-primary\"> blue.</span>\n                                                </small>\n                                            </div>\n                                            <div *ngFor=\"let entity of entityM; let i = index\" class=\"mt-2\">\n                                                <mat-checkbox\n                                                    [ngClass]=\"{'fw-bold': entity.children && entity.children.length > 0, 'text-primary': !entity.isParameterExists}\"\n                                                    [checked]=\"isSelected(entity.id)\" (change)=\"entityChange(entity.id, $event)\">\n                                                    {{ entity.name }}\n                                                </mat-checkbox>\n                                                <span class=\"ms-5\"\n                                                    *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL && alertRuleFG.get('entityID').value && alertRuleFG.get('entityID').value.length > 0\">\n                                                    <mat-checkbox formControlName=\"isSubEntitiesSelected\" (change)=\"selectAllSubEntities($event)\">\n                                                        Select all sub-entities\n                                                    </mat-checkbox>\n                                                </span>\n                                                <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                                                    <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                                                </div>\n                                            </div>\n                                            <ng-template #recursiveTemplate let-entities>\n                                                <div *ngFor=\"let entity of entities; let i = index\" class=\"mt-2\">\n                                                    <mat-checkbox\n                                                        [ngClass]=\"{'fw-bold': entity.children && entity.children.length > 0, 'text-primary': !entity.isParameterExists}\"\n                                                        [checked]=\"isSelected(entity.id)\" (change)=\"entityChange(entity.id, $event)\">\n                                                        {{ entity.name }}\n                                                    </mat-checkbox>\n                                                    <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                                                        <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                        <mat-error class=\"entityError\"\n                                            *ngIf=\"isFormSubmit && isEntityPanelExpanded && errorHandling('entityID', 'required')\">\n                                            <br />Select entity\n                                        </mat-error>\n                                    </mat-expansion-panel>\n                                </mat-accordion>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL && alertRuleFG.get('entityID').value && alertRuleFG.get('entityID').value.length > 0\">\n                            <div class=\"row mt-4\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"ps-1 radioBtnField\">\n                                        <div class=\"radioBtnGroupLabel\"> Would you prefer to receive alerts at device\n                                            level? </div>\n                                        <mat-radio-group formControlName=\"isAlertAtDeviceLevel\">\n                                            <div class=\"row my-2\">\n                                                <div class=\"col-sm-6\">\n                                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"true\">\n                                                        Yes\n                                                    </mat-radio-button>\n                                                </div>\n                                                <div class=\"col-sm-6\">\n                                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"false\">\n                                                        No\n                                                    </mat-radio-button>\n                                                </div>\n                                                <mat-error class=\"radioBtnGroupError ms-1 mt-1\" *ngIf=\"errorHandling('isAlertAtDeviceLevel', 'required') && \n                                                    this.alertRuleFG.controls['isAlertAtDeviceLevel'].touched\">\n                                                    Select an option\n                                                </mat-error>\n                                            </div>\n                                        </mat-radio-group>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\" *ngIf=\"alertRuleFG.get('isAlertAtDeviceLevel').value\">\n                                    <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select device</mat-label>\n                                        <mat-select formControlName=\"deviceID\" multiple required>\n                                            <ng-container *ngIf=\"devicesWithEntitiesM && devicesWithEntitiesM.length > 0; else noDeviceFound\">\n                                                <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\">\n                                                    Select all devices\n                                                </mat-option>\n                                                <mat-optgroup *ngFor=\"let entity of devicesWithEntitiesM\" [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                                    <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\" (click)=\"selectDevices(device.id)\">\n                                                        {{ device.name }}\n                                                    </mat-option>\n                                                </mat-optgroup>\n                                            </ng-container>\n                                            <ng-template #noDeviceFound>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling('deviceID', 'required')\">\n                                            Select device\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Rule Definition\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select unit</mat-label>\n                                    <mat-select (selectionChange)=\"unitChange($event.value)\" formControlName=\"unitID\" required>\n                                        <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noUnitFound\">\n                                            <mat-option>\n                                                <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                                    noEntriesFoundLabel=\"No matching name found.\">\n                                                </ngx-mat-select-search>\n                                            </mat-option>\n                                            <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                                                {{ unit.name }}\n                                            </mat-option>\n                                        </ng-container>\n                                        <ng-template #noUnitFound>\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </ng-template>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"alertRuleFG.get('parameterID').invalid\">\n                                        Please select parameter first\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('unitID', 'required') && alertRuleFG.get('parameterID').valid\">\n                                        Select unit\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select condition</mat-label>\n                                    <mat-select formControlName=\"condition\" (selectionChange)=\"conditionChange($event.value)\" required>\n                                        <mat-option *ngFor=\"let condition of LIST_CONSTANT.CONDITION\" [value]=\"condition.value\">\n                                            {{ condition.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('condition', 'required')\">\n                                        Select condition\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div [ngClass]=\"{'col-sm-3': showValueField(), 'col-sm-2': !showValueField()}\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select frequency</mat-label>\n                                    <mat-select formControlName=\"frequency\" required>\n                                        <mat-option *ngFor=\"let frequency of getFrequency()\" [value]=\"frequency.value\">\n                                            {{ frequency.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('frequency', 'required')\">\n                                        Select frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div [ngClass]=\"{'col-sm-3': showValueField(), 'col-sm-2': !showValueField()}\" *ngIf=\"showValueField()\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"value\" required>\n                                    <mat-error *ngIf=\"errorHandling('value', 'required')\">\n                                        Value is required\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"showStartEndFields()\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Start value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"startValue\" required>\n                                    <mat-error *ngIf=\"errorHandling('startValue', 'required')\">\n                                        Start value is required\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('startValue', 'invalidRange')\">\n                                        Start value must be less than end value\n                                      </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"showStartEndFields()\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> End value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"endValue\" required>\n                                    <mat-error *ngIf=\"errorHandling('endValue', 'required')\">\n                                        End value is required\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('endValue', 'invalidRange')\">\n                                        End value must be greater than start value\n                                      </mat-error>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Alert Recipient: Select or Add\n                        </div>\n                        <div class=\"row userContext\">\n                            <div class=\"col-sm-12\">\n                                <span class=\"fw-bold text-secondary me-2\"> Current org users </span>\n                                <mat-slide-toggle class=\"slideToggleBtn mt-2\" [formControl]=\"userFC\"\n                                    (change)=\"userContextChange()\"></mat-slide-toggle>\n                                <span class=\"fw-bold text-secondary ms-2\"> All users </span>\n                            </div>\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <mat-form-field class=\"mat-field-width-100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select user</mat-label>\n                                    <mat-select [formControl]=\"selectedUserFC\" required>\n                                        <mat-select-trigger>\n                                            Select users\n                                        </mat-select-trigger>\n                                        <ng-container *ngIf=\"userM && userM.length > 0 && userM[0]['id']; else noUserFound\">\n                                            <mat-option>\n                                                <ngx-mat-select-search [formControl]=\"userSearchUtil.filterFC\" placeholderLabel=\"Search by name/email\"\n                                                    noEntriesFoundLabel=\"No matching name/email found.\">\n                                                </ngx-mat-select-search>\n                                            </mat-option>\n                                            <mat-option class=\"matOptionNameEmail\" *ngFor=\"let user of userSearchUtil.filteredEntities | async\"\n                                                [value]=\"user.id\" (onSelectionChange)=\"onUserSelectionChange(user.id)\">\n                                                <!-- <span class=\"ms-3\">\n                                                    <img class=\"rounded-circle border profileImageDropdownView\"\n                                                        [src]=\"user.profileImgUrl || userService.defaultImage(\n                                                        (user?.['firstName'] ? user['firstName'] + ' ' + user?.['lastName'] : ''), \n                                                        ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\"alt=\"Profile image\">\n                                                </span> -->\n                                                <span class=\"ms-3\">\n                                                    {{ user.firstName }} {{ user?.lastName }}\n                                                </span>\n                                                <br />\n                                                <span class=\"ms-3 text-secondary\"> {{user.email}} </span>\n                                            </mat-option>\n                                        </ng-container>\n                                        <ng-template #noUserFound>\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </ng-template>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"selectedUserFC.hasError('required')\">\n                                        Select user\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\" *ngIf=\"selectedUserIds?.length > 0\">\n                                <mat-card class=\"border card\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <span class=\"card-title sectionTitle\">\n                                                Selected users\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <perfect-scrollbar class=\"scrollHeight\">\n                                        <div class=\"row mt-2\">\n                                            <div class=\"col-sm-12\" *ngFor=\"let user of getSelectedUsers()\">\n                                                <div class=\"d-flex align-items-center\">\n                                                    <div class=\"profileImgContainer\">\n                                                        <img class=\"profileImg rounded-circle border\" [src]=\"user.profileImgUrl || userService.defaultImage(\n                                                            (user?.['firstName'] ? user['firstName'] + ' ' + user?.['lastName'] : ''), \n                                                            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\"\n                                                            alt=\"Profile img\" />\n                                                    </div>\n                                                    <div class=\"ps-1 lineHeight\">\n                                                        <span> {{ user.firstName }} {{ user?.lastName }} </span>\n                                                        <br />\n                                                        <span class=\"text-secondary\"> {{user.email}} </span>\n                                                    </div>\n                                                    <div class=\"ms-auto\">\n                                                        <span\n                                                            class=\"material-symbols-outlined me-3 text-danger cursorPointer\"\n                                                            matTooltip=\"Remove selected user\" matTooltipPosition=\"above\"\n                                                            (click)=\"removeSelectedUsers(user.id)\">\n                                                            cancel\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </perfect-scrollbar>\n                                </mat-card>\n                            </div>\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <mat-checkbox formControlName=\"isAnyOtherUser\" (change)=\"addOtherUser($event)\">\n                                    Any other user\n                                </mat-checkbox>\n                            </div>\n                            <div class=\"col-sm-6\" *ngIf=\"alertRuleFG.controls['isAnyOtherUser'].value == true\">\n                                <mat-form-field class=\"mat-field-width-100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Enter user email</mat-label>\n                                    <mat-chip-list #chipList>\n                                        <mat-chip *ngFor=\"let email of otherUserEmail.value\" [removable]=\"removable\"\n                                            (removed)=\"removeEmail(email)\">\n                                            {{ email }}\n                                            <button matChipRemove *ngIf=\"removable\">\n                                                <mat-icon>cancel</mat-icon>\n                                            </button>\n                                        </mat-chip>\n                                        <input [placeholder]=\"inputPlaceholder\" [matChipInputFor]=\"chipList\"\n                                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                            [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"\n                                            (input)=\"onInput()\" required>\n                                        <mat-error class=\"userEmailError\" *ngIf=\"otherUserEmail.hasError('required')\">\n                                            Email is required\n                                        </mat-error>\n                                    </mat-chip-list>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Notification Preferences\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"mat-field-width-100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select SMS frequency</mat-label>\n                                    <mat-select formControlName=\"smsFrequency\" required>\n                                        <mat-option *ngFor=\"let smsFreq of LIST_CONSTANT.SMS_FREQUENCY\"\n                                            [value]=\"smsFreq.value\">\n                                            {{ smsFreq.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('smsFrequency', 'required')\">\n                                        Select sms frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"mat-field-width-100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select email frequency</mat-label>\n                                    <mat-select formControlName=\"emailFrequency\" required>\n                                        <mat-option *ngFor=\"let emailFreq of LIST_CONSTANT.EMAIL_FREQUENCY\"\n                                            [value]=\"emailFreq.value\">\n                                            {{ emailFreq.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('emailFrequency', 'required')\">\n                                        Select email frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select shift</mat-label>\n                                    <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n                                        <mat-select formControlName=\"shiftID\" multiple required>\n                                            <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                                                Select all\n                                            </mat-option>\n                                            <mat-option *ngFor=\"let shift of shiftM\" [value]=\"shift.id\" (click)=\"selectedShift()\">\n                                                {{ shift.name }}\n                                            </mat-option>\n                                        </mat-select>\n                                    </ng-container>\n                                    <ng-template #noDataOption>\n                                        <mat-select formControlName=\"shiftID\">\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </mat-select>\n                                    </ng-template>\n                                    <mat-error *ngIf=\"errorHandling('shiftID', 'required')\">\n                                        Select shift\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div align=\"end\" class=\"mt-3\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary me-2\" (click)=\"tscCommonService.back()\">\n                    {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                </button>\n                <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"createUpdateAlert()\"\n                    [ngClass]=\"{'disabled': action == FormAction.UPDATE && isEqual}\">\n                    {{ action == FormAction.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n                    ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                </button>\n            </div>\n        </form>\n    </div>\n</div>", styles: [".matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.entityError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.userCardHeight{max-height:200px}.card{box-shadow:none!important}.scrollHeight{height:110px}.radioBtnField{height:82px}.radioBtnGroupLabel{font-size:16px}.radioBtnGroupError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.radioBtnLabel{color:#686868f3}.lineHeight{line-height:1}.profileImageDropdownView{height:35px;width:35px}.profileImgContainer{width:35px;min-height:35px;max-height:auto;float:left;margin:3px;padding:3px;display:flex;align-items:center;justify-content:center}.profileImg{width:35px}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#14c747}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-thumb{background-color:#14c747}.userEmailError{font-size:75%}.matOptionNameEmail{line-height:1.5em!important}\n"], components: [{ type: i9$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i3.ParameterComponent, selector: "lib-parameter", outputs: ["emitFilter"] }, { type: i11$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i11$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i12$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i13.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i14$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i15.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i15.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i16$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i11.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i18.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i19.MatChipList, selector: "mat-chip-list", inputs: ["aria-orientation", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "selectable", "tabIndex", "errorStateMatcher"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i20.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10$1.MatLabel, selector: "mat-label" }, { type: i21.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i22.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i11$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i11$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i22.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i22.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i22.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i13.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i14$1.MatSelectTrigger, selector: "mat-select-trigger" }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i19.MatChipRemove, selector: "[matChipRemove]" }, { type: i19.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputSeparatorKeyCodes", "placeholder", "id", "matChipInputFor", "matChipInputAddOnBlur", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }], pipes: { "async": i22.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-create-update',
                    templateUrl: './create-update.component.html',
                    styleUrls: ['./create-update.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: i3.EntityService }, { type: i3.DeviceService }, { type: i3.UnitService }, { type: i3.ShiftService }, { type: i4.UserService }, { type: i7$1.TSCCommonService }, { type: i2$1.FormBuilder }, { type: i7.ToastrService }, { type: AlertRuleController }]; }, propDecorators: { searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }], parameterFilterChild: [{
                type: ViewChild,
                args: ['parameterFilterChild']
            }] } });

const routes$3 = [
    {
        path: '',
        component: CreateUpdateComponent
    }
];
class CreateUpdateRoutingModule {
}
CreateUpdateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
CreateUpdateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, imports: [[RouterModule.forChild(routes$3)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$3)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class CreateUpdateModule {
}
CreateUpdateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, declarations: [CreateUpdateComponent], imports: [CommonModule,
        CreateUpdateRoutingModule,
        ParameterModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatRadioModule,
        NgxMatSelectSearchModule,
        PerfectScrollbarModule,
        EllipsisPipeModule,
        SearchBarTwoModule] });
CreateUpdateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, imports: [[
            CommonModule,
            CreateUpdateRoutingModule,
            ParameterModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatCheckboxModule,
            MatIconModule,
            MatChipsModule,
            MatExpansionModule,
            MatSlideToggleModule,
            MatTooltipModule,
            MatRadioModule,
            NgxMatSelectSearchModule,
            PerfectScrollbarModule,
            EllipsisPipeModule,
            SearchBarTwoModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreateUpdateComponent
                    ],
                    imports: [
                        CommonModule,
                        CreateUpdateRoutingModule,
                        ParameterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatChipsModule,
                        MatExpansionModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        MatRadioModule,
                        NgxMatSelectSearchModule,
                        PerfectScrollbarModule,
                        EllipsisPipeModule,
                        SearchBarTwoModule
                    ]
                }]
        }] });

// /tsc-library/
class CreateUpdateEscalationComponent {
    constructor(dialogRef, data, escalationFB, activatedRoute, storageService, userService, tscCommonService, toastrService, escalationController) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.escalationFB = escalationFB;
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.userService = userService;
        this.tscCommonService = tscCommonService;
        this.toastrService = toastrService;
        this.escalationController = escalationController;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.LIST_CONSTANT = LIST_CONSTANT;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.DialogEnum = DialogEnum;
        this.InvalidForm = InvalidForm;
        this.ToastrColor = ToastrColor;
        this.UserContext = UserContext;
        this.ProfileImg = ProfileImg;
        this.userContext = UserContext.ROOT_ORG_USER;
        this.inputPlaceholder = "email1@domain.com, email2@domain.com";
        this.isEqual = false;
        this.allUserID = [];
        this.totalUserCount = 0;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.userM = [new User()];
        this.rootOrgUserM = [new User()];
        this.currentOrgUserM = [new User()];
        this.userFC = new FormControl(true, Validators.required);
        this.userSearchUtil = new MatSelectSearchService(['firstName', 'lastName', 'email']);
        this.errorHandling = (control, error) => {
            return this.escalationFG.controls[control].hasError(error);
        };
        this.alertRuleID = data.alertRuleID;
        this.levelID = data.levelID;
        this.action = data.action;
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.escalationInit();
        this.initializeData();
    }
    initializeData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUsersByOrgID();
            yield this.getCurrentOrgUserAccess();
            if (this.action == PageTitleEnum.UPDATE) {
                this.escalationRuleID = this.data.escLevelConfig.escalationRuleID;
                this.setValidatorsForOtherUser();
                this.patchEscalation(this.data['escLevelConfig']);
            }
            this.escalationFG.valueChanges.subscribe(() => {
                this.isEqual = isEqual(this.initialObject, this.escalationFG);
            });
        });
    }
    escalationInit() {
        this.escalationFG = this.escalationFB.group({
            alertRuleID: [this.alertRuleID],
            level: [this.levelID],
            intervalValue: [, [Validators.required, this.integerValidator()]],
            intervalFrequencyKey: [, Validators.required],
            notificationPrefValue: [, [Validators.required, this.integerValidator()]],
            notificationPrefKey: [, Validators.required],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            isAnyOtherUser: [false],
            otherUserEmail: [[]],
        });
    }
    integerValidator() {
        return (control) => {
            const value = control.value;
            if (value != null && value != undefined) {
                const isInteger = Number.isInteger(value);
                return isInteger ? null : { 'integerError': true };
            }
            return null;
        };
    }
    patchEscalation(escalationLevelConfig) {
        this.escalationFG.patchValue({
            alertRuleID: escalationLevelConfig.alertRuleID,
            level: escalationLevelConfig.level,
            intervalValue: escalationLevelConfig.intervalValue,
            intervalFrequencyKey: escalationLevelConfig.intervalFrequencyKey,
            notificationPrefValue: escalationLevelConfig.notificationPrefValue,
            notificationPrefKey: escalationLevelConfig.notificationPrefKey,
            userChoice: escalationLevelConfig.userChoice,
            isAnyOtherUser: escalationLevelConfig.isAnyOtherUser,
            otherUserEmail: escalationLevelConfig.otherUserEmail,
        });
        this.userFC.patchValue(escalationLevelConfig.userChoice == UserContext.CURRENT_ORG_USER ? false : true);
        this.escalationFG.get('userID').patchValue((escalationLevelConfig.userID.length == this.totalUserCount) ? [-1, ...escalationLevelConfig.userID] : [...escalationLevelConfig.userID]);
        this.initialObject = this.escalationFG.value;
        this.isEqual = true;
    }
    /* users code */
    getUsersByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rootOrgUserM = (yield this.userService.getUsersByOrgID(this.orgID));
            this.userM = this.rootOrgUserM;
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
            this.totalUserCount = this.userM.length;
            this.userM.forEach(user => this.allUserID.push(user['id']));
        });
    }
    getCurrentOrgUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentOrgUserM = (yield this.userService.getCurrentOrgUserAccess(this.orgID));
        });
    }
    userContextChange() {
        if (this.userFC.value) {
            this.userContext = UserContext.ROOT_ORG_USER;
            this.userM = this.rootOrgUserM;
            this.escalationFG.get('userChoice').setValue(this.userContext);
        }
        else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.escalationFG.get('userChoice').setValue(this.userContext);
        }
        this.allUserID = [];
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();
        this.totalUserCount = this.userM.length;
        this.userM.forEach(user => this.allUserID.push(user['id']));
        this.escalationFG.get('userID').setValue([]);
    }
    selectUser() {
        const selected = this.escalationFG.get('userID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.escalationFG.get('userID').patchValue(selected);
        }
        else if (this.escalationFG.get('userID').value.length == this.totalUserCount) {
            this.allUserID.splice(0, 0, -1);
            this.escalationFG.get('userID').patchValue(this.allUserID);
        }
        else {
            const filteredSelected = selected.filter(s => s != -1);
            this.escalationFG.get('userID').patchValue(filteredSelected);
        }
    }
    selectAllUsers() {
        if (!this.escalationFG.get('userID').value.includes(-1)) {
            this.escalationFG.get('userID').reset([]);
            return;
        }
        this.escalationFG.get('userID').setValue([-1, ...this.allUserID]);
    }
    setValidatorsForOtherUser() {
        this.escalationFG.get('isAnyOtherUser').valueChanges.subscribe((value) => {
            if (value == true) {
                this.otherUserEmail.setValidators([Validators.required]);
            }
            else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }
            this.otherUserEmail.updateValueAndValidity();
        });
    }
    addOtherUser(event) {
        const isAnyOtherUser = this.escalationFG.get('isAnyOtherUser');
        isAnyOtherUser.setValue(event.checked);
        if (isAnyOtherUser.value) {
            this.otherUserEmail.setValidators([Validators.required]);
        }
        else {
            this.otherUserEmail.reset([]);
            this.otherUserEmail.clearValidators();
        }
        this.otherUserEmail.updateValueAndValidity();
    }
    onInput() {
        this.inputPlaceholder = '';
    }
    get otherUserEmail() {
        return this.escalationFG.get('otherUserEmail');
    }
    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    add(event) {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.isValidEmail(email));
            if (validEmails.length > 0) {
                this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
            }
        }
        event.chipInput.clear();
    }
    removeEmail(email) {
        const index = this.otherUserEmail.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.otherUserEmail.value];
            emails.splice(index, 1);
            this.otherUserEmail.setValue(emails);
        }
    }
    /* users code */
    adjustArrayValues() {
        this.adjustArray(this.escalationFG.controls['userID'].value);
    }
    adjustArray(arr) {
        if (arr.includes(-1)) {
            arr.shift();
        }
    }
    createUpdateEscalationRule() {
        this.adjustArrayValues();
        if (this.escalationFG.invalid) {
            this.escalationFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }
        if (this.action == PageTitleEnum.CREATE) {
            this.escalationController.createEsclationByLevelID(this.orgID, this.escalationFG.value)
                .subscribe((createRes) => {
                let toast = this.toastrService.getToastStatus(createRes.status);
                this.toastrService.openToast(toast.title, createRes.message, toast.color);
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }, error => {
                console.log('error in createEsclationByLevelID - ', error);
            });
        }
        else if (this.action == PageTitleEnum.UPDATE) {
            if (this.isEqual)
                return;
            this.escalationController.updateEsclationByLevelID(this.orgID, this.escalationRuleID, this.escalationFG.value)
                .subscribe((updateRes) => {
                let toast = this.toastrService.getToastStatus(updateRes.status);
                this.toastrService.openToast(toast.title, updateRes.message, toast.color);
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            }, error => {
                console.log('error in updateEsclationByLevelID - ', error);
            });
        }
    }
}
CreateUpdateEscalationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationComponent, deps: [{ token: i1$2.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2$1.FormBuilder }, { token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: i4.UserService }, { token: i7$1.TSCCommonService }, { token: i7.ToastrService }, { token: EscalationController }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateEscalationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateEscalationComponent, selector: "lib-create-update", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action }} Escalation Rule\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"escalationFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Interval\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label class=\"formLabel\"> Value </mat-label>\n                                <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0\" [min]=\"0\" formControlName=\"intervalValue\"\n                                    required>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'required')\">\n                                    Value is required\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'min')\">\n                                    This field can not be negative\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'integerError')\">\n                                    Please enter an integer value\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"mat-field-width-100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select frequency</mat-label>\n                                <mat-select formControlName=\"intervalFrequencyKey\" required>\n                                    <mat-option *ngFor=\"let frequency of LIST_CONSTANT.ESCALATION_FREQUENCY\"\n                                        [value]=\"frequency.value\">\n                                        {{ frequency.label }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('intervalFrequencyKey', 'required')\">\n                                    Select frequency\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Notification frequency\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label class=\"formLabel\"> Value </mat-label>\n                                <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0\" [min]=\"0\"\n                                    formControlName=\"notificationPrefValue\" required>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'required')\">\n                                    Value is required\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'min')\">\n                                    This field can not be negative\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'integerError')\">\n                                    Please enter an integer value\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"mat-field-width-100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select frequency</mat-label>\n                                <mat-select formControlName=\"notificationPrefKey\" required>\n                                    <mat-option *ngFor=\"let frequency of LIST_CONSTANT.ESCALATION_FREQUENCY\"\n                                        [value]=\"frequency.value\">\n                                        {{ frequency.label }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefKey', 'required')\">\n                                    Select frequency\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Escalated to\n                    </div>\n                    <div class=\"row userContext\">\n                        <div class=\"col-sm-6 d-flex justify-content-start centerAlignVertical\">\n                            <span class=\"fw-bold text-secondary me-2\"> Current org users </span>\n                            <mat-slide-toggle class=\"slideToggleBtn\" [formControl]=\"userFC\"\n                                (change)=\"userContextChange()\"></mat-slide-toggle>\n                            <span class=\"fw-bold text-secondary ms-2\"> All users </span>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select user</mat-label>\n                                <mat-select formControlName=\"userID\" multiple required>\n                                    <ng-container *ngIf=\"userM && userM.length > 0 && userM[0]['id']; else noUserFound\">\n                                        <mat-option>\n                                            <ngx-mat-select-search [formControl]=\"userSearchUtil.filterFC\" placeholderLabel=\"Search by name/email\"\n                                                noEntriesFoundLabel=\"No matching name/email found.\">\n                                            </ngx-mat-select-search>\n                                        </mat-option>\n                                        <mat-option [value]=\"-1\" (click)=\"selectAllUsers()\">\n                                            Select all\n                                        </mat-option>\n                                        <mat-option *ngFor=\"let user of userSearchUtil.filteredEntities | async\" [value]=\"user.id\"\n                                            (click)=\"selectUser()\">\n                                            {{ user?.email }}\n                                        </mat-option>\n                                    </ng-container>\n                                    <ng-template #noUserFound>\n                                        <mat-option disabled>\n                                            {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                        </mat-option>\n                                    </ng-template>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('userID', 'required')\">\n                                    Select user\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                        <div class=\"col-sm-6 mb-3 d-flex justify-content-start centerAlignVertical\">\n                            <mat-checkbox formControlName=\"isAnyOtherUser\" (change)=\"addOtherUser($event)\">\n                                Any other user\n                            </mat-checkbox>\n                        </div>\n                        <div class=\"col-sm-6\" *ngIf=\"escalationFG.controls['isAnyOtherUser'].value == true\">\n                            <mat-form-field class=\"mat-field-width-100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Enter user email</mat-label>\n                                <mat-chip-list #chipList>\n                                    <mat-chip *ngFor=\"let email of otherUserEmail.value\" [removable]=\"removable\"\n                                        (removed)=\"removeEmail(email)\">\n                                        {{ email }}\n                                        <button matChipRemove *ngIf=\"removable\">\n                                            <mat-icon>cancel</mat-icon>\n                                        </button>\n                                    </mat-chip>\n                                    <input [placeholder]=\"inputPlaceholder\" [matChipInputFor]=\"chipList\"\n                                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                        [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"\n                                        (input)=\"onInput()\" required>\n                                    <mat-error class=\"userEmailError\" *ngIf=\"otherUserEmail.hasError('required')\">\n                                        Email is required\n                                    </mat-error>\n                                </mat-chip-list>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"createUpdateEscalationRule()\"\n        [ngClass]=\"{'disabled': action == PageTitleEnum.UPDATE && isEqual}\">\n        {{ action == PageTitleEnum.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n        ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", styles: [".matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.entityError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.userCardHeight{max-height:200px}.card{box-shadow:none!important}.scrollHeight{height:110px}.radioBtnField{height:82px}.radioBtnGroupLabel{font-size:16px}.radioBtnGroupError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.radioBtnLabel{color:#686868f3}.lineHeight{line-height:1}.profileImageDropdownView{height:35px;width:35px}.profileImgContainer{width:35px;min-height:35px;max-height:auto;float:left;margin:3px;padding:3px;display:flex;align-items:center;justify-content:center}.profileImg{width:35px}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#14c747}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-thumb{background-color:#14c747}.userEmailError{font-size:75%}.matOptionNameEmail{line-height:1.5em!important}\n"], components: [{ type: i9$2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i9$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i14$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i15.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i11.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i16$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i12$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i19.MatChipList, selector: "mat-chip-list", inputs: ["aria-orientation", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "selectable", "tabIndex", "errorStateMatcher"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i20.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1$2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1$2.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1$2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10$1.MatLabel, selector: "mat-label" }, { type: i21.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i2$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i22.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i22.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i19.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i19.MatChipRemove, selector: "[matChipRemove]" }, { type: i19.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputSeparatorKeyCodes", "placeholder", "id", "matChipInputFor", "matChipInputAddOnBlur", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i22.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i22.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-create-update',
                    templateUrl: './create-update.component.html',
                    styleUrls: ['./create-update.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$2.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2$1.FormBuilder }, { type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: i4.UserService }, { type: i7$1.TSCCommonService }, { type: i7.ToastrService }, { type: EscalationController }]; } });

class CreateUpdateEscalationModule {
}
CreateUpdateEscalationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateEscalationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationModule, declarations: [CreateUpdateEscalationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatTooltipModule,
        NgxMatSelectSearchModule] });
CreateUpdateEscalationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatCardModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatSelectModule,
            MatCheckboxModule,
            MatIconModule,
            MatChipsModule,
            MatSlideToggleModule,
            MatTooltipModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateEscalationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreateUpdateEscalationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatDialogModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatInputModule,
                        MatSelectModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatChipsModule,
                        MatSlideToggleModule,
                        MatTooltipModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });

// /tsc-library/
class ListComponent {
    constructor(activatedRoute, storageService, toastrService, escalationController, dialog) {
        this.activatedRoute = activatedRoute;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.escalationController = escalationController;
        this.dialog = dialog;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.MATERIAL_CONSTANT = MATERIAL_CONSTANT;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.AlertButtonLabelEnum = AlertButtonLabelEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.DialogEnum = DialogEnum;
        this.escalationLevelJSON = [];
        this.escalationLevelCountM = new EscalationLevelCount();
        this.escalationLevelInfoM = [new EscalationLevelInfo()];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getEscalationLevelCount();
        this.activatedRoute.params.subscribe((pathParam) => {
            if (pathParam.alertID != null) {
                this.alertRuleID = pathParam.alertID;
            }
        });
        this.getAllLevelEscalation();
    }
    getEscalationLevelCount() {
        this.escalationController.getEscalationLevelCount(this.orgID).subscribe((escalationLevelCountRes) => {
            this.escalationLevelCountM = escalationLevelCountRes;
            if (this.escalationLevelCountM.level && this.escalationLevelCountM != null) {
                this.escalationLevelJSON = this.getEscalationLevelJSON(this.escalationLevelCountM);
            }
        }, error => {
            console.log('error in getEscalationLevelCount() -', error);
        });
    }
    getAllLevelEscalation() {
        this.escalationController.getAllLevelEscalation(this.orgID, this.alertRuleID).subscribe((escalationLevelRes) => {
            this.escalationLevelInfoM = escalationLevelRes;
        }, error => {
            console.log('error in getAllLevelEscalation() -', error);
        });
    }
    getEscalationLevelJSON(escalationLevel) {
        const levelsArray = [];
        for (let i = 1; i <= escalationLevel.level; i++) {
            levelsArray.push({
                id: i,
                name: `Level ${i}`
            });
        }
        return levelsArray;
    }
    isLevelConfigured(levelId) {
        var _a;
        return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.some(level => level.level == levelId);
    }
    getCorresondingEscLevelConfig(levelId) {
        var _a;
        return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(level => level.level == levelId);
    }
    hasEscalationDataForPreviousLevel(levelId) {
        return levelId > 1 && this.hasEscalationDataForLevel(levelId - 1);
    }
    hasEscalationDataForLevel(levelId) {
        var _a;
        const escalationData = (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(level => level.level == levelId);
        return !!escalationData;
    }
    createUpdateEscalationRuleDialog(levelID, action, escLevelConfig) {
        const dialog = this.dialog.open(CreateUpdateEscalationComponent, {
            data: {
                alertRuleID: this.alertRuleID,
                levelID: levelID,
                action: action,
                escLevelConfig: escLevelConfig
            },
            minWidth: '50vw',
            maxWidth: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' }
        });
        dialog.afterClosed().subscribe((result) => {
            if (result == DialogEnum.SUCCESS_DR) {
                this.getAllLevelEscalation();
            }
        });
    }
    openDeleteEscRuleDialog(levelID, escLevelConfig) {
        const escalationRuleID = escLevelConfig.escalationRuleID;
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '500px',
            maxWidth: '500px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete escalation ?',
                body: 'Escalation configuration for level ' + '<b>' + levelID + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEscalationRuleDialog(escalationRuleID);
            }
        });
    }
    deleteEscalationRuleDialog(escalationRuleID) {
        this.escalationController.deleteEsclationByLevelID(this.orgID, escalationRuleID).subscribe((deleteRes) => {
            window.location.reload();
            let toast = this.toastrService.getToastStatus(deleteRes.status);
            this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
        });
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i2.StorageService }, { token: i7.ToastrService }, { token: EscalationController }, { token: i1$2.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ListComponent, selector: "lib-list", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Escalation Rule</div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row mb-3\" *ngFor=\"let level of escalationLevelJSON\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"card-title sectionTitle\">\n                                {{ level.name }}\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <span class=\"text-danger\" *ngIf=\"!isLevelConfigured(level.id)\">\n                                    Not configured.\n                                </span>\n                                <span *ngIf=\"isLevelConfigured(level.id)\">\n                                    <div fxLayout=\"row wrap\">\n                                        <div class=\"col-sm-3\">\n                                            <div>Escalations:</div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Interval</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalValue}} - {{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalFrequencyName}}</div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Notification frequency</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.notificationPrefValue}}\n                                                - {{ getCorresondingEscLevelConfig(level.id)?.notificationPrefName}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 centerAlignVertical justify-content-end\">\n                            <button class=\"btn btn-sm btn-success\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.CREATE)\"\n                                *ngIf=\"!isLevelConfigured(level.id) && (level.id == 1 || (hasEscalationDataForPreviousLevel(level.id) && !hasEscalationDataForLevel(level.id)))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-secondary disableButton\" matTooltipPosition=\"above\"\n                                [matTooltip]=\"'Setting up a previous level is mandatory before creating the escalation metric for the current level'\"\n                                *ngIf=\"!isLevelConfigured(level.id) && level.id != 1 && (hasEscalationDataForLevel(level.id) || !hasEscalationDataForPreviousLevel(level.id))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-primary me-2\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.UPDATE, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\"\n                                (click)=\"openDeleteEscRuleDialog(level.id, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                            </button>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".disableButton{cursor:not-allowed;background-color:#b5b2b2;border-color:#b5b2b2;color:#fff}\n"], components: [{ type: i9$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i22.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i22.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8$1.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-list',
                    templateUrl: './list.component.html',
                    styleUrls: ['./list.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i2.StorageService }, { type: i7.ToastrService }, { type: EscalationController }, { type: i1$2.MatDialog }]; } });

const routes$2 = [
    {
        path: '',
        component: ListComponent
    }
];
class ListRoutingModule {
}
ListRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ListRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
                }]
        }] });

class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule,
        ListRoutingModule,
        CreateUpdateEscalationModule,
        MatCardModule,
        MatTableModule,
        MatTooltipModule,
        FlexLayoutModule] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, imports: [[
            CommonModule,
            ListRoutingModule,
            CreateUpdateEscalationModule,
            MatCardModule,
            MatTableModule,
            MatTooltipModule,
            FlexLayoutModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ListComponent
                    ],
                    imports: [
                        CommonModule,
                        ListRoutingModule,
                        CreateUpdateEscalationModule,
                        MatCardModule,
                        MatTableModule,
                        MatTooltipModule,
                        FlexLayoutModule
                    ]
                }]
        }] });

// /tsc-library/
class ConfiguredAlarmPageComponent {
    constructor(storageService, alertController) {
        this.storageService = storageService;
        this.alertController = alertController;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.AlertTypeEnum = AlertTypeEnum;
        this.AlertPageLabelEnum = AlertPageLabelEnum;
        this.StatusEnum = StatusEnum;
        this.displayedColumn = ['id', 'name', 'associatedWith', 'ruleDescription', 'type', 'status'];
        this.resultLength = 0;
        this.dataSource = [];
        this.searchFlag = false;
        this.searchArr = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
    }
    ngAfterViewInit() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.searchArr = [];
            if (this.searchFlag) {
                this.searchArr.push('name:' + this.searchValue);
            }
            const alertType = AlertTypeEnum.ALL;
            return this.alertController.getAlertRuleByPage(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.searchArr, alertType, this.orgID).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }
    searchFn(value) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        }
        else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
}
ConfiguredAlarmPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageComponent, deps: [{ token: i2.StorageService }, { token: AlertRuleController }], target: i0.ɵɵFactoryTarget.Component });
ConfiguredAlarmPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfiguredAlarmPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Configured Alarms</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"overflowX customScrollBar\">\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n            matSortDirection=\"asc\" matSortDisableClear>\n\n            <ng-container matColumnDef=\"id\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                    ID\n                </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    {{ row['id'] ? row['id']: COMMON_CONSTANT.HYPHEN }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <th class=\"px-3 columnWidth2\" mat-header-cell *matHeaderCellDef> Name </th>\n                <td class=\"px-3 columnWidth2\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['name']?.length>25? row['name']: ''\" matTooltipPosition=\"above\"\n                    matTooltipClass=\"nameTooltip\">\n                    {{ (row['name'] ? row['name']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"associatedWith\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['associatedWith']?.length>30? row['associatedWith']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['associatedWith'] ? row['associatedWith']: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ruleDescription\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['ruleDescription']?.length>30? row['ruleDescription']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['ruleDescription'] ? row['ruleDescription']: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"type\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Type </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <span class=\"badge rounded-pill bg-light text-dark\" [ngSwitch]=\"row?.type\">\n                        <ng-container *ngSwitchCase=\"AlertTypeEnum.INSTANTANEOUS\">{{\n                            AlertPageLabelEnum.INSTANTANEOUS_LABEL\n                            }}</ng-container>\n                        <ng-container *ngSwitchCase=\"AlertTypeEnum.PERIODIC\">{{ AlertPageLabelEnum.PERIODIC_LABEL\n                            }}</ng-container>\n                    </span>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <span class=\"badge rounded-pill\" [ngClass]=\"{'bg-success': row?.status, 'bg-danger': !row?.status}\">\n                        {{ row?.status ? StatusEnum.ACTIVE_STATUS : StatusEnum.INACTIVE_STATUS }}\n                    </span>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n            <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:250px}.columnWidth3{min-width:300px}.badge{text-transform:none}\n"], components: [{ type: i7$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i9.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i9.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9.MatCellDef, selector: "[matCellDef]" }, { type: i9.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i22.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i22.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i22.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7$1.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i2.StorageService }, { type: AlertRuleController }]; }, propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }], paginator: [{
                type: ViewChild,
                args: ['paginator']
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn']
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

const routes$1 = [
    {
        path: '',
        component: ConfiguredAlarmPageComponent
    }
];
class ConfiguredAlarmPageRoutingModule {
}
ConfiguredAlarmPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConfiguredAlarmPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
ConfiguredAlarmPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

class ConfiguredAlarmPageModule {
}
ConfiguredAlarmPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConfiguredAlarmPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageModule, declarations: [ConfiguredAlarmPageComponent], imports: [CommonModule,
        ConfiguredAlarmPageRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        SearchBarOneModule,
        EllipsisPipeModule] });
ConfiguredAlarmPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageModule, imports: [[
            CommonModule,
            ConfiguredAlarmPageRoutingModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatTooltipModule,
            SearchBarOneModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConfiguredAlarmPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConfiguredAlarmPageComponent
                    ],
                    imports: [
                        CommonModule,
                        ConfiguredAlarmPageRoutingModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatTooltipModule,
                        SearchBarOneModule,
                        EllipsisPipeModule
                    ]
                }]
        }] });

// /tsc-library/
class GeneratedAlarmPageComponent {
    constructor(dateService, storageService, organizationService, alertController) {
        this.dateService = dateService;
        this.storageService = storageService;
        this.organizationService = organizationService;
        this.alertController = alertController;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.StatusEnum = StatusEnum;
        this.AlertStatusEnum = AlertStatusEnum;
        this.AlertTypeEnum = AlertTypeEnum;
        this.AlertPageLabelEnum = AlertPageLabelEnum;
        this.AlertStatusLabelEnum = AlertStatusLabelEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.displayedColumn = ['id', 'alertName', 'parameterLabel', 'associatedWith', 'description', 'time', 'type', 'status'];
        this.resultLength = 0;
        this.dataSource = [];
        this.searchFlag = false;
        this.searchArr = [];
        this.timeZone = null;
        this.today = new Date();
        this.selectedMonthFC = new FormControl(moment().format('YYYY-MM'));
        this.startDateFC = new FormControl();
        this.endDateFC = new FormControl();
        this.statusFC = new FormControl(AlertStatusEnum.ACTIVE, Validators.required);
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.getTimezone();
    }
    getTimezone() {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeZone = (yield this.organizationService.getOrgTimezone());
            this.startDateFC.patchValue(moment().startOf('month').tz(this.timeZone).format());
            this.endDateFC.patchValue(moment().add(1, 'months').startOf('month').tz(this.timeZone).format());
            if (this.statusFC.value == AlertStatusEnum.ACTIVE) {
                this.getActiveAlertByPage();
            }
            else {
                this.getResolvedAlertByPage();
            }
        });
    }
    monthSelectedHandler(normalizedMonth, datepicker) {
        let duration = this.dateService.monthSelectedHandler(normalizedMonth, datepicker);
        this.selectedMonthFC.setValue(duration);
        this.startDateFC.patchValue(moment(normalizedMonth).startOf('month').tz(this.timeZone).format());
        this.endDateFC.patchValue(moment(normalizedMonth).add(1, 'months').startOf('month').tz(this.timeZone).format());
        if (this.statusFC.value == AlertStatusEnum.ACTIVE) {
            this.getActiveAlertByPage();
        }
        else {
            this.getResolvedAlertByPage();
        }
    }
    getActiveAlertByPage() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), filter(() => this.statusFC.value == AlertStatusEnum.ACTIVE), switchMap(() => {
            let requestBody = {};
            if (this.searchFlag) {
                requestBody['search'] = this.searchValue;
            }
            requestBody['pageNo'] = this.paginator.pageIndex;
            requestBody['pageSize'] = this.paginator.pageSize;
            requestBody['sortBy'] = this.sort.active;
            requestBody['orderBy'] = this.sort.direction;
            requestBody['startDate'] = this.startDateFC.value;
            requestBody['endDate'] = this.endDateFC.value;
            return this.alertController.getActiveAlertByPage(this.orgID, requestBody).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }
    getResolvedAlertByPage() {
        merge(this.paginator.page, this.sort.sortChange, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), filter(() => this.statusFC.value == AlertStatusEnum.RESOLVED), switchMap(() => {
            let requestBody = {};
            if (this.searchFlag) {
                requestBody['search'] = this.searchValue;
            }
            requestBody['pageNo'] = this.paginator.pageIndex;
            requestBody['pageSize'] = this.paginator.pageSize;
            requestBody['sortBy'] = this.sort.active;
            requestBody['orderBy'] = this.sort.direction;
            requestBody['startDate'] = this.startDateFC.value;
            requestBody['endDate'] = this.endDateFC.value;
            return this.alertController.getResolvedAlertByPage(this.orgID, requestBody).pipe(catchError(() => of(null)));
        }), map((response) => {
            if (response == null) {
                this.resultLength = 0;
                return [];
            }
            this.resultLength = response["totalCount"];
            return response["records"];
        })).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }
    statusChange() {
        let alertStatus;
        switch (this.statusFC.value) {
            case AlertStatusEnum.ACTIVE:
                alertStatus = AlertStatusEnum.ACTIVE;
                this.getActiveAlertByPage();
                break;
            case AlertStatusEnum.RESOLVED:
                alertStatus = AlertStatusEnum.RESOLVED;
                this.getResolvedAlertByPage();
                break;
            default:
                console.log("undefined case encountered!");
        }
        this.statusFC.patchValue(alertStatus);
    }
    searchFn(value) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        }
        else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }
    getTimeLabel(dateTime) {
        return dateTime ? moment.tz(dateTime, this.timeZone).fromNow() : COMMON_CONSTANT.HYPHEN;
    }
}
GeneratedAlarmPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageComponent, deps: [{ token: i1$3.DateService }, { token: i2.StorageService }, { token: i3$1.OrganizationService }, { token: AlertRuleController }], target: i0.ɵɵFactoryTarget.Component });
GeneratedAlarmPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GeneratedAlarmPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Generated Alarms</div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-2\">\n                <mat-form-field id=\"monthlyField\" appMonthYearFormat (click)=\"dateService.openDatepickerOnClick(monthly)\"\n                    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(monthly)\"\n                    (keydown.enter)=\"dateService.openDatepickerOnClick(monthly)\" class=\"mat-field-width-100 cursorPointer\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Select month</mat-label>\n                    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"selectedMonthFC\" [max]=\"today\" readonly />\n                    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n                    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n                        (monthSelected)=\"monthSelectedHandler($event, monthly)\" (closed)=\"dateService.takeFocusAway('monthlyField')\">\n                    </mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-10\">\n                <div class=\"float-end me-1 mt-2\">\n                    <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"statusFC\" (change)=\"statusChange()\">\n                        <mat-button-toggle value=\"{{ AlertStatusEnum.ACTIVE }}\">\n                            {{ AlertStatusLabelEnum.ACTIVE_LABEL }}\n                        </mat-button-toggle>\n                        <mat-button-toggle value=\"{{ AlertStatusEnum.RESOLVED }}\">\n                            {{ AlertStatusLabelEnum.RESOLVED_LABEL }}\n                        </mat-button-toggle>\n                    </mat-button-toggle-group>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-search-bar-one class=\"me-1 float-end\" #searchBar searchBy=\"parameter name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n            </div>\n        </div>\n\n        <div class=\"overflowX customScrollBar\">\n            <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n                matSortDirection=\"asc\" matSortDisableClear>\n\n                <ng-container matColumnDef=\"id\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                        ID\n                    </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        {{ row.id ? row.id: COMMON_CONSTANT.HYPHEN }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"alertName\">\n                    <th class=\"px-3 columnWidth4\" mat-header-cell *matHeaderCellDef> Name </th>\n                    <td class=\"px-3 columnWidth4\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['alertName']?.length>15? row['alertName']: ''\" matTooltipPosition=\"above\"\n                        matTooltipClass=\"nameTooltip\">\n                        {{ (row.alertName ? row.alertName: COMMON_CONSTANT.HYPHEN) | dotdotdot:15}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"parameterLabel\">\n                    <th class=\"px-3 columnWidth4\" mat-header-cell *matHeaderCellDef>\n                        Parameter name\n                    </th>\n                    <td class=\"px-3 columnWidth4\" mat-cell *matCellDef=\"let row\">\n                        {{ row.parameterLabel ? row.parameterLabel: COMMON_CONSTANT.HYPHEN }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"associatedWith\">\n                    <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                    <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['associatedWith']?.length>30? row['associatedWith']: ''\"\n                        matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                        {{ (row.associatedWith ? row.associatedWith: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"description\">\n                    <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                    <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['description']?.length>30? row['description']: ''\"\n                        matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                        {{ (row.description ? row.description: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"time\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef>\n                        Time\n                    </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        {{ getTimeLabel(row.time) }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"type\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Type </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        <span class=\"badge rounded-pill bg-light text-dark\" [ngSwitch]=\"row?.type\">\n                            <ng-container *ngSwitchCase=\"AlertTypeEnum.INSTANTANEOUS\">{{\n                                AlertPageLabelEnum.INSTANTANEOUS_LABEL\n                                }}</ng-container>\n                            <ng-container *ngSwitchCase=\"AlertTypeEnum.PERIODIC\">{{ AlertPageLabelEnum.PERIODIC_LABEL\n                                }}</ng-container>\n                        </span>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"status\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        <span class=\"badge rounded-pill\"\n                            [ngClass]=\"{'bg-success': row?.status, 'bg-danger': !row?.status}\">\n                            {{ row?.status ? StatusEnum.ACTIVE_STATUS : StatusEnum.INACTIVE_STATUS }}\n                        </span>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n                <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                        {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n            [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n        </mat-paginator>\n    </div>\n\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:250px}.columnWidth3{min-width:300px}.columnWidth4{min-width:150px}.matBtnFilter mat-button-toggle{width:80px}.badge{text-transform:none}\n"], components: [{ type: i10$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i6.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i7$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i7$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i9.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i9.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1$3.MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: i10$1.MatLabel, selector: "mat-label" }, { type: i21.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i2$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i10$1.MatSuffix, selector: "[matSuffix]" }, { type: i7$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i10.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9.MatCellDef, selector: "[matCellDef]" }, { type: i9.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i22.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i22.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i22.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7$1.EllipsisPipeService } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$3.DateService }, { type: i2.StorageService }, { type: i3$1.OrganizationService }, { type: AlertRuleController }]; }, propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }], paginator: [{
                type: ViewChild,
                args: ['paginator']
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn']
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar']
            }] } });

const routes = [
    {
        path: '',
        component: GeneratedAlarmPageComponent
    }
];
class GeneratedAlarmPageRoutingModule {
}
GeneratedAlarmPageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GeneratedAlarmPageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageRoutingModule, imports: [i1$1.RouterModule], exports: [RouterModule] });
GeneratedAlarmPageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class GeneratedAlarmPageModule {
}
GeneratedAlarmPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GeneratedAlarmPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageModule, declarations: [GeneratedAlarmPageComponent], imports: [CommonModule,
        GeneratedAlarmPageRoutingModule,
        ReactiveFormsModule,
        DateMonthYearFormatModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        SearchBarOneModule,
        EllipsisPipeModule] });
GeneratedAlarmPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageModule, imports: [[
            CommonModule,
            GeneratedAlarmPageRoutingModule,
            ReactiveFormsModule,
            DateMonthYearFormatModule,
            MatInputModule,
            MatNativeDateModule,
            MatButtonToggleModule,
            MatDatepickerModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatTooltipModule,
            SearchBarOneModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GeneratedAlarmPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GeneratedAlarmPageComponent
                    ],
                    imports: [
                        CommonModule,
                        GeneratedAlarmPageRoutingModule,
                        ReactiveFormsModule,
                        DateMonthYearFormatModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatButtonToggleModule,
                        MatDatepickerModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatSortModule,
                        MatTooltipModule,
                        SearchBarOneModule,
                        EllipsisPipeModule
                    ]
                }]
        }] });

/*
 * Public API Surface of alerts
*/

/**
 * Generated bundle index. Do not edit.
 */

export { AlarmPage, AlertActionEnum, AlertButtonLabelEnum, AlertPage, AlertPageLabelEnum, AlertRule, AlertRuleController, AlertStatusEnum, AlertStatusLabelEnum, AlertTypeEnum, AlertsComponent, AlertsModule, AlertsService, ConfiguredAlarmPageComponent, ConfiguredAlarmPageModule, CreateUpdateComponent, CreateUpdateEscalationComponent, CreateUpdateEscalationModule, CreateUpdateModule, EscalationController, EscalationLevelCount, EscalationLevelInfo, EscalationPermission, GeneratedAlarmPageComponent, GeneratedAlarmPageModule, ListComponent, ListModule, PageComponent, PageModule };
//# sourceMappingURL=library-alerts.js.map
