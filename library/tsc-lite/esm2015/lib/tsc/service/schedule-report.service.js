import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { ScheduleReport } from '../model/schedule-report.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/schedule-report.controller";
export class ScheduleReportService {
    constructor(scheduleReportController) {
        this.scheduleReportController = scheduleReportController;
    }
    getScheduleReportByID(orgID, scheduleReportID) {
        return __awaiter(this, void 0, void 0, function* () {
            let scheduleReportI;
            try {
                scheduleReportI = yield this.scheduleReportController.getScheduleReportByID(orgID, scheduleReportID).toPromise();
                if (scheduleReportI) {
                    return scheduleReportI;
                }
                else {
                    return new ScheduleReport();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new ScheduleReport();
            }
        });
    }
}
ScheduleReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, deps: [{ token: i1.ScheduleReportController }], target: i0.ɵɵFactoryTarget.Injectable });
ScheduleReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ScheduleReportController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2Uvc2NoZWR1bGUtcmVwb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7O0FBUWpGLE1BQU0sT0FBTyxxQkFBcUI7SUFFOUIsWUFDWSx3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUMxRCxDQUFDO0lBRUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLGdCQUFnQjs7WUFDL0MsSUFBSSxlQUFnQyxDQUFDO1lBQ3JDLElBQUk7Z0JBQ0EsZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVqSCxJQUFJLGVBQWUsRUFBRTtvQkFDakIsT0FBTyxlQUFlLENBQUM7aUJBQzFCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxjQUFjLEVBQUUsQ0FBQztpQkFDL0I7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksY0FBYyxFQUFFLENBQUM7YUFDL0I7UUFDTCxDQUFDO0tBQUE7O21IQXBCUSxxQkFBcUI7dUhBQXJCLHFCQUFxQixjQUhsQixNQUFNOzRGQUdULHFCQUFxQjtrQkFKakMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVkdWxlUmVwb3J0LCBTY2hlZHVsZVJlcG9ydEkgfSBmcm9tICcuLi9tb2RlbC9zY2hlZHVsZS1yZXBvcnQubW9kZWwnO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVJlcG9ydENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3NjaGVkdWxlLXJlcG9ydC5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlUmVwb3J0U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVJlcG9ydENvbnRyb2xsZXI6IFNjaGVkdWxlUmVwb3J0Q29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRTY2hlZHVsZVJlcG9ydEJ5SUQob3JnSUQsIHNjaGVkdWxlUmVwb3J0SUQpOiBQcm9taXNlPFNjaGVkdWxlUmVwb3J0ST4ge1xuICAgICAgICBsZXQgc2NoZWR1bGVSZXBvcnRJOiBTY2hlZHVsZVJlcG9ydEk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzY2hlZHVsZVJlcG9ydEkgPSBhd2FpdCB0aGlzLnNjaGVkdWxlUmVwb3J0Q29udHJvbGxlci5nZXRTY2hlZHVsZVJlcG9ydEJ5SUQob3JnSUQsIHNjaGVkdWxlUmVwb3J0SUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoc2NoZWR1bGVSZXBvcnRJKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlUmVwb3J0STtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY2hlZHVsZVJlcG9ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2NoZWR1bGVSZXBvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19