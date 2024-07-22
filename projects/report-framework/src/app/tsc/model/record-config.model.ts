export interface RecordConfigM {
    id: number,
    name: string
    reportingFrameworkID: number,
    startDate: string,
    endDate: string,
    reportingInterval: string,
    reportingPreferenceID: number,
    reportingIntervalKeyID: string,
    reportingIntervalName: string
}

export class RecordConfig implements RecordConfigM {
    id;
    name;
    reportingFrameworkID;
    startDate;
    endDate;
    reportingInterval;
    reportingPreferenceID;
    reportingIntervalKeyID;
    reportingIntervalName;
}

export interface RecordConfigPageM {
    id: number,
    name: string,
    reportingFrameworkID: number,
    reportingFrameworkName: string,
    reportingInterval: string,
    reportingYear: string
}

export class RecordConfigPage implements RecordConfigPageM {
    id;
    name;
    reportingFrameworkID;
    reportingFrameworkName;
    reportingInterval;
    reportingYear;
}
