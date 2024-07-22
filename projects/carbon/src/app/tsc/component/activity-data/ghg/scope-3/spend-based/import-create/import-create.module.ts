import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordCreateRoutingModule } from './import-create-routing.module';
import { RecordCreateComponent } from './import-create.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        RecordCreateComponent
    ],
    imports: [
        CommonModule,
        RecordCreateRoutingModule,
        MatCardModule,
    ]
})
export class RecordCreateModule { }
