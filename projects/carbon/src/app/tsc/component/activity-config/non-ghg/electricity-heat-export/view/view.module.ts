import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectricityHeatExportViewRoutingModule } from './view-routing.module';
import { ElectricityHeatExportViewComponent } from './view.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [
        ElectricityHeatExportViewComponent
    ],
    imports: [
        CommonModule,
        ElectricityHeatExportViewRoutingModule,

        MatRippleModule,
        MatTooltipModule,
        MatCardModule,
        MatDialogModule,
    ]
})
export class ElectricityHeatExportViewModule { }


