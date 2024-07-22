export interface SurveyDetailsM {
    id: number,
    name: string,
    accountingStartDate: string,
    totalEmployee: number,
    sampleSetPct: number,
    status: string,
    recivedResponses: number,
    expectedResponses: number,
}

export class SurveyDetails implements SurveyDetailsM {
    id;
    name;
    accountingStartDate;
    totalEmployee;
    sampleSetPct;
    status;
    recivedResponses;
    expectedResponses;
}

export interface GraphDataM {
    rangeID: number;
    modeOfTransportID: number;
    employeeCount: number;
}

export interface DistanceRangeM {
    id: number;
    minRange: number;
    maxRange: number | null;
}

export class DistanceRange implements DistanceRangeM {
    id;
    minRange;
    maxRange;
}


export interface ModeOfTransportM {
    id: number;
    modeOfTransportName: string;
}
export class ModeOfTransport implements ModeOfTransportM {
    id;
    modeOfTransportName;
}

export interface SurveySummaryM {
    graphAxis: GraphDataM[];
    distanceRanges: DistanceRangeM[];
    modeOfTransport: ModeOfTransportM[];
}

export class SurveySummary implements SurveySummaryM {
    graphAxis;
    distanceRanges;
    modeOfTransport;
}
export interface SurveyResponseM {
    totalCount: number,
    data: [
        {
            employeeID: number,
            employeeName: string,
            submittedOn: string,
            status: string
        }
    ]
}

export class SurveyResponse implements SurveyResponseM {
    totalCount;
    data: [
        {
            employeeID;
            employeeName;
            submittedOn;
            status;
        }
    ];
}

export interface EmployeeCountM {
    totalEmployee: number;
}

export class EmployeeCount implements EmployeeCountM {
    totalEmployee;
}