import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EllipsisPipeModule } from '@library/tsc-common';
import { SearchBarOneModule } from '@library/tsc-common'; 
// import { ConfirmDialogModule } from '@EnterpriseNetZero/common/dialog/confirm-dialog/confirm-dialog.module';
import { CreateDatabaseModule } from '../../dialog/create-update-database/create-update-database-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [ DatabaseComponent ],
    imports: [
        CommonModule,
        DatabaseRoutingModule,
        NgbModule,
        FontAwesomeModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        // ConfirmDialogModule,
        CreateDatabaseModule,
        MatDialogModule
    ]
})
export class DatabaseModule { }
