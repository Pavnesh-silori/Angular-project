import { Injectable } from "@angular/core";

import { ReportingFrameworkData, ReportingFrameworkDataM } from "@report-framework/model/reporting-framework-data.model";

import { ReportingFrameworkDataController } from "@report-framework/controller/reporting-framework-data.controller";

@Injectable({
    providedIn: 'root'
})
export class ReportingFrameworkDataService {
    constructor(
        private reportingFrameworkDataController: ReportingFrameworkDataController,
    ) { }

   async getReportFormControl(orgID,configIntervalID, groupID): Promise<any> {
            let formControlM: ReportingFrameworkDataM[];
            let formControl = [new ReportingFrameworkData()];

            try {
                formControlM = await this.reportingFrameworkDataController.getReportFormControl(orgID,configIntervalID,groupID).toPromise();
                
                if (formControlM) {
                    return formControlM;
                }else {
                    return formControl;
                }
            }catch (error) {
                console.error('Error -', error);
                return formControl;
            }

    }
}
