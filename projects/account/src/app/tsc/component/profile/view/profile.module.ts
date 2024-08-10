import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        RoundProgressModule,
        ProfileRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatTooltipModule,
    ],
})

export class ProfileModule { }
