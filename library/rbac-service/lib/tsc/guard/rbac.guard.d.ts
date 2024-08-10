import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsResourcePermission } from '../service/rbac.service';
import * as i0 from "@angular/core";
export declare class RBACGuard implements CanActivate {
    private router;
    private isResourcePermission;
    constructor(router: Router, isResourcePermission: IsResourcePermission);
    canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<RBACGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RBACGuard>;
}
