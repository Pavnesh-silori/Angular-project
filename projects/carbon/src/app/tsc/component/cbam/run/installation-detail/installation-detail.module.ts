import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { InstallationDetailRoutingModule } from './installation-detail-routing.module';
import { InstallationDetailComponent } from './installation-detail.component';


@NgModule({
  declarations: [
    InstallationDetailComponent
  ],
  imports: [
    CommonModule,
    InstallationDetailRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    InstallationDetailComponent
  ]
})
export class InstallationDetailModule { }
