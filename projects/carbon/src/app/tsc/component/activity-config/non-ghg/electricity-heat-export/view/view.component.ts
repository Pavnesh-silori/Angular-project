import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';

import { ProcessService } from '@carbon/service/process.service';

//tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ElectricityHeatExportViewComponent implements OnInit {
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;
    
    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;
    activityKeyID: any;

    activityConfig: any;
    activityConfigData: any;

    process: any;
    getProcessByIDCall: boolean = true;

    entity: any[] = [];
    entityTypeLabel: string = null;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private processService: ProcessService
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
        
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
        this.setEntityTypeLabel(this.activityKeyID);
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

    async getProcessByID(orgID: number, processID: number, isLatest: boolean = true) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);

        this.createEntitySource(this.process);
    }

    setEntityTypeLabel(activityKeyID: ActivityKeyIDEnum) {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT:
                this.entityTypeLabel = 'Electricity Source';
                break;
            case ActivityKeyIDEnum.PROCESS_HEAT_EXPORT:
                this.entityTypeLabel = 'Heat Source';
                break;
        }
    }

    createEntitySource(process: any) {
        let inputOutput: any;

        switch (this.activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_ELECTRICITY_EXPORT:
                inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.ELECTRICITY)?.entitySource;
                break;
            case ActivityKeyIDEnum.PROCESS_HEAT_EXPORT:
                inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.HEAT)?.entitySource;
                break;
        }

        if (inputOutput) {
            this.entity = inputOutput;
        } else {
            this.entity = [];
        }
    }
}