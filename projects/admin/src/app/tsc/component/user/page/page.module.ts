import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

import { InviteUserModule } from '../invite-user/invite-user.module';
//tsc-library
import { TscCommonModule } from '@library/tsc-common';
import { SearchBarOneModule } from '@library/tsc-common';
import { DialogOneModule } from '@library/tsc-common';
import { UserDrawerModule } from '@library/tsc-common'
import { AccessModule } from '@Admin/component/access/access.module';
// /tsc-library/
@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbModule,
        FontAwesomeModule,
        MatSortModule,
        MatButtonModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        InviteUserModule, /* in case there's no routing to the module we have to manually add module to imports */
        TscCommonModule,
        SearchBarOneModule,
        DialogOneModule,
        UserDrawerModule,
        AccessModule,
    ]
})
export class PageModule { }
