export interface RecentDataRequestWithParamM {
    params: Array<{
        name: string;
    }>,
    deviceID: number[];
    includeDescendants: boolean;
    timezone: string;
    entityType: string;
    backscan: number;
}

export class RecentDataRequestWithParam implements RecentDataRequestWithParamM {
    params = null;
    deviceID = null;
    includeDescendants = false;
    timezone = null;
    entityType = null;
    backscan = null;
}

export interface RecentDataRequestWithoutParamM {
    entityID: number[];
    timezone: string;
    entityType: string;
    backscan: number;
}

export class RecentDataRequestWithoutParam implements RecentDataRequestWithoutParamM {
    entityID = null;
    timezone = null;
    entityType = null;
    backscan = null;
}

export interface ParamData {
    name: string;
    label: string;
    unit: string;
    data: {
        date: string;
        value: number;
    };
    status: string;
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
    entityStatusFlag: boolean;
    deviceData: DeviceData[];
}

export class OrgRecentData implements OrgRecentDataM {
    orgID = null;
    entityID = null;
    entityName = null;
    entityType = null;
    entityStatusFlag = false;
    deviceData = null;
}

export interface DeviceRecentDataM {
    deviceID: number;
    deviceName: string;
    status: string;
    paramData: ParamData[];
}

export class DeviceRecentData implements DeviceRecentDataM {
    deviceID = null;
    deviceName = null;
    status = null;
    paramData = [];
}