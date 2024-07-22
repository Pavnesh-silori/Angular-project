export interface DeviceM {
    id: number;
    name: string;
    sourceOrLoad: string;
    sourceLoadType: string;
    status: string;
}
export declare class Device implements DeviceM {
    id: any;
    name: any;
    sourceOrLoad: any;
    sourceLoadType: any;
    status: any;
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
export declare class DevicesWithEntities implements DevicesWithEntitiesM {
    id: any;
    name: any;
    type: any;
    devices: any;
}
export interface StatusInfoM {
    total: number;
    online: number;
    delay: number;
    offline: number;
}
export declare class StatusInfo implements StatusInfoM {
    total: any;
    online: any;
    delay: any;
    offline: any;
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
export declare class DeviceMapping implements DeviceMappingM {
    id: any;
    name: any;
    type: any;
    make: any;
    model: any;
    parameter: any;
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
