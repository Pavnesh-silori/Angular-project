import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SearchBarTwoComponent implements OnInit {
    faTimes: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faSearch: import("@fortawesome/fontawesome-common-types").IconDefinition;
    searchFC: FormControl;
    type: string;
    searchBy: string;
    clear: boolean;
    emitSearch: EventEmitter<String>;
    active: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    searchFn(): void;
    searchReset(): void;
    searchClear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBarTwoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBarTwoComponent, "lib-search-bar-two", never, { "type": "type"; "searchBy": "searchBy"; "clear": "clear"; }, { "emitSearch": "emitSearch"; }, never, never>;
}
