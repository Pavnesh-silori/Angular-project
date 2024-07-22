import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// /tsc-library

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        FontAwesomeModule,
        MatButtonModule,
        NgbModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatRippleModule,
        SearchBarOneModule,
        DateFilterModule,
    ]
})
export class PageModule { }

