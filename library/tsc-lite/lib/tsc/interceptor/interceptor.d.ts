import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from "@library/storage-service";
import * as i0 from "@angular/core";
export declare class Interceptor implements HttpInterceptor {
    private storageService;
    constructor(storageService: StorageService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<Interceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<Interceptor>;
}
