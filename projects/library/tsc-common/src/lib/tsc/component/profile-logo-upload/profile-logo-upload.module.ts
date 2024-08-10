import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ImageCropperModule } from 'ngx-image-cropper';

import { ProfileLogoUploadComponent } from './profile-logo-upload.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [
        ProfileLogoUploadComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        ImageCropperModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ],
    exports: [
        ProfileLogoUploadComponent
    ]
})
export class ProfileLogoUploadModule { }
