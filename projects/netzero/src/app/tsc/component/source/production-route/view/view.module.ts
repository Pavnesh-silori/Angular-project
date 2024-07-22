import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EllipsisPipeModule } from '@library/tsc-common';
import { ProcessMapModule } from './process-map/process-map.module';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatRippleModule,
        MatTooltipModule,
        EllipsisPipeModule,
        ProcessMapModule,
    ],
    exports: [
        ViewComponent
    ]
})
export class ViewModule { }
