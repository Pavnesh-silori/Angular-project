import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigViewComponent } from './config-view.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        ConfigViewComponent,
    ],
    imports: [
        CommonModule,

        MatCardModule
    ],
    exports: [
        ConfigViewComponent
    ]
})

export class ConfigViewModule { }
