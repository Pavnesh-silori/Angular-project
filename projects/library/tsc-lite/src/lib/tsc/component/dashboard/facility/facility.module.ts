import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';

import { FacilityComponent } from './facility.component';
import { FacilityRoutingModule } from './facility-routing.module';

// tsc-library
import { MessageAlertModule, SearchBarTwoModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        FacilityComponent
    ],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        NgxMatSelectSearchModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule,
        MessageAlertModule
    ],
    providers: [TrendService]
})
export class FacilityModule { }
