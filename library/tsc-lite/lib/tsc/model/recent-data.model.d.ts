export interface RecentDataRequestWithParamM {
    params: Array<{
        name: string;
    }>;
    deviceID: number[];
    includeDescendants: boolean;
    timezone: string;
    entityType: string;
    backscan: number;
}
export declare class RecentDataRequestWithParam implements RecentDataRequestWithParamM {
    params: any;
    deviceID: any;
    includeDescendants: boolean;
    timezone: any;
    entityType: any;
    backscan: any;
}
export interface RecentDataRequestWithoutParamM {
    entityID: number[];
    timezone: string;
    backscan: number;
}
export declare class RecentDataRequestWithoutParam implements RecentDataRequestWithoutParamM {
    entityID: any;
    timezone: any;
    backscan: any;
}
export interface ParamData {
    name: string;
    label: string;
    unit: string;
    data: {
        date: string;
        value: number;
    };
}
export interface DeviceData {
    id: number;
    name: string;
    status: string;
    paramData: ParamData[];
}
export interface OrgRecentDataM {
    orgID: number;
    entityID: number;
    entityName: string;
    entityType: string;
    deviceData: DeviceData[];
}
export declare class OrgRecentData implements OrgRecentDataM {
    orgID: any;
    entityID: any;
    entityName: any;
    entityType: any;
    deviceData: any;
}
