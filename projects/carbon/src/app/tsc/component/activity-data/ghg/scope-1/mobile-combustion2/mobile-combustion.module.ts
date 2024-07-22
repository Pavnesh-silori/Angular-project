import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MobileCombustionRoutingModule } from './mobile-combustion-routing.module';
import { MobileCombustion2Component } from './mobile-combustion.component';
import { ViewModule } from '@carbon/component/activity-config/ghg/scope-1/mobile-combustion2/view/view.module';
import { CreateUpdateModule} from './create-update/create-update.module' ;

@NgModule({
  declarations: [MobileCombustion2Component],
  imports: [
    CommonModule,
    MobileCombustionRoutingModule,
    MatTabsModule,
    MatCardModule,
    PerfectScrollbarModule,
    ViewModule,
    CreateUpdateModule

  ]
})
export class MobileCombustionModule { }
