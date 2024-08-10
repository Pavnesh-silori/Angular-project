export interface RegulatorTypeI {
    id: number;
    name: string;
}

export class RegulatorType implements RegulatorTypeI {
    id;
    name;
}

export interface RegulatorsEntitiesI {
    regulator: {
        id: number,
        name: string
    };
    entity: {
        id: number,
        name: string
    };
    status: string;
}

export class RegulatorsEntities implements RegulatorsEntitiesI {
    regulator = {
        id: null,
        name: null
    };
    entity = {
        id: null,
        name: null
    };
    status = null;
}