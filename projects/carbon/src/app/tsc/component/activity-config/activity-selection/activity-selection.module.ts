import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ActivitySelectionRoutingModule } from './activity-selection-routing.module';
import { ActivitySelectionComponent } from './activity-selection.component';

import { SearchBarOneModule } from '@library/tsc-common';

@NgModule({
  declarations: [ActivitySelectionComponent],
  imports: [
    CommonModule,
    ActivitySelectionRoutingModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    SearchBarOneModule
  ]
})
export class ActivitySelectionModule { }
