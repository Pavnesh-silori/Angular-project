import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { SchedulerWorkflowModule } from '@report-framework/component/assignment/scheduler-workflow/scheduler-workflow.module';

// tsc-library
import {
  SearchBarOneModule,
  FunnelFilterModule
} from '@library/tsc-common';
// / tsc-library


@NgModule({
  declarations: [
    PageComponent,

  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SearchBarOneModule,
    FunnelFilterModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatOptionModule,
    FontAwesomeModule,
    NgbDropdownModule,
    SchedulerWorkflowModule
  ],
  exports: [
    PageComponent
  ],
})
export class PageModule { }
