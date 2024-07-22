import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

import {
    fromEvent,
    merge,
    of as observableOf,
} from 'rxjs';

import {
    catchError,
    map,
    startWith,
    switchMap,
} from 'rxjs/operators';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { RequestEmissionDataDialogComponent } from '@carbon/component/subsidiary-emission-data/request-emission-data-dialog/request-emission-data-dialog.component';
import { DeclineRequestDialog } from '../_shared/decline-request/decline-request.component';

import { RequestStatusEnum } from '@carbon/enum/subsidiary.enum';
import { ReceivedEmissionRequestPageM } from '@carbon/model/received-emission-request.model';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { COMMON_CONSTANT, DialogEnum, FunnelFilterComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library



@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;
 
    faEllipsisV = faEllipsisV;

    RequestStatus = RequestStatusEnum;

    dataSource: any[] = [];
    displayedColumns: string[] = ['id', 'name', 'accountingPeriod', 'status', 'actions'];

    currentOrgID: any;
    resultLength: number = 0;

    dateFlag: boolean = false;
    accountingPeriodFC = new FormControl();

    statusFlag: boolean = false;
    status: any[] = [
        { id: 0, key: 'all', name: 'All' },
        { id: 1, key: RequestStatusEnum.DONE, name: 'Done' },
        { id: 2, key: RequestStatusEnum.PENDING, name: 'Pending' },
        { id: 3, key: RequestStatusEnum.DECLINED, name: 'Declined' },
    ];
    statusFC: FormControl = new FormControl('all');

    type: any[];
    typeFlag: boolean = false;
    typeFC: FormControl = new FormControl('all');

    searchValue: string;
    searchFlag: boolean = false;

    chips: any[] = [];
    searchArr: any[] = [];
    filterArr: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    constructor(
        private storageService: StorageService,
        private dialog: MatDialog,
        private subsidiaryController: SubsidiaryController,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getSubsidaryType();
    }

    ngAfterViewInit() {
        this.pickerDirective.datesUpdated.subscribe(() => this.dateFlag = true);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusSelect.mono,
            this.pickerDirective.datesUpdated,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                this.filterArr = [];

                /* search_block */
                {
                    if (this.searchFlag) {
                        this.searchArr.push('name:' + this.searchValue);
                    }
                }

                /* filter_block */
                {
                    if (this.typeFlag) {
                        let type = this.typeFC.value;
                        if (type == 'all') this.typeFlag = false;
                        else this.filterArr.push('type:' + type);
                    }
                    if (this.statusFlag) {
                        let status = this.statusFC.value;
                        if (status == 'all') this.statusFlag = false;
                        else this.filterArr.push('status:' + status);
                    }

                    if (this.dateFlag) {
                        this.filterArr.push('startDate:' + moment(this.accountingPeriodFC.value.startDate).format('YYYY-MM-DD'));
                        this.filterArr.push('endDate:' + moment(this.accountingPeriodFC.value.endDate).format('YYYY-MM-DD'));
                    }
                }

                return this.subsidiaryController.getEmissionResponseByPage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<ReceivedEmissionRequestPageM>) => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = response['totalCount'];
                return response['records'];
            })
        ).subscribe(dataSource => {
            this.dataSource = dataSource;
        });
    }

    getSubsidaryType() {
        this.subsidiaryController.getSubsidaryType()
            .subscribe((typeRes) => {
                this.type = typeRes;
                this.type.unshift({ id: 0, name: 'All', key: 'all' });
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

    toggleTypeChip(type) {
        this.chips = this.chips.filter(chip => chip['type'] != 'type')

        if (type['key'] == 'all') return;
        this.chips.push({ type: 'type', key: type['id'], filter: `${type['name']}` });
    }

    toggleStatusChip(status) {
        this.chips = this.chips.filter(chip => chip['type'] != 'status')

        if (status['key'] == 'all') return;
        this.chips.push({ type: 'status', key: status['id'], filter: `${status['name']}` });
    }

    toggleScopeChip(scope) {
        // Check if a chip of the same type already exists
        const existingChipIndex = this.chips.findIndex(chip => chip.type === scope['type']);

        if (scope['name'] === 'All') {
            if (existingChipIndex !== -1) {
                this.chips.splice(existingChipIndex, 1);
                // this.clearFilter(scope['type']);
            }
            return;
        }
        // If a chip of the same type exists, replace it with the new chip
        if (existingChipIndex !== -1) {
            this.chips.splice(existingChipIndex, 1, { type: scope['type'], key: scope['id'], filter: `${scope['name']}` });
        } else {
            this.chips.push({ type: scope['type'], key: scope['id'], filter: `${scope['name']}` });
        }
    }

    removeChip(chip): void {
        // Remove the chip from the chips array
        this.chips = this.chips.filter(chipItem => chipItem !== chip);

        // Check the type of the chip and reset the corresponding flag or value
        switch (chip['type']) {
            case 'type':
                this.typeFlag = false;
                this.typeFC.reset();
                break;
            case 'status':
                this.statusFlag = false;
                this.statusFC.reset();
                break;
            default:
                console.log('undefined case encountered: ', chip);
        }

        this.refreshBtn.nativeElement.click();
    }

    clearAllChips() {
        this.chips = [];

        /* _close all filters */
        this.dateFlag = false;
        this.typeFlag = false;
        this.statusFlag = false;
        
        this.statusFC.reset('all');

        this.refreshBtn.nativeElement.click();
    }

    openDatepicker() {
        this.pickerDirective.open();
    }

    acceptRequest(requestID) {
        let dialogRef;
        dialogRef = this.dialog.open(RequestEmissionDataDialogComponent, {
            data: {
                requestID: requestID,
                source: 'INTERNAL'
            },
            minWidth: '70vw',
            maxWidth: '70vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    confirmDeclineRequest(requestID, orgName) {
        const dialogRef = this.dialog.open(DeclineRequestDialog,
            {
                data: {
                    parentOrgName: orgName
                },
                minWidth: '500px', 
                maxWidth: '600px' 
            }
        );

        dialogRef.afterClosed().subscribe((result) => {
            if (result?.[CARBON_CONSTANT.DECLINE_DR]) {
                this.declineRequest(requestID, result['reason'])
            }
        })
    }

    declineRequest(requestID, reason) {
        let json = { note: reason };
        this.subsidiaryController.declineRequest(this.currentOrgID, requestID, json)
            .subscribe((declineRes) => {
                this.refreshBtn.nativeElement.click();
            });
    }

}
