import { Injectable } from '@angular/core';

import { Entity, EntityM, ParameterEntity, ParameterEntityM, EntityType, EntityTypeM } from '../model/entity.model';

import { EntityController } from '../controller/entity.controller';

@Injectable({
    providedIn: 'root'
})

export class EntityService {

    constructor(
        private entityController: EntityController
    ) { }

    async getEntitiesHavingDevicesByOrgID(orgID): Promise<EntityM[]> {
        let entityM: EntityM[];
        try {
            entityM = await this.entityController.getEntitiesHavingDevicesByOrgID(orgID).toPromise();

            if (entityM) {
                return entityM;
            } else {
                return [new Entity()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Entity()];
        }
    }

    async getEntitiesByParameterID(orgID, parameterID): Promise<ParameterEntityM[]> {
        let entityTreeM: ParameterEntityM[];
        try {
            entityTreeM = await this.entityController.getEntitiesByParameterID(orgID, parameterID).toPromise();

            if (entityTreeM) {
                return entityTreeM;
            } else {
                return [new ParameterEntity()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new ParameterEntity()];
        }
    }

    async getEntityTypeByLayoutID(orgID, skipLoader): Promise<EntityTypeM[]> {
        let entityTypeM: EntityTypeM[];
        try {
            entityTypeM = await this.entityController.getEntityTypeByLayoutID(orgID, skipLoader).toPromise();

            if (entityTypeM) {
                return entityTypeM;
            } else {
                return [new EntityType()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new EntityType()];
        }
    }

    async getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader): Promise<ParameterEntityM> {
        let entityDeviceM: ParameterEntityM;
        try {
            entityDeviceM = await this.entityController.getEntitiesWithDevicesByLayoutID(orgID, layoutID, requestBody, skipLoader).toPromise();

            if (entityDeviceM) {
                return entityDeviceM;
            } else {
                return new ParameterEntity();
            }
        } catch (error) {
            console.error('Error -', error);
            return new ParameterEntity();
        }
    }

    async getEntityByID(orgID, layoutID, entityID): Promise<EntityM> {
        let layoutM: EntityM;
        try {
            layoutM = await this.entityController.getEntityByID(orgID, layoutID, entityID).toPromise();

            if (layoutM) {
                return layoutM;
            } else {
                return new Entity();
            }
        } catch (error) {
            console.error('Error -', error);
            return new Entity();
        }
    }

    async getEntitiesByParamMetric(orgID, paramName): Promise<EntityM[]> {
        let entityM: EntityM[];
        try {
            entityM = await this.entityController.getEntitiesByParamMetric(orgID, paramName).toPromise();

            if (entityM) {
                return entityM;
            } else {
                return [new Entity()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Entity()];
        }
    }

}