import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityChangeRoutingModule } from './activity-change-routing.module';
import { ActivityChangeDialog } from './activity-change.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ViewModule } from './view/view.module';
import { RecordDetailsModule } from '@carbon/component/sustainability-accounting/record-details/record-details.module'; 

@NgModule({
    declarations: [
        ActivityChangeDialog
    ],
    imports: [
        CommonModule,
        ActivityChangeRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        ViewModule,
        RecordDetailsModule
    ]
})
export class ActivityChangeModule { }
