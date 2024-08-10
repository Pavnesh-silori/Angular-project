import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { Facility } from "../model/facility.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/facility.controller";
export class FacilityService {
    constructor(facilityController) {
        this.facilityController = facilityController;
    }
    getFacilityByID(rootOrgID, facilityID) {
        return __awaiter(this, void 0, void 0, function* () {
            let facilityM;
            let facility = new Facility();
            try {
                facilityM = yield this.facilityController.getFacilityByID(rootOrgID, facilityID).toPromise();
                if (facilityM) {
                    return facilityM;
                }
                else {
                    return facility;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return facility;
            }
        });
    }
}
FacilityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, deps: [{ token: i1.FacilityController }], target: i0.ɵɵFactoryTarget.Injectable });
FacilityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.FacilityController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWxpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZmFjaWxpdHktc2VydmljZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2ZhY2lsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBYSxNQUFNLHlCQUF5QixDQUFDOzs7QUFROUQsTUFBTSxPQUFPLGVBQWU7SUFFeEIsWUFDWSxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5QyxDQUFDO0lBRUMsZUFBZSxDQUFDLFNBQWlCLEVBQUUsVUFBa0I7O1lBQ3ZELElBQUksU0FBb0IsQ0FBQztZQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBRTlCLElBQUk7Z0JBQ0EsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRTdGLElBQUksU0FBUyxFQUFFO29CQUNYLE9BQU8sU0FBUyxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDSCxPQUFPLFFBQVEsQ0FBQztpQkFDbkI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLFFBQVEsQ0FBQzthQUNuQjtRQUNMLENBQUM7S0FBQTs7NkdBdEJRLGVBQWU7aUhBQWYsZUFBZSxjQUhaLE1BQU07NEZBR1QsZUFBZTtrQkFKM0IsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRmFjaWxpdHksIEZhY2lsaXR5TSB9IGZyb20gXCIuLi9tb2RlbC9mYWNpbGl0eS5tb2RlbFwiO1xuXG5pbXBvcnQgeyBGYWNpbGl0eUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlci9mYWNpbGl0eS5jb250cm9sbGVyXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWNpbGl0eVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmFjaWxpdHlDb250cm9sbGVyOiBGYWNpbGl0eUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0RmFjaWxpdHlCeUlEKHJvb3RPcmdJRDogbnVtYmVyLCBmYWNpbGl0eUlEOiBudW1iZXIpOiBQcm9taXNlPEZhY2lsaXR5TT4ge1xuICAgICAgICBsZXQgZmFjaWxpdHlNOiBGYWNpbGl0eU07XG4gICAgICAgIGxldCBmYWNpbGl0eSA9IG5ldyBGYWNpbGl0eSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmYWNpbGl0eU0gPSBhd2FpdCB0aGlzLmZhY2lsaXR5Q29udHJvbGxlci5nZXRGYWNpbGl0eUJ5SUQocm9vdE9yZ0lELCBmYWNpbGl0eUlEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGZhY2lsaXR5TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWNpbGl0eU07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWNpbGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFjaWxpdHk7XG4gICAgICAgIH1cbiAgICB9XG59Il19