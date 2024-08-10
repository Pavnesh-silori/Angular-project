import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPageOneComponent } from './static-page-one.component';

@NgModule({
    declarations: [
        StaticPageOneComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StaticPageOneComponent
    ]
})

export class StaticPageOneModule { }
