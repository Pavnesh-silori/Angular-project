
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogRef } from '@angular/material/dialog';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

//tsc-library
import { COMMON_CONSTANT, DialogEnum, InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance} from '@library/tsc-common';
import { ToastrTitle, ToastrService, ToastrColor } from '@library/toastr-service';
import { ApplicationController } from '@library/application-service';
import { OrganizationService, OrgAccessM } from '@library/organization-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/

import { SubscriptionStatus } from '@Admin/enum/subscription.enum';
import { UserController } from '@Admin/controller/user.controller';

@Component({
    selector: 'app-invite-user',
    templateUrl: './invite-user.component.html',
    styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {
    
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    faPlus = faPlus;

    rootOrgID: any;

    inviteFG: FormGroup;

    dataSource: any = [];
    displayedColumns: string[] = ['application', 'isEnabled', 'role'];

    allOrganizationIDs: any[] = [];
    totalOrganizationCount: number = 0;
    orgSelectSearch = new MatSelectSearchService(['name']);

    allApplicationIDs: any = [];
    selection = new SelectionModel(true, []);
    searchUtility: MatSelectSearchService[] = [];
    organization: any;

    hidden: boolean = true;
    isOrgExpanded: boolean = false;
    isProductExpanded: boolean = false;

    constructor(
        private toasterService: ToastrService,
        private formBuilder: FormBuilder,
        private userController: UserController,
        private storageService: StorageService,
        private applicationController: ApplicationController,
        private organizationService: OrganizationService,
        private dialogRef: MatDialogRef<InviteUserComponent>
    ) {
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        forkJoin([
            this.getOrganizations(),
            this.getSubscribedApplicationsByOrgID(this.rootOrgID)
        ]).subscribe().add(() => {
            /* code section that's dependent on all above calls */
        });
        this.inviteFGInit();
    }

    inviteFGInit() {
        this.inviteFG = this.formBuilder.group({
            email: [, [Validators.required, Validators.email, Validators.pattern(COMMON_CONSTANT['EMAIL_PATTERN'])]],
            organizationAccess: [[]],
            applicationAccess: this.formBuilder.array([])
        });
    }

    get applicationAccessFA(): FormArray {
        return this.inviteFG.get('applicationAccess') as FormArray;
    }

    get organizationAccessAC(): AbstractControl {
        return this.inviteFG.get('organizationAccess') as AbstractControl;
    }

    toggleField(index, appID) {
        if (this.selection.isSelected(appID)) {
            this.applicationAccessFA.controls[index].enable();
            return false;
        } else {
            this.applicationAccessFA.controls[index].disable();
            return true;
        }
    }

    selectAll() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.allApplicationIDs);
    }

    isAllSelected() {
        const selected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return selected === numRows;
    }

    getSubscribedApplicationsByOrgID(orgID): Observable<any> {
        return new Observable(observer => {
            this.applicationController.getSubscribedApplicationsByOrgID(orgID)
                .subscribe((applications: any) => {
                    let allApplications = applications['application'];
                    this.dataSource = allApplications.filter(app => app['subscriptionStatus'] == SubscriptionStatus['ACTIVE']);
                    this.dataSource.forEach((application) => {
                        this.allApplicationIDs.push(application['id']);
                        this.applicationAccessFA.push(this.newProductAccessFG(application['id']));

                        let searchUtility = new MatSelectSearchService(['name']);
                        searchUtility.entityArr = application['roles'];
                        searchUtility.createSubscription();
                        this.searchUtility.push(searchUtility);
                    });
                }).add(() => observer.complete());
        })
    }

    async getOrganizations() {
        this.organization = <OrgAccessM[]>await this.organizationService.getOrganizations(this.rootOrgID)
        this.orgSelectSearch.entityArr = this.organization;
        this.orgSelectSearch.createSubscription();
        this.totalOrganizationCount = this.organization.length;
        this.organization.forEach(org => this.allOrganizationIDs.push(org['id']));
    }

    newProductAccessFG(appID): FormGroup {
        return this.formBuilder.group({
            applicationID: [appID],
            roleID: [, Validators.required]
        });
    }

    selectAllOrg() {
        if (!this.organizationAccessAC.value.includes(-1)) {
            this.organizationAccessAC.reset([]);
            return;
        }
        this.organizationAccessAC.setValue([-1, ...this.allOrganizationIDs]);
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

    inviteUser() {
        if (this.inviteFG.invalid) {
            console.log('invalid form - ', this.inviteFG);

            this.inviteFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_TITLE, ToastrColor.ERROR);
            return;
        }

        let userJson = this.inviteFG.value;
        if (!userJson?.['applicationAccess']) {
            userJson['applicationAccess'] = [];
        }
        if (userJson['organizationAccess'].length > this.totalOrganizationCount) {
            userJson['organizationAccess'] = userJson['organizationAccess'].filter(f_id => f_id > 0);
        }

        this.userController.inviteUser(this.rootOrgID, userJson)
            .subscribe((res) => {
                let toast = this.toasterService.getToastStatus(res['status']);
                this.toasterService.openToast(toast['title'], res['message'], toast['color']);

                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            });
    }

    hasError = (control: string, error: string) => {
        return this.inviteFG.get(control).hasError(error);
    }
}
