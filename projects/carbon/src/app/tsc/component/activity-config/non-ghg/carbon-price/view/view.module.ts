import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarbonPriceViewRoutingModule } from './view-routing.module';
import { CarbonPriceViewComponent } from './view.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        CarbonPriceViewComponent
    ],
    imports: [
        CommonModule,
        CarbonPriceViewRoutingModule,
        MatRippleModule,
        MatTooltipModule,
        MatCardModule,
        MatDialogModule,
    ]
})
export class CarbonPriceViewModule { }


