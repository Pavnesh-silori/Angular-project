import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { CreateModule } from '../create/create.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

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
    SearchBarOneModule,
    DateFilterModule,
    FunnelFilterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRippleModule,
    MatIconModule,
    MatSlideToggleModule,
    FontAwesomeModule,
    CreateModule,
    NgbDropdownModule,
    DateFilterModule
  ]
})
export class PageModule { }
