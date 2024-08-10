import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

import { InfoDialogComponent } from './info-dialog.component';

@NgModule({
    declarations: [InfoDialogComponent],
    imports: [
        MatDialogModule,
        MatRippleModule
    ],
})

export class InfoDialogModule { }
