import { ProfileImg, UserService } from "@library/user-service";
import * as i0 from "@angular/core";
export declare class ImageService {
    private userService;
    constructor(userService: UserService);
    getUploadImage(type: string, image: any): {
        returnImage: any;
        showDeleteBtn: boolean;
    };
    getCountForCircleDisplay(value: any): string;
    getProfileImageUrl(user: any, profileImg: ProfileImg): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImageService>;
}
