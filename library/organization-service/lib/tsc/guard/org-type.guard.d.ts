import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class OrgTypeGuard implements CanActivate {
    private router;
    private storageService;
    constructor(router: Router, storageService: StorageService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrgTypeGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrgTypeGuard>;
}
