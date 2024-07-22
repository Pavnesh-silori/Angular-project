import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { DataEntryMethod } from '@carbon/enum/data-entry-mehtod.enum';
import { DataEstimationMethod } from '@carbon/enum/data-estimation-mehtod.enum';

import { ActivityService } from '@carbon/service/activity.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';

// tsc-library
import { StorageService } from '@library/storage-service';
// tsc-library

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    DataEntryMethod = DataEntryMethod;
    DataEstimationMethod = DataEstimationMethod;

    activityConfigCreate: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    currentOrgID: any;

    activityData: any;

    activityDataFG: FormGroup;

    activityConfig: any;
    dataInputMethodKeyID;

    docFile: any = null;

    docFileList: any[] = [];

    dataInputMethodList: any[] = [];
    action: any;
    isUpdate: boolean = false;

    allActivities: any[];
    activity: any;
    activityID: number;
    activityKeyID: string;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private activityService: ActivityService,
        private dataInputMethodService: DataInputMethodService,
    ) {
        storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));

        this.activityKeyID = activatedRoute.snapshot.data['activityKeyID'];

        activatedRoute.queryParams.subscribe((queryParam2) => {
            this.action = queryParam2['action'];
            this.isUpdate = (this.action == 'update');
            if (this.action == 'create') {
                this.getAllDataInputMethodList();
            } else {
                console.log(this.action);
            }
        });
    }

    async getAllActivitiesAndFindActivityByKeyID() {
        this.allActivities = await this.activityService.getAllActivityNew();
        this.activity = this.activityService.getActivityByKeyIDFromActivityList(this.activityKeyID, this.allActivities);
        this.activityID = this.activity.id;
    }

    updateFlag = false;
    ngOnInit(): void { }

    onChildFormGroupChange(formGroup: FormGroup) {
        // Use the child component's FormGroup here
        this.activityDataFG = formGroup;
    }

    // onChildDocChange(doc: any) {
    //     this.docFile = doc;
    //     this.docFileList.push(this.docFile);
    // }

    getActivityData() {
        return {
            'activityData': this.activityData,
            'activityDataFile': this.docFileList
        }
    }

    updateActivityData() {
        // this.isValidForm();
        return {
            'activityData': this.activityData
        }
    }

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            this.activityDataFG.markAllAsTouched();
            console.log('invalid form -', this.activityDataFG);
            return false;
        }

        this.activityData = {};
        this.activityData = JSON.parse(JSON.stringify(this.activityDataFG.value));

        return true;
    }

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    async getConfiguration(configuration) {
        if (this.dataInputMethodList.length == 0) {
            await this.getAllDataInputMethodList();
        }
        this.activityConfig = configuration;
        if (configuration != null && configuration['activityConfigData']['dataInputMethodID'] != null) {
            const dataInputMethod = this.dataInputMethodList.find(item => item.id === configuration['activityConfigData']['dataInputMethodID']);
            if (dataInputMethod) {
                this.dataInputMethodKeyID = dataInputMethod['keyID'];
            } else {
                console.log('dataInputMethodID not found');
            }

            if (this.isUpdate) {
                this.docFileList = new Array(1).fill(null);
            } else {
                this.docFileList = new Array(configuration.activityConfigSource.sourceID.length).fill(null);
            }
        }
    }

    async getAllDataInputMethodList() {
        this.dataInputMethodList = await this.dataInputMethodService.getAllDataInputMethodList();
    }

}
