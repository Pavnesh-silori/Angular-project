import { OnInit } from '@angular/core';
import { ProfileImg } from '@library/user-service';
import { User, UserM } from '@library/user-service';
import { StorageService } from '@library/storage-service';
import { UserService } from '@library/user-service';
import { TSCCommonService } from '../../../../service/tsc-common.service';
import { ApplicationService } from '@library/application-service';
import * as i0 from "@angular/core";
export declare class UserDrawerComponent implements OnInit {
    environment: any;
    private storageService;
    private userService;
    private applicationService;
    tscCommonService: TSCCommonService;
    ProfileImg: ProfileImg;
    userID: any;
    userM: User;
    constructor(environment: any, storageService: StorageService, userService: UserService, applicationService: ApplicationService, tscCommonService: TSCCommonService);
    ngOnInit(): void;
    getUserByID(): Promise<void>;
    defaultImage(userM: UserM): any;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserDrawerComponent, "lib-user-drawer", never, {}, {}, never, never>;
}
