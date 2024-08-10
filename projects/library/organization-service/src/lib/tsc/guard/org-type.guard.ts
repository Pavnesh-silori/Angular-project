import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';

import {
    OrgType,
    OrgSiteAccessType
} from '../enum/organization.enum';

import { StorageService } from '@library/storage-service';

@Injectable({
    providedIn: 'root'
})

export class OrgTypeGuard implements CanActivate {
    constructor(
        private router: Router,
        private storageService: StorageService,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let currentOrgType: string;
        let orgTypeAccess: string;

        currentOrgType = this.storageService.getStorage('currentOrgType');
        orgTypeAccess = route.data.orgTypeAccess;

        if (currentOrgType == OrgType.SITE && (orgTypeAccess == OrgSiteAccessType.SITE || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        } else if (currentOrgType == OrgType.ORGANIZATION && (orgTypeAccess == OrgSiteAccessType.ORG || orgTypeAccess == OrgSiteAccessType.ORG_SITE)) {
            return true;
        } else {
            return this.router.navigate(['/']);
            return false;
        }
    }
}
