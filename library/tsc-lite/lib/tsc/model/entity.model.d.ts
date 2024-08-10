export interface EntityM {
    id: number;
    name: string;
    type: string;
}
export declare class Entity implements EntityM {
    id: any;
    name: any;
    type: any;
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
export declare class ParameterEntity implements ParameterEntityM {
    id: any;
    name: any;
    type: any;
    isParameterExists: any;
    children: any;
}
export interface EntityWithChildrenM {
    id: number;
    name: string;
    type: string;
    entityStatusFlag: boolean;
    children: ChildEntity[];
}
export declare class EntityWithChildren implements EntityWithChildrenM {
    id: any;
    name: any;
    type: any;
    entityStatusFlag: boolean;
    children: any[];
}
export interface EntityLevelConsumptionM {
    id: number;
    name: string;
    value: number;
    unit: string;
}
export declare class EntityLevelConsumption implements EntityLevelConsumptionM {
    id: any;
    name: any;
    value: any;
    unit: any;
}
export interface EntityTypeM {
    type: string;
}
export declare class EntityType implements EntityTypeM {
    type: any;
}
export interface DashboardEntitiesI {
    id: number;
    name: string;
    type: string;
    status: string;
}
export declare class DashboardEntities implements DashboardEntitiesI {
    id: any;
    name: any;
    type: any;
    status: any;
}
