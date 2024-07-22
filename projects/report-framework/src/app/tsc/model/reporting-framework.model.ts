export interface ReportingFrameworkM {
    id: number;
    name: string;
    keyID: string;
    category: string;
    categoryKeyID: string;
    status: string;
}
export class ReportingFramework implements ReportingFrameworkM {
    id;
    name;
    keyID;
    status;
    category;
    categoryKeyID;
}