import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { GwpdatasetController } from '@carbon/controller/gwp-dataset.controller';
import { TimelineController } from '@carbon/controller/timeline.controller';

import { ActivityDataService } from '@carbon/service/activity-data.service';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// tsc-library

@Component({
    selector: 'app-activity-change',
    templateUrl: './activity-change.component.html',
    styleUrls: ['./activity-change.dialog.scss']
})
export class ActivityChangeDialog implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;

    rootOrgID: any;
    activityDataID: any;
    activityKeyID: string;
    isUpdate: any;

    activityName: any = 'Activity';

    cedID: any;
    recordData: any;
    activityData: any;
    currentData: any;
    emission;
    baseYearKeyID: any;

    showRedirectToView: boolean = false;

    gwpResponse: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private activityDataService: ActivityDataService,
        private timelineController: TimelineController,
        private gwpdatasetController: GwpdatasetController,
    ) {
        this.isUpdate = data['isUpdate'];
        this.rootOrgID = data['rootOrgID'];
        this.cedID = data['cedID'];
        this.baseYearKeyID = data['baseYearKeyID'];
        this.activityKeyID = data['activityKeyID'];
        this.activityDataID = data['activityDataID'];
        this.showRedirectToView = data['showRedirectToView'];
    }

    ngOnInit(): void {
        this.isUpdate ? this.getActivityDiff() : this.getActivityDataByID();
    }

    haveValue(value): boolean {
        if (value != null && value >= 0) return true;
        return false;
    }

    async getActivityDataByID() {
        let dataID = this.activityDataID;
        if (this.activityKeyID == ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION) {
            this.getGwpDataSet();
            this.recordData = await this.activityDataService.getFugitiveRefrigerationActivityDataByCedID(this.rootOrgID, this.activityKeyID, this.cedID);
        } else {
            this.recordData = await this.activityDataService.getActivityDataByID(this.rootOrgID, dataID, this.activityKeyID);
            this.activityData = this.recordData['activityData'];
            this.activityName = this.activityData['activityName'];
        }
    }

    getGwpDataSet() {
        try { 
            this.gwpdatasetController.getGwpDataSet(this.rootOrgID ,this.cedID).subscribe(response => {
                this.gwpResponse = response;
            })
        } catch (error) {
            console.error("error in getGwpData: ", error);
        }
    }

    getActivityDiff() {
        let dataID = this.activityDataID;
        if (this.activityKeyID == ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION)
            dataID = this.cedID;

        this.timelineController.getActivityDiff(this.rootOrgID, this.baseYearKeyID, this.activityKeyID, dataID)
            .subscribe((res) => {
                if (this.activityKeyID == ActivityKeyIDEnum.REFRIGERATION_AC_AND_FIRE_SUPPRESSION) {
                    this.recordData = res['value']['second'];
                    console.log('this.activityData  - ', this.activityData);
                } else {
                    this.activityData = res['value']['first'];
                    this.currentData = res['value']['second'];
                    this.activityName = this.activityData['activityData']['activityName'];

                    this.emission = res['emission'];

                }
                // this.getDiff();
            });
    }

    diff = [];
    up_diff = [];
    down_diff = [];
    getDiff() {
        let prev = this.activityData['activityData'];
        let current = this.currentData['activityData'];

        for (let key of Object.keys(prev)) {
            if (prev[key] != current[key]) {
                console.log(key, prev[key], current[key])
                this.diff.push(key);
            }
            if (typeof (prev[key]) == 'number') {
                if (prev[key] < current[key]) {
                    this.up_diff.push(key);
                } else {
                    this.down_diff.push(key);
                }
            }
        }
    }

}
