import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateRoutingModule } from './preview-routing.module';
import { PreviewComponent } from './preview.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { EllipsisPipeModule } from '@library/tsc-common';

@NgModule({
    declarations: [
        PreviewComponent,
    ],
    imports: [
        CommonModule,
        CreateRoutingModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatTooltipModule,
        EllipsisPipeModule,
    ],
    exports: [ PreviewComponent ]
})
export class PreviewModule { }
