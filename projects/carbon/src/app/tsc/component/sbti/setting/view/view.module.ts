import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CreateModule } from '../create/create.module';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatCardModule,
        MatTooltipModule,
        CreateModule
    ]
})

export class ViewModule { }
