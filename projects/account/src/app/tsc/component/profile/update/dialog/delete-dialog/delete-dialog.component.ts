import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { UserController } from '@Account/controller/user.controller';

// library
import {
    ToastrColor,
    ToastrService,
    ToastrTitle
} from '@library/toastr-service';
// /library

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent implements OnInit {
    user: any;
    userID: any;
    imageID;
    currentOrgID: any;

    image: Blob[] = [];

    @ViewChild('imageInput') imageInput: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        private toastrService: ToastrService,
        private userController: UserController,
    ) {
        this.dialogRef.disableClose = true;

        this.user = this.data['user'];
        this.userID = this.user.id;
        this.imageID = this.user['imgID'];
    }

    ngOnInit(): void { }

    delete() {
        let formData = new FormData();
        formData.append('file', this.image[0]);

        if (this.imageID !== null) {
            this.userController.deleteUserProfileImage(this.userID, this.imageID).subscribe(deleteImgRes => {
                this.toastrService.openToast(ToastrTitle.SUCCESS, `${deleteImgRes['message']}`, ToastrColor.SUCCESS);
                this.dialogRef.close('success');
            }, error => {
                console.log('error in user image delete -', error);
            });
        }
    }

}
