import { ProfileImg } from "../enum/profile-image.enum";
import { UserM, UserOrgAccessM } from "../model/user.model";
import { UserController } from "../controller/user.controller";
import * as i0 from "@angular/core";
export declare class UserService {
    private userController;
    ProfileImg: ProfileImg;
    constructor(userController: UserController);
    getUserByID(userID: any): Promise<UserM>;
    getUserOrgAccess(orgID: any): Promise<UserOrgAccessM>;
    getUsersByOrgID(orgID: any): Promise<UserM[]>;
    getUserListByOrgIDAndAppID(orgID: any, appID: any): Promise<UserM[]>;
    getCurrentOrgUserAccess(orgID: any): Promise<UserM[]>;
    defaultImage(name: String, element: ProfileImg): any;
    generateDefaultImage(name: String, element: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
