import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCreateUpdateRoutingModule } from './data-create-update-routing.module';
import { DataCreateUpdateComponent } from './data-create-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DataCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    DataCreateUpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  exports: [
    DataCreateUpdateComponent
  ]
})
export class DataCreateUpdateModule { }
