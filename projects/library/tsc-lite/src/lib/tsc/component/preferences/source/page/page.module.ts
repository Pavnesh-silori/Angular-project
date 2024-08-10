import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SourcePageRoutingModule } from './page-routing.module';
import { SourcePageComponent } from './page.component';

// tsc-library
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        SourcePageComponent
    ],
    imports: [
        CommonModule,
        SourcePageRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,

        NgbModule,
        FontAwesomeModule,

        SearchBarOneModule,
        FunnelFilterModule
    ]
})
export class SourcePageModule { }
