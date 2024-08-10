import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersAndRolesRoutingModule } from './users-and-roles-routing.module';
import { UsersAndRolesComponent } from './users-and-roles.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        UsersAndRolesComponent
    ],
    imports: [
        CommonModule,
        UsersAndRolesRoutingModule,
        MatTabsModule
    ]
})
export class UsersAndRolesModule { }
