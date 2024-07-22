import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { SubsidaryFormModule } from '../subsidary-form/subsidiary-form.module';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageComponent } from './page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

// tsc-library
import { FunnelFilterModule, MessageAlertModule, SearchBarOneModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SearchBarOneModule,
    MessageAlertModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SubsidaryFormModule,
    NgbModule,
    MatChipsModule,
    FunnelFilterModule,
    MatRippleModule,
    MatTooltipModule
  ]
})
export class PageModule { }
