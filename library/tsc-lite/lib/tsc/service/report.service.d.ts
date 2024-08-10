import { DateService } from "@library/date";
import * as i0 from "@angular/core";
export declare class ReportService {
    private dateService;
    constructor(dateService: DateService);
    extractTimestamp(dataInp: any): unknown[];
    populateTable(timestamp: any, dataInp: any, format: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportService>;
}
