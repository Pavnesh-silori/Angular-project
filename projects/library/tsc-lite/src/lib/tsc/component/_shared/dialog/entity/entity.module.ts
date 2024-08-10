import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { EntityDialogComponent } from './entity.component';

@NgModule({
    declarations: [
        EntityDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule
    ]
})
export class EntityDialogModule { }
