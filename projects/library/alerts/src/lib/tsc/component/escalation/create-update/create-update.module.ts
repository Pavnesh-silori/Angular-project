import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { CreateUpdateEscalationComponent } from './create-update.component';

@NgModule({
    declarations: [
        CreateUpdateEscalationComponent
    ],
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatTooltipModule,

        NgxMatSelectSearchModule
    ]
})
export class CreateUpdateEscalationModule { }
