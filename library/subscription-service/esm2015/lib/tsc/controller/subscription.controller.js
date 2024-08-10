import { Injectable, Inject } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SubscriptionController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    orgPlanType(orgID) {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/plan-type`);
    }
    getExpiringSubscription(orgID, applicationID) {
        return this.http.get(`${this.environment.SUBSCRIPTION_API_URL}organizations/${orgID}/applications/${applicationID}/subscription/expiring`);
    }
}
SubscriptionController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
SubscriptionController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SubscriptionController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3N1YnNjcmlwdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvc3Vic2NyaXB0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVNuRCxNQUFNLE9BQU8sc0JBQXNCO0lBQy9CLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLFdBQVcsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixLQUFLLFlBQVksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsYUFBYTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixLQUFLLGlCQUFpQixhQUFhLHdCQUF3QixDQUFDLENBQUM7SUFDdEssQ0FBQzs7b0hBWlEsc0JBQXNCLDRDQUduQixhQUFhO3dIQUhoQixzQkFBc0IsY0FIbkIsTUFBTTs0RkFHVCxzQkFBc0I7a0JBSmxDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFLUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBFeHBpcmluZ1N1YnNjcmlwdGlvbk0gfSBmcm9tIFwiLi4vbW9kZWwvc3Vic2NyaXB0aW9uLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBvcmdQbGFuVHlwZShvcmdJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmVudmlyb25tZW50LlNVQlNDUklQVElPTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vcGxhbi10eXBlYCk7XG4gICAgfVxuXG4gICAgZ2V0RXhwaXJpbmdTdWJzY3JpcHRpb24ob3JnSUQsIGFwcGxpY2F0aW9uSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RXhwaXJpbmdTdWJzY3JpcHRpb25NPihgJHt0aGlzLmVudmlyb25tZW50LlNVQlNDUklQVElPTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vYXBwbGljYXRpb25zLyR7YXBwbGljYXRpb25JRH0vc3Vic2NyaXB0aW9uL2V4cGlyaW5nYCk7XG4gICAgfVxufVxuIl19