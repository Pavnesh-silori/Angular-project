import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,

        MatRippleModule,
        MatTooltipModule,
        MatCardModule,
        MatDialogModule,
    ]
})
export class ViewModule { }


