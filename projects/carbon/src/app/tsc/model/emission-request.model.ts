import { ConsolidationApproachM } from "./consolidation-approach.model";

export interface EmissionRequestM {
    id: number;
    requestee: RequesteeM;
    requester: RequesterM;
    assigneeID: number[];
    assigneeUser: any[];
    assigneeEmail: string[];
    status: string;
    startDate: string;
    endDate: string;
    accountingPeriod: string;
    consolidationApproach: ConsolidationApproachM[];
    control: ControlM[];
    requestNote: string;
    responseNote: string;
    declinationNote: string;
}

interface ControlM {
    approach: string;
    control: number;
}

export interface EmissionRequestPageM {
    id: number;
    name: string;
    type: string;
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
