import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';

import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

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
