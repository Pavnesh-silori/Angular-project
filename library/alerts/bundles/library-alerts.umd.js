(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@fortawesome/free-solid-svg-icons'), require('@library/tsc-common'), require('@library/storage-service'), require('@library/toastr-service'), require('@angular/common/http'), require('@angular/material/dialog'), require('@fortawesome/angular-fontawesome'), require('@angular/material/table'), require('@angular/material/sort'), require('@angular/material/slide-toggle'), require('@angular/material/paginator'), require('@angular/material/core'), require('@angular/material/tooltip'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/keycodes'), require('lodash'), require('@library/tsc-lite'), require('@library/user-service'), require('@angular/material/card'), require('@angular/material/form-field'), require('@angular/material/expansion'), require('@angular/material/checkbox'), require('@angular/material/radio'), require('@angular/material/select'), require('ngx-mat-select-search'), require('ngx-perfect-scrollbar'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/flex-layout/flex'), require('@angular/flex-layout'), require('moment-timezone'), require('@library/date'), require('@library/organization-service'), require('@angular/material/datepicker'), require('@angular/material/button-toggle')) :
    typeof define === 'function' && define.amd ? define('@library/alerts', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms', 'rxjs', 'rxjs/operators', '@fortawesome/free-solid-svg-icons', '@library/tsc-common', '@library/storage-service', '@library/toastr-service', '@angular/common/http', '@angular/material/dialog', '@fortawesome/angular-fontawesome', '@angular/material/table', '@angular/material/sort', '@angular/material/slide-toggle', '@angular/material/paginator', '@angular/material/core', '@angular/material/tooltip', '@ng-bootstrap/ng-bootstrap', '@angular/material/icon', '@angular/material/button', '@angular/cdk/keycodes', 'lodash', '@library/tsc-lite', '@library/user-service', '@angular/material/card', '@angular/material/form-field', '@angular/material/expansion', '@angular/material/checkbox', '@angular/material/radio', '@angular/material/select', 'ngx-mat-select-search', 'ngx-perfect-scrollbar', '@angular/material/chips', '@angular/material/input', '@angular/flex-layout/flex', '@angular/flex-layout', 'moment-timezone', '@library/date', '@library/organization-service', '@angular/material/datepicker', '@angular/material/button-toggle'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.library = global.library || {}, global.library.alerts = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.forms, global.rxjs, global.rxjs.operators, global.freeSolidSvgIcons, global.i7, global.i2$1, global.i7$1, global.ng.common.http, global.ng.material.dialog, global.i8, global.ng.material.table, global.ng.material.sort, global.ng.material.slideToggle, global.ng.material.paginator, global.ng.material.core, global.ng.material.tooltip, global.i16, global.ng.material.icon, global.ng.material.button, global.ng.cdk.keycodes, global.lodash, global.i3, global.i4, global.ng.material.card, global.ng.material.formField, global.ng.material.expansion, global.ng.material.checkbox, global.ng.material.radio, global.ng.material.select, global.i16$1, global.i18, global.ng.material.chips, global.ng.material.input, global.ng.flexLayout.flex, global.ng.flexLayout, global.moment, global.i1$3, global.i3$1, global.ng.material.datepicker, global.ng.material.buttonToggle));
})(this, (function (exports, i0, i22, i1$1, i2, rxjs, operators, freeSolidSvgIcons, i7, i2$1, i7$1, i1, i1$2, i8, i9, i10, i11, i12, i15, i14, i16, i20, i9$1, keycodes, lodash, i3, i4, i9$2, i10$1, i11$1, i12$1, i13, i14$1, i16$1, i18, i19, i21, i8$1, flexLayout, moment, i1$3, i3$1, i6, i7$2) { 'use strict';

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
    var i22__namespace = /*#__PURE__*/_interopNamespace(i22);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2);
    var i7__namespace$1 = /*#__PURE__*/_interopNamespace(i7);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i15__namespace = /*#__PURE__*/_interopNamespace(i15);
    var i14__namespace = /*#__PURE__*/_interopNamespace(i14);
    var i16__namespace = /*#__PURE__*/_interopNamespace(i16);
    var i20__namespace = /*#__PURE__*/_interopNamespace(i20);
    var i9__namespace$2 = /*#__PURE__*/_interopNamespace(i9$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i9__namespace$1 = /*#__PURE__*/_interopNamespace(i9$2);
    var i10__namespace$1 = /*#__PURE__*/_interopNamespace(i10$1);
    var i11__namespace$1 = /*#__PURE__*/_interopNamespace(i11$1);
    var i12__namespace$1 = /*#__PURE__*/_interopNamespace(i12$1);
    var i13__namespace = /*#__PURE__*/_interopNamespace(i13);
    var i14__namespace$1 = /*#__PURE__*/_interopNamespace(i14$1);
    var i16__namespace$1 = /*#__PURE__*/_interopNamespace(i16$1);
    var i18__namespace = /*#__PURE__*/_interopNamespace(i18);
    var i19__namespace = /*#__PURE__*/_interopNamespace(i19);
    var i21__namespace = /*#__PURE__*/_interopNamespace(i21);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i7__namespace$2 = /*#__PURE__*/_interopNamespace(i7$2);

    var AlertsService = /** @class */ (function () {
        function AlertsService() {
        }
        return AlertsService;
    }());
    AlertsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AlertsComponent = /** @class */ (function () {
        function AlertsComponent() {
        }
        AlertsComponent.prototype.ngOnInit = function () {
        };
        return AlertsComponent;
    }());
    AlertsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertsComponent, selector: "lib-alerts", ngImport: i0__namespace, template: "\n    <p>\n      alerts works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-alerts',
                        template: "\n    <p>\n      alerts works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var AlertsModule = /** @class */ (function () {
        function AlertsModule() {
        }
        AlertsModule.forRoot = function (environment) {
            return {
                ngModule: AlertsModule,
                providers: [
                    { provide: 'environment', useValue: environment }
                ]
            };
        };
        return AlertsModule;
    }());
    AlertsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsModule, declarations: [AlertsComponent], exports: [AlertsComponent] });
    AlertsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertsModule, decorators: [{
                type: i0.NgModule,
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

    var AlertPage = /** @class */ (function () {
        function AlertPage() {
        }
        return AlertPage;
    }());
    var AlertRule = /** @class */ (function () {
        function AlertRule() {
        }
        return AlertRule;
    }());

    var AlarmPage = /** @class */ (function () {
        function AlarmPage() {
        }
        return AlarmPage;
    }());

    var EscalationPermission = /** @class */ (function () {
        function EscalationPermission() {
        }
        return EscalationPermission;
    }());
    var EscalationLevelCount = /** @class */ (function () {
        function EscalationLevelCount() {
        }
        return EscalationLevelCount;
    }());
    var EscalationLevelInfo = /** @class */ (function () {
        function EscalationLevelInfo() {
        }
        return EscalationLevelInfo;
    }());

    exports.AlertPageLabelEnum = void 0;
    (function (AlertPageLabelEnum) {
        AlertPageLabelEnum["INSTANTANEOUS_LABEL"] = "Instantaneous";
        AlertPageLabelEnum["PERIODIC_LABEL"] = "Periodic";
    })(exports.AlertPageLabelEnum || (exports.AlertPageLabelEnum = {}));
    exports.AlertTypeEnum = void 0;
    (function (AlertTypeEnum) {
        AlertTypeEnum["INSTANTANEOUS"] = "INSTANTANEOUS";
        AlertTypeEnum["PERIODIC"] = "PERIODIC";
        AlertTypeEnum["ALL"] = "ALL";
    })(exports.AlertTypeEnum || (exports.AlertTypeEnum = {}));
    exports.AlertButtonLabelEnum = void 0;
    (function (AlertButtonLabelEnum) {
        AlertButtonLabelEnum["ESCALATION_RULE"] = "Escalation rule";
    })(exports.AlertButtonLabelEnum || (exports.AlertButtonLabelEnum = {}));
    exports.AlertActionEnum = void 0;
    (function (AlertActionEnum) {
        AlertActionEnum["CREATE"] = "Create";
        AlertActionEnum["UPDATE"] = "Update";
    })(exports.AlertActionEnum || (exports.AlertActionEnum = {}));
    exports.AlertStatusEnum = void 0;
    (function (AlertStatusEnum) {
        AlertStatusEnum["ACTIVE"] = "ACTIVE";
        AlertStatusEnum["RESOLVED"] = "RESOLVED";
    })(exports.AlertStatusEnum || (exports.AlertStatusEnum = {}));
    exports.AlertStatusLabelEnum = void 0;
    (function (AlertStatusLabelEnum) {
        AlertStatusLabelEnum["ACTIVE_LABEL"] = "Active";
        AlertStatusLabelEnum["RESOLVED_LABEL"] = "Resolved";
    })(exports.AlertStatusLabelEnum || (exports.AlertStatusLabelEnum = {}));

    // /tsc-library/
    var AlertRuleController = /** @class */ (function () {
        function AlertRuleController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        AlertRuleController.prototype.getAlertRuleByPage = function (pageNo, pageSize, sortBy, orderBy, search, alertType, orgID) {
            var params = new i1.HttpParams();
            params = params.append('pageNo', pageNo);
            params = params.append('pageSize', pageSize);
            params = params.append('sortBy', sortBy);
            params = params.append('orderBy', orderBy);
            params = params.append('alertType', alertType);
            search.forEach(function (search) { return params = params.append('search', search); });
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules/page", { params: params });
        };
        AlertRuleController.prototype.getActiveAlertByPage = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/active/page", requestBody);
        };
        AlertRuleController.prototype.getResolvedAlertByPage = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/resolved/page", requestBody);
        };
        AlertRuleController.prototype.updateAlertRuleStatus = function (orgID, alertRuleID, requestBody) {
            return this.http.patch(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules/" + alertRuleID + "/status", requestBody);
        };
        AlertRuleController.prototype.createAlertRule = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules", requestBody);
        };
        AlertRuleController.prototype.getAlertRuleByID = function (orgID, alertRuleID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules/" + alertRuleID);
        };
        AlertRuleController.prototype.updateAlertRule = function (orgID, alertRuleID, requestBody) {
            return this.http.patch(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules/" + alertRuleID, requestBody);
        };
        AlertRuleController.prototype.deleteAlertRule = function (orgID, alertRuleID) {
            return this.http.delete(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alert-rules/" + alertRuleID);
        };
        return AlertRuleController;
    }());
    AlertRuleController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertRuleController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertRuleController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertRuleController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertRuleController, decorators: [{
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

    var EscalationController = /** @class */ (function () {
        function EscalationController(http, environment) {
            this.http = http;
            this.environment = environment;
        }
        EscalationController.prototype.getEscalationPermission = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/escalation/permission");
        };
        EscalationController.prototype.getEscalationLevelCount = function (orgID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/escalation/level/count");
        };
        EscalationController.prototype.createEsclationByLevelID = function (orgID, requestBody) {
            return this.http.post(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/escalation", requestBody);
        };
        EscalationController.prototype.getAllLevelEscalation = function (orgID, alertRuleID) {
            return this.http.get(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/" + alertRuleID + "/escalation");
        };
        EscalationController.prototype.updateEsclationByLevelID = function (orgID, escalationRuleID, requestBody) {
            return this.http.patch(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/escalation/" + escalationRuleID, requestBody);
        };
        EscalationController.prototype.deleteEsclationByLevelID = function (orgID, escalationRuleID) {
            return this.http.delete(this.environment.TSC_COMMON_API_URL + "organizations/" + orgID + "/alerts/escalation/" + escalationRuleID);
        };
        return EscalationController;
    }());
    EscalationController.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EscalationController, deps: [{ token: i1__namespace.HttpClient }, { token: 'environment' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EscalationController.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EscalationController, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: EscalationController, decorators: [{
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

    // /tsc-library/
    var PageComponent = /** @class */ (function () {
        function PageComponent(router, activatedRoute, storageService, toastrService, alertController, escalationController, dialog) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.toastrService = toastrService;
            this.alertController = alertController;
            this.escalationController = escalationController;
            this.dialog = dialog;
            this.faPlus = freeSolidSvgIcons.faPlus;
            this.faEllipsisV = freeSolidSvgIcons.faEllipsisV;
            this.TABLE_CONSTANT = i7.TABLE_CONSTANT;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.MATERIAL_CONSTANT = i7.MATERIAL_CONSTANT;
            this.AlertTypeEnum = exports.AlertTypeEnum;
            this.AlertPageLabelEnum = exports.AlertPageLabelEnum;
            this.AlertButtonLabelEnum = exports.AlertButtonLabelEnum;
            this.ButtonLabelEnum = i7.ButtonLabelEnum;
            this.DialogEnum = i7.DialogEnum;
            this.MaterialFormFieldAppearance = i7.MaterialFormFieldAppearance;
            this.displayedColumn = ['id', 'name', 'associatedWith', 'ruleDescription', 'status', 'action'];
            this.resultLength = 0;
            this.dataSource = [];
            this.searchFlag = false;
            this.searchArr = [];
            this.escalationPermissionM = new EscalationPermission();
            this.alertStatusFC = new i2.FormControl();
        }
        PageComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.activatedRoute.data.subscribe(function (data) {
                _this.alertLabel = data['alertType'];
            });
            var currentUrl = this.router.url;
            var segments = currentUrl.split('/');
            segments.pop();
            this.baseUrl = segments.join('/');
            this.getEscalationPermission();
        };
        PageComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            rxjs.merge(this.paginator.page, this.sort.sortChange, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(operators.startWith({}), operators.switchMap(function () {
                _this.searchArr = [];
                if (_this.searchFlag) {
                    _this.searchArr.push('name:' + _this.searchValue);
                }
                var alertType = _this.alertLabel == exports.AlertPageLabelEnum.INSTANTANEOUS_LABEL ? exports.AlertTypeEnum.INSTANTANEOUS : exports.AlertTypeEnum.PERIODIC;
                return _this.alertController.getAlertRuleByPage(_this.paginator.pageIndex, _this.paginator.pageSize, _this.sort.active, _this.sort.direction, _this.searchArr, alertType, _this.orgID).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (response) {
                if (response == null) {
                    _this.resultLength = 0;
                    return [];
                }
                _this.resultLength = response["totalCount"];
                return response["records"];
            })).subscribe(function (dataSource) {
                _this.dataSource = dataSource;
                _this.dataSource.forEach(function (alert) {
                    _this.alertStatusFC[alert.id] = new i2.FormControl(alert.status);
                });
            });
        };
        PageComponent.prototype.getEscalationPermission = function () {
            var _this = this;
            this.escalationController.getEscalationPermission(this.orgID).subscribe(function (escalationPermissionRes) {
                _this.escalationPermissionM = escalationPermissionRes;
            }, function (error) {
                console.log('error in getEscalationPermission() -', error);
            });
        };
        PageComponent.prototype.getAlertStatusFC = function (alertID) {
            return this.alertStatusFC[alertID];
        };
        PageComponent.prototype.alertStatusChange = function (alertID) {
            var _this = this;
            var requestBody = {};
            requestBody['status'] = this.alertStatusFC[alertID].value;
            this.alertController.updateAlertRuleStatus(this.orgID, alertID, requestBody)
                .subscribe(function (alertStatusRes) {
                var toast = _this.toastrService.getToastStatus(alertStatusRes['status']);
                _this.toastrService.openToast(toast.title, alertStatusRes.message, toast.color);
            }, function (error) {
                console.log('error in alertStatusChange - ', error);
            });
        };
        PageComponent.prototype.searchFn = function (value) {
            this.searchFlag = true;
            this.searchValue = value;
            if (value.length == 0) {
                this.resetSearch();
            }
            else {
                this.paginator.pageIndex = 0;
            }
            this.refreshBtn.nativeElement.click();
        };
        PageComponent.prototype.resetSearch = function () {
            this.searchFlag = false;
            this.searchBar.searchClear();
        };
        PageComponent.prototype.openDeleteAlertDialog = function (alertID, alertName) {
            var _this = this;
            var dialog = this.dialog.open(i7.DialogOneComponent, {
                minWidth: '450px',
                maxWidth: '450px',
                data: {
                    type: i7.DialogOneEnum.DELETE,
                    icon: 'dangerous',
                    header: 'Delete alert rule?',
                    body: '<b>' + alertName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                    buttonOne: i7.ButtonLabelEnum.CANCEL_BTN_LABEL,
                    buttonTwo: i7.ButtonLabelEnum.DELETE_BTN_LABEL
                }
            });
            dialog.afterClosed().subscribe(function (res) {
                if (res) {
                    _this.deleteAlertRule(alertID);
                }
            });
        };
        PageComponent.prototype.deleteAlertRule = function (alertID) {
            var _this = this;
            this.alertController.deleteAlertRule(this.orgID, alertID).subscribe(function (deleteRes) {
                _this.refreshBtn.nativeElement.click();
                var toast = _this.toastrService.getToastStatus(deleteRes.status);
                _this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
            });
        };
        return PageComponent;
    }());
    PageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, deps: [{ token: i1__namespace$1.Router }, { token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: i7__namespace.ToastrService }, { token: AlertRuleController }, { token: EscalationController }, { token: i1__namespace$2.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ alertLabel }} Alert</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n                <a class=\"btn btn-sm btn-success btnBase\" matRipple\n                    [matRippleCentered]=\"MATERIAL_CONSTANT.MAT_RIPPLE_CENTER\" [routerLink]=\"[baseUrl, 'create']\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp; {{ alertLabel }} Alert\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"overflowX customScrollBar\">\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n            matSortDirection=\"asc\" matSortDisableClear>\n\n            <ng-container matColumnDef=\"id\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                    ID\n                </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    {{ row['id'] ? row['id']: COMMON_CONSTANT.HYPHEN }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <th class=\"px-3 columnWidth2\" mat-header-cell *matHeaderCellDef> Name </th>\n                <td class=\"px-3 columnWidth2\" mat-cell *matCellDef=\"let row\" [matTooltip]=\"row?.['name']?.length>20? row['name']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['name'] ? row['name']: COMMON_CONSTANT.HYPHEN) | dotdotdot:20}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"associatedWith\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['associatedWith']?.length>25? row['associatedWith']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['associatedWith'] ? row['associatedWith']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ruleDescription\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['ruleDescription']?.length>25? row['ruleDescription']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['ruleDescription'] ? row['ruleDescription']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <mat-slide-toggle class=\"slideToggleBtn\" [formControl]=\"getAlertStatusFC(row.id)\"\n                        (change)=\"alertStatusChange(row.id)\"></mat-slide-toggle>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n                <th class=\"columnWidth1\" mat-header-cell *matHeaderCellDef></th>\n                <td class=\"columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"btn-group\" ngbDropdown placement=\"left\">\n                            <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                                <fa-icon [icon]=\"faEllipsisV\"></fa-icon>\n                            </button>\n                            <div ngbDropdownMenu>\n                                <button class=\"dropdown-item\" [routerLink]=\"[baseUrl, row['id'], 'update']\">\n                                    {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                                </button>\n                                <button class=\"dropdown-item\" [routerLink]=\"[baseUrl + '/' + row['id'] + '/escalation']\" *ngIf=\"escalationPermissionM\">\n                                    {{ AlertButtonLabelEnum.ESCALATION_RULE }}\n                                </button>\n                                <button class=\"btn btn-outline-danger rounded-0 dropdown-item\" (click)=\"openDeleteAlertDialog(row.id, row.name)\">\n                                    {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n            <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:200px}.columnWidth3{min-width:230px}.slideToggleBtn .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#3ac47d}.slideToggleBtn .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff}\n"], components: [{ type: i7__namespace$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i8__namespace.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i9__namespace.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10__namespace.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i11__namespace.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i9__namespace.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9__namespace.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12__namespace.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1__namespace$1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i15__namespace.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }, { type: i10__namespace.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9__namespace.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9__namespace.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9__namespace.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9__namespace.MatCellDef, selector: "[matCellDef]" }, { type: i9__namespace.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i16__namespace.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i16__namespace.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i16__namespace.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i1__namespace$1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i22__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i9__namespace.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9__namespace.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9__namespace.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7__namespace$1.EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.Router }, { type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: i7__namespace.ToastrService }, { type: AlertRuleController }, { type: EscalationController }, { type: i1__namespace$2.MatDialog }]; }, propDecorators: { sort: [{
                    type: i0.ViewChild,
                    args: ['sort']
                }], paginator: [{
                    type: i0.ViewChild,
                    args: ['paginator']
                }], refreshBtn: [{
                    type: i0.ViewChild,
                    args: ['refreshBtn']
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }] } });

    var routes$4 = [
        {
            path: '',
            component: PageComponent
        }
    ];
    var PageRoutingModule = /** @class */ (function () {
        function PageRoutingModule() {
        }
        return PageRoutingModule;
    }());
    PageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    PageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, imports: [[i1$1.RouterModule.forChild(routes$4)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes$4)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    var PageModule = /** @class */ (function () {
        function PageModule() {
        }
        return PageModule;
    }());
    PageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, declarations: [PageComponent], imports: [i22.CommonModule,
            PageRoutingModule,
            i7.SearchBarOneModule,
            i7.EllipsisPipeModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            i16.NgbModule,
            i8.FontAwesomeModule,
            i20.MatIconModule,
            i9$1.MatButtonModule,
            i15.MatRippleModule,
            i9.MatTableModule,
            i12.MatPaginatorModule,
            i10.MatSortModule,
            i1$2.MatDialogModule,
            i14.MatTooltipModule,
            i11.MatSlideToggleModule] });
    PageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, imports: [[
                i22.CommonModule,
                PageRoutingModule,
                i7.SearchBarOneModule,
                i7.EllipsisPipeModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i16.NgbModule,
                i8.FontAwesomeModule,
                i20.MatIconModule,
                i9$1.MatButtonModule,
                i15.MatRippleModule,
                i9.MatTableModule,
                i12.MatPaginatorModule,
                i10.MatSortModule,
                i1$2.MatDialogModule,
                i14.MatTooltipModule,
                i11.MatSlideToggleModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PageComponent,
                        ],
                        imports: [
                            i22.CommonModule,
                            PageRoutingModule,
                            i7.SearchBarOneModule,
                            i7.EllipsisPipeModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            i16.NgbModule,
                            i8.FontAwesomeModule,
                            i20.MatIconModule,
                            i9$1.MatButtonModule,
                            i15.MatRippleModule,
                            i9.MatTableModule,
                            i12.MatPaginatorModule,
                            i10.MatSortModule,
                            i1$2.MatDialogModule,
                            i14.MatTooltipModule,
                            i11.MatSlideToggleModule
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

    // /tsc-library/
    var CreateUpdateComponent = /** @class */ (function () {
        function CreateUpdateComponent(activatedRoute, storageService, entityService, entityDeviceService, unitService, shiftService, userService, tscCommonService, alertRuleFB, toastrService, alertController) {
            var _this = this;
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.entityService = entityService;
            this.entityDeviceService = entityDeviceService;
            this.unitService = unitService;
            this.shiftService = shiftService;
            this.userService = userService;
            this.tscCommonService = tscCommonService;
            this.alertRuleFB = alertRuleFB;
            this.toastrService = toastrService;
            this.alertController = alertController;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.MATERIAL_CONSTANT = i7.MATERIAL_CONSTANT;
            this.LIST_CONSTANT = i3.LIST_CONSTANT;
            this.AlertTypeEnum = exports.AlertTypeEnum;
            this.AlertPageLabelEnum = exports.AlertPageLabelEnum;
            this.AlertButtonLabelEnum = exports.AlertButtonLabelEnum;
            this.FormAction = i7.FormAction;
            this.PageTitleEnum = i7.PageTitleEnum;
            this.ButtonLabelEnum = i7.ButtonLabelEnum;
            this.InvalidForm = i7.InvalidForm;
            this.ToastrColor = i7$1.ToastrColor;
            this.UserContext = i4.UserContext;
            this.ProfileImg = i4.ProfileImg;
            this.MaterialFormFieldAppearance = i7.MaterialFormFieldAppearance;
            this.isEntityPanelExpanded = false;
            this.isFormSubmit = false;
            this.otherUser = false;
            this.isEqual = true;
            this.selectable = true;
            this.removable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.userContext = i4.UserContext.ROOT_ORG_USER;
            this.inputPlaceholder = "email1@domain.com, email2@domain.com";
            this.entityM = [new i3.EntityTree()];
            this.devicesWithEntitiesM = [new i3.DevicesWithEntities()];
            this.unitM = [new i3.Unit()];
            this.userM = [new i4.User()];
            this.rootOrgUserM = [new i4.User()];
            this.currentOrgUserM = [new i4.User()];
            this.shiftM = [new i3.Shift()];
            this.alertRuleM = new AlertRule();
            this.selectedEntities = [];
            this.manualSelectedEntities = [];
            this.allDeviceID = [];
            this.allShiftID = [];
            this.selectedUserIds = [];
            this.totalDeviceCount = 0;
            this.totalShiftCount = 0;
            this.userFC = new i2.FormControl(true, i2.Validators.required);
            this.selectedUserFC = new i2.FormControl([], [i2.Validators.required]);
            this.unitSearchUtil = new i7.MatSelectSearchService(['name']);
            this.userSearchUtil = new i7.MatSelectSearchService(['firstName', 'lastName', 'email']);
            this.errorHandling = function (control, error) {
                return _this.alertRuleFG.controls[control].hasError(error);
            };
        }
        CreateUpdateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.activatedRoute.data.subscribe(function (data) {
                _this.alertLabel = data['alertType'];
                _this.action = data['alertAction'];
            });
            this.getUsersByOrgID();
            this.getCurrentOrgUserAccess();
            this.getShift();
            this.alertInit();
            this.activatedRoute.params.subscribe(function (pathParam) {
                if (pathParam.alertID != null) {
                    _this.alertRuleID = pathParam.alertID;
                    _this.getAlertRuleByID();
                }
            });
        };
        CreateUpdateComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            rxjs.merge(this.parameterFilterChild.emitFilter).subscribe(function () { return _this.valueChange(); });
        };
        CreateUpdateComponent.prototype.valueChange = function () {
            if (this.parameterFilterChild.selectedParameterFC.value) {
                var selectedParameter = this.parameterFilterChild.selectedParameterFC.value;
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
        };
        CreateUpdateComponent.prototype.alertInit = function () {
            this.alertRuleFG = this.alertRuleFB.group({
                alertType: [this.alertLabel == exports.AlertPageLabelEnum.INSTANTANEOUS_LABEL ? exports.AlertTypeEnum.INSTANTANEOUS : exports.AlertTypeEnum.PERIODIC],
                name: [, i2.Validators.required],
                parameterID: [, i2.Validators.required],
                entityID: [[], i2.Validators.required],
                isSubEntitiesSelected: [false],
                isAlertAtDeviceLevel: [],
                deviceID: [[]],
                unitID: [, i2.Validators.required],
                condition: [, i2.Validators.required],
                frequency: [, i2.Validators.required],
                value: [],
                startValue: [],
                endValue: [],
                userChoice: [i4.UserContext.ROOT_ORG_USER],
                userID: [[], i2.Validators.required],
                isAnyOtherUser: [false],
                otherUserEmail: [[]],
                smsFrequency: [, i2.Validators.required],
                emailFrequency: [, i2.Validators.required],
                shiftID: [[], i2.Validators.required]
            });
            if (this.alertLabel == exports.AlertPageLabelEnum.INSTANTANEOUS_LABEL) {
                this.setValidatorsForAlertLevelPref();
                this.setValidatorsForDevice();
            }
        };
        CreateUpdateComponent.prototype.getAlertRuleByID = function () {
            var _this = this;
            this.alertController.getAlertRuleByID(this.orgID, this.alertRuleID).subscribe(function (alertRuleRes) {
                _this.alertRuleM = alertRuleRes;
                _this.initialObject = _this.alertRuleM;
                _this.getEntityHierarchyByParameterID(_this.alertRuleM.parameterID);
                _this.getUnitByParameterID(_this.alertRuleM.parameterID);
                _this.setValidatorsForOtherUser();
                _this.patchAlertFG();
            }, function (error) {
                console.log('error in getAlertRuleByID() -', error);
            });
        };
        CreateUpdateComponent.prototype.patchAlertFG = function () {
            var _this = this;
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
            this.alertRuleFG.get('deviceID').patchValue((this.alertRuleM.deviceID.length == this.totalDeviceCount) ? __spreadArray([-1], __read(this.alertRuleM.deviceID)) : __spreadArray([], __read(this.alertRuleM.deviceID)));
            this.alertRuleFG.get('shiftID').patchValue((this.alertRuleM.shiftID.length == this.totalShiftCount) ? __spreadArray([-1], __read(this.alertRuleM.shiftID)) : __spreadArray([], __read(this.alertRuleM.shiftID)));
            this.parameterFilterChild.selectedParameterFC.patchValue(this.alertRuleM.parameterID);
            this.userFC.patchValue(this.alertRuleM.userChoice == i4.UserContext.CURRENT_ORG_USER ? false : true);
            this.patchUserFields();
            this.alertRuleFG.valueChanges.subscribe(function () {
                _this.isEqual = lodash.isEqual(_this.initialObject, _this.alertRuleFG.value);
            });
        };
        CreateUpdateComponent.prototype.patchUserFields = function () {
            var _this = this;
            this.selectedUserIds = this.alertRuleM.userID;
            this.selectedUserFC.setValue(this.selectedUserIds);
            this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
            if (this.userContext == i4.UserContext.ROOT_ORG_USER) {
                this.userM = this.rootOrgUserM.filter(function (user) { return !_this.selectedUserIds.includes(user.id); });
            }
            else {
                this.userM = this.currentOrgUserM.filter(function (user) { return !_this.selectedUserIds.includes(user.id); });
            }
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
        };
        /* entities code */
        CreateUpdateComponent.prototype.getEntityHierarchyByParameterID = function (parameterID) {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.entityService.getEntityHierarchyByParameterID(this.orgID, parameterID)];
                        case 1:
                            _d.entityM = (_e.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.entityPanelOpened = function () {
            this.isEntityPanelExpanded = true;
        };
        CreateUpdateComponent.prototype.entityPanelClosed = function () {
            this.isEntityPanelExpanded = false;
        };
        CreateUpdateComponent.prototype.entityChange = function (entityID, event) {
            this.allDeviceID = [];
            this.alertRuleFG.get('deviceID').reset([]);
            var manualSelectedEntities = __spreadArray([], __read(this.manualSelectedEntities));
            var selctedEntity = this.alertRuleFG.get('entityID').value || [];
            if (event.checked) {
                selctedEntity.push(entityID);
                manualSelectedEntities.push(entityID);
                if (this.alertRuleFG.get('isSubEntitiesSelected').value == true) {
                    this.checkChildren(entityID, selctedEntity);
                }
            }
            else {
                selctedEntity = selctedEntity.filter(function (id) { return id != entityID; });
                manualSelectedEntities = manualSelectedEntities.filter(function (id) { return id != entityID; });
            }
            this.manualSelectedEntities = manualSelectedEntities;
            this.alertRuleFG.get('entityID').setValue(selctedEntity);
        };
        CreateUpdateComponent.prototype.checkChildren = function (entityID, selectedEntities) {
            var entity = this.findEntityById(this.entityM, entityID);
            if (entity && entity.children && entity.children.length > 0) {
                var childIds = this.getAllEntityID(entity.children);
                childIds.forEach(function (id) {
                    if (!selectedEntities.includes(id)) {
                        selectedEntities.push(id);
                    }
                });
                this.alertRuleFG.get('entityID').setValue(__spreadArray(__spreadArray([], __read(selectedEntities)), __read(childIds)));
            }
        };
        CreateUpdateComponent.prototype.getAllEntityID = function (entities) {
            var e_1, _d;
            var allIds = [];
            try {
                for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                    var entity = entities_1_1.value;
                    allIds.push(entity.id);
                    if (entity.children && entity.children.length > 0) {
                        allIds = allIds.concat(this.getAllEntityID(entity.children));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entities_1_1 && !entities_1_1.done && (_d = entities_1.return)) _d.call(entities_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return allIds;
        };
        CreateUpdateComponent.prototype.isSelected = function (entityId) {
            var selectedEntities = this.alertRuleFG.get('entityID').value || [];
            return selectedEntities.includes(entityId);
        };
        CreateUpdateComponent.prototype.selectAllSubEntities = function (event) {
            this.alertRuleFG.get('deviceID').reset([]);
            var isSubEntitiesSelected = this.alertRuleFG.get('isSubEntitiesSelected');
            var selectedEntities = this.alertRuleFG.get('entityID').value || [];
            isSubEntitiesSelected.setValue(event.checked);
            if (isSubEntitiesSelected.value) {
                this.checkAllSubEntities(selectedEntities);
            }
            else {
                this.uncheckAllSubEntities(selectedEntities);
            }
        };
        CreateUpdateComponent.prototype.checkAllSubEntities = function (selectedEntities) {
            var e_2, _d;
            var entitiesToAdd = new Set(selectedEntities);
            try {
                for (var selectedEntities_1 = __values(selectedEntities), selectedEntities_1_1 = selectedEntities_1.next(); !selectedEntities_1_1.done; selectedEntities_1_1 = selectedEntities_1.next()) {
                    var entityId = selectedEntities_1_1.value;
                    var entity = this.findEntityById(this.entityM, entityId);
                    if (entity && entity.children && entity.children.length > 0) {
                        var childIds = this.getAllEntityID(entity.children);
                        childIds.forEach(function (id) { return entitiesToAdd.add(id); });
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (selectedEntities_1_1 && !selectedEntities_1_1.done && (_d = selectedEntities_1.return)) _d.call(selectedEntities_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.alertRuleFG.get('entityID').setValue(__spreadArray([], __read(entitiesToAdd)));
        };
        CreateUpdateComponent.prototype.uncheckAllSubEntities = function (selectedEntities) {
            var _this = this;
            var updatedSelectedEntities;
            if (this.action == i7.FormAction.UPDATE) {
                updatedSelectedEntities = selectedEntities.filter(function (entityId) {
                    var entity = _this.findEntityById(_this.entityM, entityId);
                    if (entity && entity.children) {
                        selectedEntities = selectedEntities.filter(function (id) { return !entity.children.some(function (child) { return child.id == id; }); });
                    }
                    _this.alertRuleFG.get('entityID').setValue(selectedEntities);
                });
            }
            else {
                updatedSelectedEntities = selectedEntities.filter(function (id) { return _this.manualSelectedEntities.includes(id); });
                this.alertRuleFG.get('entityID').setValue(updatedSelectedEntities);
            }
        };
        CreateUpdateComponent.prototype.findEntityById = function (entities, entityId) {
            var e_3, _d;
            try {
                for (var entities_2 = __values(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                    var entity = entities_2_1.value;
                    if (entity.id == entityId) {
                        return entity;
                    }
                    else if (entity.children && entity.children.length > 0) {
                        var foundEntity = this.findEntityById(entity.children, entityId);
                        if (foundEntity) {
                            return foundEntity;
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (entities_2_1 && !entities_2_1.done && (_d = entities_2.return)) _d.call(entities_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return null;
        };
        /* entities code */
        CreateUpdateComponent.prototype.setValidatorsForAlertLevelPref = function () {
            var _this = this;
            this.alertRuleFG.get('entityID').valueChanges.subscribe(function (value) {
                var isAlertAtDeviceLevelControl = _this.alertRuleFG.get('isAlertAtDeviceLevel');
                if (value && value.length > 0) {
                    isAlertAtDeviceLevelControl.setValidators([i2.Validators.required]);
                }
                else {
                    isAlertAtDeviceLevelControl.clearValidators();
                }
                isAlertAtDeviceLevelControl.updateValueAndValidity();
            });
        };
        /* devices code */
        CreateUpdateComponent.prototype.setValidatorsForDevice = function () {
            var _this = this;
            this.alertRuleFG.get('isAlertAtDeviceLevel').valueChanges.subscribe(function (value) {
                var deviceIDControl = _this.alertRuleFG.get('deviceID');
                var parameterID = _this.alertRuleFG.get('parameterID').value;
                var entityID = _this.alertRuleFG.get('entityID').value;
                if (value && _this.alertLabel == exports.AlertPageLabelEnum.INSTANTANEOUS_LABEL) {
                    if (parameterID && (entityID === null || entityID === void 0 ? void 0 : entityID.length) > 0) {
                        _this.getDevicesWithEntities(entityID, parameterID);
                    }
                    _this.alertRuleFG.get('deviceID').reset([]);
                    deviceIDControl.setValidators([i2.Validators.required]);
                }
                else {
                    _this.alertRuleFG.get('deviceID').reset([]);
                    deviceIDControl.clearValidators();
                }
                deviceIDControl.updateValueAndValidity();
            });
        };
        CreateUpdateComponent.prototype.getDevicesWithEntities = function (entityID, parameterID) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, _d;
                var _this = this;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            requestBody = {};
                            requestBody['entityID'] = entityID;
                            requestBody['parameterID'] = parameterID;
                            _d = this;
                            return [4 /*yield*/, this.entityDeviceService.getDevicesWithEntities(this.orgID, requestBody)];
                        case 1:
                            _d.devicesWithEntitiesM = (_e.sent());
                            (_a = this.devicesWithEntitiesM) === null || _a === void 0 ? void 0 : _a.forEach(function (entity) {
                                var _a, _b, _c;
                                _this.totalDeviceCount += (_a = entity === null || entity === void 0 ? void 0 : entity.devices) === null || _a === void 0 ? void 0 : _a.length;
                                var deviceIDs = (_b = entity === null || entity === void 0 ? void 0 : entity.devices) === null || _b === void 0 ? void 0 : _b.map(function (device) { return device === null || device === void 0 ? void 0 : device.id; });
                                (_c = _this.allDeviceID) === null || _c === void 0 ? void 0 : _c.push.apply(_c, __spreadArray([], __read(deviceIDs)));
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.selectAllDevices = function () {
            if (!this.alertRuleFG.get('deviceID').value.includes(-1)) {
                this.alertRuleFG.get('deviceID').reset([]);
                return;
            }
            this.alertRuleFG.get('deviceID').setValue(__spreadArray([-1], __read(this.allDeviceID)));
        };
        CreateUpdateComponent.prototype.selectDevices = function () {
            var selected = this.alertRuleFG.get('deviceID').value;
            if (selected.includes(-1)) {
                selected.shift();
                this.alertRuleFG.get('deviceID').patchValue(selected);
            }
            else if (this.alertRuleFG.get('deviceID').value.length == this.totalDeviceCount) {
                this.allDeviceID.splice(0, 0, -1);
                this.alertRuleFG.get('deviceID').patchValue(this.allDeviceID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.alertRuleFG.get('deviceID').patchValue(filteredSelected);
            }
        };
        /* devices code */
        CreateUpdateComponent.prototype.getUnitByParameterID = function (parameterID) {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.unitService.getUnitByParameterID(this.orgID, parameterID)];
                        case 1:
                            _d.unitM = (_e.sent());
                            this.unitSearchUtil.entityArr = this.unitM;
                            this.unitSearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.unitChange = function (selectedUnit) {
            this.alertRuleFG.get('unitID').patchValue(selectedUnit);
        };
        CreateUpdateComponent.prototype.conditionChange = function (condition) {
            if (condition == 'BETWEEN') {
                this.alertRuleFG.get('value').clearValidators();
                this.alertRuleFG.get('startValue').setValidators([i2.Validators.required, this.validateStartEndValues.bind(this)]);
                this.alertRuleFG.get('endValue').setValidators([i2.Validators.required, this.validateStartEndValues.bind(this)]);
            }
            else {
                this.alertRuleFG.get('startValue').clearValidators();
                this.alertRuleFG.get('endValue').clearValidators();
                this.alertRuleFG.get('value').setValidators([i2.Validators.required]);
            }
            this.alertRuleFG.get('value').updateValueAndValidity();
            this.alertRuleFG.get('startValue').updateValueAndValidity();
            this.alertRuleFG.get('endValue').updateValueAndValidity();
        };
        CreateUpdateComponent.prototype.showValueField = function () {
            return this.alertRuleFG.controls['condition'].value != 'BETWEEN';
        };
        CreateUpdateComponent.prototype.showStartEndFields = function () {
            return this.alertRuleFG.controls['condition'].value == 'BETWEEN';
        };
        CreateUpdateComponent.prototype.validateStartEndValues = function () {
            var startValue = this.alertRuleFG.get('startValue').value;
            var endValue = this.alertRuleFG.get('endValue').value;
            if (startValue != null && endValue != null && startValue >= endValue) {
                return { 'invalidRange': true };
            }
            return null;
        };
        CreateUpdateComponent.prototype.getFrequency = function () {
            return this.alertLabel == exports.AlertPageLabelEnum.INSTANTANEOUS_LABEL
                ? this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(function (option) { return option.value == 'INSTANT'; })
                : this.LIST_CONSTANT.ALERT_RULE_FREQUENCY.filter(function (option) { return option.value != 'INSTANT'; });
        };
        /* users code */
        CreateUpdateComponent.prototype.getUsersByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.userService.getUsersByOrgID(this.orgID)];
                        case 1:
                            _d.rootOrgUserM = (_e.sent());
                            this.userM = this.rootOrgUserM;
                            this.userSearchUtil.entityArr = this.userM;
                            this.userSearchUtil.createSubscription();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.getCurrentOrgUserAccess = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.userService.getCurrentOrgUserAccess(this.orgID)];
                        case 1:
                            _d.currentOrgUserM = (_e.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.userContextChange = function () {
            this.selectedUserIds = [];
            if (this.userFC.value) {
                this.userContext = i4.UserContext.ROOT_ORG_USER;
                this.userM = this.rootOrgUserM;
                this.alertRuleFG.get('userChoice').setValue(this.userContext);
            }
            else {
                this.userContext = i4.UserContext.CURRENT_ORG_USER;
                this.userM = this.currentOrgUserM;
                this.alertRuleFG.get('userChoice').setValue(this.userContext);
            }
            this.selectedUserFC.setValue(this.selectedUserIds);
            this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
        };
        CreateUpdateComponent.prototype.onUserSelectionChange = function (userId) {
            var index = this.selectedUserIds.indexOf(userId);
            if (index == -1) {
                this.selectedUserIds.push(userId);
                this.userM = this.userM.filter(function (user) { return user.id != userId; });
                this.userSearchUtil.entityArr = this.userM;
                this.userSearchUtil.createSubscription();
            }
            this.selectedUserFC.setValue(this.selectedUserIds);
            this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
        };
        CreateUpdateComponent.prototype.removeSelectedUsers = function (userId) {
            var index = this.selectedUserIds.indexOf(userId);
            if (index != -1) {
                this.selectedUserIds.splice(index, 1);
                this.selectedUserFC.setValue(this.selectedUserIds);
                this.alertRuleFG.get('userID').setValue(this.selectedUserIds);
                var removedUser = this.userContext == i4.UserContext.ROOT_ORG_USER ? this.rootOrgUserM.find(function (user) { return user.id == userId; }) : this.currentOrgUserM.find(function (user) { return user.id == userId; });
                if (removedUser) {
                    this.userM.push(removedUser);
                    this.userSearchUtil.entityArr = this.userM;
                    this.userSearchUtil.createSubscription();
                }
            }
        };
        CreateUpdateComponent.prototype.getSelectedUsers = function () {
            var _this = this;
            return this.userContext == i4.UserContext.ROOT_ORG_USER ? this.rootOrgUserM.filter(function (user) { return _this.selectedUserIds.includes(user.id); }) : this.currentOrgUserM.filter(function (user) { return _this.selectedUserIds.includes(user.id); });
        };
        CreateUpdateComponent.prototype.setValidatorsForOtherUser = function () {
            var _this = this;
            this.alertRuleFG.get('isAnyOtherUser').valueChanges.subscribe(function (value) {
                if (value == true) {
                    _this.otherUserEmail.setValidators([i2.Validators.required]);
                }
                else {
                    _this.otherUserEmail.reset([]);
                    _this.otherUserEmail.clearValidators();
                }
                _this.otherUserEmail.updateValueAndValidity();
            });
        };
        CreateUpdateComponent.prototype.addOtherUser = function (event) {
            var isAnyOtherUser = this.alertRuleFG.get('isAnyOtherUser');
            isAnyOtherUser.setValue(event.checked);
            if (isAnyOtherUser.value) {
                this.otherUserEmail.setValidators([i2.Validators.required]);
            }
            else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }
            this.otherUserEmail.updateValueAndValidity();
        };
        CreateUpdateComponent.prototype.onInput = function () {
            this.inputPlaceholder = '';
        };
        Object.defineProperty(CreateUpdateComponent.prototype, "otherUserEmail", {
            get: function () {
                return this.alertRuleFG.get('otherUserEmail');
            },
            enumerable: false,
            configurable: true
        });
        CreateUpdateComponent.prototype.isValidEmail = function (email) {
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        };
        CreateUpdateComponent.prototype.add = function (event) {
            var _this = this;
            var value = (event.value || '').trim();
            if (value) {
                var emails = value.split(',').map(function (email) { return email.trim(); });
                var validEmails = emails.filter(function (email) { return _this.isValidEmail(email); });
                if (validEmails.length > 0) {
                    this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
                }
            }
            event.chipInput.clear();
        };
        CreateUpdateComponent.prototype.removeEmail = function (email) {
            var index = this.otherUserEmail.value.indexOf(email);
            if (index >= 0) {
                var emails = __spreadArray([], __read(this.otherUserEmail.value));
                emails.splice(index, 1);
                this.otherUserEmail.setValue(emails);
            }
        };
        /* users code */
        /* shift code */
        CreateUpdateComponent.prototype.getShift = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _d;
                var _this = this;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _d = this;
                            return [4 /*yield*/, this.shiftService.getShift(this.orgID)];
                        case 1:
                            _d.shiftM = (_e.sent());
                            this.totalShiftCount = this.shiftM.length;
                            this.shiftM.forEach(function (shift) { return _this.allShiftID.push(shift['id']); });
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateComponent.prototype.selectAllShifts = function () {
            if (!this.alertRuleFG.get('shiftID').value.includes(-1)) {
                this.alertRuleFG.get('shiftID').reset([]);
                return;
            }
            this.alertRuleFG.get('shiftID').setValue(__spreadArray([-1], __read(this.allShiftID)));
        };
        CreateUpdateComponent.prototype.selectedShift = function () {
            var selected = this.alertRuleFG.get('shiftID').value;
            if (selected.includes(-1)) {
                selected.shift();
                this.alertRuleFG.get('shiftID').patchValue(selected);
            }
            else if (this.alertRuleFG.get('shiftID').value.length == this.totalShiftCount) {
                this.allShiftID.splice(0, 0, -1);
                this.alertRuleFG.get('shiftID').patchValue(this.allShiftID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.alertRuleFG.get('shiftID').patchValue(filteredSelected);
            }
        };
        /* shift code */
        CreateUpdateComponent.prototype.createUpdateAlert = function () {
            var _this = this;
            this.isFormSubmit = true;
            var shiftID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['shiftID'].value);
            var deviceID = this.tscCommonService.removeSelectAllID(this.alertRuleFG.controls['deviceID'].value);
            this.alertRuleFG.get('deviceID').patchValue(deviceID);
            this.alertRuleFG.get('shiftID').patchValue(shiftID);
            if (this.alertRuleFG.invalid) {
                this.alertRuleFG.markAllAsTouched();
                this.toastrService.openToast(i7.InvalidForm.INVALID_FORM_TITLE, i7.InvalidForm.INVALID_FORM_MESSAGE, i7$1.ToastrColor.ERROR);
                return;
            }
            if (this.action == i7.FormAction.CREATE) {
                this.alertController.createAlertRule(this.orgID, this.alertRuleFG.value)
                    .subscribe(function (createRes) {
                    var toast = _this.toastrService.getToastStatus(createRes.status);
                    _this.toastrService.openToast(toast.title, createRes.message, toast.color);
                    _this.tscCommonService.back();
                }, function (error) {
                    console.log('error in createAlertRule - ', error);
                });
            }
            else if (this.action == i7.FormAction.UPDATE) {
                this.alertController.updateAlertRule(this.orgID, this.alertRuleID, this.alertRuleFG.value)
                    .subscribe(function (updatedRes) {
                    var toast = _this.toastrService.getToastStatus(updatedRes.status);
                    _this.toastrService.openToast(toast.title, updatedRes.message, toast.color);
                    _this.tscCommonService.back();
                }, function (error) {
                    console.log('error in updateAlertRule - ', error);
                });
            }
        };
        return CreateUpdateComponent;
    }());
    CreateUpdateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: i3__namespace.EntityService }, { token: i3__namespace.EntityDeviceService }, { token: i3__namespace.UnitService }, { token: i3__namespace.ShiftService }, { token: i4__namespace.UserService }, { token: i7__namespace$1.TSCCommonService }, { token: i2__namespace$1.FormBuilder }, { token: i7__namespace.ToastrService }, { token: AlertRuleController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateComponent, selector: "lib-create-update", viewQueries: [{ propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }, { propertyName: "parameterFilterChild", first: true, predicate: ["parameterFilterChild"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE : PageTitleEnum.UPDATE }} {{ alertLabel\n                }} Alert Rule</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <form [formGroup]=\"alertRuleFG\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Alert On\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Alert name </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Alert name\" formControlName=\"name\"\n                                        required>\n                                    <mat-error *ngIf=\"errorHandling('name', 'required')\">\n                                        Alert name is required\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <lib-parameter #parameterFilterChild></lib-parameter>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-1\" *ngIf=\"alertRuleFG.get('parameterID').value\">\n                            <div class=\"col-sm-12\">\n                                <mat-accordion>\n                                    <mat-expansion-panel class=\"matAccordion\" [expanded]=\"isEntityPanelExpanded\" (opened)=\"entityPanelOpened()\"\n                                        (closed)=\"entityPanelClosed()\">\n                                        <mat-expansion-panel-header>\n                                            <mat-panel-title>\n                                                <div class=\"card-title sectionTitle\">\n                                                    Select entity *\n                                                </div>\n                                                <div class=\"row ms-2\">\n                                                    <mat-error class=\"entityError\"\n                                                        *ngIf=\"isFormSubmit && !isEntityPanelExpanded && errorHandling('entityID', 'required')\">\n                                                        Select entity\n                                                    </mat-error>\n                                                </div>\n                                            </mat-panel-title>\n                                        </mat-expansion-panel-header>\n                                        <div class=\"row\">\n                                            <div class=\"mb-3\">\n                                                <small class=\"pageSubtitle\">\n                                                    <span *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL\">\n                                                        Choose <span class=\"text-secondary fw-bold\">\n                                                            'Select all sub-entities'\n                                                        </span> to generate alert at the current selection and any future entities\n                                                        at that level.\n                                                    </span> </small>\n                                                <br />\n                                                <small class=\"pageSubtitle\">\n                                                    <span class=\"text-secondary fw-bold\">NOTE: </span> The parameter you've selected is not present in the entities\n                                                    highlighted in <span class=\"text-primary\"> blue.</span>\n                                                </small>\n                                            </div>\n                                            <div *ngFor=\"let entity of entityM; let i = index\" class=\"mt-2\">\n                                                <mat-checkbox\n                                                    [ngClass]=\"{'fw-bold': entity.children && entity.children.length > 0, 'text-primary': !entity.isParameterExists}\"\n                                                    [checked]=\"isSelected(entity.id)\" (change)=\"entityChange(entity.id, $event)\">\n                                                    {{ entity.name }}\n                                                </mat-checkbox>\n                                                <span class=\"ms-5\"\n                                                    *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL && alertRuleFG.get('entityID').value && alertRuleFG.get('entityID').value.length > 0\">\n                                                    <mat-checkbox formControlName=\"isSubEntitiesSelected\" (change)=\"selectAllSubEntities($event)\">\n                                                        Select all sub-entities\n                                                    </mat-checkbox>\n                                                </span>\n                                                <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                                                    <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                                                </div>\n                                            </div>\n                                            <ng-template #recursiveTemplate let-entities>\n                                                <div *ngFor=\"let entity of entities; let i = index\" class=\"mt-2\">\n                                                    <mat-checkbox\n                                                        [ngClass]=\"{'fw-bold': entity.children && entity.children.length > 0, 'text-primary': !entity.isParameterExists}\"\n                                                        [checked]=\"isSelected(entity.id)\" (change)=\"entityChange(entity.id, $event)\">\n                                                        {{ entity.name }}\n                                                    </mat-checkbox>\n                                                    <div *ngIf=\"entity.children && entity.children.length > 0\" class=\"ms-5\">\n                                                        <ng-container *ngTemplateOutlet=\"recursiveTemplate; context:{ $implicit: entity.children }\"></ng-container>\n                                                    </div>\n                                                </div>\n                                            </ng-template>\n                                        </div>\n                                        <mat-error class=\"entityError\"\n                                            *ngIf=\"isFormSubmit && isEntityPanelExpanded && errorHandling('entityID', 'required')\">\n                                            <br />Select entity\n                                        </mat-error>\n                                    </mat-expansion-panel>\n                                </mat-accordion>\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"alertLabel == AlertPageLabelEnum.INSTANTANEOUS_LABEL && alertRuleFG.get('entityID').value && alertRuleFG.get('entityID').value.length > 0\">\n                            <div class=\"row mt-4\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"ps-1 radioBtnField\">\n                                        <div class=\"radioBtnGroupLabel\"> Would you prefer to receive alerts at device\n                                            level? </div>\n                                        <mat-radio-group formControlName=\"isAlertAtDeviceLevel\">\n                                            <div class=\"row my-2\">\n                                                <div class=\"col-sm-6\">\n                                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"true\">\n                                                        Yes\n                                                    </mat-radio-button>\n                                                </div>\n                                                <div class=\"col-sm-6\">\n                                                    <mat-radio-button class=\"radioBtnLabel\" [value]=\"false\">\n                                                        No\n                                                    </mat-radio-button>\n                                                </div>\n                                                <mat-error class=\"radioBtnGroupError ms-1 mt-1\" *ngIf=\"errorHandling('isAlertAtDeviceLevel', 'required') && \n                                                    this.alertRuleFG.controls['isAlertAtDeviceLevel'].touched\">\n                                                    Select an option\n                                                </mat-error>\n                                            </div>\n                                        </mat-radio-group>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\" *ngIf=\"alertRuleFG.get('isAlertAtDeviceLevel').value\">\n                                    <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                        <mat-label>Select device</mat-label>\n                                        <mat-select formControlName=\"deviceID\" multiple required>\n                                            <ng-container *ngIf=\"devicesWithEntitiesM && devicesWithEntitiesM.length > 0; else noDeviceFound\">\n                                                <mat-option [value]=\"-1\" (click)=\"selectAllDevices()\">\n                                                    Select all devices\n                                                </mat-option>\n                                                <mat-optgroup *ngFor=\"let entity of devicesWithEntitiesM\" [label]=\"entity.name\" [disabled]=\"entity.disabled\">\n                                                    <mat-option *ngFor=\"let device of entity.devices\" [value]=\"device.id\" (click)=\"selectDevices(device.id)\">\n                                                        {{ device.name }}\n                                                    </mat-option>\n                                                </mat-optgroup>\n                                            </ng-container>\n                                            <ng-template #noDeviceFound>\n                                                <mat-option disabled>\n                                                    {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                                </mat-option>\n                                            </ng-template>\n                                        </mat-select>\n                                        <mat-error *ngIf=\"errorHandling('deviceID', 'required')\">\n                                            Select device\n                                        </mat-error>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Rule Definition\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select unit</mat-label>\n                                    <mat-select (selectionChange)=\"unitChange($event.value)\" formControlName=\"unitID\" required>\n                                        <ng-container *ngIf=\"unitM && unitM.length > 0 && unitM[0]['id']; else noUnitFound\">\n                                            <mat-option>\n                                                <ngx-mat-select-search [formControl]=\"unitSearchUtil.filterFC\" placeholderLabel=\"Search by name\"\n                                                    noEntriesFoundLabel=\"No matching name found.\">\n                                                </ngx-mat-select-search>\n                                            </mat-option>\n                                            <mat-option *ngFor=\"let unit of unitSearchUtil.filteredEntities | async\" [value]=\"unit.id\">\n                                                {{ unit.name }}\n                                            </mat-option>\n                                        </ng-container>\n                                        <ng-template #noUnitFound>\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </ng-template>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"alertRuleFG.get('parameterID').invalid\">\n                                        Please select parameter first\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('unitID', 'required') && alertRuleFG.get('parameterID').valid\">\n                                        Select unit\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select condition</mat-label>\n                                    <mat-select formControlName=\"condition\" (selectionChange)=\"conditionChange($event.value)\" required>\n                                        <mat-option *ngFor=\"let condition of LIST_CONSTANT.CONDITION\" [value]=\"condition.value\">\n                                            {{ condition.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('condition', 'required')\">\n                                        Select condition\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div [ngClass]=\"{'col-sm-3': showValueField(), 'col-sm-2': !showValueField()}\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select frequency</mat-label>\n                                    <mat-select formControlName=\"frequency\" required>\n                                        <mat-option *ngFor=\"let frequency of getFrequency()\" [value]=\"frequency.value\">\n                                            {{ frequency.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('frequency', 'required')\">\n                                        Select frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div [ngClass]=\"{'col-sm-3': showValueField(), 'col-sm-2': !showValueField()}\" *ngIf=\"showValueField()\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"value\" required>\n                                    <mat-error *ngIf=\"errorHandling('value', 'required')\">\n                                        Value is required\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"showStartEndFields()\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> Start value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"startValue\" required>\n                                    <mat-error *ngIf=\"errorHandling('startValue', 'required')\">\n                                        Start value is required\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('startValue', 'invalidRange')\">\n                                        Start value must be less than end value\n                                      </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"showStartEndFields()\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label class=\"formLabel\"> End value </mat-label>\n                                    <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0.00\" formControlName=\"endValue\" required>\n                                    <mat-error *ngIf=\"errorHandling('endValue', 'required')\">\n                                        End value is required\n                                    </mat-error>\n                                    <mat-error *ngIf=\"errorHandling('endValue', 'invalidRange')\">\n                                        End value must be greater than start value\n                                      </mat-error>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Alert Recipient: Select or Add\n                        </div>\n                        <div class=\"row userContext\">\n                            <div class=\"col-sm-12\">\n                                <span class=\"fw-bold text-secondary me-2\"> Current org users </span>\n                                <mat-slide-toggle class=\"slideToggleBtn mt-2\" [formControl]=\"userFC\"\n                                    (change)=\"userContextChange()\"></mat-slide-toggle>\n                                <span class=\"fw-bold text-secondary ms-2\"> All users </span>\n                            </div>\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <mat-form-field class=\"matFieldWidth100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select user</mat-label>\n                                    <mat-select [formControl]=\"selectedUserFC\" required>\n                                        <mat-select-trigger>\n                                            Select users\n                                        </mat-select-trigger>\n                                        <ng-container *ngIf=\"userM && userM.length > 0 && userM[0]['id']; else noUserFound\">\n                                            <mat-option>\n                                                <ngx-mat-select-search [formControl]=\"userSearchUtil.filterFC\" placeholderLabel=\"Search by name/email\"\n                                                    noEntriesFoundLabel=\"No matching name/email found.\">\n                                                </ngx-mat-select-search>\n                                            </mat-option>\n                                            <mat-option class=\"matOptionNameEmail\" *ngFor=\"let user of userSearchUtil.filteredEntities | async\"\n                                                [value]=\"user.id\" (onSelectionChange)=\"onUserSelectionChange(user.id)\">\n                                                <!-- <span class=\"ms-3\">\n                                                    <img class=\"rounded-circle border profileImageDropdownView\"\n                                                        [src]=\"user.profileImgUrl || userService.defaultImage(\n                                                        (user?.['firstName'] ? user['firstName'] + ' ' + user?.['lastName'] : ''), \n                                                        ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\"alt=\"Profile image\">\n                                                </span> -->\n                                                <span class=\"ms-3\">\n                                                    {{ user.firstName }} {{ user?.lastName }}\n                                                </span>\n                                                <br />\n                                                <span class=\"ms-3 text-secondary\"> {{user.email}} </span>\n                                            </mat-option>\n                                        </ng-container>\n                                        <ng-template #noUserFound>\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </ng-template>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"selectedUserFC.hasError('required')\">\n                                        Select user\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\" *ngIf=\"selectedUserIds?.length > 0\">\n                                <mat-card class=\"border card\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-12\">\n                                            <span class=\"card-title sectionTitle\">\n                                                Selected users\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <perfect-scrollbar class=\"scrollHeight\">\n                                        <div class=\"row mt-2\">\n                                            <div class=\"col-sm-12\" *ngFor=\"let user of getSelectedUsers()\">\n                                                <div class=\"d-flex align-items-center\">\n                                                    <div class=\"profileImgContainer\">\n                                                        <img class=\"profileImg rounded-circle border\" [src]=\"user.profileImgUrl || userService.defaultImage(\n                                                            (user?.['firstName'] ? user['firstName'] + ' ' + user?.['lastName'] : ''), \n                                                            ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW)\"\n                                                            alt=\"Profile img\" />\n                                                    </div>\n                                                    <div class=\"ps-1 lineHeight\">\n                                                        <span> {{ user.firstName }} {{ user?.lastName }} </span>\n                                                        <br />\n                                                        <span class=\"text-secondary\"> {{user.email}} </span>\n                                                    </div>\n                                                    <div class=\"ms-auto\">\n                                                        <span\n                                                            class=\"material-symbols-outlined me-3 text-danger cursorPointer\"\n                                                            matTooltip=\"Remove selected user\" matTooltipPosition=\"above\"\n                                                            (click)=\"removeSelectedUsers(user.id)\">\n                                                            cancel\n                                                        </span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </perfect-scrollbar>\n                                </mat-card>\n                            </div>\n                        </div>\n                        <div class=\"row mt-2\">\n                            <div class=\"col-sm-6\">\n                                <mat-checkbox formControlName=\"isAnyOtherUser\" (change)=\"addOtherUser($event)\">\n                                    Any other user\n                                </mat-checkbox>\n                            </div>\n                            <div class=\"col-sm-6\" *ngIf=\"alertRuleFG.controls['isAnyOtherUser'].value == true\">\n                                <mat-form-field class=\"matFieldWidth100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Enter user email</mat-label>\n                                    <mat-chip-list #chipList>\n                                        <mat-chip *ngFor=\"let email of otherUserEmail.value\" [removable]=\"removable\"\n                                            (removed)=\"removeEmail(email)\">\n                                            {{ email }}\n                                            <button matChipRemove *ngIf=\"removable\">\n                                                <mat-icon>cancel</mat-icon>\n                                            </button>\n                                        </mat-chip>\n                                        <input [placeholder]=\"inputPlaceholder\" [matChipInputFor]=\"chipList\"\n                                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                            [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"\n                                            (input)=\"onInput()\" required>\n                                        <mat-error class=\"userEmailError\" *ngIf=\"otherUserEmail.hasError('required')\">\n                                            Email is required\n                                        </mat-error>\n                                    </mat-chip-list>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-12\">\n                    <mat-card class=\"border cardOverwrite\">\n                        <div class=\"card-title sectionTitle\">\n                            Notification Preferences\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"matFieldWidth100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select SMS frequency</mat-label>\n                                    <mat-select formControlName=\"smsFrequency\" required>\n                                        <mat-option *ngFor=\"let smsFreq of LIST_CONSTANT.SMS_FREQUENCY\"\n                                            [value]=\"smsFreq.value\">\n                                            {{ smsFreq.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('smsFrequency', 'required')\">\n                                        Select sms frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"matFieldWidth100\"\n                                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select email frequency</mat-label>\n                                    <mat-select formControlName=\"emailFrequency\" required>\n                                        <mat-option *ngFor=\"let emailFreq of LIST_CONSTANT.EMAIL_FREQUENCY\"\n                                            [value]=\"emailFreq.value\">\n                                            {{ emailFreq.label }}\n                                        </mat-option>\n                                    </mat-select>\n                                    <mat-error *ngIf=\"errorHandling('emailFrequency', 'required')\">\n                                        Select email frequency\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                    <mat-label>Select shift</mat-label>\n                                    <ng-container *ngIf=\"shiftM && shiftM.length > 0 && shiftM[0]['id']; else noDataOption\">\n                                        <mat-select formControlName=\"shiftID\" multiple required>\n                                            <mat-option [value]=\"-1\" (click)=\"selectAllShifts()\">\n                                                Select all\n                                            </mat-option>\n                                            <mat-option *ngFor=\"let shift of shiftM\" [value]=\"shift.id\" (click)=\"selectedShift()\">\n                                                {{ shift.name }}\n                                            </mat-option>\n                                        </mat-select>\n                                    </ng-container>\n                                    <ng-template #noDataOption>\n                                        <mat-select formControlName=\"shiftID\">\n                                            <mat-option disabled>\n                                                {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                            </mat-option>\n                                        </mat-select>\n                                    </ng-template>\n                                    <mat-error *ngIf=\"errorHandling('shiftID', 'required')\">\n                                        Select shift\n                                    </mat-error>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </mat-card>\n                </div>\n            </div>\n\n            <div align=\"end\" class=\"mt-3\">\n                <button type=\"button\" class=\"btn btn-sm btn-secondary me-2\" (click)=\"tscCommonService.back()\">\n                    {{ ButtonLabelEnum.CANCEL_BTN_LABEL }}\n                </button>\n                <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"createUpdateAlert()\"\n                    [ngClass]=\"{'disabled': action == FormAction.UPDATE && isEqual}\">\n                    {{ action == FormAction.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n                    ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                </button>\n            </div>\n        </form>\n    </div>\n</div>", styles: [".matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.entityError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.userCardHeight{max-height:200px}.card{box-shadow:none!important}.scrollHeight{height:110px}.radioBtnField{height:82px}.radioBtnGroupLabel{font-size:16px}.radioBtnGroupError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.radioBtnLabel{color:#686868f3}.lineHeight{line-height:1}.profileImageDropdownView{height:35px;width:35px}.profileImgContainer{width:35px;min-height:35px;max-height:auto;float:left;margin:3px;padding:3px;display:flex;align-items:center;justify-content:center}.profileImg{width:35px}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#14c747}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-thumb{background-color:#14c747}.userEmailError{font-size:75%}.matOptionNameEmail{line-height:1.5em!important}\n"], components: [{ type: i9__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i3__namespace.ParameterComponent, selector: "lib-parameter", outputs: ["emitFilter"] }, { type: i11__namespace$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { type: i11__namespace$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { type: i12__namespace$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i13__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i14__namespace$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i15__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i15__namespace.MatOptgroup, selector: "mat-optgroup", inputs: ["disabled"], exportAs: ["matOptgroup"] }, { type: i16__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i11__namespace.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i18__namespace.PerfectScrollbarComponent, selector: "perfect-scrollbar", inputs: ["disabled", "usePSClass", "autoPropagation", "scrollIndicators", "config"], outputs: ["psScrollY", "psScrollX", "psScrollUp", "psScrollDown", "psScrollLeft", "psScrollRight", "psYReachEnd", "psYReachStart", "psXReachEnd", "psXReachStart"], exportAs: ["ngxPerfectScrollbar"] }, { type: i19__namespace.MatChipList, selector: "mat-chip-list", inputs: ["aria-orientation", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "selectable", "tabIndex", "errorStateMatcher"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i20__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10__namespace$1.MatLabel, selector: "mat-label" }, { type: i21__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i22__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i11__namespace$1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "displayMode", "togglePosition", "hideToggle"], exportAs: ["matAccordion"] }, { type: i11__namespace$1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { type: i22__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i22__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i22__namespace.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i13__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i2__namespace$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i2__namespace$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i14__namespace$1.MatSelectTrigger, selector: "mat-select-trigger" }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i19__namespace.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i19__namespace.MatChipRemove, selector: "[matChipRemove]" }, { type: i19__namespace.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputSeparatorKeyCodes", "placeholder", "id", "matChipInputFor", "matChipInputAddOnBlur", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }], pipes: { "async": i22__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-create-update',
                        templateUrl: './create-update.component.html',
                        styleUrls: ['./create-update.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: i3__namespace.EntityService }, { type: i3__namespace.EntityDeviceService }, { type: i3__namespace.UnitService }, { type: i3__namespace.ShiftService }, { type: i4__namespace.UserService }, { type: i7__namespace$1.TSCCommonService }, { type: i2__namespace$1.FormBuilder }, { type: i7__namespace.ToastrService }, { type: AlertRuleController }]; }, propDecorators: { searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }], parameterFilterChild: [{
                    type: i0.ViewChild,
                    args: ['parameterFilterChild']
                }] } });

    var routes$3 = [
        {
            path: '',
            component: CreateUpdateComponent
        }
    ];
    var CreateUpdateRoutingModule = /** @class */ (function () {
        function CreateUpdateRoutingModule() {
        }
        return CreateUpdateRoutingModule;
    }());
    CreateUpdateRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    CreateUpdateRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, imports: [[i1$1.RouterModule.forChild(routes$3)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes$3)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    // /tsc-library/
    var CreateUpdateModule = /** @class */ (function () {
        function CreateUpdateModule() {
        }
        return CreateUpdateModule;
    }());
    CreateUpdateModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, declarations: [CreateUpdateComponent], imports: [i22.CommonModule,
            CreateUpdateRoutingModule,
            i3.ParameterModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            i9$2.MatCardModule,
            i10$1.MatFormFieldModule,
            i21.MatInputModule,
            i14$1.MatSelectModule,
            i12$1.MatCheckboxModule,
            i20.MatIconModule,
            i19.MatChipsModule,
            i11$1.MatExpansionModule,
            i11.MatSlideToggleModule,
            i14.MatTooltipModule,
            i13.MatRadioModule,
            i16$1.NgxMatSelectSearchModule,
            i18.PerfectScrollbarModule,
            i7.EllipsisPipeModule,
            i7.SearchBarTwoModule] });
    CreateUpdateModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, imports: [[
                i22.CommonModule,
                CreateUpdateRoutingModule,
                i3.ParameterModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i9$2.MatCardModule,
                i10$1.MatFormFieldModule,
                i21.MatInputModule,
                i14$1.MatSelectModule,
                i12$1.MatCheckboxModule,
                i20.MatIconModule,
                i19.MatChipsModule,
                i11$1.MatExpansionModule,
                i11.MatSlideToggleModule,
                i14.MatTooltipModule,
                i13.MatRadioModule,
                i16$1.NgxMatSelectSearchModule,
                i18.PerfectScrollbarModule,
                i7.EllipsisPipeModule,
                i7.SearchBarTwoModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateComponent
                        ],
                        imports: [
                            i22.CommonModule,
                            CreateUpdateRoutingModule,
                            i3.ParameterModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            i9$2.MatCardModule,
                            i10$1.MatFormFieldModule,
                            i21.MatInputModule,
                            i14$1.MatSelectModule,
                            i12$1.MatCheckboxModule,
                            i20.MatIconModule,
                            i19.MatChipsModule,
                            i11$1.MatExpansionModule,
                            i11.MatSlideToggleModule,
                            i14.MatTooltipModule,
                            i13.MatRadioModule,
                            i16$1.NgxMatSelectSearchModule,
                            i18.PerfectScrollbarModule,
                            i7.EllipsisPipeModule,
                            i7.SearchBarTwoModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var CreateUpdateEscalationComponent = /** @class */ (function () {
        function CreateUpdateEscalationComponent(dialogRef, data, escalationFB, activatedRoute, storageService, userService, tscCommonService, toastrService, escalationController) {
            var _this = this;
            this.dialogRef = dialogRef;
            this.data = data;
            this.escalationFB = escalationFB;
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.userService = userService;
            this.tscCommonService = tscCommonService;
            this.toastrService = toastrService;
            this.escalationController = escalationController;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.MATERIAL_CONSTANT = i7.MATERIAL_CONSTANT;
            this.LIST_CONSTANT = i3.LIST_CONSTANT;
            this.MaterialFormFieldAppearance = i7.MaterialFormFieldAppearance;
            this.ButtonLabelEnum = i7.ButtonLabelEnum;
            this.PageTitleEnum = i7.PageTitleEnum;
            this.DialogEnum = i7.DialogEnum;
            this.InvalidForm = i7.InvalidForm;
            this.ToastrColor = i7$1.ToastrColor;
            this.UserContext = i4.UserContext;
            this.ProfileImg = i4.ProfileImg;
            this.userContext = i4.UserContext.ROOT_ORG_USER;
            this.inputPlaceholder = "email1@domain.com, email2@domain.com";
            this.isEqual = false;
            this.allUserID = [];
            this.totalUserCount = 0;
            this.selectable = true;
            this.removable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.userM = [new i4.User()];
            this.rootOrgUserM = [new i4.User()];
            this.currentOrgUserM = [new i4.User()];
            this.userFC = new i2.FormControl(true, i2.Validators.required);
            this.userSearchUtil = new i7.MatSelectSearchService(['firstName', 'lastName', 'email']);
            this.errorHandling = function (control, error) {
                return _this.escalationFG.controls[control].hasError(error);
            };
            this.alertRuleID = data.alertRuleID;
            this.levelID = data.levelID;
            this.action = data.action;
            this.dialogRef.disableClose = true;
        }
        CreateUpdateEscalationComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.escalationInit();
            this.initializeData();
        };
        CreateUpdateEscalationComponent.prototype.initializeData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUsersByOrgID()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.getCurrentOrgUserAccess()];
                        case 2:
                            _a.sent();
                            if (this.action == i7.PageTitleEnum.UPDATE) {
                                this.escalationRuleID = this.data.escLevelConfig.escalationRuleID;
                                this.setValidatorsForOtherUser();
                                this.patchEscalation(this.data['escLevelConfig']);
                            }
                            this.escalationFG.valueChanges.subscribe(function () {
                                _this.isEqual = lodash.isEqual(_this.initialObject, _this.escalationFG);
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateEscalationComponent.prototype.escalationInit = function () {
            this.escalationFG = this.escalationFB.group({
                alertRuleID: [this.alertRuleID],
                level: [this.levelID],
                intervalValue: [, [i2.Validators.required, this.integerValidator()]],
                intervalFrequencyKey: [, i2.Validators.required],
                notificationPrefValue: [, [i2.Validators.required, this.integerValidator()]],
                notificationPrefKey: [, i2.Validators.required],
                userChoice: [i4.UserContext.ROOT_ORG_USER],
                userID: [[], i2.Validators.required],
                isAnyOtherUser: [false],
                otherUserEmail: [[]],
            });
        };
        CreateUpdateEscalationComponent.prototype.integerValidator = function () {
            return function (control) {
                var value = control.value;
                if (value != null && value != undefined) {
                    var isInteger = Number.isInteger(value);
                    return isInteger ? null : { 'integerError': true };
                }
                return null;
            };
        };
        CreateUpdateEscalationComponent.prototype.patchEscalation = function (escalationLevelConfig) {
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
            this.userFC.patchValue(escalationLevelConfig.userChoice == i4.UserContext.CURRENT_ORG_USER ? false : true);
            this.escalationFG.get('userID').patchValue((escalationLevelConfig.userID.length == this.totalUserCount) ? __spreadArray([-1], __read(escalationLevelConfig.userID)) : __spreadArray([], __read(escalationLevelConfig.userID)));
            this.initialObject = this.escalationFG.value;
            this.isEqual = true;
        };
        /* users code */
        CreateUpdateEscalationComponent.prototype.getUsersByOrgID = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.userService.getUsersByOrgID(this.orgID)];
                        case 1:
                            _a.rootOrgUserM = (_b.sent());
                            this.userM = this.rootOrgUserM;
                            this.userSearchUtil.entityArr = this.userM;
                            this.userSearchUtil.createSubscription();
                            this.totalUserCount = this.userM.length;
                            this.userM.forEach(function (user) { return _this.allUserID.push(user['id']); });
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateEscalationComponent.prototype.getCurrentOrgUserAccess = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.userService.getCurrentOrgUserAccess(this.orgID)];
                        case 1:
                            _a.currentOrgUserM = (_b.sent());
                            return [2 /*return*/];
                    }
                });
            });
        };
        CreateUpdateEscalationComponent.prototype.userContextChange = function () {
            var _this = this;
            if (this.userFC.value) {
                this.userContext = i4.UserContext.ROOT_ORG_USER;
                this.userM = this.rootOrgUserM;
                this.escalationFG.get('userChoice').setValue(this.userContext);
            }
            else {
                this.userContext = i4.UserContext.CURRENT_ORG_USER;
                this.userM = this.currentOrgUserM;
                this.escalationFG.get('userChoice').setValue(this.userContext);
            }
            this.allUserID = [];
            this.userSearchUtil.entityArr = this.userM;
            this.userSearchUtil.createSubscription();
            this.totalUserCount = this.userM.length;
            this.userM.forEach(function (user) { return _this.allUserID.push(user['id']); });
            this.escalationFG.get('userID').setValue([]);
        };
        CreateUpdateEscalationComponent.prototype.selectUser = function () {
            var selected = this.escalationFG.get('userID').value;
            if (selected.includes(-1)) {
                selected.shift();
                this.escalationFG.get('userID').patchValue(selected);
            }
            else if (this.escalationFG.get('userID').value.length == this.totalUserCount) {
                this.allUserID.splice(0, 0, -1);
                this.escalationFG.get('userID').patchValue(this.allUserID);
            }
            else {
                var filteredSelected = selected.filter(function (s) { return s != -1; });
                this.escalationFG.get('userID').patchValue(filteredSelected);
            }
        };
        CreateUpdateEscalationComponent.prototype.selectAllUsers = function () {
            if (!this.escalationFG.get('userID').value.includes(-1)) {
                this.escalationFG.get('userID').reset([]);
                return;
            }
            this.escalationFG.get('userID').setValue(__spreadArray([-1], __read(this.allUserID)));
        };
        CreateUpdateEscalationComponent.prototype.setValidatorsForOtherUser = function () {
            var _this = this;
            this.escalationFG.get('isAnyOtherUser').valueChanges.subscribe(function (value) {
                if (value == true) {
                    _this.otherUserEmail.setValidators([i2.Validators.required]);
                }
                else {
                    _this.otherUserEmail.reset([]);
                    _this.otherUserEmail.clearValidators();
                }
                _this.otherUserEmail.updateValueAndValidity();
            });
        };
        CreateUpdateEscalationComponent.prototype.addOtherUser = function (event) {
            var isAnyOtherUser = this.escalationFG.get('isAnyOtherUser');
            isAnyOtherUser.setValue(event.checked);
            if (isAnyOtherUser.value) {
                this.otherUserEmail.setValidators([i2.Validators.required]);
            }
            else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }
            this.otherUserEmail.updateValueAndValidity();
        };
        CreateUpdateEscalationComponent.prototype.onInput = function () {
            this.inputPlaceholder = '';
        };
        Object.defineProperty(CreateUpdateEscalationComponent.prototype, "otherUserEmail", {
            get: function () {
                return this.escalationFG.get('otherUserEmail');
            },
            enumerable: false,
            configurable: true
        });
        CreateUpdateEscalationComponent.prototype.isValidEmail = function (email) {
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        };
        CreateUpdateEscalationComponent.prototype.add = function (event) {
            var _this = this;
            var value = (event.value || '').trim();
            if (value) {
                var emails = value.split(',').map(function (email) { return email.trim(); });
                var validEmails = emails.filter(function (email) { return _this.isValidEmail(email); });
                if (validEmails.length > 0) {
                    this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
                }
            }
            event.chipInput.clear();
        };
        CreateUpdateEscalationComponent.prototype.removeEmail = function (email) {
            var index = this.otherUserEmail.value.indexOf(email);
            if (index >= 0) {
                var emails = __spreadArray([], __read(this.otherUserEmail.value));
                emails.splice(index, 1);
                this.otherUserEmail.setValue(emails);
            }
        };
        /* users code */
        CreateUpdateEscalationComponent.prototype.adjustArrayValues = function () {
            this.adjustArray(this.escalationFG.controls['userID'].value);
        };
        CreateUpdateEscalationComponent.prototype.adjustArray = function (arr) {
            if (arr.includes(-1)) {
                arr.shift();
            }
        };
        CreateUpdateEscalationComponent.prototype.createUpdateEscalationRule = function () {
            var _this = this;
            this.adjustArrayValues();
            if (this.escalationFG.invalid) {
                this.escalationFG.markAllAsTouched();
                this.toastrService.openToast(i7.InvalidForm.INVALID_FORM_TITLE, i7.InvalidForm.INVALID_FORM_MESSAGE, i7$1.ToastrColor.ERROR);
                return [];
            }
            if (this.action == i7.PageTitleEnum.CREATE) {
                this.escalationController.createEsclationByLevelID(this.orgID, this.escalationFG.value)
                    .subscribe(function (createRes) {
                    var toast = _this.toastrService.getToastStatus(createRes.status);
                    _this.toastrService.openToast(toast.title, createRes.message, toast.color);
                    _this.dialogRef.close(i7.DialogEnum.SUCCESS_DR);
                }, function (error) {
                    console.log('error in createEsclationByLevelID - ', error);
                });
            }
            else if (this.action == i7.PageTitleEnum.UPDATE) {
                if (this.isEqual)
                    return;
                this.escalationController.updateEsclationByLevelID(this.orgID, this.escalationRuleID, this.escalationFG.value)
                    .subscribe(function (updateRes) {
                    var toast = _this.toastrService.getToastStatus(updateRes.status);
                    _this.toastrService.openToast(toast.title, updateRes.message, toast.color);
                    _this.dialogRef.close(i7.DialogEnum.SUCCESS_DR);
                }, function (error) {
                    console.log('error in updateEsclationByLevelID - ', error);
                });
            }
        };
        return CreateUpdateEscalationComponent;
    }());
    CreateUpdateEscalationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationComponent, deps: [{ token: i1__namespace$2.MatDialogRef }, { token: i1$2.MAT_DIALOG_DATA }, { token: i2__namespace$1.FormBuilder }, { token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: i4__namespace.UserService }, { token: i7__namespace$1.TSCCommonService }, { token: i7__namespace.ToastrService }, { token: EscalationController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CreateUpdateEscalationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateEscalationComponent, selector: "lib-create-update", ngImport: i0__namespace, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ action }} Escalation Rule\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"DialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <form [formGroup]=\"escalationFG\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Interval\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label class=\"formLabel\"> Value </mat-label>\n                                <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0\" [min]=\"0\" formControlName=\"intervalValue\"\n                                    required>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'required')\">\n                                    Value is required\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'min')\">\n                                    This field can not be negative\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('intervalValue', 'integerError')\">\n                                    Please enter an integer value\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"matFieldWidth100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select frequency</mat-label>\n                                <mat-select formControlName=\"intervalFrequencyKey\" required>\n                                    <mat-option *ngFor=\"let frequency of LIST_CONSTANT.ESCALATION_FREQUENCY\"\n                                        [value]=\"frequency.value\">\n                                        {{ frequency.label }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('intervalFrequencyKey', 'required')\">\n                                    Select frequency\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Notification frequency\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label class=\"formLabel\"> Value </mat-label>\n                                <input class=\"formPlaceholder\" matInput type=\"number\" placeholder=\"0\" [min]=\"0\"\n                                    formControlName=\"notificationPrefValue\" required>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'required')\">\n                                    Value is required\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'min')\">\n                                    This field can not be negative\n                                </mat-error>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefValue', 'integerError')\">\n                                    Please enter an integer value\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"matFieldWidth100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select frequency</mat-label>\n                                <mat-select formControlName=\"notificationPrefKey\" required>\n                                    <mat-option *ngFor=\"let frequency of LIST_CONSTANT.ESCALATION_FREQUENCY\"\n                                        [value]=\"frequency.value\">\n                                        {{ frequency.label }}\n                                    </mat-option>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('notificationPrefKey', 'required')\">\n                                    Select frequency\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"card-title sectionTitle\">\n                        Escalated to\n                    </div>\n                    <div class=\"row userContext\">\n                        <div class=\"col-sm-6 d-flex justify-content-start centerAlignVertical\">\n                            <span class=\"fw-bold text-secondary me-2\"> Current org users </span>\n                            <mat-slide-toggle class=\"slideToggleBtn\" [formControl]=\"userFC\"\n                                (change)=\"userContextChange()\"></mat-slide-toggle>\n                            <span class=\"fw-bold text-secondary ms-2\"> All users </span>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"matFieldWidth100\" [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Select user</mat-label>\n                                <mat-select formControlName=\"userID\" multiple required>\n                                    <ng-container *ngIf=\"userM && userM.length > 0 && userM[0]['id']; else noUserFound\">\n                                        <mat-option>\n                                            <ngx-mat-select-search [formControl]=\"userSearchUtil.filterFC\" placeholderLabel=\"Search by name/email\"\n                                                noEntriesFoundLabel=\"No matching name/email found.\">\n                                            </ngx-mat-select-search>\n                                        </mat-option>\n                                        <mat-option [value]=\"-1\" (click)=\"selectAllUsers()\">\n                                            Select all\n                                        </mat-option>\n                                        <mat-option *ngFor=\"let user of userSearchUtil.filteredEntities | async\" [value]=\"user.id\"\n                                            (click)=\"selectUser()\">\n                                            {{ user?.email }}\n                                        </mat-option>\n                                    </ng-container>\n                                    <ng-template #noUserFound>\n                                        <mat-option disabled>\n                                            {{ COMMON_CONSTANT.NO_DATA_FOUND }}\n                                        </mat-option>\n                                    </ng-template>\n                                </mat-select>\n                                <mat-error *ngIf=\"errorHandling('userID', 'required')\">\n                                    Select user\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                        <div class=\"col-sm-6 mb-3 d-flex justify-content-start centerAlignVertical\">\n                            <mat-checkbox formControlName=\"isAnyOtherUser\" (change)=\"addOtherUser($event)\">\n                                Any other user\n                            </mat-checkbox>\n                        </div>\n                        <div class=\"col-sm-6\" *ngIf=\"escalationFG.controls['isAnyOtherUser'].value == true\">\n                            <mat-form-field class=\"matFieldWidth100\"\n                                [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                                <mat-label>Enter user email</mat-label>\n                                <mat-chip-list #chipList>\n                                    <mat-chip *ngFor=\"let email of otherUserEmail.value\" [removable]=\"removable\"\n                                        (removed)=\"removeEmail(email)\">\n                                        {{ email }}\n                                        <button matChipRemove *ngIf=\"removable\">\n                                            <mat-icon>cancel</mat-icon>\n                                        </button>\n                                    </mat-chip>\n                                    <input [placeholder]=\"inputPlaceholder\" [matChipInputFor]=\"chipList\"\n                                        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                        [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"\n                                        (input)=\"onInput()\" required>\n                                    <mat-error class=\"userEmailError\" *ngIf=\"otherUserEmail.hasError('required')\">\n                                        Email is required\n                                    </mat-error>\n                                </mat-chip-list>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div mat-dialog-footer align=\"end\">\n    <button type=\"submit\" class=\"btn btn-sm btn-success\" (click)=\"createUpdateEscalationRule()\"\n        [ngClass]=\"{'disabled': action == PageTitleEnum.UPDATE && isEqual}\">\n        {{ action == PageTitleEnum.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n        ButtonLabelEnum.UPDATE_BTN_LABEL }}\n    </button>\n</div>", styles: [".matAccordion{box-shadow:none!important;background:whitesmoke;border-radius:16px!important}.entityError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.userCardHeight{max-height:200px}.card{box-shadow:none!important}.scrollHeight{height:110px}.radioBtnField{height:82px}.radioBtnGroupLabel{font-size:16px}.radioBtnGroupError{font-size:10.56px;font-family:Roboto,\"Helvetica Neue\",sans-serif}.radioBtnLabel{color:#686868f3}.lineHeight{line-height:1}.profileImageDropdownView{height:35px;width:35px}.profileImgContainer{width:35px;min-height:35px;max-height:auto;float:left;margin:3px;padding:3px;display:flex;align-items:center;justify-content:center}.profileImg{width:35px}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#14c747}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-bar{background-color:#b8f7ca}::ng-deep .userContext .mat-slide-toggle .mat-slide-toggle-thumb{background-color:#14c747}.userEmailError{font-size:75%}.matOptionNameEmail{line-height:1.5em!important}\n"], components: [{ type: i9__namespace$2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i9__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i10__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i14__namespace$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i15__namespace.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i11__namespace.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "required", "checked", "aria-describedby"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { type: i16__namespace$1.MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: ["placeholderLabel", "type", "closeIcon", "closeSvgIcon", "noEntriesFoundLabel", "indexAndLengthScreenReaderText", "clearSearchInput", "searching", "disableInitialFocus", "enableClearOnEscapePressed", "preventHomeEndKeyPropagation", "disableScrollToActiveOnOptionsChanged", "ariaLabel", "showToggleAllCheckbox", "toggleAllCheckboxChecked", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxTooltipMessage", "toogleAllCheckboxTooltipPosition", "hideClearSearchButton", "alwaysRestoreSelectedOptionsMulti"], outputs: ["toggleAll"] }, { type: i12__namespace$1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "id", "labelPosition", "name", "required", "checked", "disabled", "indeterminate", "aria-describedby", "value"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i19__namespace.MatChipList, selector: "mat-chip-list", inputs: ["aria-orientation", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "selectable", "tabIndex", "errorStateMatcher"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i20__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1__namespace$2.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1__namespace$2.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1__namespace$2.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i2__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10__namespace$1.MatLabel, selector: "mat-label" }, { type: i21__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i2__namespace$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i2__namespace$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i22__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10__namespace$1.MatError, selector: "mat-error", inputs: ["id"] }, { type: i22__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i19__namespace.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i19__namespace.MatChipRemove, selector: "[matChipRemove]" }, { type: i19__namespace.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputSeparatorKeyCodes", "placeholder", "id", "matChipInputFor", "matChipInputAddOnBlur", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i22__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i22__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-create-update',
                        templateUrl: './create-update.component.html',
                        styleUrls: ['./create-update.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$2.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$2.MAT_DIALOG_DATA]
                        }] }, { type: i2__namespace$1.FormBuilder }, { type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: i4__namespace.UserService }, { type: i7__namespace$1.TSCCommonService }, { type: i7__namespace.ToastrService }, { type: EscalationController }];
        } });

    var CreateUpdateEscalationModule = /** @class */ (function () {
        function CreateUpdateEscalationModule() {
        }
        return CreateUpdateEscalationModule;
    }());
    CreateUpdateEscalationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CreateUpdateEscalationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationModule, declarations: [CreateUpdateEscalationComponent], imports: [i22.CommonModule,
            i2.FormsModule,
            i2.ReactiveFormsModule,
            i1$2.MatDialogModule,
            i9$2.MatCardModule,
            i10$1.MatFormFieldModule,
            i9$1.MatButtonModule,
            i21.MatInputModule,
            i14$1.MatSelectModule,
            i12$1.MatCheckboxModule,
            i20.MatIconModule,
            i19.MatChipsModule,
            i11.MatSlideToggleModule,
            i14.MatTooltipModule,
            i16$1.NgxMatSelectSearchModule] });
    CreateUpdateEscalationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationModule, imports: [[
                i22.CommonModule,
                i2.FormsModule,
                i2.ReactiveFormsModule,
                i1$2.MatDialogModule,
                i9$2.MatCardModule,
                i10$1.MatFormFieldModule,
                i9$1.MatButtonModule,
                i21.MatInputModule,
                i14$1.MatSelectModule,
                i12$1.MatCheckboxModule,
                i20.MatIconModule,
                i19.MatChipsModule,
                i11.MatSlideToggleModule,
                i14.MatTooltipModule,
                i16$1.NgxMatSelectSearchModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CreateUpdateEscalationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CreateUpdateEscalationComponent
                        ],
                        imports: [
                            i22.CommonModule,
                            i2.FormsModule,
                            i2.ReactiveFormsModule,
                            i1$2.MatDialogModule,
                            i9$2.MatCardModule,
                            i10$1.MatFormFieldModule,
                            i9$1.MatButtonModule,
                            i21.MatInputModule,
                            i14$1.MatSelectModule,
                            i12$1.MatCheckboxModule,
                            i20.MatIconModule,
                            i19.MatChipsModule,
                            i11.MatSlideToggleModule,
                            i14.MatTooltipModule,
                            i16$1.NgxMatSelectSearchModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ListComponent = /** @class */ (function () {
        function ListComponent(activatedRoute, storageService, toastrService, escalationController, dialog) {
            this.activatedRoute = activatedRoute;
            this.storageService = storageService;
            this.toastrService = toastrService;
            this.escalationController = escalationController;
            this.dialog = dialog;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.MATERIAL_CONSTANT = i7.MATERIAL_CONSTANT;
            this.ButtonLabelEnum = i7.ButtonLabelEnum;
            this.AlertButtonLabelEnum = exports.AlertButtonLabelEnum;
            this.PageTitleEnum = i7.PageTitleEnum;
            this.DialogEnum = i7.DialogEnum;
            this.escalationLevelJSON = [];
            this.escalationLevelCountM = new EscalationLevelCount();
            this.escalationLevelInfoM = [new EscalationLevelInfo()];
        }
        ListComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getEscalationLevelCount();
            this.activatedRoute.params.subscribe(function (pathParam) {
                if (pathParam.alertID != null) {
                    _this.alertRuleID = pathParam.alertID;
                }
            });
            this.getAllLevelEscalation();
        };
        ListComponent.prototype.getEscalationLevelCount = function () {
            var _this = this;
            this.escalationController.getEscalationLevelCount(this.orgID).subscribe(function (escalationLevelCountRes) {
                _this.escalationLevelCountM = escalationLevelCountRes;
                if (_this.escalationLevelCountM.level && _this.escalationLevelCountM != null) {
                    _this.escalationLevelJSON = _this.getEscalationLevelJSON(_this.escalationLevelCountM);
                }
            }, function (error) {
                console.log('error in getEscalationLevelCount() -', error);
            });
        };
        ListComponent.prototype.getAllLevelEscalation = function () {
            var _this = this;
            this.escalationController.getAllLevelEscalation(this.orgID, this.alertRuleID).subscribe(function (escalationLevelRes) {
                _this.escalationLevelInfoM = escalationLevelRes;
            }, function (error) {
                console.log('error in getAllLevelEscalation() -', error);
            });
        };
        ListComponent.prototype.getEscalationLevelJSON = function (escalationLevel) {
            var levelsArray = [];
            for (var i = 1; i <= escalationLevel.level; i++) {
                levelsArray.push({
                    id: i,
                    name: "Level " + i
                });
            }
            return levelsArray;
        };
        ListComponent.prototype.isLevelConfigured = function (levelId) {
            var _a;
            return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.some(function (level) { return level.level == levelId; });
        };
        ListComponent.prototype.getCorresondingEscLevelConfig = function (levelId) {
            var _a;
            return (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(function (level) { return level.level == levelId; });
        };
        ListComponent.prototype.hasEscalationDataForPreviousLevel = function (levelId) {
            return levelId > 1 && this.hasEscalationDataForLevel(levelId - 1);
        };
        ListComponent.prototype.hasEscalationDataForLevel = function (levelId) {
            var _a;
            var escalationData = (_a = this.escalationLevelInfoM) === null || _a === void 0 ? void 0 : _a.find(function (level) { return level.level == levelId; });
            return !!escalationData;
        };
        ListComponent.prototype.createUpdateEscalationRuleDialog = function (levelID, action, escLevelConfig) {
            var _this = this;
            var dialog = this.dialog.open(CreateUpdateEscalationComponent, {
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
            dialog.afterClosed().subscribe(function (result) {
                if (result == i7.DialogEnum.SUCCESS_DR) {
                    _this.getAllLevelEscalation();
                }
            });
        };
        ListComponent.prototype.openDeleteEscRuleDialog = function (levelID, escLevelConfig) {
            var _this = this;
            var escalationRuleID = escLevelConfig.escalationRuleID;
            var dialog = this.dialog.open(i7.DialogOneComponent, {
                minWidth: '500px',
                maxWidth: '500px',
                data: {
                    type: i7.DialogOneEnum.DELETE,
                    icon: 'dangerous',
                    header: 'Delete escalation ?',
                    body: 'Escalation configuration for level ' + '<b>' + levelID + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                    buttonOne: i7.ButtonLabelEnum.CANCEL_BTN_LABEL,
                    buttonTwo: i7.ButtonLabelEnum.DELETE_BTN_LABEL
                }
            });
            dialog.afterClosed().subscribe(function (res) {
                if (res) {
                    _this.deleteEscalationRuleDialog(escalationRuleID);
                }
            });
        };
        ListComponent.prototype.deleteEscalationRuleDialog = function (escalationRuleID) {
            var _this = this;
            this.escalationController.deleteEsclationByLevelID(this.orgID, escalationRuleID).subscribe(function (deleteRes) {
                window.location.reload();
                var toast = _this.toastrService.getToastStatus(deleteRes.status);
                _this.toastrService.openToast(toast.title, deleteRes.message, toast.color);
            });
        };
        return ListComponent;
    }());
    ListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListComponent, deps: [{ token: i1__namespace$1.ActivatedRoute }, { token: i2__namespace.StorageService }, { token: i7__namespace.ToastrService }, { token: EscalationController }, { token: i1__namespace$2.MatDialog }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ListComponent, selector: "lib-list", ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Escalation Rule</div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row mb-3\" *ngFor=\"let level of escalationLevelJSON\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"border cardOverwrite\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <div class=\"card-title sectionTitle\">\n                                {{ level.name }}\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <span class=\"text-danger\" *ngIf=\"!isLevelConfigured(level.id)\">\n                                    Not configured.\n                                </span>\n                                <span *ngIf=\"isLevelConfigured(level.id)\">\n                                    <div fxLayout=\"row wrap\">\n                                        <div class=\"col-sm-3\">\n                                            <div>Escalations:</div>\n                                            <div></div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Interval</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalValue}} - {{\n                                                getCorresondingEscLevelConfig(level.id)?.intervalFrequencyName}}</div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <div>Notification frequency</div>\n                                            <div class=\"fw-bold\">{{\n                                                getCorresondingEscLevelConfig(level.id)?.notificationPrefValue}}\n                                                - {{ getCorresondingEscLevelConfig(level.id)?.notificationPrefName}}\n                                            </div>\n                                        </div>\n                                    </div>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4 centerAlignVertical justify-content-end\">\n                            <button class=\"btn btn-sm btn-success\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.CREATE)\"\n                                *ngIf=\"!isLevelConfigured(level.id) && (level.id == 1 || (hasEscalationDataForPreviousLevel(level.id) && !hasEscalationDataForLevel(level.id)))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-secondary disableButton\" matTooltipPosition=\"above\"\n                                [matTooltip]=\"'Setting up a previous level is mandatory before creating the escalation metric for the current level'\"\n                                *ngIf=\"!isLevelConfigured(level.id) && level.id != 1 && (hasEscalationDataForLevel(level.id) || !hasEscalationDataForPreviousLevel(level.id))\">\n                                {{ ButtonLabelEnum.CREATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-primary me-2\" type=\"button\"\n                                (click)=\"createUpdateEscalationRuleDialog(level.id, PageTitleEnum.UPDATE, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                            </button>\n                            <button class=\"btn btn-sm btn-danger\" type=\"button\"\n                                (click)=\"openDeleteEscRuleDialog(level.id, getCorresondingEscLevelConfig(level.id))\"\n                                *ngIf=\"isLevelConfigured(level.id)\">\n                                {{ ButtonLabelEnum.DELETE_BTN_LABEL }}\n                            </button>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".disableButton{cursor:not-allowed;background-color:#b5b2b2;border-color:#b5b2b2;color:#fff}\n"], components: [{ type: i9__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }], directives: [{ type: i22__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i22__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace$1.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-list',
                        templateUrl: './list.component.html',
                        styleUrls: ['./list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.ActivatedRoute }, { type: i2__namespace.StorageService }, { type: i7__namespace.ToastrService }, { type: EscalationController }, { type: i1__namespace$2.MatDialog }]; } });

    var routes$2 = [
        {
            path: '',
            component: ListComponent
        }
    ];
    var ListRoutingModule = /** @class */ (function () {
        function ListRoutingModule() {
        }
        return ListRoutingModule;
    }());
    ListRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ListRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    ListRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListRoutingModule, imports: [[i1$1.RouterModule.forChild(routes$2)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes$2)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    var ListModule = /** @class */ (function () {
        function ListModule() {
        }
        return ListModule;
    }());
    ListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListModule, declarations: [ListComponent], imports: [i22.CommonModule,
            ListRoutingModule,
            CreateUpdateEscalationModule,
            i9$2.MatCardModule,
            i9.MatTableModule,
            i14.MatTooltipModule,
            flexLayout.FlexLayoutModule] });
    ListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListModule, imports: [[
                i22.CommonModule,
                ListRoutingModule,
                CreateUpdateEscalationModule,
                i9$2.MatCardModule,
                i9.MatTableModule,
                i14.MatTooltipModule,
                flexLayout.FlexLayoutModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ListComponent
                        ],
                        imports: [
                            i22.CommonModule,
                            ListRoutingModule,
                            CreateUpdateEscalationModule,
                            i9$2.MatCardModule,
                            i9.MatTableModule,
                            i14.MatTooltipModule,
                            flexLayout.FlexLayoutModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var ConfiguredAlarmPageComponent = /** @class */ (function () {
        function ConfiguredAlarmPageComponent(storageService, alertController) {
            this.storageService = storageService;
            this.alertController = alertController;
            this.TABLE_CONSTANT = i7.TABLE_CONSTANT;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.AlertTypeEnum = exports.AlertTypeEnum;
            this.AlertPageLabelEnum = exports.AlertPageLabelEnum;
            this.StatusEnum = i7.StatusEnum;
            this.displayedColumn = ['id', 'name', 'associatedWith', 'ruleDescription', 'type', 'status'];
            this.resultLength = 0;
            this.dataSource = [];
            this.searchFlag = false;
            this.searchArr = [];
        }
        ConfiguredAlarmPageComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
        };
        ConfiguredAlarmPageComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            rxjs.merge(this.paginator.page, this.sort.sortChange, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(operators.startWith({}), operators.switchMap(function () {
                _this.searchArr = [];
                if (_this.searchFlag) {
                    _this.searchArr.push('name:' + _this.searchValue);
                }
                var alertType = exports.AlertTypeEnum.ALL;
                return _this.alertController.getAlertRuleByPage(_this.paginator.pageIndex, _this.paginator.pageSize, _this.sort.active, _this.sort.direction, _this.searchArr, alertType, _this.orgID).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (response) {
                if (response == null) {
                    _this.resultLength = 0;
                    return [];
                }
                _this.resultLength = response["totalCount"];
                return response["records"];
            })).subscribe(function (dataSource) {
                _this.dataSource = dataSource;
            });
        };
        ConfiguredAlarmPageComponent.prototype.searchFn = function (value) {
            this.searchFlag = true;
            this.searchValue = value;
            if (value.length == 0) {
                this.resetSearch();
            }
            else {
                this.paginator.pageIndex = 0;
            }
            this.refreshBtn.nativeElement.click();
        };
        ConfiguredAlarmPageComponent.prototype.resetSearch = function () {
            this.searchFlag = false;
            this.searchBar.searchClear();
        };
        return ConfiguredAlarmPageComponent;
    }());
    ConfiguredAlarmPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageComponent, deps: [{ token: i2__namespace.StorageService }, { token: AlertRuleController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ConfiguredAlarmPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConfiguredAlarmPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Configured Alarms</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one class=\"me-3\" #searchBar searchBy=\"name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n            </div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"overflowX customScrollBar\">\n        <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n            matSortDirection=\"asc\" matSortDisableClear>\n\n            <ng-container matColumnDef=\"id\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                    ID\n                </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    {{ row['id'] ? row['id']: COMMON_CONSTANT.HYPHEN }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"name\">\n                <th class=\"px-3 columnWidth2\" mat-header-cell *matHeaderCellDef> Name </th>\n                <td class=\"px-3 columnWidth2\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['name']?.length>25? row['name']: ''\" matTooltipPosition=\"above\"\n                    matTooltipClass=\"nameTooltip\">\n                    {{ (row['name'] ? row['name']: COMMON_CONSTANT.HYPHEN) | dotdotdot:25}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"associatedWith\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['associatedWith']?.length>30? row['associatedWith']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['associatedWith'] ? row['associatedWith']: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ruleDescription\">\n                <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                    [matTooltip]=\"row?.['ruleDescription']?.length>30? row['ruleDescription']: ''\"\n                    matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                    {{ (row['ruleDescription'] ? row['ruleDescription']: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"type\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Type </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <span class=\"badge rounded-pill bg-light text-dark\" [ngSwitch]=\"row?.type\">\n                        <ng-container *ngSwitchCase=\"AlertTypeEnum.INSTANTANEOUS\">{{\n                            AlertPageLabelEnum.INSTANTANEOUS_LABEL\n                            }}</ng-container>\n                        <ng-container *ngSwitchCase=\"AlertTypeEnum.PERIODIC\">{{ AlertPageLabelEnum.PERIODIC_LABEL\n                            }}</ng-container>\n                    </span>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n                <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                    <span class=\"badge rounded-pill\" [ngClass]=\"{'bg-success': row?.status, 'bg-danger': !row?.status}\">\n                        {{ row?.status ? StatusEnum.ACTIVE_STATUS : StatusEnum.INACTIVE_STATUS }}\n                    </span>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n            <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n            <tr class=\"mat-row\" *matNoDataRow>\n                <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                    {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n        [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n    </mat-paginator>\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:250px}.columnWidth3{min-width:300px}.badge{text-transform:none}\n"], components: [{ type: i7__namespace$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i9__namespace.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10__namespace.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i9__namespace.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9__namespace.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12__namespace.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i10__namespace.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9__namespace.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9__namespace.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9__namespace.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9__namespace.MatCellDef, selector: "[matCellDef]" }, { type: i9__namespace.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i22__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i22__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i22__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9__namespace.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9__namespace.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9__namespace.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7__namespace$1.EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i2__namespace.StorageService }, { type: AlertRuleController }]; }, propDecorators: { sort: [{
                    type: i0.ViewChild,
                    args: ['sort']
                }], paginator: [{
                    type: i0.ViewChild,
                    args: ['paginator']
                }], refreshBtn: [{
                    type: i0.ViewChild,
                    args: ['refreshBtn']
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }] } });

    var routes$1 = [
        {
            path: '',
            component: ConfiguredAlarmPageComponent
        }
    ];
    var ConfiguredAlarmPageRoutingModule = /** @class */ (function () {
        function ConfiguredAlarmPageRoutingModule() {
        }
        return ConfiguredAlarmPageRoutingModule;
    }());
    ConfiguredAlarmPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConfiguredAlarmPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    ConfiguredAlarmPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageRoutingModule, imports: [[i1$1.RouterModule.forChild(routes$1)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes$1)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    var ConfiguredAlarmPageModule = /** @class */ (function () {
        function ConfiguredAlarmPageModule() {
        }
        return ConfiguredAlarmPageModule;
    }());
    ConfiguredAlarmPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ConfiguredAlarmPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageModule, declarations: [ConfiguredAlarmPageComponent], imports: [i22.CommonModule,
            ConfiguredAlarmPageRoutingModule,
            i9.MatTableModule,
            i12.MatPaginatorModule,
            i10.MatSortModule,
            i14.MatTooltipModule,
            i7.SearchBarOneModule,
            i7.EllipsisPipeModule] });
    ConfiguredAlarmPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageModule, imports: [[
                i22.CommonModule,
                ConfiguredAlarmPageRoutingModule,
                i9.MatTableModule,
                i12.MatPaginatorModule,
                i10.MatSortModule,
                i14.MatTooltipModule,
                i7.SearchBarOneModule,
                i7.EllipsisPipeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ConfiguredAlarmPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ConfiguredAlarmPageComponent
                        ],
                        imports: [
                            i22.CommonModule,
                            ConfiguredAlarmPageRoutingModule,
                            i9.MatTableModule,
                            i12.MatPaginatorModule,
                            i10.MatSortModule,
                            i14.MatTooltipModule,
                            i7.SearchBarOneModule,
                            i7.EllipsisPipeModule
                        ]
                    }]
            }] });

    // /tsc-library/
    var GeneratedAlarmPageComponent = /** @class */ (function () {
        function GeneratedAlarmPageComponent(dateService, storageService, organizationService, alertController) {
            this.dateService = dateService;
            this.storageService = storageService;
            this.organizationService = organizationService;
            this.alertController = alertController;
            this.TABLE_CONSTANT = i7.TABLE_CONSTANT;
            this.COMMON_CONSTANT = i7.COMMON_CONSTANT;
            this.StatusEnum = i7.StatusEnum;
            this.AlertStatusEnum = exports.AlertStatusEnum;
            this.AlertTypeEnum = exports.AlertTypeEnum;
            this.AlertPageLabelEnum = exports.AlertPageLabelEnum;
            this.AlertStatusLabelEnum = exports.AlertStatusLabelEnum;
            this.MaterialFormFieldAppearance = i7.MaterialFormFieldAppearance;
            this.displayedColumn = ['id', 'alertName', 'parameterLabel', 'associatedWith', 'description', 'time', 'type', 'status'];
            this.resultLength = 0;
            this.dataSource = [];
            this.searchFlag = false;
            this.searchArr = [];
            this.timeZone = null;
            this.today = new Date();
            this.selectedMonthFC = new i2.FormControl(moment__namespace().format('YYYY-MM'));
            this.startDateFC = new i2.FormControl();
            this.endDateFC = new i2.FormControl();
            this.statusFC = new i2.FormControl(exports.AlertStatusEnum.ACTIVE, i2.Validators.required);
        }
        GeneratedAlarmPageComponent.prototype.ngOnInit = function () {
            this.orgID = this.storageService.getStorage('currentOrgID');
            this.getTimezone();
        };
        GeneratedAlarmPageComponent.prototype.getTimezone = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.organizationService.getOrgTimezone()];
                        case 1:
                            _a.timeZone = (_b.sent());
                            this.startDateFC.patchValue(moment__namespace().startOf('month').tz(this.timeZone).format());
                            this.endDateFC.patchValue(moment__namespace().add(1, 'months').startOf('month').tz(this.timeZone).format());
                            if (this.statusFC.value == exports.AlertStatusEnum.ACTIVE) {
                                this.getActiveAlertByPage();
                            }
                            else {
                                this.getResolvedAlertByPage();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        GeneratedAlarmPageComponent.prototype.monthSelectedHandler = function (normalizedMonth, datepicker) {
            var duration = this.dateService.monthSelectedHandler(normalizedMonth, datepicker);
            this.selectedMonthFC.setValue(duration);
            this.startDateFC.patchValue(moment__namespace(normalizedMonth).startOf('month').tz(this.timeZone).format());
            this.endDateFC.patchValue(moment__namespace(normalizedMonth).add(1, 'months').startOf('month').tz(this.timeZone).format());
            if (this.statusFC.value == exports.AlertStatusEnum.ACTIVE) {
                this.getActiveAlertByPage();
            }
            else {
                this.getResolvedAlertByPage();
            }
        };
        GeneratedAlarmPageComponent.prototype.getActiveAlertByPage = function () {
            var _this = this;
            rxjs.merge(this.paginator.page, this.sort.sortChange, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(operators.startWith({}), operators.filter(function () { return _this.statusFC.value == exports.AlertStatusEnum.ACTIVE; }), operators.switchMap(function () {
                var requestBody = {};
                if (_this.searchFlag) {
                    requestBody['search'] = _this.searchValue;
                }
                requestBody['pageNo'] = _this.paginator.pageIndex;
                requestBody['pageSize'] = _this.paginator.pageSize;
                requestBody['sortBy'] = _this.sort.active;
                requestBody['orderBy'] = _this.sort.direction;
                requestBody['startDate'] = _this.startDateFC.value;
                requestBody['endDate'] = _this.endDateFC.value;
                return _this.alertController.getActiveAlertByPage(_this.orgID, requestBody).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (response) {
                if (response == null) {
                    _this.resultLength = 0;
                    return [];
                }
                _this.resultLength = response["totalCount"];
                return response["records"];
            })).subscribe(function (dataSource) {
                _this.dataSource = dataSource;
            });
        };
        GeneratedAlarmPageComponent.prototype.getResolvedAlertByPage = function () {
            var _this = this;
            rxjs.merge(this.paginator.page, this.sort.sortChange, rxjs.fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(operators.startWith({}), operators.filter(function () { return _this.statusFC.value == exports.AlertStatusEnum.RESOLVED; }), operators.switchMap(function () {
                var requestBody = {};
                if (_this.searchFlag) {
                    requestBody['search'] = _this.searchValue;
                }
                requestBody['pageNo'] = _this.paginator.pageIndex;
                requestBody['pageSize'] = _this.paginator.pageSize;
                requestBody['sortBy'] = _this.sort.active;
                requestBody['orderBy'] = _this.sort.direction;
                requestBody['startDate'] = _this.startDateFC.value;
                requestBody['endDate'] = _this.endDateFC.value;
                return _this.alertController.getResolvedAlertByPage(_this.orgID, requestBody).pipe(operators.catchError(function () { return rxjs.of(null); }));
            }), operators.map(function (response) {
                if (response == null) {
                    _this.resultLength = 0;
                    return [];
                }
                _this.resultLength = response["totalCount"];
                return response["records"];
            })).subscribe(function (dataSource) {
                _this.dataSource = dataSource;
            });
        };
        GeneratedAlarmPageComponent.prototype.statusChange = function () {
            var alertStatus;
            switch (this.statusFC.value) {
                case exports.AlertStatusEnum.ACTIVE:
                    alertStatus = exports.AlertStatusEnum.ACTIVE;
                    this.getActiveAlertByPage();
                    break;
                case exports.AlertStatusEnum.RESOLVED:
                    alertStatus = exports.AlertStatusEnum.RESOLVED;
                    this.getResolvedAlertByPage();
                    break;
                default:
                    console.log("undefined case encountered!");
            }
            this.statusFC.patchValue(alertStatus);
        };
        GeneratedAlarmPageComponent.prototype.searchFn = function (value) {
            this.searchFlag = true;
            this.searchValue = value;
            if (value.length == 0) {
                this.resetSearch();
            }
            else {
                this.paginator.pageIndex = 0;
            }
            this.refreshBtn.nativeElement.click();
        };
        GeneratedAlarmPageComponent.prototype.resetSearch = function () {
            this.searchFlag = false;
            this.searchBar.searchClear();
        };
        GeneratedAlarmPageComponent.prototype.getTimeLabel = function (dateTime) {
            return dateTime ? moment__namespace.tz(dateTime, this.timeZone).fromNow() : i7.COMMON_CONSTANT.HYPHEN;
        };
        return GeneratedAlarmPageComponent;
    }());
    GeneratedAlarmPageComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageComponent, deps: [{ token: i1__namespace$3.DateService }, { token: i2__namespace.StorageService }, { token: i3__namespace$1.OrganizationService }, { token: AlertRuleController }], target: i0__namespace.ɵɵFactoryTarget.Component });
    GeneratedAlarmPageComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GeneratedAlarmPageComponent, selector: "lib-page", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }, { propertyName: "paginator", first: true, predicate: ["paginator"], descendants: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Generated Alarms</div>\n        </div>\n    </div>\n\n    <button #refreshBtn class=\"d-none\"></button>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-2\">\n                <mat-form-field id=\"monthlyField\" appMonthYearFormat (click)=\"dateService.openDatepickerOnClick(monthly)\"\n                    (keydown.arrowdown)=\"dateService.openDatepickerOnClick(monthly)\"\n                    (keydown.enter)=\"dateService.openDatepickerOnClick(monthly)\" class=\"matFieldWidth100 cursorPointer\"\n                    [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                    <mat-label class=\"formLabel\">Select month</mat-label>\n                    <input matInput class=\"noFocus\" [matDatepicker]=\"monthly\" [formControl]=\"selectedMonthFC\" [max]=\"today\" readonly />\n                    <mat-datepicker-toggle matSuffix class=\"fs-5\" [for]=\"monthly\"></mat-datepicker-toggle>\n                    <mat-datepicker panelClass=\"monthPicker\" #monthly startView=\"year\"\n                        (monthSelected)=\"monthSelectedHandler($event, monthly)\" (closed)=\"dateService.takeFocusAway('monthlyField')\">\n                    </mat-datepicker>\n                </mat-form-field>\n            </div>\n            <div class=\"col-sm-10\">\n                <div class=\"float-end me-1 mt-2\">\n                    <mat-button-toggle-group class=\"matBtnFilter\" [formControl]=\"statusFC\" (change)=\"statusChange()\">\n                        <mat-button-toggle value=\"{{ AlertStatusEnum.ACTIVE }}\">\n                            {{ AlertStatusLabelEnum.ACTIVE_LABEL }}\n                        </mat-button-toggle>\n                        <mat-button-toggle value=\"{{ AlertStatusEnum.RESOLVED }}\">\n                            {{ AlertStatusLabelEnum.RESOLVED_LABEL }}\n                        </mat-button-toggle>\n                    </mat-button-toggle-group>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-search-bar-one class=\"me-1 float-end\" #searchBar searchBy=\"parameter name\" (emitSearch)=\"searchFn($event)\">\n                </lib-search-bar-one>\n            </div>\n        </div>\n\n        <div class=\"overflowX customScrollBar\">\n            <table class=\"w-100\" mat-table [dataSource]=\"dataSource\" #sort=\"matSort\" matSort matSortActive=\"id\"\n                matSortDirection=\"asc\" matSortDisableClear>\n\n                <ng-container matColumnDef=\"id\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n                        ID\n                    </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        {{ row.id ? row.id: COMMON_CONSTANT.HYPHEN }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"alertName\">\n                    <th class=\"px-3 columnWidth4\" mat-header-cell *matHeaderCellDef> Name </th>\n                    <td class=\"px-3 columnWidth4\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['alertName']?.length>15? row['alertName']: ''\" matTooltipPosition=\"above\"\n                        matTooltipClass=\"nameTooltip\">\n                        {{ (row.alertName ? row.alertName: COMMON_CONSTANT.HYPHEN) | dotdotdot:15}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"parameterLabel\">\n                    <th class=\"px-3 columnWidth4\" mat-header-cell *matHeaderCellDef>\n                        Parameter name\n                    </th>\n                    <td class=\"px-3 columnWidth4\" mat-cell *matCellDef=\"let row\">\n                        {{ row.parameterLabel ? row.parameterLabel: COMMON_CONSTANT.HYPHEN }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"associatedWith\">\n                    <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Associated with </th>\n                    <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['associatedWith']?.length>30? row['associatedWith']: ''\"\n                        matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                        {{ (row.associatedWith ? row.associatedWith: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"description\">\n                    <th class=\"px-3 columnWidth3\" mat-header-cell *matHeaderCellDef> Rule </th>\n                    <td class=\"px-3 columnWidth3\" mat-cell *matCellDef=\"let row\"\n                        [matTooltip]=\"row?.['description']?.length>30? row['description']: ''\"\n                        matTooltipPosition=\"above\" matTooltipClass=\"nameTooltip\">\n                        {{ (row.description ? row.description: COMMON_CONSTANT.HYPHEN) | dotdotdot:30}}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"time\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef>\n                        Time\n                    </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        {{ getTimeLabel(row.time) }}\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"type\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Type </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        <span class=\"badge rounded-pill bg-light text-dark\" [ngSwitch]=\"row?.type\">\n                            <ng-container *ngSwitchCase=\"AlertTypeEnum.INSTANTANEOUS\">{{\n                                AlertPageLabelEnum.INSTANTANEOUS_LABEL\n                                }}</ng-container>\n                            <ng-container *ngSwitchCase=\"AlertTypeEnum.PERIODIC\">{{ AlertPageLabelEnum.PERIODIC_LABEL\n                                }}</ng-container>\n                        </span>\n                    </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"status\">\n                    <th class=\"px-3 columnWidth1\" mat-header-cell *matHeaderCellDef> Status </th>\n                    <td class=\"px-3 columnWidth1\" mat-cell *matCellDef=\"let row\">\n                        <span class=\"badge rounded-pill\"\n                            [ngClass]=\"{'bg-success': row?.status, 'bg-danger': !row?.status}\">\n                            {{ row?.status ? StatusEnum.ACTIVE_STATUS : StatusEnum.INACTIVE_STATUS }}\n                        </span>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumn\"></tr>\n                <tr mat-row *matRowDef=\"let task; columns: displayedColumn;\"></tr>\n\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumn.length\">\n                        {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <mat-paginator #paginator class=\"roundedBorder\" showFirstLastButtons [length]=\"resultLength\"\n            [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\" [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\">\n        </mat-paginator>\n    </div>\n\n</div>", styles: [".columnWidth1{min-width:120px}.columnWidth2{min-width:250px}.columnWidth3{min-width:300px}.columnWidth4{min-width:150px}.matBtnFilter mat-button-toggle{width:80px}.badge{text-transform:none}\n"], components: [{ type: i10__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i6__namespace.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["tabIndex", "disabled", "for", "aria-label", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i6__namespace.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i7__namespace$2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-labelledby", "tabIndex", "appearance", "checked", "disabled", "id", "name", "aria-label", "value"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i7__namespace$1.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i9__namespace.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i10__namespace.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "arrowPosition", "sortActionDescription", "disableClear", "mat-sort-header", "start"], exportAs: ["matSortHeader"] }, { type: i9__namespace.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9__namespace.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i12__namespace.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i1__namespace$3.MonthYearFormatDirective, selector: "[appMonthYearFormat]" }, { type: i10__namespace$1.MatLabel, selector: "mat-label" }, { type: i21__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i6__namespace.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i2__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace$1.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i10__namespace$1.MatSuffix, selector: "[matSuffix]" }, { type: i7__namespace$2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i10__namespace.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortActive"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i9__namespace.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9__namespace.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9__namespace.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9__namespace.MatCellDef, selector: "[matCellDef]" }, { type: i9__namespace.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i14__namespace.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i22__namespace.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i22__namespace.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i22__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9__namespace.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9__namespace.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9__namespace.MatNoDataRow, selector: "ng-template[matNoDataRow]" }], pipes: { "dotdotdot": i7__namespace$1.EllipsisPipeService } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-page',
                        templateUrl: './page.component.html',
                        styleUrls: ['./page.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$3.DateService }, { type: i2__namespace.StorageService }, { type: i3__namespace$1.OrganizationService }, { type: AlertRuleController }]; }, propDecorators: { sort: [{
                    type: i0.ViewChild,
                    args: ['sort']
                }], paginator: [{
                    type: i0.ViewChild,
                    args: ['paginator']
                }], refreshBtn: [{
                    type: i0.ViewChild,
                    args: ['refreshBtn']
                }], searchBar: [{
                    type: i0.ViewChild,
                    args: ['searchBar']
                }] } });

    var routes = [
        {
            path: '',
            component: GeneratedAlarmPageComponent
        }
    ];
    var GeneratedAlarmPageRoutingModule = /** @class */ (function () {
        function GeneratedAlarmPageRoutingModule() {
        }
        return GeneratedAlarmPageRoutingModule;
    }());
    GeneratedAlarmPageRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    GeneratedAlarmPageRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageRoutingModule, imports: [i1__namespace$1.RouterModule], exports: [i1$1.RouterModule] });
    GeneratedAlarmPageRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageRoutingModule, imports: [[i1$1.RouterModule.forChild(routes)], i1$1.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.RouterModule.forChild(routes)],
                        exports: [i1$1.RouterModule]
                    }]
            }] });

    var GeneratedAlarmPageModule = /** @class */ (function () {
        function GeneratedAlarmPageModule() {
        }
        return GeneratedAlarmPageModule;
    }());
    GeneratedAlarmPageModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    GeneratedAlarmPageModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageModule, declarations: [GeneratedAlarmPageComponent], imports: [i22.CommonModule,
            GeneratedAlarmPageRoutingModule,
            i2.ReactiveFormsModule,
            i1$3.DateMonthYearFormatModule,
            i21.MatInputModule,
            i15.MatNativeDateModule,
            i7$2.MatButtonToggleModule,
            i6.MatDatepickerModule,
            i9.MatTableModule,
            i12.MatPaginatorModule,
            i10.MatSortModule,
            i14.MatTooltipModule,
            i7.SearchBarOneModule,
            i7.EllipsisPipeModule] });
    GeneratedAlarmPageModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageModule, imports: [[
                i22.CommonModule,
                GeneratedAlarmPageRoutingModule,
                i2.ReactiveFormsModule,
                i1$3.DateMonthYearFormatModule,
                i21.MatInputModule,
                i15.MatNativeDateModule,
                i7$2.MatButtonToggleModule,
                i6.MatDatepickerModule,
                i9.MatTableModule,
                i12.MatPaginatorModule,
                i10.MatSortModule,
                i14.MatTooltipModule,
                i7.SearchBarOneModule,
                i7.EllipsisPipeModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GeneratedAlarmPageModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            GeneratedAlarmPageComponent
                        ],
                        imports: [
                            i22.CommonModule,
                            GeneratedAlarmPageRoutingModule,
                            i2.ReactiveFormsModule,
                            i1$3.DateMonthYearFormatModule,
                            i21.MatInputModule,
                            i15.MatNativeDateModule,
                            i7$2.MatButtonToggleModule,
                            i6.MatDatepickerModule,
                            i9.MatTableModule,
                            i12.MatPaginatorModule,
                            i10.MatSortModule,
                            i14.MatTooltipModule,
                            i7.SearchBarOneModule,
                            i7.EllipsisPipeModule
                        ]
                    }]
            }] });

    /*
     * Public API Surface of alerts
    */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlarmPage = AlarmPage;
    exports.AlertPage = AlertPage;
    exports.AlertRule = AlertRule;
    exports.AlertRuleController = AlertRuleController;
    exports.AlertsComponent = AlertsComponent;
    exports.AlertsModule = AlertsModule;
    exports.AlertsService = AlertsService;
    exports.ConfiguredAlarmPageComponent = ConfiguredAlarmPageComponent;
    exports.ConfiguredAlarmPageModule = ConfiguredAlarmPageModule;
    exports.CreateUpdateComponent = CreateUpdateComponent;
    exports.CreateUpdateEscalationComponent = CreateUpdateEscalationComponent;
    exports.CreateUpdateEscalationModule = CreateUpdateEscalationModule;
    exports.CreateUpdateModule = CreateUpdateModule;
    exports.EscalationController = EscalationController;
    exports.EscalationLevelCount = EscalationLevelCount;
    exports.EscalationLevelInfo = EscalationLevelInfo;
    exports.EscalationPermission = EscalationPermission;
    exports.GeneratedAlarmPageComponent = GeneratedAlarmPageComponent;
    exports.GeneratedAlarmPageModule = GeneratedAlarmPageModule;
    exports.ListComponent = ListComponent;
    exports.ListModule = ListModule;
    exports.PageComponent = PageComponent;
    exports.PageModule = PageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library-alerts.umd.js.map
