import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReportingPreferenceNewRoutingModule } from './reporting-preference-routing.module';
import { ReportingPreferenceComponent } from './reporting-preference.component';
import { CustomFrameworkCreateUpdateComponent } from './custom-framework/create-update.component'; 
import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//tsc-library
import { EllipsisPipeModule, MessageAlertModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
  declarations: [
    ReportingPreferenceComponent,
    CustomFrameworkCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    ReportingPreferenceNewRoutingModule,
    MessageAlertModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    NgxMatSelectSearchModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    EllipsisPipeModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class ReportingPreferenceModule { }
