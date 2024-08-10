import { Component, Inject, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

import { UserController } from '@Admin/controller/user.controller';

import { User, UserM, UserService, ProfileImg } from '@library/user-service';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationService } from '@library/application-service';
import { OrganizationService } from '@library/organization-service';
import { DialogEnum, InvalidForm, MatSelectSearchService, ButtonLabelEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
@Component({
    selector: 'app-access',
    templateUrl: './access.component.html',
    styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    ProfileImg = ProfileImg;
    rootOrgID: any;
    accessFG: FormGroup;

    dataSource: any[];
    displayedColumns: string[] = ['application', 'isEnabled', 'role'];

    allAppIDs: any[] = [];
    searchUtility: any[] = [];
    selection = new SelectionModel(true, []);

    allOrgIDs: any[] = [];
    totalOrganizationCount: number = 0;
    orgSelectSearch = new MatSelectSearchService(['name']);

    userID: number;
    user: UserM;

    currentOrgID: any;
    currentApplicationID: any;

    isCurrentUser: boolean = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private dialogRef: MatDialogRef<AccessComponent>,
        private toasterService: ToastrService,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private userController: UserController,
        private userService: UserService,
        private applicationService: ApplicationService,
        private organizationService: OrganizationService,
    ) {
        dialogRef.disableClose = true;
        this.userID = this.data['userID'];
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
        this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
        this.currentApplicationID = parseInt(this.storageService.getStorage('applicationID'));

        this.isCurrentUser = (this.userID == parseInt(this.storageService.getStorage('userID')));

        this.getUserByID(this.userID);
        this.accessFGInit();
        this.getOrganizations();
    }

    accessFGInit() {
        this.accessFG = this.formBuilder.group({
            organizationAccess: [[]],
            applicationAccess: this.formBuilder.array([])
        });
    }

    get applicationAccessFA() {
        return this.accessFG.get('applicationAccess') as FormArray;
    }

    get organizationAccessAC() {
        return this.accessFG.get('organizationAccess') as FormControl;
    }

    isAppSelected(index, appID): boolean {
        let isAppSelected = this.selection.isSelected(appID);
        isAppSelected ? this.applicationAccessFA.controls[index].enable() : this.applicationAccessFA.controls[index].disable();

        return isAppSelected;
    }

    disableRoleSelection(index) {
        this.applicationAccessFA.controls[index].disable();
    }

    async getUserByID(userID) {
        this.user = <UserM>await this.userService.getUserByID(userID);

    }

    async getOrganizations() {
        let organization = await this.organizationService.getOrganizations(this.rootOrgID);
        this.orgSelectSearch.entityArr = organization;
        this.orgSelectSearch.createSubscription();

        this.totalOrganizationCount = organization.length;
        organization.forEach(org => this.allOrgIDs.push(org['id']));
        this.getSubscribedApplicationsByOrgID();
    }

    async getSubscribedApplicationsByOrgID() {
        let applications = await this.applicationService.getSubscribedApplicationsByOrgID(this.rootOrgID);
       
        this.dataSource = applications.filter(app => app['subscriptionStatus'] == 'ACTIVE')
        this.dataSource.forEach((app) => {
            this.allAppIDs.push(app['id']);
            this.applicationAccessFA.push(this.newRoleFG(app['id']));

            let searchUtility = new MatSelectSearchService(['name']);
            searchUtility.entityArr = app['roles'];
            searchUtility.createSubscription();
            this.searchUtility.push(searchUtility);
        });

        this.getUserAccess();
    }

    newRoleFG(appID): FormGroup {
        return this.formBuilder.group({
            applicationID: [appID],
            roleID: [, Validators.required]
        });
    }

    getUserAccess() {
        this.userController.getAccess(this.rootOrgID, this.userID)
            .subscribe(access => this.patchAccess(access));
    }

    patchAccess(access) {
        this.applicationAccessFA.controls.forEach(control => {
            access['applicationAccess'].forEach(element => {
                this.selection.select(element['applicationID'])
                if (element['applicationID'] == control.value['applicationID'])
                    control.get('roleID').patchValue(element['roleID'])
            });
        });

        this.organizationAccessAC.patchValue((access['organizationAccess'].length == this.totalOrganizationCount) ? [-1, ...access['organizationAccess']] : [...access['organizationAccess']])
    }

    selectAll() {
        if (this.isAllSelected()) {
            this.selection.clear();
            if (this.isCurrentUser) this.selection.select(this.currentApplicationID);
            return;
        }
        this.selection.select(...this.allAppIDs);
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected === numRows;
    }

    selectAllOrg() {
        if (!this.organizationAccessAC.value.includes(-1)) {
            let reset = [];
            if (this.isCurrentUser) reset.push(this.currentOrgID);
            this.organizationAccessAC.reset(reset);
            return;
        }

        this.organizationAccessAC.setValue([-1, ...this.allOrgIDs]);
    }

    get isAllOrgSelected() {
        if (this.organizationAccessAC.value.includes(-1)) return false;

        const selectedOrg = this.organizationAccessAC.value.length;
        return this.totalOrganizationCount == selectedOrg;
    }

    orgSelected() {
        let selected = this.organizationAccessAC.value;
        if (this.isAllOrgSelected) {
            this.organizationAccessAC.patchValue([-1, ...selected]);
            return;
        }
        this.organizationAccessAC.patchValue(selected.filter(s => s > 0));
    }

    grantAccess() {
        if (this.accessFG.invalid) {
            console.log('invalid form - ', this.accessFG);

            this.accessFG.markAllAsTouched();
            this.toasterService.openToast('Error', InvalidForm.INVALID_FORM_MESSAGE, 'error');
            return;
        } else if (this.applicationAccessFA.status == 'DISABLED' && this.organizationAccessAC.value.length == 0) {
            console.log('invalid form - ', this.accessFG);
            this.toasterService.openToast('Error', 'Select either one organization or atleast one application access.', 'error');
            return;
        }

        let accessJson = this.accessFG.value;
        if (!accessJson?.['applicationAccess']) accessJson['applicationAccess'] = [];

        if (this.isCurrentUser) {
            let access = this.accessFG.getRawValue();
            let adminAccess = access['applicationAccess'].find((access) => access['applicationID'] == this.currentApplicationID);
            accessJson['applicationAccess'].push(adminAccess);
        }

        if (accessJson['organizationAccess'].length > 0) {
            accessJson['organizationAccess'] = accessJson['organizationAccess'].filter(f_id => f_id > 0);
        }

        this.userController.manageAccess(this.rootOrgID, this.userID, accessJson)
            .subscribe((res) => {
                let toast = this.toasterService.getToastStatus(res['status']);
                this.toasterService.openToast(toast['title'], res['message'], toast['color']);
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    getImage(user) {
        if (user?.profileImgUrl) {
            return user?.profileImgUrl;
        }
        let userName;
        if (user?.lastName) {
            userName = user?.firstName + ' ' + user?.lastName;
        } else {
            userName = user?.firstName;
        }
        return this.userService.defaultImage(userName, ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);

    }
}
