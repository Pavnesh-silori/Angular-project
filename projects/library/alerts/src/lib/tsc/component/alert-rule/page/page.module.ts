import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        PageComponent,
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FontAwesomeModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatTooltipModule,
        MatSlideToggleModule
    ]
})

export class PageModule { }