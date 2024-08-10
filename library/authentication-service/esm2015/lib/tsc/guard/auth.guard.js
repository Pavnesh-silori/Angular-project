import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../service/authentication.service";
export class AuthGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            let appURL;
            // this.activatedRoute.data.subscribe(data => {
            //     console.log('data -', data);
            //     appURL = data.appURL;
            // });
            appURL = route.data.appURL;
            this.authenticationService.logout(appURL + 'login', state.url, '');
            return false;
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, deps: [{ token: i1.AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AuthenticationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYXV0aGVudGljYXRpb24tc2VydmljZS9zcmMvbGliL3RzYy9ndWFyZC9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWdCM0MsTUFBTSxPQUFPLFNBQVM7SUFDbEIsWUFDWSxxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUNwRCxDQUFDO0lBRUwsV0FBVyxDQUNQLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksTUFBYyxDQUFDO1lBRW5CLCtDQUErQztZQUMvQyxtQ0FBbUM7WUFDbkMsNEJBQTRCO1lBQzVCLE1BQU07WUFFTixNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFM0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkUsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDOzt1R0F4QlEsU0FBUzsyR0FBVCxTQUFTLGNBSE4sTUFBTTs0RkFHVCxTQUFTO2tCQUpyQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBDYW5BY3RpdmF0ZSxcbiAgICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIFJvdXRlclN0YXRlU25hcHNob3Rcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKFxuICAgICAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFwcFVSTDogc3RyaW5nO1xuXG4gICAgICAgICAgICAvLyB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdkYXRhIC0nLCBkYXRhKTtcbiAgICAgICAgICAgIC8vICAgICBhcHBVUkwgPSBkYXRhLmFwcFVSTDtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICBhcHBVUkwgPSByb3V0ZS5kYXRhLmFwcFVSTDtcblxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0KGFwcFVSTCArICdsb2dpbicsIHN0YXRlLnVybCwgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=