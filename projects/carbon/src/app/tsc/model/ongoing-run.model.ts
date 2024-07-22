export interface PageM {
    id: number;
    runID:number;
    productName: string;
    periodStartDate: string;
    periodEndDate: string;
    runStatus: string;
    totalSEE: number;
    seeUnitName: string;
    lockStatus: number;
}

export class Page implements PageM {
    id;
    runID;
    productName;
    periodStartDate;
    periodEndDate;
    runStatus;
    totalSEE;
    seeUnitName;
    lockStatus;
}

export interface OngoingRunM {
    totalCount: number;
    records: PageM[]
}

export class RunHistory implements OngoingRunM {
    totalCount;
    records;
}

export interface RunStatusM {
    id: number;
    name: string;
}
export interface FailedDetailsM {
    errorNumber: number,
    recordID: number,
    activityType: string,
    errorName: string,
    correctiveAction: string
}
export class FailedDetails implements FailedDetailsM{
    errorNumber;
    recordID;
    activityType;
    errorName;
    correctiveAction;
}
export interface FailedRunM {
    totalCount: number;
    records: FailedDetailsM[]
}
export class FailedRun implements FailedRunM{
    totalCount;
    records;
    
}