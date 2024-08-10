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
                if (skipSuccessStatus != '1' && response.body.status && response.body.message) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Itb25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS9pbnRlcmNlcHRvci9pbnRlcmNlcHRvci1vbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFLSCxpQkFBaUIsRUFDakIsWUFBWSxFQUNmLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQVd0RCxNQUFNLE9BQU8scUJBQXFCO0lBRTlCLFlBQ1ksTUFBYyxFQUNkLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLGtCQUFzQyxFQUN0QyxxQkFBNEM7UUFKNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFDcEQsQ0FBQztJQUVMLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ2xELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxJQUFJLFdBQVcsR0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqRSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTdELElBQUksUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUNqQiwyQkFBMkI7U0FDOUI7YUFBTTtZQUNILElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNwQixVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxhQUFhLEVBQUUsRUFBRTtpQkFDdEksQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsd0NBQXdDO2FBQzNDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixJQUFJLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQy9CLElBQUksS0FBVSxDQUFDO1lBRWYsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUksZUFBZSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUN2QyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFFeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFNUQsSUFBSSxTQUFTLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzdFO3lCQUFNO3dCQUNILElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDM0U7aUJBQ0o7Z0JBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDckIsc0JBQXNCO29CQUN0QiwwQkFBMEI7b0JBQzFCLGlDQUFpQztvQkFDakMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTt3QkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDNUI7eUJBQU07d0JBQ0gsV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxPQUFPLENBQUM7d0JBQzlFLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFFMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztxQkFDcFI7aUJBQ0o7cUJBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDNUIsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTt3QkFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3FCQUN4QztpQkFDSjthQUNKO1lBQ0QsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsUUFBd0IsRUFBRSxFQUFFO1lBQzdCLElBQUksU0FBUyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDL0IsSUFBSSxLQUFVLENBQUM7WUFFZixJQUFJLFFBQVEsWUFBWSxZQUFZLEVBQUU7Z0JBQ2xDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLGlCQUFpQixJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDM0UsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWhFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzdFO2dCQUVELDBDQUEwQztnQkFDMUMsaUNBQWlDO2dCQUNqQyx3Q0FBd0M7Z0JBQ3hDLHFEQUFxRDtnQkFDckQsSUFBSTthQUNQO1lBRUQsT0FBTyxRQUFRLENBQUMsQ0FBQywyQ0FBMkM7UUFDaEUsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtJQUNMLENBQUM7O21IQS9GUSxxQkFBcUI7dUhBQXJCLHFCQUFxQixjQUhsQixNQUFNOzRGQUdULHFCQUFxQjtrQkFKakMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgSHR0cFJlcXVlc3QsXG4gICAgSHR0cEhhbmRsZXIsXG4gICAgSHR0cEV2ZW50LFxuICAgIEh0dHBJbnRlcmNlcHRvcixcbiAgICBIdHRwRXJyb3JSZXNwb25zZSxcbiAgICBIdHRwUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVsL3Jlc3BvbnNlLm1vZGVsJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdG9hc3RyLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEludGVyY2VwdG9yT25lU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogVG9hc3RyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvblNlcnZpY2U6IEFwcGxpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndG9rZW4nKTtcbiAgICAgICAgbGV0IHVzZXJJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndXNlcklEJyk7XG4gICAgICAgIGxldCByb290T3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ3Jvb3RPcmdJRCcpO1xuICAgICAgICBsZXQgYXBwbGljYXRpb25JRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnYXBwbGljYXRpb25JRCcpO1xuICAgICAgICBsZXQgYXBwbGljYXRpb25LZXlJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnYXBwbGljYXRpb25LZXlJRCcpO1xuICAgICAgICBsZXQgcmVkaXJlY3RVcmw6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgcGFnZVVybDogc3RyaW5nID0gJyc7XG4gICAgICAgIGxldCBza2lwQXV0aCA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3NraXBBdXRoJyk7XG4gICAgICAgIGxldCBza2lwU3VjY2Vzc1N0YXR1cyA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3NraXBTdWNjZXNzU3RhdHVzJyk7XG4gICAgICAgIGxldCBza2lwRXJyb3JTdGF0dXMgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdza2lwRXJyb3JTdGF0dXMnKTtcblxuICAgICAgICBpZiAoc2tpcEF1dGggPT0gJzEnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2tpcEF1dGgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCwgdXNlcklEOiBgJHt1c2VySUR9YCwgcm9vdE9yZ0lEOiBgJHtyb290T3JnSUR9YCwgYXBwbGljYXRpb25JRDogYCR7YXBwbGljYXRpb25JRH1gIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2F1dGggaW50ZXJjZXB0b3IgZXhjZXB0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZU0gPSBuZXcgUmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3Q6IGFueTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lwRXJyb3JTdGF0dXMgIT0gJzEnICYmIGVycm9yLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZU0gPSBlcnJvci5lcnJvcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgPSB0aGlzLnRvYXN0clNlcnZpY2UuZ2V0VG9hc3RTdGF0dXMocmVzcG9uc2VNLnN0YXR1cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZU0ubWVzc2FnZSAmJiByZXNwb25zZU0uc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdCh0b2FzdC50aXRsZSwgcmVzcG9uc2VNLm1lc3NhZ2UsIHRvYXN0LmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdHJTZXJ2aWNlLm9wZW5Ub2FzdCgnRXJyb3InLCAnU29tZXRoaW5nIHdlbnQgd3JvbmchJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDAwMSAtIEludmFsaWQgY3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNDAwMiAtIHVzZXIgaXMgaW5hY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQwMDMgLSBubyBhY2Nlc3MgaW4gYXBwIG9yIG9yZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlTS5lcnJvckNvZGUgPT0gNDAwMiB8fCByZXNwb25zZU0uZXJyb3JDb2RlID09IDQwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gbG9nb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsID0gdGhpcy5hcHBsaWNhdGlvblNlcnZpY2UuYXBwUmVkaXJlY3QoYXBwbGljYXRpb25LZXlJRCkgKyAnbG9naW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VVcmwgPSB0aGlzLnJvdXRlci51cmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dvdXQodGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdyZWRpcmVjdFVybCcpID8gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdyZWRpcmVjdFVybCcpIDogcmVkaXJlY3RVcmwsIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgncGFnZVVybCcpID8gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCdwYWdlVXJsJykgOiBwYWdlVXJsLCAnaW50ZXJjZXB0b3InLCBhcHBsaWNhdGlvbktleUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VNLmVycm9yQ29kZSA9PSA0MDAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5jbGVhclN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9uby1hY2Nlc3MnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKHJlc3BvbnNlOiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZU0gPSBuZXcgUmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9hc3Q6IGFueTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU0gPSByZXNwb25zZS5ib2R5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpcFN1Y2Nlc3NTdGF0dXMgIT0gJzEnICYmIHJlc3BvbnNlLmJvZHkuc3RhdHVzICYmIHJlc3BvbnNlLmJvZHkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgPSB0aGlzLnRvYXN0clNlcnZpY2UuZ2V0VG9hc3RTdGF0dXMocmVzcG9uc2UuYm9keS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0clNlcnZpY2Uub3BlblRvYXN0KHRvYXN0LnRpdGxlLCByZXNwb25zZU0ubWVzc2FnZSwgdG9hc3QuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTG9naWMgZm9yIGhhbmRsaW5nIHN1Y2Nlc3NmdWwgcmVzcG9uc2VzXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bCByZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7IC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugb3IgbW9kaWZpZWQgcmVzcG9uc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=