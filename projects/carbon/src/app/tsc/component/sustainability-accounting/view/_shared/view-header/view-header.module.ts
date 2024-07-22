import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EllipsisPipeModule } from '@library/tsc-common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { ViewHeaderComponent } from './view-header.component';
import { FugitiveReleasesCreateUpdateModule } from '@carbon/component/activity-data/ghg/scope-1/fugitive-emission/other-fugitive-sources/_shared/fugitive-release-create-update/fugutive-release-create-update.model';

@NgModule({
    declarations: [
        ViewHeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FontAwesomeModule,
        MatRippleModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        EllipsisPipeModule,
        FugitiveReleasesCreateUpdateModule,
        NgxDaterangepickerMd.forRoot()

    ],
    exports: [ViewHeaderComponent],
})
export class ViewHeaderModule { }
