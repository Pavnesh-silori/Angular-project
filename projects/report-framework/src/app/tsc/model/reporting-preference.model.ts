export interface ReportingPrefenceForReportDetailM {
    reportFrameworkKeyID: string;
    isEnabled: boolean;
    reportFrameworkID: number;
    reportFrameworkName: string;
    reportIntervalID: number;
    reportIntervalKeyID: string;
    sectorID: number;
    sectorName: string;
}
export class ReportingPrefenceForReportDetail implements ReportingPrefenceForReportDetailM {
    reportFrameworkKeyID;
    isEnabled;
    reportIntervalID;
    reportIntervalKeyID;
    reportFrameworkID;
    reportFrameworkName;
    sectorID;
    sectorName;
}

export interface ReportPreferenceM {
    reportingPreference: ReportingPreferenceM[];
}

export class ReportPreference implements ReportPreferenceM {
    reportingPreference;
}

export interface ReportingPreferenceM {
    reportingFrameworkKeyID: string;
    isEnabled: boolean;
    sectorID: number;
    reportingIntervalID: number;
}
