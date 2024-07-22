import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateHomeRoutingModule } from './create-home-routing.module';
import { CreateHomeComponent } from './create-home.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { NearTermModule as EnterpriseNearTermModule } from '../near-term/near-term.module';
import { LongTermModule as EnterpriseLongTermModule } from '../long-term/long-term.module';

@NgModule({
    declarations: [
        CreateHomeComponent
    ],
    imports: [
        CommonModule,
        CreateHomeRoutingModule,
        MatTooltipModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        EnterpriseNearTermModule,
        EnterpriseLongTermModule
    ]
})
export class CreateHomeModule { }
