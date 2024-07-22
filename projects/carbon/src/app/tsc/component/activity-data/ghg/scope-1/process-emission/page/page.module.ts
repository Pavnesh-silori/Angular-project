import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessEmissionActivityDataPageRoutingModule } from './page-routing.module';
import { ProcessEmissionActivityDataPageComponent } from './page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

// tsc-library
import { EllipsisPipeModule, SearchBarOneModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// tsc-library

@NgModule({
  declarations: [
    ProcessEmissionActivityDataPageComponent
  ],
  imports: [
    CommonModule,
    ProcessEmissionActivityDataPageRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    DateFilterModule,
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    MatRippleModule,
    MatTooltipModule,
    ReactiveFormsModule,
    SearchBarOneModule,
    EllipsisPipeModule
  ]
})
export class ProcessEmissionActivityDataPageModule { }
