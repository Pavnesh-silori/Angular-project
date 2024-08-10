import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    UrlTree,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';

import { IsFeatureAvailable } from '../service/feature.service'; 

@Injectable({
    providedIn: 'root'
})

export class FeatureGuard implements CanActivate {
    constructor(
        private router: Router,
        private isFeatureAvailable: IsFeatureAvailable
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let featureGuard = false;
        const featureKeyID = next.data.featureKeyID;
        featureGuard = this.isFeatureAvailable.isFeatureAvailable(featureKeyID);

        if (featureGuard) {
            return true;
        } else {
            return this.router.createUrlTree(['/feature-not-available']);
        }
    }

}
