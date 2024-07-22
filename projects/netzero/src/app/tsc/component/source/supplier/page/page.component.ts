import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    FormControl
} from '@angular/forms';

import {
    faEllipsisH,
    faEllipsisV,
    faPlus,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
    fromEvent,
    merge,
    of as observableOf
} from 'rxjs';

import {
    catchError,
    map,
    startWith,
    switchMap
} from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SupplierController } from '@netzero/controller/supplier.controller';
import { SourceTypeKeyIDEnum } from '@netzero/enum/source.enum';
import { BulkUploadDialog } from '../../shared/bulk-upload/bulk-upload-dialog.component';
import { AssignComponent } from '../assignee/assign.component';
import { CreateUpdateComponent } from '../create-update/create-update.component';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogOneComponent, FunnelFilterComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']

})
export class SupplierComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    faPlus = faPlus;
    faSearch = faSearch;
    faEllipsisH = faEllipsisH;
    faEllipsisV = faEllipsisV;

    ButtonLabelEnum = ButtonLabelEnum;

    currentOrgID: any;
    isFirstTemplate: any;

    dataSource: any[] = [];
    dataSourceLength: number;
    displayedColumns: string[] = ['supplierCode', 'supplierName', 'supplierType', 'shareFacilities', 'portalAccess', 'status', 'keyID', 'option'];


    bulkBtnFlag: boolean = false;
    allComplete: boolean = false;

    chips: any[] = [];

    @ViewChild('sort', { static: true }) sort: MatSort;
    @ViewChild('paginator', { static: true }) paginator: MatPaginator;

    refreshBtnTooltip: 'Refresh'
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    // filter //
    filterArr: any = [];
    resetFlag: boolean = false;

    // searchby filter //
    searchFlag: boolean = false;
    searchValue: string = null;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    // status Funnel filter //
    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('all');
    statusList = [
        { "id": 1, "keyID": 'all', "name": 'All status' },
        { "id": 2, "keyID": 'active', "name": 'Active' },
        { "id": 3, "keyID": 'inactive', "name": 'Inactive' }
    ];
    @ViewChild('statusFilter') statusFilter: FunnelFilterComponent;

    // supplierType funnel filter //
    supplierTypeFlag: boolean = false;
    supplierTypeFC: FormControl = new FormControl(['all']);
    supplierTypes: any[] = [];
    @ViewChild('supplierTypeFilter') supplierTypeFilter: FunnelFilterComponent;

    // portal access Funnel filter //
    portalAccessFlag: boolean = false;
    portalAccessFC: FormControl = new FormControl('all');
    portalAccessList = [
        { "id": 1, "keyID": 'all', "name": 'All' },
        { "id": 2, "keyID": 'True', "name": 'Enabled' },
        { "id": 3, "keyID": 'False', "name": 'Disabled' }
    ];
    @ViewChild('portalAccessFilter') portalAccessFilter: FunnelFilterComponent;

    // share facilities Funnel filter //
    shareFacilitiesFlag: boolean = false;
    shareFacilitiesFC: FormControl = new FormControl('ALL');
    shareFacilitiesList = [
        { "id": 1, "keyID": 'ALL', "name": 'All' },
        { "id": 2, "keyID": 'YES', "name": 'Yes' },
        { "id": 3, "keyID": 'NO', "name": 'No' }
    ];
    @ViewChild('shareFacilitiesFilter') shareFacilitiesFilter: FunnelFilterComponent;

    constructor(
        private dialog: MatDialog,
        private supplierController: SupplierController,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService // tsc-library
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getSupplierAllType();

        this.activatedRoute.data.subscribe(data => {
            const view = data['view'];
            this.isFirstTemplate = view !== 'twoPane';
        });
    }

    async getSupplierAllType() {
        this.supplierTypes = await <any>this.supplierController.getSupplierType().toPromise();
    }

    refreshFn() {
        // this.refreshValue = true;
        this.refreshBtn.nativeElement.click();
    }

    createUpdateSupplier = (operation, data) => {
        const dialogRef = this.dialog.open(CreateUpdateComponent, {
            data: {
                action: operation,
                supplier: data,
                currentOrgID: this.currentOrgID,
            },
            minWidth: '600px',
            maxWidth: '900px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
            panelClass: 'matDialogContainerOverride',
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'opSuccess') {
                this.refreshFn();
            }
        });
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusFilter.mono,
            this.supplierTypeFilter.multi,
            this.portalAccessFilter.mono,
            this.shareFacilitiesFilter.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        )
            .pipe(
                startWith({}),
                switchMap(() => {
                    // initially push dummy filter to handle one multi-select filter in backend (spring-boot issue)
                    this.filterArr = ['dummy:dummyfilter'];

                    if (this.searchFlag) {
                        var searchBy = 'name:' + this.searchValue;
                    }

                    this.getShareFacilitiesFilter();
                    this.getPortalAccessFilter();
                    this.getSupplyTypeFilter();
                    this.getStatusFilter();

                    return this.supplierController.getSupplierByPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.currentOrgID,
                        this.filterArr,
                        searchBy,
                        this.searchFlag
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {

                    if (dataSource === null) {
                        return [];
                    }

                    this.dataSourceLength = dataSource["totalCount"];
                    return dataSource.record;
                })
            ).subscribe((dataSource) => {
                this.dataSource = dataSource.map(item => {
                    item['completed'] = false;
                    return item;
                });
            });
    }

    getStatusFilter() {
        if (this.statusFlag) {
            if (this.statusFC.value == 'all') {
                this.statusFlag = false;
            } else {
                this.filterArr.push('status:' + this.statusFC.value);
            }
        }
    }

    getSupplyTypeFilter() {
        if (this.supplierTypeFlag) {
            const selectedSupplierCount = this.supplierTypeFC.value.length - 1;
            const totalCount = this.supplierTypes.length;
            if (selectedSupplierCount !== totalCount) {
                console.log('totalCount - ', totalCount);
                this.filterArr.push('supplierType:' + this.supplierTypeFC.value);
            } else {
                this.supplierTypeFlag = false;
            }
        }
    }

    getPortalAccessFilter() {
        if (this.portalAccessFlag) {
            if (this.portalAccessFC.value == 'all') {
                this.portalAccessFlag = false;
            } else {
                this.filterArr.push('isPortalEnabled:' + this.portalAccessFC.value);
            }
        }
    }

    getShareFacilitiesFilter() {
        if (this.shareFacilitiesFlag) {
            if (this.shareFacilitiesFC.value == 'all') {
                this.shareFacilitiesFlag = false;
            } else {
                this.filterArr.push('assigneFlag:' + this.shareFacilitiesFC.value);
            }
        }
    }

    rowSelected(): void {
        this.allComplete = this.isAllRowSelected();
        this.bulkBtnFlag = this.enableBulkButton();
    }

    isAllRowSelected(): boolean {
        return this.dataSource.every(row => row['completed']);
    }

    enableBulkButton(): boolean {
        return this.dataSource.some(row => row['completed']);
    }

    selectAll(completed: boolean): void {
        this.allComplete = completed;
        this.dataSource.forEach(row => row['completed'] = completed);
        this.bulkBtnFlag = completed;
    }

    navigateToViewPage(id) {
        console.log('check the view page')
        this.router.navigate([`/source/product-service/product/${id}/details`]);
    }

    // update assigned and unassigned supplier
    // onToggleChange(supplierID, assign) {
    //     console.log(supplierID, assign)
    //     let assigned = null;
    //     console.log('check assign', assign, 'also check', assigned)
    //     if (assign) {
    //         assigned = 'unassign';
    //     } else {
    //         assigned = 'assign';
    //     }

    //     this.supplierController.getSupplierActivityForm(supplierID, this.currentOrgID).subscribe((supplierRes: any) => {
    //         console.log('check the supplier result', supplierRes)
    //         const dialogRef = this.dialog.open(AssignComponent, {
    //             data: {
    //                 action: '',
    //                 currentOrgID: this.currentOrgID,
    //                 activityForm: supplierRes,
    //                 assigned: assigned,
    //                 supplierID: supplierID,
    //             },
    //             minWidth: '600px',
    //             maxWidth: '600px'
    //         });

    //         dialogRef.afterClosed()
    //             .subscribe((result) => {
    //                 console.log('result - ', result);
    //                 if (result === 'success') {
    //                     this.refreshFn();
    //                 }
    //             })
    //     },
    //         error => {
    //             console.log('error in deleteScopeThreeSupplier -', error);

    //         }
    //     )
    // }

    onToggleChange(supplierID: number, assign: boolean) {
        console.log('Toggle value:', assign);
        const assigneFlag = assign ? 'YES' : 'NO';
        console.log(`Toggle changed for supplier ID: ${supplierID}, new value: ${assign}, assigneFlag: ${assigneFlag}`);
        console.log('Data source:', this.dataSource);

        let assigned = assign ? 'unassign' : 'assign';
        console.log('Assign:', assign, 'Assigned value:', assigned);

        if (!assign) {
            assigned = 'unassign';
        } else {
            assigned = 'assign';
        }

    this.supplierController.getSupplierActivityForm(supplierID, this.currentOrgID)
    .subscribe(
        (supplierRes: any) => {
            console.log('Supplier response:', supplierRes);
            const dialogRef = this.dialog.open(AssignComponent, {
                data: {
                    action: '',
                    currentOrgID: this.currentOrgID,
                    activityForm: supplierRes,
                    assigned: assigned,
                    supplierID: supplierID,
                },
                minWidth: '600px',
                maxWidth: '600px'
            });

            dialogRef.afterClosed()
                .subscribe((result) => {
                    console.log('Dialog result:', result);
                    if (result === 'success') {
                        this.refreshFn();
                    }
                });
        },
        error => {
            console.error('Error in getSupplierActivityForm:', error);
        }
    );
    }


bulkUpload() {
    const dialogRef = this.dialog.open(BulkUploadDialog, {
        data: { source: SourceTypeKeyIDEnum.SUPPLIER },
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

bulkUpdate(status: string) {
    const selectedRows = this.dataSource.filter(row => row['completed']);
    if (selectedRows.length === 0) {
        console.error('No items selected.');
        return;
    }

    if (status === 'delete') {
        this.validateDelete(selectedRows);
        // this.showDeleteConfirmation(selectedRows);
    } else {
        this.showUpdateConfirmation(selectedRows, status);
    }
}

showUpdateConfirmation(items: any[], status: string) {
    const isBulk = items.length > 1;
    const name = isBulk ? `${items.length} items` : items[0]?.name;
    const newStatus = status.toLowerCase();
    const message = isBulk ? `Mark these ${items.length} product(s) as ${newStatus}?`
        : `Mark ${name} as ${newStatus}?`;
    let body = '';
    if (newStatus === 'active') {
        body = `<p class="ps-1">You will be able to collect data for this product going forward. Existing records wouldn’t be affected.</p>`;
    }
    else {
        body = `<p class="ps-1">You wouldn’t be able to collect data for this product going forward. Existing records wouldn’t be affected.</p>`;
    }

    const dialogRef = this.dialog.open(DialogOneComponent, {
        // minWidth: '650px',
        maxWidth: '600px',
        data: {
            type: 'confirmation',
            icon: '',
            header: message,
            body: body,
            // confirmationInput: `${newStatus.toUpperCase()}`,
            buttonOne: 'Cancel',
            buttonTwo: `Mark as ${newStatus}`
        }
    });

    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
            this.updateStatusForItems(items, newStatus);
        } else {
            dialogRef.close();
        }
    });
}

updateStatusForItems(items: any[], status: string) {
    // backend supports it, sending a bulk update request
    console.log('Updating status for items:', items, 'to', status);

    this.supplierController.bulkUpload(this.currentOrgID, items.map(item => item.supplierID)).subscribe((res) => {
        this.refreshBtn.nativeElement.click()
    })

    // this.productAndServiceController.updateProductStatus(this.currentOrgID, items.map(item => item.id), status, ProductServiceTypeEnum.PRODUCT_KEY_ID).subscribe((updateRes: any) => {
    // 	this.refreshBtn.nativeElement.click();
    // });
}



validateDelete(items: any[]) {
    const formData = {
        filter: 'sourceID:' + items.map(item => item.id)
    };

    // this.productAndServiceController.getFilteredEmissionRecords(this.currentOrgID, this.source.toLowerCase(), formData).subscribe((records: any) => {
    // 	this.emissionRecords = records;
    // 	this.showDeleteConfirmation(items);
    // });
}

handleClick(func: Function, params: any[]) {
    func(...params);
}

showEmissionRecords(supplier) {
    console.log('supplier - ', supplier);
}

categoryDisplayCount(category: any[]): string {
    if (category.length > 0) {
        const categoryCount = category.length - 1;
        return `+${categoryCount}`;
    }
}

formatCaegoryTooltip(category: any[]): string {
    return category.join('\n');
}

searchFn(value: string) {
    this.searchValue = value;
    if (this.searchValue && this.searchValue.length > 0) {
        this.searchFlag = true;
    } else {
        this.searchFlag = false;
    }
    this.refreshFn();
}

resetFilter() {
    this.statusFlag = false;
    this.supplierTypeFlag = false;
    this.portalAccessFlag = false;
    this.shareFacilitiesFlag = false;
    this.refreshFn();
}

// applyFilter(gas, filterType) {
//     const existingChipIndex = this.chips.findIndex(chip => chip.type === filterType);

//     if (existingChipIndex !== -1) {
//         this.chips.splice(existingChipIndex, 1, { type: filterType, key: gas['id'], filter: `${gas['name']}` });
//     } else {
//         this.chips.push({ type: filterType, key: gas['id'], filter: `${gas['name']}` });
//     }
// }

removeChip(filter): void {
    let filterType = filter.type;
    const existingChipIndex = this.chips.findIndex(chip => chip.type == filterType);

    if(filterType == 'supplier') {
    this.chips.splice(existingChipIndex, 1);
    // this.supplierFlag = false;
    // this.gasNameFC.setValue('all');
} else {
    this.chips.splice(existingChipIndex, 1);
    // this.purchaseTypeFlag = false;
    // this.purchaseTypeFC.setValue('all');
}
this.refreshFn();
    }

isDisabledReset(): boolean {
    return !this.statusFlag && !this.supplierTypeFlag && !this.portalAccessFlag && !this.shareFacilitiesFlag;
}
}
