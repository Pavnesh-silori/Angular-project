import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    UrlTree,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';

import { IsResourcePermission } from '../service/rbac.service';

@Injectable({
    providedIn: 'root'
})

export class RBACGuard implements CanActivate {
    constructor(
        private router: Router,
        private isResourcePermission: IsResourcePermission
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let rBACGuard = false;
        const resourcePermission = next.data.resourcePermission;
        rBACGuard = this.isResourcePermission.isResourcePermission(resourcePermission);

        if (rBACGuard) {
            return true;
        } else {
            return this.router.createUrlTree(['/no-authorization']);
        }
    }
    
}
