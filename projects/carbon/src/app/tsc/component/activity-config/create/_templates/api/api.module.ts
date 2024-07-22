import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ApiComponent } from "./api.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";

import { ClipboardModule } from '@angular/cdk/clipboard';

import { NgxMatSelectSearchModule } from "ngx-mat-select-search";

@NgModule({
    declarations: [ApiComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
        MatSlideToggleModule,
        ClipboardModule,
        MatTooltipModule,
    ],
    exports: [ApiComponent]
})
export class ApiModule { }

