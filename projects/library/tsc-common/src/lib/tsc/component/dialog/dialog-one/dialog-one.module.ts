import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { DialogOneComponent } from './dialog-one.component';

@NgModule({
  declarations: [DialogOneComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [DialogOneComponent]

})

export class DialogOneModule { }
