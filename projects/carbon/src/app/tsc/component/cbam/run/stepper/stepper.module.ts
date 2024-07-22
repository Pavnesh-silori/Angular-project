import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperComponent } from './stepper.component';

import { InstallationDetailModule } from '../installation-detail/installation-detail.module';
import { ProcessMapModule } from '../process-map/process-map/process-map.module';
import { TrackProgressModule } from '../track-progress/track-progress.module';
import { ProcessMapModule as ProductionRouteViewModule } from '@netzero/component/source/production-route/view/process-map/process-map.module';
import { AllocateReviewRunModule } from '../allocate-review-run/allocate-review-run.module';

//tsc-library
import { EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/
@NgModule({
    declarations: [
        StepperComponent
    ],
    imports: [
        CommonModule,
        StepperRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatCardModule,
        MatExpansionModule,
        InstallationDetailModule,
        ProcessMapModule,
        TrackProgressModule,
        ProductionRouteViewModule,
        AllocateReviewRunModule,
        MatTooltipModule,
        EllipsisPipeModule,
    ]
})
export class StepperModule { }
