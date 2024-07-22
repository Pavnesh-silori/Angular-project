import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';


import { PageComponent } from './page.component';
import { CreateUpdateRoutingModule } from '../create-update/create-update-routing.module'
import { DialogModule } from '../dialog/dialog.component'
//tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
// /tsc-library/
@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CreateUpdateRoutingModule,
        NgbModule,
        FontAwesomeModule,
        MatDialogModule,
        MatButtonModule,
        MatRippleModule,
        SearchBarOneModule,
        DialogModule
    ]
})

export class PageModule { }
