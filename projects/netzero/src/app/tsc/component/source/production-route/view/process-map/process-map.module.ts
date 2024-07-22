import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessMapRoutingModule } from './process-map-routing.module';
import { ProcessMapComponent } from './process-map.component';

@NgModule({
    declarations: [ ProcessMapComponent ],
    imports: [
        CommonModule,
        ProcessMapRoutingModule
    ],
    exports: [ ProcessMapComponent ],
})
export class ProcessMapModule { }
