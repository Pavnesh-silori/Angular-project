import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionLevelActivityConfigViewRoutingModule } from './view-routing.module';
import { ProductionLevelActivityConfigViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ProductionLevelActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        ProductionLevelActivityConfigViewRoutingModule,

        MatCardModule
    ]
})

export class ProductionLevelActivityConfigViewModule { }
