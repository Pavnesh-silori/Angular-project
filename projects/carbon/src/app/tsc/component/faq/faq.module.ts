import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        CommonModule,
        FaqRoutingModule,
        MatExpansionModule
    ],
    declarations: [FaqComponent],
})

export class FaqModule { }
