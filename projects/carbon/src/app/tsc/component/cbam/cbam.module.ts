import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbamRoutingModule } from './cbam-routing.module';
import { TabModule } from './tab/tab.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CbamRoutingModule,
        TabModule
    ]
})

export class CbamModule { }
