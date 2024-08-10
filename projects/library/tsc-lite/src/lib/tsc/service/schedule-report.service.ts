import { Injectable } from '@angular/core';

import { ScheduleReport, ScheduleReportI } from '../model/schedule-report.model';

import { ScheduleReportController } from '../controller/schedule-report.controller';

@Injectable({
    providedIn: 'root'
})

export class ScheduleReportService {

    constructor(
        private scheduleReportController: ScheduleReportController
    ) { }

    async getScheduleReportByID(orgID, scheduleReportID): Promise<ScheduleReportI> {
        let scheduleReportI: ScheduleReportI;
        try {
            scheduleReportI = await this.scheduleReportController.getScheduleReportByID(orgID, scheduleReportID).toPromise();

            if (scheduleReportI) {
                return scheduleReportI;
            } else {
                return new ScheduleReport();
            }
        } catch (error) {
            console.error('Error -', error);
            return new ScheduleReport();
        }
    }

}
