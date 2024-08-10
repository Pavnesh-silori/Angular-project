import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SourceCreateUpdateRoutingModule } from './create-update-routing.module';
import { SourceCreateUpdateComponent } from './create-update.component';


@NgModule({
    declarations: [
        SourceCreateUpdateComponent
    ],
    imports: [
        CommonModule,
        SourceCreateUpdateRoutingModule,

        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatOptionModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatDialogModule,

        NgbModule
    ]
})
export class SourceCreateUpdateModule { }
