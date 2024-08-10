import { Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RecentDataController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRecentDataWithParam(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/data/recent`, requestBody, { headers: headers });
    }
    getOrgRecentData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/recent-data`, requestBody, { headers: headers });
    }
    getDeviceRecentData(orgID, requestBody) {
        let headers = new HttpHeaders().set('skipLoader', 'YES');
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/data/recent`, requestBody, { headers: headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50LWRhdGEuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29udHJvbGxlci9yZWNlbnQtZGF0YS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUy9ELE1BQU0sT0FBTyxvQkFBb0I7SUFFN0IsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxjQUFjLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDekksQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQy9CLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25LLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0SyxDQUFDOztrSEF2QlEsb0JBQW9CLDRDQUlqQixhQUFhO3NIQUpoQixvQkFBb0IsY0FGakIsTUFBTTs0RkFFVCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFLUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgRGV2aWNlUmVjZW50RGF0YU0sIE9yZ1JlY2VudERhdGFNIH0gZnJvbSAnLi4vbW9kZWwvcmVjZW50LWRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VudERhdGFDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldFJlY2VudERhdGFXaXRoUGFyYW0ob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwTG9hZGVyJywgJ1lFUycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2RhdGEvcmVjZW50YCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBnZXRPcmdSZWNlbnREYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8T3JnUmVjZW50RGF0YU1bXT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnc2tpcExvYWRlcicsICdZRVMnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T3JnUmVjZW50RGF0YU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL3JlY2VudC1kYXRhYCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBnZXREZXZpY2VSZWNlbnREYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8RGV2aWNlUmVjZW50RGF0YU1bXT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnc2tpcExvYWRlcicsICdZRVMnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGV2aWNlUmVjZW50RGF0YU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9kZXZpY2VzL2RhdGEvcmVjZW50YCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG5cbn1cbiJdfQ==