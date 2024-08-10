import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';

import { GenerateOtpComponent } from './generate-otp.component';

import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
    declarations: [
        GenerateOtpComponent
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        NgOtpInputModule

    ],
    exports: [
        GenerateOtpComponent,

    ]
})
export class GenerateOtpModule { }
