import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

//tsc-library
import { SearchBarOneModule,EllipsisPipeModule, FunnelFilterModule } from '@library/tsc-common';
import { ToastrModule } from 'ngx-toastr';
// /tsc-library/

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatRippleModule,

        SearchBarOneModule,
        ToastrModule,
        EllipsisPipeModule,
        FunnelFilterModule
    ]
})
export class PageModule { }
