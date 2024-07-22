import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceRoutingModule } from './source-routing.module';
import { SourceComponent } from './source.component';

import { 
    FormsModule, 
    ReactiveFormsModule 
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { EllipsisPipeModule } from '@library/tsc-common'; 

@NgModule({
    declarations: [SourceComponent],
    imports: [
        CommonModule,
        SourceRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        EllipsisPipeModule
    ],
    exports: [SourceComponent],
})
export class SourceModule { }
