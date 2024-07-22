import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { cloneDeep } from 'lodash-es';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { CustomEsgMetricCreateUpdateComponent } from './custom-esg-metric/create-update.component';
import { AddUpdateEsgMetricComponent } from './add-esg-metric/add-update-esg-metric.component';

import { EsgMetricCosolidationLogicEnum, EsgTypeKeyIDEnum, TypeEnum } from '@report-framework/enum/esg-type.enum';
import { ReportingFramworkTypeEnum } from '@report-framework/enum/reporting-framework.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { EsgMetricI } from '@report-framework/model/esg-metric.model';
import { ReportPreference } from '@report-framework/model/reporting-preference.model';
import { StandardI } from '@report-framework/model/standard.model';

import { EscMetricController } from '@report-framework/controller/esg-metric.controller';
import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';

import { CustomFrameworkService } from '@report-framework/service/custom-framework.service';
import { MetricTypeService } from '@report-framework/service/metric-type.service';
import { ReportingPreferenceService } from '@report-framework/service/reporting-preference.service';
import { StandardFrameworkService } from '@report-framework/service/standard-framework.service';
import { ActivityService } from '@carbon/service/activity.service';

// import { CustomEsgMetricCreateUpdateComponent } from './custom-esg-metric/create-update.component';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, DialogOneComponent, DialogResponseEnum, FormAction, FunnelFilterComponent, InfoDialogComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, PageM, TABLE_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-esg-metrics',
    templateUrl: './esg-metrics.component.html',
    styleUrls: ['./esg-metrics.component.scss']
})
export class EsgMetricsComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    TABLE_CONSTANT = TABLE_CONSTANT;
    FormAction = FormAction;
    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;

    EsgTypeKeyIDEnum = EsgTypeKeyIDEnum;
    TypeEnum = TypeEnum;
    EsgMetricCosolidationLogicEnum = EsgMetricCosolidationLogicEnum;

    faPlus = faPlus;
    faEllipsisV = faEllipsisV;

    rootOrgID: any;
    currentOrgID: any;

    dataSource: any;
    dataSourceLength: any;
    displayedColumns: string[] = ['select', 'id', 'metricName', 'metricType', 'activityName', 'framework', 'data', 'control', 'option'];

    preference = new ReportPreference();
    preferenceFlag: boolean = false;

    searchFC: FormControl = new FormControl('');
    searchValue: string = '';
    searchFlag: boolean = false;
    refreshFlag: boolean = false;
    resetFlag: boolean = false;

    metricTypeFlag: boolean = false;
    metricTypeFC: FormControl = new FormControl(['all']);

    activityTypeFlag: boolean = false;
    activityTypeFC: FormControl = new FormControl(['all']);

    typeFlag: boolean = false;
    typeFC: FormControl = new FormControl(['all']);

    reportingFrameworkFlag: boolean = false;
    reportingFrameworkFC: FormControl = new FormControl(['all']);
    customFramework: any[] = [];
    stdFramework: any[] = [];

    filter: string = '';
    filterArr: any[];

    metricTypeList: StandardI[];
    allFrameworkList: any[] = [];
    activityTypeList: any[] = [];

    selectAllMetricFC = new FormControl(false);
    allEsgMetric: any[] = [];
    allEsgMetricSelect: any[] = [];

    addBtnFlag: boolean = false;
    showAddBtn: boolean = false;

    metricMap = new Set<string>();
    pageIndex: number;

    typeList: any[] = [
        {
            name: 'STANDARD',
            keyID: 'standard'
        },
        {
            name: 'CUSTOM',
            keyID: 'custom'
        }
    ];

    removeCustomFrameworkInfo = {
        title: 'Remove framework from ESG metric',
        body: `<p> You need to delete the activity data associated with the mapped custom framework before 
        you can remove the framework itself. Note that standard frameworks cannot be removed from ESG metrics.</p>`
    }

    noFrameworkMappedInfo = {
        title: 'No custom framework mapped here for this ESG metric',
        body: `<p> You have not any custom framework mapped.</p>`
    }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    @ViewChild('metricTypeSelect') metricTypeSelect: FunnelFilterComponent;
    @ViewChild('activityTypeSelect') activityTypeSelect: FunnelFilterComponent;
    @ViewChild('reportingFrameworkSelect') reportingFrameworkSelect: FunnelFilterComponent;
    @ViewChild('typeSelect') typeSelect: FunnelFilterComponent;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private dialog: MatDialog,
        private renderer: Renderer2,
        private reportingPreferenceController: ReportingPreferenceController,
        private reportingPreferenceService: ReportingPreferenceService,
        private escMetricController: EscMetricController,
        private activityService: ActivityService,
        private metricTypeService: MetricTypeService,
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
    ) {
        this.rootOrgID = parseInt(storageService.getStorage('rootOrgID'));
        this.currentOrgID = parseInt(storageService.getStorage('currentOrgID'));

        activatedRoute.queryParams.subscribe((queryParam) => {
            if (queryParam['stdFramework']) {
                this.stdFramework.push(Number(queryParam['stdFramework']));
            }
            if (queryParam['customFramework']) {
                this.customFramework.push(Number(queryParam['customFramework']));
            }
        });
    }

    ngOnInit(): void {
        this.getReportFrameworkPrefByOrgID();
        this.getAllFramework();
        this.getAllMetricType();
        this.getAllActivityType();
        // this.getEsgAllMetric();
    }

    async getReportFrameworkPrefByOrgID() {
        this.preference = await this.reportingPreferenceService.getReportingPreferenceByOrgID(this.rootOrgID);
        if (this.preference.reportingPreference.length > 0) {
            this.preferenceFlag = true;
            this.getEsgMetricPage();
        } else {
            this.preferenceFlag = false;
        }
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

    getEsgMetricPage() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.refreshBtn.nativeElement, 'click').subscribe(() => this.paginator.pageIndex = 0);

        merge(
            this.paginator.page,
            this.sort.sortChange,
            this.metricTypeSelect.multi,
            this.activityTypeSelect.multi,
            this.reportingFrameworkSelect.multi,
            this.typeSelect.mono,
            fromEvent(this.refreshBtn.nativeElement, 'click'))
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.filterArr = [];

                    if (this.searchFlag) {
                        var searchValue = this.searchValue;
                    }

                    if (this.metricTypeFlag) {
                        if (!this.metricTypeFC.value.includes('all')) {
                            this.filterArr.push('metricType:' + this.metricTypeFC.value);
                        } else {
                            this.metricTypeFlag = false;
                        }
                    }

                    if (this.activityTypeFlag) {
                        if (!this.activityTypeFC.value.includes('all')) {
                            this.filterArr.push('activityType:' + this.activityTypeFC.value);
                        } else {
                            this.activityTypeFlag = false;
                        }
                    }

                    if (this.typeFlag) {
                        this.filterArr.push('type:' + this.typeFC.value);
                    }

                    if (this.reportingFrameworkFlag && this.customFramework.length > 0) {
                        this.filterArr.push('customFramework:' + this.customFramework);
                    }

                    if (this.reportingFrameworkFlag && this.stdFramework.length > 0) {
                        this.filterArr.push('standardFramework:' + this.stdFramework);
                    }

                    return this.escMetricController.getEscMetricPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                        this.sort.active,
                        this.sort.direction,
                        this.rootOrgID,
                        this.filterArr,
                        searchValue
                    ).pipe(catchError(() => observableOf(null)));
                }),
                map((dataSource: PageM<EsgMetricI>) => {
                    if (dataSource == null) {
                        return [];
                    }
                    this.dataSourceLength = dataSource["totalCount"];
                    this.dataSource = dataSource.records;

                    this.getEsgAllMetric();

                    return dataSource.records;
                })
            ).subscribe((dataSource) => {
                this.dataSource = dataSource;
            });
    }

    async getAllFramework() {
        let modifiedFramework: any[];
        let framework: any[];

        this.reportingPreferenceController.getPreferenceEnableFramwork(this.rootOrgID).subscribe((res: any[]) => {
            framework = res;

            modifiedFramework = framework.map((framework: any) => {
                if (framework.type == TypeEnum.STANDARD) {
                    return {
                        ...framework,
                        isStandard: true,
                        uID: 'S' + framework['id']
                    };
                } else if (framework.type == TypeEnum.CUSTOM) {
                    this.showAddBtn = true;
                    return {
                        ...framework,
                        isStandard: false,
                        uID: 'C' + framework['id']
                    };
                }

            });

            this.allFrameworkList = modifiedFramework;

        }, error => {
            console.log('error in getAllPreferenceFramework', error);
        });
    }

    async getAllMetricType() {
        this.metricTypeList = <StandardI[]>await this.metricTypeService.getMetricTypeList(this.rootOrgID);
    }

    async getAllActivityType() {
        let activityList = await this.activityService.getAllActivityNew();
        this.activityTypeList = activityList.filter(a => a.types[0].keyID == ACTIVITY_FORM_TYPE_KEYID_ENUM.ESG_FORM);
    }

    frameworkDisplayCount(framework: any[]): string {
        if (framework.length > 0) {
            const frameworkCount = framework.length - 3;
            return `+${frameworkCount}`;
        }
    }

    getEsgAllMetric() {
        console.log('this.pageIndex --', this.pageIndex)
        console.log('this.paginator.pageIndex --', this.paginator.pageIndex)
        console.log('this.dataSource --', this.dataSource.length)

        if (this.pageIndex == this.paginator.pageIndex) {
            this.allEsgMetric = [];
            this.allEsgMetricSelect = [];
            this.metricMap = new Set<string>();
            this.selectAllMetricFC.patchValue(false);
            this.addBtnFlag = false;
        } else {
            this.pageIndex = this.paginator.pageIndex;
        }

        this.dataSource.forEach(item => {
            const m = `${item.id} - ${item.type}`;
            if (!this.metricMap.has(m)) {
                this.metricMap.add(m);
                const metric = {
                    id: item.id,
                    type: item.type
                }
                this.allEsgMetric.push(metric);
            }
        });
        this.checkAllMetricParsent();

        console.log('this.allEsgMetric --', this.allEsgMetric);
    }

    selectUnselectAll(event: any) {
        // console.log('select unselect this.pageIndex',this.pageIndex)
        // console.log('select unselect this.paginator.pageIndex',this.paginator.pageIndex)

        if (this.pageIndex == this.paginator.pageIndex) {
            this.allEsgMetricSelect = [];
            //console.log('this.allEsgMetricSelect phele --',this.allEsgMetricSelect);
        }
        if (event.checked) {
            this.allEsgMetricSelect = cloneDeep(this.allEsgMetric);
        } else {
            if (this.allEsgMetric.length > 50){
                this.allEsgMetricSelect = cloneDeep(this.allEsgMetric);
                this.removeIds();
            }
            else {
                this.allEsgMetricSelect = [];
            }
        }

        this.setAddBtn();
    }

    removeIds() {
        let ds: any[] = [];
        this.dataSource.forEach(item => {
            const metric = {
                id: item.id,
                type: item.type
            };
            ds.push(metric);
        });
    
        // check two object are equal based on some condition
        const areObjectsEqual = (obj1, obj2) => {
            return obj1.id === obj2.id && obj1.type === obj2.type;
        };
    
        // remove element which is parsent in ds list
        let list = this.allEsgMetricSelect.filter(item => 
            !ds.some(dsItem => areObjectsEqual(dsItem, item))
        );
        this.allEsgMetricSelect = list;
    }
    

    isMetricChecked(row): boolean {
        let value = this.allEsgMetricSelect.find(item => item.id == row.id && item.type == row.type);
        if (value) {
            return true;
        } else {
            return false;
        }
    }

    selectUnselectMetric(event: any, row) {
        let value = this.allEsgMetricSelect.find(item => item.id == row.id && item.type == row.type);
        if (event.checked) {
            if (value === undefined) {
                let metric = {
                    id: row.id,
                    type: row.type
                }
                this.allEsgMetricSelect.push(metric);
            }
        } else {
            if (value) {
                let index = this.allEsgMetricSelect.indexOf(value);
                if (index != -1) {
                    this.allEsgMetricSelect.splice(index, 1);
                    this.selectAllMetricFC.patchValue(false);
                }
            }
        }
        this.checkAllMetricParsent();
    }

    checkAllMetricParsent() {
        // console.log('this.allEsgMetric --', this.allEsgMetric);
        // console.log('this.allEsgMetricSelect --',this.allEsgMetricSelect);

        if (this.dataSource.every(item1 =>
            this.allEsgMetricSelect.some(item2 =>
                item1.id == item2.id && item1.type == item2.type))) {
            this.selectAllMetricFC.patchValue(true);
            // console.log('this.selectAllMetricFC 2 --', this.selectAllMetricFC.value);
        } else {
            this.selectAllMetricFC.patchValue(false);
        }

        this.setAddBtn();
    }

    setAddBtn() {
        if (this.allEsgMetricSelect.length > 0) {
            this.addBtnFlag = true;
        } else {
            this.addBtnFlag = false;
        }
    }

    refreshFilter() {
        this.metricTypeFlag = false;
        this.activityTypeFlag = false;
        this.reportingFrameworkFlag = false;
        this.typeFlag = false;
        this.selectAllMetricFC.patchValue(false);
        this.addBtnFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    createUpdateCustomMetric(action, id) {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(CustomEsgMetricCreateUpdateComponent, {
                data: {
                    action: action,
                },
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });
        }
        else {
            dialogRef = this.dialog.open(CustomEsgMetricCreateUpdateComponent, {
                data: {
                    action: action,
                    id: id
                },
                height: '100vh',
                width: '600px',
                position: { right: '-2px', top: '0px' },
                disableClose: true,
                panelClass: 'matDialogContainerOverride',
            });
        }

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogResponseEnum.SUCCESS) {
                    this.addBtnFlag = false;
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    addEsgMetricToCustomFramework(action, metricID, type, framework) {
        let dialogRef;
        if (action == FormAction.CREATE) {
            dialogRef = this.dialog.open(AddUpdateEsgMetricComponent, {

                minWidth: '700px',
                maxWidth: '800px',
                data: {
                    action: action,
                    allEsgMetricSelect: this.allEsgMetricSelect
                }
            });
        } else if (action == FormAction.UPDATE) {
            let linkedFramework = framework.filter(f => f.isRecordLinkFlag == false && f.type == TypeEnum.CUSTOM);
            console.log('linkedFramework --', linkedFramework);
            if (linkedFramework.length > 0) {
                dialogRef = this.dialog.open(AddUpdateEsgMetricComponent, {

                    minWidth: '700px',
                    maxWidth: '800px',
                    data: {
                        action: action,
                        frameworkList: framework,
                        metricID: metricID,
                        type: type
                    }
                });
            } else {
                dialogRef = this.dialog.open(InfoDialogComponent,
                    {
                        data: linkedFramework.length > 0 ? this.removeCustomFrameworkInfo : this.noFrameworkMappedInfo,
                        minWidth: '400px',
                        maxWidth: '500px',
                    });
            }
        }
        dialogRef.afterClosed().subscribe((result) => {
            if (result == DialogResponseEnum.SUCCESS) {
                this.allEsgMetricSelect = [];
                this.addBtnFlag = false;
                this.refreshBtn.nativeElement.click();
            } else {
                dialogRef.close()
            }
        });
    }

    getFrameworkID() {
        this.stdFramework = [];
        this.customFramework = [];
        if (this.reportingFrameworkFlag) {
            this.reportingFrameworkFC.value.forEach(value => {
                let framework = this.allFrameworkList.find(framework => framework.uID == value);
                if (framework) {
                    if (framework.type == ReportingFramworkTypeEnum.STANDARD) {
                        this.stdFramework.push(framework.id);
                    } else {
                        this.customFramework.push(framework.id);
                    }
                }
            });
        }
    }

    deleteConfirmation(id) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete ESG Metric?',
                body: `This ESG metric will be deleted permanently and you won't be able to add data for this metric.
                Are you sure you want to continue?`,
                buttonOne: 'Close',
                buttonTwo: 'Delete'
            },
            minWidth: '500px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEsgMetric(id);
            }
        });
    }

    deleteEsgMetric(id) {
        this.escMetricController.deleteEsgMetric(this.rootOrgID, id).subscribe((deleteRes: any) => {
            this.refreshBtn.nativeElement.click();
        }, error => {
            console.log('Error in deleteConfig', error);
        });
    }

    getPreference() {

    }

    handleClick(func: Function, params: any[]) {
        func(...params);
    }

}
