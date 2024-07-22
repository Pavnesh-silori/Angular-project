import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ActivitySelectionModule } from '../activity-selection/activity-selection.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//tsc-lib
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
//tsc-lib /
@NgModule({
    imports: [
        CommonModule,
        ListRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatSortModule,
        MatRippleModule,
        MatTooltipModule,
        MatSelectModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        SearchBarOneModule,
        FunnelFilterModule,
        ActivitySelectionModule
    ],
    declarations: [ListComponent],
    exports: [ListComponent]
})

export class ListModule { }
