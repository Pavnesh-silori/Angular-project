import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';

import { MeterDataRoutingModule } from './meter-data-routing.module';
import { MeterDataDashboardComponent } from './meter-data.component';

// tsc-library
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/


@NgModule({
    declarations: [
        MeterDataDashboardComponent
    ],
    imports: [
        CommonModule,
        MeterDataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        TrendModule,
        MessageAlertModule,
        SkeletonModule
    ],
    providers: [TrendService]
})
export class MeterDataDashboardModule { }
