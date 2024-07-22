import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { GasGwpDataSet, RecordData } from '@report-framework/model/record-data.model';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { GwpdatasetController } from '@carbon/controller/gwp-dataset.controller';

import { StorageService } from '@library/storage-service';
@Component({
    selector: 'app-record-details',
    templateUrl: './record-details.component.html',
    styleUrls: ['./record-details.component.scss']
})

export class RecordDetailsComponent implements OnInit {

    currentOrgID: any;
    emissionData: any;
    cedID: any;

    recordData: any = new RecordData();
    gwpResponse: any = new GasGwpDataSet();
    screeningRecordData: any
    calculatedEmissionDataID: any;
    calculationApproachKeyID: any;
    isGwDataLoaded: boolean = false;
    gasName: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private activityDataService: ActivityDataController,
        private gwpdatasetController: GwpdatasetController,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getAllData();
    }

    getAllData() {
        this.activatedRoute.params.subscribe(params => {
            this.calculationApproachKeyID = params.calculationApproachKeyID;
            this.cedID = parseInt(params.calculatedEmissionDataID);

            this.getEmissionDataByActivityDataID();
            this.getFactorDetails();

            if (this.calculationApproachKeyID == CalculationApproachKeyIDEnum.CALCULATION_SCREENING) {
                this.getScreeningActivity();
                this.getScreeningRecordData();
            } else {
                this.getRecordData();
            }
        })
    }

    async getFactorDetails() {
        await this.gwpdatasetController.getFugitiveFactorDetails(this.currentOrgID, this.cedID).subscribe(response => {
            this.gwpResponse = response;
            this.isGwDataLoaded = true;
            this.gasName = this.gwpResponse.gasName;
        }, error => {
            console.log('error in getFactorDetails() - ', error)
        });
    }

    async getRecordData() {
        await this.activityDataService.getFugitiveRecordData(this.currentOrgID, this.cedID).subscribe(response => {
            this.recordData = response;
        }, error => {
            console.log('error in getRecordData() - ', error)
        });
    }

    async getScreeningActivity() {
        await this.activityDataService.getScreeningActivity(this.currentOrgID, this.cedID).subscribe((recordDataRes) => {
            this.recordData = recordDataRes;
        }, error => {
            console.log('error in getScreeningActivity() - ', error)
        });
    }

    async getScreeningRecordData() {
        await this.activityDataService.getSalesRecord(this.currentOrgID, this.cedID).subscribe((recordDataRes) => {
            this.screeningRecordData = recordDataRes;
        }, error => {
            console.log('error in getScreeningRecordData() - ', error)
        });
    }

    async getEmissionDataByActivityDataID() {
        await this.activityDataService.getEmissionDataByActivityDataID(this.currentOrgID, this.cedID)
            .subscribe(emissionRes => {
                if (emissionRes != null) {
                    this.emissionData = emissionRes;
                    this.cedID = emissionRes['cedID'];
                }
            }, error => {
                console.log('error in getEmissionDataByActivityDataID() - ', error)
            })
    }

}

