import { Injectable } from "@angular/core";

import {
    ImageDefaultPathEnum,
    ImageTypeEnum
} from "../enum/image.enum";

// tsc-library
import { ProfileImg, UserService } from "@library/user-service";
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class ImageService {

    constructor(
        private userService: UserService
    ) { }

    getUploadImage(type: string, image) {
        let returnImage;
        let showDeleteBtn: boolean = false;

        if (image) {
            returnImage = image;
            showDeleteBtn = true;
        } else {
            showDeleteBtn = false;

            switch (type) {
                case ImageTypeEnum.USER_PROFILE:
                    returnImage = ImageDefaultPathEnum.USER_PROFILE;
                    break;
                case ImageTypeEnum.ORG_LOGO:
                    returnImage = ImageDefaultPathEnum.ORG_LOGO;
                    break;
                case ImageTypeEnum.FACILITY_LOGO:
                    returnImage = ImageDefaultPathEnum.FACILITY_LOGO;
                    break;
                case ImageTypeEnum.REGULATOR_LOGO:
                    returnImage = ImageDefaultPathEnum.REGULATOR_LOGO;
                    break;
                default:
                    returnImage = ImageDefaultPathEnum.DEFAULT_LOGO;
                    break;
            }
        }

        return {
            returnImage, showDeleteBtn
        }
    }

    getCountForCircleDisplay(value) {
        if (value.length <= 99) {
            const displayCount = value.length - 3;
            return `+${displayCount}`;
        } else {
            return `+99`;
        }
    }

    getProfileImageUrl(user: any, profileImg: ProfileImg): string {
        return user.profileImgUrl || this.userService.defaultImage(
            (user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''),
            profileImg);
    }
}