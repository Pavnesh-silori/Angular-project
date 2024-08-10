import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        ViewRoutingModule
    ]
})

export class ViewModule { }
