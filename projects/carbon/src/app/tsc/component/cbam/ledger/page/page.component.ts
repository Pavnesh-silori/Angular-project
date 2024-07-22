import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CBAM_CONSTANT } from '@carbon/constant/cbam.constant';
import { OnGoingRunController } from '@carbon/controller/ongoing-run.controller';
import { CbamEnum } from '@carbon/enum/cbam.enum';
import { RunStatusKeyIDEnum } from "@carbon/enum/cbam.enum";
import { Page, PageM, OngoingRunM } from '@carbon/model/ongoing-run.model';
//tsc-library
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrTitle } from '@library/toastr-service';
import { COMMON_CONSTANT, DialogOneComponent, TypeConfirmationDialog, DialogOneEnum, FormAction, FunnelFilterComponent, TABLE_CONSTANT, MATERIAL_CONSTANT, DialogEnum } from '@library/tsc-common';
import { CreateComponent } from '../../report/create/create.component';

@Component({
    selector: 'app-page',
    templateUrl: '../../run/page/page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {

    currentOrgID: string;
    CbamConstant = CBAM_CONSTANT;
    source: any = CBAM_CONSTANT.LEDGER
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    RunStatusKeyIDEnum = RunStatusKeyIDEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;
    refreshBtnTooltip = ''
    CbamEnum = CbamEnum;
    FormAction = FormAction;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    displayedColumns: string[] = ['id', 'productCnCode', 'productName', 'periodStartDate', 'totalSEE', 'defaultSEE', 'lockStatus', 'option'];

    dataSource: PageM[] = [new Page()];
    filterArr: any[] = [];
    resultLength: number;

    productID: any;

    statusList = CBAM_CONSTANT.RUN_STATUS_LIST;

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');
    selection = new SelectionModel(true, []); // remove on code cleaning
    bulkActionArr = [];
    checkAll: FormControl = new FormControl(false);

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
    }

    showStatus(keyID): string {
        const status = this.statusList.find(status => status.keyID == keyID);
        return status ? status.name : keyID;
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

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
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
                        this.filterArr.push('status:' + this.statusFC.value);
                    }
                }

                if (this.refreshFlag) {
                    this.refreshFlag = false;
                }

                if (this.searchFlag) {
                    requestBody['search:productName'] = this.searchValue;
                }
                requestBody['pageNo'] = this.paginator.pageIndex;
                requestBody['pageSize'] = this.paginator.pageSize;
                requestBody['sortBy'] = this.sort.active;
                requestBody['orderBy'] = this.sort.direction;

                return this.onGoingRunController.getLedgerByPage(
                    this.currentOrgID, requestBody
                )
                    .pipe(catchError(() => observableOf(null)));
            }),
            map((response: any) => {
                if (response == null) {
                    console.log(response)
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

    runLockStatusUpdateByRunId(row: any) {
        let data: any = {};
        data.status = CbamEnum.UNLOCKED;

        this.onGoingRunController.lockProduct(this.currentOrgID, row.runID, data).subscribe((res: any) => {
            if (res.status == 'success') {
                this.refreshBtn.nativeElement.click();
            }
        })
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
        func(params);
    }

    unlockProduct = (data) => {
        let value = {
            name: data.productName,
            id: data.id,
            status: data.runStatus
        }
        this.unlockDialog(value);
    }

    unlockDialog = (data) => {
        this.productID = data;
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '650px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'lock',
                header: `${!data.length ? 'Are you sure you want to unlock ' + data.name + '?' : 'Are you sure you want to unlock ' + data.length + ' products?'}`,
                body: '<p class="ps-3">Locking a product will result probhition of any data modification in the future.</p>',
                buttonOne: 'Cancel',
                buttonTwo: 'Lock'
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                // if(result)
                //   { 
                //      this.runHistoryController.lockProduct(this.currentOrgID , this.productID).subscribe((response) => {
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
        this.productID = data;
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {
            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: `${!data.length ? 'Are you sure you want to delete ' + data.name + '?' : 'Are you sure you want to delete ' + this.bulkActionArr.length + ' products?'}`,
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This CBAM run  will be permanently deleted. All progress including configuration and mapping will be lost. Existing records that were collected during this run would not be affected.</p><span class="fw-bold ps-1">Are you sure you want to continue?</span>',
                confirmationInput: 'delete',
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
                    // this.toastrService.openToast(ToastrTitle.ERROR, 'Please select the Products you want to delete', ToastrColor.ERROR);
                }
                this.refreshBtn.nativeElement.click();
            })
    }

    onClick() {
        //bulk action is to be written delete and lock data 

    }

    getTooltipMessage(row: any): string {
        if (row.lockStatus == CbamEnum.LOCKED) {
            return 'Click to unlock for these run';
        } else {
            return 'Click to lock for these run';
        }
    }

    openReportDialog(data) {
        const dialogRef = this.dialog.open(CreateComponent,
            {
                data: {
                    value: data
                },
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.router.navigateByUrl('/cbam/report/page')
                }
            });
    }
}
