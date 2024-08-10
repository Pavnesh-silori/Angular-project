import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ParameterController } from '../controller/parameter.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ResolveGuard implements Resolve<boolean> {
    private router;
    private storageService;
    private parameterController;
    constructor(router: Router, storageService: StorageService, parameterController: ParameterController);
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResolveGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResolveGuard>;
}
