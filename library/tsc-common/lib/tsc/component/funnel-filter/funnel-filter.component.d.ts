import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/card";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/material/form-field";
import * as i8 from "ngx-mat-select-search";
import * as i9 from "@angular/material/slide-toggle";
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/material/core";
import * as i12 from "@angular/material/button";
export declare class FunnelFilterComponent implements OnInit {
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    view: string;
    value: string;
    type: any;
    entityList: any;
    selectFC: FormControl;
    header: string;
    headerWidth: number;
    width: number;
    active: boolean;
    all_entities_length: number;
    mono: EventEmitter<any>;
    multi: EventEmitter<any>;
    selected: EventEmitter<any>;
    filterFC: FormControl;
    filterUnsubscribe: Subject<void>;
    filtered: ReplaySubject<any[]>;
    constructor();
    ngOnInit(): void;
    init: boolean;
    all_entities_value: any[];
    ngOnChanges(change: SimpleChanges): void;
    addAllEntities(): void;
    selectionChange(value: any): void;
    selectedEntity(entity: any): void;
    prev: any;
    multiFilterApplied: boolean;
    resetOnNoChange(event: any): void;
    selected_entities: Set<any>;
    selectEntity(entity: any): void;
    applyFilter(): void;
    selectAllEntities(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FunnelFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FunnelFilterComponent, "funnel-filter", never, { "view": "view"; "value": "value"; "type": "type"; "entityList": "entityList"; "selectFC": "selectFC"; "header": "header"; "headerWidth": "headerWidth"; "width": "width"; "active": "active"; }, { "mono": "mono"; "multi": "multi"; "selected": "selected"; }, never, never>;
}
export declare class FunnelFilterModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FunnelFilterModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FunnelFilterModule, [typeof FunnelFilterComponent], [typeof i1.CommonModule, typeof i2.FormsModule, typeof i2.ReactiveFormsModule, typeof i3.MatCardModule, typeof i4.MatInputModule, typeof i5.MatSelectModule, typeof i6.MatRadioModule, typeof i7.MatFormFieldModule, typeof i8.NgxMatSelectSearchModule, typeof i9.MatSlideToggleModule, typeof i10.MatCheckboxModule, typeof i11.MatRippleModule, typeof i5.MatSelectModule, typeof i12.MatButtonModule], [typeof FunnelFilterComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FunnelFilterModule>;
}
