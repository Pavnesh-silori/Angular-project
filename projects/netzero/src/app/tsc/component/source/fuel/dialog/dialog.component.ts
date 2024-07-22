import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateUpdateModule } from '../create-update/create-update.module';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: []
})
export class DialogComponent implements OnInit {

  pageTitle: string = 'Create New';
  action: string = 'CREATE';
  fuelID:any;
  source: string;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
  ) {
    this.action = this.data['action'];
    this.fuelID = this.data['id'];
    this.source = this.data['source'];
   }

  ngOnInit(): void {
    if(this.action == 'CREATE'){
      this.pageTitle= 'Create';
    }
    if(this.action == 'UPDATE'){
      this.pageTitle= 'Update';
    }
  }

  formStatus(event) {
    this.dialogRef.close(event);
  }

}

@NgModule({
  declarations: [DialogComponent],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    CreateUpdateModule
  ],
})
export class DialogModule { }
