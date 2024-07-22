import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionDataRoutingModule } from './emission-data-routing.module';
import { EmissionDataComponent } from './emission-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    EmissionDataComponent
  ],
  imports: [
    CommonModule,
    EmissionDataRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
  ],exports: [
    EmissionDataComponent,
  ]
})
export class EmissionDataModule { }
