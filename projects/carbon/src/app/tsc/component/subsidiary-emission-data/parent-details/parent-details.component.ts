import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { combineLatest } from 'rxjs';

import { EmissionDataComponent } from '../emission-data/emission-data.component';

import { ReceivedEmissionRequestM } from '@carbon/model/received-emission-request.model';

import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';
import { SubsidiaryEmissionDataController } from '@carbon/controller/subsidiary-emission-data.controller';

import { TokenService } from '@carbon/service/token.service';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, DialogEnum, FormAction, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-parent-details',
    templateUrl: './parent-details.component.html',
    styles: []
})
export class ParentDetailsComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    @Input()
    internalRequestID: any;

    @Input()
    source: string;

    @Output() isEmissionCreate = new EventEmitter<string>();


    currentOrgID: any;
    rootOrgID: any;

    requestID: any;
    receiveEmissionRequest: ReceivedEmissionRequestM;

    formDataFG: FormGroup;

    token: any;
    tokenID: any;
    orgExist: string = 'YES';
    sendOtp: boolean = false;
    emailID: any;

    accountingPeriod: any;
    subsidaryEmissionData: any;
    consolidationApproachList: any[] = [];
    approachList: any[] = [];


    startDate: any;
    endDate: any;

    action: string = FormAction.CREATE;

    @ViewChild('emissionDataComp') emissionDataComp: EmissionDataComponent;

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private tokenService: TokenService,
        private subsidiaryController: SubsidiaryController,
        private subsidiaryEmissionDataController: SubsidiaryEmissionDataController,
        private consolidationApproachService: ConsolidationApproachService
    ) { }

    async ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        combineLatest([this.activatedRoute.queryParams, this.activatedRoute.params]).subscribe(([queryParams]) => {
            this.requestID = queryParams['requestID'];
            this.token = queryParams['token'];
            this.tokenID = queryParams['tokenID'];
            this.emailID = decodeURI(queryParams['emailID']);

            if (this.tokenID) {
                this.orgExist = 'NO';
                this.tokenValidate();
            }
        });

        this.getAllConsolidationApproachByOrgID();
        this.emissionFormDataInit();

        if (this.source == 'INTERNAL') {
            this.requestID = this.internalRequestID;
        }

        this.getReceivedEmissionRequestByID();
    }

    emissionFormDataInit() {
        this.formDataFG = this.fb.group({
            requestID: [, Validators.required],
            subsidiaryID: [, Validators.required],
            rootOrgID: [, Validators.required],
            orgID: [, Validators.required],
            consolidationApproachIDs: [, Validators.required],
            consolidationApproachKeyID: [],
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            emission: [],
            otp: this.fb.group({
                email: [{ value: '', disabled: true }],
                otp: [],
            }),
        });
    }

    async getAllConsolidationApproachByOrgID() {
        this.consolidationApproachList = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);

    }

    getReceivedEmissionRequestByID() {
        this.subsidiaryController.getEmissionRequestByID(this.requestID)
            .subscribe((res: ReceivedEmissionRequestM) => {
                this.receiveEmissionRequest = res;
                this.receiveEmissionRequest['consolidationApproach'].forEach((ca) => {
                    this.approachList.push(ca.keyID);
                });
                this.patchFormGroup();
                if (this.source == 'INTERNAL') {
                    this.startDate = this.receiveEmissionRequest.startDate;
                    this.endDate = this.receiveEmissionRequest.endDate;
                    // this.getEmissionDataByOrgID();
                }
            }, error => {
                console.log('error in getReceivedEmissionRequestByID -', error);
            });
    }

    patchFormGroup() {
        let consolidationApproachIdList = [];
        let consolidationApproachKeyIDList = [];

        this.receiveEmissionRequest['consolidationApproach'].forEach((ca) => {
            consolidationApproachIdList.push(ca.id);
            consolidationApproachKeyIDList.push(ca.keyID);
        });


        this.formDataFG.patchValue({
            subsidiaryID: this.receiveEmissionRequest['requestee']['id'],
            rootOrgID: this.receiveEmissionRequest['requester']['id'],
            orgID: this.receiveEmissionRequest['requester']['id'],
            startDate: this.receiveEmissionRequest['startDate'],
            endDate: this.receiveEmissionRequest['endDate'],
            consolidationApproachIDs: consolidationApproachIdList,
            consolidationApproachKeyID: consolidationApproachKeyIDList,
            requestID: this.receiveEmissionRequest.id,
            otp: {
                email: this.emailID,
            }
        });
        // this.consolidationApproachDisplay();
    }

    async tokenValidate() {
        let tokenM: ResponseM;
        let tokenRes: any;

        tokenM = <ResponseM>await this.tokenService.tokenValidate(this.token, this.tokenID);
        tokenRes = tokenM.status;

        if (tokenRes != 'success') {
            this.router.navigate(['/link-expired']);
        } else {
            return tokenM;
        }
    }

    sendOtpFun() {
        this.subsidiaryEmissionDataController.sendOtp(this.emailID).subscribe((response) => {
            if (response) {
                this.sendOtp = true;
            }
        }, error => {
            console.log('Error in send otp', error);
        });
    }


    getEmissionDataByOrgID() {
        this.subsidiaryEmissionDataController.getEmissionDataByOrgID(this.currentOrgID, this.startDate, this.endDate).subscribe((res: any) => {
            this.formDataFG.patchValue({
                emission: res.emission,
            })
            this.action = FormAction.UPDATE;
            console.log('this.formDataFG --',this.formDataFG);
        }, error => {
            console.log('error in getEmissionDataByOrgID() -', error);
        });
    }

    submitBtnClk() {

        if (this.formDataFG.invalid) {
            this.formDataFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.emissionDataComp.saveEmission()) {
            this.formDataFG.controls['emission'].patchValue(this.emissionDataComp.activityEmissionDataFG.controls['emissionRecords'].value);
            if (this.orgExist == 'YES') {
                this.subsidiaryEmissionDataController.createSubsidaryEmissiondata(this.currentOrgID, this.formDataFG.value).subscribe((response) => {
                    this.isEmissionCreate.emit(DialogEnum.SUCCESS_DR);;
                });
            } else {
                this.subsidiaryEmissionDataController.createSubsidiaryEmissionExternalOrg(this.currentOrgID, this.formDataFG.getRawValue()).subscribe((response) => {
                    this.router.navigate(['/emission/submitted-successfully']);
                });
            }
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.formDataFG.controls[control].hasError(error);
    }
}

