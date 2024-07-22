import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatStepper } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent } from '@angular/cdk/stepper';

import * as moment from 'moment';

import { InstallationDetailComponent } from '../installation-detail/installation-detail.component';
import { ProcessMapComponent } from '../process-map/process-map/process-map.component';
import { TrackProgressComponent } from '../track-progress/track-progress.component';
import { AllocateReviewRunComponent } from '../allocate-review-run/allocate-review-run.component';
import { ViewComponent } from '@netzero/component/source/production-route/view/view.component';
import { ShowResultComponent } from '../show-result/show-result.component';

import { CBAM_CONSTANT } from '@carbon/constant/cbam.constant';

import { ProductAndService, ProductAndServiceM } from '@netzero/model/product-service.model';

import { RunStatusKeyIDEnum } from '@carbon/enum/cbam.enum';

import { InstallationDetailController } from '@carbon/controller/installation-detail.controller';

import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { CbamRunService } from '@carbon/service/cbam-run.service';

//tsc-library
import { COMMON_CONSTANT, FormAction } from '@library/tsc-common';
import { RESPONSE_STATUS_KEYID_ENUM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false }
        }
    ]
})

export class StepperComponent implements OnInit {

    currentOrgID: any;
    action: string;

    products = new ProductAndService();
    productID: any;

    runID: any;
    runStatus: RunStatusKeyIDEnum = RunStatusKeyIDEnum.INSTALLATION_DETAILS;
    startDate: string;
    endDate: string;
    linkedRecords: number;

    COMMON_CONSTANT = COMMON_CONSTANT;
    CBAM_CONSTANT = CBAM_CONSTANT;

    isDataCollection: boolean = false;
    currentIndex: number;

    RunStatusKeyIDEnum = RunStatusKeyIDEnum;

    currentRunStatus: { key: RunStatusKeyIDEnum, value: string } = {
        key: RunStatusKeyIDEnum.INSTALLATION_DETAILS,
        value: CBAM_CONSTANT.PENDING_CONFIGURATION
    };

    @ViewChild('installationDetails') installationDetails: InstallationDetailComponent;
    @ViewChild('dataCollection') dataCollection: ProcessMapComponent;
    @ViewChild('trackProgress') trackProgress: TrackProgressComponent;
    @ViewChild('processMap') processMap: ViewComponent;
    @ViewChild('stepper') stepper: MatStepper;
    @ViewChild('allocateRunReview') allocateRunReview: AllocateReviewRunComponent
    @ViewChild('result') result: ShowResultComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        private installationDetailController: InstallationDetailController,
        private productService: ProductAndServiceService,
        private cbamRunService: CbamRunService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.action = this.activatedRoute.snapshot.data.action;
        this.activatedRoute.queryParams.subscribe(queryParam => {
            if (queryParam.runID) {
                this.runID = queryParam.runID;
                this.getByRunID(this.runID);
            }
            this.productID = queryParam.productID;
            this.getProductByID(this.productID);

            if (this.action == FormAction.CREATE) {
                let startDate = queryParam.startDate;
                this.startDate = moment(new Date(startDate)).format("DD-MMM-YYYY");
                let endDate = queryParam.endDate;
                this.endDate = moment(new Date(endDate)).format("DD-MMM-YYYY");
            }
        });
    }

    onStepChange(event: StepperSelectionEvent) {
        this.currentIndex = event.selectedIndex;
        if (this.currentIndex == 4) {
            this.linkedRecords = this.trackProgress.linkedRecords
        }

        this.updateStepper(this.currentIndex);
    }

    getByRunID(runID) {
        this.installationDetailController.getInstallationByRunID(this.currentOrgID, runID)
            .subscribe(res => {
                let response: any = res;

                let startDate = response.productRunConfig.periodStartDate;
                this.startDate = moment(new Date(startDate)).format("DD-MMM-YYYY");

                let endDate = response.productRunConfig.periodEndDate;
                this.endDate = moment(new Date(endDate)).format("DD-MMM-YYYY");

                this.runStatus = response.productRunConfig.runStatus;
                this.currentRunStatus = CBAM_CONSTANT.RUN_STATUS.find(status => status.key === this.runStatus);
                this.stepperStep(this.runStatus);
            });
    }

    stepperStep(status: RunStatusKeyIDEnum) {
        setTimeout(() => {
            if (status == RunStatusKeyIDEnum.PROCESS_MAP) {
                this.stepper.selectedIndex = 1;
            }

            else if (status == RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION) {
                this.stepper.selectedIndex = 2;
            }

            else if (status == RunStatusKeyIDEnum.TRACK_PROGRESS) {
                this.stepper.selectedIndex = 3;
            }

            else if (status == RunStatusKeyIDEnum.ALLOCATE_REVIEW || status == RunStatusKeyIDEnum.CALCULATION_PENDING || status == RunStatusKeyIDEnum.DONE || status == RunStatusKeyIDEnum.RUN_ERROR) {
                this.stepper.selectedIndex = 4;
            }
        }, 500);
    }

    updateStepper(index: number) {
        for (let i = 0; i < index; i++) {
            this.stepper.steps.toArray()[i].completed = true;
        }

        for (let i = index; i < this.stepper.steps.length; i++) {
            this.stepper.steps.toArray()[i].completed = false;
        }
    }

    async getProductByID(id) {
        this.products = <ProductAndServiceM>await this.productService.getProductByID(this.currentOrgID, id);
    }

    statusColour(status): String {
        let classC: string;

        if ([RunStatusKeyIDEnum.INSTALLATION_DETAILS, RunStatusKeyIDEnum.PROCESS_MAP, RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION, RunStatusKeyIDEnum.RUN_ERROR].includes(status)) {
            classC = 'danger';
        } else if ([RunStatusKeyIDEnum.TRACK_PROGRESS, RunStatusKeyIDEnum.ALLOCATE_REVIEW].includes(status)) {
            classC = 'warning';
        } else if ([RunStatusKeyIDEnum.CALCULATION_PENDING].includes(status)) {
            classC = 'disable';
        } else if ([RunStatusKeyIDEnum.DONE].includes(status)) {
            classC = 'success';
        } else {
            classC = 'disable';
        }

        return classC;
    }

    async saveAndNext() {
        switch (this.stepper.selectedIndex) {
            case 0:
                this.runStatus = RunStatusKeyIDEnum.PROCESS_MAP;
                let result = false;
                result = await this.installationDetails.onSubmit(this.runStatus);
                if (result) {
                    this.stepper.next();
                }
                break;
            case 1:
                this.runStatus = RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION;
                this.updateCbamRunStatusAndNextStep(this.currentOrgID, this.runID, this.runStatus);
                break;
            case 2:
                if (await this.dataCollection.onSubmit(this.runStatus)) {
                    this.runStatus = RunStatusKeyIDEnum.TRACK_PROGRESS;
                    this.isDataCollection = true;
                    this.updateCbamRunStatusAndNextStep(this.currentOrgID, this.runID, this.runStatus);
                    // this.stepper.next();
                }
                break;
            case 3:
                this.runStatus = RunStatusKeyIDEnum.ALLOCATE_REVIEW;
                this.updateCbamRunStatusAndNextStep(this.currentOrgID, this.runID, this.runStatus);
                break;
            case 4:
                this.runStatus = RunStatusKeyIDEnum.ALLOCATE_REVIEW;
                let res = await this.allocateRunReview.onSubmit(this.runStatus);
                if (res) {
                    this.runStatus = RunStatusKeyIDEnum.CALCULATION_PENDING;
                    this.updateCbamRunStatusAndNextStep(this.currentOrgID, this.runID, this.runStatus);
                }
                break;
            default:
                break;
        }

        this.currentRunStatus = CBAM_CONSTANT.RUN_STATUS.find(status => status.key === this.runStatus);

    }

    goBack() {
        if (this.stepper.selectedIndex > 0) {
            this.stepper.previous();
        }
    }

    // saveDraft() {
    //     switch (this.stepper.selectedIndex) {
    //         case 0:
    //             this.runStatus = RunStatusEnum.INSTALLATIN_DETAILS;
    //             console.log('it works');
    //             if (this.installationDetails.saveAsDraft(this.runStatus)) {
    //                 this.stepper.next();
    //             }
    //             break;
    //         case 1:
    //             this.runStatus = RunStatusEnum.PROCESS_MAP;
    //             // if (this.processMap.saveAsDraft()) {
    //             //     this.stepper.next();
    //             // }
    //             console.log('second step');
    //             break;
    //         case 2:
    //             this.runStatus = RunStatusEnum.CONFIGURE_DATA_COLLECTION;
    //             if (this.dataCollection.onSaveDraft(this.runStatus)) {
    //                 this.stepper.next();
    //             }
    //             console.log('third step');
    //             break;
    //         case 3:
    //             this.runStatus = RunStatusEnum.TRACK_PROGRESS;
    //             if (this.trackProgress.onSaveDraft(this.runStatus)) {
    //                 this.stepper.next();
    //             }
    //             console.log('fourth step');
    //             break;
    //         case 4:
    //             this.runStatus = RunStatusEnum.ALLOCATE_REVIEW;
    //             // if (this.allocateRunReview.onSaveDraft(this.runStatus)) {
    //             //     this.stepper.next();
    //             // }
    //             console.log('fifth step');
    //             break;
    //         default:
    //             break;
    //     }
    // }

    updateCbamRunStatusAndNextStep(orgID: number, runID: number, status: any) {
        let data: any = {};
        data.status = status;

        this.cbamRunService.updateCbamRunStatus(orgID, runID, data).then((data) => {
            if (data.status == RESPONSE_STATUS_KEYID_ENUM.SUCCESS) {
                this.stepper.next();
            }
        }).catch((error) => {
            console.log('error in updateCbamRunStatusAndNextStep() -', error);
        });
    }

    runStatusChangeFnc(event) {
        this.runStatus = event;
        this.currentRunStatus = CBAM_CONSTANT.RUN_STATUS.find(status => status.key === this.runStatus);
    }

    showSaveAndNextBtn(runStatus: RunStatusKeyIDEnum): boolean {
        return [RunStatusKeyIDEnum.INSTALLATION_DETAILS, RunStatusKeyIDEnum.PROCESS_MAP, RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION, RunStatusKeyIDEnum.TRACK_PROGRESS, RunStatusKeyIDEnum.ALLOCATE_REVIEW].includes(runStatus);
    }

    saveAndNextBtnLabel(runStatus: RunStatusKeyIDEnum): string {
        let btnLabel: string;

        if ([RunStatusKeyIDEnum.INSTALLATION_DETAILS, RunStatusKeyIDEnum.PROCESS_MAP, RunStatusKeyIDEnum.CONFIGURE_DATA_COLLECTION, RunStatusKeyIDEnum.TRACK_PROGRESS].includes(runStatus)) {
            btnLabel = 'Save and Next';
        } else if ([RunStatusKeyIDEnum.ALLOCATE_REVIEW].includes(runStatus)) {
            // btnLabel = 'Run CBAM tool';
            btnLabel = 'Save and Next';
        }

        return btnLabel;
    }

}
