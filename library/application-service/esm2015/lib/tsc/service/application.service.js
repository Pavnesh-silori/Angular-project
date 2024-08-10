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
                logo = basePath + 'tsc.png';
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
                redirectUrl = this.environment.WATER_URL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZS9zcmMvbGliL3RzYy9zZXJ2aWNlL2FwcGxpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBZ0IsV0FBVyxFQUFFLGVBQWUsRUFBb0IsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQVUxRyxNQUFNLE9BQU8sa0JBQWtCO0lBSTNCLFlBQ21DLFdBQWdCLEVBQ3ZDLHFCQUE0QyxFQUM1QyxxQkFBNEM7UUFGckIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDdkMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO0lBQ3BELENBQUM7SUFFQyxpQkFBaUI7O1lBQ25CLElBQUksWUFBNEIsQ0FBQztZQUVqQyxJQUFJO2dCQUNBLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoRixJQUFJLFlBQVksRUFBRTtvQkFDZCxPQUFPLFlBQVksQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQzlCO1FBQ0wsQ0FBQztLQUFBO0lBRUssMEJBQTBCOztZQUM1QixJQUFJLFlBQTRCLENBQUM7WUFFakMsSUFBSTtnQkFDQSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFekYsSUFBSSxZQUFZLEVBQUU7b0JBQ2QsT0FBTyxZQUFZLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQzthQUM5QjtRQUNMLENBQUM7S0FBQTtJQUVLLGdDQUFnQyxDQUFDLEtBQUs7O1lBQ3hDLElBQUksWUFBaUIsQ0FBQztZQUV0QixJQUFJO2dCQUNBLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFcEcsSUFBSSxZQUFZLEVBQUU7b0JBQ2QsT0FBTyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNILE9BQU8sQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7aUJBQ2xDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUM7S0FBQTtJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFDNUIsSUFBSSxJQUFZLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQVcsa0NBQWtDLENBQUM7UUFFMUQsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLElBQUksR0FBRyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2hDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQXVCLENBQUM7Z0JBQzFDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLElBQUksR0FBRyxRQUFRLEdBQUcscUJBQXFCLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3pDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3pDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3pDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2hDLElBQUksR0FBRyxRQUFRLEdBQUcsdUJBQXVCLENBQUM7Z0JBQzFDLE1BQU07WUFDVjtnQkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDZCQUE2QixDQUFDLEtBQWE7UUFDdkMsSUFBSSxJQUFZLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQVcsa0NBQWtDLENBQUM7UUFFMUQsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLElBQUksR0FBRyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2hDLElBQUksR0FBRyxRQUFRLEdBQUcsMEJBQTBCLENBQUM7Z0JBQzdDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLElBQUksR0FBRyxRQUFRLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2hDLElBQUksR0FBRyxRQUFRLEdBQUcsMEJBQTBCLENBQUM7Z0JBQzdDLE1BQU07WUFDVjtnQkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELDhCQUE4QixDQUFDLEtBQWE7UUFDeEMsSUFBSSxJQUFZLENBQUM7UUFDakIsSUFBSSxRQUFRLEdBQVcsaURBQWlELENBQUM7UUFFekUsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLElBQUksR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxjQUFjO2dCQUNoQyxJQUFJLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDOUIsSUFBSSxHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLElBQUksR0FBRyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO2dCQUMvQixJQUFJLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsSUFBSSxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGNBQWM7Z0JBQ2hDLElBQUksR0FBRyxRQUFRLEdBQUcsYUFBYSxDQUFDO2dCQUNoQyxNQUFNO1lBQ1Y7Z0JBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxLQUFhO1FBQ3BDLElBQUksUUFBZ0IsQ0FBQztRQUVyQixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDOUIsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsY0FBYztnQkFDaEMsUUFBUSxHQUFHLFNBQVMsQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDOUIsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsY0FBYztnQkFDaEMsUUFBUSxHQUFHLFNBQVMsQ0FBQztnQkFDckIsTUFBTTtZQUNWO2dCQUNJLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLGdCQUFnQjtRQUN4QixJQUFJLFdBQW1CLENBQUM7UUFFeEIsUUFBUSxnQkFBZ0IsRUFBRTtZQUN0QixLQUFLLGdCQUFnQixDQUFDLG9CQUFvQjtnQkFDdEMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pELE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLFlBQVk7Z0JBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDekMsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsY0FBYztnQkFDaEMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUMzQyxNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUNqQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkQsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsYUFBYTtnQkFDL0IsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxjQUFjO2dCQUNoQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLGdCQUFnQixDQUFDLGFBQWE7Z0JBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztnQkFDMUMsTUFBTTtZQUNWLEtBQUssZ0JBQWdCLENBQUMsWUFBWTtnQkFDOUIsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO2dCQUN6QyxNQUFNO1lBQ1YsS0FBSyxnQkFBZ0IsQ0FBQyxhQUFhO2dCQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLE1BQU07WUFDVjtnQkFDSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLE1BQU07U0FDYjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLENBQUMsZ0JBQWdCO1FBQ3pCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUVyQixXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDOztnSEF4T1Esa0JBQWtCLGtCQUtmLGFBQWE7b0hBTGhCLGtCQUFrQixjQUhmLE1BQU07NEZBR1Qsa0JBQWtCO2tCQUo5QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBT1EsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uS2V5SUQgfSBmcm9tICcuLi9lbnVtL2FwcGxpY2F0aW9uLmVudW0nO1xuaW1wb3J0IHsgQXBwbGljYXRpb25NLCBBcHBsaWNhdGlvbiwgVXNlckFwcGxpY2F0aW9uLCBVc2VyQXBwbGljYXRpb25NIH0gZnJvbSAnLi4vbW9kZWwvYXBwbGljYXRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uU2VydmljZSB7XG5cbiAgICBBcHBsaWNhdGlvbktleUlEOiBBcHBsaWNhdGlvbktleUlEO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55LFxuICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uQ29udHJvbGxlcjogQXBwbGljYXRpb25Db250cm9sbGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldEFsbEFwcGxpY2F0aW9uKCk6IFByb21pc2U8QXBwbGljYXRpb25NW10+IHtcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uTTogQXBwbGljYXRpb25NW107XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTSA9IGF3YWl0IHRoaXMuYXBwbGljYXRpb25Db250cm9sbGVyLmdldEFsbEFwcGxpY2F0aW9uKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbk0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwbGljYXRpb25NO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBBcHBsaWNhdGlvbigpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBBcHBsaWNhdGlvbigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldEFwcGxpY2F0aW9uQnlVc2VyQWNjZXNzKCk6IFByb21pc2U8QXBwbGljYXRpb25NW10+IHtcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uTTogQXBwbGljYXRpb25NW107XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTSA9IGF3YWl0IHRoaXMuYXBwbGljYXRpb25Db250cm9sbGVyLmdldEFwcGxpY2F0aW9uQnlVc2VyQWNjZXNzKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbk0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwbGljYXRpb25NO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBBcHBsaWNhdGlvbigpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBBcHBsaWNhdGlvbigpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldFN1YnNjcmliZWRBcHBsaWNhdGlvbnNCeU9yZ0lEKG9yZ0lEKTogUHJvbWlzZTxVc2VyQXBwbGljYXRpb25NW10+IHtcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uTTogYW55O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcHBsaWNhdGlvbk0gPSBhd2FpdCB0aGlzLmFwcGxpY2F0aW9uQ29udHJvbGxlci5nZXRTdWJzY3JpYmVkQXBwbGljYXRpb25zQnlPcmdJRChvcmdJRCkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbk0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwbGljYXRpb25NWydhcHBsaWNhdGlvbiddO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBVc2VyQXBwbGljYXRpb24oKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciAtJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgVXNlckFwcGxpY2F0aW9uKCldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXBwbGljYXRpb25Mb2dvKGtleUlEOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbG9nbzogc3RyaW5nO1xuICAgICAgICBsZXQgYmFzZVBhdGg6IHN0cmluZyA9ICcvYXNzZXRzL2ltYWdlcy9hcHBsaWNhdGlvbi1sb2dvLyc7XG5cbiAgICAgICAgc3dpdGNoIChrZXlJRCkge1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnYWRtaW4td2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ25ldHplcm8td2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuV0FURVJfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICd3YXRlci13aXRoLW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdlbmVyZ3ktd2l0aC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5WSVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnZW52aXJvLXdpdGgtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk9GRlNFVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ29mZnNldC13aXRoLW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5DT05ORUNUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnY29ubmVjdC13aXRoLW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ287XG4gICAgfVxuXG4gICAgZ2V0QXBwbGljYXRpb25Mb2dvV2l0aG91dE5hbWUoa2V5SUQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsb2dvOiBzdHJpbmc7XG4gICAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gJy9hc3NldHMvaW1hZ2VzL2FwcGxpY2F0aW9uLWxvZ28vJztcblxuICAgICAgICBzd2l0Y2ggKGtleUlEKSB7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQURNSU5fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdhZG1pbi13aXRob3V0LW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnbmV0emVyby13aXRob3V0LW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5XQVRFUl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ3dhdGVyLXdpdGhvdXQtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVORVJHWV9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgbG9nbyA9IGJhc2VQYXRoICsgJ2VuZXJneS13aXRob3V0LW5hbWUuanBnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTlZJUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdlbnZpcm8td2l0aG91dC1uYW1lLmpwZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuT0ZGU0VUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnb2Zmc2V0LXdpdGhvdXQtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkNPTk5FQ1RfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdjb25uZWN0LXdpdGhvdXQtbmFtZS5qcGcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsb2dvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG5cbiAgICBnZXRBcHBsaWNhdGlvbkxvZ29XaXRoU2lkZU5hbWUoa2V5SUQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsb2dvOiBzdHJpbmc7XG4gICAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gJy9hc3NldHMvaW1hZ2VzL2FwcGxpY2F0aW9uLWxvZ28vd2l0aC1zaWRlLW5hbWUvJztcblxuICAgICAgICBzd2l0Y2ggKGtleUlEKSB7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuQURNSU5fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICd0c2MucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnbmV0emVyby5wbmcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnd2F0ZXIucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdlbmVyZ3kucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTlZJUk9fS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdlbnZpcm8ucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5PRkZTRVRfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGxvZ28gPSBiYXNlUGF0aCArICdvZmZzZXQucG5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5DT05ORUNUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBsb2dvID0gYmFzZVBhdGggKyAnY29ubmVjdC5wbmcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsb2dvID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG5cbiAgICBnZXRBcHBsaWNhdGlvbkxvZ29GaWxlTmFtZShrZXlJRDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgICAgICAgc3dpdGNoIChrZXlJRCkge1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkFETUlOX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICdhZG1pbic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuTkVUWkVST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAnbmV0emVybyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuV0FURVJfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gJ3dhdGVyJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEOlxuICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gJ2VuZXJneSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuRU5WSVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICdlbnZpcm8nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk9GRlNFVF9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAnb2Zmc2V0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5DT05ORUNUX0tFWV9JRDpcbiAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICdjb25uZWN0JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlTmFtZTtcbiAgICB9XG5cbiAgICBhcHBSZWRpcmVjdChhcHBsaWNhdGlvbktleUlEKSB7XG4gICAgICAgIGxldCByZWRpcmVjdFVybDogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25LZXlJRCkge1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELk5FVFpFUk9fQURNSU5fS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5ORVRaRVJPX0FETUlOX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5BRE1JTl9LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkFETUlOX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5ORVRaRVJPX0tFWV9JRDpcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybCA9IHRoaXMuZW52aXJvbm1lbnQuTkVUWkVST19VUkw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFwcGxpY2F0aW9uS2V5SUQuU1VQUExJRVJfS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5FTlRFUlBSSVNFX1NVUFBMSUVSX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5PRkZTRVRfS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5PRkZTRVRfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkNPTk5FQ1RfS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5DT05ORUNUX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEOlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5lbnZpcm9ubWVudC5FTkVSR1lfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRDpcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybCA9IHRoaXMuZW52aXJvbm1lbnQuV0FURVJfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBsaWNhdGlvbktleUlELkVOVklST19LRVlfSUQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LldBVEVSX1VSTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmVudmlyb25tZW50LkFDQ09VTlRfVVJMO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0VXJsO1xuICAgIH1cblxuICAgIGFwcEJ0bkxvZ291dChhcHBsaWNhdGlvbktleUlEKSB7XG4gICAgICAgIGxldCByZWRpcmVjdFVybCA9ICcnO1xuXG4gICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5hcHBSZWRpcmVjdChhcHBsaWNhdGlvbktleUlEKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KHJlZGlyZWN0VXJsLCAnJywgJ2xvZ291dCcpO1xuICAgIH1cblxufVxuIl19