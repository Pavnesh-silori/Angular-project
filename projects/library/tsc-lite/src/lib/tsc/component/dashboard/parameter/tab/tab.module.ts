import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ParameterTabRoutingModule } from './tab-routing.module';
import { ParameterTabComponent } from './tab.component';


@NgModule({
    declarations: [
        ParameterTabComponent
    ],
    imports: [
        CommonModule,
        ParameterTabRoutingModule,
        MatTabsModule,
        NgbModule
    ]
})
export class ParameterTabModule { }
