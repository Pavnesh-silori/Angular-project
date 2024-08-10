import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SearchBarOneComponent implements OnInit {
    faTimes: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSearch: import("@fortawesome/fontawesome-common-types").IconDefinition;
    searchFC: FormControl;
    type: string;
    searchBy: string;
    clear: boolean;
    emitValueOnChange: boolean;
    emitSearch: EventEmitter<String>;
    active: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    searchFn(): void;
    searchReset(): void;
    searchClear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBarOneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBarOneComponent, "lib-search-bar-one", never, { "type": "type"; "searchBy": "searchBy"; "clear": "clear"; "emitValueOnChange": "emitValueOnChange"; }, { "emitSearch": "emitSearch"; }, never, never>;
}
