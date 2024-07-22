export interface ReportingFrameworkDataM {
    controlTypeKey: string;
    controlNameKey: string;
    layoutKey: string;
    label: string;
    placeHolder: string;
    metricStdID: number;
    groupStdID: number;
    type: number;
    value: string;
    serialNumber: number;
    inputTypeKey: number;
    children: ChildDataM[];
}

export class ReportingFrameworkData implements ReportingFrameworkDataM {
    controlTypeKey;
    controlNameKey;
    layoutKey;
    label;
    placeHolder;
    metricStdID;
    groupStdID;
    type;
    value;
    serialNumber;
    inputTypeKey;
    children;
}

export interface ChildDataM {
    inputTypeKey: string;
    controlNameKey: string;
    label: string;
    placeHolder: string;
    metricStdID: number;
    groupStdID: number;
    value: string[],
    columns: ChildDataM
}

export interface AuditTrailM{
    sectionName: string;
    groupName: string;
    msgTrail: msgTrailDataM[];
}

export class AuditTrail implements AuditTrailM{
    sectionName;
    groupName;
    msgTrail;
}
export interface msgTrailDataM{
    firstName: string;
    lastName: string;
    profileImgUrl: string;
    message: string;
}