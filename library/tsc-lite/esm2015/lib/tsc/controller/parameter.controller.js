import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ParameterController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getParameterByOrgID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/parameters`);
    }
    getParameterByLayoutID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters`);
    }
    getParameterByDeviceID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/devices/parameters`, requestBody);
    }
    getParameterByEntityType(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entity-type/parameters`, requestBody);
    }
    getConsumptionParameter(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`);
    }
    saveConsumptionParameter(orgID, parameter) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumption-parameters`, parameter);
    }
    getSavedConsumptionParameter(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/saved-consumption-parameters`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvcGFyYW1ldGVyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVduRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTVCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLG1CQUFtQixDQUFDLEtBQUs7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLGFBQWEsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsscUJBQXFCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyx5QkFBeUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1SSxDQUFDO0lBRUQsdUJBQXVCLENBQUMsS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHlCQUF5QixDQUFDLENBQUM7SUFDdkksQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQUssRUFBRSxTQUFTO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1SCxDQUFDO0lBRUQsNEJBQTRCLENBQUMsS0FBSztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUErQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLCtCQUErQixDQUFDLENBQUM7SUFDcEosQ0FBQzs7aUhBakNRLG1CQUFtQiw0Q0FJaEIsYUFBYTtxSEFKaEIsbUJBQW1CLGNBSGhCLE1BQU07NEZBR1QsbUJBQW1CO2tCQUovQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnN1bXB0aW9uUGFyYW1ldGVyTSwgUGFyYW1ldGVyTSwgU2F2ZWRDb25zdW1wdGlvblBhcmFtZXRlck0gfSBmcm9tICcuLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRQYXJhbWV0ZXJCeU9yZ0lEKG9yZ0lEKTogT2JzZXJ2YWJsZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3BhcmFtZXRlcnNgKTtcbiAgICB9XG5cbiAgICBnZXRQYXJhbWV0ZXJCeUxheW91dElEKG9yZ0lEKTogT2JzZXJ2YWJsZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvcGFyYW1ldGVyc2ApO1xuICAgIH1cblxuICAgIGdldFBhcmFtZXRlckJ5RGV2aWNlSUQob3JnSUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxQYXJhbWV0ZXJNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBhcmFtZXRlck1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9kZXZpY2VzL3BhcmFtZXRlcnNgLCByZXF1ZXN0Qm9keSk7XG4gICAgfVxuXG4gICAgZ2V0UGFyYW1ldGVyQnlFbnRpdHlUeXBlKG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8UGFyYW1ldGVyTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQYXJhbWV0ZXJNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZW50aXR5LXR5cGUvcGFyYW1ldGVyc2AsIHJlcXVlc3RCb2R5KTtcbiAgICB9XG5cbiAgICBnZXRDb25zdW1wdGlvblBhcmFtZXRlcihvcmdJRCk6IE9ic2VydmFibGU8Q29uc3VtcHRpb25QYXJhbWV0ZXJNPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENvbnN1bXB0aW9uUGFyYW1ldGVyTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9jb25zdW1wdGlvbi1wYXJhbWV0ZXJzYCk7XG4gICAgfVxuXG4gICAgc2F2ZUNvbnN1bXB0aW9uUGFyYW1ldGVyKG9yZ0lELCBwYXJhbWV0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vY29uc3VtcHRpb24tcGFyYW1ldGVyc2AsIHBhcmFtZXRlcik7XG4gICAgfVxuXG4gICAgZ2V0U2F2ZWRDb25zdW1wdGlvblBhcmFtZXRlcihvcmdJRCk6IE9ic2VydmFibGU8U2F2ZWRDb25zdW1wdGlvblBhcmFtZXRlck1bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTYXZlZENvbnN1bXB0aW9uUGFyYW1ldGVyTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NhdmVkLWNvbnN1bXB0aW9uLXBhcmFtZXRlcnNgKTtcbiAgICB9XG5cbn1cbiJdfQ==