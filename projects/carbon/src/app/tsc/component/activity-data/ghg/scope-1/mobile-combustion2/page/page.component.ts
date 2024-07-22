import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';

import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Subscription, fromEvent, merge, of as observableOf } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';


import { ActivityM } from '@carbon/model/activity.model';
import { ActivityService } from '@carbon/service/activity.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, FunnelFilterComponent, MATERIAL_CONSTANT, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
import { DateFilterComponent, DateFormatEnum, DateService } from '@library/date';
// /tsc-library /
@Component({
	selector: 'app-new-list',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
})
export class PageComponent implements AfterViewInit {

    ButtonLabelEnum = ButtonLabelEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    TABLE_CONSTANT = TABLE_CONSTANT
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	COMMON_CONSTANT = COMMON_CONSTANT;

	searchFlag: boolean = false;
	searchValue: string;
	faplus = faPlus;
	faEllipsisV = faEllipsisV;
	statusFlag: boolean = false;
	statusFC: FormControl = new FormControl('all');
	frequencyKeyIDFC = new FormControl('MONTHLY');
	dataSource: any;

	resultLength: number = 0;
	currentOrgID: any;
	activityID: any;
	activityKeyID: any;
	activity = new ActivityM();
	displayedColumns: string[] = ['recordID', 'startDate', 'vechile', 'fuel', 'fuelConsumed', 'distance', 'mileage', 'emission', 'distanceMethod', 'fuelMethod', 'doc', 'action'];

	distanceScreeningTypeList: any[] = [];
	distanceGroupFlag: boolean = false;
	distanceGroupFC: FormControl = new FormControl('all');
	distanceFlag: boolean = false;
	distanceFC: FormControl = new FormControl('all');
	dataInputMethodList: any;

	FuelScreeningTypeList: any[] = [];
	fuelFlag: boolean = false;
	fuelFC: FormControl = new FormControl('all');

	filterArr: Array<string> = [];
	chips: any[] = [];

	isChecked = false;
    activityConfigID: number[] = [];

    dateFlag: boolean = true;
    startDate: string = null;
    endDate: string = null;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;
	@ViewChild('searchBar') searchBar: SearchBarOneComponent;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('scopeSelect') scopeSelect: FunnelFilterComponent;
	@ViewChild('fuelSelect') fuelSelect: FunnelFilterComponent;
	@ViewChild('filterChild') filterChild: DateFilterComponent;
	allActivity: any[];
	constructor(
		private activityDataController: ActivityDataController,
		private activatedRoute: ActivatedRoute,
		private activityService: ActivityService,
		private router: Router,
		private dataInputMethodService: DataInputMethodService,
		private storageService: StorageService,
		private dateService: DateService

	) {
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

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.activatedRoute.data.subscribe(data =>{
			this.activityKeyID = data.activityKeyID
		})
		this.getAllDataInputMethodList();
		this.getAllActivitiesAndFindActivityByKeyID();
	}

	async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivity = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivity);
        this.activityID = this.activity.id;
    }

	async getAllDataInputMethodList() {
		const allDataDistance = { id: 16, name: 'All', keyID: 'all', activityID: 5, type: 'distance' };
		const allDataFuel = { id: 17, name: 'All', keyID: 'all', activityID: 5, type: 'fuel' };
		try {
			const allDataInputMethods = await this.dataInputMethodService.getAllDataInputMethodList();
			this.distanceScreeningTypeList = allDataInputMethods.filter(item => item.type == 'distance');
			this.FuelScreeningTypeList = allDataInputMethods.filter(item => item.type == 'fuel');
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		this.distanceScreeningTypeList.unshift(allDataDistance);
		this.FuelScreeningTypeList.unshift(allDataFuel);
	}
	async getActivityByID(activityID: any) {
		this.activity = await <any>this.activityService.getActivityByID(activityID);
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.scopeSelect.mono,
			this.fuelSelect.mono,
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
				}
				if (this.distanceFlag) {
					if (this.distanceFC.value == 'all') { this.distanceFlag = false; }
					else this.filterArr.push('distanceInputMethodKeyID:' + this.distanceFC.value);

				}
				if (this.fuelFlag) {
					if (this.fuelFC.value == 'all') { this.fuelFlag = false; }
					else this.filterArr.push('fuelInputMethodKeyID:' + this.fuelFC.value);
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

	toggleScopeChip(scope) {
		const existingChipIndex = this.chips.findIndex(chip => chip.type == scope['type']);
		if (scope['name'] == 'All') {
			if (existingChipIndex !== -1) {
				this.chips.splice(existingChipIndex, 1);
				this.clearFilter(scope['type']);
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

	clearFilter(filterType) {
		// Handle clearing specific filters based on filterType
		switch (filterType) {
			case 'distance':
				this.distanceFlag = false;
				this.distanceFC.setValue('all');
				break;

			case 'fuel':
				this.fuelFlag = false;
				this.fuelFC.setValue('all');
		}
		this.refreshBtn.nativeElement.click();
	}
	removeChip(chip): void {
		// Remove the chip from the chips array
		this.chips = this.chips.filter(chipItem => chipItem !== chip);

		// Check the type of the chip and reset the corresponding flag or value
		switch (chip.type) {
			case 'distance':
				this.distanceFlag = false;
				this.distanceFC.setValue('all');
				break;
			case 'fuel':
				this.fuelFlag = false;
				this.fuelFC.setValue('all');
				break;
			// Add more cases for other types of chips if needed
		}
		// Trigger the refresh action
		this.refreshBtn.nativeElement.click();
	}

	clearAllChips() {
		this.distanceFlag = false;
		this.fuelFlag = false;
		this.chips = [];
		this.distanceFC.setValue('all');
		this.fuelFC.setValue('all');
		this.refreshBtn.nativeElement.click();
	}

	routeToAdHoc() {
		this.router.navigate([
			`/activity-data/activity/${this.activityKeyID}/create/adhoc`,]);
	}

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

    routeToADUpdate = (activityDataParam) => {
        this.router.navigate([
			`/activity-data/${activityDataParam['activityDataID']}/activity/${this.activityKeyID}/update`
        ]);
    }
}

