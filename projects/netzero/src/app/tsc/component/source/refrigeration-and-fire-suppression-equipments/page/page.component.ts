import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV, faPlus, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { fromEvent, merge, of as observableOf } from 'rxjs';

import { CreateUpdateComponent } from '../create-update/create-update.component';

import { EquipmentController } from '@netzero/controller/equipment.controller';

import { GasService } from '@carbon/service/gas.service';
import { EquipmentService } from '@netzero/service/equipment.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import {
    ButtonLabelEnum,
    ButtonTooltipEnum,
    COMMON_CONSTANT,
    DialogEnum,
    FormAction,
    FunnelFilterComponent,
    MATERIAL_CONSTANT,
    MatSelectSearchService,
    SearchBarOneComponent,
    TABLE_CONSTANT,
    TypeConfirmationDialog
}
    from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styles: [
    ]
})
export class PageComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    FormAction = FormAction;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    currentOrgID: any;

    faPlus = faPlus;
    faSearch = faSearch;
    faTimes = faTimes;
    faEllipsisV = faEllipsisV;

    dataSource;
    dataSourceLength: number = 0;
    displayedColumn: string[] = [
        'name',
        'description',
        'equipmentType',
        'gas',
        'initialDate',
        'initialTotalCapacity',
        'option'
    ];

    filter: string = '';
    filterValue: any = 'all';

    searchValue: string = null;
    searchFlag: boolean = false;

    refreshFlag: boolean = false;
    equipmentList: any[] = [];

    equipmentFlag: boolean = false;
    equipmentFC: FormControl = new FormControl('all');

    filterArr: Array<string> = [];

    gasList: any[] = [];
    gasFlag: boolean = false;
    gasFC: FormControl = new FormControl('all');

    showInfo: boolean = true;

    gasFilterFC: FormControl = new FormControl();
    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);


    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('equipmentSelect') equipmentSelect: FunnelFilterComponent;
    @ViewChild('gasSelect') gasSelect: FunnelFilterComponent;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild('filterBtn', { static: true }) filterBtn: ElementRef;

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private equipmentController: EquipmentController,
        private gasService: GasService,
        private equipmentService: EquipmentService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.getEquipment();
        this.getGas();
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.equipmentSelect.mono,
            this.gasSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
            fromEvent(this.filterBtn.nativeElement, "click")
        )
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.filterArr = [];
                    if (this.searchFlag) {
                        this.filterArr.push("searchGroupName:" + this.searchValue);
                    }

                    
                    if (this.equipmentFlag) {
                        if (this.equipmentFC.value == 'all') {
                            this.equipmentFlag = false;
                        } else {
                            this.filterArr.push('equipmentID:' + this.equipmentFC.value);
                        }
                    }

                    if (this.gasFlag) {
                        if (this.gasFC.value == 'all') {
                            this.gasFlag = false;
                        } else {
                            this.filterArr.push('gasID:' + this.gasFC.value);
                        }
                    }

                    if (this.searchFlag) {
                        this.searchBar.searchFC.patchValue(this.searchValue);
                        this.searchBar.active = true;
                    }

                    return this.equipmentController.getEquipmentPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.filterArr,
                        this.currentOrgID,
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {
                    if (dataSource === null) {
                        return [];
                    }
                    this.dataSourceLength = dataSource.totalCount;
                    return dataSource.equipmentGroup;
                })
            ).subscribe(dataSource => (this.dataSource = dataSource));
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


    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }


    async getEquipment() {
        this.equipmentList = <any>await this.equipmentService.getEquipment();
    }

    async getGas() {
        this.gasList = <any>await this.gasService.getGas();

        // ngx mat select search
        this.gasSearchUtil.entityArr = this.gasList;
        this.gasSearchUtil.createSubscription();
    }

    createUpdateEquipmentGroup = (action: string, id): void =>  {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(CreateUpdateComponent, {
                data: {
                    action: action,
                    currentOrgID: this.currentOrgID,
                },
                minWidth: '600px',
                maxWidth: '600px',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        else {
            dialogRef = this.dialog.open(CreateUpdateComponent, {
                data: {
                    action: action,
                    group: id,
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
                if (result === DialogEnum.SUCCESS_DR) {
                    this.filterBtn.nativeElement.click();
                }
            })
    }

    deleteRecord = (id) =>  {
        const dialog = this.dialog.open(TypeConfirmationDialog,
            {
                minWidth: '650px',
                maxWidth: '600px',
                data: {
                    icon: 'delete',
                    header: 'Are you sure you want to delete ?',
                    body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>Calculated records won’t be affected and no future calculations will take place for this group.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
                    confirmationInput: 'DELETE',
                    buttonOne: 'Cancel',
                    buttonTwo: 'Delete'
                }
            });

            dialog.afterClosed().subscribe((result) => {
                if (result) {
                    this.deleteByID(id)
                }
                else {
                    dialog.close()
                }
            });
    }

    deleteByID(id) {
        this.equipmentController.deleteByID(this.currentOrgID, id)
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();
            }, error => {
                console.log('error in deleteSourceByID', error);
            });
    }

    resetFilter() {
        this.gasFlag = false;
        this.equipmentFlag = false;
        this.searchFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    closeInfo() {
        this.showInfo = false;
    }

    handleClick(func: Function, params: any[]) {
		func(...params);
	}

}
