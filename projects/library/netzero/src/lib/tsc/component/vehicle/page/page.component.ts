import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";
import { FormControl } from '@angular/forms';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { EMISSION_FACTOR_SOUREC_KEYID_ENUM } from '../../../enum/emission-factor.enum';
import { ACTIVITY_KEYID_ENUM } from '../../../enum/activity.enum';
import { VehicleM, VehiclePageM } from '../../../model/vehicle.model';
import { VehicleController } from '../../../controller/vehicle.controller';
import { VehicleService } from '../../../service/vehicle.service';
import { PreferenceService } from '../../../service/preference.service';
import { CreateUpdateComponent } from '../create-update/create-update.component';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitM, Unit, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { ApplicationKeyID } from '@library/application-service';
import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum,
    FormAction,
    BulkUploadDialogLib,
    DialogOneComponent,
    DialogOneEnum,
    FunnelFilterComponent,
    VIEW_TYPE_ENUM,
    DialogEnum
} from "@library/tsc-common";
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    rootOrgID: any;
    currentOrgID: any;
    dataSource: any;
    resultLength: number;
    searchValue: any;
    displayedColumns: string[] = ['vehicleNumber', 'vehicleName', 'vehicleType', 'vehicleCategory', 'engineStroke', 'year', 'odometer', 'option'];
    searchFlag: boolean = false;

    bulkUploadResponse: any;
    title: any;
    response: any;
    message: any;
    error: boolean = false;
    isIpcc: boolean = false;
    isDataLoaded: boolean = false;
    duplicateData: string;
    mandatoryData: string;

    vehicleTypeList: any = [];
    vehicleTypeFc = new FormControl();
    vehicleTypeFlag = false;

    vehicleCategoryList: any = [];
    vehicleCategoryFc = new FormControl();
    vehicleCategoryFlag = false;

    odometerList: UnitM[] = [];

    odometerFc = new FormControl();
    odometerFlag = false;

    filterArr: Array<string> = [];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('searchBar', { static: true }) searchBar: ElementRef;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('vehicleType') vehicleType: FunnelFilterComponent;
    @ViewChild('vehicleCategory') vehicleCategory: FunnelFilterComponent;
    @ViewChild('odometer') odometer: FunnelFilterComponent;

    constructor(
        private dialog: MatDialog,
        private vehicleController: VehicleController,
        private storageService: StorageService,
        private vehicleService: VehicleService,
        private preferenceService: PreferenceService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        @Inject('constant') private constant: any
    ) { }

    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
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

    async getVehicleCategory() {
        this.vehicleCategoryList = await this.vehicleService.getVehicleCategory();
        this.vehicleCategoryList.unshift({ id: 'all', name: 'All', keyID: 'all' })
    }

    async getVehicleType() {
        this.vehicleTypeList = await this.vehicleService.getVehicleType();
        this.vehicleTypeList.unshift({ id: 'all', name: 'All', keyID: 'all' })
    }

    async getUnit() {
        try {
            this.odometerList = await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]);
        } catch (error) {
            console.error(error);
        }
    }

    ngAfterViewInit() {
        this.ipccFieldHandler();
    }

    getVehicleByPage() {
        this.getMerge().pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = [];

                if (this.vehicleTypeFlag) {
                    if (this.vehicleTypeFc.value == 'all') { this.vehicleTypeFlag = false; }
                    else { this.filterArr.push('vehicleType:' + this.vehicleTypeFc.value); }
                }
                if (this.vehicleCategoryFlag) {
                    if (this.vehicleCategoryFc.value == 'all') { this.vehicleCategoryFlag = false; }
                    else { this.filterArr.push('vehicleCategory:' + this.vehicleCategoryFc.value) }
                }
                if (this.odometerFlag) {
                    if (this.odometerFc.value == 'Select none') { this.odometerFlag = false; }
                    else { this.filterArr.push('vehicleOdoMeterUnit:' + this.odometerFc.value) }
                }
                if (this.searchFlag) {
                    this.filterArr.push('searchVehicleName:' + this.searchValue)
                }

                return this.vehicleController.getVehicleByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.currentOrgID,
                    this.filterArr,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource: VehiclePageM) => {
                if (dataSource === null) {
                    return [];
                }
                this.resultLength = dataSource.totalCount;
                return dataSource.vehicle;
            })
        ).subscribe((dataSource: VehicleM[]) => (this.dataSource = dataSource));
    }

    bulkUpload() {
        const dialogRef = this.dialog.open(BulkUploadDialogLib, {
            data: { source: "assets/files/vehicle-upload.xlsx" },
            minWidth: "600px",
            maxWidth: "600px",
        });

        dialogRef.afterClosed().subscribe((response) => {
            this.bulkUploadResponse = response;

            if (response) { this.vehicleBulkUpload(); }
        });
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('file', this.bulkUploadResponse);

        return formData;
    }


    vehicleBulkUpload() {
        this.vehicleController.vehicleBulkUpload(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
                if (bulkUploadRes['title'] == 'Success') {
                    this.toastrService.openToast(ToastrTitle.SUCCESS, bulkUploadRes['message'], bulkUploadRes['result']);

                } else if (bulkUploadRes['title'] == 'Error') {
                    this.error = true;
                    this.title = bulkUploadRes['title']
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
                    this.bulkUpload()
                }
                else { }
            })
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

    createUpdateVehicle = (actionP, row) => {
        let action: string = actionP;
        let dialogRef;
        let data: any;

        if (action == FormAction.CREATE) {
            data = {
                action: FormAction.CREATE,
                source: VIEW_TYPE_ENUM.DIALOG
            }
        } else if (action == FormAction.UPDATE) {
            data = {
                action: FormAction.UPDATE,
                source: VIEW_TYPE_ENUM.DIALOG,
                vehicleID: row.id
            }
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
            .subscribe((result: any) => {
                if (result.status == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    async ipccFieldHandler() {
        let preference;
        let activity;

        if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.NETZERO_KEY_ID) {
            preference = await this.preferenceService.getOrgPreference(this.rootOrgID);

            if (preference.preferenceID != null) {
                activity = preference.activity.find(item => item.activityKeyID == ACTIVITY_KEYID_ENUM.STATIONARY_COMBUSTION);

                // if (activity.emissionFactorSourceKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                //     this.isIpcc = true;
                // }

                if (activity) {
                    let calculationApproach = activity.calculationApproach.length > 0 ? activity.calculationApproach[0] : null;
                    if (calculationApproach) {
                        let emissionFactorSource = calculationApproach.emissionFactorSource.find(ef => ef.id == calculationApproach.emissionFactorSourceID);
                        if (emissionFactorSource) {
                            if (emissionFactorSource.keyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                this.isIpcc = true;
                            };
                        }
                    }
                }
            }
            this.getVehicleByPage();
        }
    }

    getMerge() {
        if (this.isIpcc) {
            return merge(
                this.paginator.page,
                this.vehicleType.mono,
                this.odometer.mono,
                fromEvent(this.refreshBtn.nativeElement, 'click')
            )
        } else {
            return merge(
                this.paginator.page,
                this.vehicleType.mono,
                this.vehicleCategory.mono,
                this.odometer.mono,
                fromEvent(this.refreshBtn.nativeElement, 'click')
            )
        }
    }
}
