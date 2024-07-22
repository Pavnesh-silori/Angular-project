import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { SchedulerWorkflowModule } from '@carbon/component/activity-config/create/_templates/workflow-scheduler/scheduler-workflow/scheduler-workflow.module';
import { ApiModule } from '@carbon/component/activity-config/create/_templates/api/api.module';
import {ConfigCreateModule} from './config-create/config-create.module';
import {CreateUpdateModule}from '@carbon/component/activity-data/ghg/scope-1/mobile-combustion2/create-update/create-update.module';
import { ViewModule } from '../view/view.module';
@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatTabsModule,

    SchedulerWorkflowModule,
    ApiModule,
    ConfigCreateModule,
    CreateUpdateModule,
    ViewModule
  ]
})
export class CreateModule { }
