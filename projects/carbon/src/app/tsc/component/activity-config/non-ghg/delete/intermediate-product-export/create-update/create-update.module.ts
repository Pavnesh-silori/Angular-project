import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';


@NgModule({
  declarations: [
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    CreateUpdateRoutingModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatTooltipModule,
    NgxMatSelectSearchModule,


    FormsModule,
    ReactiveFormsModule,
  ]
  
})
export class CreateUpdateModule { }
