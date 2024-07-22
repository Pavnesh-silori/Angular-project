import { EntityM, ParameterEntityM, EntityTypeM } from '../model/entity.model';
import { EntityController } from '../controller/entity.controller';
import * as i0 from "@angular/core";
export declare class EntityService {
    private entityController;
    constructor(entityController: EntityController);
    getEntitiesHavingDevicesByOrgID(orgID: any): Promise<EntityM[]>;
    getEntitiesByParameterID(orgID: any, parameterID: any): Promise<ParameterEntityM[]>;
    getEntityTypeByLayoutID(orgID: any, skipLoader: any): Promise<EntityTypeM[]>;
    getEntitiesWithDevicesByLayoutID(orgID: any, layoutID: any, requestBody: any, skipLoader: any): Promise<ParameterEntityM>;
    getEntityByID(orgID: any, layoutID: any, entityID: any): Promise<EntityM>;
    getEntitiesByParamMetric(orgID: any, paramName: any): Promise<EntityM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityService>;
}
