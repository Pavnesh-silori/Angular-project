import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { CreateUpdateComponent } from '../create-update/create-update.component';

//tsc-library
// import { DateMonthYearFormatModule } from '@library/date';
import { SearchBarOneModule, FunnelFilterModule, MessageAlertModule } from '@library/tsc-common';
import { MatCheckboxModule } from '@angular/material/checkbox';
// /tsc-library/

@NgModule({
    declarations: [
        PageComponent,
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        PageRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        FontAwesomeModule,

        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatButtonModule,
        MatOptionModule,
        MatTooltipModule,
        NgxIntlTelInputModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatMomentDateModule,
        MatDatepickerModule,
        MatButtonModule,
        MatRippleModule,
        ClipboardModule,
        MatCheckboxModule,
        

        NgxDaterangepickerMd.forRoot(),

        SearchBarOneModule,
        FunnelFilterModule,
        MessageAlertModule
        // DateMonthYearFormatModule,
    ]
})
export class PageModule { }
