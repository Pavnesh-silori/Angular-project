import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    imports: [
        CommonModule,
        SidebarRoutingModule,
        MatSidenavModule
    ],
    exports: [SidebarComponent]
})

export class SidebarModule { }
