import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CreateUpdateEscalationModule } from '../create-update/create-update.module';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,

        MatCardModule,
        MatTableModule,
        MatTooltipModule,

        FlexLayoutModule,

        CreateUpdateEscalationModule,
    ]
})
export class ListModule { }
