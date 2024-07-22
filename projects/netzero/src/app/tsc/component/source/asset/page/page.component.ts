import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    FormControl
} from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import {
    merge,
    fromEvent,
    of as observableOf
} from 'rxjs';

import {
    map,
    startWith,
    switchMap,
    catchError,
} from 'rxjs/operators';

import {
    faPlus,
    faSearch,
    faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

import { AssetM } from '@netzero/model/asset.model';
import { SourceTypeKeyIDEnum } from '@netzero/enum/source.enum';
import { AssetController } from '@netzero/controller/asset.controller';
import { BulkUploadDialog } from '../../shared/bulk-upload/bulk-upload-dialog.component';
import { CreateUpdateComponent } from '../create-update/create-update.component';

// tsc-library
import {
    COMMON_CONSTANT,
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    ButtonTooltipEnum
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styles: []
})
export class PageComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faSearch = faSearch;
    faEllipsisH = faEllipsisH;

    currentOrgID: any;

    asset: AssetM;

    dataSource;
    resultLength: number;
    displayedColumns: string[] = ['assetID', 'assetName', 'description', 'assetKeyID', 'option'];

    searchFC: FormControl = new FormControl('');

    searchValue: string = '';
    searchLength: number = 0;

    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    filter: string = '';
    filterValue: any = 'all';

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('AllSourceBtn', { static: true }) AllSourceBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private assetController: AssetController,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    ngAfterViewInit() {

        /* auto getAllSource on search field clear */
        this.searchFC.valueChanges
            .subscribe((searchValue) => {
                if (searchValue.length == 0) {
                    if (this.filterValue != 'all') {
                        this.getAllAsset('all');
                        this.AllSourceBtn.nativeElement.click();
                    }
                }
            });

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.AllSourceBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            // fromEvent(this.searchBtn.nativeElement, 'click'),
            fromEvent(this.refreshBtn.nativeElement, 'click'),
            fromEvent(this.AllSourceBtn.nativeElement, 'click'))
            .pipe(
                startWith({}),
                switchMap(() => {
                    if (this.refreshFlag) {
                        this.refreshFlag = false;
                    }

                    else if (this.searchFlag) {
                        if (this.searchLength < 1) {
                            this.searchFlag = false;
                            return [];
                        }
                        this.filterValue = '';
                        this.filter = 'assetName:' + this.searchValue;
                    } else {
                        this.filter = this.filterValue;
                    }

                    return this.assetController.getAsset(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.filter,
                        this.currentOrgID,
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {

                    if (dataSource === null) {
                        return [];
                    }

                    // Only refresh the result length if there is new data. In case of rate
                    // limit errors, we do not want to reset the paginator to zero, as that
                    // would prevent users from re-triggering requests.
                    this.resultLength = dataSource.totalCount;
                    return dataSource.asset;
                })
            ).subscribe(dataSource => (this.dataSource = dataSource));
    }

    getAllAsset(value) {
        if (this.searchFC.value.length != 0) {
            this.searchFC.reset('');
        }

        this.searchFlag = false;
        this.filterValue = value;
    }

    refreshFn() {
        this.refreshFlag = true;
        this.refreshBtn.nativeElement.click();
    }

    searchFn() {
        this.searchValue = this.searchFC.value;
        this.searchLength = this.searchValue.length;

        if (this.searchLength > 0) {
            this.paginator.pageIndex = 0;
        }

        this.searchFlag = true;
        this.refreshBtn.nativeElement.click();
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
                height: '100%',
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
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result === 'opSuccess') {
                    this.refreshFn();
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
                if (result === 'blukUploadSuccessfully') {
                    this.refreshFn();
                }
            })
    }

    columnDisplay(value, column) {
        return (value.length > 12) ? (value.substring(0, 18) + '..') : value;
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }
}
