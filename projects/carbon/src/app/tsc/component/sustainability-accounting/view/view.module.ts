import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { ActivityDataModule } from './_shared/activity-data/activity-data.module';
import { CalculationDetailsModule } from './_shared/calculation-details/calculation-details.module';
import { EmissionDetailsModule } from './_shared/emission-details/emission-details.module';
import { FactorDetailsModule } from './_shared/factor-details/factor-details.module';
import { RecordDetailsModule } from './_shared/record-details/record-details.module';
import { ViewHeaderModule } from './_shared/view-header/view-header.module';

@NgModule({
    declarations: [ViewComponent],
    imports: [
        CommonModule,
        ViewRoutingModule,
        NgbModule,
        ViewHeaderModule,
        FactorDetailsModule,
        RecordDetailsModule,
        ActivityDataModule,
        EmissionDetailsModule,
        CalculationDetailsModule,
    ]
})
export class ViewModule { }
