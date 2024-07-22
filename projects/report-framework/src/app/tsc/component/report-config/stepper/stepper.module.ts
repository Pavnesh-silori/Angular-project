import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';
import { ReportConfigModule } from '../report-config.module'; 
import { AssignmentModule } from '@report-framework/component/assignment/assignment/assignment.module'; 

import { MessageAlertModule } from '@library/tsc-common';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    ReportConfigModule,
    AssignmentModule,
    MessageAlertModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCardModule
  ]
})
export class StepperModule { }
