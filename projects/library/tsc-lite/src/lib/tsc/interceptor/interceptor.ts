import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

// tsc-library
import { StorageService } from "@library/storage-service";
// /tsc-library/

@Injectable()

export class Interceptor implements HttpInterceptor {

    constructor(
        private storageService: StorageService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let layoutID = this.storageService.getStorage('layoutID');

        request = request.clone({
            setHeaders: { layoutID: `${layoutID}` }
        });

        return next.handle(request).pipe(
        )
    }

}
