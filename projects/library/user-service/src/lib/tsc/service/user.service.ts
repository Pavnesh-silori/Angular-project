import { Injectable } from "@angular/core";

import { ProfileImg } from "../enum/profile-image.enum";

import { User, UserM, UserOrgAccess, UserOrgAccessM } from "../model/user.model";

import { UserController } from "../controller/user.controller";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    ProfileImg: ProfileImg;

    constructor(
        private userController: UserController
    ) { }


    async getUserByID(userID): Promise<UserM> {
        let userM: UserM;

        try {
            userM = await this.userController.getUserByID(userID).toPromise();

            if (userM) {
                return userM;
            } else {
                return new User();
            }
        } catch (error) {
            console.error('Error -', error);
            return new User();
        }
    }

    async getUserOrgAccess(orgID): Promise<UserOrgAccessM> {
        let userOrgAccessM: UserOrgAccessM;

        try {
            userOrgAccessM = await this.userController.getUserOrgAccess(orgID).toPromise();

            if (userOrgAccessM) {
                return userOrgAccessM;
            } else {
                return new UserOrgAccess();
            }
        } catch (error) {
            console.error('Error -', error);
            return new UserOrgAccess();
        }
    }

    async getUsersByOrgID(orgID): Promise<UserM[]> {
        let orgUserM: UserM[];
        try {
            orgUserM = await this.userController.getUsersByOrgID(orgID).toPromise();

            if (orgUserM) {
                return orgUserM;
            } else {
                return [new User()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new User()];
        }
    }

    async getUserListByOrgIDAndAppID(orgID, appID): Promise<UserM[]> {
        let orgUserM: UserM[];
        try {
            orgUserM = await this.userController.getUserListByOrgIDAndAppID(orgID, appID).toPromise();

            if (orgUserM) {
                return orgUserM;
            } else {
                return [new User()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new User()];
        }
    }

    async getCurrentOrgUserAccess(orgID): Promise<UserM[]> {
        let currentOrgUserM: UserM[];
        try {
            currentOrgUserM = await this.userController.getCurrentOrgUserAccess(orgID).toPromise();

            if (currentOrgUserM) {
                return currentOrgUserM;
            } else {
                return [new User()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new User()];
        }
    }

    defaultImage(name: String, element: ProfileImg) {
        let profileImg;

        if (name) {
            profileImg = this.generateDefaultImage(name, element);
        } else {
            profileImg = 'assets/images/default-profile-img.jpg';
        }

        return profileImg;
    }

    generateDefaultImage(name: String, element: string) {
        let canvasWidth;
        let canvasHeight;
        let fontSize;
        let fillTextDoubleStart;
        let fillTextDoubleTop;
        let fillTextSingleStart;
        let fillTextSingleTop;

        if (element == ProfileImg.PROFILE_IMAGE_BODY_VIEW) {
            canvasWidth = 22;
            canvasHeight = 22;
            fontSize = '11px';
            fillTextDoubleStart = 4;
            fillTextDoubleTop = 15;
            fillTextSingleStart = 8;
            fillTextSingleTop = 15;
        } else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW) {
            canvasWidth = 75;
            canvasHeight = 75;
            fontSize = '40px';
            fillTextDoubleStart = 13;
            fillTextDoubleTop = 52;
            fillTextSingleStart = 23;
            fillTextSingleTop = 52;
        } else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_EMAIL_VIEW) {
            //INFO: SOMYA AGRAWAL - currently WIP, configurations are not fully correct while showing name and email alongWith profile in dropdown!
            canvasWidth = 120;
            canvasHeight = 120;
            fontSize = '60px';
            fillTextDoubleStart = 20;
            fillTextDoubleTop = 62;
            fillTextSingleStart = 30;
            fillTextSingleTop = 62;
        }

        const canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        document.body.appendChild(canvas);
        const context = canvas.getContext('2d')!;
        context.fillStyle = '#3f6ad8';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = fontSize + ' Helvetica';
        context.fillStyle = '#fff';
        const nameArray = name.split(' ');
        let initials = '';
        for (let i = 0; i < nameArray.length; i++) {
            if (i <= 1) {
                if (nameArray[i].length > 0) {
                    initials = initials + nameArray[i][0];
                }
            }
        }
        if (initials.length > 1) {
            context.fillText(initials.toUpperCase(), fillTextDoubleStart, fillTextDoubleTop);
        } else {
            context.fillText(initials.toUpperCase(), fillTextSingleStart, fillTextSingleTop);
        }
        const data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
    }
}