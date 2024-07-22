import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePagePillComponent } from './active-page-pill.component';

import { MatTooltipModule } from '@angular/material/tooltip';

import { EllipsisPipeModule } from '@library/tsc-common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActivePagePillComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule,
    EllipsisPipeModule
  ],
  exports: [
    ActivePagePillComponent,
  ]
})
export class ActivePagePillModule { }
