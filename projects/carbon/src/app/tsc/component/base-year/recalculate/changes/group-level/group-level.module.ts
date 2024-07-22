import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupLevelRoutingModule } from './group-level-routing.module';
import { GroupLevelChangeComponent } from './group-level.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        GroupLevelChangeComponent
    ],
    imports: [
        CommonModule,
        GroupLevelRoutingModule,
        MatDialogModule,
        MatButtonModule,
    ]
})
export class GroupLevelChangeModule { }
