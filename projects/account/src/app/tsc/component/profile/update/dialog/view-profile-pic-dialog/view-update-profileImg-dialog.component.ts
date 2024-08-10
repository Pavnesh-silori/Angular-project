import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import {
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';

import {
    ImageCroppedEvent,
    LoadedImage,
    base64ToFile,
} from 'ngx-image-cropper';

import { UserController } from '@Account/controller/user.controller';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum } from '@library/tsc-common';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { ProfileImage } from '@Account/constants/user-image.constants';

@Component({
    selector: 'app-view-update-profile-pic',
    templateUrl: './view-update-profileImg-dialog.component.html',
    styleUrls: ['./view-update-profileImg-dialog.component.scss']
})
export class ViewProfilePicDialog implements OnInit {
    ProfileImage = ProfileImage;
    ButtonLabelEnum = ButtonLabelEnum;

    user: any;
    imageID;
    currentOrgID: any;

    image: Blob[] = [];
    hideCropper: boolean = true;

    croppedImage: any = null;
    imageChangedEvent: any = '';

    @ViewChild('imageInput') imageInput: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<ViewProfilePicDialog>,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private userController: UserController,
    ) {
        this.dialogRef.disableClose = true;

        this.user = this.data['user'];
        this.imageID = this.user['imgID'];
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.fileChangeEvent(this.data['fileEvent']);
    }

    imageSelected() {
        this.imageInput.nativeElement.click();
    }

    emptyInput() {
        this.imageInput.nativeElement.value = '';
    }

    fileChangeEvent(event: any): void {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        } else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast(ToastrTitle.ERROR, `${ProfileImage['invalidTypeError']}`, ToastrColor.ERROR);
            } else {
                this.toastrService.openToast(ToastrTitle.ERROR, `${ProfileImage['invalidSizeError']}`, ToastrColor.ERROR);
            }
            this.emptyInput();
            return;
        }
    }

    isFileAllowed(fileName: string) {
        let isFileAllowed = false;

        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);

        if (undefined !== extension && null !== extension) {
            for (const ext of ProfileImage['allowedTypes']) {
                if (ext === extension[0]) {
                    isFileAllowed = true;
                }
            }
        }
        return isFileAllowed;
    }

    isFileSizeAllowed(size) {
        let isSizeAllowed = false;
        if (size < ProfileImage['maxSize']) { isSizeAllowed = true; }

        return isSizeAllowed;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.image = [];
        this.croppedImage = event.base64;
        this.image.push(base64ToFile(this.croppedImage));
    }

    imageLoaded(image: LoadedImage) { };

    cropperReady() { }

    loadImageFailed() {
        this.toastrService.openToast(ToastrTitle.ERROR, 'Couldn\'t load image. Try again!', 'error');
    }

    updateProfilePicture() {
        if (this.image.length == 0) {
            console.log('invalid image');
            this.toastrService.openToast(ToastrTitle.ERROR, 'Please select a picture', 'error');
            return;
        }

        let formData = new FormData();

        if (this.imageID !== null) {
            formData.append('file', this.image[0]);
            this.userController.updateUserProfileImage(this.user['imgID'], formData)
                .subscribe((updateImageRes) => {
                    this.toastrService.openToast(ToastrTitle.SUCCESS, `${updateImageRes['message']}`, ToastrColor.SUCCESS);
                    this.dialogRef.close('success');
                });
        } else {
            formData.append('userImg', this.image[0]);
            this.userController.setUserProfileImage(this.user['id'], formData)
                .subscribe((updateImageRes) => {
                    this.toastrService.openToast(ToastrTitle.SUCCESS, `${updateImageRes['message']}`, ToastrColor.SUCCESS);
                    this.dialogRef.close('success');
                });
        }
    }
}

