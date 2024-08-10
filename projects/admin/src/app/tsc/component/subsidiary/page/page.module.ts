import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { EllipsisPipeModule, FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        EllipsisPipeModule,
        MatDialogModule,
        FunnelFilterModule
    ]
})
export class PageModule { }
