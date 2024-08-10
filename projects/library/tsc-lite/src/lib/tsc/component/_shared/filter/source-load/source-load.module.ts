import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SourceLoadComponent } from './source-load.component';

@NgModule({
    declarations: [
        SourceLoadComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonToggleModule
    ],
    exports: [
        SourceLoadComponent
    ]
})
export class SourceLoadModule { }
