import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CreateModule } from './create/create.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReportRoutingModule,
        CreateModule
    ]
})
export class ReportModule { }
