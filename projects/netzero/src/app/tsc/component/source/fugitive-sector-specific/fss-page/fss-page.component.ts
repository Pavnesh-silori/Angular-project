import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError } from "rxjs/operators";

import {
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import { FugitiveSectorSpecificController } from '@netzero/controller/fugitive-sector-specific.controller';
import { GasService } from '@carbon/service/gas.service';
import { FssCuComponent } from '../fss-cu/fss-cu.component';

// tsc-library
import {
    MATERIAL_CONSTANT,
    TABLE_CONSTANT,
    COMMON_CONSTANT,
    ButtonTooltipEnum,
    FormAction,
    DialogResponseEnum,
    TypeConfirmationDialog,
    ResponseM,
    FunnelFilterComponent
} from '@library/tsc-common';

import { StorageService } from '@library/storage-service';

import {
    ToastrService
} from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-fss-page',
    templateUrl: './fss-page.component.html',
    styles: [
    ]
})

export class FssPageComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
        private fugitiveSectorSpecificController: FugitiveSectorSpecificController,
        private gasService: GasService,

        // tsc-library
        private storageService: StorageService,
        private toastrService: ToastrService
        // /tsc-library
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
    }

    faPlus = faPlus;

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormAction = FormAction;

    pageTitle: string = 'Sector Specific Fugitive Sources';
    pageSubTitle: string = 'Create sector specific custom fugitive sources.';
    searchByPlaceHolder: string = 'source name';

    dataSource: any[] = [];
    dataSourceLength: number = 0;
    displayedColumn: string[] = ['name', 'description', 'gas', 'option'];

    searchValue: any
    searchFlag: boolean = false;

    currentOrgID: any;
    filterArr: Array<string> = [];
    columnValue: any;

    // gas filter
    allGas: any[] = [];
    gasFilterHeader: string = 'Gas Released';
    gasFilterFlag: boolean = false;
    gasFilterShowSearchBar: boolean = true;
    gasFiltersearchByPlaceholder: string = 'gas name';
    gasFilterSearchBy: string[] = ['name'];
    gasFilterAllLabel: string = 'All Gases';
    gasFilterView: string = 'name';
    gasFilterValue: string = 'id';
    gasFilterType: string = 'multi';
    gasFilterFC: FormControl = new FormControl(['all']);
    gasFilterResetFlag: boolean = false;
    // /gas filter/

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('gasFilter') gasFilter: FunnelFilterComponent;

    ngOnInit(): void {
        this.getAllGas();
    }

    ngAfterViewInit() {
        this.getSourceByPage();
    }

    getSourceByPage(): void {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.sort.sortChange,
            this.paginator.page,
            this.gasFilter.multi,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap(() => {
                this.filterArr = [];

                if (this.searchFlag) {
                    this.filterArr.push(`searchSourceName:${this.searchValue}`);
                }

                if (this.gasFilterFlag) {
                    if (!this.gasFilterFC.value.includes('all')) {
                        this.filterArr.push(`gasID:${this.gasFilterFC.value}`);
                    } else {
                        this.gasFilterFlag = false;
                    }
                }

                return this.fugitiveSectorSpecificController.getSourceByPage(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filterArr,
                    this.currentOrgID,
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: any): any => {
                if (response == null) {
                    this.dataSourceLength = 0;
                    return [];
                }

                this.dataSourceLength = response.totalCount;
                return response.otherFugitiveSource;
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    searchFn(value: string): void {
        this.searchValue = value;

        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
            this.searchFlag = false;
        }

        this.refreshBtn.nativeElement.click();
    }

    columnDisplay(value, column) {
        if (value != null && column == 'name') {
            return (value.length > 12) ? (value.substring(0, 12) + '..') : value;
        } else if (value != null && column == 'gasName') {
            this.columnValue = value;
            value = this.arrayToString
            return (value.length > 12) ? (value.substring(0, 25) + '..') : value;
        }
        else if (value != null && column == 'description') {
            return (value.length > 25) ? (value.substring(0, 25) + '..') : value;
        } else {
            return COMMON_CONSTANT.HYPHEN;
        }
    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    get arrayToString(): string {
        return this.columnValue.map(value => value.toString()).join(', ');
    }

    createUpdateSource = (action: string, row): void => {
        const dialogRef = this.dialog.open(FssCuComponent,
            {
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
                data: {
                    action: action,
                    sourceID: row.id
                }
            });

        dialogRef.afterClosed().subscribe((result) => {
            if (result.status == DialogResponseEnum.SUCCESS) {
                this.refreshBtn.nativeElement.click();
            }
        });
    }

    deleteSource = (row) => {
        let sourceID = row.id;

        const dialogRef = this.dialog.open(TypeConfirmationDialog, {
            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: 'Are you sure you want to delete ?',
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>Calculated records won’t be affected and no future calculations will take place for this source.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.fugitiveSectorSpecificController.deleteSourceByID(this.currentOrgID, sourceID).subscribe((response: ResponseM) => {
                    this.refreshBtn.nativeElement.click();
                }, error => {
                    console.log('error in deleteSource -', error);
                });
            }
            else {
                dialogRef.close()
            }
        });
    }

    async getAllGas() {
        this.allGas = <any[]>await this.gasService.getGas();
    }

    resetFilter() {
        this.gasFilterFlag = false;
        this.refreshBtn.nativeElement.click();
    }
}
