import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';

import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

//tsc-library
import { 
    TscCommonModule,
    ProfileLogoUploadModule
} from '@library/tsc-common';

import { StorageServiceModule } from '@library/storage-service';
import { ToastrServiceModule} from '@library/toastr-service';

import { OrganizationServiceModule } from '@library/organization-service';
import {  } from '@library/tsc-common';
// /tsc-library

// import { CropOrgLogoDialog } from './_dialog/crop-org-logo/crop-org-logo-dialog.component';

@NgModule({
    declarations: [
        SetupComponent,
        // CropOrgLogoDialog
    ],
    imports: [
        CommonModule,
        SetupRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        MatCardModule,
        NgxMatSelectSearchModule,
        // ImageCropperModule,
        StorageServiceModule,
        ToastrServiceModule,
        TscCommonModule,
        OrganizationServiceModule,
        ProfileLogoUploadModule
    ]
})
export class SetupModule { }
