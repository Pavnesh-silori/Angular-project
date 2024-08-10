import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonComponent } from './skeleton.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
    declarations: [SkeletonComponent],
    imports: [
        NgxSkeletonLoaderModule.forRoot(),
        CommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [SkeletonComponent]
})

export class SkeletonModule { }