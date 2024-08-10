import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarOneComponent } from './search-bar-one.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        SearchBarOneComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
    ],
    exports: [SearchBarOneComponent]
})
export class SearchBarOneModule { }