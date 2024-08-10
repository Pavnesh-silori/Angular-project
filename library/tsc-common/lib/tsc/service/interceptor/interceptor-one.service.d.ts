import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from "@library/storage-service";
import { ToastrService } from '@library/toastr-service';
import { ApplicationService } from '@library/application-service';
import { AuthenticationService } from '@library/authentication-service';
import * as i0 from "@angular/core";
export declare class InterceptorOneService implements HttpInterceptor {
    private router;
    private storageService;
    private toastrService;
    private applicationService;
    private authenticationService;
    constructor(router: Router, storageService: StorageService, toastrService: ToastrService, applicationService: ApplicationService, authenticationService: AuthenticationService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InterceptorOneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InterceptorOneService>;
}
