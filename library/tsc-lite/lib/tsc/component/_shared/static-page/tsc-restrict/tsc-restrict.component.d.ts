import { OnInit } from '@angular/core';
import { SavedConsumptionParameter } from '../../../../model/parameter.model';
import { ParameterService } from '../../../../service/parameter.service';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class TscRestrictComponent implements OnInit {
    private storageService;
    private parameterService;
    orgID: any;
    layoutID: any;
    consumptionParameter: SavedConsumptionParameter[];
    setLayoutRedirectUrl: string;
    setConsumptionRedirectUrl: string;
    constructor(storageService: StorageService, parameterService: ParameterService);
    ngOnInit(): void;
    getSavedConsumptionParameter(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TscRestrictComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TscRestrictComponent, "lib-tsc-restrict", never, {}, {}, never, never>;
}
