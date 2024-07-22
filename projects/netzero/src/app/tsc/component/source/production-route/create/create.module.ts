import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DragDropModule } from '@angular/cdk/drag-drop';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { PreviewModule } from '../preview/preview.module';

// library
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
// /library

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ViewModule as ProcessViewModule } from '@netzero/component/source/process/view/view.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        CreateComponent
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        FontAwesomeModule,
        DragDropModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        MatTooltipModule,
        MatFormFieldModule,
        PreviewModule,
        EllipsisPipeModule,
        SearchBarOneModule,
        ProcessViewModule,
        NgxMatSelectSearchModule,
    ]
})
export class CreateModule { }
