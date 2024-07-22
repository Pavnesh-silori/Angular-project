import { Component, ElementRef, ViewChild } from '@angular/core';
import { merge, fromEvent, of as observableOf } from 'rxjs';
import { catchError, filter, map, startWith, switchMap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { RunStatusKeyIDEnum } from "@carbon/enum/cbam.enum";
import { CbamEnum } from '@carbon/enum/cbam.enum';
import { CBAM_CONSTANT } from '@carbon/constant/cbam.constant';
import { OnGoingRunController } from '@carbon/controller/ongoing-run.controller';
import { Page, PageM, OngoingRunM } from '@carbon/model/ongoing-run.model';

//tsc-library
import { TABLE_CONSTANT, COMMON_CONSTANT, FunnelFilterComponent, FormAction, DialogOneComponent, TypeConfirmationDialog, DialogOneEnum, MATERIAL_CONSTANT, Response } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

// /tsc-library/
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    currentOrgID: string;
    source: any = CBAM_CONSTANT.ONGOING_RUN;
    CbamConstant = CBAM_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    RunStatusKeyIDEnum = RunStatusKeyIDEnum;
    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    CbamEnum = CbamEnum;
    FormAction = FormAction

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    displayedColumns: string[] = ['id', 'productCnCode', 'productName', 'periodStartDate', 'status', 'totalSEE', 'defaultSEE', 'lockStatus'];

    dataSource: PageM[] = [new Page()];
    filterArr: any[] = [];
    resultLength: number;
    selection = new SelectionModel(true, []);
    bulkActionArr = [];
    checkAll: FormControl = new FormControl(false);

    productID: any;

    statusList = CBAM_CONSTANT.RUN_STATUS_LIST;
    refreshBtnTooltip = ''
    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');

    currentRunStatus: any;

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;

    constructor(
        private storageService: StorageService,
        private onGoingRunController: OnGoingRunController,
        private toastrService: ToastrService,
        private dialog: MatDialog,
        private router: Router
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        // this.getRunStatus();

    }

    showStatus(keyID) {
        this.currentRunStatus = CBAM_CONSTANT.RUN_STATUS.find(status => status.key === keyID);
        return this.currentRunStatus.value;
    }


    searchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        }
        else {
            this.searchFlag = false;
        }
        this.refreshBtn.nativeElement.click();
    }

    runLockStatusUpdateByRunId(row: any) {
        let data: any = {};
        data.status = CbamEnum.LOCKED;

        this.onGoingRunController.lockProduct(this.currentOrgID, row.runID, data).subscribe((res: any) => {
            if (res.status == 'success') {
                this.refreshBtn.nativeElement.click();
            }
        });
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap(() => {
                let requestBody = {};
                this.filterArr = [];
                if (this.statusFlag) {
                    if (this.statusFC.value == 'ALL') {
                        this.statusFlag = false;
                    } else {
                        this.filterArr.push('runStatus:' + this.statusFC.value);
                    }
                }

                if (this.refreshFlag) {
                    this.refreshFlag = false;
                }

                if (this.searchFlag) {
                    requestBody['search:name'] = this.searchValue;
                }
                requestBody['pageNo'] = this.paginator.pageIndex;
                requestBody['pageSize'] = this.paginator.pageSize;
                requestBody['sortBy'] = this.sort.active;
                requestBody['orderBy'] = this.sort.direction;
                requestBody['filter'] = this.filterArr;
                // requestBody['startDate'] = this.startDateFC.value;
                // requestBody['endDate'] = this.endDateFC.value;

                return this.onGoingRunController.getByPage(
                    this.currentOrgID, requestBody
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: OngoingRunM) => {

                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response.totalCount;
                return response.records;
            })
        ).subscribe((dataSource) => (this.dataSource = dataSource));
    }

    manualSelect(id: number, runStatus, status: boolean, datasource: any[]) {
        const index = this.bulkActionArr.findIndex(item => item.id === id);

        if (status) {
            if (index !== -1) {
                this.bulkActionArr[index].status = runStatus;
            } else {
                this.bulkActionArr.push({ "id": id, "status": runStatus });
            }
        } else {
            if (index !== -1) {
                this.bulkActionArr.splice(index, 1);
            }
        }
        if (this.bulkActionArr.length === datasource.length) {
            this.checkAll.setValue(true);
        } else {
            this.checkAll.setValue(false);
        }

    }

    selectAll() {
        this.bulkActionArr = [];
        if (!this.checkAll.value) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.bulkActionArr);
        this.dataSource.forEach(element => {
            this.selection.select(element.id);
            this.bulkActionArr.push({ "id": element.runID, "status": element.runStatus });
        });
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected === numRows;
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    lockProduct = (data) => {
        let value = {
            name: data.productName,
            id: data.id,
            status: data.runStatus
        }
        this.lockDialog(value);
    }

    lockFunc = (bulkActionArr) => {
        if (this.disSelectDialog(this.bulkActionArr)) { this.lockDialog(this.bulkActionArr) }
        else {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Please select only the products with Run status finished', ToastrColor.ERROR);

        }
    }

    disSelectDialog(data) {
        let disSelectArray = [];
        this.bulkActionArr.forEach(res => {
            if (res.status != RunStatusKeyIDEnum.DONE) {
                disSelectArray.push(res.id)
            }
        })

        if (disSelectArray.length == 0) {
            return true;
        } else {
            return false;
        }

    }

    lockDialog(data) {
        console.log(data);
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '650px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'lock',
                header: `${this.bulkActionArr.length <= 1 ? 'Are you sure you want to lock ' + data.name + '?' : 'Are you sure you want to lock ' + data.length + ' products?'}`,
                body: '<p class="ps-3">Locking a product will result probhition of any data modification in the future.</p> <span class="fw-bold ps-3">Are you sure you want to continue?</span>',
                buttonOne: 'Cancel',
                buttonTwo: 'Lock'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {

                // if(result)
                //   { 
                //      this.onGoingRunController.lockProduct(this.currentOrgID , this.productID).subscribe((response) => {
                //         this.toastrService.openToast(ToastrTitle.SUCCESS, response['message'], response['result']);
                //         this.refreshBtn.nativeElement.click();
                //     })}
                // else{
                //     this.refreshBtn.nativeElement.click();
                //     this.toastrService.openToast(ToastrTitle.ERROR,'Unable to delete record', ToastrColor.ERROR);
                // }
                this.refreshBtn.nativeElement.click();
            })

    }

    deleteProduct = (data) => {
        let value = {
            id: data.id,
            name: data.productName
        }
        this.deleteConfirmation(value);

    }

    bulkDelete = (data) => {
        this.deleteConfirmation(data);
    }

    deleteConfirmation(data) {
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {
            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: `${this.bulkActionArr.length > 1 ? 'Are you sure you want to delete ' + this.bulkActionArr.length + ' products?' : 'Are you sure you want to delete ' + data.name + '?'}`,
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This CBAM run  will be permanently deleted. All progress including configuration and mapping will be lost. Existing records that were collected during this run would not be affected.</p><span class="fw-bold ps-1">Are you sure you want to continue?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (data || data.length > 0) {
                    //    //  if (result){ 
                    //         //      this.onGoingRunController.deleteProduct(this.currentOrgID , this.productID).subscribe((response) => {
                    //         //         this.toastrService.openToast(ToastrTitle.SUCCESS, response['message'], response['result']);
                    //         //         this.refreshBtn.nativeElement.click();
                    //         //     })}
                    //         // else{
                    //         //     this.refreshBtn.nativeElement.click();
                    //         //     this.toastrService.openToast(ToastrTitle.ERROR,'Unable to delete record', ToastrColor.ERROR);
                    //         // }
                }
                else {
                    // this.refreshBtn. .click();
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Please select the Products you want to delete', ToastrColor.ERROR);
                }
                this.refreshBtn.nativeElement.click();
            })
    }

    editRun(record) {
        let runID = record.runID;
        let productID = record.productID;
        this.router.navigate([`/cbam/run/update`],
            { queryParams: { productID: productID, runID: runID, productionRouteID: record.productionRouteID } });
    }

    getTooltipMessage(row: any): string {
        if (row.lockStatus === CbamEnum.LOCKED) {
            return 'Click to unlock this run';
        } else {
            return 'Click to lock this run';
        }
    }

    statusColour(status): String {
        let classC: string;

        if ([RunStatusKeyIDEnum.INSTALLATION_DETAILS, RunStatusKeyIDEnum.PROCESS_MAP, RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION, RunStatusKeyIDEnum.RUN_ERROR].includes(status)) {
            classC = 'danger';
        } else if ([RunStatusKeyIDEnum.TRACK_PROGRESS, RunStatusKeyIDEnum.ALLOCATE_REVIEW].includes(status)) {
            classC = 'warning';
        } else if ([RunStatusKeyIDEnum.CALCULATION_PENDING].includes(status)) {
            classC = 'disable';
        } else if ([RunStatusKeyIDEnum.DONE].includes(status)) {
            classC = 'success';
        } else {
            classC = 'disable';
        }

        return classC;
    }

}
