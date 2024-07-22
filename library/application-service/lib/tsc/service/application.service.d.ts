import { ApplicationKeyID } from '../enum/application.enum';
import { ApplicationM, UserApplicationM } from '../model/application.model';
import { ApplicationController } from '../controller/application.controller';
import { AuthenticationService } from '@library/authentication-service';
import * as i0 from "@angular/core";
export declare class ApplicationService {
    private environment;
    private applicationController;
    private authenticationService;
    ApplicationKeyID: ApplicationKeyID;
    constructor(environment: any, applicationController: ApplicationController, authenticationService: AuthenticationService);
    getAllApplication(): Promise<ApplicationM[]>;
    getApplicationByUserAccess(): Promise<ApplicationM[]>;
    getSubscribedApplicationsByOrgID(orgID: any): Promise<UserApplicationM[]>;
    getApplicationLogo(keyID: string): string;
    getApplicationLogoWithoutName(keyID: string): string;
    getApplicationLogoWithSideName(keyID: string): string;
    getApplicationLogoFileName(keyID: string): string;
    appRedirect(applicationKeyID: any): string;
    appBtnLogout(applicationKeyID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApplicationService>;
}
