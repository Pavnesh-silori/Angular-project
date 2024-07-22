import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UnitController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getUnit(filters) {
        let params = new HttpParams();
        filters.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${this.environment.COMMON_API_URL}units/filter`, { params: params });
    }
    getUnitUsingPublicUrl(filters) {
        let params = new HttpParams();
        filters.forEach(filter => {
            params = params.append('filter', filter);
        });
        return this.http.get(`${this.environment.COMMON_PUBLIC_API_URL}units/filter`, { params: params });
    }
}
UnitController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
UnitController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS91bml0LXNlcnZpY2Uvc3JjL2xpYi90c2MvY29udHJvbGxlci91bml0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFTOUQsTUFBTSxPQUFPLGNBQWM7SUFDdkIsWUFDWSxJQUFnQixFQUNPLFdBQWdCO1FBRHZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztJQUMvQyxDQUFDO0lBRUwsT0FBTyxDQUFDLE9BQWlCO1FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxPQUFpQjtRQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTlCLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7OzRHQXhCUSxjQUFjLDRDQUdYLGFBQWE7Z0hBSGhCLGNBQWMsY0FIWCxNQUFNOzRGQUdULGNBQWM7a0JBSjFCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzswQkFLUSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE9sZFVuaXRNIH0gZnJvbSAnLi4vbW9kZWwvdW5pdC5tb2RlbCc7IFxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVW5pdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldFVuaXQoZmlsdGVyczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPE9sZFVuaXRNW10+IHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdmaWx0ZXInLCBmaWx0ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPbGRVbml0TVtdPihgJHt0aGlzLmVudmlyb25tZW50LkNPTU1PTl9BUElfVVJMfXVuaXRzL2ZpbHRlcmAsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgZ2V0VW5pdFVzaW5nUHVibGljVXJsKGZpbHRlcnM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxPbGRVbml0TVtdPiB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZmlsdGVyJywgZmlsdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2xkVW5pdE1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5DT01NT05fUFVCTElDX0FQSV9VUkx9dW5pdHMvZmlsdGVyYCwgeyBwYXJhbXM6IHBhcmFtcyB9KTtcbiAgICB9XG59XG4iXX0=