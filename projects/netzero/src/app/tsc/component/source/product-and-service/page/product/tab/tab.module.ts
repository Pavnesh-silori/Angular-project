import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { MatTabsModule } from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    NgbModule,
    MatTabsModule,
    FontAwesomeModule
  ],
  exports: [
    TabComponent
  ]
})
export class TabModule { }
