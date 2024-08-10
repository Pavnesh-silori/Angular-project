import { Injectable, Inject } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class RBACController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getResourcePermissionByOrgIDAndUserID(orgID, userID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${orgID}/users/${userID}/resource-permissions`);
        // return this.http.get(`${this.environment.MOCK_SERVER}resourcePermission`);
    }
}
RBACController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
RBACController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9yYmFjLXNlcnZpY2Uvc3JjL2xpYi90c2MvY29udHJvbGxlci9yYmFjLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sY0FBYztJQUN2QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxxQ0FBcUMsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsaUJBQWlCLEtBQUssVUFBVSxNQUFNLHVCQUF1QixDQUFDLENBQUM7UUFFNUgsNkVBQTZFO0lBQ2pGLENBQUM7OzRHQVZRLGNBQWMsNENBR1gsYUFBYTtnSEFIaEIsY0FBYyxjQUhYLE1BQU07NEZBR1QsY0FBYztrQkFKMUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSQkFDQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50OiBhbnlcbiAgICApIHsgfVxuXG4gICAgZ2V0UmVzb3VyY2VQZXJtaXNzaW9uQnlPcmdJREFuZFVzZXJJRChvcmdJRCwgdXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS91c2Vycy8ke3VzZXJJRH0vcmVzb3VyY2UtcGVybWlzc2lvbnNgKTtcblxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmVudmlyb25tZW50Lk1PQ0tfU0VSVkVSfXJlc291cmNlUGVybWlzc2lvbmApO1xuICAgIH1cbn1cbiJdfQ==