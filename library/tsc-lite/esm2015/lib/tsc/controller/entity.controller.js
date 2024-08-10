import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EntityController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getEntitiesByOrgID(orgID) {
        // return this.http.get<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities`);
        return this.http.get(`${this.environment.MOCK_SERVER}entities`);
    }
    getEntityHierarchyByParameterID(orgID, parameterID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/parameters/${parameterID}/entities`);
    }
    getEntityLevelConsumption(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/load-consumption`, requestBody);
    }
    getEntityTypeByLayoutID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/type`);
    }
    getEntitiesWithDevices(orgID, layoutID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entity-device`, requestBody);
    }
    getEntityByParameterID(orgID, requestBody) {
        // return this.http.post<EntityM[]>(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities`, requestBody);
        return this.http.get(`${this.environment.MOCK_SERVER}entities`);
    }
}
EntityController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
EntityController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvZW50aXR5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVduRCxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLGtCQUFrQixDQUFDLEtBQUs7UUFDcEIsNEdBQTRHO1FBQzVHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELCtCQUErQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssdUJBQXVCLFdBQVcsV0FBVyxDQUFDLENBQUM7SUFDbkosQ0FBQztJQUVELHlCQUF5QixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyw0QkFBNEIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqSSxDQUFDO0lBRUQsdUJBQXVCLENBQUMsS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLGdCQUFnQixDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVztRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RKLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUNyQyxrSUFBa0k7UUFDbEksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs4R0EvQlEsZ0JBQWdCLDRDQUliLGFBQWE7a0hBSmhCLGdCQUFnQixjQUhiLE1BQU07NEZBR1QsZ0JBQWdCO2tCQUo1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVudGl0eU0sIEVudGl0eVRyZWVNLCBFbnRpdHlUeXBlTSB9IGZyb20gJy4uL21vZGVsL2VudGl0eS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldEVudGl0aWVzQnlPcmdJRChvcmdJRCk6IE9ic2VydmFibGU8RW50aXR5TVtdPiB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVudGl0eU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllc2ApO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHlNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZW50aXRpZXNgKTtcbiAgICB9XG5cbiAgICBnZXRFbnRpdHlIaWVyYXJjaHlCeVBhcmFtZXRlcklEKG9yZ0lELCBwYXJhbWV0ZXJJRCk6IE9ic2VydmFibGU8RW50aXR5VHJlZU1bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHlUcmVlTVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvcGFyYW1ldGVycy8ke3BhcmFtZXRlcklEfS9lbnRpdGllc2ApO1xuICAgIH1cblxuICAgIGdldEVudGl0eUxldmVsQ29uc3VtcHRpb24ob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2VudGl0aWVzL2xvYWQtY29uc3VtcHRpb25gLCByZXF1ZXN0Qm9keSk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5VHlwZUJ5TGF5b3V0SUQob3JnSUQpOiBPYnNlcnZhYmxlPEVudGl0eVR5cGVNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5VHlwZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy90eXBlYCk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXNXaXRoRGV2aWNlcyhvcmdJRCwgbGF5b3V0SUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxFbnRpdHlUcmVlTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RW50aXR5VHJlZU0+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfS9lbnRpdHktZGV2aWNlYCwgcmVxdWVzdEJvZHkpO1xuICAgIH1cblxuICAgIGdldEVudGl0eUJ5UGFyYW1ldGVySUQob3JnSUQsIHJlcXVlc3RCb2R5KTogT2JzZXJ2YWJsZTxFbnRpdHlNW10+IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEVudGl0eU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL2VudGl0aWVzYCwgcmVxdWVzdEJvZHkpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHlNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuTU9DS19TRVJWRVJ9ZW50aXRpZXNgKTtcbiAgICB9XG59XG4iXX0=