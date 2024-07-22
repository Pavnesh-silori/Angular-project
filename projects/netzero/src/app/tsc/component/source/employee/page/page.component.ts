import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, } from 'rxjs/operators';
import { faPlus, faSearch, faEllipsisV, } from '@fortawesome/free-solid-svg-icons';

import { EmployeeM } from '@netzero/model/employee.model';

import { EmployeeController } from '@netzero/controller/employee.controller';

import { CreateUpdateComponent } from '../create-update/create-update.component';

//tsc-library
import { StorageService } from '@library/storage-service';
import {
    DialogOneEnum,
    BulkUploadDialogLib,
    DialogOneComponent,
    FunnelFilterComponent,
    FormAction,
    TABLE_CONSTANT,
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    ButtonTooltipEnum,
    ButtonLabelEnum,
    MessageAlertTypeEnum,
    MessageAlertIconEnum,
    StatusService
} from '@library/tsc-common';
import { ActivatedRoute, Router } from '@angular/router';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
    faPlus = faPlus;
    faSearch = faSearch;
    faEllipsisV = faEllipsisV;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormAction = FormAction;
    ButtonTooltipEnum = ButtonTooltipEnum;
    ButtonLabelEnum = ButtonLabelEnum;

    currentOrgID: any;

    dataSource: any;
    resultLength: number;
    displayedColumns: string[] = ['code', 'firstName', 'department', 'designation', 'emailID', 'joiningDate', 'status', 'option'];

    statusFC = new FormControl('all');
    statusFlag: boolean = false;
    statusList = [
        {
            name: "All",
            keyID: "all"
        },
        {
            name: 'Active',
            keyID: 'ACTIVE'
        },
        {
            name: 'Inactive',
            keyID: 'INACTIVE'
        }
    ];

    searchFC: FormControl = new FormControl('');
    searchValue: string;
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    bulkUploadResponse: any;
    title: any;
    response: any;
    message: any;
    error: boolean = false;
    duplicateData: string;
    mandatoryData: string;

    filter: string = '';
    filterArr: any = []
    filterValue: any = 'all';

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('status') status: FunnelFilterComponent;

    selectedEmployeeID: any;
    isFirstTemplate: boolean = true;

    bulkBtnFlag: boolean = false;
    allComplete: boolean = false;
    selectedRows: any;

    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private storageService: StorageService,
        private employeeController: EmployeeController,
        public statusService: StatusService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe(data => {
            const view = data['view'];
            this.isFirstTemplate = view !== 'twoPane';
            this.selectedEmployeeID = this.isFirstTemplate ? null : this.activatedRoute.snapshot.params.employeeID;
        });
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.status.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'))
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.filterArr = [];
                    if (!this.searchFlag) {
                        this.searchValue = null;
                    }
                    if (this.refreshFlag) {
                        this.refreshFlag = false;
                    }
                    if (this.statusFlag) {
                        if (this.statusFC.value == 'all') { this.statusFlag = false; }
                        else { this.filterArr.push('status:' + this.statusFC.value) }
                    }
                    else {
                        this.filter = this.filterValue;
                    }

                    return this.employeeController.getEmployeeByPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.filterArr,
                        this.currentOrgID,
                        this.searchValue,
                        this.searchFlag
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {

                    if (dataSource == null) {
                        return [];
                    }

                    this.resultLength = dataSource.totalCount;
                    return dataSource.employee;
                })
            ).subscribe((dataSource: EmployeeM) => (this.dataSource = dataSource));
    }

    isAnyFlagTrue(): boolean {
        return this.statusFlag;
    }

    resetFilter() {
        if (this.isAnyFlagTrue()) {
            this.statusFlag = false;
            this.refreshBtn.nativeElement.click();
        }
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

    handleClick(func: Function, params) {
        func(...params);
    }

    refreshFn() {
        this.refreshFlag = true;
        this.searchFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    SearchFn(value: string) {
        this.searchFlag = value.length > 0;
        this.searchValue = this.searchFlag ? ('firstName:' + value) : null;
        this.refreshBtn.nativeElement.click();
    }

    // bulkUpload() {
    //     const dialogRef = this.dialog.open(BulkUploadDialogLib, {
    //         data: { source: "assets/files/employee-upload.xlsx" },
    //         minWidth: "600px",
    //         maxWidth: "600px",
    //     });

    //     dialogRef.afterClosed().subscribe((response) => {
    //         console.log(response);
    //         if (response) {
    //             this.bulkUploadResponse = response;
    //             this.employeeBulkUpload();
    //         }
    //     });
    // }

    // toFormData(): FormData {
    //     const formData = new FormData();
    //     formData.append('file', this.bulkUploadResponse);
    //     return formData;
    // }

    // employeeBulkUpload() {
    //     this.employeeController.bulkUploadEmployee(this.currentOrgID, this.toFormData())
    //         .subscribe((bulkUploadRes) => {
    //             if (bulkUploadRes['title'] == 'Success') {
    //             } else if (bulkUploadRes['title'] == 'Error') {
    //                 this.error = true;
    //                 this.title = bulkUploadRes['title']
    //                 this.message = bulkUploadRes['message'];
    //                 this.response = bulkUploadRes['response'];
    //                 this.errorDialog(this.title, this.message, this.response);
    //                 this.getErrorData();

    //             }
    //         });
    // }

    // errorDialog(title, message, response) {
    //     const dialogRef = this.dialog.open(DialogOneComponent, {
    //         minWidth: '450px',
    //         maxWidth: '700px',
    //         data: {
    //             type: DialogOneEnum.CONFIRMATION,
    //             icon: 'warning',
    //             header: title,
    //             body: message,
    //             buttonOne: 'Cancel',
    //             buttonTwo: 'Try again'
    //         }
    //     });

    //     dialogRef.afterClosed()
    //         .subscribe((result) => {
    //             if (result) {
    //                 this.bulkUpload()
    //             }
    //             else { }
    //         })
    // }

    // getErrorData() {
    //     if (this.response['duplicateDataInRows'].length != 0) {
    //         let dupDataInRows = this.response['duplicateDataInRows'];
    //         this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
    //     }
    //     if (this.response['mandatoryDataMissingInRows'].length != 0) {
    //         let manDataMissingInRows = this.response['mandatoryDataMissingInRows'];
    //         this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
    //     }
    // }

    createUpdateEmployee = (row, operation) => {
        let dialogRef;
        if (operation == 'create') {
            dialogRef = this.dialog.open(CreateUpdateComponent, {
                data: {
                    action: operation,
                    currentOrgID: this.currentOrgID,
                },
                minWidth: '600px',
                maxWidth: '600px',
                position: { right: '-2px', top: '0px' },
            });
        }
        else {
            dialogRef = this.dialog.open(CreateUpdateComponent, {
                data: {
                    action: operation,
                    employeeID: row.id,
                    currentOrgID: this.currentOrgID,
                },
                minWidth: '600px',
                maxWidth: '600px',
                position: { right: '-2px', top: '0px' },
            });
        }

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == 'opSuccess') {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    navigateToViewPage(id) {
        this.selectedEmployeeID = id;
        this.router.navigate([`/source/employee/${id}/details`]);
    }
}
