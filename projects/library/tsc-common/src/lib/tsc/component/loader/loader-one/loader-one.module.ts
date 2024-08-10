import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderOneComponent } from './loader-one.component';

@NgModule({
    declarations: [
        LoaderOneComponent,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        LoaderOneComponent
    ]
})

export class LoaderOneModule { }
