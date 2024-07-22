import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { CreateUpdateComponent } from '../create-update/create-update.component';


//tsc-library
import {
    SearchBarOneModule,
    FunnelFilterModule,
    MessageAlertModule
} from '@library/tsc-common';
import { DateInputModule } from '@library/date';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

// /tsc-library/

@NgModule({
    declarations: [
        PageComponent,
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatButtonModule,
        NgxDaterangepickerMd,
        
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        FontAwesomeModule,
        MatCheckboxModule,

        PageRoutingModule,

        SearchBarOneModule,
        FunnelFilterModule,
        DateInputModule,
        MessageAlertModule

    ]
})

export class PageModule { }
