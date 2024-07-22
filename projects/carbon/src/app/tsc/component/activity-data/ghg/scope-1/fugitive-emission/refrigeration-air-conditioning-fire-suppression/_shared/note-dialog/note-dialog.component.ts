import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-note-dialog',
	templateUrl: './note-dialog.component.html',
	styles: [
	]
})
export class NoteDialog implements OnInit {

	note: any;
	userName: any;

	constructor(
		@Inject(MAT_DIALOG_DATA) private data,
		public dialogRef: MatDialogRef<NoteDialog>,
	) { }

	ngOnInit(): void {
		this.note = this.data['note'];
		this.userName = this.data['userName']
	}

}
