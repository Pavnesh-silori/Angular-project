import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
// /tsc-library/
export class ConsumerController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    createConsumerType(orgID, consumer) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types`, consumer);
    }
    getConsumerTypeByID(orgID, consumerID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }
    updateConsumerType(orgID, consumerID, consumer) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`, consumer);
    }
    deleteConsumerType(orgID, consumerID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/${consumerID}`);
    }
    getConsumerTypeByPage(pageNo, pageSize, sortBy, orderBy, searchValue, filterArr, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        if (searchValue) {
            params = params.append('searchBy', searchValue);
        }
        filterArr.forEach(filter => params = params.append('filter', filter));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/consumers-types/page`, { params: params });
    }
}
ConsumerController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ConsumerController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29udHJvbGxlci9jb25zdW1lci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFFSCxVQUFVLEVBQ2IsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBUTlCLGdCQUFnQjtBQU1oQixNQUFNLE9BQU8sa0JBQWtCO0lBRTNCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFVBQVU7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2xJLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVE7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFVBQVU7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLG9CQUFvQixVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSztRQUNsSCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUzQyxJQUFJLFdBQVcsRUFBRTtZQUNiLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNuRDtRQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV0RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUE2QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUosQ0FBQzs7Z0hBdENRLGtCQUFrQiw0Q0FJZixhQUFhO29IQUpoQixrQkFBa0IsY0FIZixNQUFNOzRGQUdULGtCQUFrQjtrQkFKOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEh0dHBDbGllbnQsXG4gICAgSHR0cFBhcmFtc1xufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU291cmNlQ29uc3VtZXJQYWdlTSwgQ29uc3VtZXJNIH0gZnJvbSAnLi4vbW9kZWwvc291cmNlLWNvbnN1bWVyLm1vZGVsJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFBhZ2VNIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25zdW1lckNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgY3JlYXRlQ29uc3VtZXJUeXBlKG9yZ0lELCBjb25zdW1lcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9jb25zdW1lcnMtdHlwZXNgLCBjb25zdW1lcik7XG4gICAgfVxuXG4gICAgZ2V0Q29uc3VtZXJUeXBlQnlJRChvcmdJRCwgY29uc3VtZXJJRCk6IE9ic2VydmFibGU8Q29uc3VtZXJNPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENvbnN1bWVyTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9jb25zdW1lcnMtdHlwZXMvJHtjb25zdW1lcklEfWApO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnN1bWVyVHlwZShvcmdJRCwgY29uc3VtZXJJRCwgY29uc3VtZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2NvbnN1bWVycy10eXBlcy8ke2NvbnN1bWVySUR9YCwgY29uc3VtZXIpO1xuICAgIH1cblxuICAgIGRlbGV0ZUNvbnN1bWVyVHlwZShvcmdJRCwgY29uc3VtZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2NvbnN1bWVycy10eXBlcy8ke2NvbnN1bWVySUR9YCk7XG4gICAgfVxuXG4gICAgZ2V0Q29uc3VtZXJUeXBlQnlQYWdlKHBhZ2VObzogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBzb3J0Qnk6IHN0cmluZywgb3JkZXJCeTogc3RyaW5nLCBzZWFyY2hWYWx1ZSwgZmlsdGVyQXJyLCBvcmdJRCk6IE9ic2VydmFibGU8UGFnZU08U291cmNlQ29uc3VtZXJQYWdlTT4+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZU5vJywgcGFnZU5vKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgncGFnZVNpemUnLCBwYWdlU2l6ZSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NvcnRCeScsIHNvcnRCeSk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ29yZGVyQnknLCBvcmRlckJ5KTtcblxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3NlYXJjaEJ5Jywgc2VhcmNoVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyQXJyLmZvckVhY2goZmlsdGVyID0+IHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2ZpbHRlcicsIGZpbHRlcikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhZ2VNPFNvdXJjZUNvbnN1bWVyUGFnZU0+PihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2NvbnN1bWVycy10eXBlcy9wYWdlYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG5cbn1cbiJdfQ==