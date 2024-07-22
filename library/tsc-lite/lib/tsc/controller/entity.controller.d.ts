import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityWithChildrenM, EntityM, ParameterEntityM, EntityTypeM, DashboardEntitiesI } from '../model/entity.model';
import { StatusInfoM } from '../model/device.model';
import * as i0 from "@angular/core";
export declare class EntityController {
    private http;
    private environment;
    constructor(http: HttpClient, environment: any);
    getEntitiesHavingDevicesByOrgID(orgID: any): Observable<EntityM[]>;
    getEntityByID(orgID: any, layoutID: any, entityID: any): Observable<EntityM>;
    getConsumptionEntities(orgID: any): Observable<EntityWithChildrenM>;
    getEntitiesByParameterID(orgID: any, parameterID: any): Observable<ParameterEntityM[]>;
    getEntitiesByLayoutID(orgID: any, layoutID: any): Observable<ParameterEntityM[]>;
    getEntitiesWithDevicesByLayoutID(orgID: any, layoutID: any, requestBody: any, skipLoader: any): Observable<ParameterEntityM>;
    getEntitiesByEntityType(orgID: any, requestBody: any): Observable<EntityWithChildrenM>;
    getEntitiesByParamMetric(orgID: any, paramName: any): Observable<EntityM[]>;
    getEntityLevelConsumption(orgID: any, requestBody: any): Observable<Object>;
    getEntityTypeByLayoutID(orgID: any, skipLoader: any): Observable<EntityTypeM[]>;
    createEntity(orgID: any, layoutID: any, entityID: any, entity: any): Observable<Object>;
    updateEntity(orgID: any, layoutID: any, entityID: any, entity: any): Observable<Object>;
    deleteEntity(orgID: any, layoutID: any, entityID: any): Observable<Object>;
    getEntityStatusInfo(orgID: any): Observable<StatusInfoM>;
    getDashboardEntities(entityTypeFilterArr: any, orgID: any): Observable<DashboardEntitiesI[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityController>;
}
