import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CalculationPreferenceComponent as CalculationPreferenceComponent } from './calculation-preference.component';
import { CalculationPreferenceRoutingModule } from './calculation-preference-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        CommonModule,
        RoundProgressModule,
        CalculationPreferenceRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
		MatTabsModule
    ],
    declarations: [CalculationPreferenceComponent]
})

export class CalculationPreferenceModule { }
