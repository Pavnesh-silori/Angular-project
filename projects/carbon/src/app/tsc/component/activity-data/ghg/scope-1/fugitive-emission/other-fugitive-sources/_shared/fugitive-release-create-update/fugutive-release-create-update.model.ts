import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";

import { FugitiveReleasesCreateUpdateDailog } from './fugitive-releases-create-update.component';

@NgModule({
  declarations: [
    FugitiveReleasesCreateUpdateDailog
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    NgxMatSelectSearchModule,
    NgxDaterangepickerMd.forRoot()
  ],
  exports: [
    FugitiveReleasesCreateUpdateDailog
]
})
export class FugitiveReleasesCreateUpdateModule { }
