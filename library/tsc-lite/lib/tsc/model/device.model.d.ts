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
export interface DeviceInfoM {
    total: number;
    online: number;
    delay: number;
    offline: number;
}
export declare class DeviceInfo implements DeviceInfoM {
    total: any;
    online: any;
    delay: any;
    offline: any;
}
