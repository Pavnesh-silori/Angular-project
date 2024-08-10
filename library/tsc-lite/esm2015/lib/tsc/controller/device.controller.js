import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDeviceInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/status`);
    }
    getDevicesByEntityID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
        // return this.http.get<DeviceM[]>(`${this.environment.MOCK_SERVER}devices`);
    }
}
DeviceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
DeviceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DeviceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvZGV2aWNlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVduRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLGFBQWEsQ0FBQyxLQUFLO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLGlCQUFpQixDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvSCw2RUFBNkU7SUFDakYsQ0FBQzs7OEdBZFEsZ0JBQWdCLDRDQUliLGFBQWE7a0hBSmhCLGdCQUFnQixjQUhiLE1BQU07NEZBR1QsZ0JBQWdCO2tCQUo1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERldmljZUluZm9NLCBEZXZpY2VNLCBEZXZpY2VzV2l0aEVudGl0aWVzTSB9IGZyb20gJy4uL21vZGVsL2RldmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldERldmljZUluZm8ob3JnSUQpOiBPYnNlcnZhYmxlPERldmljZUluZm9NPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERldmljZUluZm9NPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2RldmljZXMvc3RhdHVzYCk7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxEZXZpY2VNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERldmljZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy9kZXZpY2VzYCwgcmVxdWVzdEJvZHkpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxEZXZpY2VNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZGV2aWNlc2ApO1xuICAgIH1cblxufVxuIl19