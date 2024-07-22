export interface RecordConfigIntervalM {
    configIntervalID: number,
    configIntervalName: string
    reportingFrameworkID: number,
    reportingFrameworkKeyID: number,
    reportingFrameworkName: string,
    reportingPeriod: string,
    intervalName: string,
    frameworkSector: string,
    status: string,
    unassignedMetric: number,
    totalMetric: number,
    progressPct: number
}

export class RecordConfigInterval implements RecordConfigIntervalM {
    configIntervalID;
    configIntervalName;
    reportingFrameworkID;
    reportingFrameworkKeyID;
    reportingFrameworkName;
    reportingPeriod;
    intervalName;
    frameworkSector;
    status;
    unassignedMetric;
    totalMetric;
    progressPct;
}
