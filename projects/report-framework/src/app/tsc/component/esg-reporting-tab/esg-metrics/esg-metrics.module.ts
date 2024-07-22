import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EsgMetricsRoutingModule } from './esg-metrics-routing.module';
import { EsgMetricsComponent } from './esg-metrics.component';
import { AddUpdateEsgMetricComponent } from './add-esg-metric/add-update-esg-metric.component';
import { CustomEsgMetricCreateUpdateModule } from './custom-esg-metric/create-update.module';

import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// tsc-library
import { EllipsisPipeModule, FunnelFilterModule, MessageAlertModule, SearchBarOneModule } from '@library/tsc-common';
// / tsc-library


@NgModule({
    declarations: [
        EsgMetricsComponent,
        AddUpdateEsgMetricComponent,
    ],
    imports: [
        CommonModule,
        EsgMetricsRoutingModule,
        SearchBarOneModule,
        FunnelFilterModule,
        CustomEsgMetricCreateUpdateModule,
        EllipsisPipeModule,
        MatRippleModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatSelectModule,
        MatOptionModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        FontAwesomeModule,
        MatTooltipModule,
        MatMenuModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        NgbModule,
        MessageAlertModule,
    ]
})
export class EsgMetricsModule { }
