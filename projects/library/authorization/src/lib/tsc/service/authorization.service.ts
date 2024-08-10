import { Injectable } from '@angular/core';

import { AuthorizationM } from '../model/authorization.model';

import { AuthorizationController } from '../controller/authorization.controller';

@Injectable({
    providedIn: 'root'
})

export class AuthorizationService {

    constructor(
        private authorizationController: AuthorizationController
    ) { }

    async getAuthorizationByApp(applicationKeyID: string, orgID: any = ''): Promise<AuthorizationM> {
        let authorizationM: AuthorizationM;
        try {
            authorizationM = await this.authorizationController.getAuthorizationByApp(applicationKeyID, orgID).toPromise();
            return authorizationM;
        } catch (error) {
            console.error('Error -', error);
        }
    }

}
