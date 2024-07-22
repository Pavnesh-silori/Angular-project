import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { CreateModule } from '../create/create.module';
import { AuditDetailsModule } from '../../audit-details/audit-details.module';
import { SendEmailModule } from '../send-email/send-email.module';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//tsc-library
import { SearchBarOneModule, EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        SearchBarOneModule,
        MatRippleModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCheckboxModule,
        NgbModule,
        FontAwesomeModule,
        CreateModule,
        AuditDetailsModule,
        SendEmailModule,
        EllipsisPipeModule
    ]
})
export class PageModule { }
