import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { from, fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Page, PageM } from '@carbon/model/ongoing-run.model'; 

//tsc-library
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProcessController } from '@carbon/controller/process.controller';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, FunnelFilterComponent, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';

// /tsc-library/
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    searchValue: any
    searchFlag: boolean = false;
    refreshFlag: boolean = false;

    // displayedColumns: string[] = ['name', 'description', 'dataInputField', 'isCBAM', 'action'];
    displayedColumns: string[] = ['name', 'description', 'isCBAM', 'action'];

    dataSource: PageM[] = [new Page()];
    filterArr: any[] = [];
    resultLength: number;

    productID: any;

    processTypeList = [
        {
            "id": 1,
            "keyID": "ALL",
            "name": "Select all"
        },
        {
            "id": 2,
            "keyID": "CBAM_PROCESS",
            "name": "CBAM Process"
        },
        {
            "id": 3,
            "keyID": "NON_CBAM_PROCESS",
            "name": "Non-CBAM Process"
        }
    ]

    processTypeFlag: boolean = false;
    processTypeFC: FormControl = new FormControl('ALL');

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('processTypeSelect') processTypeSelect: FunnelFilterComponent;

    constructor(
        private storageService: StorageService,
        private processController: ProcessController,
        private toastrService: ToastrService,
        private dialog: MatDialog,
        private router: Router
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    SearchFn($event) {
        this.searchValue = $event;
        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
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
            this.processTypeSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = [];
                let searchValue = null;
                if (this.searchFlag) { searchValue = 'name:' + this.searchValue;}

                if (this.processTypeFlag) {
                    if (this.processTypeFC.value == 'ALL') {
                        this.processTypeFlag = false;
                    } else {
                        this.filterArr.push('processType:' + this.processTypeFC.value);
                    }
                }

                if (this.refreshFlag) {
                    this.refreshFlag = false;
                }
                return this.processController.getProcessByPage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    searchValue,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource) => {

                if (dataSource === null) {
                    return [];
                }
                this.resultLength = dataSource.totalCount;
                return dataSource.records;
            })
        ).subscribe((dataSource: any[]) => (this.dataSource = dataSource));
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    public routeToUpdateProcess = (row) => {
        this.router.navigate(['/source/process', row.id, 'update']);
    }
     
    navigateTo(processID) {
        this.router.navigate(['/source/process', processID, 'view']);
    }
}
