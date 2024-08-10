import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';

//tsc-library
import {
    SearchBarOneModule,
    FunnelFilterModule
} from '@library/tsc-common';
// import { CreateUpdateModule } from '../create-update/create-update.module';
import { DateInputModule } from '@library/date';

// /tsc-library/

@NgModule({
    declarations: [
        PageComponent,
    ],
    imports: [
        CommonModule,

        MatRippleModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        // CreateUpdateModule,
        NgbModule,
        FontAwesomeModule,

        PageRoutingModule,

        SearchBarOneModule,
        FunnelFilterModule,
        DateInputModule,
        
    ]
})

export class PageModule { }
