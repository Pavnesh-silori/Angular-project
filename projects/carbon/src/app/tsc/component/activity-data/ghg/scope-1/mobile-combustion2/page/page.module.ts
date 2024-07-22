import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// tsc-library
import { DateFilterModule } from '@library/date';
import {SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
// / tsc-library

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,

    RoundProgressModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule,
    MatRippleModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
   
    SearchBarOneModule,
    FunnelFilterModule,
    DateFilterModule,
  ]
})

export class PageModule { }
