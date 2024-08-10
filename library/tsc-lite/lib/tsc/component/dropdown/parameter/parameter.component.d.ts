import { EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Parameter } from '../../../model/parameter.model';
import { ParameterService } from '../../../service/parameter.service';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, MatSelectSearchService } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ParameterComponent implements OnInit {
    private storageService;
    private parameterService;
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
    parameterM: Parameter[];
    selectedParameterFC: FormControl;
    parameterSearchUtil: MatSelectSearchService;
    constructor(storageService: StorageService, parameterService: ParameterService);
    ngOnInit(): void;
    getParameterByLayoutID(): Promise<void>;
    parameterChange(selectedParameter: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParameterComponent, "lib-parameter", never, {}, { "emitFilter": "emitFilter"; }, never, never>;
}
