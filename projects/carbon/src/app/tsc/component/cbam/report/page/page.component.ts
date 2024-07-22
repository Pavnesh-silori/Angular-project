import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { AuditDetailsComponent } from '../../audit-details/audit-details.component';
import { CreateComponent } from '../create/create.component';
import { SendEmailComponent } from '../send-email/send-email.component';

import { CbamRunController } from '@carbon/controller/cbam-run.controller';
//tsc-library
import {
    ButtonLabelEnum,
    ButtonTooltipEnum,
    COMMON_CONSTANT,
    DialogEnum,
    DialogOneComponent,
    FormAction,
    MATERIAL_CONSTANT,
    TABLE_CONSTANT
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    currentOrgID: any;
    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    dataSource: any[] = [];
    selectedRows: any;
    resultLength: any;

    numOfRows: number;
    recordID: number[] = [];
    allComplete: boolean = false;
    bulkBtnFlag: boolean = false;

    displayedColumns: string[] = ['id', 'runID', 'customerName', 'productCnCode', 'productName', 'reportingPeriod', 'productExport', 'embeddedEmission', 'defaultEmbeddedEmission', 'action'];

    searchByPlaceHolder: string = 'product name';

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private cbamRunController: CbamRunController,
        private storageService: StorageService
    ) {
        this.dataSource.forEach(row => (row['completed'] = false));
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
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
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap(() => {
                if (this.searchFlag) {
                    this.searchValue = ('product:' + this.searchValue);
                }
                return this.cbamRunController.getCbamReportPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.currentOrgID,
                    this.searchFlag,
                    this.searchValue,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: any) => {
                if (response == null) {
                    return [];
                }
                this.resultLength = response.totalCount;
                return response.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    // updateAllComplete() {
    //     this.allComplete = this.dataSource.every(row => row['completed']);
    //     console.log(this.allComplete);
    //     this.dataSource.filter(row => row['completed']).forEach(row => {
    //         console.log('Clicked checkbox for:', row);
    //     });
    //     this.setBulkButton();
    // }

    // setAll(completed: boolean) {
    //     this.allComplete = completed;
    //     this.dataSource.forEach(row => (row['completed'] = completed));
    //     this.dataSource.filter(row => row['completed']).forEach(row => {
    //         console.log('Clicked checkbox for:', row);
    //     });
    //     this.setBulkButton();
    //     console.log(this.allComplete);
    // }

    // getNumberOfSelectedRows() {
    //     this.selectedRows = this.dataSource.filter(row => row['completed']);
    //     return this.selectedRows.length;
    // }

    // setBulkButton() {
    //     console.log('number of selected rows', this.getNumberOfSelectedRows());
    //     if (this.getNumberOfSelectedRows() != 0) {
    //         this.bulkBtnFlag = true;
    //         console.log('bulkfalg', this.bulkBtnFlag)
    //     }
    //     else {
    //         this.bulkBtnFlag = false;
    //         console.log('bulkfalg', this.bulkBtnFlag)
    //     }
    // }

    // deleteRows(row, level) {
    //     if (level == 'bulk') {
    //         this.recordID = [];
    //         this.selectedRows.forEach(row => {
    //             this.recordID.push(row.recordID);
    //         });
    //     }
    //     else {
    //         this.recordID = [row.recordID];
    //     }
    //     console.log('RecordID:', this.recordID);
    //     const numberOfSelectedRows = this.getNumberOfSelectedRows();
    //     const dialogRef = this.dialog.open(DialogOneComponent, {
    //         data: {
    //             type: 'delete',
    //             icon: 'dangerous',
    //             header: `Delete ${numberOfSelectedRows > 1 ? numberOfSelectedRows : ''} CBAM ${numberOfSelectedRows > 1 ? 'records' : 'record'}?`,
    //             body: `${numberOfSelectedRows > 1 ? 'These' : 'This'} record${numberOfSelectedRows > 1 ? 's' : ''} will be deleted permanently and will not be reflected in any ongoing runs.
    //             Locked CBAM runs in which ${numberOfSelectedRows > 1 ? 'these' : 'this'} record${numberOfSelectedRows > 1 ? 's were' : ' was'} used wouldn’t be affected. 

    //             <span class="fw-bold">Are you sure you want to continue?</span>`,
    //             buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
    //             buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
    //         },
    //         minHeight: '200px',
    //         minWidth: '450px'
    //     });

    //     dialogRef.disableClose = true;
    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result) {
    //             console.log("delete works");
    //         }
    //         else {
    //             console.log("does not works");
    //         }
    //     });
    // }

    openDialog() {
        const dialogRef = this.dialog.open(CreateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                    this.generateReport(result.response.runID, result.response.id);
                }
            });
    }

    openAuditDetailsDialog(data) {
        const dialogRef = this.dialog.open(AuditDetailsComponent,
            {
                data: {
                    dataSource: data
                },
                height: '100vh',
                width: '800px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    openSendEmailDialog(data) {
        const dialogRef = this.dialog.open(SendEmailComponent, {
            data: {
                dataSource: data
            },
            minWidth: '500px'
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    downloadReport(row) {
        if (row.file) {
            let url: string;
            url = row.file;
            window.open(url, '_blank');
        } else {
            this.generateReport(row.runID, row.id);
        }
    }

    generateReport(runID, id) {
        let url: string;
        url = `${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}organizations/${this.currentOrgID}/cbam/run/${runID}/report/${id}/excel`;
        window.open(url, '_blank');
        this.refreshBtn.nativeElement.click();
    }
}
