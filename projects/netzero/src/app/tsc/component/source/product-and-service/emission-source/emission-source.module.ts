import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MessageAlertModule } from '@library/tsc-common';

import { EmissionFactorDatabaseRoutingModule } from './emission-source-routing.module';
import { EmissionSourceComponent } from './emission-source.component';
import { UKDefraMetadataComponent } from './emission-source-form/uk-defra-metadata/uk-defra-metadata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { USEEIOMetadataComponent } from './emission-source-form/us-eeio-metadata/us-eeio-metadata.component';
import { EmissionSourceFormComponent } from './emission-source-form/emission-source-form.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
	declarations: [
		EmissionSourceComponent,
		UKDefraMetadataComponent,
		USEEIOMetadataComponent,
		EmissionSourceFormComponent
	],
	imports: [
		CommonModule,
		EmissionFactorDatabaseRoutingModule,
		MatCardModule,
		MatTooltipModule,
		MatDialogModule,
        MatRippleModule,
		MatOptionModule,
		MatSelectModule,
		MessageAlertModule,
		FormsModule,
		ReactiveFormsModule,
		NgxMatSelectSearchModule
	],
	exports: [
		EmissionSourceFormComponent,
		UKDefraMetadataComponent,
		USEEIOMetadataComponent
	]
})
export class EmissionSourceModule { }
