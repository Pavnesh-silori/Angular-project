import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SourceRoutingModule } from './source-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

// import { AssetModule } from './asset/asset.module';
// import { SupplierModule } from './supplier/supplier.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        RoundProgressModule,
        FontAwesomeModule,
        SourceRoutingModule,
        MatTabsModule,
        // AssetModule,
        // SupplierModule
    ],
    declarations: [
    ]
})

export class SourceModule { }
