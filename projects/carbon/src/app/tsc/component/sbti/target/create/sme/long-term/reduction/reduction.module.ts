import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReductionRoutingModule } from './reduction-routing.module';
import { ReductionComponent } from './reduction.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MaintenanceModule } from '../../near-term/maintenance/maintenance.module';

@NgModule({
    declarations: [
        ReductionComponent
    ],
    imports: [
        CommonModule,
        ReductionRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MaintenanceModule,
    ]
})
export class ReductionModule { }
