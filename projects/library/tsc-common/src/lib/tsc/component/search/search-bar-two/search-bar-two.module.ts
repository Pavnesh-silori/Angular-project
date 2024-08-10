import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarTwoComponent } from './search-bar-two.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        SearchBarTwoComponent
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
    exports: [SearchBarTwoComponent]
})
export class SearchBarTwoModule { }
