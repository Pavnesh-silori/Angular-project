import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChpAttributionActivityConfigViewRoutingModule } from './chp-attribution-ac-view-routing.module';
import { ChpAttributionActivityConfigViewComponent } from './chp-attribution-ac-view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ChpAttributionActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        ChpAttributionActivityConfigViewRoutingModule,

        MatCardModule
    ]
})

export class ChpAttributionActivityConfigViewModule { }
