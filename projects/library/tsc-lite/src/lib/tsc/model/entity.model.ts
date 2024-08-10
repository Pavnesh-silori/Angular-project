export interface EntityM {
    id: number;
    name: string;
    type: string;
}

export class Entity implements EntityM {
    id;
    name;
    type;
}

export interface ChildEntity {
    id: number;
    name: string;
    type: string;
    children: ChildEntity[];
}

export interface ParameterEntityM {
    id: number;
    name: string;
    type: string;
    isParameterExists: boolean;
    children: ChildEntity[];
}

export class ParameterEntity implements ParameterEntityM {
    id;
    name;
    type;
    isParameterExists;
    children;
}

export interface EntityWithChildrenM {
    id: number;
    name: string;
    type: string;
    entityStatusFlag: boolean;
    children: ChildEntity[];
}

export class EntityWithChildren implements EntityWithChildrenM {
    id = null;
    name = null;
    type = null;
    entityStatusFlag = false;
    children = [];
}

export interface EntityLevelConsumptionM {
    id: number;
    name: string;
    value: number;
    unit: string;
}

export class EntityLevelConsumption implements EntityLevelConsumptionM {
    id;
    name;
    value;
    unit;
}

export interface EntityTypeM {
    type: string;
}

export class EntityType implements EntityTypeM {
    type = null;
}

export interface DashboardEntitiesI {
    id: number;
    name: string;
    type: string;
    status: string;
}

export class DashboardEntities implements DashboardEntitiesI {
    id = null;
    name = null;
    type = null;
    status = null;
}