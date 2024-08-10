import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ViewComponent,
    GenerateClientSecretDialog
} from './view.component';
import { ViewRoutingModule } from './view-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// tsc-library
import { ToastrServiceModule } from '@library/toastr-service';
import { StorageServiceModule } from '@library/storage-service';
import { TscCommonModule } from '@library/tsc-common';
// /tsc-library/


@NgModule({
    imports: [
        CommonModule,
        ViewRoutingModule,
        FontAwesomeModule,
        ClipboardModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,

        ToastrServiceModule,
        StorageServiceModule,
        TscCommonModule
    ],
    declarations: [
        ViewComponent,
        GenerateClientSecretDialog
    ],
})
export class ViewModule { }
