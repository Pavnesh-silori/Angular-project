import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowResultRoutingModule } from './show-result-routing.module';
import { ShowResultComponent } from './show-result.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        ShowResultComponent
    ],
    imports: [
        CommonModule,
        ShowResultRoutingModule,
        
        MatCardModule,
        MatProgressBarModule
    ],
    exports: [ShowResultComponent]
})
export class ShowResultModule { }
