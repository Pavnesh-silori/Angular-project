import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../controller/authorization.controller";
export class AuthorizationService {
    constructor(authorizationController) {
        this.authorizationController = authorizationController;
    }
    getAuthorizationByApp(applicationKeyID, orgID = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let authorizationM;
            try {
                authorizationM = yield this.authorizationController.getAuthorizationByApp(applicationKeyID, orgID).toPromise();
                return authorizationM;
            }
            catch (error) {
                console.error('Error -', error);
            }
        });
    }
}
AuthorizationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, deps: [{ token: i1.AuthorizationController }], target: i0.ɵɵFactoryTarget.Injectable });
AuthorizationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthorizationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthorizationController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9hdXRob3JpemF0aW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvYXV0aG9yaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUNZLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3hELENBQUM7SUFFQyxxQkFBcUIsQ0FBQyxnQkFBd0IsRUFBRSxRQUFhLEVBQUU7O1lBQ2pFLElBQUksY0FBOEIsQ0FBQztZQUNuQyxJQUFJO2dCQUNBLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDL0csT0FBTyxjQUFjLENBQUM7YUFDekI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNMLENBQUM7S0FBQTs7a0hBZFEsb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FIakIsTUFBTTs0RkFHVCxvQkFBb0I7a0JBSmhDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uTSB9IGZyb20gJy4uL21vZGVsL2F1dGhvcml6YXRpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uQ29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXIvYXV0aG9yaXphdGlvbi5jb250cm9sbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhvcml6YXRpb25Db250cm9sbGVyOiBBdXRob3JpemF0aW9uQ29udHJvbGxlclxuICAgICkgeyB9XG5cbiAgICBhc3luYyBnZXRBdXRob3JpemF0aW9uQnlBcHAoYXBwbGljYXRpb25LZXlJRDogc3RyaW5nLCBvcmdJRDogYW55ID0gJycpOiBQcm9taXNlPEF1dGhvcml6YXRpb25NPiB7XG4gICAgICAgIGxldCBhdXRob3JpemF0aW9uTTogQXV0aG9yaXphdGlvbk07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uTSA9IGF3YWl0IHRoaXMuYXV0aG9yaXphdGlvbkNvbnRyb2xsZXIuZ2V0QXV0aG9yaXphdGlvbkJ5QXBwKGFwcGxpY2F0aW9uS2V5SUQsIG9yZ0lEKS50b1Byb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhdXRob3JpemF0aW9uTTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==