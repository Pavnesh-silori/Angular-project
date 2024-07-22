import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CreateModule } from '../create-update/create.module';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatButtonModule,
        MatTooltipModule,
        CreateModule
    ]
})
export class ViewModule { }
