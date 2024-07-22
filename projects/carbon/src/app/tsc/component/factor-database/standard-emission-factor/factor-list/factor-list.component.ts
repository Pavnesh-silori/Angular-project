import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
    combineLatest,
    fromEvent,
    merge,
    of as observableOf
} from "rxjs";

import {
    catchError,
    map,
    startWith,
    switchMap,
} from "rxjs/operators";

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { SearchBarOneComponent } from '@library/tsc-common';

import { ActivePagePillService } from '@carbon/component/factor-database/active-page-pill/active-page-pill.service';
import { StandardEmissionFactorController } from '@carbon/controller/standard-emission-factor.controller';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, TABLE_CONSTANT } from '@library/tsc-common';


@Component({
    selector: 'sef-factor-list',
    templateUrl: './factor-list.component.html',
    styles: [
    ]
})
export class FactorListComponent implements OnInit {
    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    ActivityKeyIDEnum = ActivityKeyIDEnum;

    readonly US_EEIO_KEY_ID = "us-eeio";

    currentOrgID: any;

    dataSource: any[] = [];
    resultLength: number = 0;

    databaseID: any;
    VersionID: any;
    activityKeyID: any;

    activity = {
        "purchased-electricity": {
            "searchBy": "grid name",
            "sortBy": "gridName",
            "data": [
                {
                    "heading": 'Country Name',
                    "column": 'countryName',
                    "sort-disabled": true
                },
                {
                    "heading": 'Grid Name',
                    "column": 'gridName',
                    "sort-disabled": false
                },
                // {
                //     "heading": 'Calculation Approach Type',
                //     "column": 'calulationApproachType',
                //     "sort-disabled": true
                // },
                {
                    "heading": 'Fossil CO2',
                    "column": 'fossilCo2',
                    "sort-disabled": true
                },
                {
                    "heading": 'CH4',
                    "column": 'ch4',
                    "sort-disabled": true
                },
                {
                    "heading": 'N2O',
                    "column": 'n2o',
                    "sort-disabled": true
                },
                {
                    "heading": 'CO2e',
                    "column": 'co2e',
                    "sort-disabled": true
                },
                {
                    "heading": 'Unit',
                    "column": 'unit',
                    "sort-disabled": true
                }
            ]
        },
        "purchased-cooling": {
            "searchBy": "",
            "data": [
                {
                    "heading": 'CH4',
                    "column": 'ch4',
                    "sort-disabled": true
                },
                {
                    "heading": 'Fossil CO2',
                    "column": 'fossilCo2',
                    "sort-disabled": true
                },
                {
                    "heading": 'N2O',
                    "column": 'n2o',
                    "sort-disabled": true
                },
                {
                    "heading": 'Unit',
                    "column": 'unit',
                    "sort-disabled": true
                }
            ]
        },
        "purchased-heat-steam": {
            "searchBy": "grid name",
            "sortBy": "gridName",
            "data": [
                {
                    "heading": 'Country Name',
                    "column": 'countryName',
                    "sort-disabled": true
                },
                {
                    "heading": 'Fossil CO2',
                    "column": 'fossilCo2',
                    "sort-disabled": true
                },
                {
                    "heading": 'CH4',
                    "column": 'ch4',
                    "sort-disabled": true
                },
                {
                    "heading": 'N2O',
                    "column": 'n2o',
                    "sort-disabled": true
                },
                {
                    "heading": 'Unit',
                    "column": 'unit',
                    "sort-disabled": true
                }
            ]
        },
        "stationary-combustion": {
            "searchBy": "fuel type",
            "sortBy": "fuelType",
            "data": [
                {
                    "heading": 'Fuel Type',
                    "column": 'fuelType',
                    "unit": '',
                    "sort-disabled": false
                },
                {
                    "heading": 'Heat Content (HHV)',
                    "column": 'hhv',
                    "sort-disabled": true
                },
                {
                    "heading": 'CO2 factor',
                    "column": 'fossilCo2',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'CH4 factor',
                    "column": 'ch4',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'N2O factor',
                    "column": 'n2o',
                    "unit": '',
                    "sort-disabled": true
                }
            ]
        },
        "mobile-combustion": {
            "searchBy": "vehicle category",
            "sortBy": "vehicle",
            "data": [
                {
                    "heading": 'Fuel',
                    "column": 'fuel',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Vehicle category',
                    "column": 'vehicle',
                    "unit": '',
                    "sort-disabled": false
                },
                {
                    "heading": 'Year',
                    "column": 'yearRange',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'CO2 factor',
                    "column": 'fossilCo2',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'CH4 factor',
                    "column": 'ch4',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'N2O factor',
                    "column": 'n2o',
                    "unit": '',
                    "sort-disabled": true
                }
            ]
        },
        "us-eeio": {
            "searchBy": "category",
            "sortBy": "categoryName",
            "data": [
                {
                    "heading": 'Category',
                    "column": 'categoryName',
                    "sort-disabled": false
                },
                {
                    "heading": 'Carbon Dioxide',
                    "column": 'carbonDioxide',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Carbon Tetra Fluoride',
                    "column": 'carbonTetrafluoride',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Hexa Fluoroethane',
                    "column": 'hexaFluoroethane',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Unspecified HFCs and PFCs',
                    "column": 'hfcAndpfcUnspecified',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 125',
                    "column": 'hfc125',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 134a',
                    "column": 'hfc134a',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 143a',
                    "column": 'hfc143a',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 23',
                    "column": 'hfc23',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 236fa',
                    "column": 'hfc236fa',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'HFC 32',
                    "column": 'hfc32',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Methane',
                    "column": 'methane',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Nitrogen Tri Fluoride',
                    "column": 'nitrogenTrifluoride',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Nitrogen Oxide',
                    "column": 'nitrogenOxide',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Perflurocyclobutane',
                    "column": 'perFluorocyclobutane',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Perfluropropane',
                    "column": 'perFluoropropane',
                    "unit": '',
                    "sort-disabled": true
                },
                {
                    "heading": 'Sulfer Hexafluoride',
                    "column": 'sulferHexafluoride',
                    "unit": '',
                    "sort-disabled": true
                }
            ]
        }
    };

    get displayedColumns() {
        return this.activity[this.activityKeyID]['data'].map(activity => activity['column']);
    }

    filter: any;
    searchFlag: boolean = false;
    searchValue: String = 'all';

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;

    have_saved_filters: boolean = false;
    retained_pagination;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        storageService: StorageService,
        private activePagePillService: ActivePagePillService,
        private standardEmissionFactorController: StandardEmissionFactorController
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams]).subscribe(([params, queryParams]) => {
            const url = this.router.url;

            if (params['database']) {
                this.databaseID = params['databaseID'];
                const parts = url.split('/'); parts.splice(-4);
                const finalUrl = parts.join('/');

                let folder = {
                    name: decodeURIComponent(params['database']),
                    route: `${decodeURI(finalUrl)}`
                }
                this.activePagePillService.setData(folder);
            }
            if (params['version']) {
                this.VersionID = params['versionID'];

                const parts = url.split('/'); parts.splice(-2);
                const finalUrl = parts.join('/');

                let folder = {
                    name: decodeURIComponent(params['version']),
                    route: `${decodeURI(finalUrl)}`
                }
                setTimeout(() => this.activePagePillService.setData(folder));
            }
            if (params['activity']) {
                this.activityKeyID = params['activity'];
                let folder = {
                    name: queryParams['activity'],
                    route: `${decodeURI(this.router.url.split('?')?.[0])}`,
                    queryParams: queryParams
                }
                setTimeout(() => {
                    this.activePagePillService.setData(folder);
                }, 100);
            }
        });

        // let retained_pagination = this.localStorageUtility.getPagination('sef_factor_pagination');
        // if (retained_pagination) {
        //     this.have_saved_filters = true;
        //     this.retained_pagination = JSON.parse(retained_pagination);
        // }
    }

    ngAfterViewInit() {
        if (this.have_saved_filters) {
            this.sort.direction = this.retained_pagination.find(filter => filter['filter'] === 'sortDirection')['value'];
            this.paginator.pageSize = this.retained_pagination.find(filter => filter['filter'] === 'pageSize')['value'];
            this.paginator.pageIndex = this.retained_pagination.find(filter => filter['filter'] === 'pageIndex')['value'];

            this.have_saved_filters = false;
        }

        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.filter = this.searchValue;

                this.saveFilters();

                return this.standardEmissionFactorController.getFactor(
                    this.currentOrgID,
                    this.databaseID,
                    this.VersionID,
                    this.activityKeyID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.filter
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource): any => {
                if (dataSource === null || dataSource['factors'].length == 0) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = dataSource["totalCount"];
                if (this.activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION
                    || this.activityKeyID == this.US_EEIO_KEY_ID) {
                    this.mapUnits(dataSource['factors'][0]);
                }
                return dataSource["factors"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
        });
    }

    mapUnits(source: any) {

        if (this.activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION) {
            this.activity[this.activityKeyID]['data'].forEach(entry => {
                if (entry.unit == '') entry['unit'] = source[entry['column'] + "Unit"];
            })
        } else if (this.activityKeyID == this.US_EEIO_KEY_ID) {
            this.activity[this.US_EEIO_KEY_ID]['data'].forEach(entry => {
                if (entry.unit == '') entry['unit'] = source['unit'];
            });
        }
    }

    searchFn(search: String) {
        this.searchFlag = true;
        this.searchValue = search;

        if (search.length == 0) {
            this.searchValue = 'all';

            this.searchFlag = false;
            this.searchBar.searchClear();
        }
        this.refreshBtn.nativeElement.click();
    }

    saveFilters() {
        // this.localStorageUtility.setPagination('sef_factor_pagination', this.paginator.pageSize, this.paginator.pageIndex, this.sort.direction);
    }
}
