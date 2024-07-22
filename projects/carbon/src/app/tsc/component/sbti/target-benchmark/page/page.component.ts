import { FormControl } from '@angular/forms';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { TargetBanchmarkCompaniesPageM } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';

// tsc-library
import { FunnelFilterComponent, MATERIAL_CONSTANT, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styles: [
    ]
})
export class PageComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;

    resultLength: number = 0;
    dataSource: any[] = [];
    displayedColumns: string[] = ['name', 'location', 'status'];

    searchArr: any[] = [];
    filterArr: any[] = [];
    searchValue: string;
    searchFlag: boolean = false;

    locationList: any = [];

    location: any[];
    locationFlag: boolean = false;
    locationFC: FormControl = new FormControl('All');

    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('All');
    status: any[] = [
        { id: 0, name: 'All' },
        { id: 1, name: 'Targets Set' },
        { id: 2, name: 'Committed' },
        { id: 3, name: 'Removed' },
    ];

    chips: any[] = [];

    viewMore: boolean = false;
    reportGenerateDate: any;

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('locationSelect') locationSelect: FunnelFilterComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;

    constructor(
        private sbtiController: SbtiController,
    ) { }

    ngOnInit(): void {
        this.getLocationList();
    }

    ngAfterViewInit() {
        this.locationSelect.mono.subscribe(() => this.paginator.pageIndex = 0);
        this.statusSelect.mono.subscribe(() => this.paginator.pageIndex = 0);
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.statusSelect.mono,
            this.locationSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                this.filterArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('company_name:' + this.searchValue);
                }

                if (this.locationFlag) {
                    let location = this.locationFC.value;
                    if (location == 'All') this.locationFlag = false;
                    else this.filterArr.push('location:' + location);
                }
                if (this.statusFlag) {
                    let status = this.statusFC.value;
                    if (status == 'All') this.statusFlag = false;
                    else this.filterArr.push('status:' + status);
                }

                return this.sbtiController.getSBTiTargetCompaniesList(
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<TargetBanchmarkCompaniesPageM>) => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = response['totalCount'];
                if (response['records'].length != 0) {
                    this.reportGenerateDate = response['records'][0]['reportGenerateDate'];
                }
                return response['records'];
            })
        ).subscribe(dataSource => {
            this.dataSource = dataSource;
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

    getLocationList() {
        this.sbtiController.getTargetbranchmarkLocationList().subscribe((response) => {
            this.locationList = response;
            this.locationList.unshift({ id: 0, name: 'All' });
        })
    }

    locationChip(location) {
        this.chips = this.chips.filter(chip => chip['type'] != 'location')

        if (location['name'] == 'All') return;
        this.chips.push({ type: 'location', key: location['id'], filter: `${location['name']}` });
    }

    statusChip(status) {
        this.chips = this.chips.filter(chip => chip['type'] != 'status')

        if (status['name'] == 'All') return;
        this.chips.push({ type: 'status', key: status['id'], filter: `${status['name']}` });
    }

    removeChip(chip): void {
        this.chips = this.chips.filter(chipItem => chipItem !== chip);
        switch (chip['type']) {
            case 'location':
                this.locationFlag = false;
                this.locationFC.reset();
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
        this.locationFlag = false;
        this.statusFlag = false;

        this.locationFC.reset('All');
        this.statusFC.reset('All');

        this.refreshBtn.nativeElement.click();
    }
}