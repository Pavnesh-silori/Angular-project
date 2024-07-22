import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceByContractorRoutingModule } from './service-by-contractor-routing.module';
import { ServiceByContractorComponent } from './service-by-contractor.component';

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
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { PurchaseAcquisitionModule } from './purchase-acquisition/purchase-acquisition.module';
import { EquipmentServicingModule } from './equipment-servicing/equipment-servicing.module';
import { SalesDisbursementsModule } from './sales-disbursements/sales-disbursements.module';
import { RetrofittingModule } from './retrofitting/retrofitting.module';
import { ConfirmationDailogModule } from '../../_shared/confirmation-dailog/confirmation-dailog.component';

import { ContractorPurchaseSalesDialog } from '../_shared/contractor-purchase-sales-dialog/contractor-purchase-sales-dialog.component';

// tsc-library
import { DateMonthYearFormatModule } from '@library/date'; 
// /tsc-library

@NgModule({
  declarations: [
    ServiceByContractorComponent,
    ContractorPurchaseSalesDialog,
  ],
  imports: [
    CommonModule,
    ServiceByContractorRoutingModule,
    ConfirmationDailogModule,
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
    NgxMatSelectSearchModule,
    MatTooltipModule,
    MatDialogModule,
    PerfectScrollbarModule,
    PurchaseAcquisitionModule,
    SalesDisbursementsModule,
    EquipmentServicingModule,
    RetrofittingModule,
    DateMonthYearFormatModule
  ],
  exports: [
    ServiceByContractorComponent,
    ContractorPurchaseSalesDialog,
  ]
})
export class ServiceByContractorModule { }
