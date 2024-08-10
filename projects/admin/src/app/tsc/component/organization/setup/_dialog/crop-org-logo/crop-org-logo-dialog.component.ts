import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import {
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
//tsc-library
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/
import {
    LoadedImage,
    base64ToFile,
    ImageCroppedEvent,
} from 'ngx-image-cropper';
import { BulkUploadEnum } from '@library/tsc-common';

@Component({
    selector: 'app-crop-org-logo',
    templateUrl: './crop-org-logo-dialog.component.html',
    styleUrls: []
})
export class CropOrgLogoDialog implements OnInit {

    fileEvent: any;
    currentOrgID: any;

    image: Blob[] = [];
    update: boolean = true;
    hideCropper: boolean = true;

    croppedImage: any = null;
    imageChangedEvent: any = '';

    @ViewChild('imageInput') imageInput: ElementRef;

    constructor(
        public toastrService: ToastrService,
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogRef: MatDialogRef<CropOrgLogoDialog>,
        private storageService: StorageService,
    ) {
        this.fileEvent = this.data['fileEvent'];
        this.fileChangeEvent(this.fileEvent);
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
    }

    fileChangeEvent(event: any): void {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        } else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast(ToastrTitle.ERROR, 'invalidImageTypeError', ToastrColor.ERROR);
            } else {
                this.toastrService.openToast(ToastrTitle.ERROR, 'invalidImageSizeError', ToastrColor.ERROR);
            }
            this.dialogRef.close('image_load_error');
        }

    }

    isFileAllowed(fileName: string) {
        let isFileAllowed = false;

        const allowedFiles = ['.jpg', '.jpeg', '.png'];
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);

        if (undefined !== extension && null !== extension) {
            for (const ext of allowedFiles) {
                if (ext === extension[0]) {
                    isFileAllowed = true;
                }
            }
        }
        return isFileAllowed;
    }

    isFileSizeAllowed(size) {
        let isSizeAllowed = false;
        if (size < BulkUploadEnum.MAX_FILE_SIZE) { isSizeAllowed = true; }

        return isSizeAllowed;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.image = [];
        this.croppedImage = event.base64;
        this.image.push(base64ToFile(this.croppedImage));
    }

    imageLoaded(image: LoadedImage) { }

    cropperReady() { }

    loadImageFailed() {
        this.toastrService.openToast(ToastrTitle.ERROR, 'Couldn\'t load image. Try again!', ToastrColor.ERROR);
    }

    updateProfilePicture() {
        if (this.image.length == 0) {
            console.log('invalid image');
            this.toastrService.openToast(ToastrTitle.ERROR, 'Please select a picture', ToastrColor.ERROR);
            return;
        }

        let images = {
            'imageFile': this.image[0],
            'croppedImage': this.croppedImage
        }
        this.dialogRef.close(images);
    }
}

