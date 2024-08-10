import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SideNavComponent } from './side-nav.component';

import { EllipsisPipeModule } from '../../../../service/ellipsis-pipe.service';

// tsc-library
import { RBACDirectiveModule2 } from '@library/rbac-service';
import { FeatureDirectiveModule2 } from '@library/feature-service';
// /tsc-library/

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        SideNavComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        PerfectScrollbarModule,
        MatIconModule,
        MatTooltipModule,
        RBACDirectiveModule2,
        FeatureDirectiveModule2,
        EllipsisPipeModule
    ],
    exports: [
        SideNavComponent
    ],
    providers: [
        {
            provide:
                PERFECT_SCROLLBAR_CONFIG,
            useValue:
                DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        }
    ]
})

export class SideNavModule { }