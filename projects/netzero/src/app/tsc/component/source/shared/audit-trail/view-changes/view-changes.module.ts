import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChangesRoutingModule } from './view-changes-routing.module';
import { ViewChangesComponent } from './view-changes.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { ChangesModule } from './changes/changes.module';

@NgModule({
    declarations: [
        ViewChangesComponent
    ],
    imports: [
        CommonModule,
        ViewChangesRoutingModule,
        MatTooltipModule,
        MatRippleModule,
        MatDialogModule,
        MatCardModule,
        ChangesModule
    ],
    exports: [
        ViewChangesComponent
    ]
})
export class ViewChangesModule { }
