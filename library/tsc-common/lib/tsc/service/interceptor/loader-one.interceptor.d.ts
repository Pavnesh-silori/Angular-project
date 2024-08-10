import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderOneService } from '../../component/loader/loader-one/loader-one.component';
import * as i0 from "@angular/core";
export declare class LoaderOneInterceptor implements HttpInterceptor {
    private loaderOneService;
    httpCount: number;
    constructor(loaderOneService: LoaderOneService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderOneInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderOneInterceptor>;
}
