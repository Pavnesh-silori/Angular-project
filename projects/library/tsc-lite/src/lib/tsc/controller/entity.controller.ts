import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { EntityWithChildrenM, EntityM, ParameterEntityM, EntityTypeM, DashboardEntitiesI } from '../model/entity.model';
import { StatusInfoM } from '../model/device.model';

@Injectable({
    providedIn: 'root'
})

export class EntityController {

    constructor(
        private http: HttpClient,
        @Inject('environment') private environment: any
    ) { }

    getEntitiesHavingDevicesByOrgID(orgID): Observable<EntityM[]> {
        return this.http.get<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-having-devices`);
    }

    getEntityByID(orgID, layoutID, entityID): Observable<EntityM> {
        return this.http.get<EntityM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
    }

    getConsumptionEntities(orgID): Observable<EntityWithChildrenM> {
        return this.http.get<EntityWithChildrenM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/consumption-entities`);
    }

    getEntitiesByParameterID(orgID, parameterID): Observable<ParameterEntityM[]> {
        return this.http.get<ParameterEntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters/${parameterID}/entities`);
    }

    getEntitiesByLayoutID(orgID, layoutID): Observable<ParameterEntityM[]> {
        return this.http.get<ParameterEntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities`);
    }

    getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader): Observable<ParameterEntityM> {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);

        return this.http.post<ParameterEntityM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entity-device`, requestBody, { headers: headers });
    }

    getEntitiesByEntityType(orgID, requestBody): Observable<EntityWithChildrenM> {
        return this.http.post<EntityWithChildrenM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity-type/entities`, requestBody);
    }

    getEntitiesByParamMetric(orgID, paramName): Observable<EntityM[]> {
        let params = new HttpParams();
        params = params.append('paramName', paramName);

        return this.http.get<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameter-entities`, { params: params });
    }

    getEntityLevelConsumption(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/load-consumption`, requestBody);
    }

    getEntityTypeByLayoutID(orgID, skipLoader): Observable<EntityTypeM[]> {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);

        return this.http.get<EntityTypeM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/type`, { headers: headers });
    }

    createEntity(orgID, layoutID, entityID, entity) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/add-child`, entity);
    }

    updateEntity(orgID, layoutID, entityID, entity) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`, entity);
    }

    deleteEntity(orgID, layoutID, entityID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
    }

    getEntityStatusInfo(orgID): Observable<StatusInfoM> {
        return this.http.get<StatusInfoM>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/status`);
    }

    getDashboardEntities(entityTypeFilterArr, orgID): Observable<DashboardEntitiesI[]> {
        let params = new HttpParams();
        entityTypeFilterArr.forEach(filter => params = params.append('filter', filter));

        return this.http.get<DashboardEntitiesI[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/dashboard/entities`, { params: params });
    }
}
