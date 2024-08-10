import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SourceLoadModule } from '../../_dialog/create-update/source-load/source-load.module';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';

// tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        ViewComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        ViewRoutingModule,
        SourceLoadModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule
    ]
})
export class ViewModule { }
