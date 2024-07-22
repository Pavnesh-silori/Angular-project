import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

// tsc-library
import { ButtonLabelEnum, DialogResponseEnum } from '@library/tsc-common';
// / tsc-library

@Component({
	selector: 'app-confirmation-dailog',
	templateUrl: './confirmation-dailog.component.html',
	styles: [
	]
})
export class ConfirmationDailog implements OnInit {
    DialogResponseEnum = DialogResponseEnum;
    ButtonLabelEnum = ButtonLabelEnum;

	message: any;

	constructor(
		@Inject(MAT_DIALOG_DATA) private data,
		public dialogRef: MatDialogRef<ConfirmationDailog>,
	) { }

	ngOnInit(): void {

		this.message = this.data['message'];
	}

	confirm(confimation) {
		this.dialogRef.close(confimation);
	}

}

@NgModule({
	declarations: [
        ConfirmationDailog
	],
	imports: [
		MatDialogModule
	],
	exports: []
})

export class ConfirmationDailogModule{}
