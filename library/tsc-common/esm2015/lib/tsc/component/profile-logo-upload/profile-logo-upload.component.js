import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { base64ToFile } from 'ngx-image-cropper';
import { COMMON_CONSTANT } from '../../constant/common.constant';
import { ButtonLabelEnum } from '../../enum/button.enum';
import { ImageErrorEnum } from '../../enum/image.enum';
import { DialogOneComponent } from '../dialog/dialog-one/dialog-one.component';
//tsc-library
import { ToastrTitle, ToastrColor } from '@library/toastr-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@library/toastr-service";
import * as i3 from "@angular/material/button";
import * as i4 from "ngx-image-cropper";
import * as i5 from "@angular/material/divider";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/common";
// /tsc-library/
export class ProfileLogoUploadComponent {
    constructor(dialog, toastrService) {
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.roundCropper = false;
        this.showDeleteBtnInp = false;
        this.removeImgActionInp = 'REMOVE';
        this.imageSelectedEvent = new EventEmitter();
        this.imageRemoveEvent = new EventEmitter();
        this.ButtonLabelEnum = ButtonLabelEnum;
        this.image = [];
        this.croppedImage = null;
        this.previewBtnLabel = 'Update';
        this.hideCropper = true;
        this.imageChangedEvent = '';
    }
    ngOnInit() { }
    ngOnChanges(changes) {
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
    imageCropped(event) {
        this.image = [];
        this.croppedImage = event.base64;
        this.image.push(base64ToFile(this.croppedImage));
    }
    imageLoaded(image) { }
    ;
    cropperReady() { }
    loadImageFailed() {
        this.toastrService.openToast('Error', 'Couldn\'t load image. Try again!', 'error');
    }
    fileChangeEvent(event) {
        if (this.isFileAllowed(event.target.files[0].name) && this.isFileSizeAllowed(event.target.files[0].size)) {
            this.hideCropper = false;
            this.imageChangedEvent = event;
        }
        else {
            if (!this.isFileAllowed(event.target.files[0].name)) {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
            }
            else {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
            }
            this.emptyInput();
            return;
        }
    }
    isFileAllowed(fileName) {
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
        const file = fileEvent.target.files[0];
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
        }
        else {
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
ProfileLogoUploadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadComponent, deps: [{ token: i1.MatDialog }, { token: i2.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
ProfileLogoUploadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ProfileLogoUploadComponent, selector: "lib-profile-logo-upload", inputs: { roundCropper: "roundCropper", imageInp: "imageInp", showDeleteBtnInp: "showDeleteBtnInp", previewBtnLabelInp: "previewBtnLabelInp", removeImgActionInp: "removeImgActionInp" }, outputs: { imageSelectedEvent: "imageSelectedEvent", imageRemoveEvent: "imageRemoveEvent" }, viewQueries: [{ propertyName: "imageUpdate", first: true, predicate: ["imageUpdate"], descendants: true }, { propertyName: "openCropper", first: true, predicate: ["openCropper"], descendants: true }, { propertyName: "cropperImageInput", first: true, predicate: ["cropperImageInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"imageContainer border rounded\">\n    <img class=\"imgView d-block cursorPointer\" [src]=\"currentImg\" alt=\"Uploaded Image\" (click)=\"chooseImage()\">\n\n    <button class=\"editImgBtn profilelogoBtn\" type=\"button\" (click)=\"chooseImage()\" #tooltip=\"matTooltip\"\n        matTooltipPosition=\"above\" matTooltip=\"Click to edit image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            edit\n        </span>\n    </button>\n\n    <button *ngIf=\"showDeleteBtnInp\" class=\"deleteImgBtn profilelogoBtn\" type=\"button\" (click)=\"removeImage()\"\n        #tooltip=\"matTooltip\" matTooltipPosition=\"above\" matTooltip=\"Remove image.\" mat-icon-button>\n        <span class=\"material-symbols-outlined imageIcon\">\n            delete\n        </span>\n    </button>\n\n    <input #imageUpdate class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n        (change)=\"updateFile($event)\" />\n</div>\n\n<ng-template #openCropper>\n    <h6 mat-dialog-title>\n        <strong [ngClass]=\"{'d-none': hideCropper}\">Crop Image</strong>\n        <strong [ngClass]=\"{'d-none': !hideCropper}\">Preview</strong>\n        <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n            matTooltipPosition=\"before\">\n            <span class=\"material-symbols-outlined\">close</span>\n        </button>\n    </h6>\n    <hr class=\"mt-0\" />\n    <div mat-dialog-content>\n        <form enctype=\"multipart/form-data\">\n            <div class=\"row cropperDimensions mx-auto\" [ngClass]=\"{'d-none': hideCropper}\">\n                <input #cropperImageInput class=\"d-none\" type=\"file\" accept=\"image/png, image/jpeg, image/jpg\"\n                    (change)=\"fileChangeEvent($event)\" />\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"roundCropper\"\n                    [roundCropper]=\"roundCropper\" format=\"png,jpg,jpeg\" (imageCropped)=\"imageCropped($event)\"\n                    (imageLoaded)=\"imageLoaded($event)\" (cropperReady)=\"cropperReady()\"\n                    (loadImageFailed)=\"loadImageFailed()\">\n                </image-cropper>\n            </div>\n            <div class=\"row\" [ngClass]=\"{'d-none': !hideCropper}\">\n                <div class=\"col-sm-12\">\n                    <img class=\"border d-block mx-auto updateImgPreview\" [src]=\"croppedImage\"\n                        [ngClass]=\"{'rounded-circle': roundCropper}\" />\n                </div>\n            </div>\n        </form>\n    </div>\n    <mat-divider class=\"mt-2\"></mat-divider>\n    <mat-dialog-actions align=\"end\">\n        <div [ngClass]=\"{'d-none': hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-primary ms-2\" type=\"button\" (click)=\"hideCropper = !hideCropper\">\n                Crop\n            </button>\n        </div>\n        <div [ngClass]=\"{'d-none': !hideCropper}\">\n            <button class=\"btn btn-link\" type=\"button\" (click)=\"imageSelected()\">\n                Choose Another\n            </button>\n            <button class=\"btn btn-success ms-2\" type=\"button\" (click)=\"updateImage()\">\n                {{ previewBtnLabel }}\n            </button>\n        </div>\n    </mat-dialog-actions>\n</ng-template>", styles: [".imageContainer{will-change:transform;width:110px;height:110px;display:flex;flex:auto;align-items:center;justify-content:center;float:left;padding:3px}.imageContainer :hover{opacity:.85;transition:transform .5s;transform:scale(1.05)}.imgView{max-width:100%;max-height:100%}.profilelogoBtn{will-change:transform;bottom:3px;position:absolute!important;width:25px!important;height:25px!important;color:#fff;background-color:#000;border-radius:50%;border:1px solid white!important;opacity:.5;display:flex!important;align-items:center;justify-content:center}.editImgBtn{right:3px}.deleteImgBtn{right:30px}.imageIcon{will-change:transform;font-size:small}.cropperDimensions{max-width:350px;max-height:auto}.updateImgPreview{width:250px}.matDialogClose{background-color:#80808033}\n"], components: [{ type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i4.ImageCropperComponent, selector: "image-cropper", inputs: ["format", "transform", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "resizeToHeight", "cropperMinWidth", "cropperMinHeight", "cropperMaxHeight", "cropperMaxWidth", "cropperStaticWidth", "cropperStaticHeight", "canvasRotation", "initialStepSize", "roundCropper", "onlyScaleDown", "imageQuality", "autoCrop", "backgroundColor", "containWithinAspectRatio", "hideResizeSquares", "cropper", "alignImage", "disabled", "imageChangedEvent", "imageURL", "imageBase64", "imageFile"], outputs: ["imageCropped", "startCropImage", "imageLoaded", "cropperReady", "loadImageFailed"] }, { type: i5.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], directives: [{ type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ProfileLogoUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-profile-logo-upload',
                    templateUrl: './profile-logo-upload.component.html',
                    styleUrls: ['./profile-logo-upload.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }, { type: i2.ToastrService }]; }, propDecorators: { roundCropper: [{
                type: Input
            }], imageInp: [{
                type: Input
            }], showDeleteBtnInp: [{
                type: Input
            }], previewBtnLabelInp: [{
                type: Input
            }], removeImgActionInp: [{
                type: Input
            }], imageSelectedEvent: [{
                type: Output
            }], imageRemoveEvent: [{
                type: Output
            }], imageUpdate: [{
                type: ViewChild,
                args: ['imageUpdate']
            }], openCropper: [{
                type: ViewChild,
                args: ['openCropper']
            }], cropperImageInput: [{
                type: ViewChild,
                args: ['cropperImageInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1sb2dvLXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L3Byb2ZpbGUtbG9nby11cGxvYWQvcHJvZmlsZS1sb2dvLXVwbG9hZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L3Byb2ZpbGUtbG9nby11cGxvYWQvcHJvZmlsZS1sb2dvLXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUE4QixTQUFTLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFHbkksT0FBTyxFQUFrQyxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFFaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxhQUFhO0FBQ2IsT0FBTyxFQUFpQixXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQUNsRixnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLDBCQUEwQjtJQTBCbkMsWUFDWSxNQUFpQixFQUNqQixhQUE0QjtRQUQ1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBM0IvQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixxQkFBZ0IsR0FBWSxLQUFL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QU87WUFDbEIsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLElBQUksR0FBRyxFQUFFO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7d0hBM0tRLDBCQUEwQjs0R0FBMUIsMEJBQTBCLDZwQkN0QnZDLGk3R0FxRWM7NEZEL0NELDBCQUEwQjtrQkFOdEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsc0NBQXNDO29CQUNuRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztpQkFDdEQ7NEhBR1ksWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUVJLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFDRyxnQkFBZ0I7c0JBQXpCLE1BQU07Z0JBRW1CLFdBQVc7c0JBQXBDLFNBQVM7dUJBQUMsYUFBYTtnQkFDRSxXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWE7Z0JBQ1EsaUJBQWlCO3NCQUFoRCxTQUFTO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50LCBMb2FkZWRJbWFnZSwgYmFzZTY0VG9GaWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuXG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQgfSBmcm9tICcuLi8uLi9jb25zdGFudC9jb21tb24uY29uc3RhbnQnXG5cbmltcG9ydCB7IEJ1dHRvbkxhYmVsRW51bSB9IGZyb20gJy4uLy4uL2VudW0vYnV0dG9uLmVudW0nO1xuaW1wb3J0IHsgSW1hZ2VFcnJvckVudW0gfSBmcm9tICcuLi8uLi9lbnVtL2ltYWdlLmVudW0nO1xuXG5pbXBvcnQgeyBEaWFsb2dPbmVDb21wb25lbnQgfSBmcm9tICcuLi9kaWFsb2cvZGlhbG9nLW9uZS9kaWFsb2ctb25lLmNvbXBvbmVudCc7XG5cbi8vdHNjLWxpYnJhcnlcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UsIFRvYXN0clRpdGxlLCBUb2FzdHJDb2xvciB9IGZyb20gJ0BsaWJyYXJ5L3RvYXN0ci1zZXJ2aWNlJztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItcHJvZmlsZS1sb2dvLXVwbG9hZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtbG9nby11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Byb2ZpbGUtbG9nby11cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVMb2dvVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSByb3VuZENyb3BwZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBpbWFnZUlucDogYW55O1xuICAgIEBJbnB1dCgpIHNob3dEZWxldGVCdG5JbnA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwcmV2aWV3QnRuTGFiZWxJbnA6IHN0cmluZztcbiAgICBASW5wdXQoKSByZW1vdmVJbWdBY3Rpb25JbnA6IHN0cmluZyA9ICdSRU1PVkUnO1xuXG4gICAgQE91dHB1dCgpIGltYWdlU2VsZWN0ZWRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbWFnZTogYW55IH0+KCk7XG4gICAgQE91dHB1dCgpIGltYWdlUmVtb3ZlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdpbWFnZVVwZGF0ZScpIGltYWdlVXBkYXRlOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ29wZW5Dcm9wcGVyJykgb3BlbkNyb3BwZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQFZpZXdDaGlsZCgnY3JvcHBlckltYWdlSW5wdXQnKSBjcm9wcGVySW1hZ2VJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIEJ1dHRvbkxhYmVsRW51bSA9IEJ1dHRvbkxhYmVsRW51bTtcblxuICAgIGN1cnJlbnRJbWc6IGFueTtcbiAgICBpbWFnZTogQmxvYltdID0gW107XG4gICAgY3JvcHBlZEltYWdlOiBhbnkgPSBudWxsO1xuICAgIHByZXZpZXdCdG5MYWJlbDogc3RyaW5nID0gJ1VwZGF0ZSc7XG5cbiAgICBoaWRlQ3JvcHBlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xuXG4gICAgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICAgICBwcml2YXRlIHRvYXN0clNlcnZpY2U6IFRvYXN0clNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaW1hZ2VJbnAgJiYgdGhpcy5pbWFnZUlucCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1nID0gdGhpcy5pbWFnZUlucDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLnByZXZpZXdCdG5MYWJlbElucCAmJiB0aGlzLnByZXZpZXdCdG5MYWJlbElucCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3QnRuTGFiZWwgPSB0aGlzLnByZXZpZXdCdG5MYWJlbElucDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNob29zZUltYWdlKCkge1xuICAgICAgICB0aGlzLmltYWdlVXBkYXRlLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBpbWFnZVNlbGVjdGVkKCkge1xuICAgICAgICB0aGlzLmNyb3BwZXJJbWFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBlbXB0eUlucHV0KCkge1xuICAgICAgICB0aGlzLmNyb3BwZXJJbWFnZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBbXTtcbiAgICAgICAgdGhpcy5jcm9wcGVkSW1hZ2UgPSBldmVudC5iYXNlNjQ7XG4gICAgICAgIHRoaXMuaW1hZ2UucHVzaChiYXNlNjRUb0ZpbGUodGhpcy5jcm9wcGVkSW1hZ2UpKTtcbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZChpbWFnZTogTG9hZGVkSW1hZ2UpIHsgfTtcblxuICAgIGNyb3BwZXJSZWFkeSgpIHsgfVxuXG4gICAgbG9hZEltYWdlRmFpbGVkKCkge1xuICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KCdFcnJvcicsICdDb3VsZG5cXCd0IGxvYWQgaW1hZ2UuIFRyeSBhZ2FpbiEnLCAnZXJyb3InKTtcbiAgICB9XG5cbiAgICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0ZpbGVBbGxvd2VkKGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lKSAmJiB0aGlzLmlzRmlsZVNpemVBbGxvd2VkKGV2ZW50LnRhcmdldC5maWxlc1swXS5zaXplKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlQ3JvcHBlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGV2ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaWxlQWxsb3dlZChldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KCdFcnJvcicsIEltYWdlRXJyb3JFbnVtLklOVkFMSURfSU1BR0VfVFlQRV9FUlJPUiwgJ2Vycm9yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoJ0Vycm9yJywgSW1hZ2VFcnJvckVudW0uSU5WQUxJRF9JTUFHRV9TSVpFX0VSUk9SLCAnZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbXB0eUlucHV0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0ZpbGVBbGxvd2VkKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGlzRmlsZUFsbG93ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVnZXggPSAvKD86XFwuKFteLl0rKSk/JC87XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHJlZ2V4LmV4ZWMoZmlsZU5hbWUpO1xuXG4gICAgICAgIGlmICh1bmRlZmluZWQgIT09IGV4dGVuc2lvbiAmJiBudWxsICE9PSBleHRlbnNpb24pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXh0IG9mIENPTU1PTl9DT05TVEFOVC5BTExPV0VEX0lNQUdFX1RZUEVTKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4dCA9PT0gZXh0ZW5zaW9uWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmlsZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNGaWxlQWxsb3dlZDtcbiAgICB9XG5cbiAgICBpc0ZpbGVTaXplQWxsb3dlZChzaXplKSB7XG4gICAgICAgIGxldCBpc1NpemVBbGxvd2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNpemUgPCBDT01NT05fQ09OU1RBTlQuTUFYX0lNQUdFX1NJWkUpIHtcbiAgICAgICAgICAgIGlzU2l6ZUFsbG93ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1NpemVBbGxvd2VkO1xuICAgIH1cblxuICAgIG9wZW5FZGl0RGlhbG9nKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4odGhpcy5vcGVuQ3JvcHBlciwge1xuICAgICAgICAgICAgbWluV2lkdGg6ICczNTBweCdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVXBkYXRlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRmlsZShmaWxlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZTogRmlsZSA9IGZpbGVFdmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDaGFuZ2VFdmVudChmaWxlRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5vcGVuRWRpdERpYWxvZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KFRvYXN0clRpdGxlLkVSUk9SLCAnUGxlYXNlIHNlbGVjdCBhIHBpY3R1cmUnLCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRJbWcgPSB0aGlzLmNyb3BwZWRJbWFnZTtcbiAgICAgICAgLy8gdGhpcy5zaG93RGVsZXRlQnRuSW5wID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbWFnZVNlbGVjdGVkRXZlbnQuZW1pdCh7IGltYWdlOiB0aGlzLmltYWdlWzBdIH0pO1xuICAgICAgICB0aGlzLmhpZGVDcm9wcGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlSW1nQWN0aW9uSW5wID09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlUmVtb3ZlRXZlbnQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dPbmVDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnZGFuZ2Vyb3VzJyxcbiAgICAgICAgICAgICAgICBoZWFkZXI6ICdEZWxldGUgSW1hZ2U/JyxcbiAgICAgICAgICAgICAgICBib2R5OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGltYWdlP2AsXG4gICAgICAgICAgICAgICAgYnV0dG9uT25lOiBCdXR0b25MYWJlbEVudW0uQ0FOQ0VMX0JUTl9MQUJFTCxcbiAgICAgICAgICAgICAgICBidXR0b25Ud286IEJ1dHRvbkxhYmVsRW51bS5ERUxFVEVfQlROX0xBQkVMXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjAwcHgnLFxuICAgICAgICAgICAgbWluV2lkdGg6ICc0NTBweCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJlbW92ZUV2ZW50LmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImltYWdlQ29udGFpbmVyIGJvcmRlciByb3VuZGVkXCI+XG4gICAgPGltZyBjbGFzcz1cImltZ1ZpZXcgZC1ibG9jayBjdXJzb3JQb2ludGVyXCIgW3NyY109XCJjdXJyZW50SW1nXCIgYWx0PVwiVXBsb2FkZWQgSW1hZ2VcIiAoY2xpY2spPVwiY2hvb3NlSW1hZ2UoKVwiPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRJbWdCdG4gcHJvZmlsZWxvZ29CdG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNob29zZUltYWdlKClcIiAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhYm92ZVwiIG1hdFRvb2x0aXA9XCJDbGljayB0byBlZGl0IGltYWdlLlwiIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGltYWdlSWNvblwiPlxuICAgICAgICAgICAgZWRpdFxuICAgICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0RlbGV0ZUJ0bklucFwiIGNsYXNzPVwiZGVsZXRlSW1nQnRuIHByb2ZpbGVsb2dvQnRuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVJbWFnZSgpXCJcbiAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCIgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIiBtYXRUb29sdGlwPVwiUmVtb3ZlIGltYWdlLlwiIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGltYWdlSWNvblwiPlxuICAgICAgICAgICAgZGVsZXRlXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxpbnB1dCAjaW1hZ2VVcGRhdGUgY2xhc3M9XCJkLW5vbmVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvanBnXCJcbiAgICAgICAgKGNoYW5nZSk9XCJ1cGRhdGVGaWxlKCRldmVudClcIiAvPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjb3BlbkNyb3BwZXI+XG4gICAgPGg2IG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgICAgIDxzdHJvbmcgW25nQ2xhc3NdPVwieydkLW5vbmUnOiBoaWRlQ3JvcHBlcn1cIj5Dcm9wIEltYWdlPC9zdHJvbmc+XG4gICAgICAgIDxzdHJvbmcgW25nQ2xhc3NdPVwieydkLW5vbmUnOiAhaGlkZUNyb3BwZXJ9XCI+UHJldmlldzwvc3Ryb25nPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNka0ZvY3VzSW5pdGlhbCBjbGFzcz1cImZsb2F0LWVuZCBtYXREaWFsb2dDbG9zZVwiIG1hdFRvb2x0aXA9XCJDbG9zZVwiXG4gICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJiZWZvcmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3NlPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2g2PlxuICAgIDxociBjbGFzcz1cIm10LTBcIiAvPlxuICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICAgICAgICA8Zm9ybSBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBjcm9wcGVyRGltZW5zaW9ucyBteC1hdXRvXCIgW25nQ2xhc3NdPVwieydkLW5vbmUnOiBoaWRlQ3JvcHBlcn1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgI2Nyb3BwZXJJbWFnZUlucHV0IGNsYXNzPVwiZC1ub25lXCIgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWcsIGltYWdlL2pwZ1wiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZmlsZUNoYW5nZUV2ZW50KCRldmVudClcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWFnZS1jcm9wcGVyIFtpbWFnZUNoYW5nZWRFdmVudF09XCJpbWFnZUNoYW5nZWRFdmVudFwiIFttYWludGFpbkFzcGVjdFJhdGlvXT1cInJvdW5kQ3JvcHBlclwiXG4gICAgICAgICAgICAgICAgICAgIFtyb3VuZENyb3BwZXJdPVwicm91bmRDcm9wcGVyXCIgZm9ybWF0PVwicG5nLGpwZyxqcGVnXCIgKGltYWdlQ3JvcHBlZCk9XCJpbWFnZUNyb3BwZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIChpbWFnZUxvYWRlZCk9XCJpbWFnZUxvYWRlZCgkZXZlbnQpXCIgKGNyb3BwZXJSZWFkeSk9XCJjcm9wcGVyUmVhZHkoKVwiXG4gICAgICAgICAgICAgICAgICAgIChsb2FkSW1hZ2VGYWlsZWQpPVwibG9hZEltYWdlRmFpbGVkKClcIj5cbiAgICAgICAgICAgICAgICA8L2ltYWdlLWNyb3BwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6ICFoaWRlQ3JvcHBlcn1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJib3JkZXIgZC1ibG9jayBteC1hdXRvIHVwZGF0ZUltZ1ByZXZpZXdcIiBbc3JjXT1cImNyb3BwZWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3JvdW5kZWQtY2lyY2xlJzogcm91bmRDcm9wcGVyfVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxtYXQtZGl2aWRlciBjbGFzcz1cIm10LTJcIj48L21hdC1kaXZpZGVyPlxuICAgIDxtYXQtZGlhbG9nLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6IGhpZGVDcm9wcGVyfVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiaW1hZ2VTZWxlY3RlZCgpXCI+XG4gICAgICAgICAgICAgICAgQ2hvb3NlIEFub3RoZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtcy0yXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJoaWRlQ3JvcHBlciA9ICFoaWRlQ3JvcHBlclwiPlxuICAgICAgICAgICAgICAgIENyb3BcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6ICFoaWRlQ3JvcHBlcn1cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImltYWdlU2VsZWN0ZWQoKVwiPlxuICAgICAgICAgICAgICAgIENob29zZSBBbm90aGVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXMtMlwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlSW1hZ2UoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHByZXZpZXdCdG5MYWJlbCB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbWF0LWRpYWxvZy1hY3Rpb25zPlxuPC9uZy10ZW1wbGF0ZT4iXX0=