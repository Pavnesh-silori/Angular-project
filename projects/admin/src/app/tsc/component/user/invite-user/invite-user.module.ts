import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// tsc-library
import { TscCommonModule } from '@library/tsc-common';
import { ApplicationServiceModule } from '@library/application-service';
import { OrganizationServiceModule } from '@library/organization-service';
import { ToastrServiceModule } from '@library/toastr-service';
// /tsc-library/
import { OptionSearchModule } from '@Admin/component/search/option-search.module';
import { InviteUserComponent } from './invite-user.component';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        InviteUserComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        PerfectScrollbarModule,

        TscCommonModule,
        ApplicationServiceModule,
        OrganizationServiceModule,
        ToastrServiceModule,

        OptionSearchModule,

        NgxMatSelectSearchModule
    ]
})
export class InviteUserModule { }
