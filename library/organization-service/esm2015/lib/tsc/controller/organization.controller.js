import { HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OrganizationController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getOrganizationByID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}`);
    }
    getOrgByAccess(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access`);
    }
    getOrganizations(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/org-facility`);
    }
    getOrganizationsByType(orgID, type) {
        let params = new HttpParams();
        params = params.append('type', type);
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/org-facility`, { params: params });
    }
    getOrgSiteWithUserAccess(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}/organizations-sites/access-new`);
    }
}
OrganizationController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
OrganizationController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvb3JnYW5pemF0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVbkQsTUFBTSxPQUFPLHNCQUFzQjtJQUMvQixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFNO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixTQUFTLE1BQU0sNkJBQTZCLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBSztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsaUJBQWlCLEtBQUssZUFBZSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixpQkFBaUIsS0FBSyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxSSxDQUFDO0lBRUQsd0JBQXdCLENBQUMsTUFBTTtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLFNBQVMsTUFBTSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ25JLENBQUM7O29IQTNCUSxzQkFBc0IsNENBR25CLGFBQWE7d0hBSGhCLHNCQUFzQixjQUhuQixNQUFNOzRGQUdULHNCQUFzQjtrQkFKbEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9yZ0FjY2Vzc00sIE9yZ1NpdGVBY2Nlc3NNLCBPcmdhbml6YXRpb25NIH0gZnJvbSBcIi4uL21vZGVsL29yZ2FuaXphdGlvbi5tb2RlbFwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldE9yZ2FuaXphdGlvbkJ5SUQob3JnSUQpOiBPYnNlcnZhYmxlPE9yZ2FuaXphdGlvbk0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JnYW5pemF0aW9uTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9YCk7XG4gICAgfVxuXG4gICAgZ2V0T3JnQnlBY2Nlc3ModXNlcklEKTogT2JzZXJ2YWJsZTxPcmdBY2Nlc3NNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JnQWNjZXNzTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9BUElfVVJMfXVzZXJzLyR7dXNlcklEfS9vcmdhbml6YXRpb25zLXNpdGVzL2FjY2Vzc2ApO1xuICAgIH1cblxuICAgIGdldE9yZ2FuaXphdGlvbnMob3JnSUQpOiBPYnNlcnZhYmxlPE9yZ0FjY2Vzc01bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmdBY2Nlc3NNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9vcmctZmFjaWxpdHlgKTtcbiAgICB9XG5cbiAgICBnZXRPcmdhbml6YXRpb25zQnlUeXBlKG9yZ0lELCB0eXBlKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCd0eXBlJywgdHlwZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmdBY2Nlc3NNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9vcmctZmFjaWxpdHlgLCB7IHBhcmFtczogcGFyYW1zIH0pO1xuICAgIH1cblxuICAgIGdldE9yZ1NpdGVXaXRoVXNlckFjY2Vzcyh1c2VySUQpOiBPYnNlcnZhYmxlPE9yZ1NpdGVBY2Nlc3NNPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9yZ1NpdGVBY2Nlc3NNPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9BUElfVVJMfXVzZXJzLyR7dXNlcklEfS9vcmdhbml6YXRpb25zLXNpdGVzL2FjY2Vzcy1uZXdgKTtcbiAgICB9XG59Il19