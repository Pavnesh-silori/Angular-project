export interface RegulatorTypeI {
    id: number;
    name: string;
}
export declare class RegulatorType implements RegulatorTypeI {
    id: any;
    name: any;
}
export interface RegulatorsEntitiesI {
    regulator: {
        id: number;
        name: string;
    };
    entity: {
        id: number;
        name: string;
    };
    status: string;
}
export declare class RegulatorsEntities implements RegulatorsEntitiesI {
    regulator: {
        id: any;
        name: any;
    };
    entity: {
        id: any;
        name: any;
    };
    status: any;
}
