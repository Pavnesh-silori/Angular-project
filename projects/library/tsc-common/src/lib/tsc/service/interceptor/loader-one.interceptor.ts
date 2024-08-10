import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderOneService } from '../../component/loader/loader-one/loader-one.component';

@Injectable()

export class LoaderOneInterceptor implements HttpInterceptor {
    httpCount: number = 0;

    constructor(
        private loaderOneService: LoaderOneService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let skipLoader = request.headers.get('skipLoader');

        if (skipLoader == 'YES') {
            // console.log('skipLoader');
        } else {
            this.httpCount++;
            this.loaderOneService.show();

            return next.handle(request).pipe(
                finalize(() => {
                    this.httpCount--;
                    if (this.httpCount == 0) {
                        this.loaderOneService.hide();
                        // console.log('return next');
                    }
                }),
            )
        }
        return next.handle(request).pipe(
            finalize(() => {
                // console.log('return skipLoader');
            })
        )
    }
}
