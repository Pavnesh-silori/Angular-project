import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminateSessionComponent } from './terminate-session-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [TerminateSessionComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  exports: [
    TerminateSessionComponent
  ]
})
export class TerminateSessionModule { }