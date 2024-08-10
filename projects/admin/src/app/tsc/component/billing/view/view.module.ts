import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { ChangeBillingProfileDialog } from '../change-billing-profile-dialog/change-billing-profile-dialog';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { CreateUpdateBillingProfileDialogModule } from '../create-update-billing-profile/create-update-billing-profile.dialog';


@NgModule({
    declarations: [
        ViewComponent,
        ChangeBillingProfileDialog
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgbModule,
        NgxMatSelectSearchModule,
        NgxIntlTelInputModule,
        MatChipsModule,
        CreateUpdateBillingProfileDialogModule
    ]
})
export class ViewModule { }
