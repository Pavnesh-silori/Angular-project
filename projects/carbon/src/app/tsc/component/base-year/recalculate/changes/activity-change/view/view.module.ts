import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

import { ViewHeaderModule } from './_shared/view-header/view-header.module';
import { ActivityDataModule } from '@carbon/component/sustainability-accounting/view/_shared/activity-data/activity-data.module';
import { RecordDetailsModule as ExtendedRecordDetailsModule } from '@carbon/component/sustainability-accounting/record-details/record-details.module';

import { FugitiveHeaderComponent } from './_shared/header/header.component';

@NgModule({
    declarations: [
        ViewComponent,
        FugitiveHeaderComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        NgbModule,
        ViewHeaderModule,
        ActivityDataModule,
        ExtendedRecordDetailsModule
    ],
    exports: [
        ViewComponent
    ]
})
export class ViewModule { }
