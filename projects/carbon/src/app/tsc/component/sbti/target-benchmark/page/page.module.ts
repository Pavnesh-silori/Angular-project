import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { ViewModule } from '../view/view.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

// tsc-library
import { FunnelFilterModule, SearchBarOneModule } from '@library/tsc-common';
// /tsc-library

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        FunnelFilterModule,
        ViewModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatChipsModule,
        MatRippleModule,
        MatIconModule,
    ]
})
export class PageModule { }
