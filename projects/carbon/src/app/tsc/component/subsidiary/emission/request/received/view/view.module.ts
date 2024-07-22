import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { RequestEmissionDataDialogModule } from '@carbon/component/subsidiary-emission-data/request-emission-data-dialog/request-emission-data-dialog.module';


@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
        RequestEmissionDataDialogModule
    ]
})
export class ViewModule { }
