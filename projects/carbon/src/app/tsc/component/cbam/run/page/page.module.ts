import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//tsc-lib
import { SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule } from '@library/tsc-common';
import { DialogOneModule, TypeConfirmationDialogModule } from '@library/tsc-common';
import { MatRippleModule } from '@angular/material/core';
// /tsc-lib/
@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        PageRoutingModule,

        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,

        ReactiveFormsModule,
        FormsModule,

        FontAwesomeModule,
        EllipsisPipeModule,

        SearchBarOneModule,
        DialogOneModule,
        FunnelFilterModule,
        TypeConfirmationDialogModule
    ]
})
export class PageModule { }
