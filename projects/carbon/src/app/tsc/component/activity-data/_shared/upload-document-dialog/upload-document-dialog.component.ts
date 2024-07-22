import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CarbonDocumentController } from '@carbon/controller/document.controller';

// tsc-library
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';
import { BulkUploadEnum, ButtonLabelEnum, DialogEnum } from '@library/tsc-common';
// / tsc-library

@Component({
	selector: 'app-upload-document-dialog',
	templateUrl: './upload-document-dialog.component.html',
	styleUrls: ['./upload-document-dialog.scss']
})
export class UploadDocumentDialog implements OnInit {
	ButtonLabelEnum = ButtonLabelEnum;
	currentOrgID: any;
	typeID: any;
	action: any;
	type: string;

	uploadedFile: File = null;
	uploadedFileName: string;
	noFileSelected: boolean = true;

	@ViewChild('docUpload') docUpload: ElementRef;

	constructor(
		private carbonDocumentcontroller: CarbonDocumentController,
		public dialogRef: MatDialogRef<UploadDocumentDialog>,
		private toastrService: ToastrService,

		@Inject(MAT_DIALOG_DATA) private data,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.data['currentOrgID'];
		this.typeID = this.data['typeID'];
		this.action = this.data['action'];
		this.type = this.data['type'];
	}

	documentUploadBtn() {
		this.docUpload.nativeElement.click();
	}

	fileUpload(event) {
		let file = event.target.files[0];
		if (file) {
			if (file.type !== 'application/pdf') {
				this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
				return;
			}

			if (file.size > BulkUploadEnum.MAX_FILE_SIZE) {
				this.toastrService.openToast(ToastrTitle.ERROR, BulkUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
				return;
			}

			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (e: any) => { };

			this.uploadedFile = file;
			this.noFileSelected = false;
			this.uploadedFileName = file['name'];
		}
	}

	removeFile() {
		this.uploadedFile = null;
		this.uploadedFileName = '';
		this.noFileSelected = true;
		this.docUpload.nativeElement.value = null;
	}

	toFormData(): FormData {
		const formData = new FormData();
		formData.append('filePayload', this.uploadedFile);

		return formData;
	}

	documentUpload() {
		if (this.uploadedFile == null) {
			this.toastrService.openToast(ToastrTitle.ERROR, 'Please upload a file!', ToastrColor.ERROR);
			return;
		}
		this.carbonDocumentcontroller.postDoc(this.typeID, this.type, this.toFormData())
			.subscribe((response) => {
				this.dialogRef.close(DialogEnum.SUCCESS_DR);
			}, error => {
				console.log("error in documentUpload -", error);
			});
	}

}
