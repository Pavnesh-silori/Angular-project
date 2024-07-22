import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { Country } from "../model/country.model";
import * as i0 from "@angular/core";
import * as i1 from "../controller/country.controller";
import * as i2 from "./system.service";
export class CountryService {
    constructor(countryController, systemService) {
        this.countryController = countryController;
        this.systemService = systemService;
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
    getCurrentCountry() {
        return __awaiter(this, void 0, void 0, function* () {
            let systemInfo;
            let countryCode;
            systemInfo = (yield this.systemService.getSystemInfo());
            if (systemInfo) {
                countryCode = systemInfo.country;
            }
            else {
                countryCode = null;
            }
            return countryCode;
        });
    }
}
CountryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, deps: [{ token: i1.CountryController }, { token: i2.SystemService }], target: i0.ɵɵFactoryTarget.Injectable });
CountryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CountryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.CountryController }, { type: i2.SystemService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvY291bnRyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQVksTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVEzRCxNQUFNLE9BQU8sY0FBYztJQUl2QixZQUNZLGlCQUFvQyxFQUNwQyxhQUE0QjtRQUQ1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSnhDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBS3JCLENBQUM7SUFFQyxVQUFVOztZQUNaLElBQUksUUFBb0IsQ0FBQztZQUN6QixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztZQUU5QixJQUFJO2dCQUNBLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFakUsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsT0FBTyxRQUFRLENBQUM7aUJBQ25CO3FCQUFNO29CQUNILE9BQU8sT0FBTyxDQUFDO2lCQUNsQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNuQixJQUFJLFVBQWUsQ0FBQTtZQUNuQixJQUFJLFdBQW1CLENBQUM7WUFFeEIsVUFBVSxJQUFRLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQSxDQUFDO1lBRTNELElBQUksVUFBVSxFQUFFO2dCQUNaLFdBQVcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO2FBQ25DO2lCQUFNO2dCQUNILFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDdEI7WUFFRCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO0tBQUE7OzRHQXhDUSxjQUFjO2dIQUFkLGNBQWMsY0FIWCxNQUFNOzRGQUdULGNBQWM7a0JBSjFCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IENvdW50cnksIENvdW50cnlNIH0gZnJvbSBcIi4uL21vZGVsL2NvdW50cnkubW9kZWxcIjtcbmltcG9ydCB7IENvdW50cnlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvY291bnRyeS5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBTeXN0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vc3lzdGVtLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvdW50cnlTZXJ2aWNlIHtcblxuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNvdW50cnlDb250cm9sbGVyOiBDb3VudHJ5Q29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBzeXN0ZW1TZXJ2aWNlOiBTeXN0ZW1TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldENvdW50cnkoKTogUHJvbWlzZTxDb3VudHJ5TVtdPiB7XG4gICAgICAgIGxldCBjb3VudHJ5TTogQ291bnRyeU1bXTtcbiAgICAgICAgbGV0IGNvdW50cnkgPSBbbmV3IENvdW50cnkoKV07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvdW50cnlNID0gYXdhaXQgdGhpcy5jb3VudHJ5Q29udHJvbGxlci5nZXRDb3VudHJ5KCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudHJ5TSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudHJ5TTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDdXJyZW50Q291bnRyeSgpIHtcbiAgICAgICAgbGV0IHN5c3RlbUluZm86IGFueVxuICAgICAgICBsZXQgY291bnRyeUNvZGU6IHN0cmluZztcblxuICAgICAgICBzeXN0ZW1JbmZvID0gPGFueT5hd2FpdCB0aGlzLnN5c3RlbVNlcnZpY2UuZ2V0U3lzdGVtSW5mbygpO1xuXG4gICAgICAgIGlmIChzeXN0ZW1JbmZvKSB7XG4gICAgICAgICAgICBjb3VudHJ5Q29kZSA9IHN5c3RlbUluZm8uY291bnRyeVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnRyeUNvZGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50cnlDb2RlO1xuICAgIH1cblxufSJdfQ==