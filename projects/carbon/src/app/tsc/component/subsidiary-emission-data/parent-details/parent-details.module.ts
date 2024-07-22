import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentDetailsRoutingModule } from './parent-details-routing.module';
import { ParentDetailsComponent } from './parent-details.component';
import { EmissionDataModule } from '../emission-data/emission-data.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ParentDetailsComponent
  ],
  imports: [
    CommonModule,
    ParentDetailsRoutingModule,
    EmissionDataModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
  ],
  exports: [
    ParentDetailsComponent
  ]
})
export class ParentDetailsModule { }
