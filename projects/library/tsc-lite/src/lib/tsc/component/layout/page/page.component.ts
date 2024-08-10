import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { CreateUpdateLayoutComponent } from '../_dialog/create-update/layout/layout.component';

// tsc-library
import { StorageService } from '@library/storage-service';
import { CommonEvent, DialogEnum, DialogOneComponent, DialogOneEnum, PageM, SearchBarOneComponent, TABLE_CONSTANT, ButtonLabelEnum } from '@library/tsc-common';
import { LayoutM, LayoutController } from '@library/layout-service';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    orgID: any;
    displayedColumn: string[] = ['id', 'name', 'description', 'option'];
    resultLength: number = 0;
    dataSource: any[] = [];
    searchFlag: boolean = false;
    searchValue: string;
    searchArr: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    constructor(
        private router: Router,
        private storageService: StorageService,
        private layoutController: LayoutController,
        private commonEvent: CommonEvent,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
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

                return this.layoutController.getLayoutByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.orgID
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<LayoutM>): any => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response["totalCount"];
                return response["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string) {
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

    navigateToViewPage(id) {
        this.router.navigate([`layout/${id}/list`]);
    }

    openCreateUpdateLayoutDialog(action, layoutID) {
        let dialogRef;
        if (action == 'create') {
            dialogRef = this.dialog.open(CreateUpdateLayoutComponent, {
                data: {
                    action: action
                },
                minWidth: '550px',
                maxWidth: '550px'
            });
            dialogRef.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.result == DialogEnum.SUCCESS_DR) {
                    // Emit the layoutChange event
                    this.commonEvent.layoutChange.next('YES');

                    this.router.navigate([`layout/${dialogRes.layoutID}/list`]);
                }
            })
        } else {
            dialogRef = this.dialog.open(CreateUpdateLayoutComponent, {
                data: {
                    action: action,
                    layoutID: layoutID
                },
                minWidth: '550px',
                maxWidth: '550px'
            });
            dialogRef.afterClosed().subscribe((dialogRes) => {
                if (dialogRes.result == DialogEnum.SUCCESS_DR) {
                    // Emit the layoutChange event
                    this.commonEvent.layoutChange.next('YES');

                    window.location.reload();
                }
            })
        }
    }

    openDeleteLayoutDialog(layoutID, layoutName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete layout?',
                body: '<b>' + layoutName + '</b>' + ' will be deleted permanently.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteLayout(layoutID);
            }
        })
    }

    deleteLayout(layoutID) {
        this.layoutController.deleteLayout(this.orgID, layoutID).subscribe((deleteRes) => {
            // Emit the layoutChange event
            this.commonEvent.layoutChange.next('YES');

            this.refreshBtn.nativeElement.click();
        });
    }
}