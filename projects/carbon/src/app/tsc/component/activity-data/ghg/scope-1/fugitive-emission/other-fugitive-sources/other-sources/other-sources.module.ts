import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherSourcesRoutingModule } from './other-sources-routing.module';
import { OtherSourcesComponent } from './other-sources.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";

// import { FactorDatabaseModule } from '@CarbonNetZero/component/factor-database/factor-database.module';
import { FugitiveReleaseModule } from './fugitive-release/fugitive-release.module';


@NgModule({
  declarations: [
    OtherSourcesComponent,
  ],
  imports: [
    CommonModule,
    OtherSourcesRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    // FactorDatabaseModule,
    FugitiveReleaseModule,
    NgxMatSelectSearchModule,
    NgxDaterangepickerMd.forRoot(),
  ],
  exports: []
})
export class OtherSourcesModule { }
