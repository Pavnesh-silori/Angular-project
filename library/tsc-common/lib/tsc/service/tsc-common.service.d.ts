import { Location } from '@angular/common';
import * as i0 from "@angular/core";
export declare class TSCCommonService {
    private location;
    constructor(location: Location);
    nullToBlank(value: any): any;
    back(): void;
    formatLargeNumber(value: any, roundOff: any, decimalPlace: any): string;
    removeSelectAllID(arr: any[]): any[];
    getUniqueObject(objList: any[], key: string, value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TSCCommonService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TSCCommonService>;
}
