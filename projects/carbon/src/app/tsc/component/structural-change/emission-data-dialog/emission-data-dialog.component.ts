import { Component, Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { EmissionDataComponent } from '@carbon/component/subsidiary-emission-data/emission-data/emission-data.component';

import { EmissionDataModule } from '@carbon/component/subsidiary-emission-data/emission-data/emission-data.module';

// tsc-library
import { ButtonLabelEnum } from '@library/tsc-common';
// /tsc-library

@Component({
  selector: 'app-emission-data-dialog',
  templateUrl: './emission-data-dialog.component.html',
  styles: [
  ]
})
export class EmissionDataDialog implements OnInit {

  ButtonLabelEnum = ButtonLabelEnum;

  year: any;
  emissionData: any = null;
  dialogTitle: string = null;
  consolidationApproachKeyIDList: any[] = [];
  action: string;


  @ViewChild('emissionDataComp') emissionDataComp: EmissionDataComponent;

  constructor(
    private dialogRef: MatDialogRef<EmissionDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.dialogRef.disableClose = true;
    this.year = data['year'];
    this.emissionData = data['yearlyEmissionData']?.['emissionRecords'];
    this.dialogTitle = data['dialogTitle'];
    this.consolidationApproachKeyIDList = data['consolidationApproachKeyIDList'];
    this.action = data['action'];
  }

  ngOnInit(): void {
  }

  saveEmission() {
    if (this.emissionDataComp.saveEmission()) {
      this.emissionDataComp.activityEmissionDataFG.addControl('year', this.emissionDataComp.activityEmissionDataFB.control('', Validators.required));
      this.emissionDataComp.activityEmissionDataFG.controls['year'].patchValue(this.year);
      this.dialogRef.close(this.emissionDataComp.activityEmissionDataFG.value);
    }
  }

}

@NgModule({
  declarations: [EmissionDataDialog],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    EmissionDataModule
  ],
})
export class EmissionDataDialogModule { }
