import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IsFeatureAvailable } from '../service/feature.service';
import * as i0 from "@angular/core";
export declare class FeatureGuard implements CanActivate {
    private router;
    private isFeatureAvailable;
    constructor(router: Router, isFeatureAvailable: IsFeatureAvailable);
    canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureGuard>;
}
