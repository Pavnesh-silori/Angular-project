import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ParameterController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getParameterByLayoutID(orgID) {
        // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
    getParameterByDeviceID(orgID, requestBody) {
        // return this.http.post<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
    getDerivedParameterByLayoutID(orgID) {
        // return this.http.get<ParameterM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/derived/parameters`);
        return this.http.get(`${this.environment.MOCK_SERVER}parameter`);
    }
}
ParameterController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ParameterController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvcGFyYW1ldGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVduRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLHNCQUFzQixDQUFDLEtBQUs7UUFDeEIseUhBQXlIO1FBQ3pILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsV0FBVyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3JDLHVJQUF1STtRQUN2SSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLFdBQVcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCw2QkFBNkIsQ0FBQyxLQUFLO1FBQy9CLGlJQUFpSTtRQUNqSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLFdBQVcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2lIQXBCUSxtQkFBbUIsNENBSWhCLGFBQWE7cUhBSmhCLG1CQUFtQixjQUhoQixNQUFNOzRGQUdULG1CQUFtQjtrQkFKL0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJNIH0gZnJvbSAnLi4vbW9kZWwvcGFyYW1ldGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRChvcmdJRCk6IE9ic2VydmFibGU8UGFyYW1ldGVyTVtdPiB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhcmFtZXRlck1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL3BhcmFtZXRlcnNgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfXBhcmFtZXRlcmApO1xuICAgIH1cblxuICAgIGdldFBhcmFtZXRlckJ5RGV2aWNlSUQob3JnSUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBhcmFtZXRlck1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9kZXZpY2VzL3BhcmFtZXRlcnNgLCByZXF1ZXN0Qm9keSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhcmFtZXRlck1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5NT0NLX1NFUlZFUn1wYXJhbWV0ZXJgKTtcbiAgICB9XG5cbiAgICBnZXREZXJpdmVkUGFyYW1ldGVyQnlMYXlvdXRJRChvcmdJRCk6IE9ic2VydmFibGU8UGFyYW1ldGVyTVtdPiB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhcmFtZXRlck1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL2Rlcml2ZWQvcGFyYW1ldGVyc2ApO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQYXJhbWV0ZXJNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9cGFyYW1ldGVyYCk7XG4gICAgfVxufVxuIl19