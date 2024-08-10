import { Inject, Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FacilityController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getFacilityByID(rootOrgID, facilityID) {
        return this.http.get(`${this.environment.ORGANIZATION_API_URL}organizations/${rootOrgID}/facility/${facilityID}`);
    }
}
FacilityController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
FacilityController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWxpdHkuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZmFjaWxpdHktc2VydmljZS9zcmMvbGliL3RzYy9jb250cm9sbGVyL2ZhY2lsaXR5LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVVuRCxNQUFNLE9BQU8sa0JBQWtCO0lBRTNCLFlBQ1ksSUFBZ0IsRUFDTyxXQUFnQjtRQUR2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ08sZ0JBQVcsR0FBWCxXQUFXLENBQUs7SUFDL0MsQ0FBQztJQUVMLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVTtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsaUJBQWlCLFNBQVMsYUFBYSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7O2dIQVRRLGtCQUFrQiw0Q0FJZixhQUFhO29IQUpoQixrQkFBa0IsY0FIZixNQUFNOzRGQUdULGtCQUFrQjtrQkFKOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEZhY2lsaXR5TSB9IGZyb20gXCIuLi9tb2RlbC9mYWNpbGl0eS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRmFjaWxpdHlDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldEZhY2lsaXR5QnlJRChyb290T3JnSUQsIGZhY2lsaXR5SUQpOiBPYnNlcnZhYmxlPEZhY2lsaXR5TT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxGYWNpbGl0eU0+KGAke3RoaXMuZW52aXJvbm1lbnQuT1JHQU5JWkFUSU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke3Jvb3RPcmdJRH0vZmFjaWxpdHkvJHtmYWNpbGl0eUlEfWApO1xuICAgIH1cbn0iXX0=