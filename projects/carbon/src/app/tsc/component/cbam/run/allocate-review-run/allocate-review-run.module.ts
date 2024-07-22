import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllocateReviewRunRoutingModule } from './allocate-review-run-routing.module';
import { AllocateReviewRunComponent } from './allocate-review-run.component';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageAlertModule } from '@library/tsc-common';

import { ShowResultModule } from '../show-result/show-result.module';
import { FailedRunModule } from '../failed-run/failed-run.module';

@NgModule({
    declarations: [
        AllocateReviewRunComponent
    ],
    imports: [
        CommonModule,
        AllocateReviewRunRoutingModule,
        MatExpansionModule,
        MatCardModule,
        MatRadioModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MessageAlertModule,
        MatOptionModule,
        MatSelectModule,

        ShowResultModule,
        FailedRunModule
    ],
    exports: [AllocateReviewRunComponent]
})

export class AllocateReviewRunModule { }
