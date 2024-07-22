import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { VehicleController } from '@netzero/controller/vehicle.controller';

import { CreateUpdateComponent } from '../create-update/create-update.component';

//tsc-library
import { VehicleService } from '@library/netzero';
import { VehicleM, VehiclePageM } from '@library/netzero';
import { StorageService } from '@library/storage-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService, ToastrTitle } from '@library/toastr-service';
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
    DialogEnum,
    StatusService,
    ButtonLabelEnum,
    MessageAlertTypeEnum,
    MessageAlertIconEnum
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
    ButtonLabelEnum = ButtonLabelEnum;
    FormAction = FormAction;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;
    dataSource: any;
    resultLength: number;
    searchValue: any;
    displayedColumns: string[] = ['vehicleNumber', 'vehicleName', 'vehicleType', 'vehicleCategory', 'engineStroke', 'year', 'odometer', 'status', 'option'];
    searchFlag: boolean = false;

    bulkUploadResponse: any;
    title: any;
    response: any;
    message: any;
    error: boolean = false;
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

    statusList = [
        { "id": 1, "keyID": 'all', "name": 'All' },
        { "id": 2, "keyID": 'active', "name": 'Active' },
        { "id": 3, "keyID": 'inactive', "name": 'Inactive' }
    ];
    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');

    isFirstTemplate: any;
    selectedVehicleID: any;
    bulkBtnFlag: boolean = false;
    allComplete: boolean = false;
    selectedRows: any;
    resetFlag: boolean = true;

    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private vehicleController: VehicleController,
        private storageService: StorageService,
        private vehicleService: VehicleService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        public statusService: StatusService
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe(data => {
            const view = data['view'];
            this.isFirstTemplate = view !== 'twoPane';
            this.selectedVehicleID = this.isFirstTemplate ? null : this.activatedRoute.snapshot.params.id;
        });

        this.getVehicleType();
        this.getVehicleCategory();
        this.getUnit();
    }

    searchFn($event) {
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
        merge(
            this.paginator.page,
            this.vehicleType.mono,
            this.vehicleCategory.mono,
            this.odometer.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
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

    selectAll(completed: boolean): void {
        this.allComplete = completed;
        this.dataSource.forEach(row => row['completed'] = completed);
        this.bulkBtnFlag = completed;
    }

    rowSelected(): void {
        this.allComplete = this.isAllRowSelected();
        this.bulkBtnFlag = this.enableBulkButton();
    }

    enableBulkButton(): boolean {
        return this.dataSource.some(row => row['completed']);
    }

    isAllRowSelected(): boolean {
        return this.dataSource.every(row => row['completed']);
    }

    bulkUpdate(status: string) {
        const selectedRows = this.dataSource.filter(row => row['completed']);
        if (selectedRows.length == 0) {
            console.error('No items selected.');
            return;
        }

        if (status == 'delete') {
            // this.validateDelete(selectedRows);
            // this.showDeleteConfirmation(selectedRows);
        } else {
            // this.showUpdateConfirmation(selectedRows, status);
        }
    }

    navigateToViewPage(id) {
        this.selectedVehicleID = id;
        this.router.navigate([`/source/vehicle/${id}/details`]);
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
        this.refreshBtn.nativeElement.click();
    }

    isAnyFlagTrue(): boolean {
        return this.vehicleTypeFlag || this.vehicleCategoryFlag || this.statusFlag || this.odometerFlag;
    }

    resetFilter() {
        if (this.isAnyFlagTrue()) {
            this.vehicleTypeFlag = false;
            this.vehicleCategoryFlag = false;
            this.odometerFlag = false;
            this.statusFlag = false;
            this.refreshFn();
        }
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
                if (result == 'opSuccess') {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }
}
