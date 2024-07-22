import { ConsolidationApproachM } from "./consolidation-approach.model";

export interface ReceivedEmissionRequestM {
    id: number;
    requestee: RequesteeM;
    requester: RequesterM;
    assigneeID: number[];
    assigneeEmail: string[];
    status: string;
    startDate: string;
    endDate: string;
    accountingPeriod: string;
    consolidationApproach: ConsolidationApproachM[];
    control: null;
    requestNote: string;
    responseNote: string;
    declinationNote: string;
}

interface requestedFormM {
    id: number;
    name: string;
    logoImageUrl: string;
}

export interface ReceivedEmissionRequestPageM {
    id: number;
    name: string;
    status: string;
    accountingPeriod: string;
}

export interface RequesteeM {
    id: number;
    name: string;
    type: string,
    logoImageUrl: string;
}

export interface RequesterM {
    id: number;
    name: string;
    logoImageUrl: string;
    user: string;
}
