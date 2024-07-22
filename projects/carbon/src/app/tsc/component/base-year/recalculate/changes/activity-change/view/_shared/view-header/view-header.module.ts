import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ViewHeaderComponent } from './view-header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

// tsc-library
import { EllipsisPipeModule } from '@library/tsc-common';
// tsc-library

@NgModule({
    declarations: [ViewHeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FontAwesomeModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        EllipsisPipeModule
    ],
    exports: [ViewHeaderComponent],
})
export class ViewHeaderModule { }
