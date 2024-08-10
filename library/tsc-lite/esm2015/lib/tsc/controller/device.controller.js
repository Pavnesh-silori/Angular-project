import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
        // return this.http.post<DeviceM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/devices`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}devices`);
    }
    //TODO: SOMYA AGRAWAL: To discuss below twp api's with Abhinav
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    getDevicesWithEntitiesByParameter(orgID, paramMetric) {
        let params = new HttpParams();
        params = params.append('paramMetric', paramMetric);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvZGV2aWNlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFVOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUV6QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxhQUFhLENBQUMsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNuQyxrSUFBa0k7UUFDbEksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsOERBQThEO0lBQzlELHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssMkJBQTJCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEosQ0FBQztJQUVELGlDQUFpQyxDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ2hELElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2SixDQUFDOzs4R0F6QlEsZ0JBQWdCLDRDQUliLGFBQWE7a0hBSmhCLGdCQUFnQixjQUhiLE1BQU07NEZBR1QsZ0JBQWdCO2tCQUo1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERldmljZUluZm9NLCBEZXZpY2VNLCBEZXZpY2VzV2l0aEVudGl0aWVzTSB9IGZyb20gJy4uL21vZGVsL2RldmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldERldmljZUluZm8ob3JnSUQpOiBPYnNlcnZhYmxlPERldmljZUluZm9NPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PERldmljZUluZm9NPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2RldmljZXMvc3RhdHVzYCk7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlc0J5RW50aXR5SUQob3JnSUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxEZXZpY2VNW10+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERldmljZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy9kZXZpY2VzYCwgcmVxdWVzdEJvZHkpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEZXZpY2VNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZGV2aWNlc2ApO1xuICAgIH1cblxuICAgIC8vVE9ETzogU09NWUEgQUdSQVdBTDogVG8gZGlzY3VzcyBiZWxvdyB0d3AgYXBpJ3Mgd2l0aCBBYmhpbmF2XG4gICAgZ2V0RGV2aWNlc1dpdGhFbnRpdGllcyhvcmdJRCwgcmVxdWVzdEJvZHkpOk9ic2VydmFibGU8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL2VudGl0aWVzL2RldmljZXNgLCByZXF1ZXN0Qm9keSk7XG4gICAgfVxuICAgIFxuICAgIGdldERldmljZXNXaXRoRW50aXRpZXNCeVBhcmFtZXRlcihvcmdJRCwgcGFyYW1NZXRyaWMpOiBPYnNlcnZhYmxlPERldmljZXNXaXRoRW50aXRpZXNNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3BhcmFtTWV0cmljJywgcGFyYW1NZXRyaWMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy1kZXZpY2VzYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG59XG4iXX0=