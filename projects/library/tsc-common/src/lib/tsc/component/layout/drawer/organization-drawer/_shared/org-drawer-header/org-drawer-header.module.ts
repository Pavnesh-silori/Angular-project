import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { OrgDrawerHeaderComponent } from './org-drawer-header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        OrgDrawerHeaderComponent,
    ],
    imports: [
        NgbModule,
        BrowserModule,
        FontAwesomeModule
    ],
    exports: [
        OrgDrawerHeaderComponent
    ]
})

export class OrgDrawerHeaderModule { }
