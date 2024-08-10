import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { UpdateComponent } from './update.component';
import { UpdateRoutingModule } from './update-routing.module';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewProfilePicDialog } from './dialog/view-profile-pic-dialog/view-update-profileImg-dialog.component';

import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        RoundProgressModule,
        UpdateRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTooltipModule,
        MatSlideToggleModule,
        ImageCropperModule,
        MatRippleModule,
        MatDialogModule,
        NgxIntlTelInputModule
    ],
    declarations: [
        UpdateComponent,
        ViewProfilePicDialog,
        DeleteDialogComponent
    ]
})

export class UpdateModule { }
