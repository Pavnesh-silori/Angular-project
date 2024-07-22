import { ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { SourceConsumerPage } from '../../../../model/source-consumer.model';
import { ConsumerController } from '../../../../controller/consumer.controller';
import { SourceService } from '../../../../service/source.service';
import { ButtonTooltipEnum, SearchBarOneComponent, FormAction, FunnelFilterComponent } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ConsumerPageComponent implements OnInit {
    private dialog;
    private storageService;
    private sourceService;
    private consumerController;
    faPlus: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faEllipsisV: import("@fortawesome/fontawesome-common-types").IconDefinition;
    MATERIAL_CONSTANT: {
        MAT_RIPPLE_CENTER: boolean;
    };
    TABLE_CONSTANT: {
        TABLE_NO_DATA: string;
        DEFAULT_PAGE_SIZE: number;
        PAGE_SIZE_OPTION: number[];
    };
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
    ButtonTooltipEnum: typeof ButtonTooltipEnum;
    FormAction: typeof FormAction;
    searchByPlaceHolder: string;
    orgID: any;
    utilitySourceI: any;
    dataSource: SourceConsumerPage[];
    dataSourceLength: number;
    displayedColumn: string[];
    searchFlag: boolean;
    searchValue: string;
    searchFC: FormControl;
    utilitySource: boolean;
    utilitySourceFC: FormControl;
    filterArr: Array<string>;
    sort: MatSort;
    paginator: MatPaginator;
    refreshBtn: ElementRef;
    searchBar: SearchBarOneComponent;
    typeSelect: FunnelFilterComponent;
    constructor(dialog: MatDialog, storageService: StorageService, sourceService: SourceService, consumerController: ConsumerController);
    ngOnInit(): void;
    getUtilitySourceAndType(): Promise<void>;
    ngAfterViewInit(): void;
    searchFn(value: string): void;
    resetSearch(): void;
    createConsumer(action: string): void;
    updateConsumer: (action: any, row: any) => void;
    openDeleteDialog(consumer: any): void;
    deleteConsumerType(consumerID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConsumerPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConsumerPageComponent, "lib-page", never, {}, {}, never, never>;
}
