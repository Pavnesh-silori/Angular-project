import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageComponent } from './page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';

//tsc-library
import { FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';
import { DateFilterModule } from '@library/date';
// /tsc-library

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatButtonModule,
        DateFilterModule,
        NgbModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        SearchBarOneModule,
        FunnelFilterModule,
        MatTooltipModule,
        MatRippleModule
    ]
})
export class PageModule { }

