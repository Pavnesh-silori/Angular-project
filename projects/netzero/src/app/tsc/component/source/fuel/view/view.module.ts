import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { DialogModule } from '../dialog/dialog.component'
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatRippleModule,
    DialogModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ViewModule { }
