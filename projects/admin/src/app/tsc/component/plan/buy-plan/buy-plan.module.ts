import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListRoutingModule } from './buy-plan-routing.module';
import { BuyPlanComponent } from './buy-plan.component';
import { CreateUpdateBillingProfileDialogModule } from '@Admin/component/billing/create-update-billing-profile/create-update-billing-profile.dialog';
@NgModule({
    declarations: [
        BuyPlanComponent,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatCardModule,
        MatStepperModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        FontAwesomeModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        ListRoutingModule,
        CreateUpdateBillingProfileDialogModule
    ]
})
export class BuyPlanModule { }
