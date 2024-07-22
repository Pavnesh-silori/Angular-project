import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ActivityMappingRoutingModule } from './activity-mapping-routing.module';
import { ActivityMappingComponent } from './activity-mapping.component';
// import { searchBarModule } from '@EnterpriseNetZero/component/_shared/search-bar/search-bar.component';

//tsc-lib
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
//tsc-lib /


@NgModule({
  declarations: [ActivityMappingComponent],
  imports: [
    CommonModule,
    ActivityMappingRoutingModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatRippleModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    SearchBarOneModule,
    MatDialogModule,
    FunnelFilterModule
  ],
  exports: [ActivityMappingComponent]
})
export class ActivityMappingModule { }
