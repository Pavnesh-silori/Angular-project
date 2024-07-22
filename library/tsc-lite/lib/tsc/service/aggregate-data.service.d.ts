import { MeterDataI } from '../model/aggregate-data.model';
import { AggregateDataController } from '../controller/aggregate-data.controller';
import * as i0 from "@angular/core";
export declare class AggregateDataService {
    private aggregateDataController;
    constructor(aggregateDataController: AggregateDataController);
    getAggregateData(orgID: any, requestBody: any): Promise<any>;
    getMeterAggregateDataForReport(orgID: any, requestBody: any): Promise<MeterDataI[]>;
    getDeviceAggregateData(orgID: any, requestBody: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AggregateDataService>;
}
