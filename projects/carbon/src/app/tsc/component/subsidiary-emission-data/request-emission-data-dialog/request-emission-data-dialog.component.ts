import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-emission-data-dialog',
  templateUrl: './request-emission-data-dialog.component.html',
  styles: [
  ]
})
export class RequestEmissionDataDialogComponent implements OnInit {

  requestID: any;
  source: string;

  constructor(
    private dialogRef: MatDialogRef<RequestEmissionDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
  ) {
    dialogRef.disableClose = true;
        this.requestID = this.data['requestID'];
        this.source = this.data['source'];
  }

  ngOnInit(): void {
  }
  isEmissionCreated(event){
    this.dialogRef.close(event);
  }

}
