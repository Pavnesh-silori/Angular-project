import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';

import { EntityDashboardComponent } from './entity.component';
import { EntityDashboardRoutingModule } from './entity-routing.module';

// tsc-library
import { SearchBarTwoModule, SkeletonModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        EntityDashboardComponent
    ],
    imports: [
        CommonModule,
        EntityDashboardRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatOptionModule,
        MatRadioModule,
        MatTooltipModule,
        NgxMatSelectSearchModule,
        PerfectScrollbarModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule
    ],
    providers: [TrendService]
})
export class EntityDashboardModule { }
