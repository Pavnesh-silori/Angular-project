import { AuthorizationM } from '../model/authorization.model';
import { AuthorizationController } from '../controller/authorization.controller';
import * as i0 from "@angular/core";
export declare class AuthorizationService {
    private authorizationController;
    constructor(authorizationController: AuthorizationController);
    getAuthorizationByApp(applicationKeyID: string, orgID?: any): Promise<AuthorizationM>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthorizationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthorizationService>;
}
