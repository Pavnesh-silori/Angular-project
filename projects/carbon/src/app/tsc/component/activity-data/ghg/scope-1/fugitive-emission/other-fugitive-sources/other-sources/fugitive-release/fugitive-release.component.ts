import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { faEllipsisV, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

import { fromEvent, merge, of as observableOf, ReplaySubject, Subject } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { FugitiveReleasesCreateUpdateDailog } from '../../_shared/fugitive-release-create-update/fugitive-releases-create-update.component';
import { GasDetailsDialog } from '../../_shared/gas-details-dialog/gas-details-dialog.component';

import { OtherFugitiveSourceController } from '@carbon/controller/other-fugitive-source.controller';

// tsc-library
import { DateFilterComponent, DateService } from '@library/date';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, MatSelectSearchService, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// / tsc-library

@Component({
    selector: 'app-fugitive-release',
    templateUrl: './fugitive-release.component.html',
    styleUrls: ['./fugitive-release.component.scss']
})
export class FugitiveReleaseComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;

    currentOrgID: any;

    faPlus = faPlus;
    faSearch = faSearch;

    otherSourceType: any;

    viewFugitiveReleaseCapacity: boolean = true;



    faEllipsisV = faEllipsisV;

    dataSource;
    resultLength: number;
    displayedColumns: string[] = [
        'recordID',
        'startDate',
        'sourceName',
        'totalGasReleased',
        'emission',
        'actions'

    ];

    otherSourceList: any[] = [];
    otherSourceFlag: boolean = false;
    otherSourceFC: FormControl = new FormControl('all');

    searchValue: string = null;
    searchFlag: boolean = false;

    refreshFlag: boolean = false;

    filterArr: Array<string> = [];

    /* retained_filters */
    retained_filters;
    retained_pagination;
    retained_activities;
    prevActivity;
    have_saved_filters: boolean = false;

    isChecked: boolean = false;

    sourceSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('filterChild') filterChild: DateFilterComponent;

    sourceFilterFC: FormControl = new FormControl();
    sourceFilterUnsubscribe = new Subject<void>();
    sourceFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    statusFC: FormControl = new FormControl();

    constructor(
        private dialog: MatDialog,
        private OtherFugitiveSourceController: OtherFugitiveSourceController,
        private router: Router,
        private storageService: StorageService,
        private dateService: DateService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.dateToogle();
        this.getOtherFugitiveSourceList();
    }

    getOtherFugitiveSourceList() {
        this.OtherFugitiveSourceController.getOtherFugitiveSourceListByOrg(this.currentOrgID).subscribe((res: any[]) => {
            this.otherSourceList = res;

            // ngx mat select search
            this.sourceSearchUtil.entityArr = this.otherSourceList;
            this.sourceSearchUtil.createSubscription();
        },error => {
                console.log('error in getOtherFugitiveSourceList -', error);
            })
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, "click").subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.filterChild.emitFilter,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        )
            .pipe(
                startWith({}),
                switchMap(() => {
                    if (!this.have_saved_filters) {
                        this.filterArr = [];
                        if (this.otherSourceFlag) {
                            if (this.otherSourceFC.value == 'all') {
                                this.otherSourceFlag = false;
                            } else {
                                this.filterArr.push('fugitiveSourceID:' + this.otherSourceFC.value);
                            }
                        }
                    }
                    // this.saveFilters();
                    return this.OtherFugitiveSourceController.getOtherFugitiveSourcePage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.filterArr,
                        this.currentOrgID,
                        this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
                        this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
                        this.searchValue,
                        this.isChecked
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map(dataSource => {
                    if (dataSource === null) {
                        return [];
                    }
                    this.resultLength = dataSource.totalCount;
                    return dataSource;
                })
            ).subscribe((response) => {
                this.dataSource = response['data'];

            });
    }

    // saveFilters() {
    //     let other_fugitive_source_filters: any[] = [];
    //     this.filterArr.forEach((filter) => {
    //         let f: string[] = filter.split(':');
    //         other_fugitive_source_filters.push({ filter: f[0], value: f[1] });
    //     });

    //     this.localStorageUtility.setPagination("other_fugitive_source_pagination", this.paginator.pageSize, this.paginator.pageIndex, this.sort.direction);
    //     this.localStorageUtility.setLocalStorage("other_fugitive_source_filters", JSON.stringify(other_fugitive_source_filters));
    // }

    columnDisplay(value, column) {
        if (value != null && (column == 'fugitiveSourceName' || column == 'gasName')) {
            return (value.length > 12) ? (value.substring(0, 25) + '..') : value;
        }
        else if (value != null && column == 'gasQuantity') {
            return (value.length > 12) ? (value.substring(0, 20) + '..') : value;
        }
        else {
            return ' -- ';
        }
    }

    updateFugitveReleased(operation, activityDataID) {
        let dialogRef;
        if (operation == 'UPDATE') {
            dialogRef = this.dialog.open(FugitiveReleasesCreateUpdateDailog, {
                data: {
                    action: operation,
                    currentOrgID: this.currentOrgID,
                    activityDataID: activityDataID
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
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    confirmDelete(fugitiveReleasedID) {
        const dialog = this.dialog.open(DialogOneComponent,
			{
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: 'Delete fugitive releases record?',
                    body: `Emissions from this record will also be deleted. This is an irreversible action.
                    Are you sure you want to continue?`,
                    buttonOne: 'Close',
                    buttonTwo: 'Delete'
                },

				maxWidth: '600px'
			});
		dialog.afterClosed().subscribe(res => {
			if (res) {
				this.deleteEquipmentServicingRecord(fugitiveReleasedID);
			}
		});
	}

    deleteEquipmentServicingRecord(fugitiveReleasedID) {
		this.OtherFugitiveSourceController.deleteOtherFugitiveSource(this.currentOrgID, fugitiveReleasedID).subscribe((deleteRes) => {
			this.refreshBtn.nativeElement.click();
		},
			error => {
				console.log('Error in deleteEquipmentServicingRecord -', error);
			})
	}

    gasDetails(gases) {
        const dialogRef = this.dialog.open(GasDetailsDialog, {
            data: {
                gases: gases
            },
            width: '600px',
            maxHeight: '800px'
        });
    }
    createEquipmentGroup(operation) {
        let dialogRef;
        if (operation == 'CREATE') {
            dialogRef = this.dialog.open(FugitiveReleasesCreateUpdateDailog, {
                data: {
                    action: operation,
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
                    this.refreshBtn.nativeElement.click();
                }
            })
    }
    searchFn(value: string) {
        this.searchFlag = true;
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        } else {
            this.statusFC.reset(['all']);
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }
    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    dateToogle() {
        this.refreshBtn.nativeElement.click();
    }


}
