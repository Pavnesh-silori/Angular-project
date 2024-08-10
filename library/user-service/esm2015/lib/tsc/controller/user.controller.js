import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getUserByID(userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}users/${userID}`);
    }
    getUserOrgAccess(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/user-access`);
    }
    getUsersByOrgID(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users`);
    }
    getCurrentOrgUserAccess(orgID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/access`);
    }
}
UserController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
UserController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS91c2VyLXNlcnZpY2Uvc3JjL2xpYi90c2MvY29udHJvbGxlci91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVuRCxNQUFNLE9BQU8sY0FBYztJQUV2QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxXQUFXLENBQUMsTUFBTTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixTQUFTLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUs7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixpQkFBaUIsS0FBSyxjQUFjLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLGlCQUFpQixLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxLQUFLO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixpQkFBaUIsS0FBSyxlQUFlLENBQUMsQ0FBQztJQUNqSCxDQUFDOzs0R0FyQlEsY0FBYyw0Q0FJWCxhQUFhO2dIQUpoQixjQUFjLGNBSFgsTUFBTTs0RkFHVCxjQUFjO2tCQUoxQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBVc2VyTSwgVXNlck9yZ0FjY2Vzc00gfSBmcm9tIFwiLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0VXNlckJ5SUQodXNlcklEKTogT2JzZXJ2YWJsZTxVc2VyTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH11c2Vycy8ke3VzZXJJRH1gKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyT3JnQWNjZXNzKG9yZ0lEKTogT2JzZXJ2YWJsZTxVc2VyT3JnQWNjZXNzTT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyT3JnQWNjZXNzTT4oYCR7dGhpcy5lbnZpcm9ubWVudC5PUkdBTklaQVRJT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L3VzZXItYWNjZXNzYCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnNCeU9yZ0lEKG9yZ0lEKTogT2JzZXJ2YWJsZTxVc2VyTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS91c2Vyc2ApO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRPcmdVc2VyQWNjZXNzKG9yZ0lEKTogT2JzZXJ2YWJsZTxVc2VyTVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJNW10+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS91c2Vycy9hY2Nlc3NgKTtcbiAgICB9XG59Il19