import { AggregateDataRequestM } from "./aggregate-data.model";

export interface DownloadReportRequestM {
    request: AggregateDataRequestM;
    reportName: string;
    reportFormat: string;
}

export class DownloadReportRequest implements DownloadReportRequestM {
    request = null;
    reportName = null;
    reportFormat = null;
}