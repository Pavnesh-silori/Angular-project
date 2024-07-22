import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

//library
import { DateFilterModule } from '@library/date';
import { FunnelFilterModule } from '@library/tsc-common';
import { SearchBarOneModule } from '@library/tsc-common';
// /library

@NgModule({
    declarations: [ListComponent],
    imports: [
        CommonModule,
        ListRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSortModule,
        MatTooltipModule,
        RoundProgressModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FunnelFilterModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        NgxDaterangepickerMd.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatRippleModule,
        MatIconModule,
        MatSlideToggleModule,
        DateFilterModule
    ]
})
export class ListModule { }
