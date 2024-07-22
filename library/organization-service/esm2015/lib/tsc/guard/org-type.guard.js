import { Injectable } from '@angular/core';
import { OrgType, OrgSiteAccessType } from '../enum/organization.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
export class OrgTypeGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        let currentOrgType;
        let orgTypeAccess;
        currentOrgType = this.storageService.getStorage('currentOrgType');
        orgTypeAccess = route.data.orgTypeAccess;
        if (currentOrgType == OrgType.SITE && (orgTypeAccess == OrgSiteAccessType.SITE || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        }
        else if (currentOrgType == OrgType.ORGANIZATION && (orgTypeAccess == OrgSiteAccessType.ORG || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        }
        else {
            return this.router.navigate(['/']);
            return false;
        }
    }
}
OrgTypeGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, deps: [{ token: i1.Router }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
OrgTypeGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgTypeGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLXR5cGUuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L29yZ2FuaXphdGlvbi1zZXJ2aWNlL3NyYy9saWIvdHNjL2d1YXJkL29yZy10eXBlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXM0MsT0FBTyxFQUNILE9BQU8sRUFDUCxpQkFBaUIsRUFDcEIsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQVFuQyxNQUFNLE9BQU8sWUFBWTtJQUNyQixZQUNZLE1BQWMsRUFDZCxjQUE4QjtRQUQ5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3RDLENBQUM7SUFFTCxXQUFXLENBQ1AsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxjQUFzQixDQUFDO1FBQzNCLElBQUksYUFBcUIsQ0FBQztRQUUxQixjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRSxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFekMsSUFBSSxjQUFjLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLElBQUksYUFBYSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLGNBQWMsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsYUFBYSxJQUFJLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxhQUFhLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUksT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzswR0F4QlEsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBDYW5BY3RpdmF0ZSxcbiAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIFJvdXRlclN0YXRlU25hcHNob3QsXG4gICAgUm91dGVyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgICBPcmdUeXBlLFxuICAgIE9yZ1NpdGVBY2Nlc3NUeXBlXG59IGZyb20gJy4uL2VudW0vb3JnYW5pemF0aW9uLmVudW0nO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmdUeXBlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBjYW5BY3RpdmF0ZShcbiAgICAgICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcblxuICAgICAgICBsZXQgY3VycmVudE9yZ1R5cGU6IHN0cmluZztcbiAgICAgICAgbGV0IG9yZ1R5cGVBY2Nlc3M6IHN0cmluZztcblxuICAgICAgICBjdXJyZW50T3JnVHlwZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ1R5cGUnKTtcbiAgICAgICAgb3JnVHlwZUFjY2VzcyA9IHJvdXRlLmRhdGEub3JnVHlwZUFjY2VzcztcblxuICAgICAgICBpZiAoY3VycmVudE9yZ1R5cGUgPT0gT3JnVHlwZS5TSVRFICYmIChvcmdUeXBlQWNjZXNzID09IE9yZ1NpdGVBY2Nlc3NUeXBlLlNJVEUgfHwgb3JnVHlwZUFjY2VzcyA9PSBPcmdTaXRlQWNjZXNzVHlwZS5PUkdfU0lURSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRPcmdUeXBlID09IE9yZ1R5cGUuT1JHQU5JWkFUSU9OICYmIChvcmdUeXBlQWNjZXNzID09IE9yZ1NpdGVBY2Nlc3NUeXBlLk9SRyB8fCBvcmdUeXBlQWNjZXNzID09IE9yZ1NpdGVBY2Nlc3NUeXBlLk9SR19TSVRFKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19