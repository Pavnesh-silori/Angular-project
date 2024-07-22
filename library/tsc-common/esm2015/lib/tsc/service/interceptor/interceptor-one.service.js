import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Response } from '../../model/response.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/toastr-service";
import * as i4 from "@library/application-service";
import * as i5 from "@library/authentication-service";
export class InterceptorOneService {
    constructor(router, storageService, toastrService, applicationService, authenticationService) {
        this.router = router;
        this.storageService = storageService;
        this.toastrService = toastrService;
        this.applicationService = applicationService;
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        let token = this.storageService.getStorage('token');
        let userID = this.storageService.getStorage('userID');
        let rootOrgID = this.storageService.getStorage('rootOrgID');
        let applicationID = this.storageService.getStorage('applicationID');
        let applicationKeyID = this.storageService.getStorage('applicationKeyID');
        let redirectUrl = '';
        let pageUrl = '';
        let skipAuth = request.headers.get('skipAuth');
        let skipSuccessStatus = request.headers.get('skipSuccessStatus');
        let skipErrorStatus = request.headers.get('skipErrorStatus');
        if (skipAuth == '1') {
            // console.log('skipAuth');
        }
        else {
            if (token) {
                request = request.clone({
                    setHeaders: { Authorization: `Bearer ${token}`, userID: `${userID}`, rootOrgID: `${rootOrgID}`, applicationID: `${applicationID}` }
                });
            }
            else {
                // alert('auth interceptor exception.');
            }
        }
        return next.handle(request).pipe(catchError((error) => {
            let responseM = new Response();
            let toast;
            if (error instanceof HttpErrorResponse) {
                if (skipErrorStatus != '1' && error.error) {
                    responseM = error.error;
                    toast = this.toastrService.getToastStatus(responseM.status);
                    if (responseM.message && responseM.status) {
                        this.toastrService.openToast(toast.title, responseM.message, toast.color);
                    }
                    else {
                        this.toastrService.openToast('Error', 'Something went wrong!', 'error');
                    }
                }
                if (error.status == 401) {
                    // 4001 - Invalid cred
                    // 4002 - user is inactive
                    // 4003 - no access in app or org
                    if (responseM.errorCode == 4002 || responseM.errorCode == 4001) {
                        console.log('no logout');
                    }
                    else {
                        redirectUrl = this.applicationService.appRedirect(applicationKeyID) + 'login';
                        pageUrl = this.router.url;
                        this.authenticationService.logout(this.storageService.getStorage('redirectUrl') ? this.storageService.getStorage('redirectUrl') : redirectUrl, this.storageService.getStorage('pageUrl') ? this.storageService.getStorage('pageUrl') : pageUrl, 'interceptor', applicationKeyID);
                    }
                }
                else if (error.status == 403) {
                    if (responseM.errorCode == 4003) {
                        this.storageService.clearStorage();
                        this.router.navigate(['/no-access']);
                    }
                }
            }
            return throwError(error);
        }), map((response) => {
            let responseM = new Response();
            let toast;
            if (response instanceof HttpResponse) {
                responseM = response.body;
                if (skipSuccessStatus != '1' && response.body && response.body.status && response.body.message) {
                    toast = this.toastrService.getToastStatus(response.body.status);
                    this.toastrService.openToast(toast.title, responseM.message, toast.color);
                }
                // Logic for handling successful responses
                // if (response.status === 200) {
                //     // Do something with the response
                //     console.log('Successful response:', response);
                // }
            }
            return response; // Return the response or modified response
        }));
    }
}
InterceptorOneService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, deps: [{ token: i1.Router }, { token: i2.StorageService }, { token: i3.ToastrService }, { token: i4.ApplicationService }, { token: i5.AuthenticationService }], target: i0.ɵɵFactoryTarget.Injectable });
InterceptorOneService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InterceptorOneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.StorageService }, { type: i3.ToastrService }, { type: i4.ApplicationService }, { type: i5.AuthenticationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Itb25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci1vbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFLSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNmLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQVd0RCxNQUFNLE9BQU8scUJBQXFCO0lBRTlCLFlBQ1ksTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLGtCQUFzQyxFQUN0QyxxQkFBNEM7UUFKNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDcEQsQ0FBQztJQUVMLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ2xELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFB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Z0JBRUQsMENBQTBDO2dCQUMxQyxpQ0FBaUM7Z0JBQ2pDLHdDQUF3QztnQkFDeEMscURBQXFEO2dCQUNyRCxJQUFJO2FBQ1A7WUFFRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLDJDQUEyQztRQUNoRSxDQUFDLENBQUMsQ0FDTCxDQUFBO0lBQ0wsQ0FBQzs7bUhBL0ZRLHFCQUFxQjt1SEFBckIscUJBQXFCLGNBSGxCLE1BQU07NEZBR1QscUJBQXFCO2tCQUpqQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBIdHRwUmVxdWVzdCxcbiAgICBIdHRwSGFuZGxlcixcbiAgICBIdHRwRXZlbnQsXG4gICAgSHR0cEludGVyY2VwdG9yLFxuICAgIEh0dHBFcnJvclJlc3BvbnNlLFxuICAgIEh0dHBSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcmVzcG9uc2UubW9kZWwnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCJAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2VcIjtcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS90b2FzdHItc2VydmljZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9hcHBsaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L2F1dGhlbnRpY2F0aW9uLXNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgSW50ZXJjZXB0b3JPbmVTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uU2VydmljZTogQXBwbGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgbGV0IHRva2VuID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd0b2tlbicpO1xuICAgICAgICBsZXQgdXNlcklEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd1c2VySUQnKTtcbiAgICAgICAgbGV0IHJvb3RPcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgncm9vdE9yZ0lEJyk7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbklEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdhcHBsaWNhdGlvbklEJyk7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbktleUlEID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdhcHBsaWNhdGlvbktleUlEJyk7XG4gICAgICAgIGxldCByZWRpcmVjdFVybDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBwYWdlVXJsOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHNraXBBdXRoID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnc2tpcEF1dGgnKTtcbiAgICAgICAgbGV0IHNraXBTdWNjZXNzU3RhdHVzID0gcmVxdWVzdC5oZWFkZXJzLmdldCgnc2tpcFN1Y2Nlc3NTdGF0dXMnKTtcbiAgICAgICAgbGV0IHNraXBFcnJvclN0YXR1cyA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3NraXBFcnJvclN0YXR1cycpO1xuXG4gICAgICAgIGlmIChza2lwQXV0aCA9PSAnMScpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdza2lwQXV0aCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgICAgICAgICBzZXRIZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLCB1c2VySUQ6IGAke3VzZXJJRH1gLCByb290T3JnSUQ6IGAke3Jvb3RPcmdJRH1gLCBhcHBsaWNhdGlvbklEOiBgJHthcHBsaWNhdGlvbklEfWAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGVydCgnYXV0aCBpbnRlcmNlcHRvciBleGNlcHRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlTSA9IG5ldyBSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0b2FzdDogYW55O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNraXBFcnJvclN0YXR1cyAhPSAnMScgJiYgZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTSA9IGVycm9yLmVycm9yO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA9IHRoaXMudG9hc3RyU2VydmljZS5nZXRUb2FzdFN0YXR1cyhyZXNwb25zZU0uc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlTS5tZXNzYWdlICYmIHJlc3BvbnNlTS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KHRvYXN0LnRpdGxlLCByZXNwb25zZU0ubWVzc2FnZSwgdG9hc3QuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KCdFcnJvcicsICdTb21ldGhpbmcgd2VudCB3cm9uZyEnLCAnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA0MDAxIC0gSW52YWxpZCBjcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA0MDAyIC0gdXNlciBpcyBpbmFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDAwMyAtIG5vIGFjY2VzcyBpbiBhcHAgb3Igb3JnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VNLmVycm9yQ29kZSA9PSA0MDAyIHx8IHJlc3BvbnNlTS5lcnJvckNvZGUgPT0gNDAwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBsb2dvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVcmwgPSB0aGlzLmFwcGxpY2F0aW9uU2VydmljZS5hcHBSZWRpcmVjdChhcHBsaWNhdGlvbktleUlEKSArICdsb2dpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVVybCA9IHRoaXMucm91dGVyLnVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3JlZGlyZWN0VXJsJykgPyB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3JlZGlyZWN0VXJsJykgOiByZWRpcmVjdFVybCwgdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdwYWdlVXJsJykgPyB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3BhZ2VVcmwnKSA6IHBhZ2VVcmwsICdpbnRlcmNlcHRvcicsIGFwcGxpY2F0aW9uS2V5SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU0uZXJyb3JDb2RlID09IDQwMDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmNsZWFyU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL25vLWFjY2VzcyddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlTSA9IG5ldyBSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIGxldCB0b2FzdDogYW55O1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTSA9IHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lwU3VjY2Vzc1N0YXR1cyAhPSAnMScgJiYgcmVzcG9uc2UuYm9keSAmJiByZXNwb25zZS5ib2R5LnN0YXR1cyAmJiByZXNwb25zZS5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ID0gdGhpcy50b2FzdHJTZXJ2aWNlLmdldFRvYXN0U3RhdHVzKHJlc3BvbnNlLmJvZHkuc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdCh0b2FzdC50aXRsZSwgcmVzcG9uc2VNLm1lc3NhZ2UsIHRvYXN0LmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZ2ljIGZvciBoYW5kbGluZyBzdWNjZXNzZnVsIHJlc3BvbnNlc1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWwgcmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlOyAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIG9yIG1vZGlmaWVkIHJlc3BvbnNlXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxufVxuIl19