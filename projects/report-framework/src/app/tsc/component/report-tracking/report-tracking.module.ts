import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportTrackingRoutingModule } from './report-tracking-routing.module';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [
    PdfComponent
  ],
  imports: [
    CommonModule,
    ReportTrackingRoutingModule
  ]
})
export class ReportTrackingModule { }
