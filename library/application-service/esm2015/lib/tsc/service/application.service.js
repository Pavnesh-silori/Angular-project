import { __awaiter } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { ApplicationKeyID } from '../enum/application.enum';
import { Application, UserApplication } from '../model/application.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/application.controller";
import * as i2 from "@library/authentication-service";
export class ApplicationService {
    constructor(environment, applicationController, authenticationService) {
        this.environment = environment;
        this.applicationController = applicationController;
        this.authenticationService = authenticationService;
    }
    getAllApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getAllApplication().toPromise();
                if (applicationM) {
                    return applicationM;
                }
                else {
                    return [new Application()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Application()];
            }
        });
    }
    getApplicationByUserAccess() {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getApplicationByUserAccess().toPromise();
                if (applicationM) {
                    return applicationM;
                }
                else {
                    return [new Application()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new Application()];
            }
        });
    }
    getSubscribedApplicationsByOrgID(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationM;
            try {
                applicationM = yield this.applicationController.getSubscribedApplicationsByOrgID(orgID).toPromise();
                if (applicationM) {
                    return applicationM['application'];
                }
                else {
                    return [new UserApplication()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                return [new UserApplication()];
            }
        });
    }
    getApplicationLogo(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/';
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin-with-name.jpg';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero-with-name.jpg';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water-with-name.jpg';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy-with-name.jpg';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro-with-name.jpg';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset-with-name.jpg';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect-with-name.jpg';
                break;
            default:
                logo = null;
        }
        return logo;
    }
    getApplicationLogoWithoutName(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/';
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin-without-name.jpg';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                logo = basePath + 'll-admin-without-name.png';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero-without-name.jpg';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water-without-name.jpg';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy-without-name.jpg';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro-without-name.jpg';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset-without-name.jpg';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect-without-name.jpg';
                break;
            default:
                logo = null;
        }
        return logo;
    }
    getApplicationLogoWithSideName(keyID) {
        let logo;
        let basePath = '/assets/images/application-logo/with-side-name/';
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                logo = basePath + 'admin.png';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                logo = basePath + 'll-admin.png';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                logo = basePath + 'netzero.png';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                logo = basePath + 'water.png';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                logo = basePath + 'energy.png';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                logo = basePath + 'enviro.png';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                logo = basePath + 'offset.png';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                logo = basePath + 'connect.png';
                break;
            default:
                logo = null;
        }
        return logo;
    }
    getApplicationLogoFileName(keyID) {
        let fileName;
        switch (keyID) {
            case ApplicationKeyID.ADMIN_KEY_ID:
                fileName = 'admin';
                break;
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                fileName = 'll-admin';
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                fileName = 'netzero';
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                fileName = 'water';
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                fileName = 'energy';
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                fileName = 'enviro';
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                fileName = 'offset';
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                fileName = 'connect';
                break;
            default:
                fileName = null;
        }
        return fileName;
    }
    appRedirect(applicationKeyID) {
        let redirectUrl;
        switch (applicationKeyID) {
            case ApplicationKeyID.NETZERO_ADMIN_KEY_ID:
                redirectUrl = this.environment.NETZERO_ADMIN_URL;
                break;
            case ApplicationKeyID.ADMIN_KEY_ID:
                redirectUrl = this.environment.ADMIN_URL;
                break;
            case ApplicationKeyID.NETZERO_KEY_ID:
                redirectUrl = this.environment.NETZERO_URL;
                break;
            case ApplicationKeyID.SUPPLIER_KEY_ID:
                redirectUrl = this.environment.ENTERPRISE_SUPPLIER_URL;
                break;
            case ApplicationKeyID.OFFSET_KEY_ID:
                redirectUrl = this.environment.OFFSET_URL;
                break;
            case ApplicationKeyID.CONNECT_KEY_ID:
                redirectUrl = this.environment.CONNECT_URL;
                break;
            case ApplicationKeyID.ENERGY_KEY_ID:
                redirectUrl = this.environment.ENERGY_URL;
                break;
            case ApplicationKeyID.WATER_KEY_ID:
                redirectUrl = this.environment.WATER_URL;
                break;
            case ApplicationKeyID.ENVIRO_KEY_ID:
                redirectUrl = this.environment.ENVIRO_URL;
                break;
            default:
                redirectUrl = this.environment.ACCOUNT_URL;
                break;
        }
        return redirectUrl;
    }
    appBtnLogout(applicationKeyID) {
        let redirectUrl = '';
        redirectUrl = this.appRedirect(applicationKeyID);
        this.authenticationService.logout(redirectUrl, '', 'logout');
    }
}
ApplicationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, deps: [{ token: 'environment' }, { token: i1.ApplicationController }, { token: i2.AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
ApplicationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }, { type: i1.ApplicationController }, { type: i2.AuthenticationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2FwcGxpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBZ0IsV0FBVyxFQUFFLGVBQWUsRUFBb0IsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQVUxRyxNQUFNLE9BQU8sa0JBQWtCO0lBSTNCLFlBQ21DLFdBQWdCLEVBQ3ZDLHFCQUE0QyxFQUM1QyxxQkFBNEM7UUFGckIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ3BELENBQUM7SUFFQyxpQkFBaUI7O1lBQ25CLElBQUksWUFBNEIsQ0FBQztZQUVqQyxJQUFJO2dCQUNBLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoRixJQUFJLFlBQVksRUFBRTtvQkFDZCxPQUFPLFlBQVksQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztLQUFBO0lBRUssMEJBQTBCOztZQUM1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QyxXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxNQUFNO1lBQ1Y7Z0JBQ0ksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUMzQyxNQUFNO1NBQ2I7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsWUFBWSxDQUFDLGdCQUFnQjtRQUN6QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFckIsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0hBalBRLGtCQUFrQixrQkFLZixhQUFhO29IQUxoQixrQkFBa0IsY0FIZixNQUFNOzRGQUdULGtCQUFrQjtrQkFKOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU9RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbktleUlEIH0gZnJvbSAnLi4vZW51bS9hcHBsaWNhdGlvbi5lbnVtJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uTSwgQXBwbGljYXRpb24sIFVzZXJBcHBsaWNhdGlvbiwgVXNlckFwcGxpY2F0aW9uTSB9IGZyb20gJy4uL21vZGVsL2FwcGxpY2F0aW9uLm1vZGVsJztcblxuaW1wb3J0IHsgQXBwbGljYXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi4vY29udHJvbGxlci9hcHBsaWNhdGlvbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvYXV0aGVudGljYXRpb24tc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblNlcnZpY2Uge1xuXG4gICAgQXBwbGljYXRpb25LZXlJRDogQXBwbGljYXRpb25LZXlJRDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvbkNvbnRyb2xsZXI6IEFwcGxpY2F0aW9uQ29udHJvbGxlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRBbGxBcHBsaWNhdGlvbigpOiBQcm9taXNlPEFwcGxpY2F0aW9uTVtdPiB7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbk06IEFwcGxpY2F0aW9uTVtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk0gPSBhd2FpdCB0aGlzLmFwcGxpY2F0aW9uQ29udHJvbGxlci5nZXRBbGxBcHBsaWNhdGlvbigpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25NKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgQXBwbGljYXRpb24oKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQXBwbGljYXRpb24oKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRBcHBsaWNhdGlvbkJ5VXNlckFjY2VzcygpOiBQcm9taXNlPEFwcGxpY2F0aW9uTVtdPiB7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbk06IEFwcGxpY2F0aW9uTVtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk0gPSBhd2FpdCB0aGlzLmFwcGxpY2F0aW9uQ29udHJvbGxlci5nZXRBcHBsaWNhdGlvbkJ5VXNlckFjY2VzcygpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25NKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uTTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgQXBwbGljYXRpb24oKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQXBwbGljYXRpb24oKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRTdWJzY3JpYmVkQXBwbGljYXRpb25zQnlPcmdJRChvcmdJRCk6IFByb21pc2U8VXNlckFwcGxpY2F0aW9uTVtdPiB7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbk06IGFueTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXBwbGljYXRpb25NID0gYXdhaXQgdGhpcy5hcHBsaWNhdGlvbkNvbnRyb2xsZXIuZ2V0U3Vic2NyaWJlZEFwcGxpY2F0aW9uc0J5T3JnSUQob3JnSUQpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAoYXBwbGljYXRpb25NKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGxpY2F0aW9uTVsnYXBwbGljYXRpb24nXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgVXNlckFwcGxpY2F0aW9uKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IFVzZXJBcHBsaWNhdGlvbigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFwcGxpY2F0aW9uTG9nbyhrZXlJRDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxvZ286IHN0cmluZztcbiAgICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSAnL2Fzc2V0cy9pbWFnZXMvYXBwbGljYXRpb24tbG9nby8nO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5SUQpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2FkbWluLXdpdGgtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICduZXR6ZXJvLXdpdGgtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnd2F0ZXItd2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnZW5lcmd5LXdpdGgtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVOVklST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2Vudmlyby13aXRoLW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5PRkZTRVRfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdvZmZzZXQtd2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQ09OTkVDVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2Nvbm5lY3Qtd2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxvZ28gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgIH1cblxuICAgIGdldEFwcGxpY2F0aW9uTG9nb1dpdGhvdXROYW1lKGtleUlEOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbG9nbzogc3RyaW5nO1xuICAgICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9ICcvYXNzZXRzL2ltYWdlcy9hcHBsaWNhdGlvbi1sb2dvLyc7XG5cbiAgICAgICAgc3dpdGNoIChrZXlJRCkge1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnYWRtaW4td2l0aG91dC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2xsLWFkbWluLXdpdGhvdXQtbmFtZS5wbmcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICduZXR6ZXJvLXdpdGhvdXQtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnd2F0ZXItd2l0aG91dC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnZW5lcmd5LXdpdGhvdXQtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVOVklST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2Vudmlyby13aXRob3V0LW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5PRkZTRVRfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdvZmZzZXQtd2l0aG91dC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQ09OTkVDVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2Nvbm5lY3Qtd2l0aG91dC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxvZ28gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgIH1cblxuICAgIGdldEFwcGxpY2F0aW9uTG9nb1dpdGhTaWRlTmFtZShrZXlJRDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxvZ286IHN0cmluZztcbiAgICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSAnL2Fzc2V0cy9pbWFnZXMvYXBwbGljYXRpb24tbG9nby93aXRoLXNpZGUtbmFtZS8nO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5SUQpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2FkbWluLnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2xsLWFkbWluLnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ25ldHplcm8ucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5XQVRFUl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ3dhdGVyLnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnZW5lcmd5LnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5WSVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnZW52aXJvLnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuT0ZGU0VUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnb2Zmc2V0LnBuZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQ09OTkVDVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2Nvbm5lY3QucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ287XG4gICAgfVxuXG4gICAgZ2V0QXBwbGljYXRpb25Mb2dvRmlsZU5hbWUoa2V5SUQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBmaWxlTmFtZTogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaCAoa2V5SUQpIHtcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAnYWRtaW4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fQURNSU5fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gJ2xsLWFkbWluJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICduZXR6ZXJvJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5XQVRFUl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAnd2F0ZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVORVJHWV9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAnZW5lcmd5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTlZJUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gJ2Vudmlybyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuT0ZGU0VUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICdvZmZzZXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkNPTk5FQ1RfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gJ2Nvbm5lY3QnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lO1xuICAgIH1cblxuICAgIGFwcFJlZGlyZWN0KGFwcGxpY2F0aW9uS2V5SUQpIHtcbiAgICAgICAgbGV0IHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cbiAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbktleUlEKSB7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50Lk5FVFpFUk9fQURNSU5fVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybCA9IHRoaXMuZW52aXJvbm1lbnQuQURNSU5fVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5ORVRaRVJPX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5TVVBQTElFUl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkVOVEVSUFJJU0VfU1VQUExJRVJfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk9GRlNFVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50Lk9GRlNFVF9VUkw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQ09OTkVDVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkNPTk5FQ1RfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVORVJHWV9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkVORVJHWV9VUkw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuV0FURVJfS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5XQVRFUl9VUkw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5WSVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybCA9IHRoaXMuZW52aXJvbm1lbnQuRU5WSVJPX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkFDQ09VTlRfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0VXJsO1xuICAgIH1cblxuICAgIGFwcEJ0bkxvZ291dChhcHBsaWNhdGlvbktleUlEKSB7XG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnO1xuXG4gICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5hcHBSZWRpcmVjdChhcHBsaWNhdGlvbktleUlEKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KHJlZGlyZWN0VXJsLCAnJywgJ2xvZ291dCcpO1xuICAgIH1cblxufVxuIl19