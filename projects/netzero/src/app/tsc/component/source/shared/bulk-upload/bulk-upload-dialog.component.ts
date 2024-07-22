import { Component, ElementRef, Inject, NgModule, OnInit, ViewChild } from '@angular/core';

import {
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SourceTypeKeyIDEnum } from '@netzero/enum/source.enum';
import { AssetController } from '@netzero/controller/asset.controller';
import { SupplierController } from '@netzero/controller/supplier.controller';
import { EmployeeController } from '@netzero/controller/employee.controller';

// tsc-library
import { BulkUploadEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'app-bulk-upload-dialog',
    templateUrl: './bulk-upload-dialog.component.html',
    styles: [
    ]
})
export class BulkUploadDialog implements OnInit {

    currentOrgID: any;

    bulkUpload: any;
    progress: any;
    fileName: string;

    error: any = false;
    response: [];
    message: string;
    duplicateData = null;
    mandatoryData = null;

    loaded = 0;

    source: string;
    templateFileSrc: string;

    @ViewChild('bulkUploadFile') bulkUploadFile: ElementRef;

    constructor(
        private dialogRef: MatDialogRef<BulkUploadDialog>,
        @Inject(MAT_DIALOG_DATA) private data,
        private assetController: AssetController,
        private supplierController: SupplierController,
        private employeeController: EmployeeController,
        private storageService: StorageService,
        private toastrService: ToastrService
    ) {
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.source = this.data['source'];

        if (this.source == SourceTypeKeyIDEnum.SUPPLIER) {
            this.templateFileSrc = "assets/files/supplier-upload.xlsx";
        } else if (this.source == SourceTypeKeyIDEnum.ASSET) {
            this.templateFileSrc = "assets/files/asset-upload.xlsx";
        } else if (this.source == SourceTypeKeyIDEnum.VEHICLE) {
            this.templateFileSrc = "assets/files/vehicle-upload.xlsx";
        } else if (this.source == SourceTypeKeyIDEnum.EMPLOYEE) {
            this.templateFileSrc = "assets/files/employee-upload.xlsx";
        } else {
            this.dialogRef.close();
        }
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {

            const file = event.target.files[0];
            if (!this.isFileAllowed(file.name)) {
                this.resetFileInput();
                this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
                return;
            } else if (file.size > BulkUploadEnum.MAX_FILE_SIZE) {
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

    isFileAllowed(fileName: string) {
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

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('file', this.bulkUpload);

        return formData;
    }

    bulkUploadFun() {
        if (this.bulkUpload == null) {
            console.log('invalid form -', this.bulkUpload);
            this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.NO_FILE, ToastrColor.ERROR);
            return;
        }

        if (this.source == SourceTypeKeyIDEnum.SUPPLIER) {
            this.uploadSupplier();
        } else if (this.source == SourceTypeKeyIDEnum.ASSET) {
            this.uploadAsset();
        } else if (this.source == SourceTypeKeyIDEnum.EMPLOYEE) {
            this.bulkUploadEmployee();
        }
    }

    uploadSupplier() {
        this.supplierController.bulkUpload(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
                console.log('check the bulkupload response', bulkUploadRes);
                if (bulkUploadRes['title'] == 'Success') {
                    this.dialogRef.close('blukUploadSuccessfully');
                } else if (bulkUploadRes['title'] == 'Error') {
                    if (bulkUploadRes['result'] == "error") {
                        this.error = true;
                        this.message = bulkUploadRes['message'];
                        this.response = bulkUploadRes['response'];
                        this.getErrorData();
                    }
                }
            }, error => {
                console.log("error in Bulk Upload -", error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in Bulk Upload', ToastrColor.ERROR);
            });
    }

    uploadAsset() {
        this.assetController.bulkUpload(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
                if (bulkUploadRes['title'] == 'Success') {
                    this.dialogRef.close('blukUploadSuccessfully');
                } else if (bulkUploadRes['title'] == 'Error') {
                    if (bulkUploadRes['response'] == null) {
                    } else {
                        this.error = true;
                        this.message = bulkUploadRes['message'];
                        this.response = bulkUploadRes['response'];
                        this.getErrorData();
                    }
                }
            }, error => {
                console.log("error in Bulk Upload -", error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in Bulk Upload', ToastrColor.ERROR);
            });
    }

    bulkUploadEmployee() {
        this.employeeController.bulkUploadEmployee(this.currentOrgID, this.toFormData())
            .subscribe((bulkUploadRes) => {
                if (bulkUploadRes['title'] == 'Success') {
                    this.dialogRef.close('blukUploadSuccessfully');

                } else if (bulkUploadRes['title'] == 'Error') {
                    if (bulkUploadRes['response'] == null) {
                    } else {
                        this.error = true;
                        this.message = bulkUploadRes['message'];
                        this.response = bulkUploadRes['response'];
                        this.getErrorData();
                    }
                }
            });
    }

    getErrorData() {
        if (this.response['duplicateDataInRows'].length != 0) {
            let dupDataInRows = this.response['duplicateDataInRows'];

            this.duplicateData = [dupDataInRows.slice(0, -1).join(', '), dupDataInRows.slice(-1)[0]].join(dupDataInRows.length < 2 ? '' : ' and ');
        }
        if (this.response['mandatoryDataMissingInRows'].length != 0) {
            let manDataMissingInRows = this.response['mandatoryDataMissingInRows'];

            this.mandatoryData = [manDataMissingInRows.slice(0, -1).join(', '), manDataMissingInRows.slice(-1)[0]].join(manDataMissingInRows.length < 2 ? '' : ' and ');
        }
    }

    tryAgain() {
        this.error = !this.error;
        this.resetFileInput();
    }
}

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatProgressBarModule
    ],
    exports: [BulkUploadDialog],
    declarations: [BulkUploadDialog]
})

export class BulkUploadDialogModule { }
