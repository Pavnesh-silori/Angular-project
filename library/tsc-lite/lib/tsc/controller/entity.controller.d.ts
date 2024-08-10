import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityM, EntityTreeM, EntityTypeM } from '../model/entity.model';
import * as i0 from "@angular/core";
export declare class EntityController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getEntitiesByOrgID(orgID: any): Observable<EntityM[]>;
    getEntityHierarchyByParameterID(orgID: any, parameterID: any): Observable<EntityTreeM[]>;
    getEntityLevelConsumption(orgID: any, requestBody: any): Observable<Object>;
    getEntityTypeByLayoutID(orgID: any, skipLoader: any): Observable<EntityTypeM[]>;
    getEntitiesWithDevices(orgID: any, layoutID: any, requestBody: any, skipLoader: any): Observable<EntityTreeM>;
    getEntityByParameterID(orgID: any, requestBody: any): Observable<EntityM[]>;
    getEntitiesForTreeView(orgID: any, layoutID: any): Observable<EntityTreeM[]>;
    getEntityByID(orgID: any, layoutID: any, entityID: any): Observable<EntityM>;
    createEntity(orgID: any, layoutID: any, entityID: any, entity: any): Observable<Object>;
    updateEntity(orgID: any, layoutID: any, entityID: any, entity: any): Observable<Object>;
    deleteEntity(orgID: any, layoutID: any, entityID: any): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityController>;
}
