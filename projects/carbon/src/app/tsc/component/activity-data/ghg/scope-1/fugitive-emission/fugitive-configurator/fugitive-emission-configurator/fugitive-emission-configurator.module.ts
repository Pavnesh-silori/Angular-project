import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FugitiveEmissionConfiguratorRoutingModule } from './fugitive-emission-configurator-routing.module';
import { FugitiveEmissionConfiguratorComponent } from './fugitive-emission-configurator.component';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		FugitiveEmissionConfiguratorComponent
	],
	imports: [
		CommonModule,
		FugitiveEmissionConfiguratorRoutingModule,
		MatCardModule,
		MatCheckboxModule,
		MatRadioModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class FugitiveEmissionConfiguratorModule { }
