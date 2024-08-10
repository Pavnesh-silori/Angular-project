import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EntityDeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    //to chnge endpoint
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    //TODO: SOMYA AGRAWAL: To discuss this api with Abhinav
    getDevicesWithEntitiesByParameter(orgID, paramMetric, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        let params = new HttpParams();
        params = params.append('paramMetric', paramMetric);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params, headers: headers });
    }
}
EntityDeviceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EntityDeviceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDeviceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRldmljZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb250cm9sbGVyL2VudGl0eS1kZXZpY2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFVM0UsTUFBTSxPQUFPLHNCQUFzQjtJQUUvQixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxtQkFBbUI7SUFDbkIsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBeUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSywyQkFBMkIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4SixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELGlDQUFpQyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVTtRQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBeUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDekssQ0FBQzs7b0hBbkJRLHNCQUFzQiw0Q0FJbkIsYUFBYTt3SEFKaEIsc0JBQXNCLGNBSG5CLE1BQU07NEZBR1Qsc0JBQXNCO2tCQUpsQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEZXZpY2VzV2l0aEVudGl0aWVzTSB9IGZyb20gJy4uL21vZGVsL2RldmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlEZXZpY2VDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIC8vdG8gY2huZ2UgZW5kcG9pbnRcbiAgICBnZXREZXZpY2VzV2l0aEVudGl0aWVzKG9yZ0lELCByZXF1ZXN0Qm9keSk6T2JzZXJ2YWJsZTxEZXZpY2VzV2l0aEVudGl0aWVzTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxEZXZpY2VzV2l0aEVudGl0aWVzTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvZW50aXRpZXMvZGV2aWNlc2AsIHJlcXVlc3RCb2R5KTtcbiAgICB9XG5cbiAgICAvL1RPRE86IFNPTVlBIEFHUkFXQUw6IFRvIGRpc2N1c3MgdGhpcyBhcGkgd2l0aCBBYmhpbmF2XG4gICAgZ2V0RGV2aWNlc1dpdGhFbnRpdGllc0J5UGFyYW1ldGVyKG9yZ0lELCBwYXJhbU1ldHJpYywgc2tpcExvYWRlcik6IE9ic2VydmFibGU8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnc2tpcExvYWRlcicsIHNraXBMb2FkZXIpO1xuXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYXJhbU1ldHJpYycsIHBhcmFtTWV0cmljKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERldmljZXNXaXRoRW50aXRpZXNNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZW50aXRpZXMtZGV2aWNlc2AsIHsgcGFyYW1zOiBwYXJhbXMsIGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgfVxufVxuIl19