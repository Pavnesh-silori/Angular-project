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

import { WasteGasExportPageRoutingModule } from './page-routing.module';
import { WasteGasExportPageComponent } from './page.component';

import { ActivityConfigSelectionModule } from '@carbon/component/activity-config/activity-config-selection-dialog/activity-config-selection.module';

//tsc-lib
import { EllipsisPipeModule, SearchBarOneModule } from '@library/tsc-common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateFilterModule } from '@library/date';
// /tsc-lib

@NgModule({
  declarations: [
    WasteGasExportPageComponent
  ],
  imports: [
    CommonModule,
    WasteGasExportPageRoutingModule,
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
    EllipsisPipeModule,

    ActivityConfigSelectionModule
  ]
})
export class WasteGasExportPageModule { }
