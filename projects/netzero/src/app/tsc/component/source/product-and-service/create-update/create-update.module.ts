import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDialogModule } from '@angular/material/dialog';
import { EmissionSourceModule } from '../emission-source/emission-source.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    CreateUpdateRoutingModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatOptionModule,
    NgxMatSelectSearchModule,
    MatDialogModule,
    MatRippleModule,
    MatCardModule,
    EmissionSourceModule
  ],
  exports: [
    CreateUpdateComponent
  ]
})
export class CreateUpdateModule { }
