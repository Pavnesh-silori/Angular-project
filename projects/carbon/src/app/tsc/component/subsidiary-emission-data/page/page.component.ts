
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { fromEvent, merge, of as observableOf, } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { MatDialog } from '@angular/material/dialog';

import { SubsidiaryFormComponent } from '../subsidary-form/subsidiary-form.component';

import { SubsidiaryTypeEnum } from '@carbon/enum/subsidiary.enum';
import { SubsidiaryEmissionDataPageM } from '@carbon/model/subsidiary-emission-data-page.model';

import { SubsidiaryEmissionDataController } from '@carbon/controller/subsidiary-emission-data.controller';
import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, FormAction, FunnelFilterComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, PageM, SearchBarOneComponent, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library


@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'
    ]
})
export class PageComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

    SubsidiaryTypeEnum = SubsidiaryTypeEnum;

    currentOrgID: any;

    dataSource: any[] = [];

    resultLength: number = 0;
    displayedColumns: string[] = ['recordID', 'name', 'type', 'accountingPeriod', 'emissions', 'actions'];

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    searchArr: any[] = [];
    filterArr: any[] = [];
    searchValue: string;
    searchFlag: boolean = false;

    type: any[];
    typeFlag: boolean = false;
    typeFC: FormControl = new FormControl('all');

    chips: any[] = [];

    constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private subsidiaryEmissionDataController: SubsidiaryEmissionDataController,
        private subsidiaryController: SubsidiaryController
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getSubsidaryType();
    }

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    @ViewChild('typeSelect') typeSelect: FunnelFilterComponent;

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.typeSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                this.filterArr = [];

                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue);
                }

                if (this.typeFlag) {
                    let type = this.typeFC.value;
                    if (type == 'all') this.typeFlag = false;
                    else this.filterArr.push('type:' + type);
                }

                return this.subsidiaryEmissionDataController.getEmissionDataByPage(
                    this.currentOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.filterArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((response: PageM<SubsidiaryEmissionDataPageM>) => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = response['totalCount'];
                return response['records'];
            })
        ).subscribe(dataSource => {
            this.dataSource = dataSource;
        })
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

    typeChip(type) {
        this.chips = this.chips.filter(chip => chip['type'] != 'type')

        if (type['key'] == 'all') return;
        this.chips.push({ type: 'type', key: type['id'], filter: `${type['name']}` });
    }

    removeChip(chip): void {
        this.chips = this.chips.filter(chipItem => chipItem !== chip);

        switch (chip['type']) {
            case 'type':
                this.typeFlag = false;
                this.typeFC.reset('all');
                break;
            default:
                console.log('undefined case encountered: ', chip);
        }

        this.refreshBtn.nativeElement.click();
    }

    clearAllChips() {
        this.chips = [];

        this.typeFlag = false;
        this.typeFC.reset('all');

        this.refreshBtn.nativeElement.click();
    }

    formatEmissionsTooltip(emissions: any[]): string {
        return emissions.map((e) => `${e.consolidationApproachName}: ${e.emission.toFixed(2)}`).join('\n');
    }

    
    emissionsDisplayCount(emissions: any[]): string {
        if (emissions && emissions.length > 0) {
            const emissionCount = emissions.length - 1;
                return `+${emissionCount}`;
        }
    }

    createUpdateEmissionData(action, subsidaryEmissionID) {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(SubsidiaryFormComponent, {
                data: {
                    action: action,
                    currentOrgID: this.currentOrgID,
                },
                minWidth: '80vw',
                maxWidth: '80vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }
        else {
            dialogRef = this.dialog.open(SubsidiaryFormComponent, {
                data: {
                    action: action,
                    subsidaryEmissionID: subsidaryEmissionID,
                    currentOrgID: this.currentOrgID,
                },
                minWidth: '80vw',
                maxWidth: '80vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });
        }

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

	confirmDelete(emissionData) {
		const dialog = this.dialog.open(DialogOneComponent,
			{
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: 'Delete Subsidiary / Joint Venture emission record?',
                    body: `Record ID ` + emissionData['recordID'] + ` will be deleted permanently. Data associated with this record will not be reflected in dashboards and report.,
                    Are you sure you want to continue?`,
                    buttonOne: 'Close',
                    buttonTwo: 'Delete'
                },

				maxWidth: '600px'
			});

		dialog.afterClosed().subscribe(res => {
			if (res) {
				this.deleteSubsidiaryEmissionDataByID(emissionData);
			}
		});
	}

    deleteSubsidiaryEmissionDataByID(emissionData) {
        this.subsidiaryEmissionDataController.deleteSubsidiaryEmissionDataByID(this.currentOrgID, emissionData['id'])
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();
            }, error => {
                console.log('error in deleteSubsidiaryEmissionDataByID', error);
            });
    }
}
