import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';

import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ImageCropperModule } from 'ngx-image-cropper';

//tsc-libray
import { OrganizationServiceModule } from '@library/organization-service';
import { ProfileLogoUploadModule } from '@library/tsc-common';
// /tsc-library/

@NgModule({
    declarations: [
        EditComponent
    ],
    imports: [
        CommonModule,
        EditRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        NgxMatSelectSearchModule,
        ImageCropperModule,
        OrganizationServiceModule,
        ProfileLogoUploadModule
    ]
})
export class EditModule { }
