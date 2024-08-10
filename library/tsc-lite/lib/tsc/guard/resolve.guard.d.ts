import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class LayoutResolver implements Resolve<boolean> {
    private router;
    private storageService;
    constructor(router: Router, storageService: StorageService);
    resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutResolver>;
}
