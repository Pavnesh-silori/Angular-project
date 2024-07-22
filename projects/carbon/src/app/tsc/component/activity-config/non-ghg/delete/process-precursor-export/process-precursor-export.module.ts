import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessPrecursorExportRoutingModule } from './process-precursor-export-routing.module';
import { CreateUpdateModule } from './create-update/create-update.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ProcessPrecursorExportRoutingModule,
        CreateUpdateModule
    ]
})
export class ProcessPrecursorExportModule { }
