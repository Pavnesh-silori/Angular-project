import { NgModule } from '@angular/core';
import { CommonModule,} from '@angular/common';

import {FormsModule,ReactiveFormsModule,} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { CreateUpdateComponent } from './create-update.component';
import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import {CreateUpdateModule as VechileCreateModule}from '@library/netzero';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    CreateUpdateRoutingModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    VechileCreateModule
  ]
})
export class CreateUpdateModule { }
