import { OnInit } from '@angular/core';
import { ApplicationKeyID } from '@library/application-service';
import { StorageService } from '@library/storage-service';
import { ApplicationM, ApplicationService } from '@library/application-service';
import * as i0 from "@angular/core";
export declare class ApplicationDrawerComponent implements OnInit {
    private storageService;
    private applicationService;
    applicationKeyID: string;
    applicationM: ApplicationM[];
    applicationFilter: ApplicationM[];
    currentOrgType: any;
    currentOrgID: any;
    currentRootOrgID: any;
    constructor(storageService: StorageService, applicationService: ApplicationService);
    ngOnInit(): void;
    getAllApplication(): Promise<void>;
    getApplicationByUserAccess(): Promise<void>;
    getApplicationLogo(keyID: string): string;
    appUrlBuilder(applicationKeyID: ApplicationKeyID, appURL: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApplicationDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ApplicationDrawerComponent, "lib-application-drawer", never, {}, {}, never, never>;
}
