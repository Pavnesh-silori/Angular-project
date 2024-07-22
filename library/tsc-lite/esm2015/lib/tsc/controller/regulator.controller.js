import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RegulatorController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getRegulatorStatusInfo(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/status`);
    }
    getRegulatorsType(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/regulators/type`);
    }
    getRegulatorsEntities(regulatorTypeFilterArr, orgID) {
        let params = new HttpParams();
        regulatorTypeFilterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/dashboard/regulators-entities`, { params: params });
    }
}
RegulatorController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RegulatorController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RegulatorController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVndWxhdG9yLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvcmVndWxhdG9yLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFXOUQsTUFBTSxPQUFPLG1CQUFtQjtJQUU1QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxzQkFBc0IsQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssa0JBQWtCLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsS0FBSztRQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssZ0NBQWdDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsSyxDQUFDOztpSEFwQlEsbUJBQW1CLDRDQUloQixhQUFhO3FIQUpoQixtQkFBbUIsY0FIaEIsTUFBTTs0RkFHVCxtQkFBbUI7a0JBSi9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFNUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RhdHVzSW5mb00gfSBmcm9tICcuLi9tb2RlbC9kZXZpY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVndWxhdG9yVHlwZUksIFJlZ3VsYXRvcnNFbnRpdGllc0kgfSBmcm9tICcuLi9tb2RlbC9yZWd1bGF0b3IubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUmVndWxhdG9yQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICAgICkgeyB9XG5cbiAgICBnZXRSZWd1bGF0b3JTdGF0dXNJbmZvKG9yZ0lEKTogT2JzZXJ2YWJsZTxTdGF0dXNJbmZvTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTdGF0dXNJbmZvTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9yZWd1bGF0b3JzL3N0YXR1c2ApO1xuICAgIH1cblxuICAgIGdldFJlZ3VsYXRvcnNUeXBlKG9yZ0lEKTogT2JzZXJ2YWJsZTxSZWd1bGF0b3JUeXBlSVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlZ3VsYXRvclR5cGVJW10+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vcmVndWxhdG9ycy90eXBlYCk7XG4gICAgfVxuXG4gICAgZ2V0UmVndWxhdG9yc0VudGl0aWVzKHJlZ3VsYXRvclR5cGVGaWx0ZXJBcnIsIG9yZ0lEKTogT2JzZXJ2YWJsZTxSZWd1bGF0b3JzRW50aXRpZXNJW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHJlZ3VsYXRvclR5cGVGaWx0ZXJBcnIuZm9yRWFjaChmaWx0ZXIgPT4gcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZmlsdGVyJywgZmlsdGVyKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UmVndWxhdG9yc0VudGl0aWVzSVtdPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2Rhc2hib2FyZC9yZWd1bGF0b3JzLWVudGl0aWVzYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG59XG4iXX0=