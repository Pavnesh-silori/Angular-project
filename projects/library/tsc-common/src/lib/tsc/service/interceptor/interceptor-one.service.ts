import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Response } from '../../model/response.model';

import { StorageService } from "@library/storage-service";
import { ToastrService } from '@library/toastr-service';
import { ApplicationService } from '@library/application-service';
import { AuthenticationService } from '@library/authentication-service';

@Injectable({
    providedIn: 'root'
})

export class InterceptorOneService implements HttpInterceptor {

    constructor(
        private router: Router,
        private storageService: StorageService,
        private toastrService: ToastrService,
        private applicationService: ApplicationService,
        private authenticationService: AuthenticationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.storageService.getStorage('token');
        let userID = this.storageService.getStorage('userID');
        let rootOrgID = this.storageService.getStorage('rootOrgID');
        let applicationID = this.storageService.getStorage('applicationID');
        let applicationKeyID = this.storageService.getStorage('applicationKeyID');
        let redirectUrl: string = '';
        let pageUrl: string = '';
        let skipAuth = request.headers.get('skipAuth');
        let skipSuccessStatus = request.headers.get('skipSuccessStatus');
        let skipErrorStatus = request.headers.get('skipErrorStatus');

        if (skipAuth == '1') {
            // console.log('skipAuth');
        } else {
            if (token) {
                request = request.clone({
                    setHeaders: { Authorization: `Bearer ${token}`, userID: `${userID}`, rootOrgID: `${rootOrgID}`, applicationID: `${applicationID}` }
                });
            } else {
                // alert('auth interceptor exception.');
            }
        }

        return next.handle(request).pipe(
            catchError((error) => {
                let responseM = new Response();
                let toast: any;

                if (error instanceof HttpErrorResponse) {
                    if (skipErrorStatus != '1' && error.error) {
                        responseM = error.error;

                        toast = this.toastrService.getToastStatus(responseM.status);

                        if (responseM.message && responseM.status) {
                            this.toastrService.openToast(toast.title, responseM.message, toast.color);
                        } else {
                            this.toastrService.openToast('Error', 'Something went wrong!', 'error');
                        }
                    }

                    if (error.status == 401) {
                        // 4001 - Invalid cred
                        // 4002 - user is inactive
                        // 4003 - no access in app or org
                        if (responseM.errorCode == 4002 || responseM.errorCode == 4001) {
                            console.log('no logout');
                        } else {
                            redirectUrl = this.applicationService.appRedirect(applicationKeyID) + 'login';
                            pageUrl = this.router.url;

                            this.authenticationService.logout(this.storageService.getStorage('redirectUrl') ? this.storageService.getStorage('redirectUrl') : redirectUrl, this.storageService.getStorage('pageUrl') ? this.storageService.getStorage('pageUrl') : pageUrl, 'interceptor', applicationKeyID);
                        }
                    } else if (error.status == 403) {
                        if (responseM.errorCode == 4003) {
                            this.storageService.clearStorage();
                            this.router.navigate(['/no-access']);
                        }
                    }
                }
                return throwError(error);
            }),
            map((response: HttpEvent<any>) => {
                let responseM = new Response();
                let toast: any;

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
            })
        )
    }
}
