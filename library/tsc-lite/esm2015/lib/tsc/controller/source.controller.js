import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// /tsc-library/
export class SourceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createSourceType(orgID, source) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types`, source);
    }
    getSourceTypeByID(orgID, sourceID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }
    updateSourceType(orgID, sourceID, source) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`, source);
    }
    deleteSourceType(orgID, sourceID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/${sourceID}`);
    }
    getSourceTypeByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-types/page`, { params: params });
    }
    getUtilitySourceAndType(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/utility-sources-types`);
    }
    getSourceConsumerType(orgID, type) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-type`, type);
    }
    getSourceConsumerConfig(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/sources-consumers-configure`);
    }
}
SourceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
SourceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvc291cmNlLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUVILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDOzs7QUFROUIsZ0JBQWdCO0FBTWhCLE1BQU0sT0FBTyxnQkFBZ0I7SUFFekIsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsUUFBUTtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssa0JBQWtCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUgsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTTtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssa0JBQWtCLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssa0JBQWtCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVELG1CQUFtQixDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUFlLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLO1FBQ2hILElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUksV0FBVyxFQUFFO1lBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTZCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUsscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1SixDQUFDO0lBRUQsdUJBQXVCLENBQUMsS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHdCQUF3QixDQUFDLENBQUM7SUFDbkksQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQUssRUFBRSxJQUFJO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsSSxDQUFDO0lBRUQsdUJBQXVCLENBQUMsS0FBSztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLDhCQUE4QixDQUFDLENBQUM7SUFDL0ksQ0FBQzs7OEdBbERRLGdCQUFnQiw0Q0FJYixhQUFhO2tIQUpoQixnQkFBZ0IsY0FIYixNQUFNOzRGQUdULGdCQUFnQjtrQkFKNUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEh0dHBDbGllbnQsXG4gICAgSHR0cFBhcmFtc1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU291cmNlQ29uc3VtZXJDb25maWd1cmVNLCBTb3VyY2VDb25zdW1lclBhZ2VNLCBTb3VyY2VNLCBVdGlsaXR5U291cmNlVHlwZU0gfSBmcm9tICcuLi9tb2RlbC9zb3VyY2UtY29uc3VtZXIubW9kZWwnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgUGFnZU0sIFN0YXRpY0kgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgY3JlYXRlU291cmNlVHlwZShvcmdJRCwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NvdXJjZXMtdHlwZXNgLCBzb3VyY2UpO1xuICAgIH1cblxuICAgIGdldFNvdXJjZVR5cGVCeUlEKG9yZ0lELCBzb3VyY2VJRCk6IE9ic2VydmFibGU8U291cmNlTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTb3VyY2VNPihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NvdXJjZXMtdHlwZXMvJHtzb3VyY2VJRH1gKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTb3VyY2VUeXBlKG9yZ0lELCBzb3VyY2VJRCwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9zb3VyY2VzLXR5cGVzLyR7c291cmNlSUR9YCwgc291cmNlKTtcbiAgICB9XG5cbiAgICBkZWxldGVTb3VyY2VUeXBlKG9yZ0lELCBzb3VyY2VJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NvdXJjZXMtdHlwZXMvJHtzb3VyY2VJRH1gKTtcbiAgICB9XG5cbiAgICBnZXRTb3VyY2VUeXBlQnlQYWdlKHBhZ2VObzogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBzb3J0Qnk6IHN0cmluZywgb3JkZXJCeTogc3RyaW5nLCBzZWFyY2hWYWx1ZSwgZmlsdGVyQXJyLCBvcmdJRCk6IE9ic2VydmFibGU8UGFnZU08U291cmNlQ29uc3VtZXJQYWdlTT4+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZU5vJywgcGFnZU5vKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZVNpemUnLCBwYWdlU2l6ZSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NvcnRCeScsIHNvcnRCeSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ29yZGVyQnknLCBvcmRlckJ5KTtcblxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NlYXJjaEJ5Jywgc2VhcmNoVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyQXJyLmZvckVhY2goZmlsdGVyID0+IHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2ZpbHRlcicsIGZpbHRlcikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhZ2VNPFNvdXJjZUNvbnN1bWVyUGFnZU0+PihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3NvdXJjZXMtdHlwZXMvcGFnZWAsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXRpbGl0eVNvdXJjZUFuZFR5cGUob3JnSUQpOiBPYnNlcnZhYmxlPFV0aWxpdHlTb3VyY2VUeXBlTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVdGlsaXR5U291cmNlVHlwZU0+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vdXRpbGl0eS1zb3VyY2VzLXR5cGVzYCk7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlQ29uc3VtZXJUeXBlKG9yZ0lELCB0eXBlKTogT2JzZXJ2YWJsZTxTdGF0aWNJW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFN0YXRpY0lbXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9zb3VyY2VzLWNvbnN1bWVycy10eXBlYCwgdHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0U291cmNlQ29uc3VtZXJDb25maWcob3JnSUQpOiBPYnNlcnZhYmxlPFNvdXJjZUNvbnN1bWVyQ29uZmlndXJlTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxTb3VyY2VDb25zdW1lckNvbmZpZ3VyZU0+KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vc291cmNlcy1jb25zdW1lcnMtY29uZmlndXJlYCk7XG4gICAgfVxuXG59XG4iXX0=