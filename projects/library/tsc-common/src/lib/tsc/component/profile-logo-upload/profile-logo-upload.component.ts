import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ImageCroppedEvent, LoadedImage, base64ToFile } from 'ngx-image-cropper';

import { COMMON_CONSTANT } from '../../constant/common.constant'

import { ButtonLabelEnum } from '../../enum/button.enum';
import { ImageErrorEnum } from '../../enum/image.enum';

import { DialogOneComponent } from '../dialog/dialog-one/dialog-one.component';

//tsc-library
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-profile-logo-upload',
    templateUrl: './profile-logo-upload.component.html',
    styleUrls: ['./profile-logo-upload.component.scss']
})

export class ProfileLogoUploadComponent implements OnInit {
    @Input() roundCropper: boolean = false;
    @Input() imageInp: any;
    @Input() showDeleteBtnInp: boolean = false;
    @Input() previewBtnLabelInp: string;
    @Input() removeImgActionInp: string = 'REMOVE';

    @Output() imageSelectedEvent = new EventEmitter<{ image: any }>();
    @Output() imageRemoveEvent = new EventEmitter<void>();

    @ViewChild('imageUpdate') imageUpdate: ElementRef;
    @ViewChild('openCropper') openCropper: TemplateRef<any>;
    @ViewChild('cropperImageInput') cropperImageInput: ElementRef;

    ButtonLabelEnum = ButtonLabelEnum;

    currentImg: any;
    image: Blob[] = [];
    croppedImage: any = null;
    previewBtnLabel: string = 'Update';

    hideCropper: boolean = true;
    imageChangedEvent: any = '';

    dialogRef: MatDialogRef<any>;

    constructor(
        private dialog: MatDialog,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.imageInp && this.imageInp) {
            this.currentImg = this.imageInp;
        }

        if (changes.previewBtnLabelInp && this.previewBtnLabelInp) {
            this.previewBtnLabel = this.previewBtnLabelInp;
        }
    }

    chooseImage() {
        this.imageUpdate.nativeElement.click();
    }

    imageSelected() {
        this.cropperImageInput.nativeElement.click();
    }

    emptyInput() {
        this.cropperImageInput.nativeElement.value = '';
    }

    imageCropped(event: ImageCroppedEvent) {
        this.image = [];
        this.croppedImage = event.base64;
        this.image.push(base64ToFile(this.croppedImage));
    }

    imageLoaded(image: LoadedImage) { };

    cropperReady() { }

    loadImageFailed() {
        this.toastrService.openToast('Error', 'Couldn\'t load image. Try again!', 'error');
    }

    fileChangeEvent(event: any): void {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        }

        else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
            } else {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
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
            for (const ext of COMMON_CONSTANT.ALLOWED_IMAGE_TYPES) {
                if (ext === extension[0]) {
                    isFileAllowed = true;
                }
            }
        }
        return isFileAllowed;
    }

    isFileSizeAllowed(size) {
        let isSizeAllowed = false;

        if (size < COMMON_CONSTANT.MAX_IMAGE_SIZE) {
            isSizeAllowed = true;
        }
        return isSizeAllowed;
    }

    openEditDialog() {
        this.dialogRef = this.dialog.open(this.openCropper, {
            minWidth: '350px'
        });
        this.dialogRef.disableClose = true;
        this.dialogRef.afterClosed()
            .subscribe(result => {
                this.imageUpdate.nativeElement.value = null;
            });
    }

    updateFile(fileEvent) {
        const file: File = fileEvent.target.files[0];
        if (file) {
            this.fileChangeEvent(fileEvent);
            this.openEditDialog();
        }
    }

    updateImage() {
        if (this.image.length == 0) {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Please select a picture', ToastrColor.ERROR);
            return;
        }

        this.currentImg = this.croppedImage;
        // this.showDeleteBtnInp = true;
        this.imageSelectedEvent.emit({ image: this.image[0] });
        this.hideCropper = true;
        this.dialogRef.close();
    }

    removeImage() {
        if (this.removeImgActionInp == 'DELETE') {
            this.deleteImage();
        } else {
            this.imageRemoveEvent.emit();
        }
    }

    deleteImage() {
        this.dialogRef = this.dialog.open(DialogOneComponent, {
            data: {
                type: 'delete',
                icon: 'dangerous',
                header: 'Delete Image?',
                body: `Are you sure you want to delete this image?`,
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            },
            minHeight: '200px',
            minWidth: '450px',
        });

        this.dialogRef.disableClose = true;
        this.dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.imageRemoveEvent.emit();
            }
        });
    }
}
