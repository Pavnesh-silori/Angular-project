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
    getEntityTypeByLayoutID(orgID: any): Observable<EntityTypeM[]>;
    getEntitiesWithDevices(orgID: any, layoutID: any, requestBody: any): Observable<EntityTreeM>;
    getEntityByParameterID(orgID: any, requestBody: any): Observable<EntityM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityController, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityController>;
}
