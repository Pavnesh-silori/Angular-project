import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TrackProgressRoutingModule } from './track-progress-routing.module';
import { TrackProgressComponent } from './track-progress.component';


@NgModule({
  declarations: [TrackProgressComponent],
  imports: [
    CommonModule,
    TrackProgressRoutingModule,
    MatExpansionModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    FontAwesomeModule,
    // MatTooltipModule,
    MatFormFieldModule,
  ],
  exports: [TrackProgressComponent]
})
export class TrackProgressModule { }
