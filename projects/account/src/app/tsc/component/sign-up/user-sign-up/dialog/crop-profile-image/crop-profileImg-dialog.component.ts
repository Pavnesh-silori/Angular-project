import { ProfileImage } from '@Account/constants/user-image.constants';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import {
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {
    LoadedImage,
    base64ToFile,
    ImageCroppedEvent,
} from 'ngx-image-cropper';

// library
import { ToastrService } from '@library/toastr-service';
// /library

@Component({
    selector: 'app-crop-profile-pic',
    templateUrl: './crop-profileImg-dialog.component.html',
    styleUrls: []
})
export class CropProfilePicDialog implements OnInit {
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
        public dialogRef: MatDialogRef<CropProfilePicDialog>,
    ) {
        this.dialogRef.disableClose = true;
        
        this.fileEvent = this.data['fileEvent'];
        this.fileChangeEvent(this.fileEvent);
    }

    ngOnInit(): void { }

    fileChangeEvent(event: any): void {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        } else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast('Error', ProfileImage.invalidTypeError, 'error');
            } else {
                this.toastrService.openToast('Error', ProfileImage.invalidSizeError, 'error');
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
        if (size < ProfileImage.maxSize) { isSizeAllowed = true; }

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
        this.toastrService.openToast('Error', 'Couldn\'t load image. Try again!', 'error');
    }

    updateProfilePicture() {
        if (this.image.length == 0) {
            console.log('invalid image');
            this.toastrService.openToast('Error', 'Please select a picture', 'error');
            return;
        }

        let images = {
            'imageFile': this.image[0],
            'croppedImage': this.croppedImage
        }
        this.dialogRef.close(images);
    }
}

