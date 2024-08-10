import { Component, Inject, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { isEqual } from 'lodash';

import { EscalationController } from '../../../controller/escalation.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { LIST_CONSTANT } from '@library/tsc-lite';
import { ProfileImg, User, UserContext, UserM, UserService } from '@library/user-service';
import { COMMON_CONSTANT, ButtonLabelEnum, MATERIAL_CONSTANT, MaterialFormFieldAppearance, TSCCommonService, InvalidForm, ResponseM, DialogEnum, PageTitleEnum, MatSelectSearchService, FormErrorEnum } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateEscalationComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    LIST_CONSTANT = LIST_CONSTANT;

    ButtonLabelEnum = ButtonLabelEnum;
    PageTitleEnum = PageTitleEnum;
    DialogEnum = DialogEnum;
    FormErrorEnum = FormErrorEnum;
    InvalidForm = InvalidForm;
    ToastrColor = ToastrColor;
    UserContext = UserContext;
    ProfileImg = ProfileImg;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    userContext: any = UserContext.ROOT_ORG_USER;

    inputPlaceholder = "email1@domain.com, email2@domain.com";

    orgID: any;

    alertRuleID: any;
    levelID: any;
    action: any;
    escalationRuleID: any;

    isEqual: boolean = false;
    initialObject: any;
    allUserID: any[] = [];
    totalUserCount: number = 0;

    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    userM = [new User()];
    rootOrgUserM = [new User()];
    currentOrgUserM = [new User()];

    escalationFG: FormGroup;

    userFC: FormControl = new FormControl(true, Validators.required);

    userSearchUtil: MatSelectSearchService = new MatSelectSearchService(['firstName', 'lastName', 'email']);

    constructor(
        public dialogRef: MatDialogRef<CreateUpdateEscalationComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private escalationFB: FormBuilder,
        private escalationController: EscalationController,

        // tsc-library
        private storageService: StorageService,
        private toastrService: ToastrService,
        public userService: UserService,
        public tscCommonService: TSCCommonService
        // /tsc-library/
    ) {
        this.alertRuleID = data.alertRuleID;
        this.levelID = data.levelID;
        this.action = data.action;
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.escalationInit();
        this.initializeData();
    }

    async initializeData() {
        await this.getUsersByOrgID();
        await this.getCurrentOrgUserAccess();

        if (this.action == PageTitleEnum.UPDATE) {
            this.escalationRuleID = this.data.escLevelConfig.escalationRuleID;
            this.setValidatorsForOtherUser();
            this.patchEscalation(this.data['escLevelConfig']);
        }

        this.escalationFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.escalationFG);
        });
    }

    escalationInit() {
        this.escalationFG = this.escalationFB.group({
            alertRuleID: [this.alertRuleID],
            level: [this.levelID],
            intervalValue: [, [Validators.required, this.integerValidator()]],
            intervalFrequencyKey: [, Validators.required],
            notificationPrefValue: [, [Validators.required, this.integerValidator()]],
            notificationPrefKey: [, Validators.required],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            isAnyOtherUser: [false],
            otherUserEmail: [[]],
        });
    }

    integerValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const value = control.value;

            if (value != null && value != undefined) {
                const isInteger = Number.isInteger(value);

                return isInteger ? null : { 'integerError': true };
            }
            return null;
        };
    }

    patchEscalation(escalationLevelConfig) {
        this.escalationFG.patchValue({
            alertRuleID: escalationLevelConfig.alertRuleID,
            level: escalationLevelConfig.level,
            intervalValue: escalationLevelConfig.intervalValue,
            intervalFrequencyKey: escalationLevelConfig.intervalFrequencyKey,
            notificationPrefValue: escalationLevelConfig.notificationPrefValue,
            notificationPrefKey: escalationLevelConfig.notificationPrefKey,
            userChoice: escalationLevelConfig.userChoice,
            isAnyOtherUser: escalationLevelConfig.isAnyOtherUser,
            otherUserEmail: escalationLevelConfig.otherUserEmail,
        });

        this.userFC.patchValue(escalationLevelConfig.userChoice == UserContext.CURRENT_ORG_USER ? false : true)

        this.escalationFG.get('userID').patchValue((escalationLevelConfig.userID.length == this.totalUserCount) ? [-1, ...escalationLevelConfig.userID] : [...escalationLevelConfig.userID]);

        this.initialObject = this.escalationFG.value;
        this.isEqual = true;
    }

    /* users code */
    async getUsersByOrgID() {
        this.rootOrgUserM = <UserM[]>await this.userService.getUsersByOrgID(this.orgID);

        this.userM = this.rootOrgUserM;
        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();

        this.totalUserCount = this.userM.length;
        this.userM.forEach(user => this.allUserID.push(user['id']));
    }

    async getCurrentOrgUserAccess() {
        this.currentOrgUserM = <UserM[]>await this.userService.getCurrentOrgUserAccess(this.orgID);
    }

    userContextChange() {
        if (this.userFC.value) {
            this.userContext = UserContext.ROOT_ORG_USER;
            this.userM = this.rootOrgUserM;
            this.escalationFG.get('userChoice').setValue(this.userContext);
        } else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.escalationFG.get('userChoice').setValue(this.userContext);
        }

        this.allUserID = [];

        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();

        this.totalUserCount = this.userM.length;
        this.userM.forEach(user => this.allUserID.push(user['id']));

        this.escalationFG.get('userID').setValue([]);
    }

    selectUser() {
        const selected = this.escalationFG.get('userID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.escalationFG.get('userID').patchValue(selected);
        } else if (this.escalationFG.get('userID').value.length == this.totalUserCount) {
            this.allUserID.splice(0, 0, -1);
            this.escalationFG.get('userID').patchValue(this.allUserID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.escalationFG.get('userID').patchValue(filteredSelected);
        }
    }

    selectAllUsers() {
        if (!this.escalationFG.get('userID').value.includes(-1)) {
            this.escalationFG.get('userID').reset([]);
            return;
        }
        this.escalationFG.get('userID').setValue([-1, ...this.allUserID]);
    }

    setValidatorsForOtherUser() {
        this.escalationFG.get('isAnyOtherUser').valueChanges.subscribe((value) => {

            if (value == true) {
                this.otherUserEmail.setValidators([Validators.required]);
            } else {
                this.otherUserEmail.reset([]);
                this.otherUserEmail.clearValidators();
            }

            this.otherUserEmail.updateValueAndValidity();
        });
    }

    addOtherUser(event: any) {
        const isAnyOtherUser = this.escalationFG.get('isAnyOtherUser');

        isAnyOtherUser.setValue(event.checked);

        if (isAnyOtherUser.value) {
            this.otherUserEmail.setValidators([Validators.required]);
        } else {
            this.otherUserEmail.reset([]);
            this.otherUserEmail.clearValidators();
        }

        this.otherUserEmail.updateValueAndValidity();
    }

    onInput() {
        this.inputPlaceholder = '';
    }

    get otherUserEmail() {
        return this.escalationFG.get('otherUserEmail');
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            const emails = value.split(',').map(email => email.trim());
            const validEmails = emails.filter(email => this.tscCommonService.isValidEmail(email));
            if (validEmails.length > 0) {
                this.otherUserEmail.patchValue(this.otherUserEmail.value.concat(validEmails));
            }
        }
        event.chipInput!.clear();
    }

    removeEmail(email): void {
        const index = this.otherUserEmail.value.indexOf(email);
        if (index >= 0) {
            const emails = [...this.otherUserEmail.value];
            emails.splice(index, 1);
            this.otherUserEmail.setValue(emails);
        }
    }
    /* users code */


    createUpdateEscalationRule() {

        let userID = this.tscCommonService.removeSelectAllID(this.escalationFG.get('userID').value);
        this.escalationFG.get('userID').patchValue(userID);

        if (this.escalationFG.invalid) {
            this.escalationFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        if (this.action == PageTitleEnum.CREATE) {
            this.escalationController.createEsclationByLevelID(this.orgID, this.escalationFG.value)
                .subscribe((createRes: ResponseM) => {
                    let toast = this.toastrService.getToastStatus(createRes.status);
                    this.toastrService.openToast(toast.title, createRes.message, toast.color);

                    this.dialogRef.close(DialogEnum.SUCCESS_DR);
                },
                    error => {
                        console.log('error in createEsclationByLevelID - ', error);
                    });
        } else if (this.action == PageTitleEnum.UPDATE) {

            if (this.isEqual) return;

            this.escalationController.updateEsclationByLevelID(this.orgID, this.escalationRuleID, this.escalationFG.value)
                .subscribe((updateRes: ResponseM) => {
                    let toast = this.toastrService.getToastStatus(updateRes.status);
                    this.toastrService.openToast(toast.title, updateRes.message, toast.color);

                    this.dialogRef.close(DialogEnum.SUCCESS_DR);
                },
                    error => {
                        console.log('error in updateEsclationByLevelID - ', error);
                    });
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.escalationFG.controls[control].hasError(error);
    }

}