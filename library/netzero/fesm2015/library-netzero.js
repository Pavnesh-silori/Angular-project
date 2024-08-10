import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Inject, Optional, ViewChild } from '@angular/core';
import * as i14 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i9 from '@library/tsc-common';
import { FormAction, ComponentSourceEnum, FormErrorEnum, ButtonLabelEnum, PageTitleEnum, MaterialFormFieldAppearance, InvalidForm, DialogEnum, COMMON_CONSTANT, TABLE_CONSTANT, BulkUploadDialogLib, DialogOneComponent, DialogOneEnum, SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
import { __awaiter } from 'tslib';
import * as i1 from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import * as i11$1 from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as i3 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import * as i9$1 from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import * as i10$1 from '@angular/material/paginator';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import * as i10 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import * as i15 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i12 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i13 from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import * as i11 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { forkJoin, merge, fromEvent, of } from 'rxjs';
import { isEqual } from 'lodash';
import * as i5 from '@library/unit-service';
import { UnitTypeKeyID } from '@library/unit-service';
import * as i4 from '@library/toastr-service';
import { ToastrColor, ToastrTitle } from '@library/toastr-service';
import { ApplicationKeyID } from '@library/application-service';
import * as i8 from '@library/storage-service';
import * as i8$1 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class NetzeroService {
    constructor() { }
}
NetzeroService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NetzeroService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NetzeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
NetzeroComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NetzeroComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: NetzeroComponent, selector: "lib-netzero", ngImport: i0, template: `
    <p>
      netzero works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-netzero',
                    template: `
    <p>
      netzero works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class NetzeroModule {
    static forRoot(environment, constant) {
        return {
            ngModule: NetzeroModule,
            providers: [
                { provide: 'environment', useValue: environment },
                { provide: 'constant', useValue: constant }
            ]
        };
    }
}
NetzeroModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NetzeroModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, declarations: [NetzeroComponent], exports: [NetzeroComponent] });
NetzeroModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, decorators: [{
            type: NgModule,
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

var VehicleTypeEnum;
(function (VehicleTypeEnum) {
    VehicleTypeEnum["ON_ROAD"] = "on-road";
    VehicleTypeEnum["NON_ROAD"] = "non-road";
})(VehicleTypeEnum || (VehicleTypeEnum = {}));

class VehicleType {
}
class VehicleCategory {
}
class EngineStroke {
}
;
class Vehicle {
}
class VehiclePage {
}
class VehicleByType {
}

const routes$2 = [
    {
        path: 'create',
        loadChildren: () => Promise.resolve().then(function () { return createUpdate_module; }).then(m => m.CreateUpdateModule),
        data: { action: FormAction.CREATE, source: ComponentSourceEnum.PAGE }
    },
    {
        path: ':vehicleID/update',
        loadChildren: () => Promise.resolve().then(function () { return createUpdate_module; }).then(m => m.CreateUpdateModule),
        data: { action: FormAction.UPDATE, source: ComponentSourceEnum.PAGE }
    },
    {
        path: 'page',
        loadChildren: () => Promise.resolve().then(function () { return page_module; }).then(m => m.PageModule)
    }
];
class VehicleRoutingModule {
}
VehicleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VehicleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, imports: [i2.RouterModule], exports: [RouterModule] });
VehicleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, imports: [[RouterModule.forChild(routes$2)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$2)],
                    exports: [RouterModule]
                }]
        }] });

class VehicleModule {
}
VehicleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VehicleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleModule, imports: [CommonModule,
        VehicleRoutingModule] });
VehicleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleModule, imports: [[
            CommonModule,
            VehicleRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        VehicleRoutingModule,
                    ]
                }]
        }] });

class VehicleController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createVehicle(orgID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles`, value);
    }
    createVehicleForEmployee(orgID, employeeID, value) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgID}/employees/${employeeID}/vehicles`, value);
    }
    getVehicleByPage(pageNo, pazeSize, orgId, filterArr) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo + 1);
        params = params.append('pageSize', pazeSize);
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles`, { params: params });
    }
    getVehicleByID(orgID, vehicleID) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/${vehicleID}`);
    }
    updateVehicle(orgID, value, vehicleID) {
        return this.http.patch(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/${vehicleID}`, value);
    }
    vehicleExist(orgID, vehicleNumber) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/exit-vehicle/${vehicleNumber}`);
    }
    getVehicleType() {
        return this.http.get(`${this.environment.COMMON_API_URL}vehicle-type`);
    }
    getVehicleCategory() {
        return this.http.get(`${this.environment.COMMON_API_URL}vehicle-category`);
    }
    getEngineStroke() {
        return this.http.get(`${this.environment.COMMON_API_URL}engine-stroke`);
    }
    vehicleBulkUpload(orgId, file) {
        return this.http.post(`${this.environment.COMMON_API_URL}organizations/${orgId}/vehicles/bulk-upload`, file);
    }
    getVehicleByTypeID(orgID, vehicleTypeID) {
        let params = new HttpParams();
        params = params.append('vehicleTypeId', vehicleTypeID);
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`, { params: params });
    }
    getAllVehicle(orgID) {
        return this.http.get(`${this.environment.COMMON_API_URL}organizations/${orgID}/vehicles/all`);
    }
}
VehicleController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
VehicleController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class VehicleService {
    constructor(vehicleController) {
        this.vehicleController = vehicleController;
    }
    getVehicleType() {
        return __awaiter(this, void 0, void 0, function* () {
            let vehicleTypeM;
            try {
                vehicleTypeM = yield this.vehicleController.getVehicleType().toPromise();
                if (vehicleTypeM) {
                    return vehicleTypeM;
                }
                else {
                    return [new VehicleType()];
                }
            }
            catch (error) {
                console.error('Error in getVehicleType -', error);
                return [new VehicleType()];
            }
        });
    }
    getVehicleCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            let vehicleCategoryM;
            try {
                vehicleCategoryM = yield this.vehicleController.getVehicleCategory().toPromise();
                if (vehicleCategoryM) {
                    return vehicleCategoryM;
                }
                else {
                    return [new VehicleCategory()];
                }
            }
            catch (error) {
                console.error('Error in getVehicleCategory -', error);
                return [new VehicleCategory()];
            }
        });
    }
    getEngineStroke() {
        return __awaiter(this, void 0, void 0, function* () {
            let engineStrokeM;
            try {
                engineStrokeM = yield this.vehicleController.getEngineStroke().toPromise();
                if (engineStrokeM) {
                    return engineStrokeM;
                }
                else {
                    return [new EngineStroke()];
                }
            }
            catch (error) {
                console.error('Error in getEngineStroke -', error);
                return [new EngineStroke()];
            }
        });
    }
    getVehicleByTypeID(currentOrgID, VechileTypeID) {
        return __awaiter(this, void 0, void 0, function* () {
            let vechileTypeM;
            let vechileType = [new VehicleByType()];
            try {
                vechileTypeM = yield this.vehicleController.getVehicleByTypeID(currentOrgID, VechileTypeID).toPromise();
                if (vechileTypeM) {
                    return vechileTypeM;
                }
                else {
                    return vechileType;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return vechileType;
            }
        });
    }
    getAllVehicle(currentOrgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let vechileTypeM;
            let vechileType = [new VehicleByType()];
            try {
                vechileTypeM = yield this.vehicleController.getAllVehicle(currentOrgID).toPromise();
                if (vechileTypeM) {
                    return vechileTypeM;
                }
                else {
                    return vechileType;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return vechileType;
            }
        });
    }
}
VehicleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, deps: [{ token: VehicleController }], target: i0.ɵɵFactoryTarget.Injectable });
VehicleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: VehicleController }]; } });

var PagePathEnum;
(function (PagePathEnum) {
    PagePathEnum["VEHICLE_LIST_PAGE"] = "/source/vehicle1/page";
})(PagePathEnum || (PagePathEnum = {}));

// /tsc-library/
class CreateUpdateComponent {
    constructor(dialogData, dialogRef, activatedRoute, router, formBuilder, toastrService, unitService, vehicleController, vehicleService, storageService, tSCCommonService, constant) {
        this.dialogData = dialogData;
        this.dialogRef = dialogRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.unitService = unitService;
        this.vehicleController = vehicleController;
        this.vehicleService = vehicleService;
        this.storageService = storageService;
        this.tSCCommonService = tSCCommonService;
        this.constant = constant;
        this.FormAction = FormAction;
        this.FormErrorEnum = FormErrorEnum;
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.PageTitleEnum = PageTitleEnum;
        this.ComponentSourceEnum = ComponentSourceEnum;
        this.VehicleTypeEnum = VehicleTypeEnum;
        this.MaterialFormFieldAppearance = MaterialFormFieldAppearance;
        this.isEngineStroke = false;
        this.isEqual = true;
        this.errorHandling = (control, error) => {
            return this.vehicleFG.get(control).hasError(error);
        };
    }
    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.userID = this.storageService.getStorage('userID');
        this.vehicleFGInit();
        if (this.dialogData) {
            this.action = this.dialogData.action;
            this.source = this.dialogData.source;
            if (this.action == FormAction.UPDATE) {
                this.vehicleID = this.dialogData.vehicleID;
            }
        }
        else {
            this.activatedRoute.data.subscribe(data => {
                this.action = data.action;
                this.source = data.source;
            });
            this.activatedRoute.params.subscribe(params => {
                if (this.action == FormAction.UPDATE) {
                    this.vehicleID = params.vehicleID;
                }
            });
        }
        forkJoin([this.getVehicleType(), this.getVehicleCategory(), this.getEngineStroke(), this.getUnit()]).subscribe(([]) => {
            if (this.action == FormAction.UPDATE) {
                this.getVehicleByID();
            }
        }, error => {
            console.error('error in forkJoin -', error);
        });
    }
    vehicleFGInit() {
        this.vehicleFG = this.formBuilder.group({
            vehicleName: [, Validators.required],
            vehicleTypeID: [, Validators.required],
            vehicleNumber: [, Validators.required],
            engineStrokeId: [],
            odoMeterUnitID: [, Validators.required],
            vehicleCategoryID: [, Validators.required],
            year: [, Validators.required]
        });
    }
    getVehicleType() {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicleTypeM = (yield this.vehicleService.getVehicleType());
        });
    }
    getVehicleCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicleCategoryM = (yield this.vehicleService.getVehicleCategory());
            this.vehicleCategoryOR = this.vehicleCategoryM.filter(item => item['vehicleType']['keyID'] == VehicleTypeEnum.ON_ROAD);
            this.vehicleCategoryNR = this.vehicleCategoryM.filter(item => item['vehicleType']['keyID'] == VehicleTypeEnum.NON_ROAD);
        });
    }
    getEngineStroke() {
        return __awaiter(this, void 0, void 0, function* () {
            this.engineStrokeM = (yield this.vehicleService.getEngineStroke());
        });
    }
    getUnit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.unitM = (yield this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    onVehicleTypeChange(vehicleType) {
        this.vehicleFG.patchValue({
            vehicleCategoryID: null,
            engineStrokeId: null
        });
        if (vehicleType.keyID == VehicleTypeEnum.ON_ROAD) {
            this.isEngineStroke = false;
            this.vehicleCategory = this.vehicleCategoryOR;
        }
        else {
            this.isEngineStroke = true;
            this.vehicleCategory = this.vehicleCategoryNR;
        }
    }
    vehicleExist() {
        let vehicleNumber = this.vehicleFG.get('vehicleNumber').value;
        this.vehicleController.vehicleExist(this.rootOrgID, vehicleNumber).subscribe((res) => {
            if (res.status == false) {
                if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.NETZERO_KEY_ID) {
                    this.createVehicle();
                }
                else if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.EMPLOYEE_KEY_ID) {
                    this.createVehicleForEmployee();
                }
            }
            else {
                let toast;
                toast = this.toastrService.getToastStatus(res.status);
                this.toastrService.openToast(toast.title, res.message, toast.color);
            }
        });
    }
    vechileSubmit() {
        if (this.vehicleFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        else {
            if (this.action == FormAction.CREATE) {
                this.vehicleExist();
            }
            else if (this.action == FormAction.UPDATE) {
                this.updateVehicle();
            }
        }
    }
    createVehicle() {
        this.vehicleController.createVehicle(this.rootOrgID, this.vehicleFG.value).subscribe((res) => {
            let toast;
            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in createVehicle -', error);
        });
    }
    createVehicleForEmployee() {
        this.vehicleController.createVehicleForEmployee(this.rootOrgID, this.userID, this.vehicleFG.value).subscribe((res) => {
            let toast;
            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in createVehicleForEmployee -', error);
        });
    }
    getVehicleByID() {
        this.vehicleController.getVehicleByID(this.rootOrgID, this.vehicleID).subscribe((res) => {
            this.vehicle = res;
            this.patchVehicle();
        }, error => {
            console.log(error);
        });
    }
    patchVehicle() {
        this.onVehicleTypeChange(this.vehicle['vehicleType']);
        this.vehicleFG.patchValue({
            vehicleName: this.vehicle['vehicleName'],
            vehicleTypeID: this.vehicle['vehicleType'].id,
            vehicleNumber: this.vehicle['vehicleNumber'],
            odoMeterUnitID: this.vehicle['odoMeterUnit'].unitID,
            vehicleCategoryID: this.vehicle['vehicleCategory'].id,
            year: this.vehicle['year']
        });
        if (this.vehicle['engineStroke'] !== null) {
            this.isEngineStroke = true;
            this.vehicleFG.patchValue({
                engineStrokeId: this.vehicle['engineStroke'].id
            });
        }
        this.intialObject = this.vehicleFG.value;
        this.vehicleFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.vehicleFG.value);
        });
    }
    updateVehicle() {
        this.vehicleController.updateVehicle(this.rootOrgID, this.vehicleFG.value, this.vehicleID).subscribe((res) => {
            let toast;
            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in updateVehicle -', error);
        });
    }
    createUpdateVehiclePostAction(res) {
        if (this.source == ComponentSourceEnum.PAGE) {
            this.router.navigate([PagePathEnum.VEHICLE_LIST_PAGE]);
        }
        else if (this.source == ComponentSourceEnum.DIALOG) {
            let result = {
                status: DialogEnum.SUCCESS_DR,
                res
            };
            this.dialogRef.close(result);
        }
    }
    cancelButtonClick() {
        if (this.source == ComponentSourceEnum.PAGE) {
            this.tSCCommonService.back();
        }
        else if (this.source == ComponentSourceEnum.DIALOG) {
            this.dialogRef.close();
        }
    }
}
CreateUpdateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateComponent, deps: [{ token: MAT_DIALOG_DATA, optional: true }, { token: i1$1.MatDialogRef, optional: true }, { token: i2.ActivatedRoute }, { token: i2.Router }, { token: i3.FormBuilder }, { token: i4.ToastrService }, { token: i5.UnitService }, { token: VehicleController }, { token: VehicleService }, { token: i8.StorageService }, { token: i9.TSCCommonService }, { token: 'constant' }], target: i0.ɵɵFactoryTarget.Component });
CreateUpdateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: CreateUpdateComponent, selector: "app-create-update", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">{{ action == FormAction.CREATE ? PageTitleEnum.CREATE :\n                PageTitleEnum.UPDATE }} vehicle\n            </div>\n            <div class=\"pageSubtitle\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card-body\" [ngClass]=\"{ 'vechileCreateUpdateForm' : source == ComponentSourceEnum.PAGE }\">\n        <form [formGroup]=\"vehicleFG\" (ngSubmit)=\"vechileSubmit()\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Vehicle number</mat-label>\n                        <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Vehicle number\"\n                            formControlName=\"vehicleNumber\" required />\n                        <mat-error *ngIf=\"errorHandling('vehicleNumber', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Vehicle name</mat-label>\n                        <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Vehicle name\"\n                            formControlName=\"vehicleName\" required />\n                        <mat-error *ngIf=\"errorHandling('vehicleName', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"radioBtnGroupLabel\">Select a vehicle type</div>\n                    <mat-radio-group formControlName=\"vehicleTypeID\">\n                        <div class=\"row mt-1\">\n                            <div class=\"col-sm-6\" *ngFor=\"let data of vehicleTypeM\">\n                                <mat-radio-button class=\"radioBtnLabel\" [value]=\"data.id\"\n                                    (change)=\"onVehicleTypeChange(data)\">\n                                    {{ data.name }}\n                                </mat-radio-button>\n                            </div>\n                        </div>\n                    </mat-radio-group>\n                </div>\n            </div>\n\n            <div class=\"row mt-3\">\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select vehicle category\n                        </mat-label>\n                        <mat-select formControlName=\"vehicleCategoryID\" required>\n                            <mat-option *ngFor=\"let method of vehicleCategory\" [value]=\"method.id\">\n                                {{ method.name }}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('vehicleCategoryID', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field *ngIf=\"isEngineStroke\" class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select engine stroke</mat-label>\n                        <mat-select formControlName=\"engineStrokeId\" required>\n                            <mat-option *ngFor=\"let data of engineStrokeM\" [value]=\"data.id\">\n                                <span class=\"d-flex justify-content-between\">{{ data.name }}\n                                </span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('engineStrokeId', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Vehicle year</mat-label>\n                        <input class=\"formPlaceholder\" matInput type=\"text\" placeholder=\"Vehicle year\"\n                            formControlName=\"year\" required />\n                        <mat-error *ngIf=\"errorHandling('year', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <mat-form-field class=\"matFieldWidth100\"\n                        [appearance]=\"MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                        <mat-label class=\"formLabel\">Select odometer unit</mat-label>\n                        <mat-select formControlName=\"odoMeterUnitID\" required>\n                            <mat-option *ngFor=\"let units of unitM\" [value]=\"units.id\">\n                                <span class=\"d-flex justify-content-between\">{{ units.name }}\n                                    <span>{{ units.uomCode }} </span></span>\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"errorHandling('odoMeterUnitID', 'required')\">\n                            {{ FormErrorEnum.REQUIRED }}\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div class=\"float-end\">\n                <button class=\"btn btn-sm btn-secondary me-2\" type=\"button\" (click)=\"cancelButtonClick()\">\n                    Cancel\n                </button>\n\n                <button class=\"btn btn-sm btn-success\" [ngClass]=\"{\n                        'btn-success' : action == FormAction.CREATE,\n                        'btn-primary' : action == FormAction.UPDATE,\n                        'disabled' : action == FormAction.UPDATE && isEqual\n                    }\" type=\"submit\">{{ action ==\n                    FormAction.CREATE ? ButtonLabelEnum.CREATE_BTN_LABEL :\n                    ButtonLabelEnum.UPDATE_BTN_LABEL }}\n                </button>\n            </div>\n        </form>\n    </div>\n</div>\n", styles: [".vechileCreateUpdateForm{width:600px}\n"], components: [{ type: i10.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i11.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i12.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i13.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i14.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i10.MatLabel, selector: "mat-label" }, { type: i15.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i14.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i10.MatError, selector: "mat-error", inputs: ["id"] }, { type: i11.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-create-update',
                    templateUrl: './create-update.component.html',
                    styleUrls: ['./create-update.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$1.MatDialogRef, decorators: [{
                    type: Optional
                }] }, { type: i2.ActivatedRoute }, { type: i2.Router }, { type: i3.FormBuilder }, { type: i4.ToastrService }, { type: i5.UnitService }, { type: VehicleController }, { type: VehicleService }, { type: i8.StorageService }, { type: i9.TSCCommonService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['constant']
                }] }]; } });

const routes$1 = [
    {
        path: '',
        component: CreateUpdateComponent,
    }
];
class CreateUpdateRoutingModule {
}
CreateUpdateRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, imports: [i2.RouterModule], exports: [RouterModule] });
CreateUpdateRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule]
                }]
        }] });

class CreateUpdateModule {
}
CreateUpdateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CreateUpdateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, declarations: [CreateUpdateComponent], imports: [CommonModule,
        NgbModule,
        CreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        NgxDaterangepickerMd], exports: [CreateUpdateComponent] });
CreateUpdateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, imports: [[
            CommonModule,
            NgbModule,
            CreateUpdateRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatTableModule,
            MatIconModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
            MatTooltipModule,
            MatOptionModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatPaginatorModule,
            MatButtonModule,
            NgxDaterangepickerMd
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CreateUpdateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CreateUpdateComponent
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        CreateUpdateRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatTableModule,
                        MatIconModule,
                        MatInputModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatTooltipModule,
                        MatOptionModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatPaginatorModule,
                        MatButtonModule,
                        NgxDaterangepickerMd
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
class PageComponent {
    constructor(dialog, vehicleController, storageService, vehicleService, unitService, toastrService) {
        this.dialog = dialog;
        this.vehicleController = vehicleController;
        this.storageService = storageService;
        this.vehicleService = vehicleService;
        this.unitService = unitService;
        this.toastrService = toastrService;
        this.COMMON_CONSTANT = COMMON_CONSTANT;
        this.TABLE_CONSTANT = TABLE_CONSTANT;
        this.FormAction = FormAction;
        this.faPlus = faPlus;
        this.faEllipsisV = faEllipsisV;
        this.displayedColumns = ['vehicleNumber', 'vehicleName', 'vehicleType', 'vehicleCategory', 'engineStroke', 'year', 'odometer', 'actions'];
        this.searchFlag = false;
        this.error = false;
        this.vehicleTypeList = [];
        this.vehicleTypeFc = new FormControl();
        this.vehicleTypeFlag = false;
        this.vehicleCategoryList = [];
        this.vehicleCategoryFc = new FormControl();
        this.vehicleCategoryFlag = false;
        this.odometerList = [];
        this.odometerFc = new FormControl();
        this.odometerFlag = false;
        this.filterArr = [];
    }
    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getVehicleType();
        this.getVehicleCategory();
        this.getUnit();
    }
    SearchFn($event) {
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
    }
    getVehicleCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicleCategoryList = yield this.vehicleService.getVehicleCategory();
            this.vehicleCategoryList.unshift({ id: 'all', name: 'All', keyID: 'all' });
        });
    }
    getVehicleType() {
        return __awaiter(this, void 0, void 0, function* () {
            this.vehicleTypeList = yield this.vehicleService.getVehicleType();
            this.vehicleTypeList.unshift({ id: 'all', name: 'All', keyID: 'all' });
        });
    }
    getUnit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.odometerList = yield this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    ngAfterViewInit() {
        merge(this.paginator.page, this.vehicleType.mono, this.vehicleCategory.mono, this.odometer.mono, fromEvent(this.refreshBtn.nativeElement, 'click')).pipe(startWith({}), switchMap(() => {
            this.filterArr = [];
            if (this.vehicleTypeFlag) {
                if (this.vehicleTypeFc.value == 'all') {
                    this.vehicleTypeFlag = false;
                }
                else {
                    this.filterArr.push('vehicleType:' + this.vehicleTypeFc.value);
                }
            }
            if (this.vehicleCategoryFlag) {
                if (this.vehicleCategoryFc.value == 'all') {
                    this.vehicleCategoryFlag = false;
                }
                else {
                    this.filterArr.push('vehicleCategory:' + this.vehicleCategoryFc.value);
                }
            }
            if (this.odometerFlag) {
                if (this.odometerFc.value == 'Select none') {
                    this.odometerFlag = false;
                }
                else {
                    this.filterArr.push('vehicleOdoMeterUnit:' + this.odometerFc.value);
                }
            }
            if (this.searchFlag) {
                this.filterArr.push('searchVehicleName:' + this.searchValue);
            }
            return this.vehicleController.getVehicleByPage(this.paginator.pageIndex, this.paginator.pageSize, this.currentOrgID, this.filterArr).pipe(catchError(() => of(null)));
        }), map((dataSource) => {
            if (dataSource === null) {
                return [];
            }
            this.resultLength = dataSource.totalCount;
            return dataSource.vehicle;
        })).subscribe((dataSource) => (this.dataSource = dataSource));
    }
    bulkUpload() {
        const dialogRef = this.dialog.open(BulkUploadDialogLib, {
            data: { source: "assets/files/vehicle-upload.xlsx" },
            minWidth: "600px",
            maxWidth: "600px",
        });
        dialogRef.afterClosed().subscribe((response) => {
            this.bulkUploadResponse = response;
            if (response) {
                this.vehicleBulkUpload();
            }
        });
    }
    toFormData() {
        const formData = new FormData();
        formData.append('file', this.bulkUploadResponse);
        return formData;
    }
    vehicleBulkUpload() {
        this.vehicleController.vehicleBulkUpload(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
            if (bulkUploadRes['title'] == 'Success') {
                this.toastrService.openToast(ToastrTitle.SUCCESS, bulkUploadRes['message'], bulkUploadRes['result']);
            }
            else if (bulkUploadRes['title'] == 'Error') {
                this.error = true;
                this.title = bulkUploadRes['title'];
                this.message = bulkUploadRes['message'];
                this.response = bulkUploadRes['response'];
                this.errorDialog(this.title, this.message, this.response);
                this.getErrorData();
            }
        });
    }
    errorDialog(title, message, response) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'warning',
                header: title,
                body: message,
                buttonOne: 'Cancel',
                buttonTwo: 'Try again'
            }
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
            if (result) {
                this.bulkUpload();
            }
            else { }
        });
    }
    getErrorData() {
        if (this.response['duplicateDataInRows'].length != 0) {
            let dupDataInRows = this.response['duplicateDataInRows'];
            this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
        }
        if (this.response['mandatoryDataMissingInRows'].length != 0) {
            let manDataMissingInRows = this.response['mandatoryDataMissingInRows'];
            this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
        }
    }
    refreshFn() {
        this.vehicleTypeFlag = false;
        this.vehicleCategoryFlag = false;
        this.odometerFlag = false;
        this.refreshBtn.nativeElement.click();
    }
    createUpdateVehicle(actionP, row) {
        let action = actionP;
        let dialogRef;
        let data;
        if (action == FormAction.CREATE) {
            data = {
                action: FormAction.CREATE,
                source: ComponentSourceEnum.DIALOG
            };
        }
        else if (action == FormAction.UPDATE) {
            data = {
                action: FormAction.UPDATE,
                source: ComponentSourceEnum.DIALOG,
                vehicleID: row.id
            };
        }
        dialogRef = this.dialog.open(CreateUpdateComponent, {
            data: data,
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
            panelClass: 'matDialogContainerOverride'
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
            if (result.status == DialogEnum.SUCCESS_DR) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }
}
PageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, deps: [{ token: i1$1.MatDialog }, { token: VehicleController }, { token: i8.StorageService }, { token: VehicleService }, { token: i5.UnitService }, { token: i4.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
PageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageComponent, selector: "app-page", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true, static: true }, { propertyName: "searchBar", first: true, predicate: ["searchBar"], descendants: true, static: true }, { propertyName: "refreshBtn", first: true, predicate: ["refreshBtn"], descendants: true, static: true }, { propertyName: "vehicleType", first: true, predicate: ["vehicleType"], descendants: true }, { propertyName: "vehicleCategory", first: true, predicate: ["vehicleCategory"], descendants: true }, { propertyName: "odometer", first: true, predicate: ["odometer"], descendants: true }], ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Vehicles</div>\n            <div class=\"pageSubtitle\">Create company owned vehicles to track their emissions.</div>\n        </div>\n        <div class=\"headerRightContainer\">\n            <div class=\"headerRightContainerInner\">\n                <lib-search-bar-one #searchBar [searchBy]=\"'vehicle name'\" (emitSearch)=\"SearchFn($event)\"></lib-search-bar-one>\n            </div>\n            <div class=\"float-end\">\n                <button type=\"button\" class=\"button ms-4 btn btn-success\" (click)=\"createUpdateVehicle(FormAction.CREATE, '')\">\n                    <fa-icon [icon]=\"faPlus\" class=\"me-2\"></fa-icon>Vehicle\n                </button>\n                <div class=\"ms-1 btn-group\" ngbDropdown placement=\"bottom-right\">\n                    <button type=\"button\" ngbDropdownToggle class=\"btn btn-success\">\n                    </button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\" (click)=\"bulkUpload()\">\n                            Import\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <button type=\"button\" class=\"d-none\" #refreshBtn>refresh</button>\n\n    <table mat-table [dataSource]=\"dataSource\" #sort matSort matSortActive=\"employeeID\" matSortDirection=\"desc\"\n        matSortDisableClear>\n\n        <ng-container matColumnDef=\"vehicleNumber\">\n            <th mat-header-cell class=\"col-sm-2 \" *matHeaderCellDef disableClear> Vehicle Number </th>\n            <td mat-cell *matCellDef=\"let row\"> {{ row.vehicleNumber ? row.vehicleNumber : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleName\">\n            <th mat-header-cell class=\"col-sm-2\" *matHeaderCellDef> Vehicle Name </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.vehicleName ? row.vehicleName : COMMON_CONSTANT.HYPHEN}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleType\">\n            <th mat-header-cell class=\"vehicleType\" *matHeaderCellDef disableClear>\n                <funnel-filter #vehicleType header=\"Vehicle Type\" type=\"mono\" value=\"id\" \n                    [entityList]=\"vehicleTypeList\" [selectFC]=\"vehicleTypeFc\" [active]=\"vehicleTypeFlag\"\n                    (mono)=\"vehicleTypeFlag = true;\">\n                </funnel-filter>\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.vehicleType.name ? row.vehicleType.name : COMMON_CONSTANT.HYPHEN}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"vehicleCategory\">\n            <th mat-header-cell class=\"vehicleCategory\" *matHeaderCellDef disableClear>\n                <funnel-filter #vehicleCategory\n                    header=\"Vehicle Category\" value=\"id\" type=\"mono\" [entityList]=\"vehicleCategoryList\"\n                    [selectFC]=\"vehicleCategoryFc\" [active]=\"vehicleCategoryFlag\"\n                    (mono)=\"vehicleCategoryFlag = true;\"></funnel-filter></th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.vehicleCategory.name ? row.vehicleCategory.name : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"engineStroke\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef> Engine Stroke </th>\n            <td mat-cell *matCellDef=\"let row\"> \n                {{ row.engineStroke ? row.engineStroke.name : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"year\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef> Year </th>\n            <td mat-cell *matCellDef=\"let row;\">\n                {{row.year ? row.year : COMMON_CONSTANT.HYPHEN}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"odometer\">\n            <th mat-header-cell class=\"col-sm-1\" *matHeaderCellDef> <funnel-filter #odometer header=\"Odometer\"\n                    type=\"mono\" value=\"id\" view=\"name\" [entityList]=\"odometerList\" [selectFC]=\"odometerFc\"\n                    [active]=\"odometerFlag\" (mono)=\"odometerFlag = true;\"></funnel-filter></th>\n            <td mat-cell *matCellDef=\"let row;\">\n                {{row.odoMeterUnit.uomCode ? row.odoMeterUnit.uomCode : COMMON_CONSTANT.HYPHEN}}\n            </td>\n            <td mat-cell *matCellDef=\"let row;\">\n                {{ row.odoMeterUnit.uomCode ? row.odoMeterUnit.uomName + \" (\" + row.odoMeterUnit.uomCode + \")\" : COMMON_CONSTANT.HYPHEN }}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td class=\"text-center\" mat-cell *matCellDef=\"let row\">\n                <div class=\"mt-2 btn-group\" ngbDropdown placement=\"left\">\n                    <button type=\"button\" ngbDropdownToggle class=\"dropdown-after dropdownAfter btn\">\n                        <fa-icon [icon]=\"faEllipsisV\" class=\"me-2\"></fa-icon>\n                    </button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\" (click)=\"createUpdateVehicle(FormAction.UPDATE, row)\">\n                            Edit\n                        </button>\n                    </div>\n                </div>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <tr class=\"mat-row\" *matNoDataRow>\n            <td class=\"mat-cell text-center\" [attr.colspan]=\"displayedColumns.length\">\n                {{ TABLE_CONSTANT.TABLE_NO_DATA }}\n            </td>\n        </tr>\n    </table>\n\n    <mat-paginator class=\"roundedBorder\" #paginator [length]=\"resultLength\"\n        [pageSizeOptions]=\"TABLE_CONSTANT.PAGE_SIZE_OPTION\" [pageSize]=\"TABLE_CONSTANT.DEFAULT_PAGE_SIZE\"\n        showFirstLastButtons>\n    </mat-paginator>\n</div>", styles: [".vehicleType{width:155px}.vehicleCategory{width:150px}\n"], components: [{ type: i9.SearchBarOneComponent, selector: "lib-search-bar-one", inputs: ["type", "searchBy", "clear"], outputs: ["emitSearch"] }, { type: i8$1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }, { type: i9$1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i9.FunnelFilterComponent, selector: "funnel-filter", inputs: ["view", "value", "type", "entityList", "selectFC", "header", "headerWidth", "width", "active"], outputs: ["mono", "multi", "selected"] }, { type: i9$1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i9$1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i10$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], directives: [{ type: i11$1.NgbDropdown, selector: "[ngbDropdown]", inputs: ["autoClose", "dropdownClass", "open", "placement", "container", "display"], outputs: ["openChange"], exportAs: ["ngbDropdown"] }, { type: i11$1.NgbDropdownToggle, selector: "[ngbDropdownToggle]" }, { type: i11$1.NgbDropdownMenu, selector: "[ngbDropdownMenu]" }, { type: i9$1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i9$1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i9$1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i9$1.MatCellDef, selector: "[matCellDef]" }, { type: i9$1.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i9$1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i9$1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i9$1.MatNoDataRow, selector: "ng-template[matNoDataRow]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-page',
                    templateUrl: './page.component.html',
                    styleUrls: ['./page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.MatDialog }, { type: VehicleController }, { type: i8.StorageService }, { type: VehicleService }, { type: i5.UnitService }, { type: i4.ToastrService }]; }, propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator, { static: true }]
            }], searchBar: [{
                type: ViewChild,
                args: ['searchBar', { static: true }]
            }], refreshBtn: [{
                type: ViewChild,
                args: ['refreshBtn', { static: true }]
            }], vehicleType: [{
                type: ViewChild,
                args: ['vehicleType']
            }], vehicleCategory: [{
                type: ViewChild,
                args: ['vehicleCategory']
            }], odometer: [{
                type: ViewChild,
                args: ['odometer']
            }] } });

const routes = [
    {
        path: '',
        component: PageComponent,
    }
];
class PageRoutingModule {
}
PageRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [i2.RouterModule], exports: [RouterModule] });
PageRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

// /tsc-library/
class PageModule {
}
PageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, declarations: [PageComponent], imports: [CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        NgbModule,
        FontAwesomeModule,
        PageRoutingModule,
        SearchBarOneModule,
        FunnelFilterModule] });
PageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, imports: [[
            CommonModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatDialogModule,
            NgbModule,
            FontAwesomeModule,
            PageRoutingModule,
            SearchBarOneModule,
            FunnelFilterModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatButtonModule,
                        MatDialogModule,
                        NgbModule,
                        FontAwesomeModule,
                        PageRoutingModule,
                        SearchBarOneModule,
                        FunnelFilterModule,
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

export { CreateUpdateComponent, CreateUpdateModule, EngineStroke, NetzeroComponent, NetzeroModule, NetzeroService, PageComponent, PageModule, Vehicle, VehicleByType, VehicleCategory, VehicleModule, VehiclePage, VehicleService, VehicleType, VehicleTypeEnum };
//# sourceMappingURL=library-netzero.js.map
