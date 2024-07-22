import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EllipsisPipeModule } from '@library/tsc-common';

/* dialog_view */
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        MatCardModule,
        MatRippleModule,
        MatTooltipModule,
        EllipsisPipeModule,

        /* dialog_view */
        MatDialogModule,
        MatButtonModule,
    ]
})
export class ViewModule { }
