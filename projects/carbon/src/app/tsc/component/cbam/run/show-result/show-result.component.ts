import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

import { CBAM_RUN_CALCULATION_STATUS_KEYID_ENUM, RunStatusKeyIDEnum } from '@carbon/enum/cbam.enum';
import { CbamRunService } from '@carbon/service/cbam-run.service';

import { RESPONSE_STATUS_KEYID_ENUM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-show-result',
    templateUrl: './show-result.component.html',
    styleUrls: ['./show-result.component.scss']
})

export class ShowResultComponent implements OnInit {

    constructor(
        activatedRoute: ActivatedRoute,
        private cbamRunService: CbamRunService,

        storageService: StorageService
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        activatedRoute.queryParams.subscribe((queryParam) => {
            this.runID = queryParam.runID;
        });
    }

    @Input() runStatusInp: RunStatusKeyIDEnum;

    @Output() runStatusChange = new EventEmitter<any>();

    RunStatusKeyIDEnum = RunStatusKeyIDEnum;
    CBAM_RUN_CALCULATION_STATUS_KEYID_ENUM = CBAM_RUN_CALCULATION_STATUS_KEYID_ENUM;

    private intervalId: any;

    currentOrgID: any;
    runID: any;
    runStatus: RunStatusKeyIDEnum;
    isCbamRunRequest: boolean = true;
    cardTitle = 'Sit back and relax while we work our magic!';
    color: ThemePalette = 'primary';
    mode: ProgressBarMode = 'buffer';
    value = 0;
    bufferValue = 75;

    runRequest: any;
    run: any;

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.runStatusInp && this.runStatusInp) {
            this.runStatus = this.runStatusInp;

            if ([RunStatusKeyIDEnum.CALCULATION_PENDING, RunStatusKeyIDEnum.DONE, RunStatusKeyIDEnum.RUN_ERROR].includes(this.runStatus) && this.isCbamRunRequest) {
                this.getCbamRunRequest(this.currentOrgID, this.runID);
                this.isCbamRunRequest = false;
                this.startInterval();
            }

        }
    }

    ngOnDestroy() {
        this.clearInterval();
    }

    startInterval() {
        this.intervalId = setInterval(() => {
            this.getCbamRunRequest(this.currentOrgID, this.runID);
        }, 10000); // 120000 milliseconds = 2 minutes
    }

    clearInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    getCbamRunRequest(orgID: number, runID: number) {
        this.cbamRunService.getCbamRunRequestByID(orgID, runID).then((data) => {
            this.runRequest = data;

            this.value = (this.runRequest.calculatedRecords / this.runRequest.totalRecords) * 100;

            if (this.runRequest.calculationStatus) {
                this.clearInterval();
                this.postCalculationHandler(this.runRequest);
            }
        }).catch((error) => {
            console.log('error in getCbamRunRequest() -', error);
        });
    }

    postCalculationHandler(runRequest) {
        if (runRequest.calculationStatus == CBAM_RUN_CALCULATION_STATUS_KEYID_ENUM.CALCULATION_SUCCESS) {
            this.updateCbamRunStatus(this.currentOrgID, this.runID, RunStatusKeyIDEnum.DONE);
            this.getCbamRunByID(this.currentOrgID, this.runID);
        } else if (CBAM_RUN_CALCULATION_STATUS_KEYID_ENUM.CALCULATION_FAILED) {
            this.updateCbamRunStatus(this.currentOrgID, this.runID, RunStatusKeyIDEnum.RUN_ERROR);
        }
    }

    updateCbamRunStatus(orgID, runID, status: any) {
        let data: any = {};
        data.status = status;

        this.cbamRunService.updateCbamRunStatus(orgID, runID, data).then((data) => {
            if (data.status == RESPONSE_STATUS_KEYID_ENUM.SUCCESS) {
                this.runStatusChange.emit(status);
            }
        }).catch((error) => {
            console.log('error in updateCbamRunStatus() -', error);
        });
    }

    getCbamRunByID(orgID: number, runID: number) {
        this.cbamRunService.getCbamRunByID(orgID, runID).then((data) => {
            this.run = data;
            console.log('this.run', this.run);
        }).catch((error) => {
            console.log('error in getCbamRunByID() -', error);
        });
    }
}
