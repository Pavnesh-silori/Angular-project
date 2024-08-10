import { AggregateDataRequestM } from "./aggregate-data.model";
export interface DownloadReportRequestM {
    request: AggregateDataRequestM;
    reportName: string;
    reportFormat: string;
}
export declare class DownloadReportRequest implements DownloadReportRequestM {
    request: any;
    reportName: any;
    reportFormat: any;
}
