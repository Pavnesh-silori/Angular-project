import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuditDetailsRoutingModule } from './audit-details-routing.module';
import { AuditDetailsComponent } from './audit-details.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        AuditDetailsComponent
    ],
    imports: [
        CommonModule,
        AuditDetailsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
        NgxMatSelectSearchModule
    ],
    exports:[
        AuditDetailsComponent
    ]
})
export class AuditDetailsModule { }
