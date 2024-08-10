import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Parameter } from '../../../../../model/parameter.model';
import { DeviceController } from '../../../../../controller/device.controller';
import { SourceService } from '../../../../../service/source.service';
import { ParameterService } from '../../../../../service/parameter.service';
import { MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormAction, PageTitleEnum, Static, StaticI, FormErrorEnum, TSCCommonService } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import * as i0 from "@angular/core";
export declare class SourceLoadComponent implements OnInit {
    dialogRef: MatDialogRef<SourceLoadComponent>;
    data: any;
    private sourceLoadFB;
    private deviceController;
    private sourceService;
    private storageService;
    private toastrService;
    private parameterService;
    private tscCommonService;
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
        SPECIAL_CHARACTERS_PATTERN: string;
        ALLOWED_IMAGE_TYPES: string[];
        DECIMAL_PATTERN: string;
        MAX_IMAGE_SIZE: number;
        ASIAN_KOLKATA: string;
        VIEW_API_KEY_ID: string;
        NO_MATCH_FOUND: string;
    };
    MaterialFormFieldAppearance: typeof MaterialFormFieldAppearance;
    ButtonLabelEnum: typeof ButtonLabelEnum;
    DialogEnum: typeof DialogEnum;
    FormActionEnum: typeof FormAction;
    PageTitleEnum: typeof PageTitleEnum;
    FormErrorEnum: typeof FormErrorEnum;
    orgID: any;
    layoutID: any;
    entityID: any;
    deviceInfo: any;
    deviceParameter: any;
    updateFromDialog: any;
    action: any;
    intialObject: any;
    isEqual: boolean;
    desiredMappingArray: any[];
    parameterM: Parameter[];
    paramLabel: any;
    sourceType: Static[];
    loadType: Static[];
    infoMessage: string;
    warningMessage: string;
    sourceLoadFG: FormGroup;
    constructor(dialogRef: MatDialogRef<SourceLoadComponent>, data: any, sourceLoadFB: FormBuilder, deviceController: DeviceController, sourceService: SourceService, storageService: StorageService, toastrService: ToastrService, parameterService: ParameterService, tscCommonService: TSCCommonService);
    ngOnInit(): void;
    getParameterByOrgID(): Promise<void>;
    getParameterLabel(paramID: any): any;
    getSourceConsumerType(type: string): Promise<StaticI[]>;
    sourceLoadFGInit(): void;
    addParameterToFormArray(param: any): void;
    get parameterMappingRecordFA(): FormArray;
    addSourceType(event: any, index: number): void;
    addLoadType(event: any, index: number): void;
    makeDesiredMappingArray(): any[];
    patchSourceLoadFG(): void;
    updateFormControlsState(): void;
    updateDesiredMappingArray(): any[];
    validateSourceOrLoad(): boolean;
    sourceLoadSubmit(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceLoadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SourceLoadComponent, "lib-source-load", never, {}, {}, never, never>;
}
