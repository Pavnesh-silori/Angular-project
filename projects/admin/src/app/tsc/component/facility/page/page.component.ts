import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormControl } from '@angular/forms';

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

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import {
    faPlus,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

// tsc-library
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { FunnelFilterComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/
import { PageM } from '@Admin/model/page.model';
import { StatusEnum } from '@Admin/enum/status.enum';
import { FacilityPageM } from '@Admin/model/facility.model';
import { FacilityController } from '@Admin/controller/facility.controller';
import { MATERIAL_CONSTANT } from '@library/tsc-common';
import { ButtonLabelEnum } from '@library/tsc-common';
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    displayedColumn: string[] = ['id', 'name', 'state', 'country', 'status', 'option'];
    resultLength: number = 0;
    dataSource: any[] = [];
    filterArr: any[] = [];
    rootOrgID: any;

    facilityPageM: PageM<FacilityPageM>;

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
        private toastrService: ToastrService,
        private facilityController: FacilityController,
        private storageService: StorageService,
    ) { }

    ngOnInit() {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
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
                    this.searchArr.push('name:' + this.searchValue);
                }
    
                this.filterArr = [];
                if (this.statusFlag) {
                    if (this.statusFC.value == 'ALL') {
                        this.statusFlag = false;
                    } else {
                        this.filterArr.push('status:' + this.statusFC.value);
                    }
                }

                return this.facilityController.getFacilityByPage(
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

    searchFn(value) {
        this.searchFlag = true;
        this.searchValue = value;

        if (value.length == 0) {
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

    updateFacilityStatusByID(facility) {
        let newStatus = (facility?.['status'] == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE');

        let jsonObject = {};
        jsonObject['status'] = newStatus;
        this.facilityController.updateFacilityStatusByID(this.rootOrgID, facility['id'], jsonObject)
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();

                let toast = this.toastrService.getToastStatus(response['status']);
                this.toastrService.openToast(toast['title'], response['message'], toast['color']);
            });
    }

}
