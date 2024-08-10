import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        ChangePasswordRoutingModule,
        MatCardModule,
        MatDialogModule
    ]
})
export class ChangePasswordModule { }
