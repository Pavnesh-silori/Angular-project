import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, } from 'rxjs/operators';

import { faPlus, faEllipsisV, } from '@fortawesome/free-solid-svg-icons';

import { SourceTypeKeyIDEnum } from '@netzero/enum/source.enum';

import { AssetController } from '@netzero/controller/asset.controller';

import { CreateUpdateComponent } from '../create-update/create-update.component';
import { BulkUploadDialog } from '../../shared/bulk-upload/bulk-upload-dialog.component';

// tsc-library
import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum,
    FunnelFilterComponent,
    StatusService,
    ButtonLabelEnum,
    MessageAlertTypeEnum,
    MessageAlertIconEnum
} from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
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

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    dataSource: any;
    resultLength: number;
    displayedColumns: string[] = ['assetID', 'assetName', 'description', 'status', 'assetKeyID', 'option'];

    searchValue: any;
    searchFlag: boolean = false;

    bulkBtnFlag: boolean = false;
    allComplete: boolean = false;
    selectedRows: any;

    isFirstTemplate: boolean = true;
    selectedAssetID: any;

    filterArr: any[] = [];
    resetFlag: boolean = false;
    statusList = [
        { "id": 1, "keyID": 'all', "name": 'All' },
        { "id": 1, "keyID": 'active', "name": 'Active' },
        { "id": 2, "keyID": 'inactive', "name": 'Inactive' }
    ];
    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');

    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('statusFilter') statusFilter: FunnelFilterComponent;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private assetController: AssetController,
        private storageService: StorageService,
        public statusService: StatusService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe(data => {
            const view = data['view'];
            this.isFirstTemplate = view !== 'twoPane';
            this.selectedAssetID = this.isFirstTemplate ? null : this.activatedRoute.snapshot.params.assetID;
        });
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
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = [];
                if (this.searchFlag) {
                    this.searchValue = ('assetName: ' + this.searchValue);
                }

                if (this.statusFlag) {
                    if (this.statusFC.value == 'all') {
                        this.statusFlag = false;
                    }
                    else {
                        this.filterArr.push('status: ' + this.statusFC.value);
                    }
                }

                return this.assetController.getAsset(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchValue,
                    this.filterArr,
                    this.currentOrgID,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map(dataSource => {
                if (dataSource == null) {
                    return [];
                }
                this.resultLength = dataSource.totalCount;
                return dataSource.asset;
            })
        ).subscribe(dataSource => (this.dataSource = dataSource));
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

    navigateToViewPage(id) {
        this.selectedAssetID = id;
        this.router.navigate([`/source/asset/${id}/details`]);
    }

    createUpdateAsset = (operation, data) => {
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
        } else {
            dialogRef = this.dialog.open(CreateUpdateComponent, {
                data: {
                    action: operation,
                    asset: data,
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

    bulkUpload() {
        const dialogRef = this.dialog.open(BulkUploadDialog, {
            data: { source: SourceTypeKeyIDEnum.ASSET },
            minWidth: '600px',
            maxWidth: '600px'
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == 'blukUploadSuccessfully') {
                    this.refreshBtn.nativeElement.click();
                }
            });
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }
}
