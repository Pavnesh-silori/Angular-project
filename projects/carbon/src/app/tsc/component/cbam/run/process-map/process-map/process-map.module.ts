import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

import { ProcessMapRoutingModule } from './process-map-routing.module';
import { ProcessMapComponent } from './process-map.component';
import { ActivityMappingModule } from '../activity-mapping/activity-mapping.module';

import { MessageAlertModule } from '@library/tsc-common';


@NgModule({
    declarations: [
        ProcessMapComponent
    ],
    imports: [
        CommonModule,
        ProcessMapRoutingModule,
        MatExpansionModule,
        MatCardModule,
        MatRadioModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        ActivityMappingModule,
        MessageAlertModule
    ],
    exports:[
        ProcessMapComponent
    ]
})

export class ProcessMapModule { }
