import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangesRoutingModule } from './changes-routing.module';
import { ChangesComponent } from './changes.component';


@NgModule({
    declarations: [
        ChangesComponent
    ],
    imports: [
        CommonModule,
        ChangesRoutingModule
    ],
    exports: [
        ChangesComponent
    ]
})
export class ChangesModule { }
