import { Inject, Injectable } from "@angular/core";
import { HttpParams, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthorizationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getAuthorizationByApp(applicationKeyID, orgID) {
        let headers = new HttpHeaders();
        headers = headers.set('applicationKeyID', applicationKeyID);
        let params = new HttpParams();
        params = params.append('orgID', orgID);
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}authorization`, { params: params, headers: headers });
    }
}
AuthorizationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9hdXRob3JpemF0aW9uL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvYXV0aG9yaXphdGlvbi5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBYyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVUzRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2hDLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLHFCQUFxQixDQUFDLGdCQUF3QixFQUFFLEtBQWE7UUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTVELElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN4SSxDQUFDOztxSEFkUSx1QkFBdUIsNENBR3BCLGFBQWE7eUhBSGhCLHVCQUF1QixjQUhwQixNQUFNOzRGQUdULHVCQUF1QjtrQkFKbkMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhvcml6YXRpb25NIH0gZnJvbSAnLi4vbW9kZWwvYXV0aG9yaXphdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0QXV0aG9yaXphdGlvbkJ5QXBwKGFwcGxpY2F0aW9uS2V5SUQ6IHN0cmluZywgb3JnSUQ6IG51bWJlcik6IE9ic2VydmFibGU8QXV0aG9yaXphdGlvbk0+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdhcHBsaWNhdGlvbktleUlEJywgYXBwbGljYXRpb25LZXlJRCk7XG5cbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ29yZ0lEJywgb3JnSUQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEF1dGhvcml6YXRpb25NPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9BUElfVVJMfWF1dGhvcml6YXRpb25gLCB7IHBhcmFtczogcGFyYW1zLCBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIH1cbn0iXX0=