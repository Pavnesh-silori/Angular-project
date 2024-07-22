import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiViewComponent } from './api-view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ApiViewComponent,
    ],
    imports: [
        CommonModule,

        MatCardModule
    ],
    exports: [
        ApiViewComponent
    ]
})

export class ApiViewModule { }
