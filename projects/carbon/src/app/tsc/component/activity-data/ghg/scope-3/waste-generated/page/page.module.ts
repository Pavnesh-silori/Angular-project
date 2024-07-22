import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// tsc-library
import { FunnelFilterModule } from '@library/tsc-common';
import { SearchBarOneModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// /tsc-library/
@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatRippleModule,
    MatIconModule,
    MatSlideToggleModule,
    
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxDaterangepickerMd.forRoot(),
    // tsc-library
    SearchBarOneModule,
    FunnelFilterModule,
    DateFilterModule,
    // /tsc-library/

  ]
})
export class PageModule { }
