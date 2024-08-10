import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageThreeComponent } from './static-page-three.component';


@NgModule({
    declarations: [
        StaticPageThreeComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StaticPageThreeComponent
    ]
})

export class StaticPageThreeModule { }
