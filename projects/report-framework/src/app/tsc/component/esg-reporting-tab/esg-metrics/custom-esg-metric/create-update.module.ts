import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomEsgMetricCreateUpdateRoutingModule } from './create-update-routing.module';
import { CustomEsgMetricCreateUpdateComponent } from './create-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    CustomEsgMetricCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    CustomEsgMetricCreateUpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    NgxMatSelectSearchModule,
    MatRippleModule,
    MatTooltipModule,
  ],exports:[
  ]
})
export class CustomEsgMetricCreateUpdateModule { }
