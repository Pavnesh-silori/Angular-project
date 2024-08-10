import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSignUpComponent } from './user-sign-up.component';
import { UserSignUpRoutingModule } from './user-sign-up-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CropProfilePicDialog } from './dialog/crop-profile-image/crop-profileImg-dialog.component';

@NgModule({

    imports: [
        CommonModule,
        UserSignUpRoutingModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        NgxIntlTelInputModule,
        ImageCropperModule,
        MatRippleModule,
        MatDialogModule,
        MatStepperModule,
    ],
    declarations: [
        UserSignUpComponent,
        CropProfilePicDialog
    ],
})
export class UserSignUpModule { }
