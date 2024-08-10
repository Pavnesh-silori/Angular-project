import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.authenticationService.isLoggedIn()) {
            return true;
        } else {
            let appURL: string;

            // this.activatedRoute.data.subscribe(data => {
            //     console.log('data -', data);
            //     appURL = data.appURL;
            // });

            appURL = route.data.appURL;

            this.authenticationService.logout(appURL + 'login', state.url, '');
            return false;
        }
    }

}
