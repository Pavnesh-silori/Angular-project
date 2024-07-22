import { StorageService } from "@library/storage-service";
import * as i0 from "@angular/core";
export declare class AuthenticationService {
    private environment;
    private storageService;
    ACCOUNT_KEY_ID: string;
    constructor(environment: any, storageService: StorageService);
    isLoggedIn(): boolean;
    logout(redirectUrl: any, pageUrl: any, action: any, applicationKeyID?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthenticationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthenticationService>;
}
