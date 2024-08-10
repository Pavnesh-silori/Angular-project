import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ParameterController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getParameterByLayoutID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
        // return this.http.get<ParameterM[]>(`${this.environment.MOCK_SERVER}parameter`);
    }
    getParameterByDeviceID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
        // return this.http.get<ParameterM[]>(`${this.environment.MOCK_SERVER}parameter`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvcGFyYW1ldGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVduRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLHNCQUFzQixDQUFDLEtBQUs7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHFCQUFxQixDQUFDLENBQUM7UUFDdEgsa0ZBQWtGO0lBQ3RGLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsscUJBQXFCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEksa0ZBQWtGO0lBQ3RGLENBQUM7O2lIQWZRLG1CQUFtQiw0Q0FJaEIsYUFBYTtxSEFKaEIsbUJBQW1CLGNBSGhCLE1BQU07NEZBR1QsbUJBQW1CO2tCQUovQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBhcmFtZXRlck0gfSBmcm9tICcuLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKTogT2JzZXJ2YWJsZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvcGFyYW1ldGVyc2ApO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxQYXJhbWV0ZXJNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9cGFyYW1ldGVyYCk7XG4gICAgfVxuXG4gICAgZ2V0UGFyYW1ldGVyQnlEZXZpY2VJRChvcmdJRCwgcmVxdWVzdEJvZHkpOiBPYnNlcnZhYmxlPFBhcmFtZXRlck1bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2RldmljZXMvcGFyYW1ldGVyc2AsIHJlcXVlc3RCb2R5KTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfXBhcmFtZXRlcmApO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==