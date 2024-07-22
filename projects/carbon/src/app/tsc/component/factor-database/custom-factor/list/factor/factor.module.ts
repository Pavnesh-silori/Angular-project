import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorRoutingModule } from './factor-routing.module';
import { FactorComponent } from './factor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { UpdateFactorModule } from '../../dialog/update-factor/update-factor-dialog.component';
import { SearchBarOneModule } from '@library/tsc-common';
import { FunnelFilterModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        FactorComponent
    ],
    imports: [
        CommonModule,
        FactorRoutingModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSortModule,
        MatTabsModule,
        MatTableModule,
        MatChipsModule,
        MatRippleModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatPaginatorModule,
        UpdateFactorModule,
        SearchBarOneModule,
        FunnelFilterModule,
        EllipsisPipeModule
    ]
})
export class FactorModule { }
