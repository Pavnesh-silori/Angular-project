import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatCardModule,
        MatTooltipModule,
        PerfectScrollbarModule,
        NgCircleProgressModule.forRoot(),
    ]
})
export class HomeModule { }
