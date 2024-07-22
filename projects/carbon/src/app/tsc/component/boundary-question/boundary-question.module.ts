import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoundaryQuestionRoutingModule } from './boundary-question-routing.module';
import { BoundaryQuestionComponent } from './boundary-question.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        BoundaryQuestionComponent
    ],
    imports: [
        CommonModule,
        BoundaryQuestionRoutingModule,
        MatCardModule,
        MatRadioModule,
        MatExpansionModule,
        ReactiveFormsModule
    ]
})
export class BoundaryQuestionModule { }
