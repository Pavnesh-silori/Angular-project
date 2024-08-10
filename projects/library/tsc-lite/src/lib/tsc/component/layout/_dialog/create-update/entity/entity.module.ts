import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { CreateUpdateEntityComponent } from './entity.component';

@NgModule({
    declarations: [
        CreateUpdateEntityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule,
        NgxMatSelectSearchModule
    ]
})
export class CreateUpdateEntityModule { }
