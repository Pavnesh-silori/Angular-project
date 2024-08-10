import { Component, Inject, NgModule, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ToastrTitle, ToastrColor } from '@library/toastr-service';
import { BulkUploadEnum } from '../../../enum/bulk-upload.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@library/toastr-service";
import * as i3 from "@angular/material/progress-bar";
import * as i4 from "@angular/common";
export class BulkUploadDialogLib {
    constructor(dialogRef, data, toastrService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.toastrService = toastrService;
        this.error = false;
        this.duplicateData = null;
        this.mandatoryData = null;
        this.loaded = 0;
        this.fileUploaded = new EventEmitter();
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.templateFileSrc = this.data['source'];
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (!this.isFileAllowed(file.name)) {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
                return;
            }
            else if (file.size > BulkUploadEnum.MAX_FILE_SIZE) {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('loadstart', () => {
                this.loaded = 0;
                this.progress = true;
            });
            reader.addEventListener('progress', (event) => this.loaded = (event.loaded / event.total) * 100);
            reader.addEventListener('load', () => {
                this.bulkUpload = file;
                this.fileName = file.name;
            });
            reader.addEventListener('loadend', () => this.progress = false);
            reader.addEventListener('abort', () => {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID, ToastrColor.ERROR);
            });
            reader.addEventListener('error', () => {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.UPLOAD_FILE_ERROR, ToastrColor.ERROR);
            });
        }
    }
    resetFileInput() {
        this.fileName = null;
        this.bulkUpload = null;
        this.bulkUploadFile.nativeElement.value = null;
    }
    isFileAllowed(fileName) {
        let isFileAllowed = false;
        const allowedFiles = ['.xlsx', '.xls'];
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);
        if (undefined !== extension && null !== extension) {
            allowedFiles.forEach(extnsn => {
                if (extnsn === extension[0]) {
                    isFileAllowed = true;
                }
            });
        }
        return isFileAllowed;
    }
    bulkUploadBtn(controlName) {
        document.getElementById(controlName).click();
    }
    toFormData(bulkUpload) {
        const formData = new FormData();
        formData.append('file', this.bulkUpload);
        return formData;
    }
    bulkUploadFun() {
        if (this.bulkUpload == null) {
            this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.NO_FILE, ToastrColor.ERROR);
            return;
        }
        this.dialogRef.close(this.bulkUpload);
    }
}
BulkUploadDialogLib.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLib, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.ToastrService }], target: i0.ɵɵFactoryTarget.Component });
BulkUploadDialogLib.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BulkUploadDialogLib, selector: "app-bulk-upload-dialog", outputs: { fileUploaded: "fileUploaded" }, viewQueries: [{ propertyName: "bulkUploadFile", first: true, predicate: ["bulkUploadFile"], descendants: true }], ngImport: i0, template: "<h6 mat-dialog-title>\n    <strong class=\"dialogTitle\" [ngClass]=\"{'d-none': error}\">\n        Import\n    </strong>\n</h6>\n<hr />\n\n<div class=\"row\" [ngClass]=\"{'d-none': error}\">\n    <div class=\"centerAlign mt-2\">\n        <span class=\"material-symbols-outlined fs-2\">\n            download\n        </span>\n        <a [href]=\"templateFileSrc\" download class=\"ms-2\">Download template file</a>\n    </div><br />\n    <div class=\"text-center\">\n        <input #bulkUploadFile id=\"bulkUploadFile\" class=\"d-none\" type=\"file\" accept=\".xlsx, .xls\"\n            (change)=\"onFileChange($event)\" />\n\n        <button class=\"btn btn-primary mt-4\" type=\"button\" (click)=\"bulkUploadBtn('bulkUploadFile')\">\n            Upload file\n        </button>\n        <p class=\"mt-2\" *ngIf=\"!progress\">{{ fileName }}</p>\n    </div>\n\n    <div *ngIf=\"progress\" class=\"mt-1 mb-3\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 centerAlign\">\n                <mat-progress-bar class=\"rounded fileUploadBar\" mode=\"determinate\" [value]=\"loaded\"></mat-progress-bar>\n            </div>\n            <div class=\"col-sm-2 centerAlign\">\n                {{ loaded }} %\n            </div>\n        </div>\n    </div>\n\n    <div align=\"end\">\n        <button type=\"button\" class=\"button btn btn-secondary me-2\" mat-dialog-close>Cancel</button>\n        <button type=\"submit\" class=\"button btn btn-success ms-2\" (click)=\"bulkUploadFun()\">\n            Submit\n        </button>\n    </div>\n</div>\n", components: [{ type: i3.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "mode", "value", "bufferValue"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLib, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-bulk-upload-dialog',
                    templateUrl: './bulk-upload-dialog.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2.ToastrService }]; }, propDecorators: { fileUploaded: [{
                type: Output
            }], bulkUploadFile: [{
                type: ViewChild,
                args: ['bulkUploadFile']
            }] } });
export class BulkUploadDialogLibModule {
}
BulkUploadDialogLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulkUploadDialogLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, declarations: [BulkUploadDialogLib], imports: [CommonModule,
        MatDialogModule,
        MatProgressBarModule], exports: [BulkUploadDialogLib] });
BulkUploadDialogLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, imports: [[
            CommonModule,
            MatDialogModule,
            MatProgressBarModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BulkUploadDialogLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatProgressBarModule
                    ],
                    exports: [BulkUploadDialogLib],
                    declarations: [BulkUploadDialogLib]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay11cGxvYWQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvZGlhbG9nL2J1bGstdXBsb2FkL2J1bGstdXBsb2FkLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2RpYWxvZy9idWxrLXVwbG9hZC9idWxrLXVwbG9hZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsUUFBUSxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUVMLGVBQWUsR0FDaEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQWlCLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQVFoRSxNQUFNLE9BQU8sbUJBQW1CO0lBbUI5QixZQUNVLFNBQTRDLEVBQ25CLElBQUksRUFDN0IsYUFBNEI7UUFGNUIsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBQTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQWpCdEMsVUFBSyxHQUFRLEtBQUssQ0FBQztRQUduQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVyQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBS0QsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQVNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUVqQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUzRyxPQUFPO2FBQ1I7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxRyxPQUFPO2FBQ1I7WUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNqRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZHLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFnQjtRQUM1QixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFMUIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNqRCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzNCLGFBQWEsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhLENBQUMsV0FBVztRQUN2QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBVTtRQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBR0QsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7aUhBL0dVLG1CQUFtQiw4Q0FxQnBCLGVBQWU7cUdBckJkLG1CQUFtQiwyTkNsQmhDLHloREEwQ0E7NEZEeEJhLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxXQUFXLEVBQUUscUNBQXFDO29CQUNsRCxNQUFNLEVBQUUsRUFDUDtpQkFDRjs7MEJBc0JJLE1BQU07MkJBQUMsZUFBZTt3RUFMZixZQUFZO3NCQUFyQixNQUFNO2dCQUNzQixjQUFjO3NCQUExQyxTQUFTO3VCQUFDLGdCQUFnQjs7QUEyRzdCLE1BQU0sT0FBTyx5QkFBeUI7O3VIQUF6Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkE1SHpCLG1CQUFtQixhQXFINUIsWUFBWTtRQUNaLGVBQWU7UUFDZixvQkFBb0IsYUF2SFgsbUJBQW1CO3dIQTRIbkIseUJBQXlCLFlBUjNCO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixvQkFBb0I7U0FDckI7NEZBSVUseUJBQXlCO2tCQVRyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2Ysb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE5nTW9kdWxlLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nUmVmLFxuICBNQVRfRElBTE9HX0RBVEEsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7ICBcblxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSwgVG9hc3RyVGl0bGUsIFRvYXN0ckNvbG9yIH0gZnJvbSAnQGxpYnJhcnkvdG9hc3RyLXNlcnZpY2UnO1xuaW1wb3J0IHsgQnVsa1VwbG9hZEVudW0gfSBmcm9tICcuLi8uLi8uLi9lbnVtL2J1bGstdXBsb2FkLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnVsay11cGxvYWQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1bGstdXBsb2FkLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJ1bGtVcGxvYWREaWFsb2dMaWIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByb2dyZXNzOiBhbnk7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgZXJyb3I6IGFueSA9IGZhbHNlO1xuICByZXNwb25zZTogW107XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZHVwbGljYXRlRGF0YSA9IG51bGw7XG4gIG1hbmRhdG9yeURhdGEgPSBudWxsO1xuXG4gIGxvYWRlZCA9IDA7XG5cbiAgc291cmNlOiBzdHJpbmc7XG4gIHRlbXBsYXRlRmlsZVNyYzogc3RyaW5nO1xuICBidWxrVXBsb2FkOiBhbnk7XG4gIEBPdXRwdXQoKSBmaWxlVXBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxGaWxlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZT4oKTtcbiAgQFZpZXdDaGlsZCgnYnVsa1VwbG9hZEZpbGUnKSBidWxrVXBsb2FkRmlsZTogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEJ1bGtVcGxvYWREaWFsb2dMaWI+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGEsXG4gICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlXG5cbiAgKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGVGaWxlU3JjID0gdGhpcy5kYXRhWydzb3VyY2UnXTtcbiAgfVxuXG4gIG9uRmlsZUNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuXG4gICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgaWYgKCF0aGlzLmlzRmlsZUFsbG93ZWQoZmlsZS5uYW1lKSkge1xuICAgICAgICB0aGlzLnJlc2V0RmlsZUlucHV0KCk7XG4gICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuRVJST1IsIEJ1bGtVcGxvYWRFbnVtLklOVkFMSURfRklMRV9UWVBFX0VSUk9SLCBUb2FzdHJDb2xvci5FUlJPUik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChmaWxlLnNpemUgPiBCdWxrVXBsb2FkRW51bS5NQVhfRklMRV9TSVpFKSB7XG4gICAgICAgIHRoaXMucmVzZXRGaWxlSW5wdXQoKTtcbiAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5FUlJPUiwgQnVsa1VwbG9hZEVudW0uSU5WQUlEX0ZJTEVfU0laRV9FUlJPUiwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGV2ZW50KSA9PiB0aGlzLmxvYWRlZCA9IChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApO1xuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYnVsa1VwbG9hZCA9IGZpbGU7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKCkgPT4gdGhpcy5wcm9ncmVzcyA9IGZhbHNlKTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEZpbGVJbnB1dCgpO1xuICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KFRvYXN0clRpdGxlLkVSUk9SLCBCdWxrVXBsb2FkRW51bS5JTlZBTElELCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgICB9KTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEZpbGVJbnB1dCgpO1xuICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KFRvYXN0clRpdGxlLkVSUk9SLCBCdWxrVXBsb2FkRW51bS5VUExPQURfRklMRV9FUlJPUiwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWxlSW5wdXQoKSB7XG4gICAgdGhpcy5maWxlTmFtZSA9IG51bGw7XG4gICAgdGhpcy5idWxrVXBsb2FkID0gbnVsbDtcbiAgICB0aGlzLmJ1bGtVcGxvYWRGaWxlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgaXNGaWxlQWxsb3dlZChmaWxlTmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGlzRmlsZUFsbG93ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFsbG93ZWRGaWxlcyA9IFsnLnhsc3gnLCAnLnhscyddO1xuICAgIGNvbnN0IHJlZ2V4ID0gLyg/OlxcLihbXi5dKykpPyQvO1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHJlZ2V4LmV4ZWMoZmlsZU5hbWUpO1xuXG4gICAgaWYgKHVuZGVmaW5lZCAhPT0gZXh0ZW5zaW9uICYmIG51bGwgIT09IGV4dGVuc2lvbikge1xuICAgICAgYWxsb3dlZEZpbGVzLmZvckVhY2goZXh0bnNuID0+IHtcbiAgICAgICAgaWYgKGV4dG5zbiA9PT0gZXh0ZW5zaW9uWzBdKSB7XG4gICAgICAgICAgaXNGaWxlQWxsb3dlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaXNGaWxlQWxsb3dlZDtcbiAgfVxuXG4gIGJ1bGtVcGxvYWRCdG4oY29udHJvbE5hbWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250cm9sTmFtZSkuY2xpY2soKTtcbiAgfVxuXG4gIHRvRm9ybURhdGEoYnVsa1VwbG9hZCk6IEZvcm1EYXRhIHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLmJ1bGtVcGxvYWQpO1xuICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9XG5cblxuICBidWxrVXBsb2FkRnVuKCkge1xuICAgIGlmICh0aGlzLmJ1bGtVcGxvYWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdChUb2FzdHJUaXRsZS5FUlJPUiwgQnVsa1VwbG9hZEVudW0uTk9fRklMRSwgVG9hc3RyQ29sb3IuRVJST1IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLmJ1bGtVcGxvYWQpO1xuICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0J1bGtVcGxvYWREaWFsb2dMaWJdLFxuICBkZWNsYXJhdGlvbnM6IFtCdWxrVXBsb2FkRGlhbG9nTGliXVxufSlcbmV4cG9ydCBjbGFzcyBCdWxrVXBsb2FkRGlhbG9nTGliTW9kdWxlIHsgfVxuXG4iLCI8aDYgbWF0LWRpYWxvZy10aXRsZT5cbiAgICA8c3Ryb25nIGNsYXNzPVwiZGlhbG9nVGl0bGVcIiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6IGVycm9yfVwiPlxuICAgICAgICBJbXBvcnRcbiAgICA8L3N0cm9uZz5cbjwvaDY+XG48aHIgLz5cblxuPGRpdiBjbGFzcz1cInJvd1wiIFtuZ0NsYXNzXT1cInsnZC1ub25lJzogZXJyb3J9XCI+XG4gICAgPGRpdiBjbGFzcz1cImNlbnRlckFsaWduIG10LTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGZzLTJcIj5cbiAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgW2hyZWZdPVwidGVtcGxhdGVGaWxlU3JjXCIgZG93bmxvYWQgY2xhc3M9XCJtcy0yXCI+RG93bmxvYWQgdGVtcGxhdGUgZmlsZTwvYT5cbiAgICA8L2Rpdj48YnIgLz5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0ICNidWxrVXBsb2FkRmlsZSBpZD1cImJ1bGtVcGxvYWRGaWxlXCIgY2xhc3M9XCJkLW5vbmVcIiB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi54bHN4LCAueGxzXCJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwib25GaWxlQ2hhbmdlKCRldmVudClcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXQtNFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYnVsa1VwbG9hZEJ0bignYnVsa1VwbG9hZEZpbGUnKVwiPlxuICAgICAgICAgICAgVXBsb2FkIGZpbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzPVwibXQtMlwiICpuZ0lmPVwiIXByb2dyZXNzXCI+e3sgZmlsZU5hbWUgfX08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwicHJvZ3Jlc3NcIiBjbGFzcz1cIm10LTEgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwIGNlbnRlckFsaWduXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1wcm9ncmVzcy1iYXIgY2xhc3M9XCJyb3VuZGVkIGZpbGVVcGxvYWRCYXJcIiBtb2RlPVwiZGV0ZXJtaW5hdGVcIiBbdmFsdWVdPVwibG9hZGVkXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTIgY2VudGVyQWxpZ25cIj5cbiAgICAgICAgICAgICAgICB7eyBsb2FkZWQgfX0gJVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBhbGlnbj1cImVuZFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidG4gYnRuLXNlY29uZGFyeSBtZS0yXCIgbWF0LWRpYWxvZy1jbG9zZT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnRuIGJ0bi1zdWNjZXNzIG1zLTJcIiAoY2xpY2spPVwiYnVsa1VwbG9hZEZ1bigpXCI+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==