import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { CreateUpdateComponent } from '../create-update/create-update.component';
import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { DateInputModule } from '@library/date';

@NgModule({
    declarations: [
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        CreateUpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        NgxDaterangepickerMd,
        DateInputModule
    ],
    exports: [
        CreateUpdateComponent
    ]
})

export class CreateUpdateModule { }
