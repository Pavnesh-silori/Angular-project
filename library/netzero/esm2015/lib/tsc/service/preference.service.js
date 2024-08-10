import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../controller/preference.controller";
export class PreferenceService {
    constructor(preferenceController) {
        this.preferenceController = preferenceController;
    }
    getOrgPreference(orgID) {
        return __awaiter(this, void 0, void 0, function* () {
            let preference = null;
            try {
                preference = yield this.preferenceController.getOrgPreference(orgID).toPromise();
                if (preference) {
                    return preference;
                }
                else {
                    throw new Error('Preference not found');
                }
            }
            catch (error) {
                console.error('Error -', error);
                return null;
            }
        });
    }
}
PreferenceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceService, deps: [{ token: i1.PreferenceController }], target: i0.ɵɵFactoryTarget.Injectable });
PreferenceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.PreferenceController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9uZXR6ZXJvL3NyYy9saWIvdHNjL3NlcnZpY2UvcHJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUUxQixZQUNZLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2xELENBQUM7SUFFQyxnQkFBZ0IsQ0FBQyxLQUFLOztZQUN4QixJQUFJLFVBQVUsR0FBUSxJQUFJLENBQUM7WUFFM0IsSUFBSTtnQkFDQSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRWpGLElBQUksVUFBVSxFQUFFO29CQUNaLE9BQU8sVUFBVSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQzNDO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTs7K0dBckJRLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBSGQsTUFBTTs0RkFHVCxpQkFBaUI7a0JBSjdCLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJlZmVyZW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL3ByZWZlcmVuY2UuY29udHJvbGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmVmZXJlbmNlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmVmZXJlbmNlQ29udHJvbGxlcjogUHJlZmVyZW5jZUNvbnRyb2xsZXJcbiAgICApIHsgfVxuXG4gICAgYXN5bmMgZ2V0T3JnUHJlZmVyZW5jZShvcmdJRCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCBwcmVmZXJlbmNlOiBhbnkgPSBudWxsO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcmVmZXJlbmNlID0gYXdhaXQgdGhpcy5wcmVmZXJlbmNlQ29udHJvbGxlci5nZXRPcmdQcmVmZXJlbmNlKG9yZ0lEKS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKHByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZmVyZW5jZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcmVmZXJlbmNlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19