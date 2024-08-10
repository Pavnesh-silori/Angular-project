import { EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Unit } from '../../../model/unit.model';
import { UnitService } from '../../../service/unit.service';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class UnitComponent implements OnInit {
    private storageService;
    private unitService;
    selectedParameterID: any;
    COMMON_CONSTANT: {
        PRIVACY: string;
        TERMS: string;
        PRICING: string;
        SUPPORT_EMAIL: string;
        HYPHEN: string;
        NO_DATA_FOUND: string;
        NO_DATA: string;
        EMAIL_PATTERN: string;
        ZIPCODE_PATTERN: string;
        GST_NUMBER_PATTERN: string;
        ALLOWED_IMAGE_TYPES: string[];
        MAX_IMAGE_SIZE: number;
    };
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    emitFilter: EventEmitter<any>;
    orgID: any;
    unitM: Unit[];
    selectedUnitFC: FormControl;
    unitSearchUtil: MatSelectSearchService;
    constructor(storageService: StorageService, unitService: UnitService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getUnitByParameterID(parameterID: any): Promise<void>;
    unitChange(selectedUnit: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnitComponent, "lib-unit", never, { "selectedParameterID": "selectedParameterID"; }, { "emitFilter": "emitFilter"; }, never, never>;
}
