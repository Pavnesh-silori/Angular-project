import { ScheduleReportI } from '../model/schedule-report.model';
import { ScheduleReportController } from '../controller/schedule-report.controller';
import * as i0 from "@angular/core";
export declare class ScheduleReportService {
    private scheduleReportController;
    constructor(scheduleReportController: ScheduleReportController);
    getScheduleReportByID(orgID: any, scheduleReportID: any): Promise<ScheduleReportI>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScheduleReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScheduleReportService>;
}
