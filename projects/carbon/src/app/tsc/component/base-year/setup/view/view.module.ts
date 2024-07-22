import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CreateModule } from '../create/create.module';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatCardModule,
        MatTooltipModule,
        CreateModule,
        EllipsisPipeModule,
    ]
})
export class ViewModule { }
