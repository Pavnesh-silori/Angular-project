import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ActivityConfigSelection } from './activity-config-selection';
import { ListModule } from '../list/list.module'; 

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        ListModule,
    ],
    declarations: [ 
        ActivityConfigSelection
    ],
    exports: [
        ActivityConfigSelection,
        MatDialogModule,
    ]
})

export class ActivityConfigSelectionModule { }
