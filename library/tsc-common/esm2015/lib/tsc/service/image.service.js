import { Injectable } from "@angular/core";
import { ImageDefaultPathEnum, ImageTypeEnum } from "../enum/image.enum";
import * as i0 from "@angular/core";
export class ImageService {
    constructor() { }
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
}
ImageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ImageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ImageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL2ltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNNUIsTUFBTSxPQUFPLFlBQVk7SUFFckIsZ0JBQWdCLENBQUM7SUFFakIsY0FBYyxDQUFDLElBQVksRUFBRSxLQUFLO1FBQzlCLElBQUksV0FBVyxDQUFDO1FBQ2hCLElBQUksYUFBYSxHQUFZLEtBQUssQ0FBQztRQUVuQyxJQUFJLEtBQUssRUFBRTtZQUNQLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUV0QixRQUFRLElBQUksRUFBRTtnQkFDVixLQUFLLGFBQWEsQ0FBQyxZQUFZO29CQUMzQixXQUFXLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDO29CQUNoRCxNQUFNO2dCQUNWLEtBQUssYUFBYSxDQUFDLFFBQVE7b0JBQ3ZCLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1YsS0FBSyxhQUFhLENBQUMsYUFBYTtvQkFDNUIsV0FBVyxHQUFHLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztvQkFDakQsTUFBTTtnQkFDVixLQUFLLGFBQWEsQ0FBQyxjQUFjO29CQUM3QixXQUFXLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxDQUFDO29CQUNsRCxNQUFNO2dCQUNWO29CQUNJLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7b0JBQ2hELE1BQU07YUFDYjtTQUNKO1FBRUQsT0FBTztZQUNILFdBQVcsRUFBRSxhQUFhO1NBQzdCLENBQUE7SUFDTCxDQUFDOzswR0FwQ1EsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge1xuICAgIEltYWdlRGVmYXVsdFBhdGhFbnVtLFxuICAgIEltYWdlVHlwZUVudW1cbn0gZnJvbSBcIi4uL2VudW0vaW1hZ2UuZW51bVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXRVcGxvYWRJbWFnZSh0eXBlOiBzdHJpbmcsIGltYWdlKSB7XG4gICAgICAgIGxldCByZXR1cm5JbWFnZTtcbiAgICAgICAgbGV0IHNob3dEZWxldGVCdG46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybkltYWdlID0gaW1hZ2U7XG4gICAgICAgICAgICBzaG93RGVsZXRlQnRuID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dEZWxldGVCdG4gPSBmYWxzZTtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBJbWFnZVR5cGVFbnVtLlVTRVJfUFJPRklMRTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuSW1hZ2UgPSBJbWFnZURlZmF1bHRQYXRoRW51bS5VU0VSX1BST0ZJTEU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSW1hZ2VUeXBlRW51bS5PUkdfTE9HTzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuSW1hZ2UgPSBJbWFnZURlZmF1bHRQYXRoRW51bS5PUkdfTE9HTztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJbWFnZVR5cGVFbnVtLkZBQ0lMSVRZX0xPR086XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uRkFDSUxJVFlfTE9HTztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBJbWFnZVR5cGVFbnVtLlJFR1VMQVRPUl9MT0dPOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbWFnZSA9IEltYWdlRGVmYXVsdFBhdGhFbnVtLlJFR1VMQVRPUl9MT0dPO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbWFnZSA9IEltYWdlRGVmYXVsdFBhdGhFbnVtLkRFRkFVTFRfTE9HTztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmV0dXJuSW1hZ2UsIHNob3dEZWxldGVCdG5cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=