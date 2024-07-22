import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import {
	Router,
	ActivatedRoute
}from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { FormControl } from '@angular/forms';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { ActivityM } from '@carbon/model/activity.model';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';

import { ActivityService } from '@carbon/service/activity.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { DateFilterComponent, DateFormatEnum, DateService } from '@library/date';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, FunnelFilterComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

	activityID: any;
	activityKeyID: any;
	activity: ActivityM;
	activityId: any;

    activityConfigID: number[] = [];

	displayedColumns: string[] = ['recordID', 'startDate', 'assetName', 'fuelName', 'fuelConsumed', 'energyGenerated', 'activityInputMethod', 'emission', 'doc', 'action'];

	dataSource: any;
	currentOrgID: string;

	resultLength = 0;

	faplus = faPlus;
	faEllipsisV = faEllipsisV;

	searchFlag: boolean = false;
	searchValue: string;
	statusFC: FormControl = new FormControl('all');

	stationaryScreeningTypeList: any[] = [];
	stationaryGroupFlag: boolean = false;
	stationaryGroupFC: FormControl = new FormControl('all');
	stationaryFlag: boolean = false;
	stationaryFC: FormControl = new FormControl('all');
	dataInputMethodList: any;

	filterArr: Array<string> = [];
	chips: any[] = [];

	isChecked = false;
    allActivities: any[];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;
	@ViewChild('searchBar') searchBar: SearchBarOneComponent;
	@ViewChild('scopeSelect') scopeSelect: FunnelFilterComponent;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
    @ViewChild('filterChild') filterChild: DateFilterComponent;

    constructor(
        activatedRoute: ActivatedRoute,
		storageService: StorageService,
		private router: Router,
		private activityService: ActivityService,
		private dataInputMethodService: DataInputMethodService,
		private activityDataController: ActivityDataController,
        private dateService: DateService,
	) { 
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.activityKeyID = activatedRoute.snapshot.data['activityKeyID'];
        activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam['activityConfigID']) {
                this.activityConfigID = queryParam['activityConfigID'];
                this.dateFlag = queryParam['dateFlag'].toLowerCase() === 'true';
            }
            if (queryParam['startDate']) {
                this.startDate = queryParam['startDate'];
                this.endDate = queryParam['endDate'];
            }
        });
    }

	ngOnInit(): void {
        this.getAllActivitiesAndFindActivityByKeyID();
	}
	// to get a dropdown for filter
	async getAllDataInputMethodList() {
		const allDataStationary = { id: 1, name: 'All', keyID: 'all', activityID: 4, type: 'standard' };
		try {
			const allDataInputMethods = await this.dataInputMethodService.getAllDataInputMethodList();
			this.stationaryScreeningTypeList = allDataInputMethods.filter(item => item.type == 'standard' && item.activityID == this.activityID);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		this.stationaryScreeningTypeList.unshift(allDataStationary);
	}

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
        this.getAllDataInputMethodList();
    }

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.scopeSelect.mono,
			this.filterChild.emitFilter,
			fromEvent(this.refreshBtn.nativeElement, "click"),
		).pipe(
			startWith({}),
			switchMap(() => {
                this.filterArr = ['dummy:dummyfilter'];
                let startDate = null;
                let endDate = null;

				if (this.searchFlag) {
					this.filterArr.push("search:" + this.searchValue);
					this.searchFlag = false;
				}

				if (this.stationaryFlag) {
					if (this.stationaryFC.value == 'all') {
						this.stationaryFlag = false;
					} else {
						this.filterArr.push('activityInputMethodKeyID:' + this.stationaryFC.value);
					}
				}

                if (this.dateFlag) {
                    startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                    endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
                }

                if (this.activityConfigID.length > 0) {
                    this.filterArr.push('activityConfigID:' + this.activityConfigID);
                }

                if (this.startDate != null) {
                    startDate = this.startDate;
                    endDate = this.endDate;
                }

				return this.activityDataController.getActivityDataByPage(
					this.paginator.pageIndex,
					this.paginator.pageSize,
					this.sort.active,
					this.sort.direction,
					this.currentOrgID,
					this.activityKeyID,
					this.filterArr,
                    startDate,
                    endDate,
					this.isChecked
                    ).pipe(catchError(() => observableOf(null)));
			}),
			map((dataSource) => {
				if (dataSource == null) {
					return [];
				}
				this.resultLength = dataSource["totalCount"];
				return dataSource['data'];
			})
		).subscribe((dataSource) => {
			this.dataSource = dataSource;
		})
	}

	dateToogle() {
		this.refreshBtn.nativeElement.click();
	}

	clearAllChips() {
		this.stationaryFlag = false;
		this.chips = [];
		this.stationaryFC.setValue('all');
		this.refreshBtn.nativeElement.click();
	}

	toggleScopeChip(scope) {
		const existingChipIndex = this.chips.findIndex(chip => chip.type == scope['type']);
		if (scope['name'] == 'All') {
			if (existingChipIndex !== -1) {
				this.chips.splice(existingChipIndex, 1);
				this.clearFilter(scope['type']);
			}
			return;
		}

		if (existingChipIndex !== -1) {
			this.chips.splice(existingChipIndex, 1, { type: scope['type'], key: scope['id'], filter: `${scope['name']}` });
		} else {
			this.chips.push({ type: scope['type'], key: scope['id'], filter: `${scope['name']}` });
		}
	}

	clearFilter(filterType) {
		switch (filterType) {
			case 'standard':
				this.stationaryFlag = false;
				this.stationaryFC.setValue('all');
				break;
		}

		this.refreshBtn.nativeElement.click();
	}

	removeChip(chip): void {

		this.chips = this.chips.filter(chipItem => chipItem !== chip);

		// Check the type of the chip and reset the corresponding flag or value
		switch (chip.type) {
			case 'standard':
				this.stationaryFlag = false;
				this.stationaryFC.setValue('all');
				break;
		}
		// Trigger the refresh action
		this.refreshBtn.nativeElement.click();
	}

	routeToAdHoc() {
		this.router.navigate([
			`/activity-data/activity/${this.activityKeyID}`,
			{ outlets: { activityConfig: ['create'], activityData: ['create'] } }],
			{ queryParams: { activityID: this.activityID, origin: 'ad-hoc', action: 'create', tabView: 'YES', from: 'record' } });
	}

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToADUpdate = (activityDataParam) => {
        this.router.navigate([
            `/activity-data/${activityDataParam['activityDataID']}/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
            { queryParams: { activityID: this.activityID, activityDataID: activityDataParam['activityDataID'], activityKeyID: this.activityKeyID, action: 'update', from: 'record' } }
        );
    }

	searchFn(value: string) {
		this.searchValue = value;
		if (this.searchValue) {
			this.searchFlag = true;
		}
		// Reset other filters
		this.statusFC.reset('all');
		this.stationaryFC.reset('all');
		this.clearAllChips();
		this.paginator.pageIndex = 0; // Reset pagination index
	}


}
