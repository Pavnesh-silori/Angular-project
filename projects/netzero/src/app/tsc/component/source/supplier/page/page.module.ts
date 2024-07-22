import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PopoverModule } from "ngx-smart-popover";
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { PageRoutingModule } from './page-routing.module';
import { SupplierComponent } from './page.component';
import { CreateUpdateComponent } from '../create-update/create-update.component';
import { AssignComponent } from '../assignee/assign.component';
import { BulkUploadDialogModule } from '../../shared/bulk-upload/bulk-upload-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FunnelFilterModule, MessageAlertModule, SearchBarOneModule } from '@library/tsc-common';

@NgModule({
    imports: [
        CommonModule,
        PageRoutingModule,
        NgbModule,
        RoundProgressModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        BulkUploadDialogModule,
        MatRippleModule,
        MatTooltipModule,
        MatTabsModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatPaginatorModule,
        MatFormFieldModule,
        ClipboardModule,
        NgxMatSelectSearchModule,
        MatChipsModule,
        MatCheckboxModule,
        PopoverModule,
        NgxIntlTelInputModule,
        MatSlideToggleModule,
        FunnelFilterModule,
        MessageAlertModule,
        SearchBarOneModule
    ],
    declarations: [
        SupplierComponent,
        CreateUpdateComponent,
        AssignComponent
    ],
    exports: []
})

export class PageModule { }
