import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestEmissionDataDialogRoutingModule } from './request-emission-data-dialog-routing.module';
import { RequestEmissionDataDialogComponent } from './request-emission-data-dialog.component';
import { ParentDetailsModule } from '../parent-details/parent-details.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    RequestEmissionDataDialogComponent
  ],
  imports: [
    CommonModule,
    RequestEmissionDataDialogRoutingModule,
    ParentDetailsModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class RequestEmissionDataDialogModule { }
