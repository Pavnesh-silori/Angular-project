import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmissionRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [TabComponent],
    imports: [
        CommonModule,
        EmissionRoutingModule,
        MatTabsModule,
    ]
})
export class EmissionModule { }
