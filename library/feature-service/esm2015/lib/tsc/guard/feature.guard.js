import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../service/feature.service";
export class FeatureGuard {
    constructor(router, isFeatureAvailable) {
        this.router = router;
        this.isFeatureAvailable = isFeatureAvailable;
    }
    canActivate(next) {
        let featureGuard = false;
        const featureKeyID = next.data.featureKeyID;
        featureGuard = this.isFeatureAvailable.isFeatureAvailable(featureKeyID);
        if (featureGuard) {
            return true;
        }
        else {
            return this.router.createUrlTree(['/feature-not-available']);
        }
    }
}
FeatureGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }, { token: i2.IsFeatureAvailable }], target: i0.ɵɵFactoryTarget.Injectable });
FeatureGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.IsFeatureAvailable }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZmVhdHVyZS1zZXJ2aWNlL3NyYy9saWIvdHNjL2d1YXJkL2ZlYXR1cmUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWlCM0MsTUFBTSxPQUFPLFlBQVk7SUFDckIsWUFDWSxNQUFjLEVBQ2Qsa0JBQXNDO1FBRHRDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzlDLENBQUM7SUFFTCxXQUFXLENBQ1AsSUFBNEI7UUFDNUIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzVDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEUsSUFBSSxZQUFZLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0wsQ0FBQzs7MEdBakJRLFlBQVk7OEdBQVosWUFBWSxjQUhULE1BQU07NEZBR1QsWUFBWTtrQkFKeEIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQ2FuQWN0aXZhdGUsXG4gICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBVcmxUcmVlLFxuICAgIFJvdXRlclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElzRmVhdHVyZUF2YWlsYWJsZSB9IGZyb20gJy4uL3NlcnZpY2UvZmVhdHVyZS5zZXJ2aWNlJzsgXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgaXNGZWF0dXJlQXZhaWxhYmxlOiBJc0ZlYXR1cmVBdmFpbGFibGVcbiAgICApIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUoXG4gICAgICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgICAgICBsZXQgZmVhdHVyZUd1YXJkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVLZXlJRCA9IG5leHQuZGF0YS5mZWF0dXJlS2V5SUQ7XG4gICAgICAgIGZlYXR1cmVHdWFyZCA9IHRoaXMuaXNGZWF0dXJlQXZhaWxhYmxlLmlzRmVhdHVyZUF2YWlsYWJsZShmZWF0dXJlS2V5SUQpO1xuXG4gICAgICAgIGlmIChmZWF0dXJlR3VhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoWycvZmVhdHVyZS1ub3QtYXZhaWxhYmxlJ10pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=