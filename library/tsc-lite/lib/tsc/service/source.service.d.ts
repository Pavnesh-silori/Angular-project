import { UtilitySourceTypeM } from '../model/source-consumer.model';
import { SourceController } from '../controller/source.controller';
import { StaticI } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class SourceService {
    private sourceController;
    constructor(sourceController: SourceController);
    getUtilitySourceAndType(orgID: any): Promise<UtilitySourceTypeM>;
    getSourceConsumerType(orgID: any, type: any): Promise<StaticI[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceService>;
}
