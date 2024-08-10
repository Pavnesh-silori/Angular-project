import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EntityDeviceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getDevicesWithEntities(orgID, requestBody) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/entities/devices`, requestBody);
    }
    getDevicesWithEntitiesByParameter(orgID, paramName) {
        let params = new HttpParams();
        params = params.append('paramName', paramName);
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/entities-devices`, { params: params });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRldmljZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb250cm9sbGVyL2VudGl0eS1kZXZpY2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVU5RCxNQUFNLE9BQU8sc0JBQXNCO0lBRS9CLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssMkJBQTJCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEosQ0FBQztJQUVELGlDQUFpQyxDQUFDLEtBQUssRUFBRSxTQUFTO1FBQzlDLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0SixDQUFDOztvSEFoQlEsc0JBQXNCLDRDQUluQixhQUFhO3dIQUpoQixzQkFBc0IsY0FIbkIsTUFBTTs0RkFHVCxzQkFBc0I7a0JBSmxDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFNUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGV2aWNlc1dpdGhFbnRpdGllc00gfSBmcm9tICcuLi9tb2RlbC9kZXZpY2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRW50aXR5RGV2aWNlQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXREZXZpY2VzV2l0aEVudGl0aWVzKG9yZ0lELCByZXF1ZXN0Qm9keSk6IE9ic2VydmFibGU8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzL2VudGl0aWVzL2RldmljZXNgLCByZXF1ZXN0Qm9keSk7XG4gICAgfVxuXG4gICAgZ2V0RGV2aWNlc1dpdGhFbnRpdGllc0J5UGFyYW1ldGVyKG9yZ0lELCBwYXJhbU5hbWUpOiBPYnNlcnZhYmxlPERldmljZXNXaXRoRW50aXRpZXNNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3BhcmFtTmFtZScsIHBhcmFtTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV2aWNlc1dpdGhFbnRpdGllc01bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9lbnRpdGllcy1kZXZpY2VzYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG59XG4iXX0=