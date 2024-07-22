import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SpendBasedController } from '@carbon/controller/spend-based.controller';

import { StorageService } from '@library/storage-service';
import { UserService, UserM, ProfileImg } from '@library/user-service';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { InvalidForm, MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';

@Component({
    selector: 'app-create-import-request-dialog',
    templateUrl: './create-import-request-dialog.component.html',
    styles: [
    ]
})

export class CreateImportRequestDialogComponent implements OnInit {
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ProfileImg = ProfileImg;

    currentOrgID: any;
    currentApplicationID: any;
    methodID: string = '';

    users: UserM[] = [];
    userUpload: any[];
    userCategorize: any[];

    createImportRequestFG: FormGroup;

    fileUploaderUtil: MatSelectSearchService = new MatSelectSearchService(['userFirstName']);
    fileCategorizerUtil: MatSelectSearchService = new MatSelectSearchService(['userFirstName']);

    constructor(
        private router: Router,
        public dialogRef: MatDialogRef<CreateImportRequestDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private formBuilder: FormBuilder,
        private spendBasedController: SpendBasedController,
        private toasterService: ToastrService,
        private storageService: StorageService,
        public userService: UserService,
    ) {
        this.methodID = data['methodID'];
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.currentApplicationID = this.storageService.getStorage('applicationID');

        this.createImportRequestInit();
        this.getUsersByOrg();
    }

    createImportRequestInit() {
        this.createImportRequestFG = this.formBuilder.group({
            fileUploaderID: [, Validators.required],
            fileCategorizerID: [, Validators.required],
        })
    }

    getUsersByOrg() {
        this.userService.getUserListByOrgIDAndAppID(this.currentOrgID, this.currentApplicationID)
            .then(allUser => {
                this.users = allUser;

                this.fileUploaderUtil.entityArr = this.users;
                this.fileUploaderUtil.createSubscription();

                this.fileCategorizerUtil.entityArr = this.users;
                this.fileCategorizerUtil.createSubscription();
            })
            .catch(error => {
                console.log('error in getUsersByOrg()', error);
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error in getting Users', ToastrColor.ERROR);
            });
    }

    createImportRequest() {
        if (this.createImportRequestFG.invalid) {
            this.createImportRequestFG.markAllAsTouched();
            this.toasterService.openToast(ToastrTitle.ERROR, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
        } else {
            const body = {
                fileUploaderID: this.createImportRequestFG.value['fileUploaderID'],
                fileCategorizerID: this.createImportRequestFG.value['fileCategorizerID'],
                methodID: this.methodID
            }

            this.spendBasedController.createImportRequest(this.currentOrgID, body)
                .subscribe((importRes) => {
                    this.toasterService.openToast(importRes['title'], importRes['message'], importRes['result']);

                    this.dialogRef.close('Success');
                    this.router.navigate(['/activity-data/spend-based-method/import-history']);
                }, error => {
                    console.log('Error in createImportRequest() -', error);
                    this.toasterService.openToast(ToastrTitle.ERROR, 'Error in creating import request', ToastrColor.ERROR);
                });
        }
    }

}
