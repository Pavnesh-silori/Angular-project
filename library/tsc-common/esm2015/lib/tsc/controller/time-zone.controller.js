import { HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class TimeZoneController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getTimeZone() {
        let headers = new HttpHeaders().set('skipAuth', '1');
        return this.http.get(`${this.environment.ORGANIZATION_PUBLIC_API_URL}time-zone`, { headers: headers });
    }
}
TimeZoneController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
TimeZoneController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimeZoneController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS16b25lLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29udHJvbGxlci90aW1lLXpvbmUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzNCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLFdBQVc7UUFDUCxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hILENBQUM7O2dIQVRRLGtCQUFrQiw0Q0FHZixhQUFhO29IQUhoQixrQkFBa0IsY0FIZixNQUFNOzRGQUdULGtCQUFrQjtrQkFKOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtUaW1lWm9uZU19IGZyb20gJy4uL21vZGVsL3RpbWUtem9uZS5tb2RlbCdcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFRpbWVab25lQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0VGltZVpvbmUoKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwQXV0aCcsICcxJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFRpbWVab25lTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9QVUJMSUNfQVBJX1VSTH10aW1lLXpvbmVgLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgfVxuICBcbn0iXX0=