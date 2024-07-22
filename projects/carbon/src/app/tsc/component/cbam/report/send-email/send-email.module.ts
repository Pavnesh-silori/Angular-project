import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SendEmailRoutingModule } from './send-email-routing.module';
import { SendEmailComponent } from './send-email.component';

import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        SendEmailComponent
    ],
    imports: [
        CommonModule,
        SendEmailRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatChipsModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule
    ],
    exports:[
        SendEmailComponent
    ]
})
export class SendEmailModule { }
