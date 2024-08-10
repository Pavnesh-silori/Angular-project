import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopoverModule } from "ngx-smart-popover";

import { SourceLoadModule } from '../../_dialog/create-update/source-load/source-load.module';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

// tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        AddComponent
    ],
    imports: [
        CommonModule,
        AddRoutingModule,
        SourceLoadModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        ClipboardModule,
        PopoverModule
    ]
})
export class AddModule { }
