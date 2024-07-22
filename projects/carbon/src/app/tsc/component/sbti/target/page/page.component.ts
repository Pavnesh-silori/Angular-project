import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { EChartsOption } from 'echarts';

import { MaintenanceComponent } from '../create/sme/near-term/maintenance/maintenance.component';
import { ReductionComponent as NearTermReductionComponent } from '../create/sme/near-term/reduction/reduction.component';
import { ReductionComponent as LongTermReductionComponent } from '../create/sme/long-term/reduction/reduction.component';
import { NearTermComponent } from '../create/enterprise/near-term/near-term.component';
import { LongTermComponent } from '../create/enterprise/long-term/long-term.component';

import { SbtiPage, SbtiPageM } from '@carbon/model/sbti.model';
import { LongTermEnum, NearTermEnum, OrgSizeEnum } from '@carbon/enum/sbti.enum';
import { SBTI_EMISSION_MD } from '@carbon/constant/chart.constant';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { SbtiController } from '@carbon/controller/sbti.controller';

import { TargetUtility } from '../target.utility';

// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, LOADING_GRAPHIC, NO_DATA_GRAPHIC, PageM, SearchBarOneComponent, StatusEnum, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

// /tsc-library

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    TABLE_CONSTANT = TABLE_CONSTANT;

    CARBON_CONSTANT = CARBON_CONSTANT;

    @Output()
    emitFilter: EventEmitter<boolean> = new EventEmitter(false);

    @Input()
    statusValue: string;


    displayedColumn: string[] = ['name', 'domain', 'type', 'targetYear', 'actions'];

    rootOrgID: any;
    dataSource: SbtiPage[] = [];
    resultLength: number;
    faEllipsisV = faEllipsisV;

    chartMetaData = SBTI_EMISSION_MD;
    noDataOption;

    searchFlag: boolean = false;
    searchArr: any[] = [];
    searchValue: string;

    @Input() refresh: boolean = false;
    refreshBool: boolean = true;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('searchBar') searchBar: SearchBarOneComponent;
    
    constructor(
        private storageService: StorageService,
        private sbtiController: SbtiController,
        private targetUtility: TargetUtility,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        if (this.statusValue == CARBON_CONSTANT.ACTIVE_STATUS) {
            this.displayedColumn.splice(4, 0, 'progress');
        }

        this.targetUtility.$target.subscribe(() => this.refreshBtn.nativeElement.click());

        this.noDataOption = {
            title: {
                text: this.chartMetaData.title,
                textStyle: {
                    color: this.chartMetaData.titleColor
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes.refresh?.firstChange) {
            this.refreshBtn.nativeElement.click();
        }
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => {
            this.paginator.pageIndex = 0;
            this.refreshBool = !this.refreshBool;
            this.emitFilter.next(this.refreshBool);
           
        });
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, "click"),
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];
                if (this.searchFlag) {
                    this.searchArr.push('name:' + this.searchValue);
                }

                return this.sbtiController.getTargetPageRecords(
                    this.rootOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr,
                    this.statusValue
                ).pipe(catchError(() => {
                    return observableOf(null)
                }));

            }),
            map((response: PageM<SbtiPageM>) => {
                if (response == null) {
                    this.resultLength = 0;
                    return [];
                }

                this.resultLength = response['totalCount'];
                return response['records'];
            })
        ).subscribe(dataSource => {
            // this.dataSource = dataSource;
            // TODO_PN make datasource work
            this.dataSource = dataSource;
        });
    }

    convertToAbs(input) {
        return Math.abs(input);
    }

    roundToTwoDecimalPlaces(inputNumber: any): number {
        return parseFloat(inputNumber.toFixed(2));
    }

    drawChart(dataSource) {
        let renderFlag: string = 'LOADING';
        let chartDataOption: EChartsOption;
        let chartData: any;

        if (dataSource['progress'] && dataSource['progress']['data']) {
            chartData = dataSource['progress'];
            renderFlag = 'DATA';
        } else {
            renderFlag = 'NO_DATA';
        }

        if (renderFlag == 'LOADING') {
            chartDataOption = LOADING_GRAPHIC;
        } else if (renderFlag == 'DATA') {

            chartDataOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                },
                xAxis: {
                    type: 'category',
                    data: chartData.data.map(m => ({
                        value: m.year,
                    })),
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                },
                series: [
                    {
                        name: 'Total emissions',
                        type: 'line',
                        data: chartData.data.map(m => ({
                            value: m.currentEmission,
                        })),
                        tooltip: {
                            valueFormatter: (value) => {
                                return value == null ? TABLE_CONSTANT.TABLE_NO_DATA : this.roundToTwoDecimalPlaces(value) + ' ' + chartData.uomName;
                            }
                        },
                    },
                    {
                        name: 'Target emissions',
                        type: 'line',
                        data: chartData.data.map(m => ({
                            value: m.targetedEmission,
                        })),
                        tooltip: {
                            valueFormatter: (value) => {
                                return value == null ? TABLE_CONSTANT.TABLE_NO_DATA : this.roundToTwoDecimalPlaces(value) + ' ' + chartData.uomName;
                            }
                        },
                    }
                ]
            };
        } else {
            chartDataOption = this.noDataOption;
        }
        return chartDataOption;
    }

    searchFn(value: string) {
        if (!this.searchFlag) {
            this.searchFlag = true;
        }
        this.searchValue = value;
        if (value.length == 0) {
            this.resetSearch();
        }
        this.paginator.pageIndex = 0;
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.searchBar.searchClear();
    }

    deleteConfirmation(targetID) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete science based target?',
                body: `This target will be deleted permanently and you won't be able to track it's progress.
                Are you sure you want to continue?`,
                buttonOne: 'Close',
                buttonTwo: 'Delete'
            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deleteTarget(targetID);
            }

        });
    }

    inactiveConfirmation(targetID) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'warning',
                header: 'Inactive science based target?',
                body: `This target will be inactive permanently and you won't be able to track it's progress.
                Are you sure you want to continue?`,
                buttonOne: 'Close',
                buttonTwo: 'Inactive'

            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.updateTargetStatus(targetID);
            }
        });
    }

    deleteTarget(targetID) {
        this.sbtiController.deleteTargetPageRecords(this.rootOrgID, targetID).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
        });
    }

    updateTargetStatus(targetID) {
        this.sbtiController.updateTargetStatus(this.rootOrgID, targetID, CARBON_CONSTANT.INACTIVE_STATUS).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
            this.refreshBool = !this.refreshBool;
            this.emitFilter.next(this.refreshBool);
        });
    }

    updateTarget(target) {
        if (target['orgSize'] == OrgSizeEnum.SME) {
            this.updateSMETarget(target);
        } else {
            this.updateEnterpriseTarget(target);
        }
    }

    updateSMETarget(target) {
        switch (target['termKeyID']) {
            case NearTermEnum.NEAR_TERM_REDUCTION:
                this.updateNearTermTarget(target['id']);
                break;
            case NearTermEnum.NEAR_TERM_MAINTENANCE:
                this.updateMaintenanceTarget(target['id']);
                break;
            case LongTermEnum.LONG_TERM_NETZERO:
                this.updateLongTermTarget(target['id']);
                break;
            default:
                console.log('undefined case encountered - ', target['termKeyID']);
        }
    }

    updateEnterpriseTarget(target) {
        switch (target['termKeyID']) {
            case NearTermEnum.NEAR_TERM_REDUCTION:
                this.updateNearTermTargetEnterprise(target['id']);
                break;
            case LongTermEnum.LONG_TERM_NETZERO:
                this.updateLongTermTargetEnterprise(target['id']);
                break;
            default:
                console.log('undefined case encountered - ', target['termKeyID']);
        }
    }

    updateNearTermTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(NearTermReductionComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.refreshBtn.nativeElement.click();
        });
    }

    updateMaintenanceTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(MaintenanceComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.refreshBtn.nativeElement.click();
        });
    }

    updateLongTermTarget(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(LongTermReductionComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.refreshBtn.nativeElement.click();
        });
    }

    updateNearTermTargetEnterprise(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(NearTermComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.refreshBtn.nativeElement.click();
        });
    }

    updateLongTermTargetEnterprise(targetID) {
        let config: MatDialogConfig = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
        config['data'] = { targetID: targetID };
        let dialogRef = this.dialog.open(LongTermComponent, config);

        dialogRef.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR) this.refreshBtn.nativeElement.click();
        });
    }

}