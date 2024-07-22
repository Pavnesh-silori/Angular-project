import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { StorageService } from '@library/storage-service';
import { ProcessService } from '@carbon/service/process.service';

//tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ViewComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;

    activityConfig: any;
    activityConfigData: any;

    currentOrgID: any;
    activityKeyID: ActivityKeyIDEnum;

    process: any;
    entity: any[] = [];
    getProcessByIDCall: boolean = true;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private processService: ProcessService
    ) { 
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    ngOnInit(): void {
    }

    ngAfterContentChecked() {
        if (this.activityConfig) {
            this.activityConfigData = this.activityConfig.activityConfigData;

            if (this.getProcessByIDCall && !this.process && this.activityConfigData) {
                this.getProcessByIDCall = false;
                this.getProcessByID(this.currentOrgID, this.activityConfigData.process.id, false);
            }
        }
    }

    async getProcessByID(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);

        this.createEntitySource(this.process);
    }

    createEntitySource(process: any) {
        let inputOutput: any;

        switch (this.activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_FUEL_CONSUMPTION: {
                inputOutput = process.input.find(output => output.type.keyID == PROCESS_INPUT_ENUM.FUEL)?.entities;
                break;
            }
        }

        if (inputOutput) {
            this.entity = inputOutput;
        } else {
            this.entity = [];
        }
    }

}