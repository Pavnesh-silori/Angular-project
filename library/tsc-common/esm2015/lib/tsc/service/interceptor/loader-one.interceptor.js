import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../component/loader/loader-one/loader-one.component";
export class LoaderOneInterceptor {
    constructor(loaderOneService) {
        this.loaderOneService = loaderOneService;
        this.httpCount = 0;
    }
    intercept(request, next) {
        let skipLoader = request.headers.get('skipLoader');
        if (skipLoader == 'YES') {
            // console.log('skipLoader');
        }
        else {
            this.httpCount++;
            this.loaderOneService.show();
            return next.handle(request).pipe(finalize(() => {
                this.httpCount--;
                if (this.httpCount == 0) {
                    this.loaderOneService.hide();
                    // console.log('return next');
                }
            }));
        }
        return next.handle(request).pipe(finalize(() => {
            // console.log('return skipLoader');
        }));
    }
}
LoaderOneInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor, deps: [{ token: i1.LoaderOneService }], target: i0.ɵɵFactoryTarget.Injectable });
LoaderOneInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LoaderOneInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoaderOneService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLW9uZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL2ludGVyY2VwdG9yL2xvYWRlci1vbmUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU0xQyxNQUFNLE9BQU8sb0JBQW9CO0lBRzdCLFlBQ1ksZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIOUMsY0FBUyxHQUFXLENBQUMsQ0FBQztJQUlsQixDQUFDO0lBRUwsU0FBUyxDQUFDLE9BQTZCLEVBQUUsSUFBaUI7UUFDdEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkQsSUFBSSxVQUFVLElBQUksS0FBSyxFQUFFO1lBQ3JCLDZCQUE2QjtTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QixRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUM3Qiw4QkFBOEI7aUJBQ2pDO1lBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUIsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNWLG9DQUFvQztRQUN4QyxDQUFDLENBQUMsQ0FDTCxDQUFBO0lBQ0wsQ0FBQzs7a0hBL0JRLG9CQUFvQjtzSEFBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBRmhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgSHR0cFJlcXVlc3QsXG4gICAgSHR0cEhhbmRsZXIsXG4gICAgSHR0cEV2ZW50LFxuICAgIEh0dHBJbnRlcmNlcHRvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTG9hZGVyT25lU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9sb2FkZXIvbG9hZGVyLW9uZS9sb2FkZXItb25lLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIExvYWRlck9uZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgICBodHRwQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2FkZXJPbmVTZXJ2aWNlOiBMb2FkZXJPbmVTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDx1bmtub3duPj4ge1xuICAgICAgICBsZXQgc2tpcExvYWRlciA9IHJlcXVlc3QuaGVhZGVycy5nZXQoJ3NraXBMb2FkZXInKTtcblxuICAgICAgICBpZiAoc2tpcExvYWRlciA9PSAnWUVTJykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NraXBMb2FkZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cENvdW50Kys7XG4gICAgICAgICAgICB0aGlzLmxvYWRlck9uZVNlcnZpY2Uuc2hvdygpO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmh0dHBDb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlck9uZVNlcnZpY2UuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JldHVybiBuZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmV0dXJuIHNraXBMb2FkZXInKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=