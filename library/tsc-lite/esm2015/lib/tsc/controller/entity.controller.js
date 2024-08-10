import { Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
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
    getEntityTypeByLayoutID(orgID, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities/type`, { headers: headers });
    }
    getEntitiesWithDevices(orgID, layoutID, requestBody, skipLoader) {
        let headers = new HttpHeaders().set('skipLoader', skipLoader);
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entity-device`, requestBody, { headers: headers });
    }
    getEntityByParameterID(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities`, requestBody);
        // return this.http.get<EntityM[]>(`${this.environment.MOCK_SERVER}entities`);
    }
    getEntitiesForTreeView(orgID, layoutID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities`);
    }
    getEntityByID(orgID, layoutID, entityID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
    }
    createEntity(orgID, layoutID, entityID, entity) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}/add-child`, entity);
    }
    updateEntity(orgID, layoutID, entityID, entity) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`, entity);
    }
    deleteEntity(orgID, layoutID, entityID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}/entities/${entityID}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvZW50aXR5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFVL0QsTUFBTSxPQUFPLGdCQUFnQjtJQUV6QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxrQkFBa0IsQ0FBQyxLQUFLO1FBQ3BCLDRHQUE0RztRQUM1RyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHVCQUF1QixXQUFXLFdBQVcsQ0FBQyxDQUFDO0lBQ25KLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsV0FBVztRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssNEJBQTRCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakksQ0FBQztJQUVELHVCQUF1QixDQUFDLEtBQUssRUFBRSxVQUFVO1FBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU5RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLGdCQUFnQixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUksQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVU7UUFDM0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxZQUFZLFFBQVEsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUssQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvSCw4RUFBOEU7SUFDbEYsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxRQUFRO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLFdBQVcsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxZQUFZLFFBQVEsYUFBYSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNJLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTTtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLGFBQWEsUUFBUSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckosQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxZQUFZLFFBQVEsYUFBYSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1SSxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUTtRQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLGFBQWEsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUNwSSxDQUFDOzs4R0F2RFEsZ0JBQWdCLDRDQUliLGFBQWE7a0hBSmhCLGdCQUFnQixjQUhiLE1BQU07NEZBR1QsZ0JBQWdCO2tCQUo1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFbnRpdHlNLCBFbnRpdHlUcmVlTSwgRW50aXR5VHlwZU0gfSBmcm9tICcuLi9tb2RlbC9lbnRpdHkubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRW50aXR5Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRFbnRpdGllc0J5T3JnSUQob3JnSUQpOiBPYnNlcnZhYmxlPEVudGl0eU1bXT4ge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldDxFbnRpdHlNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vZW50aXRpZXNgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5TVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfWVudGl0aWVzYCk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5SGllcmFyY2h5QnlQYXJhbWV0ZXJJRChvcmdJRCwgcGFyYW1ldGVySUQpOiBPYnNlcnZhYmxlPEVudGl0eVRyZWVNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5VHJlZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL3BhcmFtZXRlcnMvJHtwYXJhbWV0ZXJJRH0vZW50aXRpZXNgKTtcbiAgICB9XG5cbiAgICBnZXRFbnRpdHlMZXZlbENvbnN1bXB0aW9uKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy9sb2FkLWNvbnN1bXB0aW9uYCwgcmVxdWVzdEJvZHkpO1xuICAgIH1cblxuICAgIGdldEVudGl0eVR5cGVCeUxheW91dElEKG9yZ0lELCBza2lwTG9hZGVyKTogT2JzZXJ2YWJsZTxFbnRpdHlUeXBlTVtdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdza2lwTG9hZGVyJywgc2tpcExvYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5VHlwZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy90eXBlYCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIH1cblxuICAgIGdldEVudGl0aWVzV2l0aERldmljZXMob3JnSUQsIGxheW91dElELCByZXF1ZXN0Qm9keSwgc2tpcExvYWRlcik6IE9ic2VydmFibGU8RW50aXR5VHJlZU0+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ3NraXBMb2FkZXInLCBza2lwTG9hZGVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RW50aXR5VHJlZU0+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfS9lbnRpdHktZGV2aWNlYCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB9XG5cbiAgICBnZXRFbnRpdHlCeVBhcmFtZXRlcklEKG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8RW50aXR5TVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxFbnRpdHlNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy9lbnRpdGllc2AsIHJlcXVlc3RCb2R5KTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5TVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfWVudGl0aWVzYCk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXNGb3JUcmVlVmlldyhvcmdJRCwgbGF5b3V0SUQpOiBPYnNlcnZhYmxlPEVudGl0eVRyZWVNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RW50aXR5VHJlZU1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzLyR7bGF5b3V0SUR9L2VudGl0aWVzYCk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXR5QnlJRChvcmdJRCwgbGF5b3V0SUQsIGVudGl0eUlEKTogT2JzZXJ2YWJsZTxFbnRpdHlNPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEVudGl0eU0+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfS9lbnRpdGllcy8ke2VudGl0eUlEfWApO1xuICAgIH1cblxuICAgIGNyZWF0ZUVudGl0eShvcmdJRCwgbGF5b3V0SUQsIGVudGl0eUlELCBlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfS9lbnRpdGllcy8ke2VudGl0eUlEfS9hZGQtY2hpbGRgLCBlbnRpdHkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVudGl0eShvcmdJRCwgbGF5b3V0SUQsIGVudGl0eUlELCBlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvJHtsYXlvdXRJRH0vZW50aXRpZXMvJHtlbnRpdHlJRH1gLCBlbnRpdHkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUVudGl0eShvcmdJRCwgbGF5b3V0SUQsIGVudGl0eUlEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfS9lbnRpdGllcy8ke2VudGl0eUlEfWApXG4gICAgfVxufVxuIl19