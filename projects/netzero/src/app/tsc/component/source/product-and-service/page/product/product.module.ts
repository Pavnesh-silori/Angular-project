import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUpdateModule } from '../../create-update/create-update.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopoverModule } from "ngx-smart-popover";

//tsc-library
import { SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule, MessageAlertModule } from '@library/tsc-common';
import { TabModule } from './tab/tab.module';
import { TableInfoDialogComponent } from '@netzero/component/source/shared/table-info-dialog/table-info-dialog.component';
import { ImportRecordsModule } from '@netzero/component/source/shared/bulk-import/import-records/import-records.module';
// /tsc-library/


@NgModule({
  declarations: [
    ProductComponent,
    TableInfoDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ProductRoutingModule,
    CreateUpdateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    NgbDropdownModule,
    MatOptionModule,
    MatMomentDateModule,
    ClipboardModule,
    SearchBarOneModule,
    FunnelFilterModule,
    EllipsisPipeModule,
    TabModule,
    MatCheckboxModule,
    PopoverModule,
    MessageAlertModule,
    ImportRecordsModule
  ]
})
export class ProductModule { }
