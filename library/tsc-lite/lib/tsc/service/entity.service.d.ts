import { EntityM, EntityTreeM, EntityTypeM } from '../model/entity.model';
import { EntityController } from '../controller/entity.controller';
import * as i0 from "@angular/core";
export declare class EntityService {
    private entityController;
    constructor(entityController: EntityController);
    getEntitiesByOrgID(orgID: any): Promise<EntityM[]>;
    getEntityHierarchyByParameterID(orgID: any, parameterID: any): Promise<EntityTreeM[]>;
    getEntityTypeByLayoutID(orgID: any, skipLoader: any): Promise<EntityTypeM[]>;
    getEntitiesWithDevices(orgID: any, layoutID: any, requestBody: any, skipLoader: any): Promise<EntityTreeM>;
    getEntityByParameterID(orgID: any, requestBody: any): Promise<EntityM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityService>;
}
