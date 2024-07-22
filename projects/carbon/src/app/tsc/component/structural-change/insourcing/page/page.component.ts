import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

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

import { MatDialog } from '@angular/material/dialog';

import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';

import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogOneComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styles: [
    ]
})
export class PageComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    rootOrgID: any;

    tabType: any;
    type: any;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    displayedColumn: string[] = ['entityName', 'entityStartYear', 'description', 'eventDate', 'option'];
    resultLength: number = 0;
    dataSource: any[] = [];
    filterArr: any[] = [];

    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private ghgBaseYearController: GhgBaseYearController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.INSOURCING) {
                this.type = StructuralChangeTypeEnum.INSOURCING;
            } else if (this.tabType == StructuralChangeTabTypeEnum.OUTSOURCING) {
                this.type = StructuralChangeTypeEnum.OUTSOURCING;
            }
        })
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue)
                }

                return this.ghgBaseYearController.getStructuralChangeByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.rootOrgID,
                    this.type
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource["record"];
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
        this.searchBar.searchClear();
    }

    confirmDelete(record) {
		const dialog = this.dialog.open(DialogOneComponent,
			{
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: `Delete ` + this.tabType + `?`,
                    body: `This account and all the data associated with this account will be permanently deleted.
                    Are you sure you want to continue?`,
                    buttonOne: 'Close',
                    buttonTwo: 'Delete'
                },

				maxWidth: '600px'
			});

		dialog.afterClosed().subscribe(res => {
			if (res) {
                this.deleteStructuralChangeorgByID(record);
			}
		});
	}

    deleteStructuralChangeorgByID(record) {
        this.ghgBaseYearController.deleteStructuralChangeorgByID(this.rootOrgID, record['id'])
            .subscribe(res => {
                this.refreshBtn.nativeElement.click();
            });
    }

}
