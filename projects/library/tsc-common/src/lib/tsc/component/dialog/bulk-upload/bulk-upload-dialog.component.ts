import { Component, ElementRef, Inject, NgModule, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';  

import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { BulkUploadEnum } from '../../../enum/bulk-upload.enum';

@Component({
  selector: 'app-bulk-upload-dialog',
  templateUrl: './bulk-upload-dialog.component.html',
  styles: [
  ]
})
export class BulkUploadDialogLib implements OnInit {

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
  bulkUpload: any;
  @Output() fileUploaded: EventEmitter<File> = new EventEmitter<File>();
  @ViewChild('bulkUploadFile') bulkUploadFile: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<BulkUploadDialogLib>,
    @Inject(MAT_DIALOG_DATA) private data,
    private toastrService: ToastrService

  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.templateFileSrc = this.data['source'];
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

  toFormData(bulkUpload): FormData {
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

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  exports: [BulkUploadDialogLib],
  declarations: [BulkUploadDialogLib]
})
export class BulkUploadDialogLibModule { }

