import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthenticationService } from '@library/authentication-service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        } else {
            this.authenticationService.logout(environment.ADMIN_URL + 'login', state.url, '');
            return false;
        }
    }

}
