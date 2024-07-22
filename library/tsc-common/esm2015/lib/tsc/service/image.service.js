import { Injectable } from "@angular/core";
import { ImageDefaultPathEnum, ImageTypeEnum } from "../enum/image.enum";
import * as i0 from "@angular/core";
import * as i1 from "@library/user-service";
// /tsc-library/
export class ImageService {
    constructor(userService) {
        this.userService = userService;
    }
    getUploadImage(type, image) {
        let returnImage;
        let showDeleteBtn = false;
        if (image) {
            returnImage = image;
            showDeleteBtn = true;
        }
        else {
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
        };
    }
    getCountForCircleDisplay(value) {
        if (value.length <= 99) {
            const displayCount = value.length - 3;
            return `+${displayCount}`;
        }
        else {
            return `+99`;
        }
    }
    getProfileImageUrl(user, profileImg) {
        return user.profileImgUrl || this.userService.defaultImage((user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''), profileImg);
    }
}
ImageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, deps: [{ token: i1.UserService }], target: i0.ɵɵFactoryTarget.Injectable });
ImageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.UserService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL2ltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBSTVCLGdCQUFnQjtBQU1oQixNQUFNLE9BQU8sWUFBWTtJQUVyQixZQUNZLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2hDLENBQUM7SUFFTCxjQUFjLENBQUMsSUFBWSxFQUFFLEtBQUs7UUFDOUIsSUFBSSxXQUFXLENBQUM7UUFDaEIsSUFBSSxhQUFhLEdBQVksS0FBSyxDQUFDO1FBRW5DLElBQUksS0FBSyxFQUFFO1lBQ1AsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNwQixhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBRXRCLFFBQVEsSUFBSSxFQUFFO2dCQUNWLEtBQUssYUFBYSxDQUFDLFlBQVk7b0JBQzNCLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1YsS0FBSyxhQUFhLENBQUMsUUFBUTtvQkFDdkIsV0FBVyxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztvQkFDNUMsTUFBTTtnQkFDVixLQUFLLGFBQWEsQ0FBQyxhQUFhO29CQUM1QixXQUFXLEdBQUcsb0JBQW9CLENBQUMsYUFBYSxDQUFDO29CQUNqRCxNQUFNO2dCQUNWLEtBQUssYUFBYSxDQUFDLGNBQWM7b0JBQzdCLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7b0JBQ2xELE1BQU07Z0JBQ1Y7b0JBQ0ksV0FBVyxHQUFHLG9CQUFvQixDQUFDLFlBQVksQ0FBQztvQkFDaEQsTUFBTTthQUNiO1NBQ0o7UUFFRCxPQUFPO1lBQ0gsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQTtJQUNMLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxLQUFLO1FBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDcEIsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQzdCO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsVUFBc0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUN0RCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNuRixVQUFVLENBQUMsQ0FBQztJQUNwQixDQUFDOzswR0FyRFEsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge1xuICAgIEltYWdlRGVmYXVsdFBhdGhFbnVtLFxuICAgIEltYWdlVHlwZUVudW1cbn0gZnJvbSBcIi4uL2VudW0vaW1hZ2UuZW51bVwiO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgUHJvZmlsZUltZywgVXNlclNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvdXNlci1zZXJ2aWNlXCI7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbWFnZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGdldFVwbG9hZEltYWdlKHR5cGU6IHN0cmluZywgaW1hZ2UpIHtcbiAgICAgICAgbGV0IHJldHVybkltYWdlO1xuICAgICAgICBsZXQgc2hvd0RlbGV0ZUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuSW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgIHNob3dEZWxldGVCdG4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd0RlbGV0ZUJ0biA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEltYWdlVHlwZUVudW0uVVNFUl9QUk9GSUxFOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbWFnZSA9IEltYWdlRGVmYXVsdFBhdGhFbnVtLlVTRVJfUFJPRklMRTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJbWFnZVR5cGVFbnVtLk9SR19MT0dPOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbWFnZSA9IEltYWdlRGVmYXVsdFBhdGhFbnVtLk9SR19MT0dPO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEltYWdlVHlwZUVudW0uRkFDSUxJVFlfTE9HTzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuSW1hZ2UgPSBJbWFnZURlZmF1bHRQYXRoRW51bS5GQUNJTElUWV9MT0dPO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEltYWdlVHlwZUVudW0uUkVHVUxBVE9SX0xPR086XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uUkVHVUxBVE9SX0xPR087XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uREVGQVVMVF9MT0dPO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXR1cm5JbWFnZSwgc2hvd0RlbGV0ZUJ0blxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q291bnRGb3JDaXJjbGVEaXNwbGF5KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gOTkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlDb3VudCA9IHZhbHVlLmxlbmd0aCAtIDM7XG4gICAgICAgICAgICByZXR1cm4gYCske2Rpc3BsYXlDb3VudH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGArOTlgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZUltYWdlVXJsKHVzZXI6IGFueSwgcHJvZmlsZUltZzogUHJvZmlsZUltZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB1c2VyLnByb2ZpbGVJbWdVcmwgfHwgdGhpcy51c2VyU2VydmljZS5kZWZhdWx0SW1hZ2UoXG4gICAgICAgICAgICAodXNlci5maXJzdE5hbWUgPyB1c2VyLmZpcnN0TmFtZSArICcgJyA6ICcnKSArICh1c2VyLmxhc3ROYW1lID8gdXNlci5sYXN0TmFtZSA6ICcnKSxcbiAgICAgICAgICAgIHByb2ZpbGVJbWcpO1xuICAgIH1cbn0iXX0=