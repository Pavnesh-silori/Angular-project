import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExpiryAlertComponent } from './expiry-alert.component';

@NgModule({
    declarations: [
        ExpiryAlertComponent
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        NgbModule
    ],
    exports: [
        ExpiryAlertComponent
    ]
})

export class ExpiryAlertModule { }
