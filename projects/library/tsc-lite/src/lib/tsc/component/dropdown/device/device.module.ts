import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DeviceComponent } from './device.component';

@NgModule({
    declarations: [
        DeviceComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule
    ],
    exports: [
        DeviceComponent
    ]
})

export class DeviceModule { }
