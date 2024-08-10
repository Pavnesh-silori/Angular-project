import { NgModule } from "@angular/core";

import { OptionSearchComponent } from "./option-search.component";

import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";

import { MatSelectModule } from "@angular/material/select";

import { NgxMatSelectSearchModule } from "ngx-mat-select-search";

@NgModule({
    declarations: [OptionSearchComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
    ],
    exports: [OptionSearchComponent]
})
export class OptionSearchModule { }