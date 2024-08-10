import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RecentDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRecentDataWithParam(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody);
    }
    getEntityLevelRecentData(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/data/recent`, requestBody);
    }
    getOrgRecentData(orgID, requestBody) {
        // return this.http.post<OrgRecentDataM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}facility-dashboard`);
    }
}
RecentDataController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RecentDataController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RecentDataController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50LWRhdGEuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29udHJvbGxlci9yZWNlbnQtZGF0YS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVbkQsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssdUJBQXVCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUgsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQy9CLG9JQUFvSTtRQUNwSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O2tIQWxCUSxvQkFBb0IsNENBSWpCLGFBQWE7c0hBSmhCLG9CQUFvQixjQUZqQixNQUFNOzRGQUVULG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IE9yZ1JlY2VudERhdGFNIH0gZnJvbSAnLi4vbW9kZWwvcmVjZW50LWRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VudERhdGFDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldFJlY2VudERhdGFXaXRoUGFyYW0ob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2RhdGEvcmVjZW50YCwgcmVxdWVzdEJvZHkpO1xuICAgIH1cblxuICAgIGdldEVudGl0eUxldmVsUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZW50aXRpZXMvZGF0YS9yZWNlbnRgLCByZXF1ZXN0Qm9keSk7XG4gICAgfVxuXG4gICAgZ2V0T3JnUmVjZW50RGF0YShvcmdJRCwgcmVxdWVzdEJvZHkpOiBPYnNlcnZhYmxlPE9yZ1JlY2VudERhdGFNW10+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9yZ1JlY2VudERhdGFNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZGF0YS9yZWNlbnRgLCByZXF1ZXN0Qm9keSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZ1JlY2VudERhdGFNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZmFjaWxpdHktZGFzaGJvYXJkYCk7XG4gICAgfVxuXG59XG4iXX0=