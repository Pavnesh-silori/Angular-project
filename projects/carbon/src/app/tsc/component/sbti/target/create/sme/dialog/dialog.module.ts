import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [DialogComponent],
    imports: [
        CommonModule,
        DialogRoutingModule,
        MatGridListModule,
        FontAwesomeModule,
        MatIconModule,
        NgbModule,
        MatTooltipModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class DialogModule { }
