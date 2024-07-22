import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';

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

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';

import { ButtonTooltipEnum, MATERIAL_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT } from '@carbon/constant/activity.constant';
import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

@Component({
    selector: 'app-activity-config-selection',
    templateUrl: './activity-config-selection.component.html',
    styles: [
    ]
})

export class ActivityConfigSelection implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<ActivityConfigSelection>,
        private router: Router,
        private renderer: Renderer2,
        private activityConfigController: ActivityConfigController,

        storageService: StorageService
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.activityKeyID = data.activityKeyID;
        this.activityTypeKeyID = data.activityTypeKeyID;
        this.showActivityType = data.showActivityType;
    }

    faPlus = faPlus;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    currentOrgID: any;
    activityKeyID: any;
    activityTypeKeyID: any;
    showActivityType: boolean = false;

    pageTitle: string = 'Select an activity form';
    pageSubtitle: string = '';

    dataSource: any[] = [];
    dataSourceLength: number = 0;
    displayedColumn: string[] = ['id', 'name', 'useActivityConfig'];

    searchByPlaceHolder: string = 'form name';
    searchFlag: boolean = false;
    searchValue: string = '';

    filterArr: any[] = [];

    // activity funnel filter
    // allGas: any[] = [];
    // activityFilterHeader: string = 'Gas Released';
    // activityFilterFlag: boolean = false;
    // activityFilterShowSearchBar: boolean = true;
    // activityFiltersearchByPlaceholder: string = 'gas name';
    // activityFilterSearchBy: string[] = ['name'];
    // activityFilterAllLabel: string = 'All Gases';
    // activityFilterView: string = 'name';
    // activityFilterValue: string = 'id';
    // activityFilterType: string = 'multi';
    // activityFilterFC: FormControl = new FormControl(['all']);
    // activityFilterResetFlag: boolean = false;
    // /activity funnel filter/

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    ngOnInit(): void {
        this.showColumn();
    }

    showColumn() {
        if (this.showActivityType) {
            this.displayedColumn = ['id', 'name', 'activityType', 'useActivityConfig'];
        } else {
            this.displayedColumn = ['id', 'name', 'useActivityConfig'];
        }
    }

    ngAfterViewInit() {
        this.heightHandler();
        this.getActivityConfigByPage();
    }

    getActivityConfigByPage() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap(() => {
                // initially push dummy filter to handle one multi-select filter in backend (spring-boot issue)
                this.filterArr = ['dummy:dummyfilter'];

                if (this.activityTypeKeyID) {
                    this.filterArr.push('activityTypes:' + this.activityTypeKeyID);
                }

                if (this.activityKeyID) {
                    this.filterArr.push('activities:' + this.activityKeyID);
                }

                if (this.searchFlag) {
                    var searchBy = ('name:' + this.searchValue);
                }

                return this.activityConfigController.getActivityConfigByPage(
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
            map((response) => {
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

    searchFn($event) {
        this.searchValue = $event;

        if (this.searchValue.length > 0) {
            this.searchFlag = true;
        } else {
            this.searchFlag = false;
        }

        this.refreshBtn.nativeElement.click();
    }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    showCursorPointer(row) {
        let isCursorPointer: boolean = false;

        if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activity.keyID)) {
            isCursorPointer = true;
        } else {
            isCursorPointer = false;
        }

        return isCursorPointer;
    }

    viewActivityConfig = (row) => {
        if (ACTIVITY_CONFIG_VIEW_PAGE_CONSTANT.includes(row.activity.keyID)) {
            this.router.navigate(['/carbon-setting/activity-config', row.id, 'activity', row.activity.keyID, { outlets: { activityConfig: ['view'] } }], { queryParams: { origin: ActivityConfigEnum.PFF, activityKeyID: row.activity.keyID } });
        } else {
            return;
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }

    routeToPFF(activityConfigData) {
        let activityConfig = activityConfigData.activity;
        let activityConfigID = activityConfigData.id;

        // this.router.navigate(['/redirect']).then(() => {
        if (activityConfigData['activity']['keyID'] == ActivityKeyIDEnum.MOBILE_COMBUSTION) {
            this.router.navigate([
                `/activity-data/activity/${activityConfig['keyID']}/create-using-prefilled/${activityConfigID}`,
            ]);
        } else {
            this.router.navigate([
                `/activity-data/activity/${activityConfig['keyID']}`,
                { outlets: { activityData: ['create'], activityConfig: ['update'] } }],
                { queryParams: { activityID: activityConfig['id'], origin: ActivityConfigEnum.AD_HOC, action: 'create', tabView: 'YES', usePFF: 'YES', activityConfigID: activityConfigID } });
        }
    }
}
