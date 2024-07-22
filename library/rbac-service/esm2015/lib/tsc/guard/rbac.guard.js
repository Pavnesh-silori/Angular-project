import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../service/rbac.service";
export class RBACGuard {
    constructor(router, isResourcePermission) {
        this.router = router;
        this.isResourcePermission = isResourcePermission;
    }
    canActivate(next) {
        let rBACGuard = false;
        const resourcePermission = next.data.resourcePermission;
        rBACGuard = this.isResourcePermission.isResourcePermission(resourcePermission);
        if (rBACGuard) {
            return true;
        }
        else {
            return this.router.createUrlTree(['/no-authorization']);
        }
    }
}
RBACGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, deps: [{ token: i1.Router }, { token: i2.IsResourcePermission }], target: i0.ɵɵFactoryTarget.Injectable });
RBACGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RBACGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.IsResourcePermission }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvcmJhYy1zZXJ2aWNlL3NyYy9saWIvdHNjL2d1YXJkL3JiYWMuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWlCM0MsTUFBTSxPQUFPLFNBQVM7SUFDbEIsWUFDWSxNQUFjLEVBQ2Qsb0JBQTBDO1FBRDFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2xELENBQUM7SUFFTCxXQUFXLENBQ1AsSUFBNEI7UUFDNUIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN4RCxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0UsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQzs7dUdBakJRLFNBQVM7MkdBQVQsU0FBUyxjQUhOLE1BQU07NEZBR1QsU0FBUztrQkFKckIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQ2FuQWN0aXZhdGUsXG4gICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBVcmxUcmVlLFxuICAgIFJvdXRlclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElzUmVzb3VyY2VQZXJtaXNzaW9uIH0gZnJvbSAnLi4vc2VydmljZS9yYmFjLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgUkJBQ0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGlzUmVzb3VyY2VQZXJtaXNzaW9uOiBJc1Jlc291cmNlUGVybWlzc2lvblxuICAgICkgeyB9XG5cbiAgICBjYW5BY3RpdmF0ZShcbiAgICAgICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgICAgIGxldCByQkFDR3VhcmQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VQZXJtaXNzaW9uID0gbmV4dC5kYXRhLnJlc291cmNlUGVybWlzc2lvbjtcbiAgICAgICAgckJBQ0d1YXJkID0gdGhpcy5pc1Jlc291cmNlUGVybWlzc2lvbi5pc1Jlc291cmNlUGVybWlzc2lvbihyZXNvdXJjZVBlcm1pc3Npb24pO1xuXG4gICAgICAgIGlmIChyQkFDR3VhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoWycvbm8tYXV0aG9yaXphdGlvbiddKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbiJdfQ==