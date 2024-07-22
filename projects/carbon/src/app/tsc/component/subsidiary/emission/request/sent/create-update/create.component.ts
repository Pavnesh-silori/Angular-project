import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

import * as moment from 'moment';
import { isEqual } from 'lodash';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';


import {
    MatChipInputEvent,
    MatChipList
} from '@angular/material/chips';

import {
    MAT_DIALOG_DATA,
    MatDialogRef
} from '@angular/material/dialog';

import { EmissionRequestM } from '@carbon/model/emission-request.model'; 
import { SubsidiaryEnum } from '@carbon/enum/subsidiary.enum';
import { RoleTypeEnum } from '@carbon/enum/role.enum';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';
import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// tsc-library
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
// tsc-library


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;
    COMMON_CONSTANT = COMMON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

    CARBON_CONSTANT = CARBON_CONSTANT;

    currentOrgID: any;
    applicationKeyID: any;
    rootOrgID: any;

    requestID: any;
    requestFG: FormGroup;

    consolidationApproach: any[] = [];
    caSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    subsidiaryList: any[];
    subSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);

    assigneeSelectSearch: MatSelectSearchService = new MatSelectSearchService(['name']);


    subsidiary: any = null;
    isInternal: boolean = false;

    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    accountingPeriodFC: FormControl = new FormControl(null, Validators.required);

    @ViewChild('chipList') userEmailChipList: MatChipList;
    @ViewChild(DaterangepickerDirective, { static: false }) dateRangePicker: DaterangepickerDirective;

    emissionRequest: EmissionRequestM;

    initialObject: any;
    isEqual: boolean = false;
    isUpdate: boolean = false;
    isRerequest: boolean = false;

    constructor(
        private storageService: StorageService,
        private ConsolidationApproachService: ConsolidationApproachService,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<CreateComponent>,
        private subsidiaryController: SubsidiaryController,
        private toastrService: ToastrService,
    ) {
        dialogRef.disableClose = true;
    }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.requestFGInit();
    }

    ngAfterViewInit() {
        this.initCodeflow();
    }

    async initCodeflow() {
        this.subsidiaryList = await this.getSubsidaryByOrgID(this.currentOrgID);
        this.getAllConsolidationApproachByOrgID();
        if (this.data?.['requestID']) {
            this.isUpdate = true;

            this.isRerequest = this.data?.reRequest;
            this.requestID = this.data['requestID'];
            this.getEmissionRequestByID(this.requestID);

            this.requestFG.valueChanges.subscribe(() => {
                this.isEqual = isEqual(this.initialObject, this.requestFG.getRawValue());
            });
        }
    }

    requestFGInit() {
        this.requestFG = this.formBuilder.group({
            subsidiaryID: [, Validators.required],
            assigneeID: [],
            assigneeEmail: [[]],
            startDate: [, Validators.required],
            endDate: [, Validators.required],
            consolidationApproachKeyID: [, Validators.required],
            requestNote: []
        });

        this.accountingPeriodFC.valueChanges
            .subscribe((period) => {
                this.requestFG.patchValue({
                    startDate: moment(period['start']).format('YYYY-MM-DD'),
                    endDate: moment(period['end']).format('YYYY-MM-DD')
                });
            });
    }

    get subsidiaryIDAC(): AbstractControl {
        return this.requestFG.get('subsidiaryID') as AbstractControl;
    }

    get email(): AbstractControl {
        return this.requestFG.get('assigneeEmail') as AbstractControl;
    }

    get assigneeID(): AbstractControl {
        return this.requestFG.get('assigneeID') as AbstractControl;
    }

    get assigneeEmail(): AbstractControl {
        return this.requestFG.get('assigneeEmail') as AbstractControl;
    }

    async getAllConsolidationApproachByOrgID() {
        this.consolidationApproach = await this.ConsolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);
        this.caSelectSearch.entityArr = this.consolidationApproach;
        this.caSelectSearch.createSubscription();
    }

    getSubsidaryByOrgID(orgID): Promise<any[]> {
        return new Promise((resolve) => {
            this.subsidiaryController.getSubsidiaryByOrgID(orgID, SubsidiaryEnum.APPROVED)
            .subscribe((response: any[]) => {
                this.subsidiaryList = response;
                this.subSelectSearch.entityArr = response;
                this.subSelectSearch.createSubscription();
                resolve(response);
            });
        });
    }

    setSubsidary(subsidiaryID): boolean {
        this.subsidiary = this.subsidiaryList.find(subsidiary => (subsidiary['id'] == subsidiaryID));
        return this.isInternal = this.subsidiary['isInternal'];
    }

    getSubsidiaryUserListByOrgIDAndsubsidiaryID(subsidiaryID) {
        this.assigneeID.reset([]);
        this.assigneeEmail.reset([]);
        this.assigneeID.clearValidators();
        this.assigneeEmail.clearValidators();

        this.setAssigneeValidatorsAndGetAssignee(subsidiaryID);
    }

    setAssigneeValidatorsAndGetAssignee(subsidiaryID) {
        if (this.setSubsidary(subsidiaryID)) {
            this.assigneeID.setValidators([Validators.required]);

            this.subsidiaryController.getSubsidaryUserListByOrgIDAndsubsidiaryID(this.currentOrgID, subsidiaryID, this.applicationKeyID, RoleTypeEnum.ADMIN)
                .subscribe((response: any[]) => {
                    this.assigneeSelectSearch.entityArr = response;
                    this.assigneeSelectSearch.createSubscription();
                });
        } else {
            this.assigneeEmail.setValidators([Validators.required]);
        }

        this.assigneeID.updateValueAndValidity();
        this.assigneeEmail.updateValueAndValidity();
    }

    getEmissionRequestByID(requestID) {
        this.subsidiaryController.getEmissionRequestByID(requestID)
            .subscribe((request: EmissionRequestM) => {
                this.emissionRequest = request;
                this.patchData(this.emissionRequest);
            });
    }

    patchData(request) {
        let requestee = request['requestee'];
        this.requestFG.patchValue({
            subsidiaryID: requestee['id'],
            assigneeID: request['assigneeUser'].map(user => user['id']),
            assigneeEmail: request['assigneeEmail'],
            consolidationApproachKeyID: request['consolidationApproach'].map((ca) => ca['keyID']),
            requestNote: request['requestNote'],
        });
        this.subsidiaryIDAC.disable();

        this.setAssigneeValidatorsAndGetAssignee(requestee['id']);
        this.accountingPeriodFC.patchValue({
            start: moment(request['startDate']),
            end: moment(request['endDate'])
        });

        this.initialObject = this.requestFG.getRawValue();
        this.isEqual = isEqual(this.initialObject, this.requestFG.getRawValue());
    }

    removeEmail(email): void {
        const index = this.email.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.email.value];
            emails.splice(index, 1);
            this.email.setValue(emails);
        }
    }

    addAssigneeEmail(event: MatChipInputEvent): void {
        const email = (event.value || '').trim();
        if (email) {
            if (this.isValidEmail(email)) {
                this.userEmailChipList.errorState = false;
                this.email.patchValue([...this.email.value, email]);
                event.chipInput!.clear();
            } else {
                this.toastrService.openToast(ToastrTitle.ERROR, 'Invalid email format!', ToastrColor.ERROR)
            }
        }
    }

    isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    isValidForm() {
        if (this.requestFG.invalid) {
            console.log('invalid form - ', this.requestFG);
            this.toastrService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR)
            if (this.subsidiary != null && !this.subsidiary['isInternal']) {
                this.userEmailChipList.errorState = this.assigneeEmail.invalid;
            }
            return;
        }

        if (this.isUpdate) this.resendEmissionRequest();
        else this.sendEmissionRequest();
    }

    sendEmissionRequest() {
        this.subsidiaryController.sendEmissionRequest(this.currentOrgID, this.requestFG.value)
            .subscribe((response: any) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    resendEmissionRequest() {
        this.subsidiaryController.reSendEmissionRequest(this.currentOrgID, this.requestID, this.requestFG.value)
            .subscribe((response: any) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    errorHandling = (control: string, error: string) => {
        return this.requestFG.get(control).hasError(error);
    }

}
