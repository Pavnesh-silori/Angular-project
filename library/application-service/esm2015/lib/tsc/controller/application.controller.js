import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApplicationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAllApplication() {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}applications`);
    }
    getApplicationByUserAccess() {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}user/applications/access`);
    }
    getSubscribedApplicationsByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/applications-roles`);
    }
}
ApplicationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ApplicationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZS9zcmMvbGliL3RzYy9jb250cm9sbGVyL2FwcGxpY2F0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVuRCxNQUFNLE9BQU8scUJBQXFCO0lBQzlCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsY0FBYyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELDBCQUEwQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLDBCQUEwQixDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVELGdDQUFnQyxDQUFDLEtBQUs7UUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixLQUFLLHFCQUFxQixDQUFDLENBQUM7SUFDOUcsQ0FBQzs7bUhBaEJRLHFCQUFxQiw0Q0FHbEIsYUFBYTt1SEFIaEIscUJBQXFCLGNBSGxCLE1BQU07NEZBR1QscUJBQXFCO2tCQUpqQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBS1EsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbk0gfSBmcm9tICcuLi9tb2RlbC9hcHBsaWNhdGlvbi5tb2RlbCc7IFxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRBbGxBcHBsaWNhdGlvbigpOiBPYnNlcnZhYmxlPEFwcGxpY2F0aW9uTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFwcGxpY2F0aW9uTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlNVQlNDUklQVElPTl9BUElfVVJMfWFwcGxpY2F0aW9uc2ApO1xuICAgIH1cblxuICAgIGdldEFwcGxpY2F0aW9uQnlVc2VyQWNjZXNzKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25NW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QXBwbGljYXRpb25NW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9dXNlci9hcHBsaWNhdGlvbnMvYWNjZXNzYCk7XG4gICAgfVxuXG4gICAgZ2V0U3Vic2NyaWJlZEFwcGxpY2F0aW9uc0J5T3JnSUQob3JnSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2FwcGxpY2F0aW9ucy1yb2xlc2ApO1xuICAgIH1cbn1cbiJdfQ==