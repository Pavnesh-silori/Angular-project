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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvb3JnYW5pemF0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVuRCxNQUFNLE9BQU8sc0JBQXNCO0lBQy9CLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLG1CQUFtQixDQUFDLEtBQUs7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixpQkFBaUIsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLFNBQVMsTUFBTSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixpQkFBaUIsS0FBSyxlQUFlLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsTUFBTTtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLFNBQVMsTUFBTSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ25JLENBQUM7O29IQXBCUSxzQkFBc0IsNENBR25CLGFBQWE7d0hBSGhCLHNCQUFzQixjQUhuQixNQUFNOzRGQUdULHNCQUFzQjtrQkFKbEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9yZ0FjY2Vzc00sIE9yZ1NpdGVBY2Nlc3NNLCBPcmdhbml6YXRpb25NIH0gZnJvbSBcIi4uL21vZGVsL29yZ2FuaXphdGlvbi5tb2RlbFwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldE9yZ2FuaXphdGlvbkJ5SUQob3JnSUQpOiBPYnNlcnZhYmxlPE9yZ2FuaXphdGlvbk0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JnYW5pemF0aW9uTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9YCk7XG4gICAgfVxuXG4gICAgZ2V0T3JnQnlBY2Nlc3ModXNlcklEKTogT2JzZXJ2YWJsZTxPcmdBY2Nlc3NNW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T3JnQWNjZXNzTVtdPihgJHt0aGlzLmVudmlyb25tZW50Lk9SR0FOSVpBVElPTl9BUElfVVJMfXVzZXJzLyR7dXNlcklEfS9vcmdhbml6YXRpb25zLXNpdGVzL2FjY2Vzc2ApO1xuICAgIH1cblxuICAgIGdldE9yZ2FuaXphdGlvbnMob3JnSUQpOiBPYnNlcnZhYmxlPE9yZ0FjY2Vzc01bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmdBY2Nlc3NNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9vcmctZmFjaWxpdHlgKTtcbiAgICB9XG5cbiAgICBnZXRPcmdTaXRlV2l0aFVzZXJBY2Nlc3ModXNlcklEKTogT2JzZXJ2YWJsZTxPcmdTaXRlQWNjZXNzTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPcmdTaXRlQWNjZXNzTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH11c2Vycy8ke3VzZXJJRH0vb3JnYW5pemF0aW9ucy1zaXRlcy9hY2Nlc3MtbmV3YCk7XG4gICAgfVxufSJdfQ==