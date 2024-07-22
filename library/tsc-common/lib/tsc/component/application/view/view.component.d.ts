import { OnInit } from '@angular/core';
import { StorageService } from '@library/storage-service';
import { ApplicationM, Application, UserApplication, ApplicationService } from '@library/application-service';
import { User, UserService } from '@library/user-service';
import * as i0 from "@angular/core";
export declare class ViewComponent implements OnInit {
    private storageService;
    private applicationService;
    private userService;
    currentOrgID: any;
    currentAppKeyID: string;
    isCurrentAppIsAccount: boolean;
    applicationM: ApplicationM[];
    applicationFilter: Application[];
    excludeApplicationKeyID: string[];
    userApplicationM: UserApplication[];
    userID: any;
    userM: User;
    constructor(storageService: StorageService, applicationService: ApplicationService, userService: UserService);
    ngOnInit(): void;
    getAllApplication(): Promise<void>;
    getApplicationByUserAccess(): Promise<void>;
    getUserByID(): Promise<void>;
    getApplicationLogoWithoutName(keyID: string): string;
    isCurrentAppIsAccountFnc(appKeyID: any): void;
    isAccess(applicationID: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewComponent, "app-view", never, {}, {}, never, never>;
}
