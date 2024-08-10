import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ParameterController } from '../controller/parameter.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Injectable({
    providedIn: 'root',
})

export class ResolveGuard implements Resolve<boolean> {
    constructor(
        private router: Router,
        private storageService: StorageService,
        private parameterController: ParameterController
    ) { }

    resolve(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const layoutID = this.storageService.getStorage('layoutID');
        const orgID = this.storageService.getStorage('currentOrgID');

        if (!layoutID) {
            this.router.navigate(['/not-found']);
            return false;
        } else {
            return this.parameterController.getSavedConsumptionParameter(orgID).pipe(
                map((response: any) => {
                    if (response && response.length == 0) {
                        this.router.navigate(['/not-found']);
                        return false;
                    } else {
                        return true;
                    }
                }),
                catchError(error => {
                    console.log('error in getSavedConsumptionParameter -', error);
                    this.router.navigate(['/not-found']);
                    return [false];
                })
            );
        }
    }
}