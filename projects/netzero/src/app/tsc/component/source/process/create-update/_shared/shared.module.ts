import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CreateUpdateModule } from '@netzero/component/source/product-and-service/create-update/create-update.module'; 
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { MessageAlertModule } from '@library/tsc-common';

@NgModule({
    declarations: [SharedComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatChipsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatSlideToggleModule,
        CreateUpdateModule,
        NgxMatSelectSearchModule,
        MessageAlertModule
    ],
    exports: [SharedComponent]
})
export class SharedModule { }
