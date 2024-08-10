import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { OrgSignUpRoutingModule } from './org-sign-up-routing.module';
import { OrgSignUpComponent } from './org-sign-up.component';

@NgModule({
    declarations: [
        OrgSignUpComponent
    ],
    imports: [
        CommonModule,
        OrgSignUpRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule,
        MatCheckboxModule,
        NgxMatSelectSearchModule,
        NgxIntlTelInputModule,
    ]
})
export class OrgSignUpModule { }
