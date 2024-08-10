import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// /tsc-library/
export class ScheduleReportController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createScheduleReport(orgID, scheduleReport) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports`, scheduleReport);
    }
    getScheduleReportByID(orgID, scheduleReportID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }
    updateScheduleReport(orgID, scheduleReportID, scheduleReport) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`, scheduleReport);
    }
    getScheduleReportByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/page`, { params: params });
    }
    deleteScheduledReport(orgID, scheduleReportID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}`);
    }
    updateReportStatusByID(orgID, scheduleReportID, status) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/schedule-reports/${scheduleReportID}/status`, status);
    }
}
ScheduleReportController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ScheduleReportController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ScheduleReportController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVwb3J0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvc2NoZWR1bGUtcmVwb3J0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFROUQsZ0JBQWdCO0FBTWhCLE1BQU0sT0FBTyx3QkFBd0I7SUFFakMsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsb0JBQW9CLENBQUMsS0FBSyxFQUFFLGNBQWM7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzNILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsscUJBQXFCLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMvSSxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGNBQWM7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHFCQUFxQixnQkFBZ0IsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2hKLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSztRQUNwSCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUzQyxJQUFJLFdBQVcsRUFBRTtZQUNiLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNuRDtRQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV0RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0osQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQUssRUFBRSxnQkFBZ0I7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHFCQUFxQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDakksQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxNQUFNO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxxQkFBcUIsZ0JBQWdCLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvSSxDQUFDOztzSEExQ1Esd0JBQXdCLDRDQUlyQixhQUFhOzBIQUpoQix3QkFBd0IsY0FIckIsTUFBTTs0RkFHVCx3QkFBd0I7a0JBSnBDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFNUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2NoZWR1bGVSZXBvcnRJLCBTY2hlZHVsZVJlcG9ydFBhZ2VJIH0gZnJvbSAnLi4vbW9kZWwvc2NoZWR1bGUtcmVwb3J0Lm1vZGVsJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFBhZ2VNIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVJlcG9ydENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgY3JlYXRlU2NoZWR1bGVSZXBvcnQob3JnSUQsIHNjaGVkdWxlUmVwb3J0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NjaGVkdWxlLXJlcG9ydHNgLCBzY2hlZHVsZVJlcG9ydCk7XG4gICAgfVxuXG4gICAgZ2V0U2NoZWR1bGVSZXBvcnRCeUlEKG9yZ0lELCBzY2hlZHVsZVJlcG9ydElEKTogT2JzZXJ2YWJsZTxTY2hlZHVsZVJlcG9ydEk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8U2NoZWR1bGVSZXBvcnRJPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NjaGVkdWxlLXJlcG9ydHMvJHtzY2hlZHVsZVJlcG9ydElEfWApO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjaGVkdWxlUmVwb3J0KG9yZ0lELCBzY2hlZHVsZVJlcG9ydElELCBzY2hlZHVsZVJlcG9ydCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vc2NoZWR1bGUtcmVwb3J0cy8ke3NjaGVkdWxlUmVwb3J0SUR9YCwgc2NoZWR1bGVSZXBvcnQpO1xuICAgIH1cblxuICAgIGdldFNjaGVkdWxlUmVwb3J0QnlQYWdlKHBhZ2VObzogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBzb3J0Qnk6IHN0cmluZywgb3JkZXJCeTogc3RyaW5nLCBzZWFyY2hWYWx1ZSwgZmlsdGVyQXJyLCBvcmdJRCk6IE9ic2VydmFibGU8UGFnZU08U2NoZWR1bGVSZXBvcnRQYWdlST4+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZU5vJywgcGFnZU5vKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZVNpemUnLCBwYWdlU2l6ZSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NvcnRCeScsIHNvcnRCeSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ29yZGVyQnknLCBvcmRlckJ5KTtcblxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NlYXJjaEJ5Jywgc2VhcmNoVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyQXJyLmZvckVhY2goZmlsdGVyID0+IHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2ZpbHRlcicsIGZpbHRlcikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhZ2VNPFNjaGVkdWxlUmVwb3J0UGFnZUk+PihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NjaGVkdWxlLXJlcG9ydHMvcGFnZWAsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlU2NoZWR1bGVkUmVwb3J0KG9yZ0lELCBzY2hlZHVsZVJlcG9ydElEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vc2NoZWR1bGUtcmVwb3J0cy8ke3NjaGVkdWxlUmVwb3J0SUR9YCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUmVwb3J0U3RhdHVzQnlJRChvcmdJRCwgc2NoZWR1bGVSZXBvcnRJRCwgc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9zY2hlZHVsZS1yZXBvcnRzLyR7c2NoZWR1bGVSZXBvcnRJRH0vc3RhdHVzYCwgc3RhdHVzKTtcbiAgICB9XG59Il19