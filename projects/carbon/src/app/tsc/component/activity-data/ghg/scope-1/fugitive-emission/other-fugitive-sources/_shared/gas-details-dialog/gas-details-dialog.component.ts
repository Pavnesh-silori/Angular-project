import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gas-details-dialog',
  templateUrl: './gas-details-dialog.component.html',
  styles: [
  ]
})
export class GasDetailsDialog implements OnInit {

    gases: any = [];

  constructor(
    private dialogRef: MatDialogRef<GasDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.gases = this.data['gases'];

    this.dialogRef.disableClose = true; 
   }

  ngOnInit(): void {
  }

}
