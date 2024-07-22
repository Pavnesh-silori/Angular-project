import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessEmissionActivityConfigViewRoutingModule } from './view-routing.module';
import { ProcessEmissionActivityConfigViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ProcessEmissionActivityConfigViewComponent
    ],
    imports: [
        CommonModule,
        ProcessEmissionActivityConfigViewRoutingModule,

        MatCardModule
    ]
})

export class ProcessEmissionActivityConfigViewModule { }
