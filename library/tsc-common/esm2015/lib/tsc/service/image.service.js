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
                default:
                    returnImage = ImageDefaultPathEnum.USER_PROFILE;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL2ltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNNUIsTUFBTSxPQUFPLFlBQVk7SUFFckIsZ0JBQWdCLENBQUM7SUFFakIsY0FBYyxDQUFDLElBQVksRUFBRSxLQUFLO1FBQzlCLElBQUksV0FBVyxDQUFDO1FBQ2hCLElBQUksYUFBYSxHQUFZLEtBQUssQ0FBQztRQUVuQyxJQUFJLEtBQUssRUFBRTtZQUNQLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDcEIsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUV0QixRQUFRLElBQUksRUFBRTtnQkFDVixLQUFLLGFBQWEsQ0FBQyxZQUFZO29CQUMzQixXQUFXLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDO29CQUNoRCxNQUFNO2dCQUNWLEtBQUssYUFBYSxDQUFDLFFBQVE7b0JBQ3ZCLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1YsS0FBSyxhQUFhLENBQUMsYUFBYTtvQkFDNUIsV0FBVyxHQUFHLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztvQkFDakQsTUFBTTtnQkFDVjtvQkFDSSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDO29CQUNoRCxNQUFNO2FBQ2I7U0FDSjtRQUVELE9BQU87WUFDSCxXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFBO0lBQ0wsQ0FBQzs7MEdBakNRLFlBQVk7OEdBQVosWUFBWSxjQUhULE1BQU07NEZBR1QsWUFBWTtrQkFKeEIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtcbiAgICBJbWFnZURlZmF1bHRQYXRoRW51bSxcbiAgICBJbWFnZVR5cGVFbnVtXG59IGZyb20gXCIuLi9lbnVtL2ltYWdlLmVudW1cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZ2V0VXBsb2FkSW1hZ2UodHlwZTogc3RyaW5nLCBpbWFnZSkge1xuICAgICAgICBsZXQgcmV0dXJuSW1hZ2U7XG4gICAgICAgIGxldCBzaG93RGVsZXRlQnRuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm5JbWFnZSA9IGltYWdlO1xuICAgICAgICAgICAgc2hvd0RlbGV0ZUJ0biA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93RGVsZXRlQnRuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgSW1hZ2VUeXBlRW51bS5VU0VSX1BST0ZJTEU6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uVVNFUl9QUk9GSUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEltYWdlVHlwZUVudW0uT1JHX0xPR086XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uT1JHX0xPR087XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgSW1hZ2VUeXBlRW51bS5GQUNJTElUWV9MT0dPOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm5JbWFnZSA9IEltYWdlRGVmYXVsdFBhdGhFbnVtLkZBQ0lMSVRZX0xPR087XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkltYWdlID0gSW1hZ2VEZWZhdWx0UGF0aEVudW0uVVNFUl9QUk9GSUxFO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXR1cm5JbWFnZSwgc2hvd0RlbGV0ZUJ0blxuICAgICAgICB9XG4gICAgfVxufSJdfQ==