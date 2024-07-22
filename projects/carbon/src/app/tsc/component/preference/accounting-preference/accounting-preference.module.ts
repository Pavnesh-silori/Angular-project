import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingPreferenceRoutingModule } from './accounting-preference-routing.module';
import { AccountingPreferenceComponent } from './accounting-preference.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AccountingPreferenceComponent
    ],
    imports: [
        CommonModule,
        AccountingPreferenceRoutingModule,
        MatCheckboxModule,
        MatCardModule,
        MatTooltipModule,
        ReactiveFormsModule,
    ]
})

export class AccountingPreferenceModule { }
