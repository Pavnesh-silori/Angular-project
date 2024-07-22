import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import { ActivePagePillModule } from '../active-page-pill/active-page-pill.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// tsc-library
import { MatTooltipModule } from '@angular/material/tooltip';
import { StaticPageThreeModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
  declarations: [
    TabComponent,
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    StaticPageThreeModule,
    ActivePagePillModule,
    NgbModule,
    MatTabsModule,
    MatButtonModule,
    FontAwesomeModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
  ]
})
export class TabModule { }
