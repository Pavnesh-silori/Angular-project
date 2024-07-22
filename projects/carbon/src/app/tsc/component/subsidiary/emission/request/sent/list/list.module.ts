import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CreateModule } from '../create-update/create.module';
import { CancelRequestDialogModule } from '../_shared/cancel-request/cancel-request.component';

// tsc-library
import { FunnelFilterModule, MessageAlertModule, SearchBarOneModule } from '@library/tsc-common';
// / tsc-library

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSortModule,
        MatChipsModule,
        MatTableModule,
        MatRippleModule,
        MatPaginatorModule,
        NgxDaterangepickerMd.forRoot(),
        MatMomentDateModule,
        MatDatepickerModule,
        FunnelFilterModule,
        CancelRequestDialogModule,
        CreateModule,
        SearchBarOneModule,
        MessageAlertModule
    ]
})
export class ListModule { }
