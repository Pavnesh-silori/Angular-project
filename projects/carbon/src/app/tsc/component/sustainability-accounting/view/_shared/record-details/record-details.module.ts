import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordDetailsComponent } from './record-details.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [RecordDetailsComponent],
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [RecordDetailsComponent],
})
export class RecordDetailsModule { }
