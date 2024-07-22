import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateModule } from '../run/create/create.module';

@NgModule({
    declarations: [
        TabComponent
    ],
    imports: [
        CommonModule,
        TabRoutingModule,
        MatTabsModule,
        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
        NgbModule,
        FontAwesomeModule,
        CreateModule
    ]
})

export class TabModule { }
