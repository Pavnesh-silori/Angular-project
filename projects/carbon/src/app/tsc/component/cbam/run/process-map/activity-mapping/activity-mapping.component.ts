import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ActivityService } from '@carbon/service/activity.service';
import { ActivityController } from '@carbon/controller/activity.controller';
import { ActivityConfigController } from '@carbon/controller/activity-config.controller';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { FormControl } from '@angular/forms';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

//tsc-library
import { TABLE_CONSTANT, COMMON_CONSTANT, FunnelFilterComponent } from '@library/tsc-common';
import { SelectionModel } from '@angular/cdk/collections';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-activity-mapping',
    templateUrl: './activity-mapping.component.html',
    styleUrls: ['./activity-mapping.component.scss']
})

export class ActivityMappingComponent implements OnInit {
    @Output() closeDialogEvent = new EventEmitter<void>();

    ActivityConfigEnum = ActivityConfigEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;

    faEllipsisV = faEllipsisV;
    faPlus = faPlus;

    currentOrgID: any;

    dataSource: any;
    resultLength: number = 0;
    checkAll: FormControl = new FormControl(false);
    bulkActionArr = [];
    selection = new SelectionModel(true, []);
    currentSelected: any;

    displayedColumns: string[] = ['id', 'formName', 'activityType', 'useActivityConfig'];


    statusFlag: boolean = false;
    statusFC: FormControl = new FormControl('ALL');

    searchFC: FormControl = new FormControl('');
    searchBy: string = '';
    searchFlag: boolean = false;

    activityFlag: boolean = false;
    activityFC: FormControl = new FormControl(['all']);
    all_activity_keyID: any[] = [];
    totalActivity: number = 0;
    activityFilterApplied: boolean = false;
    selected_activity: any[] = [];
    prev;

    formTypeFlag: boolean = false;
    formTypeFC: FormControl = new FormControl(['all']);
    all_form_keyID: any[] = [];
    totalFormActivity: any;
    formFilteredApplied: boolean = false;
    selectFormType: any[] = [];


    allActivity: any;
    allFormType: any;

    filter: string = '';
    filterArr: any[];
    totalActivities: any;

    categoryFlag: boolean = false;
    categoryFC: FormControl = new FormControl([]);

    searchValue: any;
    origin: any;

    activityKeyID: any;
    processID: any;
    isActivitySelection: boolean = false;
    selectedActivity: any;

    emitValueOnChange: boolean = true;
    activityDataClone: any;

    disabledOK: boolean = false;

    statusList = [
        { "id": 1, "keyID": 'ALL', "name": 'Select none' },
        { "id": 2, "keyID": 'active', "name": 'Active' },
        { "id": 3, "keyID": 'inactive', "name": 'INActive' }
    ];

    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild('formType') formType: FunnelFilterComponent;
    @ViewChild('statusSelect') statusSelect: FunnelFilterComponent;
    @ViewChild('formBtn') formBtn: ElementRef;
    @ViewChild('activitySelect') activitySelect: FunnelFilterComponent;
    @ViewChild('activityBtn') activityBtn: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<ActivityMappingComponent>,
        private stroageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private activityService: ActivityService,
        private activityConfigController: ActivityConfigController,
        private activityController: ActivityController
    ) {
        if (data) {
            this.dialogRef.disableClose = true;
            this.activityKeyID = data.activityID.keyID;
            this.isActivitySelection = data.isActivitySelection;
            this.selectedActivity = data.activityFormID;
            this.currentSelected = data.activityFormID;
            this.processID = data.processID;
        }
    }

    ngOnInit(): void {
        this.currentOrgID = this.stroageService.getStorage('currentOrgID');
        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams['origin']) {
                this.origin = queryParams['origin'];
            }
        });

        this.getActivityConfig(this.activityKeyID, this.processID, this.currentOrgID);
        this.getAllActivity();
        this.getAllFormType();

        if (this.isActivitySelection) {

            this.getAllActivity();
            if (this.selectedActivity.length > 0) {
                this.selectedActivity.forEach(element => {
                    this.selection.toggle(element);
                })
            }
        }
    }

    getActivityConfig(activityKeyID, processID, currentOrgID) {
        this.activityConfigController.getActivityConfig(activityKeyID, processID, currentOrgID).subscribe((res: any) => {
            this.dataSource = res;
            this.activityDataClone = res;
            console.log('result length', res);
            if (res.length == 0) {
                this.disabledOK = true;
            }

        })
    }

    async getAllActivity() {
        this.allActivity = await <any>this.activityService.getAllActivity();
    }

    getAllFormType() {
        this.activityController.getAllFormsType().subscribe((res: any) => {
            this.allFormType = res;
            this.totalFormActivity = this.allFormType.length;
            this.allFormType.map((framework) => { this.all_form_keyID.push(framework['keyID']) });
            this.all_form_keyID.unshift('all');
            this.selectAllActivityFormControl();

        }, error => {
            console.log('error in getReportingFramework -', error);
        });
    }

    searchFn(event) {
        try {
            const searchTerm = (event || '').trim().toLowerCase();
            if (!searchTerm) {
                this.dataSource = this.activityDataClone;
            } else {
                this.dataSource = this.activityDataClone.filter((activity: any) =>
                    activity.name.toLowerCase().includes(searchTerm)
                );
            }
        } catch (error) {
            console.error(error);
        }
    }


    manualSelect(id: number, status: boolean, datasource: any[]) {
        if (status) {
            this.bulkActionArr.push({ "id": id });
        } else {
            for (let i = this.bulkActionArr.length - 1; i >= 0; i--) {
                if (this.bulkActionArr[i].id == id) { this.bulkActionArr.splice(i, 1); }
            }
        }
        if (this.bulkActionArr.length === datasource.length) {
            this.checkAll.setValue(true);
        } else {
            this.checkAll.setValue(false);
        }
    }

    selectAll() {
        this.bulkActionArr = [];
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.bulkActionArr);
        this.dataSource.forEach(element => {
            this.selection.select(element.id);
            this.bulkActionArr.push({ "id": element.id, "status": element.runStatus });
        });
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        console.log(selected, numRows)
        return selected === numRows;
    }

    resetOnNoChange(event) {
        if (event) {
            this.prev = this.activityFC.value;
            this.activityFilterApplied = false;
        } else {
            if (this.prev != this.activityFC.value && !this.activityFilterApplied) {
                this.activityFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }

    selectAllActivity() {
        if (!this.activityFC.value.includes('all') && this.activityFC.value.length > 0) {
            this.activityFC.reset([]);
            this.selected_activity = [];
            return;
        }
        this.activityFC.patchValue(this.all_activity_keyID);
    }
    // second filter code

    resetOnNoChangeForFormType(event) {
        if (event) {
            this.prev = this.formTypeFC.value;
            this.activityFilterApplied = false;
        } else {
            if (this.prev != this.formTypeFC.value && !this.activityFilterApplied) {
                this.formTypeFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }

    selectAllActivityFormControl() {
        if (!this.formTypeFC.value.includes('all') && this.formTypeFC.value.length > 0) {
            this.formTypeFC.reset([]);
            this.selectFormType = [];
            return;
        }
        this.formTypeFC.patchValue(this.all_form_keyID);
    }

    selectForm(activity) {
        const index = this.selectFormType.indexOf(activity);
        if (index >= 0) {
            this.selectFormType.splice(index, 1);
        } else {
            this.selectFormType.push(activity);
        }

        const k = this.formTypeFC.value.indexOf('all');
        if (k > -1) {
            if (this.formTypeFC.value.length > this.totalFormActivity) {
                this.formTypeFC.patchValue([]);
            } else if (this.formTypeFC.value.length == this.totalFormActivity) {
                this.formTypeFC.value.splice(k, 1);
                this.formTypeFC.patchValue(this.formTypeFC.value);
            } else {
                this.formTypeFC.patchValue(this.all_form_keyID);
            }
        } else {
            if (this.formTypeFC.value.length == this.totalFormActivity) {
                this.formTypeFC.patchValue(this.all_form_keyID);
            }
        }
    }

    applyFormTypeFilter() {
        if (this.formTypeFC.value.length == 0) { return; }
        this.formFilteredApplied = true;
        if (this.formTypeFC.value.includes('all')) {
            this.formTypeFlag = false;
            return;
        }
    }

    closedDialog() {
        if (this.dataSource.length) {
            this.dialogRef.close(this.selection.selected);
        }
    }

    checkFalseCase() {
        this.dialogRef.close(this.currentSelected);
    }

}
