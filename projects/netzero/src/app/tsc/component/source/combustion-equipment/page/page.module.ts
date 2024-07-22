import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { CreateUpdateComponent } from '../create-update/create-update.component';
import { BulkUploadDialogModule } from '../../shared/bulk-upload/bulk-upload-dialog.component';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PopoverModule } from "ngx-smart-popover";
import { ClipboardModule } from '@angular/cdk/clipboard';

//tsc-library
import { SearchBarOneModule, FunnelFilterModule, EllipsisPipeModule, MessageAlertModule } from '@library/tsc-common';
import { EmissionSourceModule } from '../emission-source/emission-source.module';
// /tsc-libarary

@NgModule({
    declarations: [
        PageComponent,
        CreateUpdateComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        FontAwesomeModule,
        PageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BulkUploadDialogModule,

        MatRippleModule,
        MatTooltipModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatCheckboxModule,
        PopoverModule,
        ClipboardModule,
        EmissionSourceModule,

        SearchBarOneModule,
        FunnelFilterModule,
        EllipsisPipeModule,
        MessageAlertModule
    ]
})

export class PageModule { }
