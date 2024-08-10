import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationRoutingModule } from './certification-routing.module';
import { CertificationComponent } from './certification.component';

import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        CertificationComponent
    ],
    imports: [
        CommonModule,
        CertificationRoutingModule,
        MatCardModule,
        FlexLayoutModule
    ]
})
export class CertificationModule { }
