import { HttpClient } from "@angular/common/http";
import { AlertM } from "../model/alert.model";
import { AlertService } from "./alert.service";
import { DateService } from "@library/date";
import * as i0 from "@angular/core";
export declare class ReportService {
    private http;
    private dateService;
    private alertService;
    private environment;
    reportAlertObj: AlertM;
    constructor(http: HttpClient, dateService: DateService, alertService: AlertService, environment: any);
    extractTimestamp(dataInp: any): unknown[];
    populateTable(timestamp: any, dataInp: any, format: any): any[];
    downloadReport(orgID: any, requestData: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportService>;
}
