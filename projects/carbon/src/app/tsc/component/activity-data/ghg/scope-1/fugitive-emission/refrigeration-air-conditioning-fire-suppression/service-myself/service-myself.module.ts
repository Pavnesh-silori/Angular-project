import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceMyselfRoutingModule } from './service-myself-routing.module';
import { ServiceMyselfComponent } from './service-myself.component';

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

import { MyselfPurchaseSaleRetrofitDialog } from '../_shared/myself-purchase-sale-retrofit-dialog/myself-purchase-sale-retrofit-dialog.component';
import { InventoryModule } from './inventory/inventory.module';
import { PurchaseAcquisitionModule } from './purchase-acquisition/purchase-acquisition.module';
import { RetrofittingModule } from './retrofitting/retrofitting.module';
import { SalesDisbursementsModule } from './sales-disbursements/sales-disbursements.module';
import { UploadDocumentDialog } from '@carbon/component/activity-data/_shared/upload-document-dialog/upload-document-dialog.component'; 
import { NoteDialog } from '../_shared/note-dialog/note-dialog.component';
import { ConfirmationDailogModule } from '../../_shared/confirmation-dailog/confirmation-dailog.component';

// tsc-library
import { DateMonthYearFormatModule } from '@library/date'; 
// /tsc-library

@NgModule({
	declarations: [
		ServiceMyselfComponent,
		MyselfPurchaseSaleRetrofitDialog,
		UploadDocumentDialog,
		NoteDialog
	],
	imports: [
		CommonModule,
		ServiceMyselfRoutingModule,
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
		InventoryModule,
		PurchaseAcquisitionModule,
		SalesDisbursementsModule,
		RetrofittingModule,
		DateMonthYearFormatModule
	],
	exports: [
		ServiceMyselfComponent,
		MyselfPurchaseSaleRetrofitDialog
	]
})
export class ServiceMyselfModule { }
