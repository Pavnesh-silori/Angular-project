import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatChipInputEvent } from '@angular/material/chips';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { map } from 'rxjs/operators';

// tsc-library
import { StorageService } from '@library/storage-service';
import { User, UserContext, UserM, UserService } from '@library/user-service';
import { MaterialFormFieldAppearance, FormErrorEnum, TSCCommonService, MatSelectSearchService, COMMON_CONSTANT, MATERIAL_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss'],
})
export class ScheduleReportConfigurationComponent implements OnInit {

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    FormErrorEnum = FormErrorEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    orgID: any;
    scheduleReportFG: FormGroup;
    scheduleReportID: any;

    userContext = UserContext.ROOT_ORG_USER;

    userM = [new User()];
    rootOrgUserM = [new User()];
    currentOrgUserM = [new User()];
    allUserID: any[] = [];
    totalUserCount: number = 0;

    intervalList = [
        { label: 'Daily', value: 'DAILY' },
        { label: 'Weekly', value: 'WEEKLY' },
        { label: 'Monthly', value: 'MONTHLY' }
    ];

    frequencyList = [
        { label: 'Daily', value: 'DAILY' },
        { label: 'Weekly', value: 'WEEKLY' },
        { label: 'Monthly', value: 'MONTHLY' }
    ];

    frequencyInfoLabel: string = 'Report will be sent at 6:00 a.m.';

    userFC: FormControl = new FormControl(true, Validators.required);
    userSearchUtil: MatSelectSearchService = new MatSelectSearchService(['firstName', 'lastName', 'email']);

    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    inputPlaceholder = "email1@domain.com, email2@domain.com";

    constructor(
        private formBuilder: FormBuilder,

        // tsc-library
        private storageService: StorageService,
        public tscCommonService: TSCCommonService,
        private userService: UserService,
        // /tsc-library/
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.initializeUsers();
        this.scheduleReportFGInit();
    }

    scheduleReportFGInit() {
        this.scheduleReportFG = this.formBuilder.group({
            name: [, Validators.required],
            dataInterval: [, Validators.required],
            frequency: [, Validators.required],
            userChoice: [UserContext.ROOT_ORG_USER],
            userID: [[], Validators.required],
            otherUserEmail: [[]],
            status: ['ACTIVE', Validators.required],
            reportFormat: [, Validators.required],
        });

        this.scheduleReportFG.get('dataInterval').valueChanges.subscribe(value => {
            switch (value) {
                case 'DAILY':
                    this.frequencyList = [{ label: "Daily", value: "DAILY" }];
                    this.frequencyInfoLabel = 'Report will be sent on daily basis at 6:00 a.m.';
                    break;
                case 'WEEKLY':
                    this.frequencyList = [
                        { label: "Daily", value: "DAILY" },
                        { label: "Weekly", value: "WEEKLY" }
                    ];
                    this.frequencyInfoLabel = 'Report will be sent on weekly basis at 6:00 a.m. on Monday';
                    break;
                case 'MONTHLY':
                    this.frequencyList = [
                        { label: "Daily", value: "DAILY" },
                        { label: "Weekly", value: "WEEKLY" },
                        { label: "Monthly", value: "MONTHLY" }
                    ];
                    this.frequencyInfoLabel = 'Report will be sent on monthly basis at 6:00 a.m. on first day of month';
                    break;
                default:
                    break;
            }
        });
    }

    async initializeUsers() {
        await this.getUsersByOrgID();
        await this.getCurrentOrgUserAccess();
    }

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
            this.scheduleReportFG.get('userChoice').setValue(this.userContext);
        } else {
            this.userContext = UserContext.CURRENT_ORG_USER;
            this.userM = this.currentOrgUserM;
            this.scheduleReportFG.get('userChoice').setValue(this.userContext);
        }

        this.allUserID = [];

        this.userSearchUtil.entityArr = this.userM;
        this.userSearchUtil.createSubscription();

        this.totalUserCount = this.userM.length;
        this.userM.forEach(user => this.allUserID.push(user['id']));

        this.scheduleReportFG.get('userID').setValue([]);
    }

    selectUser() {
        const selected = this.scheduleReportFG.get('userID').value;
        if (selected.includes(-1)) {
            selected.shift();
            this.scheduleReportFG.get('userID').patchValue(selected);
        } else if (this.scheduleReportFG.get('userID').value.length == this.totalUserCount) {
            this.allUserID.splice(0, 0, -1);
            this.scheduleReportFG.get('userID').patchValue(this.allUserID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.scheduleReportFG.get('userID').patchValue(filteredSelected);
        }
    }

    selectAllUsers() {
        if (!this.scheduleReportFG.get('userID').value.includes(-1)) {
            this.scheduleReportFG.get('userID').reset([]);
            return;
        }
        this.scheduleReportFG.get('userID').setValue([-1, ...this.allUserID]);
    }

    onInput() {
        this.inputPlaceholder = '';
    }

    get otherUserEmail() {
        return this.scheduleReportFG.get('otherUserEmail');
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

    onStatusChange(event) {
        const newStatus = event.checked ? 'ACTIVE' : 'INACTIVE';
        this.scheduleReportFG.get('status').setValue(newStatus);
    }

    errorHandling = (formGroup: FormGroup, controlPath: string, error: string): boolean => {
        return formGroup.get(controlPath).hasError(error);
    }

}
