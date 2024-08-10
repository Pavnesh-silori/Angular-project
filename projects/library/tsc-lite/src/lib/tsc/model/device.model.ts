export interface DeviceM {
    id: number;
    name: string;
    sourceOrLoad: string;
    sourceLoadType: string;
    status: string;
}

export class Device implements DeviceM {
    id;
    name;
    sourceOrLoad;
    sourceLoadType;
    status;
}

export interface DeviceModel {
    id: number;
    name: string;
    sourceOrLoad: string;
    sourceLoadType: string;
}

export interface DevicesWithEntitiesM {
    id: number;
    name: string;
    type: string;
    devices: DeviceModel[];
}

export class DevicesWithEntities implements DevicesWithEntitiesM {
    id;
    name;
    type;
    devices;
}

export interface StatusInfoM {
    total: number;
    online: number;
    delay: number;
    offline: number;
}

export class StatusInfo implements StatusInfoM {
    total;
    online;
    delay;
    offline;
}

export interface DeviceMappingM {
    id: number;
    name: string;
    type: string;
    make: string;
    model: string;
    parameter: Array<{
        id: number;
        label: string;
    }>;
    mappingRecords: Array<{
        parameterID: number;
        parameterName: string;
        mapping: Array<{
            mappingID: number;
            type: string;
            value: number;
            name: string;
        }>;
    }>;
}

export class DeviceMapping implements DeviceMappingM {
    id;
    name;
    type;
    make;
    model;
    parameter;
    mappingRecords: { 
        parameterID: number;
        parameterName: string;
        mapping: { 
            mappingID: number;
            type: string;
            value: number;
            name: string;
        }[];
    }[];
}
