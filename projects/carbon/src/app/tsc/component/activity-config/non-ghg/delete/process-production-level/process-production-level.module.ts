import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessProductionLevelRoutingModule } from './process-production-level-routing.module';
import { CreateUpdateModule } from './create-update/create-update.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ProcessProductionLevelRoutingModule,
        CreateUpdateModule
    ]
})
export class ProcessProductionLevelModule { }
