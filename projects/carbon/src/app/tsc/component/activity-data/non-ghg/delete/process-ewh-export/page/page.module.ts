import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

//tsc-lib
import { DateFilterModule, SearchBarOneModule } from '@library/tsc-common';
// /tsc-lib


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
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
    ReactiveFormsModule,
    SearchBarOneModule
  ]
})
export class PageModule { }
