import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// tsc-library
import { SearchBarOneModule } from '@library/tsc-common'; 
import { FunnelFilterModule } from '@library/tsc-common'; 
import { DateFilterModule } from '@library/date';
// /tsc-library
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule,
    SearchBarOneModule,
    FunnelFilterModule,
    MatDatepickerModule,
    MatIconModule,
    MatMomentDateModule,
    MatRippleModule,
    MatChipsModule,
    NgxDaterangepickerMd.forRoot(),
    MatSlideToggleModule,
    DateFilterModule
  ]
})
export class ListModule { }
