import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { Country } from "../model/country.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/country.controller";
import * as i2 from "@library/storage-service";
export class CountryService {
    constructor(countryController, storageService) {
        this.countryController = countryController;
        this.storageService = storageService;
        this.redirectUrl = '';
    }
    getCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            let countryM;
            let country = [new Country()];
            try {
                countryM = yield this.countryController.getCountry().toPromise();
                if (countryM) {
                    return countryM;
                }
                else {
                    return country;
                }
            }
            catch (error) {
                console.error('Error -', error);
                return country;
            }
        });
    }
}
CountryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, deps: [{ token: i1.CountryController }, { token: i2.StorageService }], target: i0.ɵɵFactoryTarget.Injectable });
CountryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.CountryController }, { type: i2.StorageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQVcsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVUxRCxNQUFNLE9BQU8sY0FBYztJQUl2QixZQUNZLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUQ5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUoxQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUtyQixDQUFDO0lBRUMsVUFBVTs7WUFDWixJQUFJLFFBQW9CLENBQUM7WUFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFOUIsSUFBSTtnQkFDQSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWpFLElBQUksUUFBUSxFQUFFO29CQUNWLE9BQU8sUUFBUSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDSCxPQUFPLE9BQU8sQ0FBQztpQkFDbEI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLE9BQU8sQ0FBQzthQUNsQjtRQUNILENBQUM7S0FBQTs7NEdBekJNLGNBQWM7Z0hBQWQsY0FBYyxjQUhYLE1BQU07NEZBR1QsY0FBYztrQkFKMUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeU19IGZyb20gXCIuLi9tb2RlbC9jb3VudHJ5Lm1vZGVsXCI7XG5cbmltcG9ydCB7IENvdW50cnlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvY291bnRyeS5jb250cm9sbGVyXCI7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIkBsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ291bnRyeVNlcnZpY2Uge1xuXG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY291bnRyeUNvbnRyb2xsZXI6IENvdW50cnlDb250cm9sbGVyLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0Q291bnRyeSgpOiBQcm9taXNlPENvdW50cnlNW10+IHtcbiAgICAgICAgbGV0IGNvdW50cnlNOiBDb3VudHJ5TVtdO1xuICAgICAgICBsZXQgY291bnRyeSA9IFtuZXcgQ291bnRyeSgpXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY291bnRyeU0gPSBhd2FpdCB0aGlzLmNvdW50cnlDb250cm9sbGVyLmdldENvdW50cnkoKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGNvdW50cnlNKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnlNO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG5cbn0iXX0=