import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigCreateRoutingModule } from './config-create-routing.module';
import { ConfigCreateComponent } from './config-create.component';


import {FormsModule,ReactiveFormsModule,} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import {CreateUpdateModule as VechileCreateModule}from '@library/netzero';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ConfigCreateComponent
  ],
  imports: [
    CommonModule,
    ConfigCreateRoutingModule,

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
  ],
  exports:[ConfigCreateComponent]
})
export class ConfigCreateModule { }
