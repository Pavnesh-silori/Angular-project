import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';

import { Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import {
    faPlus,
    faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

import { FacilityI } from '../tsc/model/facility.model';
import { FacilityController } from '../tsc/controller/facility.controller';

import { CreateUpdateComponent } from '../create-update/create-update.component';

// tsc-library
import {
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    COMMON_CONSTANT,
    ButtonTooltipEnum,
    FormAction,
    DialogResponseEnum,
    PageM,
    StatusService,
    TypeConfirmationDialog
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';
// tsc-library

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

    pageTitle: string = 'Facility';
    pageSubtitle: string = 'create facility inside organization';
    searchByPlaceHolder: string = 'facility name';

    dataSource: FacilityI[] = [];
    dataSourceLength: number = 0;
    displayedColumn: string[] = ['select', 'id', 'name', 'state', 'status', 'option'];
    selection = new SelectionModel(true, []);
    showBulkActionContainer: boolean = false;

    currentOrgID: any;

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private facilityController: FacilityController,

        // tsc-library
        storageService: StorageService,
        private statusService: StatusService,
        // /tsc-library/
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.getFacilityByPage();
    }

    getFacilityByPage() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.sort.sortChange,
            this.paginator.page,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                return this.facilityController.getFacilityByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<FacilityI>): any => {
                if (response == null) {
                    this.dataSourceLength = 0;
                    return [];
                }

                this.dataSourceLength = response.totalCount;
                return response.records;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string) {
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.showBulkActionContainer = true;

        if (this.isAllSelected()) {
            this.selection.clear();
            this.showBulkActionContainer = false;
            return;
        }

        this.selection.select(...this.dataSource);
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    createFacility(action: string) {
        const dialogRef = this.dialog.open(CreateUpdateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action
                }
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.router.navigate(['/design/facility/1234/view']);
                }
            });
    }

    updateFacility = (action, row) => {
        const dialogRef = this.dialog.open(CreateUpdateComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    facilityID: row.id
                }
            });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogResponseEnum.SUCCESS) {
                    this.router.navigate(['/design/facility/1234/view']);
                }
            });
    }

    viewFacility = (data) => {
        this.router.navigate(['/design/facility', data.id, 'view']);
    }

    deleteFacility = (data) => {
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {
            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: 'Are you sure you want to delete ?',
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This facility will be deleted.</p><span class="fw-bold ps-1">Are you sure you want to continue?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });
    }

}
