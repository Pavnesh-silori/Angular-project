import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';

@NgModule({
    declarations: [
        TabComponent
    ],
    imports: [
        CommonModule,
        TabRoutingModule,
        NgbModule,
        MatTabsModule,
    ]
})
export class TabModule { }
