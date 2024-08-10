import { AggregateDataController } from '../controller/aggregate-data.controller';
import * as i0 from "@angular/core";
export declare class AggregateDataService {
    private aggregateDataController;
    constructor(aggregateDataController: AggregateDataController);
    getAggregateData(orgID: any, requestBody: any): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AggregateDataService>;
}
