import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { PageM } from '@Admin/model/page.model';
import { SubsidiaryPageM } from '@Admin/model/subsidiary.model';
import { SubsidiaryController } from '@Admin/controller/subsidiary.controller';

import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { DialogEnum, DialogOneEnum, SearchBarOneComponent, DialogOneComponent, TABLE_CONSTANT, FunnelFilterComponent, ButtonLabelEnum, MATERIAL_CONSTANT } from '@library/tsc-common';
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

    displayedColumn: string[] = ['id', 'name', 'type', 'state', 'country', 'operationalControl', 'financialControl', 'equityControl', 'status', 'option'];
    resultLength: number = 0;
    dataSource: any[] = [];
    filterArr: any[] = [];
    rootOrgID: any;

    subsidiaryPageM: PageM<SubsidiaryPageM>;

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
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;

    constructor(
        private toasterService: ToastrService,
        private storageService: StorageService,
        private subsidiaryController: SubsidiaryController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
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

                return this.subsidiaryController.getSubsidiaryByPage(
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
        this.searchBar.searchClear();
    }

    confirmStatus(subsidiary, newStatus) {
        let message = '';

        if (subsidiary['status'] == 'ACTIVE' && subsidiary['approvalStatus'] == 'REQUESTED') {
            message = `Data associated with this account will not be affected. However, approval request sent to this account will be cancelled.`;
        } else {
            message = `Data associated with this account will not be affected. However, you will be marked as inactive as the Parent Organization for this account.`;
        }

        const confirmationMsg = 'Are you sure you want to continue?';
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.CONFIRMATION,
                icon: 'info',
                header: 'Mark this Subsidiary / Joint Venture as inactive?',
                body: message + '\n\n' + confirmationMsg,
                buttonOne: 'Cancel',
                buttonTwo: 'Confirm'
            }
        });

        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.updateSubsidaryStatusByID(subsidiary, newStatus);
            }
        });
    }

    updateSubsidaryStatusByID(subsidiary, newStatus) {
        let jsonObject = {};
        if (newStatus == 'REQUESTED') {
            jsonObject['approvalStatus'] = newStatus;
        } else {
            jsonObject['status'] = newStatus;
        }
        this.subsidiaryController.updateSubsidaryStatusByID(this.rootOrgID, subsidiary['id'], jsonObject)
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();

                let toast = this.toasterService.getToastStatus(response['status']);
                this.toasterService.openToast(toast['title'], response['message'], toast['color']);
            });
    }

    confirmDelete(subsidiary) {
        const message = 'This account and all the data associated with this account will be permanently deleted.';
        const confirmationMsg = 'Are you sure you want to continue?';
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '700px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'warning',
                header: 'Delete Subsidiary / Joint Venture?',
                body: message + '\n\n' + confirmationMsg,
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });

        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deleteSubsidiaryByID(subsidiary);
            }
        });
    }

    deleteSubsidiaryByID(subsidiary) {
        this.subsidiaryController.deleteSubsidiaryByID(this.rootOrgID, subsidiary['id'])
            .subscribe(res => {
                this.refreshBtn.nativeElement.click();
                let toast = this.toasterService.getToastStatus(res['status']);
                this.toasterService.openToast(toast['title'], res['message'], toast['color']);
            });
    }

}
