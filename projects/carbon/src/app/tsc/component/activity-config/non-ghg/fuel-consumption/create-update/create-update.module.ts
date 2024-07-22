import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { CreateUpdateComponent } from './create-update.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
    declarations: [
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        CreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,

        NgxMatSelectSearchModule,
    ]
})
export class CreateUpdateModule { }
