import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { CreateUpdateEntityModule } from '../_dialog/create-update/entity/entity.module';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        CreateUpdateEntityModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatExpansionModule
    ]
})
export class ListModule { }
