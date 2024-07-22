import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionSourceViewRoutingModule } from './emission-source-view-routing.module';
import { EmissionSourceViewComponent } from './emission-source-view.component';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [EmissionSourceViewComponent],
  imports: [
    CommonModule,
    EmissionSourceViewRoutingModule,
    MatCardModule,
    MatRippleModule,
    MatTooltipModule,
    MatExpansionModule,
  ]
})
export class EmissionSourceViewModule { }
