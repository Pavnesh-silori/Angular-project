import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { OptionSearchModule } from '../search/option-search.module';

@NgModule({
    declarations: [
        AccessComponent
    ],
    imports: [
        CommonModule,
        AccessRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatFormFieldModule,
        PerfectScrollbarModule,
        NgxMatSelectSearchModule,
        OptionSearchModule
    ]
})
export class AccessModule { }
