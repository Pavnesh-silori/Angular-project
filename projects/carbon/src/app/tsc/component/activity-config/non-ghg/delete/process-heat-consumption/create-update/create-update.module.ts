import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CreateUpdateRoutingModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatIconModule,
        MatRadioModule,
        NgxMatSelectSearchModule
    ]
})
export class CreateUpdateModule { }
