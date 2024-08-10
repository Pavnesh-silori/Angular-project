import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { ProfileImg } from "../enum/profile-image.enum";
import { User, UserOrgAccess } from "../model/user.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/user.controller";
export class UserService {
    constructor(userController) {
        this.userController = userController;
    }
    getUserByID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            let userM;
            try {
                userM = yield this.userController.getUserByID(userID).toPromise();
                if (userM) {
                    return userM;
                }
                else {
                    return new User();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new User();
            }
        });
    }
    getUserOrgAccess(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let userOrgAccessM;
            try {
                userOrgAccessM = yield this.userController.getUserOrgAccess(orgID).toPromise();
                if (userOrgAccessM) {
                    return userOrgAccessM;
                }
                else {
                    return new UserOrgAccess();
                }
            }
            catch (error) {
                console.error('Error -', error);
                return new UserOrgAccess();
            }
        });
    }
    getUsersByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let orgUserM;
            try {
                orgUserM = yield this.userController.getUsersByOrgID(orgID).toPromise();
                if (orgUserM) {
                    return orgUserM;
                }
                else {
                    return [new User()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new User()];
            }
        });
    }
    getCurrentOrgUserAccess(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentOrgUserM;
            try {
                currentOrgUserM = yield this.userController.getCurrentOrgUserAccess(orgID).toPromise();
                if (currentOrgUserM) {
                    return currentOrgUserM;
                }
                else {
                    return [new User()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new User()];
            }
        });
    }
    defaultImage(name, element) {
        let profileImg;
        if (name) {
            profileImg = this.generateDefaultImage(name, element);
        }
        else {
            profileImg = 'assets/images/default-profile-img.jpg';
        }
        return profileImg;
    }
    generateDefaultImage(name, element) {
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
        }
        else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW) {
            canvasWidth = 75;
            canvasHeight = 75;
            fontSize = '40px';
            fillTextDoubleStart = 13;
            fillTextDoubleTop = 52;
            fillTextSingleStart = 23;
            fillTextSingleTop = 52;
        }
        else if (element == ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_EMAIL_VIEW) {
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
        const context = canvas.getContext('2d');
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
        }
        else {
            context.fillText(initials.toUpperCase(), fillTextSingleStart, fillTextSingleTop);
        }
        const data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
    }
}
UserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, deps: [{ token: i1.UserController }], target: i0.ɵɵFactoryTarget.Injectable });
UserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.UserController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS91c2VyLXNlcnZpY2Uvc3JjL2xpYi90c2Mvc2VydmljZS91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE9BQU8sRUFBRSxJQUFJLEVBQVMsYUFBYSxFQUFrQixNQUFNLHFCQUFxQixDQUFDOzs7QUFRakYsTUFBTSxPQUFPLFdBQVc7SUFJcEIsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdEMsQ0FBQztJQUdDLFdBQVcsQ0FBQyxNQUFNOztZQUNwQixJQUFJLEtBQVksQ0FBQztZQUVqQixJQUFJO2dCQUNBLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVsRSxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLEtBQUssQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0gsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNyQjtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLEtBQUs7O1lBQ3hCLElBQUksY0FBOEIsQ0FBQztZQUVuQyxJQUFJO2dCQUNBLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRS9FLElBQUks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QyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDUixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN6QixRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDekM7YUFDSjtTQUNKO1FBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDSCxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O3lHQXRKUSxXQUFXOzZHQUFYLFdBQVcsY0FIUixNQUFNOzRGQUdULFdBQVc7a0JBSnZCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFByb2ZpbGVJbWcgfSBmcm9tIFwiLi4vZW51bS9wcm9maWxlLWltYWdlLmVudW1cIjtcblxuaW1wb3J0IHsgVXNlciwgVXNlck0sIFVzZXJPcmdBY2Nlc3MsIFVzZXJPcmdBY2Nlc3NNIH0gZnJvbSBcIi4uL21vZGVsL3VzZXIubW9kZWxcIjtcblxuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY29udHJvbGxlci91c2VyLmNvbnRyb2xsZXJcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIFByb2ZpbGVJbWc6IFByb2ZpbGVJbWc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyQ29udHJvbGxlcjogVXNlckNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG5cbiAgICBhc3luYyBnZXRVc2VyQnlJRCh1c2VySUQpOiBQcm9taXNlPFVzZXJNPiB7XG4gICAgICAgIGxldCB1c2VyTTogVXNlck07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXJNID0gYXdhaXQgdGhpcy51c2VyQ29udHJvbGxlci5nZXRVc2VyQnlJRCh1c2VySUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAodXNlck0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVXNlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlck9yZ0FjY2VzcyhvcmdJRCk6IFByb21pc2U8VXNlck9yZ0FjY2Vzc00+IHtcbiAgICAgICAgbGV0IHVzZXJPcmdBY2Nlc3NNOiBVc2VyT3JnQWNjZXNzTTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdXNlck9yZ0FjY2Vzc00gPSBhd2FpdCB0aGlzLnVzZXJDb250cm9sbGVyLmdldFVzZXJPcmdBY2Nlc3Mob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAodXNlck9yZ0FjY2Vzc00pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlck9yZ0FjY2Vzc007XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVXNlck9yZ0FjY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlck9yZ0FjY2VzcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VXNlcnNCeU9yZ0lEKG9yZ0lEKTogUHJvbWlzZTxVc2VyTVtdPiB7XG4gICAgICAgIGxldCBvcmdVc2VyTTogVXNlck1bXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9yZ1VzZXJNID0gYXdhaXQgdGhpcy51c2VyQ29udHJvbGxlci5nZXRVc2Vyc0J5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAob3JnVXNlck0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JnVXNlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFVzZXIoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgVXNlcigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEN1cnJlbnRPcmdVc2VyQWNjZXNzKG9yZ0lEKTogUHJvbWlzZTxVc2VyTVtdPiB7XG4gICAgICAgIGxldCBjdXJyZW50T3JnVXNlck06IFVzZXJNW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjdXJyZW50T3JnVXNlck0gPSBhd2FpdCB0aGlzLnVzZXJDb250cm9sbGVyLmdldEN1cnJlbnRPcmdVc2VyQWNjZXNzKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPcmdVc2VyTSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50T3JnVXNlck07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFVzZXIoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgVXNlcigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRJbWFnZShuYW1lOiBTdHJpbmcsIGVsZW1lbnQ6IHN0cmluZykge1xuICAgICAgICBsZXQgcHJvZmlsZUltZztcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgcHJvZmlsZUltZyA9IHRoaXMuZ2VuZXJhdGVEZWZhdWx0SW1hZ2UobmFtZSwgZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9maWxlSW1nID0gJ2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC1wcm9maWxlLWltZy5qcGcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2ZpbGVJbWc7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEZWZhdWx0SW1hZ2UobmFtZTogU3RyaW5nLCBlbGVtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNhbnZhc1dpZHRoO1xuICAgICAgICBsZXQgY2FudmFzSGVpZ2h0O1xuICAgICAgICBsZXQgZm9udFNpemU7XG4gICAgICAgIGxldCBmaWxsVGV4dERvdWJsZVN0YXJ0O1xuICAgICAgICBsZXQgZmlsbFRleHREb3VibGVUb3A7XG4gICAgICAgIGxldCBmaWxsVGV4dFNpbmdsZVN0YXJ0O1xuICAgICAgICBsZXQgZmlsbFRleHRTaW5nbGVUb3A7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gUHJvZmlsZUltZy5QUk9GSUxFX0lNQUdFX0JPRFlfVklFVykge1xuICAgICAgICAgICAgY2FudmFzV2lkdGggPSAyMjtcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IDIyO1xuICAgICAgICAgICAgZm9udFNpemUgPSAnMTFweCc7XG4gICAgICAgICAgICBmaWxsVGV4dERvdWJsZVN0YXJ0ID0gNDtcbiAgICAgICAgICAgIGZpbGxUZXh0RG91YmxlVG9wID0gMTU7XG4gICAgICAgICAgICBmaWxsVGV4dFNpbmdsZVN0YXJ0ID0gODtcbiAgICAgICAgICAgIGZpbGxUZXh0U2luZ2xlVG9wID0gMTU7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PSBQcm9maWxlSW1nLlBST0ZJTEVfSU1BR0VfRFJPUERPV05fTkFNRV9WSUVXKSB7XG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IDc1O1xuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gNzU7XG4gICAgICAgICAgICBmb250U2l6ZSA9ICc0MHB4JztcbiAgICAgICAgICAgIGZpbGxUZXh0RG91YmxlU3RhcnQgPSAxMztcbiAgICAgICAgICAgIGZpbGxUZXh0RG91YmxlVG9wID0gNTI7XG4gICAgICAgICAgICBmaWxsVGV4dFNpbmdsZVN0YXJ0ID0gMjM7XG4gICAgICAgICAgICBmaWxsVGV4dFNpbmdsZVRvcCA9IDUyO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT0gUHJvZmlsZUltZy5QUk9GSUxFX0lNQUdFX0RST1BET1dOX05BTUVfRU1BSUxfVklFVykge1xuICAgICAgICAgICAgLy9JTkZPOiBTT01ZQSBBR1JBV0FMIC0gY3VycmVudGx5IFdJUCwgY29uZmlndXJhdGlvbnMgYXJlIG5vdCBmdWxseSBjb3JyZWN0IHdoaWxlIHNob3dpbmcgbmFtZSBhbmQgZW1haWwgYWxvbmdXaXRoIHByb2ZpbGUgaW4gZHJvcGRvd24hXG4gICAgICAgICAgICBjYW52YXNXaWR0aCA9IDEyMDtcbiAgICAgICAgICAgIGNhbnZhc0hlaWdodCA9IDEyMDtcbiAgICAgICAgICAgIGZvbnRTaXplID0gJzYwcHgnO1xuICAgICAgICAgICAgZmlsbFRleHREb3VibGVTdGFydCA9IDIwO1xuICAgICAgICAgICAgZmlsbFRleHREb3VibGVUb3AgPSA2MjtcbiAgICAgICAgICAgIGZpbGxUZXh0U2luZ2xlU3RhcnQgPSAzMDtcbiAgICAgICAgICAgIGZpbGxUZXh0U2luZ2xlVG9wID0gNjI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhc1dpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0O1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMzZjZhZDgnO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnRTaXplICsgJyBIZWx2ZXRpY2EnO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgICAgY29uc3QgbmFtZUFycmF5ID0gbmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgaW5pdGlhbHMgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUFycmF5W2ldLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbHMgPSBpbml0aWFscyArIG5hbWVBcnJheVtpXVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluaXRpYWxzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQoaW5pdGlhbHMudG9VcHBlckNhc2UoKSwgZmlsbFRleHREb3VibGVTdGFydCwgZmlsbFRleHREb3VibGVUb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChpbml0aWFscy50b1VwcGVyQ2FzZSgpLCBmaWxsVGV4dFNpbmdsZVN0YXJ0LCBmaWxsVGV4dFNpbmdsZVRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59Il19