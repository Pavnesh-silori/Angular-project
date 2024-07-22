import { NgModule } from '@angular/core';
import { RecordDetailsRoutingModule } from './record-details-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { DetailsComponent } from './shared/details/details.component';
import { FactorDetailsComponent } from './shared/factor-details/factor-details.component';
import { RecordDetailsComponent } from './record-details.component';
import { EmissionDetailsModule } from '../view/_shared/emission-details/emission-details.module'
import { CalculationDetailsModule } from '../view/_shared/calculation-details/calculation-details.module';
import { CapacityChangesComponent } from './shared/capacity-changes/capacity-changes.component';
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
	declarations: [
		HeaderComponent,
		DetailsComponent,
		FactorDetailsComponent,
		RecordDetailsComponent,
		CapacityChangesComponent
	],
	imports: [
		NgbModule,
		CommonModule,
		RecordDetailsRoutingModule,
		EmissionDetailsModule,
		CalculationDetailsModule,
		MatTableModule,
		RouterModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
	],
    exports: [
        DetailsComponent,
    ]
})
export class RecordDetailsModule { }
