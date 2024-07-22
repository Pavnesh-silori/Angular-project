
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';

import {
    faEllipsisV,
    faPlus
} from '@fortawesome/free-solid-svg-icons';

import {
    fromEvent,
    merge,
    of as observableOf,
} from 'rxjs';

import {
    catchError,
    map, startWith, switchMap,
} from 'rxjs/operators';
import * as moment from 'moment';

import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import { CancelRequestDialog } from '../_shared/cancel-request/cancel-request.component';
import { CreateComponent } from '../create-update/create.component';

import { RequestStatusEnum, SubsidiaryTypeEnum } from '@carbon/enum/subsidiary.enum';
import { EmissionRequestPageM } from '@carbon/model/emission-request.model'; 
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogEnum, FunnelFilterComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// / tsc-library


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum; 
    TABLE_CONSTANT = TABLE_CONSTANT;
    messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

    RequestStatus = RequestStatusEnum;
    SubsidiaryType = SubsidiaryTypeEnum;

    CARBON_CONSTANT = CARBON_CONSTANT;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    currentOrgID: any;

    dataSource: any[] = [];
    resultLength: number = 0;
    displayedColumns: string[] = ['id', 'name', 'type', 'accountingPeriod', 'status', 'actions'];

    defaultAccountingPeriod: any;

    searchArr: any[] = [];
    searchValue: string;
    searchFlag: boolean = false;

    filterArr: any[] = [];

    dateFlag: boolean = false;
    accountingPeriodFC = new FormControl();

    statusFlag: boolean = false;
    status: any[] = [
        { id: 0, key: 'all', name: 'All' },
        { id: 1, key: RequestStatusEnum.DONE, name: 'Done' },
        { id: 2, key: RequestStatusEnum.PENDING, name: 'Pending' },
        { id: 3, key: RequestStatusEnum.CANCELLED, name: 'Cancelled' },
        { id: 4, key: RequestStatusEnum.DECLINED, name: 'Declined' }
    ];
    statusFC: FormControl = new FormControl('all');

    type: any[];
    typeFlag: boolean = false;
    typeFC: FormControl = new FormControl('all');

    chips: any[] = [];

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('typeSelect') typeSelect: FunnelFilterComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private subsidiaryController: SubsidiaryController
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
            this.typeSelect.mono,
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

                return this.subsidiaryController.getEmissionRequestByPage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<EmissionRequestPageM>) => {
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

    removeChip(chip): void {
        this.chips = this.chips.filter(chipItem => chipItem !== chip);

        switch (chip['type']) {
            case 'type':
                this.typeFlag = false;
                this.typeFC.reset('all');
                break;
            case 'status':
                this.statusFlag = false;
                this.statusFC.reset('all');
                break;
            default:
                console.log('undefined case encountered: ', chip);
        }

        this.refreshBtn.nativeElement.click();
    }

    clearAllChips() {
        this.chips = [];

        this.dateFlag = false;
        this.typeFlag = false;
        this.statusFlag = false;

        this.typeFC.reset('all');
        this.statusFC.reset('all');

        let defaultAccountingPeriod = { startDate: moment().startOf('month'), endDate: moment() };
        this.accountingPeriodFC.patchValue(defaultAccountingPeriod);

        this.refreshBtn.nativeElement.click();
    }

    openDatepicker() {
        this.pickerDirective.open();
    }

    confirmCancelRequest(requestID) {
        const dialogRef = this.dialog.open(CancelRequestDialog,
            { minWidth: '500px' }
        );

        dialogRef.afterClosed().subscribe((result) => {
            if (result == DialogEnum.CANCEL_DR) {
                this.cancelRequest(requestID);
            }
        });
    }

    cancelRequest(requestID) {
        this.subsidiaryController.cancelRequest(this.currentOrgID, requestID)
            .subscribe((response) => {
                this.refreshBtn.nativeElement.click();
            });
    }

    createEmissionRequest() {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = null;
        const dialogRef = this.dialog.open(CreateComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR)
                this.refreshBtn.nativeElement.click();
        });
    }

    editEmissionRequest(requestID, action) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { requestID: requestID, reRequest: (action == CARBON_CONSTANT.RE_REQUEST_BTN_LABEL) };
        const dialogRef = this.dialog.open(CreateComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR)
                this.refreshBtn.nativeElement.click();
        });
    }
}
