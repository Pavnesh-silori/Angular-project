import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ReductionModule as NearTermReductionModule } from '../target/create/sme/near-term/reduction/reduction.module';
import { ReductionModule as LongTermReductionModule } from '../target/create/sme/long-term/reduction/reduction.module';

// tsc-library
import { EllipsisPipeModule } from '@library/tsc-common';
// / tsc-library

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		NgxEchartsModule.forRoot({
			echarts: () => import('echarts')
		}),
		MatTooltipModule,
		MatCardModule,
		FlexLayoutModule,
        EllipsisPipeModule,
        NearTermReductionModule,
        LongTermReductionModule
	]
})
export class DashboardModule { }
