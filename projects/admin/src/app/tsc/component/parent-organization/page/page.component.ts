import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { StatusEnum, RequestAccessEnum } from '@Admin/enum/status.enum';

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
} from "rxjs/operators";

//tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { MATERIAL_CONSTANT } from '@library/tsc-common';
import { TABLE_CONSTANT, FunnelFilterComponent } from '@library/tsc-common';
// /tsc-library

import { ParentOrganizationController } from '@Admin/controller/parent-organization.controller';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    StatusEnum = StatusEnum;
    RequestAccessEnum = RequestAccessEnum;
    TABLE_CONSTANT = TABLE_CONSTANT
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    
    rootOrgID: any;

    displayedColumn: string[] = ['id', 'name', 'state', 'country', 'status', 'actions'];
    resultLength: number = 0;
    dataSource: any[] = [];
    filterArr: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');

    statusList = [
        {
            "id": 1,
            "keyID": "ALL",
            "name": "All status"
        },
        {
            "id": 2,
            "keyID": "ACTIVE",
            "name": "Active"
        },
        {
            "id": 3,
            "keyID": "INACTIVE",
            "name": "Inactive"
        }
    ]

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;

    constructor(
        private parentOrganizationController: ParentOrganizationController,
        public toastrService: ToastrService,
        private StorageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.StorageService.getStorage('rootOrgID');
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue)
                }

                this.filterArr = [];
                if (this.statusFlag) {
                    if (this.statusFC.value == 'ALL') {
                        this.statusFlag = false;
                    } else {
                        this.filterArr.push('status:' + this.statusFC.value);
                    }
                }

                return this.parentOrganizationController.getParentOrganizationByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.filterArr,
                    this.rootOrgID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn($event) {
        this.searchFlag = true;
        this.searchValue = $event;

        if ($event.length == 0) {
            this.resetSearch();
        } else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    updateParentOrgStatusByID(org, newStatus) {
        const requestBody = {
            parentOrgID: org['id'],
            approvalStatus: newStatus
        };
        this.parentOrganizationController.updateParentOrgStatusByID(this.rootOrgID, requestBody)
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();
                let toast = this.toastrService.getToastStatus(response['status']);
                this.toastrService.openToast(toast['title'], response['message'], toast['color']);
            });
    }

}
