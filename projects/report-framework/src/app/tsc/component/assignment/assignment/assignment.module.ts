import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentComponent } from './assignment.component';
import { SchedulerWorkflowModule } from '../scheduler-workflow/scheduler-workflow.module';
import { DataCreateUpdateModule } from '../../data-create-update/data-create-update.module';
import { AuditTrailModule } from '../audit-trail/audit-trail.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//tsc-library
import { EllipsisPipeModule, SearchBarOneModule } from '@library/tsc-common';
import { MessageAlertModule } from '@library/tsc-common'; 
//  tsc-library

@NgModule({
    declarations: [
        AssignmentComponent
    ],
    imports: [
        CommonModule,
        AssignmentRoutingModule,
        SearchBarOneModule,
        AuditTrailModule,
        SchedulerWorkflowModule,
        MessageAlertModule,
        ReactiveFormsModule,
        FormsModule,
        DataCreateUpdateModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatTooltipModule,
        EllipsisPipeModule,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        NgxMatSelectSearchModule

    ],
    exports: [
        AssignmentComponent
    ]
})
export class AssignmentModule { }
